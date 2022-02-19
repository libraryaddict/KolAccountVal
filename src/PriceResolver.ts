import { MallHistory, MallRecords } from "kol-mallhistory";
import {
  autosellPrice,
  historicalAge,
  historicalPrice,
  mallPrice,
  getRelated,
  print,
  printHtml,
  Item,
} from "kolmafia";
import { PricingSettings } from "./AccountValSettings";

export enum PriceType {
  HISTORICAL,
  MALL,
  MALL_SALES,
}

export class ItemPrice {
  item: Item;
  price: number;
  accuracy: PriceType;
  daysOutdated: number;

  constructor(
    item: Item,
    price: number,
    accuracy: PriceType,
    daysOutdated: number
  ) {
    this.item = item;
    this.price = price;
    this.accuracy = accuracy;
    this.daysOutdated = daysOutdated;
  }
}

export class PriceResolver {
  history: MallHistory;
  private specialCase: Map<Item, number> = new Map();
  private settings: PricingSettings;

  constructor(settings: PricingSettings) {
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
          "<u color='gray'>svn checkout https://github.com/libraryaddict/KolMallHistory/branches/release/</u>"
        );
        print("");
      }

      throw e;
    }

    this.settings = settings;
    this.fillSpecialCase();
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
    if (this.specialCase.has(item)) {
      return new ItemPrice(item, this.specialCase.get(item), PriceType.MALL, 0);
    }

    if (!item.tradeable) {
      return new ItemPrice(item, autosellPrice(item), PriceType.MALL, 0);
    }

    let salesPricing = new MallHistoryPricing(
      this.settings,
      this.history,
      item,
      amount
    );
    let historyPricing = new HistoricalPricing(this.settings, item, amount);
    let mallPricing = new MallSalesPricing(this.settings, item, amount);
    let resolver: PriceVolunteer;

    if (forcePricing == PriceType.HISTORICAL) {
      resolver = historyPricing;
    } else if (forcePricing == PriceType.MALL) {
      resolver = mallPricing;
    } else if (forcePricing == PriceType.MALL_SALES) {
      resolver = salesPricing;
    } else {
      let viablePrices: PriceVolunteer[] = [
        salesPricing,
        historyPricing,
        mallPricing,
      ].filter((p) => p.isViable() && !p.isOutdated());

      resolver = viablePrices.length > 0 ? viablePrices[0] : salesPricing;
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

    /*if (ignoreFold) {
      return new ItemPrice(item, lowestMall, PriceType.MALL, 0);
    }

    for (let foldable of Object.keys(getRelated(item, "fold"))) {
      let folded = Item.get(foldable);

      let p = this.itemPrice(folded, amount, true, PriceType.MALL).price;

      if (p <= 0) {
        continue;
      }

      lowestMall = Math.min(p, lowestMall);
    }

    return new ItemPrice(item, lowestMall, PriceType.MALL, 0);*/
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

  getPrice(): ItemPrice;

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
    if (this.records == null || this.records.records.length == 0) {
      return true;
    }

    let last = this.records.records[this.records.records.length - 1];
    let histPrice = last.meat;
    let histAge =
      Math.min(
        Date.now() / 1000 - last.date,
        Date.now() / 1000 - this.records.lastUpdated
      ) /
      (24 * 60 * 60);

    let days = this.settings.getMaxPriceAge(histPrice, this.amount);

    return histAge > days;
  }

  getAge(): number {
    if (this.records == null) {
      return -1;
    }

    let last = this.records.records[this.records.records.length - 1];

    if (last == null) return -1;

    let histAge =
      Math.min(
        Date.now() / 1000 - last.date,
        Date.now() / 1000 - this.records.lastUpdated
      ) /
      (24 * 60 * 60);

    return histAge / (24 * 60 * 60);
  }

  getPrice(): ItemPrice {
    if (this.isOutdated()) {
      this.records = this.history.getMallRecords(this.item, 0.1, true);
    }

    let last = this.records.records[this.records.records.length - 1];

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
    let histPrice = historicalPrice(this.item);
    let histAge = historicalAge(this.item);

    let days = this.settings.getMaxPriceAge(histPrice, this.amount);

    return histAge > days;
  }

  getAge(): number {
    return historicalAge(this.item);
  }

  getPrice(): ItemPrice {
    let histPrice = historicalPrice(this.item);

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
