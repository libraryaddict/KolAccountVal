import { ItemPrice } from "../models/typings";
import { KoLItem } from "../api/supplierTypings";

export interface PriceVolunteer {
  isViable(): boolean;
  bulkResolve(items: KoLItem[]): ItemPrice[];
  resolve(item: KoLItem): ItemPrice;
  load?(): void;
  stop?(): void;
}
