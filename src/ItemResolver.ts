import {
  Familiar,
  familiarEquippedEquipment,
  fileToBuffer,
  getCampground,
  getPermedSkills,
  getProperty,
  haveFamiliar,
  haveSkill,
  Item,
  myFamiliar,
  myGardenType,
  mySessionItems,
  print,
  setProperty,
  Skill,
  skillModifier,
  toBoolean,
  toInt,
  toItem,
  visitUrl
} from "kolmafia";
import { ItemStatus, ValItem } from "./AccountValLogic";
import { AccountValColors } from "./AccountValColors";

class AccValStuff {
  itemType: ItemType;
  actualItem: Item;
  data1: string;
  data2: string;
}

export enum ItemType {
  UNTRADEABLE_ITEM,

  BOOK,

  PROPERTY,

  EUDORA,

  GARDEN,

  VISIT_URL_CHECK,

  SKILL,

  CURRENCY,

  CAMPGROUND,

  SCRIPT
}

export class ItemResolver {
  private visitCache: Map<string, string> = new Map();
  accValStuff: AccValStuff[];
  private accountValCache: Map<Item, boolean> = new Map();
  private accountValVisitCachePropName = "_accountValVisitCache";

  constructor() {
    this.accValStuff = this.loadAccountValStuff();
  }

  loadCache() {
    const prop: string[] = getProperty(this.accountValVisitCachePropName).split(
      ","
    );

    for (const p of prop) {
      if (!p.includes(":")) {
        continue;
      }

      const spl = p.split(":");

      this.accountValCache.set(toItem(toInt(spl[0])), spl[1].startsWith("t"));
    }
  }

  saveCache() {
    const values: string[] = [];

    this.accountValCache.forEach((val, key) => {
      values.push(toInt(key) + ":" + (val ? "t" : "f"));
    });

    values.sort((v1, v2) => v1.localeCompare(v2));

    const val = values.join(",");

    if (getProperty(this.accountValVisitCachePropName) == val) {
      return;
    }

    setProperty(this.accountValVisitCachePropName, values.join(","));
  }

  /**
   * Get the items from stuff like url visits
   */
  getUrledItems(): [Item, ItemStatus?][] {
    const items: [Item, ItemStatus][] = [];
    const origSize = this.accountValCache.size;

    for (const s of this.accValStuff) {
      // Skills that are marked as no-perm but are permed, basically librams
      if (s.itemType == ItemType.BOOK) {
        if (haveSkill(Skill.get(s.data1))) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.EUDORA) {
        if (
          this.visitCheck(
            s.actualItem,
            "account.php?tab=correspondence",
            s.data1
          )
        ) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.PROPERTY) {
        if (this.testProperty(s.data1)) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
        if (this.visitCheck(s.actualItem, s.data1, s.data2)) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.GARDEN) {
        if (myGardenType() == s.data1) {
          items.push([s.actualItem, ItemStatus.IN_USE]);
        }
      } else if (s.itemType == ItemType.SKILL) {
        if (getPermedSkills()[Skill.get(s.data1).name]) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.CAMPGROUND) {
        if (getCampground()[s.actualItem.name] != null) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      } else if (s.itemType == ItemType.SCRIPT) {
        if (eval(s.data1) as boolean) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      }
    }

    if (origSize != this.accountValCache.size) {
      this.saveCache();
    }

    return items;
  }

  /**
   * This way we can check if they have "always airport" and don't have "_airport today"
   */
  private testProperty(property: string): boolean {
    let result: boolean = true;

    for (const prop of property.split("&")) {
      const isTrue = toBoolean(getProperty(prop.replace("!", "")));
      const isNotNegated = !prop.includes("!");
      result = result && isTrue == isNotNegated;
    }

    return result;
  }

  private addItem(
    ownedItems: Map<ValItem, number>,
    item: Item,
    name: string,
    bound?: ItemStatus,
    count: number = 1,
    worthMultiplier: number = 1
  ) {
    const v = new ValItem(item, name, bound);
    v.worthMultiplier = worthMultiplier;

    ownedItems.set(v, (ownedItems.get(v) | 0) + count);
  }

  resolveBoundToTradeables(
    copy: { [item: string]: [ValItem, number] },
    ownedItems: Map<ValItem, number>,
    resolve: ItemType[]
  ) {
    for (const s of this.accValStuff) {
      if (!resolve.includes(s.itemType)) {
        continue;
      }

      try {
        const item = Item.get(s.data1);
        const pair: [ValItem, number] = copy[item.name];

        if (pair == null) {
          continue;
        }

        const v = pair[0];

        this.addItem(
          ownedItems,
          s.actualItem,
          item.name,
          v.bound == null || v.bound == ItemStatus.NO_TRADE
            ? s.itemType == ItemType.UNTRADEABLE_ITEM
              ? ItemStatus.BOUND
              : ItemStatus.NO_TRADE
            : v.bound,
          pair[1],
          /\d+/.test(s.data2) ? toInt(s.data2) : 1
        );
      } catch (e) {
        print(
          "You probably need to update mafia! Got an error! " + e,
          AccountValColors.attentionGrabbingWarning
        );
      }
    }
  }

