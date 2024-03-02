import { Coinmaster, Item, sellPrice } from "kolmafia";
import { PriceResolver } from "./PriceResolver";

interface CoinmasterItem {
  coinmaster: Coinmaster;
  currency: Item;
  currencyCost: number;
  item: Item;
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
    for (const item of Item.all()) {
      if (!item.tradeable || item.gift || item.quest || item.seller == null) {
        continue;
      }

      const token = item.seller.item;

      if (token == Item.none) {
        continue;
      }

      const price = sellPrice(item.seller, item);

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
  }

  getHighestCoinmaster(currency: Item): CoinmasterItem {
    let highest: CoinmasterItem = null;

    for (const item of this.items) {
      if (item.currency != currency) {
        continue;
      }

      if (item.price == null) {
        item.price = this.prices.itemPrice(item.item, 1).price;
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
