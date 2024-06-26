import { MallHistory, MallRecords } from "kol-mallhistory";
import {
  autosellPrice,
  historicalAge,
  historicalPrice,
  mallPrice,
  print,
  printHtml,
  Item,
  fileToBuffer,
  toInt,
  getRelated,
} from "kolmafia";
import { PricingSettings } from "./AccountValSettings";

export enum PriceType {
  NEW_PRICES,
  HISTORICAL,
  MALL,
  MALL_SALES,
  AUTOSELL,
}

export class ItemPrice {
  item: Item;
  price: number;
  accuracy: PriceType;
  daysOutdated: number;
  volume: number;

  constructor(
    item: Item,
    price: number,
    accuracy: PriceType,
    daysOutdated: number,
    volume: number = -1
  ) {
    this.item = item;
    this.price = price;
    this.accuracy = accuracy;
    this.daysOutdated = daysOutdated;
    this.volume = volume;
  }
}

interface ItemPriceMap {
  updated: number;
  price: number;
  volume: number;
}

class NewPrices {
  prices: ItemPriceMap[];
  lastUpdated: number;

  isValid() {
    if (this.lastUpdated == null || this.prices == null) {
      return false;
    }

    // If it hasn't been updated in a week, then Irrat is ded
    if (this.lastUpdated + 7 * 24 * 60 * 60 < Date.now() / 1000) {
      return false;
    }

    return true;
  }

  load() {
    const buffer = fileToBuffer("irrats_item_prices.txt");

    if (buffer.length <= 10) {
      return;
    }

    this.prices = [];

    for (const spl of buffer.split(/[\n\r]+/)) {
      if (spl.startsWith("#")) {
        continue;
      }

      const spl2 = spl.split("\t");

      if (spl2.length == 2 && spl2[0] == "Last Updated:") {
        this.lastUpdated = parseInt(spl2[1]);
        continue;
      }

      if (spl2.length < 3) {
        continue;
      }

      const itemId = parseInt(spl2[0]);
      const age = parseInt(spl2[1]);
      const price = parseInt(spl2[2]);
      const volume = parseInt(spl2[3]);

      this.prices[itemId] = { price: price, updated: age, volume: volume };
    }
  }
}

export class PriceResolver {
  history: MallHistory;
  private specialCase: Map<Item, number> = new Map();
  private settings: PricingSettings;
  private newPrices: NewPrices;

  constructor(settings: PricingSettings) {
    this.settings = settings;
    this.newPrices = new NewPrices();

    if (!settings.oldPricing) {
      this.newPrices.load();
    }

    if (!this.newPrices.isValid()) {
      this.loadMallHistory();
    }

    this.fillSpecialCase();
  }

  loadMallHistory() {
    try {
      this.history = new (eval("require")(
        "scripts/utils/mallhistory.js"
      ).MallHistory)();
    } catch (e) {
      if (e != null && e.message != null && e.message.includes(" not found.")) {
        print(
          "A required library seems to be missing! This should've been installed automatically, try running in CLI:",
          "red"
        );
        printHtml(
          "<u color='gray'>git checkout libraryaddict/KolMallHistory release</u>"
        );
        print("");
      }

      throw e;
    }
  }

  private fillSpecialCase() {
    this.specialCase.set(Item.get("Meat Paste"), 10);
    this.specialCase.set(Item.get("Meat Stack"), 100);
    this.specialCase.set(Item.get("Dense meat stack"), 1000);
  }

  itemPrice(
    item: Item,
    amount: number,
    ignoreFold: boolean = false,
    forcePricing: PriceType = null,
    doSuperFast: boolean = false,
    doEstimates: boolean = false
  ): ItemPrice {
    if (!ignoreFold) {
      const foldables = Object.keys(getRelated(item, "fold"));

      if (foldables != null && foldables.length > 1) {
        const foldPrices = foldables.map((f) =>
          this.itemPrice(
            Item.get(f),
            amount,
            true,
            forcePricing,
            doSuperFast,
            doEstimates
          )
        );

        foldPrices.sort((f1, f2) => f1.price - f2.price);

        const compare = foldPrices.find((f) => f.item == item);

        for (const f of foldPrices) {
          if (f.daysOutdated > compare.daysOutdated * 3) {
            continue;
          }

          return f;
        }

        return foldPrices[0];
      }
    }

    if (this.specialCase.has(item)) {
      return new ItemPrice(item, this.specialCase.get(item), PriceType.MALL, 0);
    }

    if (!item.tradeable) {
      return new ItemPrice(item, autosellPrice(item), PriceType.AUTOSELL, 0);
    }

    if (this.newPrices.isValid()) {
      const price = this.newPrices.prices[toInt(item)];

      if (price != null) {
        const daysAge = Math.round(
          (Date.now() / 1000 - price.updated) / (60 * 60 * 24)
        );

        return new ItemPrice(
          item,
          price.price,
          PriceType.NEW_PRICES,
          daysAge,
          price.volume
        );
      }
    }

    if (this.history == null) {
      this.loadMallHistory();
    }

    const salesPricing = new MallHistoryPricing(
      this.settings,
      this.history,
      item,
      amount
    );
    const historyPricing = new HistoricalPricing(this.settings, item, amount);
    const mallPricing = new MallSalesPricing(this.settings, item, amount);
    let resolver: PriceVolunteer;

    if (forcePricing == PriceType.HISTORICAL) {
      resolver = historyPricing;
    } else if (forcePricing == PriceType.MALL) {
      resolver = mallPricing;
    } else if (forcePricing == PriceType.MALL_SALES) {
      resolver = salesPricing;
    } else {
      const viablePrices: PriceVolunteer[] = [
        salesPricing,
        historyPricing,
        mallPricing,
      ].filter((p) => p.isViable() && !p.isOutdated());

      viablePrices.sort((v1, v2) => {
        const p1 = v1.getPrice(true);
        const p2 = v2.getPrice(true);

        if (p1 == null || p2 == null || p1.price == p2.price) {
          return v1.getAge() - v2.getAge();
        }

        return p1.price - p2.price;
      });

      resolver = viablePrices.length > 0 ? viablePrices[0] : salesPricing;

      // If we're not doing sales, and the price is apparently worth more than 50m
      if (
        !doSuperFast &&
        resolver != salesPricing &&
        historicalPrice(item) > 50_000_000
      ) {
        // If we have no sale history on record, or the price diff is more than 50m
        if (
          salesPricing.getAge() == -1 ||
          Math.abs(salesPricing.getPrice(true).price - historicalPrice(item)) >
            50_000_000
        ) {
          resolver = salesPricing;
        }
      }
    }

    if (
      doEstimates &&
      historyPricing != resolver &&
      resolver.isOutdated() &&
      historicalAge(item) < 365 &&
      historicalPrice(item) <= Math.max(autosellPrice(item) * 3, 500)
    ) {
      return new ItemPrice(
        item,
        historicalPrice(item),
        PriceType.HISTORICAL,
        historicalAge(item)
      );
    }

    if (
      doEstimates &&
      (doSuperFast ? !resolver.isViable() : resolver.isOutdated())
    ) {
      return new ItemPrice(item, -1, resolver.getPriceType(), 0);
    }

    let price = resolver.getPrice();

    if (price == null) {
      price = mallPricing.getPrice();
    }

    return price;
  }
}

