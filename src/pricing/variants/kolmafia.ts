import { kol } from "../../api/apiSupplier";
import { ItemPrice, PriceType } from "../../models/typings";
import { PriceVolunteer } from "../priceInterface";
import { KoLItem } from "../../api/supplierTypings";

export class MallPricing implements PriceVolunteer {
  historical: HistoricalPricing = new HistoricalPricing();

  isViable(): boolean {
    return true;
  }

  bulkResolve(item: KoLItem[]): ItemPrice[] {
    return item.map((i) => this.resolve(i));
  }

  resolve(item: KoLItem): ItemPrice {
    return this.historical.resolve(item);
  }
}

export class HistoricalPricing implements PriceVolunteer {
  isViable(): boolean {
    return true;
  }

  bulkResolve(item: KoLItem[]): ItemPrice[] {
    return item.map((i) => this.resolve(i));
  }

  resolve(item: KoLItem): ItemPrice {
    return new ItemPrice(
      item,
      kol.historicalPrice(item),
      PriceType.HISTORICAL,
      kol.historicalAge(item),
    );
  }
}
