import {
  abort,
  autosellPrice,
  closetAmount,
  displayAmount,
  equippedAmount,
  getRevision,
  getVersion,
  getWorkshed,
  isCoinmasterItem,
  Item,
  itemAmount,
  myClosetMeat,
  myMeat,
  myStorageMeat,
  print,
  printHtml,
  shopAmount,
  shopPrice,
  stashAmount,
  storageAmount,
  toInt,
  toJson,
} from "kolmafia";
import { ItemResolver } from "./ItemResolver";
import { ItemPrice, PriceResolver, PriceType } from "./PriceResolver";
import {
  AccountValSettings,
  FieldType,
  PricingSettings,
  SortBy,
} from "./AccountValSettings";
import { FetchFromPage, StoreItem } from "./PageResolver";
import { AccountValUtils } from "./AccountValUtils";

export enum ItemStatus {
  BOUND,

  FAMILIAR,

  IN_USE,

  SHOP_WORTH,
}

export class ValItem {
  name: string;
  tradeableItem: Item;
  bound: ItemStatus;
  shopWorth: number;

  constructor(item: Item, name: string = item.name, bound?: ItemStatus) {
    this.name = name;
    this.tradeableItem = item;
    this.bound = bound;
  }

  getBound(): string {
    if (this.bound == ItemStatus.BOUND) {
      return "Bound";
    } else if (this.bound == ItemStatus.FAMILIAR) {
      return "Familiar";
    } else if (this.bound == ItemStatus.IN_USE) {
      return "In Use";
    }

    return null;
  }

  isBound(): boolean {
    return this.bound == ItemStatus.BOUND || this.bound == ItemStatus.FAMILIAR;
  }
}

export class AccountValLogic {
  ownedItems: Map<ValItem, number> = new Map();
  resolver: ItemResolver = new ItemResolver();
  priceResolver: PriceResolver;
  prices: [ValItem, ItemPrice][] = [];
  private settings: AccountValSettings;
  private jsFilter: (item: Item, amount: number) => boolean;

  constructor(settings: AccountValSettings, priceSettings: PricingSettings) {
    this.settings = settings;
    this.priceResolver = new PriceResolver(priceSettings);
  }

  addItem(item: ValItem, count: number = 1) {
    this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
  }

  loadPageItems() {
    let pager = new FetchFromPage();

    if (this.settings.fetchShop) {
      let items = pager.getStore(this.settings.playerId);

      items.forEach((i) => {
        let item = new ValItem(i.item);

        if (this.settings.shopWorth) {
          item.bound = ItemStatus.SHOP_WORTH;
          item.shopWorth = i.price;
        }

        this.addItem(item, i.amount);
      });
    }

    if (this.settings.fetchDisplaycase) {
      let items = pager.getDisplaycase(this.settings.playerId);

      items.forEach((v, k) => {
        this.addItem(new ValItem(k), v);
      });
    }

    this.resolveNoTrades();
  }

  loadJsFilter() {
    if (this.settings.javascriptFilter == "") {
      return;
    }
    print(
      "JS Filter has been set to: " + this.settings.javascriptFilter,
      "gray"
    );

    try {
      this.jsFilter = eval(this.settings.javascriptFilter);
    } catch (e) {
      print("Invalid jsfilter provided! Error as follows:", "red");
      print();
      throw e;
    }
  }

