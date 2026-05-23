import { PricingSettings } from "../../settings/settings";
import { ItemPrice, PriceType } from "../../models/typings";
import { PriceVolunteer } from "../priceInterface";
import { KoLItem } from "../../api/supplierTypings";
import { kol } from "../../api/apiSupplier";

export interface ItemPriceMap {
  updated: number;
  price: number;
  volume: number;
  lastSoldAt: number;
}

export abstract class FlatfilePrices implements PriceVolunteer {
  prices: ItemPriceMap[];
  lastUpdated: number;
  settings: PricingSettings;

  constructor(settings: PricingSettings) {
    this.settings = settings;
  }

  bulkResolve(items: KoLItem[]): ItemPrice[] {
    return items.map((i) => this.resolve(i));
  }

  resolve(item: KoLItem): ItemPrice {
    const price = this.prices[kol.toInt(item)];

    if (price == null) {
      return null;
    }

    return new ItemPrice(
      item,
      price.price,
      PriceType.NEW_PRICES,
      Math.round((Date.now() / 1000 - price.updated) / (60 * 60 * 24)),
      price.volume,
    );
  }

  abstract isViable(): boolean;
  abstract loadDataFile(): string;
  abstract loadDataItem(line: string[]): [number, ItemPriceMap];

  load() {
    const buffer = this.loadDataFile();

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

      const result = this.loadDataItem(spl2);

      if (result == null) {
        continue;
      }

      this.prices[result[0]] = result[1];
    }
  }
}
