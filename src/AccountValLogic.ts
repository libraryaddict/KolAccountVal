import {
  abort,
  autosellPrice,
  equippedAmount,
  Familiar,
  getCloset,
  getDisplay,
  getInventory,
  getPlayerName,
  getShop,
  getStash,
  getStorage,
  getWorkshed,
  haveFamiliar,
  Item,
  myId,
  print,
  shopAmount,
  shopPrice,
  Skill,
  toInt,
} from "kolmafia";
import { ItemResolver, ItemType } from "./ItemResolver";
import { ItemPrice, PriceResolver, PriceType } from "./PriceResolver";
import {
  AccountValSettings,
  PricingSettings,
  SortBy,
} from "./AccountValSettings";
import { FetchFromPage } from "./PageResolver";
import { AccountValColors } from "./AccountValColors";

export enum ItemStatus {
  BOUND,

  NO_TRADE,

  FAMILIAR,

  IN_USE,

  SHOP_WORTH,
}

export class ValItem {
  name: string;
  pluralName: string;
  category?: string;
  actualItem: Item;
  tradeableItem: Item;
  bound: ItemStatus;
  shopWorth: number;
  worthMultiplier: number = 1;
  snapshotSource: string;

  constructor(
    actualItem: Item,
    item: Item = actualItem,
    name: string = item.name,
    pluralName: string = item.plural,
    bound?: ItemStatus,
    snapshotSource?: string
  ) {
    this.actualItem = actualItem;
    this.name = name;
    this.pluralName = pluralName;
    this.tradeableItem = item;
    this.bound = bound;
    this.snapshotSource = snapshotSource;

    if (this.bound == null && !item.tradeable) {
      this.bound = ItemStatus.NO_TRADE;
    }
  }

  withCategory(category: string): ValItem {
    this.category = category;

    return this;
  }

  getBound(): string {
    if (this.bound == ItemStatus.BOUND) {
      return "Bound";
    } else if (this.bound == ItemStatus.FAMILIAR) {
      return "Familiar";
    } else if (this.bound == ItemStatus.IN_USE) {
      return "In Use";
    } else if (this.bound == ItemStatus.NO_TRADE) {
      return "Untradeable";
    }

    return null;
  }

  isBound(): boolean {
    return this.bound == ItemStatus.BOUND || this.bound == ItemStatus.FAMILIAR;
  }

  isTradeable(): boolean {
    return (
      this.bound == null ||
      this.bound == ItemStatus.IN_USE ||
      this.bound == ItemStatus.SHOP_WORTH
    );
  }
}

export class AccountValLogic {
  ownedItems: Map<ValItem, number> = new Map();
  resolver: ItemResolver;
  priceResolver: PriceResolver;
  prices: [ValItem, ItemPrice][] = [];
  categoryOrder: string[] = [];
  private settings: AccountValSettings;
  private jsFilter: (item: Item, amount: number) => boolean;

  constructor(settings: AccountValSettings, priceSettings: PricingSettings) {
    this.settings = settings;
    this.priceResolver = new PriceResolver(priceSettings);
    this.resolver = new ItemResolver(this.priceResolver);
  }

  addItem(item: ValItem, count: number = 1) {
    this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
  }

  bindsIntoAccountFlag(itemType: ItemType) {
    return (
      itemType != ItemType.CURRENCY && itemType != ItemType.UNTRADEABLE_ITEM
    );
  }

