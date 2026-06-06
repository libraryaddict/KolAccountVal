import { provider } from "../../api/apiSupplier";
import { ItemPrice, PriceType } from "../../models/typings";
import { PriceVolunteer } from "../priceInterface";
import { KoLItem } from "../../api/supplierTypings";
import { AccountValSettings } from "../../settings/settings";

type PricegunItem = {
  value: number;
  volume: number;
  dateTime: number;
  itemId: number;
  retrieved: number;
};

export class PricegunResolver implements PriceVolunteer {
  items: Map<number, PricegunItem> = new Map();

  constructor(private settings: AccountValSettings) {}

  loadLastState(): void {
    this.items.clear();
    const buffer = provider().retrieveCache(
      "pricegun_prices.txt",
      "large_persist",
    );

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
    provider().storeCache(
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

    return items.map((i) => {
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
    });
  }

  private fetch(items: KoLItem[]) {
    const MAX_AMOUNT = this.settings.pricegunBatchSize;
    const now = Math.floor(Date.now() / 1000);

    for (let start = 0; start < items.length; start += MAX_AMOUNT) {
      const batch = items.slice(
        start,
        Math.min(start + MAX_AMOUNT, items.length),
      );

      provider().print(
        `Pricegun progress: ${start + batch.length} / ${items.length}`,
      );

      // We don't want pricegun to error because it doesn't have a single resolved price
      const ignoredItem =
        batch.length + 3 < MAX_AMOUNT && !batch.some((b) => b.id === 1);

      if (ignoredItem) {
        batch.push(KoLItem.get(1));
      }

      try {
        const url = `https://pricegun.loathers.net/api/${batch.map((i) => i.id).join(",")}`;
        const response = JSON.parse(provider().visitUrl(url));
        const parsed = batch.length === 1 ? [response] : response;

        for (const item of parsed) {
          if (ignoredItem && item.itemId === 1) {
            continue;
          }

          this.loadItemFromApi(item);
        }

        for (const i of batch) {
          const id = i.id;

          if ((ignoredItem && id === 1) || this.items.has(id)) {
            continue;
          }

          this.items.set(id, {
            itemId: id,
            value: 0,
            volume: -1,
            dateTime: 0,
            retrieved: now,
          });
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
    }
  }

  resolve(item: KoLItem): ItemPrice {
    return this.bulkResolve([item])[1];
  }

  isViable(): boolean {
    return true;
  }
}
