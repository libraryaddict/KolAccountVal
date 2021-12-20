import {
  fileToBuffer,
  getProperty,
  haveFamiliar,
  myGardenType,
  print,
  toInt,
  visitUrl,
  wait,
  waitq,
} from "kolmafia";
import { ValItem } from "./AccountVal";

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

  constructor() {
    this.accValStuff = this.loadAccountValStuff();
  }

  /**
   * Get the items from stuff like url visits
   */
  getUrledItems(): [Item, string?][] {
    let items: [Item, string][] = [];

    for (let s of this.accValStuff) {
      if (s.itemType == ItemType.BOOK) {
        if (this.visitCheck("campground.php?action=bookshelf", s.data1)) {
          items.push([s.actualItem, "Bound"]);
        }
      } else if (s.itemType == ItemType.EUDORA) {
        if (this.visitCheck("account.php?tab=correspondence", s.data1)) {
          items.push([s.actualItem, "Bound"]);
        }
      } else if (s.itemType == ItemType.PROPERTY) {
        if (getProperty(s.data1) == "true") {
          items.push([s.actualItem, "Bound"]);
        }
      } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
        if (this.visitCheck(s.data1, s.data2)) {
          items.push([s.actualItem, "Bound"]);
        }
      } else if (s.itemType == ItemType.GARDEN) {
        if (myGardenType() == s.data1) {
          items.push([s.actualItem, "In Use"]);
        }
      }
    }

    return items;
  }

  private addItem(
    ownedItems: Map<ValItem, number>,
    item: Item,
    name: string,
    bound?: string,
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
          v.bound == null ? "Bound" : v.bound,
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

      this.addItem(ownedItems, fam.hatchling, fam + "", "Familiar");
    }
  }

  visitCheck(url: string, find: string) {
    let page = this.visitCache.get(url);

    if (page == null) {
      page = visitUrl(url);
      this.visitCache.set(url, page);
    }

    return page.includes(find);
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

    return values;
  }
}
