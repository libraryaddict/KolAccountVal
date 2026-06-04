import { ItemPrice } from "../models/typings";
import { KoLItem } from "../api/supplierTypings";

export interface PriceVolunteer {
  isViable(): boolean;
  bulkResolve?(items: KoLItem[]): void;
  resolve(item: KoLItem): ItemPrice;
  loadLastState?(): void;
  stop?(): void;
}
