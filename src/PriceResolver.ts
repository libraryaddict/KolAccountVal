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
  visitUrl
} from "kolmafia";
import { PricingSettings } from "./AccountValSettings";
import { AccValTiming } from "./AccountValTimings";

export enum PriceType {
  NEW_PRICES,
  HISTORICAL,
  MALL,
  MALL_SALES,
  AUTOSELL
}

export class ItemPrice {
  item: Item;
  price: number;
  price2: number;
  accuracy: PriceType;
  daysOutdated: number;
  volume: number;

  constructor(
    item: Item,
    price: number,
    accuracy: PriceType,
    daysOutdated: number,
    volume: number = -1,
    price2: number = -1
  ) {
    this.item = item;
    this.price = price;
    this.accuracy = accuracy;
    this.daysOutdated = daysOutdated;
    this.volume = volume;
    this.price2 = price2;
  }
}

interface ItemPriceMap {
  updated: number;
  price: number;
  volume: number;
  lastSoldAt: number;
}

class NewPrices {
  prices: ItemPriceMap[];
  lastUpdated: number;
  ofThePast: boolean = false;
  settings: PricingSettings;

  constructor(settings: PricingSettings) {
    this.settings = settings;
  }

  isValid() {
    if (this.prices == null) {
      return false;
    }

    if (this.ofThePast) {
      return true;
    }

    if (this.lastUpdated == null) {
      return false;
    }

    // If it hasn't been updated in a week, then Irrat is ded
    if (this.lastUpdated + 7 * 24 * 60 * 60 < Date.now() / 1000) {
      return false;
    }

    return true;
  }

  getData(): string {
    const toFetch = this.settings.dateToFetch;

    if (toFetch == null) {
      return fileToBuffer("irrats_item_prices.txt");
    }

    let finalDateString: string;
    const minDate = new Date(2023, 7, 23); // August is month 7 (0-indexed)
    minDate.setHours(0, 0, 0, 0); // Normalize to midnight for accurate comparison

    const absoluteDateRegex = /^\d{1,2}[-/]\d{1,2}[-/]\d{4}$/;

    if (absoluteDateRegex.test(toFetch)) {
      const [day, month, year] = toFetch.split(/[-/]/).map(Number);
      const parsedDate = new Date(year, month - 1, day);
      parsedDate.setHours(0, 0, 0, 0);

      // Verify that the created date is valid
      if (
        parsedDate.getFullYear() !== year ||
        parsedDate.getMonth() !== month - 1 ||
        parsedDate.getDate() !== day
      ) {
        throw new Error(
          `Invalid date provided: ${toFetch} resolved to ${parsedDate.getDate()}-${
            parsedDate.getMonth() + 1
          }-${parsedDate.getFullYear()}.`
        );
      }

      if (parsedDate < minDate) {
        throw new Error(`Date ${toFetch} cannot be older than 23-08-2023.`);
      }

      finalDateString = toFetch;
    } else {
      // Handle relative date format like '1d2m3y'
      const dMatch = toFetch.match(/(\d+)d(?:ays?)?/);
      const mMatch = toFetch.match(/(\d+)m(?:onths?)?/);
      const yMatch = toFetch.match(/(\d+)y(?:ears?)?/);

      const days = dMatch ? parseInt(dMatch[1], 10) : 0;
      const months = mMatch ? parseInt(mMatch[1], 10) : 0;
      const years = yMatch ? parseInt(yMatch[1], 10) : 0;

      // Validate that the entire string consists only of relative times
      const consumedLength =
        (dMatch?.[0].length ?? 0) +
        (mMatch?.[0].length ?? 0) +
        (yMatch?.[0].length ?? 0);

      if (consumedLength !== toFetch.length || consumedLength === 0) {
        throw new Error(
          `Invalid date format for 'dateToFetch': "${toFetch}". Please use 'DD-MM-YYYY' or a relative format like '1d2m3y'.`
        );
      }

      let targetDate = new Date();
      targetDate.setDate(targetDate.getDate() - days);
      targetDate.setMonth(targetDate.getMonth() - months);
      targetDate.setFullYear(targetDate.getFullYear() - years);

      // Cap the date if it's older than the allowed date
      if (targetDate < minDate) {
        targetDate = minDate;
      }

      // Format the calculated date into DD-MM-YYYY
      const finalDay = String(targetDate.getDate()).padStart(2, "0");
      const finalMonth = String(targetDate.getMonth() + 1).padStart(2, "0");
      const finalYear = targetDate.getFullYear();
      finalDateString = `${finalDay}-${finalMonth}-${finalYear}`;
    }

    const responseText: string = visitUrl(
      `https://kolprices.lib.co.nz/file/${finalDateString}`
    );

    if (!responseText.startsWith("Last Updated:")) {
      if (responseText.length > 200) {
        throw new Error("Received an unexpected response from the server.");
      } else {
        throw new Error(responseText);
      }
    }

    print(`Now resolving prices with date: ${finalDateString}`, "blue");
    this.ofThePast = true;

    return responseText;
  }

  load() {
    const buffer = this.getData();

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
      const volume = spl2[3] ? parseInt(spl2[3]) : -1;
      const lastSoldAt = spl2[4] ? parseInt(spl2[4]) : -1;

      this.prices[itemId] = {
        price: price,
        updated: age,
        volume: volume,
        lastSoldAt: lastSoldAt
      };
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
    this.newPrices = new NewPrices(settings);

    if (!settings.oldPricing) {
      this.newPrices.load();
    }

    if (!this.newPrices.isValid()) {
      this.getMallHistory();
    }

    this.fillSpecialCase();
  }

