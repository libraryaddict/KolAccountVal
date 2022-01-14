import {
  fileToBuffer,
  getProperty,
  haveFamiliar,
  myGardenType,
  print,
  setProperty,
  toBoolean,
  toInt,
  toItem,
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
}

export class ItemResolver {
  private visitCache: Map<string, string> = new Map();
  private accValStuff: AccValStuff[];
  private accountValCache: Map<Item, boolean> = new Map();
  private accountValCachePropName = "_accountValUrlCache";

  constructor() {
    this.accValStuff = this.loadAccountValStuff();
  }

  loadCache() {
    let prop: string[] = getProperty(this.accountValCachePropName).split(",");

    for (let p of prop) {
      if (!p.includes(":")) {
        continue;
      }

      let spl = p.split(":");

      this.accountValCache.set(toItem(toInt(spl[0])), toBoolean(spl[1]));
    }
  }

  saveCache() {
    let values: string[] = [];

    this.accountValCache.forEach((val, key) => {
      values.push(toInt(key) + ":" + val);
    });

    setProperty(this.accountValCachePropName, values.join(","));
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
        if (getProperty(s.data1) == "true") {
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
      }
    }

    if (origSize != this.accountValCache.size) {
      this.saveCache();
    }

    return items;
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
}
