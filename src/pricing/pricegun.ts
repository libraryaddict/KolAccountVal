import { bufferToFile, fileToBuffer, Item, print, visitUrl } from "kolmafia";
import { ItemPrice, PriceType, PriceVolunteer } from "../types";

type PricegunItem = {
  value: number;
  volume: number;
  date?: string;
  dateTime: number; // Injected by us
  itemId: number;
  retrieved: number;
};

export class PricegunResolver implements PriceVolunteer {
  items: PricegunItem[];

  load(): void {
    this.items = [];

    const buffer = fileToBuffer("pricegun_prices.txt");

    if (buffer.length == 0) {
      return;
    }

    const cutoff = Date.now() / 1000 - 24 * 60 * 60;

    for (const item of JSON.parse(buffer)) {
      if (item.retrieved < cutoff) {
        continue;
      }

      this.items[item.itemId] = item;
    }
  }

  stop(): void {
    if (this.items == null) {
      return;
    }

    const cutoff = Date.now() / 1000 - 23 * 60 * 60;

    bufferToFile(
      JSON.stringify(this.items.filter((i) => i && i.retrieved > cutoff)),
      "pricegun_prices.txt",
    );
  }

  loadItemFromApi(item: PricegunItem) {
    this.items[item.itemId] = {
      itemId: item.itemId,
      value: item.value,
      dateTime: Math.round(Date.parse(item.date) / 1000),
      volume: item.volume,
      retrieved: Math.round(Date.now() / 1000),
    };
  }

  bulkResolve(items: Item[]): ItemPrice[] {
    const filtered = items.filter((i) => this.items[i.id] === undefined);

    if (filtered.length > 0) {
      this.fetch(filtered);
    }

    const now = Math.round(Date.now() / 1000);

    return items.map((i) => {
      const price = this.items[i.id];

      if (price == null || price.volume < 0) {
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

  fetch(items: Item[]) {
    const MAX_AMOUNT = 500;

    // If more than X, recall this method but with it chunked
    if (items.length > MAX_AMOUNT) {
      // We try to have every request take the same length of time
      const amountInEachReq = Math.ceil(
        items.length / Math.ceil(items.length / MAX_AMOUNT),
      );

      for (let i = 0; i < items.length; i += amountInEachReq) {
        const sub = items.slice(i, Math.min(items.length, i + amountInEachReq));

        this.fetch(sub);
      }

      return;
    }

    let injectedUnwantedItem = false;

    if (items.length + 3 < MAX_AMOUNT && items.find((i) => i.id == 1) == null) {
      items.push(Item.get(1));
      injectedUnwantedItem = true;
    }

    print(`Fetching ${items.length} prices from pricegun.`);

    try {
      const page = visitUrl(
        `https://pricegun.loathers.net/api/${items.map((i) => i.id).join(",")}`,
      );

      if (items.length == 1) {
        this.loadItemFromApi(JSON.parse(page));
      } else {
        for (const item of JSON.parse(page)) {
          if (injectedUnwantedItem && item.itemId == 1) {
            continue;
          }

          this.loadItemFromApi(item);
        }
      }

      items.forEach(
        (i) =>
          (this.items[i.id] = this.items[i.id] ?? {
            itemId: i.id,
            value: 0,
            volume: -1,
            retrieved: Math.round(Date.now() / 1000),
            dateTime: 0,
          }),
      );
    } catch (e) {
      items.forEach(
        (i) =>
          (this.items[i.id] = {
            itemId: i.id,
            value: 0,
            volume: -1,
            retrieved: Math.round(Date.now() / 1000),
            dateTime: 0,
          }),
      );
    }
  }

  isViable(): boolean {
    return true;
  }

  resolve(item: Item): ItemPrice {
    return this.bulkResolve([item])[0];
  }
}
