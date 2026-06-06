import { provider } from "../api/apiSupplier";
import { KoLItem, KoLFamiliar, KoLSkill } from "../api/supplierTypings";
import { ItemResolver } from "../resolvers/items";
import { PageResolver } from "../resolvers/pages";
import { PriceResolver } from "../pricing/priceResolver";
import { AccountValSettings } from "../settings/settings";
import { AccountValColors } from "../utils/colors";
import { AccValTiming } from "../utils/timings";
import {
  ItemStatus,
  ItemType,
  ValItem,
  ItemPrice,
  PriceType,
} from "../models/typings";
import { AccountValUtils } from "../utils/utils";

export class AccountValLogic {
  ownedItems: Map<ValItem, number> = new Map();
  resolver: ItemResolver;
  priceResolver: PriceResolver;
  prices: [ValItem, ItemPrice][] = [];
  categoryOrder: string[] = [];
  jsFilter: (
    item: KoLItem,
    amount: number,
    price?: number,
    sales?: number,
  ) => boolean;

  constructor(public settings: AccountValSettings) {
    this.priceResolver = new PriceResolver(this.settings);
    this.resolver = new ItemResolver(this.priceResolver);
  }

  addItem(item: ValItem, count: number = 1) {
    this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
  }

  loadItems() {
    AccValTiming.start("Load JS Filter");
    this.loadJsFilter();
    AccValTiming.stop("Load JS Filter");

    if (this.settings.playerId > 0) {
      AccValTiming.start("Load Page Items");
      this.loadPageItems();
      AccValTiming.stop("Load Page Items");

      return;
    }

    this.loadSelfItems();
  }

  private loadJsFilter() {
    if (this.settings.javascriptFilter == "") {
      return;
    }

    provider().print(
      "JS Filter has been set to: " + this.settings.javascriptFilter,
      AccountValColors.minorNote,
    );

    try {
      this.jsFilter = provider().evalJsFilter(this.settings.javascriptFilter);
    } catch (e) {
      provider().print(
        "Invalid jsfilter provided! Error as follows:",
        AccountValColors.attentionGrabbingWarning,
      );
      provider().print("");
      throw e;
    }
  }

