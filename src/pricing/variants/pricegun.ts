import { kol } from "../../api/apiSupplier";
import { ItemPrice, PriceType } from "../../models/typings";
import { PriceVolunteer } from "../priceInterface";
import { KoLItem } from "../../api/supplierTypings";

type PricegunItem = {
  value: number;
  volume: number;
  dateTime: number;
  itemId: number;
  retrieved: number;
};

export class PricegunResolver implements PriceVolunteer {
  items: Map<number, PricegunItem> = new Map();

  load(): void {
    this.items.clear();
    const buffer = kol.retrieveCache("pricegun_prices.txt", "large_persist");

    if (!buffer) {
      return;
    }

    const cutoff = Math.floor(Date.now() / 1000) - 24 * 60 * 60;

    try {
      for (const item of JSON.parse(buffer)) {
        const value =
          typeof item.value === "number"
            ? item.value
            : parseFloat(item.value?.__decimal__ ?? "0");

        if (item.retrieved >= cutoff) {
          this.items.set(item.itemId, { ...item, value });
        }
      }
    } catch {}
  }

  stop(): void {
    const cutoff = Math.floor(Date.now() / 1000) - 23 * 60 * 60;
    kol.storeCache(
      "pricegun_prices.txt",
      JSON.stringify(
        [...this.items.values()].filter((i) => i.retrieved > cutoff),
      ),
      "large_persist",
    );
  }

  private parseValue(item: any): number {
    return typeof item.value === "number"
      ? item.value
      : parseFloat(item.value?.__decimal__ ?? "0");
  }

  private loadItemFromApi(item: any) {
    this.items.set(item.itemId, {
      itemId: item.itemId,
      value: this.parseValue(item),
      volume: item.volume,
      dateTime: item.dateTime ?? 0,
      retrieved: Math.floor(Date.now() / 1000),
    });
  }

  bulkResolve(items: KoLItem[]): ItemPrice[] {
    const missing = items.filter((i) => !this.items.has(i.id));

    if (missing.length) {
      this.fetch(missing);
    }

    const now = Math.floor(Date.now() / 1000);

    return items
      .map((i) => {
        const price = this.items.get(i.id);

        if (!price || price.volume < 0) {
          return null;
        }

        return new ItemPrice(
          i,
          Math.round(price.value),
          PriceType.NEW_PRICES,
          now - price.dateTime,
          price.volume,
        );
      })
      .filter((p): p is ItemPrice => p !== null);
  }

  private fetch(items: KoLItem[]) {
    const MAX_AMOUNT = 500;
    const now = Math.floor(Date.now() / 1000);

    // Ensure at least one result
    if (items.length + 3 < MAX_AMOUNT && !items.find((i) => i.id === 1)) {
      items.push(KoLItem.get(1));
    }

    const totalLength = items.length;

    for (let start = 0; start < items.length; start += MAX_AMOUNT) {
      const batch = items.slice(start, start + MAX_AMOUNT);

      try {
        const url = `https://pricegun.loathers.net/api/${batch.map((i) => i.id).join(",")}`;
        const response = JSON.parse(kol.visitUrl(url));
        const parsed = batch.length === 1 ? [response] : response;

        for (const item of parsed) {
          if (item.itemId !== 1) {
            this.loadItemFromApi(item);
          }
        }

        for (const i of batch) {
          const id = i.id;

          if (!this.items.has(id)) {
            this.items.set(id, {
              itemId: id,
              value: 0,
              volume: -1,
              dateTime: 0,
              retrieved: now,
            });
          }
        }
      } catch {
        for (const i of batch) {
          const id = i.id;
          this.items.set(id, {
            itemId: id,
            value: 0,
            volume: -1,
            dateTime: 0,
            retrieved: now,
          });
        }
      }

      kol.print(
        `Pricegun progress: ${totalLength - items.length} / ${totalLength} (+${batch.length})`,
      );
    }
  }

  resolve(item: KoLItem): ItemPrice {
    return this.bulkResolve([item])[0];
  }

  isViable(): boolean {
    return true;
  }
}
