import {
  Familiar,
  fileToBuffer,
  getProperty,
  getRevision,
  haveFamiliar,
  haveSkill,
  Item,
  myGardenType,
  print,
  setProperty,
  Skill,
  skillModifier,
  toBoolean,
  toInt,
  toItem,
  toSkill,
  visitUrl,
  wait,
  waitq,
} from "kolmafia";
import { ItemStatus, ValItem } from "./AccountVal";

class AccValStuff {
  itemType: ItemType;
  actualItem: Item;
  data1: string;
  data2: string;
}

enum ItemType {
  UNTRADEABLE_ITEM,

  BOOK,

  PROPERTY,

  EUDORA,

  GARDEN,

  VISIT_URL_CHECK,

  SKILL,
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
    let prop: string[] = getProperty(this.accountValUrlCachePropName).split(
      ","
    );

    for (let p of prop) {
      if (!p.includes(":")) {
        continue;
      }

      let spl = p.split(":");

      this.accountValCache.set(toItem(toInt(spl[0])), spl[1].startsWith("t"));
    }
  }

  saveCache() {
    let values: string[] = [];

    this.accountValCache.forEach((val, key) => {
      values.push(toInt(key) + ":" + (val ? "t" : "f"));
    });

    let val = values.join(",");

    if (getProperty(this.accountValUrlCachePropName) == val) {
      return;
    }

    setProperty(this.accountValUrlCachePropName, values.join(","));
  }

  hasSkill(item: Item, skill: Skill) {
    if (this.accountValCache.has(item)) {
      return this.accountValCache.get(item);
    }

    let url = "charsheet.php";
    let page = this.visitCache.get(url);

    if (page == null) {
      page = visitUrl(url);
      this.visitCache.set(url, page);
    }

    let result: string[] = page.match(
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
    let items: [Item, ItemStatus][] = [];
    let origSize = this.accountValCache.size;

    for (let s of this.accValStuff) {
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

    for (let prop of property.split("&")) {
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
    count: number = 1
  ) {
    let v = new ValItem(item, name, bound);

    ownedItems.set(v, (ownedItems.get(v) | 0) + count);
  }

  resolveBoundToTradeables(
    copy: Map<ValItem, number>,
    ownedItems: Map<ValItem, number>
  ) {
    for (let s of this.accValStuff) {
      if (s.itemType != ItemType.UNTRADEABLE_ITEM) {
        continue;
      }

      try {
        let item = Item.get(s.data1);
        let v: ValItem;

        for (let k of copy.keys()) {
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
          v.bound == null ? ItemStatus.BOUND : v.bound,
          copy.get(v)
        );
      } catch (e) {
        print("You probably need to update mafia! Got an error! " + e, "red");
      }
    }
  }

  resolveFamiliars(ownedItems: Map<ValItem, number>) {
    for (let fam of Familiar.all()) {
      if (!haveFamiliar(fam) || !fam.hatchling.tradeable) {
        continue;
      }

      this.addItem(ownedItems, fam.hatchling, fam + "", ItemStatus.FAMILIAR);
    }
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

    let result: boolean = page.includes(find);

    this.accountValCache.set(item, result);

    return result;
  }

  loadAccountValStuff(): AccValStuff[] {
    let buffer = fileToBuffer("accountval_binds.txt");
    let values: AccValStuff[] = [];

    for (let line of buffer.split("\n")) {
      if (line.startsWith("#") || line.length == 0) {
        continue;
      }

      let spl = line.split("\t");

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
        default:
          print("Found line '" + line + "' which I can't handle!");
      }

      try {
        let v: AccValStuff = new AccValStuff();

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

    loop: for (let v of values) {
      if (v.actualItem.tradeable) {
        continue;
      }

      for (let v1 of values) {
        if (v1.itemType != ItemType.UNTRADEABLE_ITEM) {
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
    let cache: string = getProperty(this.accountValSkillCachePropName);

    if (cache.split(",")[0] == getRevision().toString()) {
      let spl = cache.substring(cache.indexOf(",") + 1).split(",");

      for (let s of spl) {
        let spl2 = s.split(/[:;]/);

        let v: AccValStuff = new AccValStuff();

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

    let propValues: string[] = [getRevision().toString()];

    // Now we load the skills we have
    for (let i of Item.all()) {
      // Skip items that don't last across ascensions
      if (i.quest || i.gift) {
        continue;
      }

      // Skip items that are not tradeable skills, because you either have a skill linked to an untradeable item, or a tradeable item.
      // If its linked to an untradeable, then we can check the untradeable item itself. Not bother with the skill.
      if (!i.tradeable) {
        continue;
      }

      let skill = skillModifier(i, "Skill");

      if (skill == Skill.get("None")) {
        continue;
      }

      let v: AccValStuff = new AccValStuff();

      v.itemType = ItemType.SKILL;
      v.actualItem = i;
      v.data1 = toInt(skill).toString();

      values.push(v);
      propValues.push(toInt(i) + ":" + v.data1);
    }

    for (let i of Item.all()) {
      if (
        i.tradeable ||
        i.quest ||
        i.gift ||
        !i.name.match(/^.* \([a-zA-Z]+\)/) ||
        skillModifier(i, "Skill") != Skill.get("None")
      ) {
        continue;
      }

      let name = i.name.substring(0, i.name.lastIndexOf("(") - 1);

      for (let i2 of Item.all()) {
        if (!i2.tradeable || i2.gift || i2.quest || !i2.name.includes(name)) {
          continue;
        }

        let v: AccValStuff = new AccValStuff();
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
