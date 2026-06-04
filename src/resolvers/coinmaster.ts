import { provider } from "../api/apiSupplier";
import { KoLCoinmaster, KoLItem } from "../api/supplierTypings";
import { PriceResolver } from "../pricing/priceResolver";

interface CoinmasterItem {
  coinmaster: KoLCoinmaster;
  currency: KoLItem;
  currencyCost: number;
  item: KoLItem;
  price?: number;
  priceEach?: number;
}

export class CoinmasterResolver {
  items: CoinmasterItem[] = [];
  prices: PriceResolver;

  constructor(prices: PriceResolver) {
    this.prices = prices;
  }

  load() {
    for (const item of KoLItem.all()) {
      if (!item.tradeable || item.gift || item.quest || item.seller == null) {
        continue;
      }

      const token = item.seller.item;

      if (token == KoLItem.none) {
        continue;
      }

      const price = provider().sellPrice(item.seller, item);

      if (price <= 0) {
        continue;
      }

      this.items.push({
        item: item,
        coinmaster: item.seller,
        currencyCost: price,
        currency: token,
      });
    }

    this.prices.bulkLoad(this.items.map((i) => i.item));
  }

  getHighestCoinmaster(currency: KoLItem): CoinmasterItem {
    let highest: CoinmasterItem = null;

    for (const item of this.items) {
      if (item.currency != currency) {
        continue;
      }

      if (item.price == null) {
        const itemPrice = this.prices.itemPrice(item.item);

        if (itemPrice == null) {
          return null;
        }

        item.price = itemPrice.price;
        item.priceEach = item.price / item.currencyCost;
      }

      if (highest != null && highest.priceEach > item.priceEach) {
        continue;
      }

      highest = item;
    }

    return highest;
  }
}