  private loadPageItems() {
    const pager = new PageResolver();

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
      const snapshot = pager.getSnapshot(
        provider().getPlayerName(this.settings.playerId),
      );
      const familiars: KoLFamiliar[] = [];
      const skills: KoLSkill[] = [];
      const items: Map<KoLItem, number> = new Map();

      for (const item of snapshot) {
        if ("hatchling" in item) {
          familiars.push(item as KoLFamiliar);
        } else if ("name" in item && !("tradeable" in item)) {
          skills.push(item as KoLSkill);
        } else if ("tradeable" in item) {
          items.set(item as KoLItem, 1);
        } else {
          items.set(
            (item as [KoLItem, number])[0],
            (item as [KoLItem, number])[1],
          );
        }
      }

      if (!resolvedFamiliars && this.settings.fetchFamiliars) {
        this.resolver.resolveFamiliars(familiars, this.ownedItems);
      }

      if (this.settings.doBound && this.settings.fetchingNonItems) {
        for (const item of this.resolver.accValStuff.filter(
          (s) => s.itemType == ItemType.SKILL && skills.includes(s.skill),
        )) {
          this.addItem(
            new ValItem(
              item.actualItem,
              item.actualItem,
              item.actualItem.name,
              item.actualItem.plural,
              ItemStatus.BOUND,
            ),
          );
        }
      }

      const owned: Map<KoLItem, [ValItem, number]> = new Map(
        [...this.ownedItems].map(([k, v]) => [k.tradeableItem, [k, v]]),
      );
      items.forEach((v, k) => {
        const boundItem = this.resolver.accValStuff.find(
          (i) => i.actualItem == k,
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
            "av-snapshot",
          ),
          v,
        );
      });
    }

    this.resolveNoTrades();
  }

  private loadSelfItems() {
    AccValTiming.start("Resolve Familiar Items");
    const famItems = this.resolver.resolveFamiliarItems();
    AccValTiming.stop("Resolve Familiar Items");

    AccValTiming.start("Resolve Session");
    const sessionItems = provider().mySessionItems();
    AccValTiming.stop("Resolve Session");

    const mega: Map<KoLItem, number> = new Map();

    const megaExtra: Map<KoLItem, { count: number; shelf: string }> = new Map();

    const add = (stuff: Map<KoLItem, number>) => {
      for (const [item, amount] of stuff) {
        mega.set(item, (mega.get(item) ?? 0) + amount);
      }
    };

    if (this.settings.fetchInventory) {
      AccValTiming.start("Resolve and Add Inventory");
      add(provider().getInventory());
      AccValTiming.stop("Resolve and Add Inventory");
    }

    if (this.settings.fetchCloset) {
      AccValTiming.start("Resolve and Add Closet");
      add(provider().getCloset());
      AccValTiming.stop("Resolve and Add Closet");
    }

    if (this.settings.fetchStorage) {
      AccValTiming.start("Resolve and Add Storage");
      add(provider().getStorage());
      AccValTiming.stop("Resolve and Add Storage");
    }

    if (this.settings.fetchClan) {
      AccValTiming.start("Resolve and Add Clan Stash");
      add(provider().getStash());
      AccValTiming.stop("Resolve and Add Clan Stash");
    }

    if (this.settings.fetchDisplaycase) {
      if (this.settings.doCategories) {
        AccValTiming.start("Resolve and Add Display Case with Shelves");
        const pager = new PageResolver();
        const items = pager.getDisplaycase(
          AccountValUtils.toInt(provider().myId()),
        );
        items.forEach((v, k) => {
          if (!this.categoryOrder.includes(k.shelf)) {
            this.categoryOrder.push(k.shelf);
          }

          megaExtra.set(k.item, { shelf: k.shelf, count: v });
        });
        AccValTiming.stop("Resolve and Add Display Case with Shelves");
      } else {
        AccValTiming.start("Resolve and Add Display Case");
        add(provider().getDisplay());
        AccValTiming.stop("Resolve and Add Display Case");
      }
    }

    AccValTiming.start("Resolve Shop");
    const shop = this.settings.fetchShop ? provider().getShop() : null;
    AccValTiming.stop("Resolve Shop");

    if (this.settings.fetchShop && !this.settings.shopWorth) {
      AccValTiming.start("Add Shop");
      add(shop);
      AccValTiming.stop("Add Shop");
    }

    AccValTiming.start("Process All Items");

    for (const item of KoLItem.all()) {
      let amount = mega.get(item) ?? 0;

      if (this.settings.fetchSession) {
        amount += sessionItems.get(item) ?? 0;
      }

      if (this.settings.fetchInventory) {
        amount += provider().equippedAmount(item) + (famItems.get(item) ?? 0);
      }

      let category: string;

      if (megaExtra.has(item)) {
        amount += megaExtra.get(item).count;
        category = megaExtra.get(item).shelf;
      }

      if (this.settings.shopWorth && (shop.get(item) ?? 0) > 0) {
        const i = new ValItem(item).withCategory(category);
        i.bound = ItemStatus.SHOP_WORTH;
        i.shopWorth = provider().shopPrice(item);
        this.ownedItems.set(i, shop.get(item));
        continue;
      }

      if (amount == 0) {
        continue;
      }

      this.ownedItems.set(new ValItem(item).withCategory(category), amount);
    }

    AccValTiming.stop("Process All Items");

    if (this.settings.fetchFamiliars != false) {
      AccValTiming.start("Resolve Familiars");
      this.resolver.resolveFamiliars(
        KoLFamiliar.all().filter((f) => provider().haveFamiliar(f)),
        this.ownedItems,
      );
      AccValTiming.stop("Resolve Familiars");
    }

    if (this.settings.fetchingEverywhereish && this.settings.fetchingNonItems) {
      AccValTiming.start("Resolve Workshed");

      if (this.settings.doBound || this.settings.doTradeables) {
        const i = provider().getWorkshed();

        if (
          i != null &&
          i != KoLItem.none &&
          (i.tradeable ? this.settings.doTradeables : this.settings.doBound)
        ) {
          this.addItem(new ValItem(i, i, i.name, i.plural, ItemStatus.IN_USE));
        }
      }

      AccValTiming.stop("Resolve Workshed");
    }

    if (this.settings.doBound && this.settings.fetchingNonItems) {
      AccValTiming.start("Resolve Urled Items");

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

      AccValTiming.stop("Resolve Urled Items");
    }

    AccValTiming.start("Resolve No-Trades");
    this.resolveNoTrades();
    AccValTiming.stop("Resolve No-Trades");
  }

  private resolveNoTrades() {
    const copy: { [item: string]: [ValItem, number] } = {};
    this.ownedItems.forEach((v, k) => {
      copy[k.tradeableItem.name] = [k, v];
    });

    if (this.settings.doBound || this.settings.doNonTradeables) {
      this.resolver.resolveBoundToTradeables(copy, this.ownedItems, [
        this.settings.doBound ? ItemType.UNTRADEABLE_ITEM : null,
        this.settings.doNonTradeables ? ItemType.CURRENCY : null,
      ]);
    }

    const skipJsFilter = this.settings.doesJSFilterUsePriceOrSales();

    for (const item of this.ownedItems.keys()) {
      if (
        !skipJsFilter &&
        this.jsFilter != null &&
        !this.jsFilter(item.tradeableItem, this.ownedItems.get(item))
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      if (
        !item.isBound() &&
        (!item.tradeableItem.tradeable || item.tradeableItem.gift) &&
        provider().autosellPrice(item.tradeableItem) == 0
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      if (this.ownedItems.get(item) < this.settings.minimumAmount) {
        this.ownedItems.delete(item);
        continue;
      }

      if (
        !this.settings.doBound &&
        item.isBound() &&
        item.bound != ItemStatus.FAMILIAR
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      if (
        item.bound == ItemStatus.FAMILIAR &&
        (this.settings.fetchFamiliars == false ||
          (this.settings.fetchFamiliars == null && !this.settings.doBound))
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      if (
        !this.settings.doTradeables &&
        item.tradeableItem.tradeable &&
        item.isTradeable()
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      if (
        !this.settings.doNonTradeables &&
        !item.tradeableItem.tradeable &&
        !item.isBound()
      ) {
        this.ownedItems.delete(item);
        continue;
      }

      if (item.isBound() && this.ownedItems.get(item) > 1) {
        this.ownedItems.set(item, 1);
      }
    }
  }

  doPricing() {
    let lastPrinted = 0;
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
          (p) => !p.negated && p.preset.name().includes("autosell"),
        )
      ) {
        price.price = provider().autosellPrice(item.actualItem);
      }

      prices.push([item, price]);
    };

    AccValTiming.start("Add Logic Prices");
    const toCheck: [ValItem, ItemPrice][] = [];
    this.priceResolver.bulkLoad(
      [...this.ownedItems.keys()].map((i) => i.tradeableItem),
    );

    for (const item of this.ownedItems.keys()) {
      AccValTiming.start("Price Item", true);
      const price: ItemPrice = this.priceResolver.itemPrice(
        item.tradeableItem,
        false,
        this.settings.doSuperFast
          ? PriceType.HISTORICAL
          : this.settings.useLastSold
            ? PriceType.MALL_SALES
            : null,
        this.settings.doSuperFast,
        true,
        "Logic Item Prices - ",
      );
      AccValTiming.stop("Price Item");

      if (price == null) {
        continue;
      } else if (price.price > 0 || price.accuracy == PriceType.NEW_PRICES) {
        AccValTiming.start("Add Item Price", true);
        addPrice(item, price);
        AccValTiming.stop("Add Item Price");
      } else {
        toCheck.push([item, price]);
      }
    }

    AccValTiming.stop("Add Logic Prices");

    let checked = -1;

    if (toCheck.length > 200) {
      provider().print(
        "Think this will take too long? Use the parameter 'fast', it's less accurate!",
        AccountValColors.helpfulStateInfo,
      );
    }

    if (toCheck.length > 0) {
      AccValTiming.start("Check Remaining Logic Item Prices");

      for (const check of toCheck) {
        const i = check[0];

        if (++checked % 20 == 0 && lastPrinted + 1000 < Date.now()) {
          lastPrinted = Date.now();
          provider().print(
            "Checking value of " +
              i.name +
              " (" +
              checked +
              " / " +
              toCheck.length +
              ")",
            AccountValColors.helpfulStateInfo,
          );
        }

        const price: ItemPrice = this.priceResolver.itemPrice(
          i.tradeableItem,
          false,
          check[1].accuracy,
          undefined,
          undefined,
          "Remaining Logic Item Prices - ",
        );

        if (price == null) {
          continue;
        }

        addPrice(i, price);
      }

      AccValTiming.stop("Check Remaining Logic Item Prices");
    }

    AccValTiming.start("Sort Price List");
    this.doSort();
    AccValTiming.stop("Sort Price List");
  }

  doSort() {
    if (!this.settings.sortBy.fallback) {
      for (const [v, p] of this.prices) {
        this.settings.sortBy.assignValue(
          v,
          p,
          this.ownedItems,
          this.settings.maxNaturalPrice,
        );
      }
    }

    const sorter = (v1: [ValItem, ItemPrice], v2: [ValItem, ItemPrice]) =>
      this.settings.sortBy.fallback
        ? this.settings.sortBy.fallback(v1[0], v2[0])
        : v1[0].sortValue - v2[0].sortValue;

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