  resolveFamiliars(familiars: Familiar[], ownedItems: Map<ValItem, number>) {
    for (const fam of familiars) {
      if (!fam.hatchling.tradeable) {
        continue;
      }

      this.addItem(ownedItems, fam.hatchling, fam + "", ItemStatus.FAMILIAR);
    }
  }

  /**
   * Items that are equipped on an unused fam doesn't show otherwise
   */
  resolveFamiliarItems() {
    const famEquipped: Map<Item, number> = new Map();

    for (const fam of Familiar.all()) {
      if (!haveFamiliar(fam) || myFamiliar() == fam) {
        continue;
      }

      const item = familiarEquippedEquipment(fam);

      if (item == null || item == Item.none) {
        continue;
      }

      famEquipped.set(item, (famEquipped.get(item) | 0) + 1);
    }

    return famEquipped;
  }

  resolveSessionItems() {
    const map: Map<Item, number> = new Map();

    Object.entries(mySessionItems()).forEach((value) => {
      map.set(Item.get(value[0]), value[1]);
    });

    return map;
  }

  visitCheck(item: Item, url: string, find: string) {
    if (this.accountValCache.has(item)) {
      return this.accountValCache.get(item);
    }

    let page = this.visitCache.get(url);

    if (page == null) {
      page = visitUrl(url);
      this.visitCache.set(url, page);
    }

    const result: boolean = page.includes(find);

    this.accountValCache.set(item, result);

    return result;
  }

  loadAccountValStuff(): AccValStuff[] {
    const buffer = fileToBuffer("accountval_binds.txt");
    const values: AccValStuff[] = [];

    for (const line of buffer.split(/(\n|\r)+/)) {
      if (line.startsWith("#") || line.length == 0) {
        continue;
      }

      const spl = line.split("\t");

      if (spl.length < 2) {
        continue;
      }

      let e: ItemType;

      switch (spl[0]) {
        case "i":
          e = ItemType.UNTRADEABLE_ITEM;
          break;
        case "b":
          e = ItemType.BOOK;
          break;
        case "p":
          e = ItemType.PROPERTY;
          break;
        case "e":
          e = ItemType.EUDORA;
          break;
        case "v":
          e = ItemType.VISIT_URL_CHECK;
          break;
        case "g":
          e = ItemType.GARDEN;
          break;
        case "t":
          e = ItemType.CURRENCY;
          break;
        case "c":
          e = ItemType.CAMPGROUND;
          break;
        case "s":
          e = ItemType.SCRIPT;
          break;
        default:
          print(
            "Found line '" + line + "' which I can't handle!",
            AccountValColors.attentionGrabbingWarning
          );
      }

      try {
        const v: AccValStuff = new AccValStuff();

        v.itemType = e;
        v.actualItem = Item.get(spl[1]);
        v.data1 = spl[2];
        v.data2 = spl[3];

        values.push(v);
      } catch (e) {
        print(
          "You probably need to update mafia! Got an error! " + e,
          AccountValColors.attentionGrabbingWarning
        );
      }
    }

    this.loadSkills(values);

    loop: for (const v of values) {
      if (v.actualItem.tradeable) {
        continue;
      }

      for (const v1 of values) {
        if (
          v1.itemType != ItemType.UNTRADEABLE_ITEM &&
          v1.itemType != ItemType.CURRENCY
        ) {
          continue;
        }

        if (Item.get(v1.data1) != v.actualItem) {
          continue;
        }

        continue loop;
      }

      print(
        "Missing a tradeable item for " + v.actualItem,
        AccountValColors.attentionGrabbingWarning
      );
    }

    this.loadCache();

    return values;
  }

  loadSkills(values: AccValStuff[]) {
    // Skip items that don't last across ascensions or can't be valued
    const itemsSkills: Map<Item, Skill> = new Map(
      Item.all()
        .map((i) => [i, skillModifier(i, "Skill")] as [Item, Skill])
        .filter(
          ([i, skill]) =>
            !i.reusable && !i.quest && !i.gift && skill != Skill.none
        )
    );

    // Now we load the skills we have
    for (const [i, skill] of itemsSkills) {
      // Skip items that are not tradeable skills, because you either have a skill linked to an untradeable item, or a tradeable item.
      // If its linked to an untradeable, then we can check the untradeable item itself. Not bother with the skill.
      if (!i.tradeable) {
        continue;
      }

      const v: AccValStuff = new AccValStuff();

      v.itemType = ItemType.SKILL;
      v.actualItem = i;
      v.data1 = toInt(skill).toString();

      values.push(v);
    }
  }
}