interface PriceVolunteer {
  /**
   * If this doesn't have enough data saved
   */
  isViable(): boolean;

  /**
   * If this is useful but out of date
   */
  isOutdated(): boolean;

  getAge(): number;

  getPrice(dontUpdate?: boolean): ItemPrice;

  getPriceType(): PriceType;
}

class MallHistoryPricing implements PriceVolunteer {
  private item: Item;
  private amount: number;
  private records: MallRecords;
  private settings: PricingSettings;
  private history: MallHistory;

  constructor(
    settings: PricingSettings,
    history: MallHistory,
    item: Item,
    amount: number
  ) {
    this.settings = settings;
    this.history = history;
    this.item = item;
    this.amount = amount;
    this.records = history.getMallRecords(this.item, 900, false);
  }

  isViable(): boolean {
    // If we have no records, or if we have records or last records check attempt was less than 30 days ago
    return this.records == null || this.records.records.length > 0;
  }

  isOutdated(): boolean {
    if (this.records == null) {
      return true;
    }

    const lastUpdated =
      (Date.now() / 1000 - this.records.lastUpdated) / (24 * 60 * 60);

    if (this.records.records.length == 0) {
      return lastUpdated > 30;
    }

    const last = this.records.records[this.records.records.length - 1];
    const histAge = Math.min(
      (Date.now() / 1000 - last.date) / (24 * 60 * 60),
      lastUpdated
    );

    const histPrice = last.meat;

    const days = this.settings.getMaxPriceAge(histPrice, this.amount);

    return histAge > days;
  }

  getAge(): number {
    if (this.records == null) {
      return -1;
    }

    const last = this.records.records[this.records.records.length - 1];

    if (last == null) {
      return -1;
    }

    const dateNow = Date.now() / 1000;

    return (dateNow - last.date) / (24 * 60 * 60);
  }

  getPrice(ignoreOutdated: boolean = false): ItemPrice {
    if (!ignoreOutdated && this.isOutdated()) {
      this.records = this.history.getMallRecords(this.item, 0.1, true);
    }

    const last = this.records.records[this.records.records.length - 1];

    if (last == null) {
      return null;
    }

    return new ItemPrice(
      this.item,
      last.meat,
      PriceType.MALL_SALES,
      this.getAge()
    );
  }

  getPriceType(): PriceType {
    return PriceType.MALL_SALES;
  }
}

class MallSalesPricing implements PriceVolunteer {
  private item: Item;
  private amount: number;
  private settings: PricingSettings;

  constructor(settings: PricingSettings, item: Item, amount: number) {
    this.settings = settings;
    this.item = item;
    this.amount = amount;
  }

  isViable(): boolean {
    return true;
  }

  isOutdated(): boolean {
    return true;
  }

  getAge(): number {
    return 0;
  }

  getPrice(): ItemPrice {
    return new ItemPrice(this.item, mallPrice(this.item), PriceType.MALL, 0);
  }

  getPriceType(): PriceType {
    return PriceType.MALL;
  }
}

class HistoricalPricing implements PriceVolunteer {
  private item: Item;
  private amount: number;
  private settings: PricingSettings;

  constructor(settings: PricingSettings, item: Item, amount: number) {
    this.settings = settings;
    this.item = item;
    this.amount = amount;
  }

  isViable(): boolean {
    return historicalPrice(this.item) > 0;
  }

  isOutdated(): boolean {
    const histPrice = historicalPrice(this.item);
    const histAge = historicalAge(this.item);

    const days = this.settings.getMaxPriceAge(histPrice, this.amount);

    return histAge > days;
  }

  getAge(): number {
    return historicalAge(this.item);
  }

  getPrice(): ItemPrice {
    const histPrice = historicalPrice(this.item);

    if (histPrice <= 0) {
      return new MallSalesPricing(
        this.settings,
        this.item,
        this.amount
      ).getPrice();
    }

    return new ItemPrice(
      this.item,
      historicalPrice(this.item),
      PriceType.HISTORICAL,
      historicalAge(this.item)
    );
  }

  getPriceType(): PriceType {
    return PriceType.HISTORICAL;
  }
}