  loadPageItems() {
    const pager = new FetchFromPage();

    if (this.settings.fetchShop) {
      const items = pager.getStore(this.settings.playerId);

      items.forEach((i) => {
        const item = new ValItem(i.item);

        if (this.settings.shopWorth) {
          item.bound = ItemStatus.SHOP_WORTH;
          item.shopWorth = i.price;
        }

        this.addItem(item, i.amount);
      });
    }

    if (this.settings.fetchDisplaycase) {
      const items = pager.getDisplaycase(this.settings.playerId);

      items.forEach((v, k) => {
        if (!this.categoryOrder.includes(k.shelf)) {
          this.categoryOrder.push(k.shelf);
        }

        this.addItem(new ValItem(k.item).withCategory(k.shelf), v);
      });
    }

    let resolvedFamiliars = false;

    if (this.settings.fetchFamiliars != false) {
      const familiars = pager.getFamiliars(this.settings.playerId);

      resolvedFamiliars = familiars.length > 0;

      this.resolver.resolveFamiliars(familiars, this.ownedItems);
    }

    if (this.settings.fetchSnapshot == true) {
      const snapshot = pager.getSnapshot(getPlayerName(this.settings.playerId));
      const familiars: Familiar[] = [];
      const skills: Skill[] = [];
      const items: Map<Item, number> = new Map();

      for (const item of snapshot) {
        if (item instanceof Familiar) {
          familiars.push(item);
        } else if (item instanceof Skill) {
          skills.push(item);
        } else if (item instanceof Item) {
          items.set(item, 1);
        } else {
          items.set(item[0], item[1]);
        }
      }

      if (!resolvedFamiliars && this.settings.fetchFamiliars) {
        this.resolver.resolveFamiliars(familiars, this.ownedItems);
      }

      if (this.settings.doBound && this.settings.fetchingNonItems) {
        for (const item of this.resolver.accValStuff.filter(
          (s) => s.itemType == ItemType.SKILL && skills.includes(s.skill)
        )) {
          this.addItem(
            new ValItem(
              item.actualItem,
              item.actualItem,
              item.actualItem.name,
              item.actualItem.plural,
              ItemStatus.BOUND
            )
          );
        }
      }

      const owned: Map<Item, [ValItem, number]> = new Map(
        [...this.ownedItems].map(([k, v]) => [k.tradeableItem, [k, v]])
      );

      items.forEach((v, k) => {
        const boundItem = this.resolver.accValStuff.find(
          (i) => i.actualItem == k
        );

        if (boundItem == null) {
          v -= owned.has(k) ? owned.get(k)[1] : 0;

          if (v <= 0) {
            return;
          }

          this.addItem(new ValItem(k), v);

          return;
        } else if (owned.has(k) && owned.get(k)[0].isBound()) {
          return;
        } else if (
          boundItem.untradeableItem != null &&
          owned.has(boundItem.untradeableItem)
        ) {
          return;
        }

        let actualItem = k;
        let name = k.name;
        let plural = k.plural;

        if (boundItem.itemType == ItemType.UNTRADEABLE_ITEM) {
          const untradeable = boundItem.untradeableItem;

          v -= owned.has(k) ? owned.get(k)[1] : 0;

          if (v <= 0) {
            return;
          }

          actualItem = untradeable;
          name = untradeable.name;
          plural = untradeable.plural;
        }

        this.addItem(
          new ValItem(
            actualItem,
            k,
            name,
            plural,
            ItemStatus.BOUND,
            "av-snapshot"
          ),
          v
        );
      });
    }

    this.resolveNoTrades();
  }

