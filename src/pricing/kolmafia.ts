import { historicalAge, historicalPrice, Item } from "kolmafia";
import { ItemPrice, PriceType, PriceVolunteer } from "../types";

export class MallPricing implements PriceVolunteer {
  historical: HistoricalPricing = new HistoricalPricing();

  isViable(): boolean {
    return true;
  }

  bulkResolve(item: Item[]): ItemPrice[] {
    return item.map((i) => this.resolve(i));
  }

  resolve(item: Item): ItemPrice {
    return this.historical.resolve(item);
    //    return new ItemPrice(item, mallPrice(item), PriceType.MALL, 0);
  }
}

export class HistoricalPricing implements PriceVolunteer {
  isViable(): boolean {
    return true;
  }

  bulkResolve(item: Item[]): ItemPrice[] {
    return item.map((i) => this.resolve(i));
  }

  resolve(item: Item): ItemPrice {
    // TODO Some logic where it resolves using mall price if historical is outdated or missing. Use settings to filter.
    return new ItemPrice(
      item,
      historicalPrice(item),
      PriceType.HISTORICAL,
      historicalAge(item),
    );
  }
}