  getMallHistory() {
    if (this.history == null) {
      this.loadMallHistory();
    }

    return this.history;
  }

  loadMallHistory() {
    // I want it in red so its obvious when its being used
    AccValTiming.start("<font color=red>Load Mall History</font>");

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
    } finally {
      AccValTiming.stop("<font color=red>Load Mall History</font>");
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
      AccValTiming.start("Check Foldable", true);

      try {
        const foldables = Object.keys(getRelated(item, "fold"));

        if (foldables != null && foldables.length > 1) {
          AccValTiming.start("Deeper Foldable Check", true);

          try {
            const foldPrices = foldables
              .map((f) =>
                this.itemPrice(
                  Item.get(f),
                  amount,
                  true,
                  forcePricing,
                  doSuperFast,
                  doEstimates
                )
              )
              .filter((p) => p != null);

            foldPrices.sort((f1, f2) =>
              f1.item.tradeable != f2.item.tradeable
                ? f1.item.tradeable
                  ? -1
                  : 1
                : f1.price - f2.price
            );

            const compare = foldPrices.find((f) => f.item == item);

            for (const f of foldPrices) {
              if (f.daysOutdated > compare.daysOutdated * 3) {
                continue;
              }

              return f;
            }

            return foldPrices[0];
          } finally {
            AccValTiming.stop("Deeper Foldable Check");
          }
        }
      } finally {
        AccValTiming.stop("Check Foldable");
      }
    }

    AccValTiming.start("Check Pricing Misc", true);

    try {
      if (this.specialCase.has(item)) {
        return new ItemPrice(
          item,
          this.specialCase.get(item),
          PriceType.MALL,
          0
        );
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
            price.volume,
            price.lastSoldAt
          );
        } else if (this.newPrices.ofThePast) {
          return null;
        }
      }
    } finally {
      AccValTiming.stop("Check Pricing Misc");
    }

    AccValTiming.start("Create Price Resolver", true);
    const oldMallHistoryPricing = new MallHistoryPricing(
      this,
      this.settings,
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
      resolver = oldMallHistoryPricing;
    } else {
      const viablePrices: PriceVolunteer[] = [
        oldMallHistoryPricing,
        historyPricing,
        mallPricing
      ].filter((p) => p.isViable() && !p.isOutdated());

      viablePrices.sort((v1, v2) => {
        const p1 = v1.getPrice(true);
        const p2 = v2.getPrice(true);

        if (p1 == null || p2 == null || p1.price == p2.price) {
          return v1.getAge() - v2.getAge();
        }

        return p1.price - p2.price;
      });

      resolver =
        viablePrices.length > 0 ? viablePrices[0] : oldMallHistoryPricing;

      // If we're not doing sales, and the price is apparently worth more than 50m
      if (
        !doSuperFast &&
        resolver != oldMallHistoryPricing &&
        historicalPrice(item) > 50_000_000
      ) {
        // If we have no sale history on record, or the price diff is more than 50m
        if (
          oldMallHistoryPricing.getAge() == -1 ||
          Math.abs(
            oldMallHistoryPricing.getPrice(true).price - historicalPrice(item)
          ) > 50_000_000
        ) {
          resolver = oldMallHistoryPricing;
        }
      }
    }

    AccValTiming.stop("Create Price Resolver");

    AccValTiming.start("Run Pricing Checks", true);

    try {
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
    } finally {
      AccValTiming.stop("Run Pricing Checks");
    }

    AccValTiming.start("Run Final Pricing Check", true);

    try {
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
    } finally {
      AccValTiming.stop("Run Final Pricing Check");
    }
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
  private newPrices: PriceResolver;
  private attemptedToLoadRecords: boolean = false;

  constructor(
    newPrices: PriceResolver,
    settings: PricingSettings,
    item: Item,
    amount: number
  ) {
    this.newPrices = newPrices;
    this.settings = settings;
    this.item = item;
    this.amount = amount;
  }

  private getRecords(): MallRecords {
    if (this.item.tradeable && !this.attemptedToLoadRecords) {
      this.attemptedToLoadRecords = true;
      this.records = this.newPrices
        .getMallHistory()
        .getMallRecords(this.item, 900, false);
    }

    return this.records;
  }

  isViable(): boolean {
    // If we have no records, or if we have records or last records check attempt was less than 30 days ago
    return this.getRecords() == null || this.getRecords().records.length > 0;
  }

  isOutdated(): boolean {
    if (this.getRecords() == null) {
      return true;
    }

    const lastUpdated =
      (Date.now() / 1000 - this.getRecords().lastUpdated) / (24 * 60 * 60);

    if (this.getRecords().records.length == 0) {
      return lastUpdated > 30;
    }

    const last =
      this.getRecords().records[this.getRecords().records.length - 1];
    const histAge = Math.min(
      (Date.now() / 1000 - last.date) / (24 * 60 * 60),
      lastUpdated
    );

    const histPrice = last.meat;

    const days = this.settings.getMaxPriceAge(histPrice, this.amount);

    return histAge > days;
  }

  getAge(): number {
    if (this.getRecords() == null) {
      return -1;
    }

    const last =
      this.getRecords().records[this.getRecords().records.length - 1];

    if (last == null) {
      return -1;
    }

    const dateNow = Date.now() / 1000;

    return (dateNow - last.date) / (24 * 60 * 60);
  }

  getPrice(ignoreOutdated: boolean = false): ItemPrice {
    if (!ignoreOutdated && this.item.tradeable && this.isOutdated()) {
      this.records = this.newPrices
        .getMallHistory()
        .getMallRecords(this.item, 0.1, true);
    }

    const last =
      this.getRecords().records[this.getRecords().records.length - 1];

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