  loadJsFilter() {
    if (this.settings.javascriptFilter == "") {
      return;
    }

    while (this.settings.javascriptFilter.includes("$kol")) {
      this.settings.javascriptFilter = this.settings.javascriptFilter.replace(
        "$kol",
        'require("kolmafia")'
      );
    }

    print(
      "JS Filter has been set to: " + this.settings.javascriptFilter,
      AccountValColors.minorNote
    );

    try {
      this.jsFilter = eval(
        `with (require("kolmafia")) ` + this.settings.javascriptFilter
      );
    } catch (e) {
      print(
        "Invalid jsfilter provided! Error as follows:",
        AccountValColors.attentionGrabbingWarning
      );
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

    const famItems: Map<Item, number> = this.resolver.resolveFamiliarItems();
    const sessionItems: Map<Item, number> = this.resolver.resolveSessionItems();
    const mega: { [item: string]: number } = this.settings.fetchInventory
      ? getInventory()
      : {};
    const megaExtra: Map<Item, { count: number; shelf: string }> = new Map();

    const add = (stuff: { [item: string]: number }) => {
      Object.keys(stuff).forEach((k) => {
        mega[k] = (mega[k] ?? 0) + stuff[k];
      });
    };

    if (this.settings.fetchCloset) {
      add(getCloset());
    }

    if (this.settings.fetchStorage) {
      add(getStorage());
    }

    if (this.settings.fetchClan) {
      add(getStash());
    }

    if (this.settings.fetchDisplaycase) {
      if (this.settings.doCategories) {
        const pager = new FetchFromPage();
        const items = pager.getDisplaycase(toInt(myId()));

        items.forEach((v, k) => {
          if (!this.categoryOrder.includes(k.shelf)) {
            this.categoryOrder.push(k.shelf);
          }

          megaExtra.set(k.item, {
            shelf: k.shelf,
            count: v,
          });
        });
      } else {
        add(getDisplay());
      }
    }

    if (this.settings.fetchShop && !this.settings.shopWorth) {
      add(getShop());
    }

    for (const item of Item.all()) {
      let amount = mega[item.name] ?? 0;

      if (this.settings.fetchSession) {
        amount += sessionItems.get(item) ?? 0;
      }

      if (this.settings.fetchInventory) {
        amount += equippedAmount(item) + (famItems.get(item) ?? 0);
      }

      let category: string;

      if (megaExtra.has(item)) {
        amount += megaExtra.get(item).count;
        category = megaExtra.get(item).shelf;
      }

      if (
        this.settings.fetchShop &&
        this.settings.shopWorth &&
        shopAmount(item) > 0
      ) {
        const i = new ValItem(item).withCategory(category);
        i.bound = ItemStatus.SHOP_WORTH;
        i.shopWorth = shopPrice(item);

        this.ownedItems.set(i, shopAmount(item));
        continue;
      }

      if (amount == 0) {
        continue;
      }

      this.ownedItems.set(new ValItem(item).withCategory(category), amount);
    }

    if (this.settings.fetchFamiliars != false) {
      this.resolver.resolveFamiliars(
        Familiar.all().filter((f) => haveFamiliar(f)),
        this.ownedItems
      );
    }

    // Check our current workshed
    if (this.settings.fetchingEverywhereish && this.settings.fetchingNonItems) {
      if (this.settings.doBound || this.settings.doTradeables) {
        const i = getWorkshed();

        if (i != null && i != Item.none) {
          if (
            i.tradeable ? this.settings.doTradeables : this.settings.doBound
          ) {
            this.addItem(
              new ValItem(i, i, i.name, i.plural, ItemStatus.IN_USE)
            );
          }
        }
      }
    }

    if (this.settings.doBound && this.settings.fetchingNonItems) {
      for (const [item, status] of this.resolver.getUrledItems()) {
        if (
          item.tradeable &&
          (status == ItemStatus.FAMILIAR || status != ItemStatus.BOUND)
            ? !this.settings.doTradeables
            : !this.settings.doBound
        ) {
          continue;
        }

        this.addItem(new ValItem(item, item, item.name, item.plural, status));
      }
    }

    this.resolveNoTrades();
  }

  private resolveNoTrades() {
    const copy: { [item: string]: [ValItem, number] } = {};

    this.ownedItems.forEach((v, k) => {
      copy[k.tradeableItem.name] = [k, v];
    });

    if (this.settings.doBound || this.settings.doNontradeables) {
      this.resolver.resolveBoundToTradeables(copy, this.ownedItems, [
        this.settings.doBound ? ItemType.UNTRADEABLE_ITEM : null,
        this.settings.doNontradeables ? ItemType.CURRENCY : null,
      ]);
    }

    for (const item of this.ownedItems.keys()) {
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
      if (
        !this.settings.doBound &&
        item.isBound() &&
        item.bound != ItemStatus.FAMILIAR
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      // If we're not doing familiars and this is a familiar
      if (
        item.bound == ItemStatus.FAMILIAR &&
        (this.settings.fetchFamiliars == false ||
          (this.settings.fetchFamiliars == null && !this.settings.doBound))
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      // If we're not doing tradeables, and this isn't a bound item, and is tradeable
      if (
        !this.settings.doTradeables &&
        item.tradeableItem.tradeable &&
        item.isTradeable()
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
    const toCheck: [ValItem, ItemPrice][] = [];
    const settings = this.settings;
    const prices = this.prices;
    const ownedItems = this.ownedItems;

    const addPrice = function (item: ValItem, price: ItemPrice) {
      if (
        settings.minimumMeat > 0 &&
        price.price * item.worthMultiplier < settings.minimumMeat
      ) {
        ownedItems.delete(item);

        return;
      }

      if (settings.sales > 0 && price.volume < settings.sales) {
        ownedItems.delete(item);

        return;
      }

      if (!settings.isShown(item, price.price)) {
        ownedItems.delete(item);

        return;
      }

      if (
        settings.presets.some(
          (p) => !p.negated && p.preset.name().includes("autosell")
        )
      ) {
        price.price = autosellPrice(item.actualItem);
      }

      prices.push([item, price]);
    };

    for (const i of this.ownedItems.keys()) {
      const price: ItemPrice = this.priceResolver.itemPrice(
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

      if (price.price > 0 || price.accuracy == PriceType.NEW_PRICES) {
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
        AccountValColors.helpfulStateInfo
      );
    }

    for (const check of toCheck) {
      const i = check[0];

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
          AccountValColors.helpfulStateInfo
        );
      }

      const price: ItemPrice = this.priceResolver.itemPrice(
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
    let sorter = (v1: [ValItem, ItemPrice], v2: [ValItem, ItemPrice]) => 0;

    if (this.settings.sortBy == SortBy.TOTAL_PRICE) {
      sorter = (v1, v2) =>
        (v1[1].price <= 0
          ? 999_999_999
          : (1 / v1[0].worthMultiplier) * v1[1].price) *
          this.ownedItems.get(v1[0]) -
        (v2[1].price <= 0
          ? 999_999_999
          : (1 / v2[0].worthMultiplier) * v2[1].price) *
          this.ownedItems.get(v2[0]);
    } else if (this.settings.sortBy == SortBy.PRICE) {
      sorter = (v1, v2) =>
        (v1[1].price <= 0
          ? 999_999_999
          : (1 / v1[0].worthMultiplier) * v1[1].price) -
        (v2[1].price <= 0
          ? 999_999_999
          : (1 / v2[0].worthMultiplier) * v2[1].price);
    } else if (this.settings.sortBy == SortBy.QUANTITY) {
      sorter = (v1, v2) =>
        this.ownedItems.get(v1[0]) - this.ownedItems.get(v2[0]);
    } else if (this.settings.sortBy == SortBy.NAME) {
      sorter = (v1, v2) => v1[0].name.localeCompare(v2[0].name);
    } else if (this.settings.sortBy == SortBy.ITEM_ID) {
      sorter = (v1, v2) =>
        toInt(v1[0].tradeableItem) - toInt(v2[0].tradeableItem);
    } else if (this.settings.sortBy == SortBy.SALES_VOLUME) {
      sorter = (v1, v2) => v1[1].volume - v2[1].volume;
    } else {
      abort("Unknown sort option " + this.settings.sortBy);
    }

    if (this.settings.doCategories && this.categoryOrder != null) {
      this.prices.sort((v1, v2) => {
        const c1 = v1[0].category ?? "";
        const c2 = v2[0].category ?? "";

        if (c1 == c2) {
          return sorter(v1, v2);
        }

        const i1 = this.categoryOrder.indexOf(c1);
        const i2 = this.categoryOrder.indexOf(c2);

        if (i1 == i2) {
          return sorter(v1, v2);
        }

        return i1 - i2;
      });
    } else {
      this.prices.sort(sorter);
    }

    if (this.settings.reverseSort) {
      this.prices.reverse();
    }
  }
}