  loadItems() {
    this.loadJsFilter();

    if (this.settings.playerId > 0) {
      this.loadPageItems();
      return;
    }

    let famItems: Map<Item, number> = this.resolver.resolveFamiliarItems();

    for (let item of Item.all()) {
      let amount = 0;

      if (this.settings.fetchCloset) {
        amount += closetAmount(item);
      }

      if (this.settings.fetchInventory) {
        amount += equippedAmount(item) + itemAmount(item);

        if (famItems.has(item)) {
          amount += famItems.get(item);
        }
      }

      if (this.settings.fetchStorage) {
        amount += storageAmount(item);
      }

      if (this.settings.fetchDisplaycase) {
        amount += displayAmount(item);
      }

      if (this.settings.fetchClan) {
        amount += stashAmount(item);
      }

      if (this.settings.fetchShop) {
        if (this.settings.shopWorth && shopAmount(item) > 0) {
          let i = new ValItem(item);
          i.bound = ItemStatus.SHOP_WORTH;
          i.shopWorth = shopPrice(item);

          this.ownedItems.set(i, shopAmount(item));
          continue;
        } else {
          amount += shopAmount(item);
        }
      }

      if (amount == 0) {
        continue;
      }

      this.ownedItems.set(new ValItem(item), amount);
    }

    if (this.settings.doFamiliars) {
      this.resolver.resolveFamiliars(this.ownedItems);
    }

    // Check our current workshed
    if (this.settings.fetchingEverywhereish) {
      if (this.settings.doBound || this.settings.doTradeables) {
        let i = getWorkshed();

        if (i != null && i != Item.get("None")) {
          if (
            i.tradeable ? this.settings.doTradeables : this.settings.doBound
          ) {
            this.addItem(new ValItem(i, i.name, ItemStatus.IN_USE));
          }
        }
      }
    }

    if (this.settings.doBound) {
      for (let item of this.resolver.getUrledItems()) {
        if (
          item[0].tradeable &&
          (item[1] == ItemStatus.FAMILIAR || item[1] != ItemStatus.BOUND)
            ? !this.settings.doTradeables
            : !this.settings.doBound
        ) {
          continue;
        }

        this.addItem(new ValItem(item[0], item[0].name, item[1]));
      }
    }

    this.resolveNoTrades();
  }

