import { MallHistory } from "kol-mallhistory";
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
    forcePricing: PriceType = null
  ): ItemPrice {
    if (this.specialCase.has(item)) {
      return new ItemPrice(item, this.specialCase.get(item), PriceType.MALL, 0);
    }

    if (!item.tradeable) {
      return new ItemPrice(item, autosellPrice(item), PriceType.MALL, 0);
    }

    // If less than 2 weeks old, or less than 2m rough worth of them and less than 10k worth and less than 60 days old
    let histPrice = historicalPrice(item);

    if (histPrice > 0) {
      let stackWorth = histPrice * amount;
      let maxHistAge =
        histPrice < this.settings.cheapItemsWorth ||
        stackWorth < this.settings.cheapTotalsLessThan
          ? this.settings.cheapHistoricalAge
          : this.settings.maxHistoricalAge;

      let atMallMin =
        autosellPrice(item) > 0 &&
        Math.max(autosellPrice(item), 100) == histPrice;

      if (
        forcePricing == PriceType.HISTORICAL ||
        atMallMin ||
        historicalAge(item) < maxHistAge
      ) {
        return new ItemPrice(
          item,
          histPrice,
          PriceType.HISTORICAL,
          historicalAge(item)
        );
      }
    }

    if (forcePricing != PriceType.MALL) {
      let records = this.history.getMallRecords(
        item,
        this.settings.maxMallSalesAge
      );

      let soldRecently = records.getAmountSold(this.settings.maxMallSalesAge);

      if (soldRecently >= 1) {
        return new ItemPrice(
          item,
          this.history.getPriceSold(item, 14),
          PriceType.MALL_SALES,
          (Date.now() / 1000 - records.lastUpdated) / (60 * 60 * 24)
        );
      }
    }

    let lowestMall = mallPrice(item);

    if (ignoreFold) {
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

    return new ItemPrice(item, lowestMall, PriceType.MALL, 0);
  }
}
