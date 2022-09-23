import {
  Familiar,
  familiarEquippedEquipment,
  fileToBuffer,
  getProperty,
  getRevision,
  haveFamiliar,
  Item,
  myFamiliar,
  myGardenType,
  mySessionItems,
  print,
  setProperty,
  Skill,
  skillModifier,
  toInt,
  toItem,
  toSkill,
  visitUrl,
} from "kolmafia";
import { ItemStatus, ValItem } from "./AccountValLogic";

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

  NO_TRADE,
}

export class ItemResolver {
  private visitCache: Map<string, string> = new Map();
  private accValStuff: AccValStuff[];
  private accountValCache: Map<Item, boolean> = new Map();
  private accountValUrlCachePropName = "_accountValUrlCache";
  private accountValSkillCachePropName = "accountValSkillCache";

  constructor() {
    this.accValStuff = this.loadAccountValStuff();
  }

  loadCache() {
    const prop: string[] = getProperty(this.accountValUrlCachePropName).split(
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

    const val = values.join(",");

    if (getProperty(this.accountValUrlCachePropName) == val) {
      return;
    }

    setProperty(this.accountValUrlCachePropName, values.join(","));
  }

  hasSkill(item: Item, skill: Skill) {
    if (this.accountValCache.has(item)) {
      return this.accountValCache.get(item);
    }

    const url = "charsheet.php";
    let page = this.visitCache.get(url);

    if (page == null) {
      page = visitUrl(url);
      this.visitCache.set(url, page);
    }

    const result: string[] = page.match(
      new RegExp(
        "whichskill=(" + toInt(skill) + ")[^/]+</a> ((P|(?:<b>HP</b>)))",
        "g"
      )
    );

    this.accountValCache.set(item, result != null);

    return result;
  }

  /**
   * Get the items from stuff like url visits
   */
  getUrledItems(): [Item, ItemStatus?][] {
    const items: [Item, ItemStatus][] = [];
    const origSize = this.accountValCache.size;

    for (const s of this.accValStuff) {
      if (s.itemType == ItemType.BOOK) {
        if (
          this.visitCheck(
            s.actualItem,
            "campground.php?action=bookshelf",
            s.data1
          )
        ) {
          //      items.push([s.actualItem, ItemStatus.BOUND]);
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
        if (this.hasSkill(s.actualItem, toSkill(s.data1))) {
          items.push([s.actualItem, ItemStatus.BOUND]);
        }
      }
    }

    if (origSize == this.accountValCache.size) {
      return items;
    }

    this.saveCache();
    return items;
  }

  /**
   * This way we can check if they have "always airport" and don't have "_airport today"
   */
  private testProperty(property: string): boolean {
    let result: boolean = true;

    for (const prop of property.split("&")) {
      result =
        result &&
        (getProperty(prop.replace("!", "")) == "true") == !prop.includes("!");
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
    copy: Map<ValItem, number>,
    ownedItems: Map<ValItem, number>,
    resolve: ItemType[]
  ) {
    for (const s of this.accValStuff) {
      if (!resolve.includes(s.itemType)) {
        continue;
      }

      try {
        const item = Item.get(s.data1);
        let v: ValItem;

        for (const k of copy.keys()) {
          if (k.tradeableItem != item) {
            continue;
          }

          v = k;
          break;
        }

        if (v == null) {
          continue;
        }

        this.addItem(
          ownedItems,
          s.actualItem,
          item.name,
          v.bound == null
            ? s.itemType == ItemType.UNTRADEABLE_ITEM
              ? ItemStatus.BOUND
              : ItemStatus.NO_TRADE
            : v.bound,
          copy.get(v),
          /\d+/.test(s.data2) ? toInt(s.data2) : 1
        );
      } catch (e) {
        print("You probably need to update mafia! Got an error! " + e, "red");
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

      if (item == null || item == Item.get("None")) {
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

    for (const line of buffer.split("\n")) {
      if (line.startsWith("#") || line.length == 0) {
        continue;
      }

      const spl = line.split("\t");

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
          e = ItemType.NO_TRADE;
          break;
        default:
          print("Found line '" + line + "' which I can't handle!");
      }

      try {
        const v: AccValStuff = new AccValStuff();

        v.itemType = e;
        v.actualItem = Item.get(spl[1]);
        v.data1 = spl[2];
        v.data2 = spl[3];

        values.push(v);
      } catch (e) {
        print("You probably need to update mafia! Got an error! " + e, "red");
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
          v1.itemType != ItemType.NO_TRADE
        ) {
          continue;
        }

        if (Item.get(v1.data1) != v.actualItem) {
          continue;
        }

        continue loop;
      }

      print("Missing a tradeable item for " + v.actualItem, "red");
    }

    this.loadCache();
    return values;
  }

  loadSkills(values: AccValStuff[]) {
    const cache: string = getProperty(this.accountValSkillCachePropName);

    if (cache.split(",")[0] == getRevision().toString()) {
      const spl = cache.substring(cache.indexOf(",") + 1).split(",");

      for (const s of spl) {
        const spl2 = s.split(/[:;]/);

        const v: AccValStuff = new AccValStuff();

        v.itemType = ItemType.SKILL;
        v.actualItem = toItem(spl2[0]);

        values.push(v);

        // Skill
        if (s.includes(":")) {
          v.data1 = spl2[1];
        } else {
          // Item
          v.data1 = toItem(toInt(spl2[1])).name;
        }
      }

      return;
    }

    const propValues: string[] = [getRevision().toString()];

    // Now we load the skills we have
    for (const i of Item.all()) {
      // Skip items that don't last across ascensions
      if (i.quest || i.gift) {
        continue;
      }

      // Skip items that are not tradeable skills, because you either have a skill linked to an untradeable item, or a tradeable item.
      // If its linked to an untradeable, then we can check the untradeable item itself. Not bother with the skill.
      if (!i.tradeable) {
        continue;
      }

      const skill = skillModifier(i, "Skill");

      if (skill == Skill.get("None")) {
        continue;
      }

      const v: AccValStuff = new AccValStuff();

      v.itemType = ItemType.SKILL;
      v.actualItem = i;
      v.data1 = toInt(skill).toString();

      values.push(v);
      propValues.push(toInt(i) + ":" + v.data1);
    }

    for (const i of Item.all()) {
      if (
        i.tradeable ||
        i.quest ||
        i.gift ||
        !i.name.match(/^.* \([a-zA-Z]+\)/) ||
        skillModifier(i, "Skill") != Skill.get("None")
      ) {
        continue;
      }

      const name = i.name.substring(0, i.name.lastIndexOf("(") - 1);

      for (const i2 of Item.all()) {
        if (!i2.tradeable || i2.gift || i2.quest || !i2.name.includes(name)) {
          continue;
        }

        const v: AccValStuff = new AccValStuff();
        v.itemType = ItemType.UNTRADEABLE_ITEM;
        v.actualItem = i2;
        v.data1 = i.name;

        values.push(v);
        propValues.push(toInt(i2) + ";" + toInt(i));
      }
    }

    setProperty(this.accountValSkillCachePropName, propValues.join(","));
  }
}