  private resolveNoTrades() {
    let copy: Map<ValItem, number> = new Map();

    this.ownedItems.forEach((v, k) => {
      copy.set(k, v);
    });

    if (this.settings.doBound) {
      this.resolver.resolveBoundToTradeables(copy, this.ownedItems);
    }

    for (let item of this.ownedItems.keys()) {
      if (
        this.jsFilter != null &&
        !this.jsFilter(item.tradeableItem, this.ownedItems.get(item))
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      // If item can't be resolved to a price at all
      if (
        !item.isBound() &&
        (!item.tradeableItem.tradeable || item.tradeableItem.gift) &&
        autosellPrice(item.tradeableItem) == 0
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      if (this.ownedItems.get(item) < this.settings.minimumAmount) {
        this.ownedItems.delete(item);
        continue;
      }

      // If we're not doing bound items, and this is a bound item..
      if (!this.settings.doBound && item.isBound()) {
        this.ownedItems.delete(item);
        continue;
      }

      // If we're not doing familiars and this is a familiar
      if (!this.settings.doFamiliars && item.bound == ItemStatus.FAMILIAR) {
        this.ownedItems.delete(item);
        continue;
      }

      // If we're not doing tradeables, and this isn't a bound item, and is tradeable
      if (
        !this.settings.doTradeables &&
        item.tradeableItem.tradeable &&
        !item.isBound()
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      // If we're not doing non-tradeables, and this is a non-tradeable that isn't bound. Also is worth something..
      if (
        !this.settings.doNontradeables &&
        !item.tradeableItem.tradeable &&
        !item.isBound()
      ) {
        this.ownedItems.delete(item);
        continue;
      }
    }
  }

  doPricing() {
    let lastPrinted = 0;
    let toCheck: [ValItem, ItemPrice][] = [];
    let settings = this.settings;
    let prices = this.prices;
    let ownedItems = this.ownedItems;

    let addPrice = function (item: ValItem, price: ItemPrice) {
      if (settings.minimumMeat > 0 && price.price < settings.minimumMeat) {
        ownedItems.delete(item);
        return;
      }

      prices.push([item, price]);
    };

    for (let i of this.ownedItems.keys()) {
      let price: ItemPrice = this.priceResolver.itemPrice(
        i.tradeableItem,
        this.ownedItems.get(i),
        false,
        this.settings.doSuperFast
          ? PriceType.HISTORICAL
          : this.settings.useLastSold
          ? PriceType.MALL_SALES
          : null,
        this.settings.doSuperFast,
        true
      );

      if (price.price > 0) {
        addPrice(i, price);
      } else {
        toCheck.push([i, price]);
      }
    }

    // TODO Sort tocheck

    let checked = -1;

    if (toCheck.length > 200) {
      print(
        "Think this will take too long? Use the parameter 'fast', it's less accurate!",
        "blue"
      );
    }

    for (let check of toCheck) {
      let i = check[0];

      if (++checked % 20 == 0 && lastPrinted + 1000 < Date.now()) {
        lastPrinted = Date.now();
        print(
          "Checking value of " +
            i.name +
            " (" +
            checked +
            " / " +
            toCheck.length +
            ")",
          "blue"
        );
      }

      let price: ItemPrice = this.priceResolver.itemPrice(
        i.tradeableItem,
        this.ownedItems.get(i),
        false,
        check[1].accuracy
      );

      addPrice(i, price);
    }

    this.doSort();
  }

  doSort() {
    if (this.settings.sortBy == SortBy.TOTAL_PRICE) {
      this.prices.sort(
        (v1, v2) =>
          (v1[1].price <= 0 ? 999_999_999 : v1[1].price) *
            this.ownedItems.get(v1[0]) -
          (v2[1].price <= 0 ? 999_999_999 : v2[1].price) *
            this.ownedItems.get(v2[0])
      );
    } else if (this.settings.sortBy == SortBy.PRICE) {
      this.prices.sort(
        (v1, v2) =>
          (v1[1].price <= 0 ? 999_999_999 : v1[1].price) -
          (v2[1].price <= 0 ? 999_999_999 : v2[1].price)
      );
    } else if (this.settings.sortBy == SortBy.QUANTITY) {
      this.prices.sort(
        (v1, v2) => this.ownedItems.get(v1[0]) - this.ownedItems.get(v2[0])
      );
    } else if (this.settings.sortBy == SortBy.NAME) {
      this.prices.sort((v1, v2) => v1[0].name.localeCompare(v2[0].name));
    } else if (this.settings.sortBy == SortBy.ITEM_ID) {
      this.prices.sort(
        (v1, v2) => toInt(v1[0].tradeableItem) - toInt(v2[0].tradeableItem)
      );
    } else if (this.settings.sortBy == "SortBy.SALES_VOLUME") {
      // Removed for now cos it does too many hits
      let toUpdate: Item[] = [];

      for (let i of this.prices) {
        let item = i[1].item;

        if (!item.tradeable || item.gift) {
          continue;
        }

        // If its an item we buy from NPCs
        if (
          autosellPrice(item) > 0 &&
          i[1].price < 1000 &&
          isCoinmasterItem(item)
        ) {
          continue;
        }

        let v = this.priceResolver.history.getMallRecords(item, 7, false);

        if (v == null) {
          toUpdate.push(item);
          continue;
        }

        let priceTotal = i[1].price * this.ownedItems.get(i[0]);
        // If our expected price is different from mall price by a bigger margin than expected.. Aka 50% more expensive/cheap
        let priceDiff =
          i[1].price > v.getPriceSold(30)
            ? v.getPriceSold(30) / i[1].price
            : i[1].price / v.getPriceSold(30);

        let days = priceDiff < 0.5 ? 7 : priceTotal > 5_000_000 ? 30 : 100;
        let daysOld = (Date.now() / 1000 - v.lastUpdated) / (24 * 60 * 60);

        if (daysOld < days) {
          continue;
        }

        toUpdate.push(item);
      }

      print(
        "Need to update " +
          AccountValUtils.getNumber(toUpdate.length) +
          " items mall histories",
        "blue"
      );

      let last = Date.now();
      let progress: number = 0;

      for (let i of toUpdate) {
        if (last + 5000 < Date.now()) {
          last = Date.now();

          print(
            "Checking sales volume of " +
              i.name +
              " (" +
              progress +
              " / " +
              toUpdate.length +
              ")",
            "blue"
          );
        }

        progress++;
        this.priceResolver.history.getAmountSold(i, 30);
      }

      this.prices.sort((v1, v2) => {
        let s1 = this.priceResolver.history.getMallRecords(
          v1[1].item,
          1,
          false
        );
        let s2 = this.priceResolver.history.getMallRecords(
          v2[1].item,
          1,
          false
        );

        return (
          (s1 == null ? 0 : s1.getAmountSold(30)) -
          (s2 == null ? 0 : s2.getAmountSold(30))
        );
      });
    } else {
      abort("Unknown sort option " + this.settings.sortBy);
    }

    if (this.settings.reverseSort) {
      print("Reverse");
      this.prices.reverse();
    }
  }
}
