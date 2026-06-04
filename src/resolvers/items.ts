import { provider } from "../api/apiSupplier";
import { KoLItem, KoLSkill, KoLFamiliar } from "../api/supplierTypings";
import { ItemStatus, ItemType, ValItem } from "../models/typings";
import { AccountValColors } from "../utils/colors";
import { CoinmasterResolver } from "./coinmaster";
import { PriceResolver } from "../pricing/priceResolver";
import accountvalBinds from "../../data/accountval_binds.txt";
import { AccountValUtils } from "../utils/utils";

class AccValStuff {
  itemType: ItemType;
  actualItem: KoLItem;
  skill?: KoLSkill;
  untradeableItem?: KoLItem;
  garden?: string;
  script?: string;
  userSetting?: string;
  visitUrlLink?: string;
  visitUrlIncludes?: string;
  correspondence?: string;
  currencyAmount?: number;
}

export class ItemResolver {
  private visitCache: Map<string, string> = new Map();
  accValStuff: AccValStuff[];
  private accountValCache: Map<KoLItem, boolean> = new Map();
  private accountValVisitCachePropName = "_accountValVisitCache";
  prices: PriceResolver;

  constructor(prices: PriceResolver) {
    this.prices = prices;
    this.accValStuff = this.loadAccountValStuff();
  }

  loadCache() {
    const prop: string[] = provider()
      .retrieveCache(this.accountValVisitCachePropName, "transient")
      .split(",");

    for (const p of prop) {
      if (!p.includes(":")) {
        continue;
      }

      const spl = p.split(":");
      this.accountValCache.set(
        KoLItem.get(AccountValUtils.toInt(spl[0])),
        spl[1].startsWith("t"),
      );
    }
  }

  saveCache() {
    const values: string[] = [];
    this.accountValCache.forEach((val, key) =>
      values.push(key.id + ":" + (val ? "t" : "f")),
    );
    values.sort((v1, v2) => v1.localeCompare(v2));

    const val = values.join(",");

    if (
      provider().retrieveCache(
        this.accountValVisitCachePropName,
        "transient",
      ) == val
    ) {
      return;
    }

    provider().storeCache(
      this.accountValVisitCachePropName,
      values.join(","),
      "transient",
    );
  }

  getUrledItems(): [KoLItem, ItemStatus?][] {
    const items: [KoLItem, ItemStatus][] = [];
    const origSize = this.accountValCache.size;

    for (const s of this.accValStuff) {
      if (s.itemType == ItemType.BOOK) {
        if (provider().haveSkill(s.skill)) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.EUDORA) {
        if (
          this.visitCheck(
            s.actualItem,
            "account.php?tab=correspondence",
            s.correspondence,
          )
        ) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.PROPERTY) {
        if (this.testProperty(s.userSetting)) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
        if (this.visitCheck(s.actualItem, s.visitUrlLink, s.visitUrlIncludes)) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.GARDEN) {
        if (provider().myGardenType() == s.garden) {
          items.push([s.actualItem, ItemStatus.IN_USE]);
        }
      } else if (s.itemType == ItemType.SKILL) {
        if (provider().getPermedSkills()[s.skill.name]) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.CAMPGROUND) {
        if (provider().getCampground()[s.actualItem.name] != null) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.SCRIPT) {
        if (eval(s.script) as boolean) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      }
    }

    if (origSize != this.accountValCache.size) {
      this.saveCache();
    }

    return items;
  }

  private testProperty(property: string): boolean {
    let result: boolean = true;

    for (const prop of property.split("&")) {
      const isTrue = AccountValUtils.toBoolean(
        provider().retrieveCache(prop.replace("!", ""), "small_persist"),
      );
      const isNotNegated = !prop.includes("!");
      result = result && isTrue == isNotNegated;
    }

    return result;
  }

  private addItem(
    ownedItems: Map<ValItem, number>,
    actualItem: KoLItem,
    item: KoLItem,
    name: string,
    plural: string,
    bound?: ItemStatus,
    count: number = 1,
    worthMultiplier: number = 1,
  ) {
    const v = new ValItem(actualItem, item, name, plural, bound);
    v.worthMultiplier = worthMultiplier;
    ownedItems.set(v, (ownedItems.get(v) | 0) + count);
  }

  resolveBoundToTradeables(
    copy: { [item: string]: [ValItem, number] },
    ownedItems: Map<ValItem, number>,
    resolve: ItemType[],
  ) {
    let coinmaster: CoinmasterResolver;

    for (const s of this.accValStuff) {
      if (!resolve.includes(s.itemType)) {
        continue;
      }

      try {
        if (s.itemType == ItemType.CURRENCY && s.untradeableItem == null) {
          if (coinmaster == null) {
            coinmaster = new CoinmasterResolver(this.prices);
            coinmaster.load();
          }

          const item = coinmaster.getHighestCoinmaster(s.actualItem);

          if (item == null) {
            continue;
          }

          s.currencyAmount = item.currencyCost;
          s.untradeableItem = item.currency;
          s.actualItem = item.item;
        }

        const item = s.untradeableItem;
        const pair: [ValItem, number] = copy[item.name];

        if (pair == null) {
          continue;
        }

        const v = pair[0];
        this.addItem(
          ownedItems,
          item,
          s.actualItem,
          item.name,
          item.plural,
          v.bound == null || v.bound == ItemStatus.NO_TRADE
            ? s.itemType == ItemType.UNTRADEABLE_ITEM
              ? ItemStatus.BOUND
              : ItemStatus.NO_TRADE
            : v.bound,
          pair[1],
          s.currencyAmount ?? 1,
        );
      } catch (e) {
        provider().print(
          "You probably need to update mafia! Got an error! " + e,
          AccountValColors.attentionGrabbingWarning,
        );
      }
    }
  }

  resolveFamiliars(familiars: KoLFamiliar[], ownedItems: Map<ValItem, number>) {
    for (const fam of familiars) {
      if (!fam.hatchling.tradeable) {
        continue;
      }

      this.addItem(
        ownedItems,
        fam.hatchling,
        fam.hatchling,
        fam.toString(),
        fam.toString(),
        ItemStatus.FAMILIAR,
      );
    }
  }

  resolveFamiliarItems() {
    const famEquipped: Map<KoLItem, number> = new Map();

    for (const fam of KoLFamiliar.all()) {
      if (!provider().haveFamiliar(fam) || provider().myFamiliar() == fam) {
        continue;
      }

      const item = provider().familiarEquippedEquipment(fam);

      if (item == null || item == KoLItem.none) {
        continue;
      }

      famEquipped.set(item, (famEquipped.get(item) | 0) + 1);
    }

    return famEquipped;
  }

  visitCheck(item: KoLItem, url: string, find: string) {
    if (this.accountValCache.has(item)) {
      return this.accountValCache.get(item);
    }

    let page = this.visitCache.get(url);

    if (page == null) {
      page = provider().visitUrl(url);
      this.visitCache.set(url, page);
    }

    const result: boolean = page.includes(find);
    this.accountValCache.set(item, result);

    return result;
  }

  loadAccountValStuff(): AccValStuff[] {
    const buffer = accountvalBinds;
    const values: AccValStuff[] = [];

    loop: for (const line of buffer.split(/(\n|\r)+/)) {
      if (line.startsWith("#") || line.length == 0) {
        continue;
      }

      const spl = line.split("\t");

      if (spl.length < 2) {
        continue;
      }

      const v: AccValStuff = new AccValStuff();

      try {
        v.actualItem = KoLItem.get(spl[1]);
      } catch (e) {
        provider().print(
          "Error! Update mafia? " + e,
          AccountValColors.attentionGrabbingWarning,
        );
        continue;
      }

      switch (spl[0]) {
        case "i":
          v.itemType = ItemType.UNTRADEABLE_ITEM;
          v.untradeableItem = KoLItem.get(spl[2]);
          break;
        case "b":
          v.itemType = ItemType.BOOK;
          v.skill = KoLSkill.get(spl[2]);
          break;
        case "p":
          v.itemType = ItemType.PROPERTY;
          v.userSetting = spl[2];
          break;
        case "e":
          v.itemType = ItemType.EUDORA;
          v.correspondence = spl[2];
          break;
        case "v":
          v.itemType = ItemType.VISIT_URL_CHECK;
          v.visitUrlLink = spl[2];
          v.visitUrlIncludes = spl[3];
          break;
        case "g":
          v.itemType = ItemType.GARDEN;
          v.garden = spl[2];
          break;
        case "t":
          v.itemType = ItemType.CURRENCY;

          if (spl.length > 2) {
            v.untradeableItem = KoLItem.get(spl[2]);
            v.currencyAmount = parseInt(spl[3]);
          }

          break;
        case "c":
          v.itemType = ItemType.CAMPGROUND;
          break;
        case "s":
          v.itemType = ItemType.SCRIPT;
          v.script = spl[2];
          break;
        case "h":
          this.prices.addSpecialCase(v.actualItem, parseInt(spl[2]));
          continue loop;
          break;
        default:
          provider().print(
            "Found line '" + line + "' which I can't handle!",
            AccountValColors.attentionGrabbingWarning,
          );
          continue;
      }

      values.push(v);
    }

    this.loadSkills(values);

    loop: for (const v of values) {
      if (
        v.actualItem.tradeable ||
        (v.itemType == ItemType.CURRENCY && v.untradeableItem == null)
      ) {
        continue;
      }

      for (const v1 of values) {
        if (
          v1.itemType != ItemType.UNTRADEABLE_ITEM &&
          v1.itemType != ItemType.CURRENCY
        ) {
          continue;
        }

        if (v1.untradeableItem != v.actualItem) {
          continue;
        }

        continue loop;
      }

      provider().print(
        "Missing a tradeable item for " + v.actualItem,
        AccountValColors.attentionGrabbingWarning,
      );
    }

    this.loadCache();

    return values;
  }

  loadSkills(values: AccValStuff[]) {
    const itemsSkills: Map<KoLItem, KoLSkill> = new Map(
      KoLItem.all()
        .map((i) => [i, provider().associatedSkill(i)] as [KoLItem, KoLSkill])
        .filter(
          ([i, skill]) =>
            !i.reusable && !i.quest && !i.gift && skill != KoLSkill.none,
        ),
    );
    const alreadyNoted = values.map((v) => v.actualItem);

    for (const [i, skill] of itemsSkills) {
      if (!i.tradeable || alreadyNoted.includes(i)) {
        continue;
      }

      const v: AccValStuff = new AccValStuff();
      v.itemType = ItemType.SKILL;
      v.actualItem = i;
      v.skill = skill;
      values.push(v);
    }
  }
}
