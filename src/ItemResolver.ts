import {
  fileToBuffer,
  getProperty,
  haveFamiliar,
  print,
  toInt,
  visitUrl,
  wait,
  waitq,
} from "kolmafia";
import { ValItem } from "./AccountVal";

class AccValStuff {
  itemType: ItemType;
  tradeableItem: Item;
  data1: string;
  data2: string;
}

enum ItemType {
  UNTRADEABLE_ITEM,

  BOOK,

  PROPERTY,

  EUDORA,

  VISIT_URL_CHECK,
}

export class ItemResolver {
  private visitCache: Map<string, string> = new Map();
  private accValStuff: AccValStuff[];

  constructor() {
    this.accValStuff = this.loadAccountValStuff();
  }

  isWorkshedAndTradeable(item: Item): boolean {
    let foundShed = false;
    let foundNontradeable = false;

    for (let s of this.accValStuff) {
      if (s.tradeableItem != item) {
        continue;
      }

      if (
        s.itemType == ItemType.VISIT_URL_CHECK &&
        s.data1.includes("workshed")
      ) {
        foundShed = true;
      } else if (s.itemType == ItemType.UNTRADEABLE_ITEM) {
        foundNontradeable = true;
      }
    }

    return foundShed && !foundNontradeable;
  }

  /**
   * Get the items from stuff like url visits
   */
  getUrledItems(workshedOnly: boolean = false): Item[] {
    let items: Item[] = [];

    for (let s of this.accValStuff) {
      if (workshedOnly && !s.data1.includes("campground.php?action=workshed")) {
        continue;
      }

      if (s.itemType == ItemType.BOOK) {
        if (this.visitCheck("campground.php?action=bookshelf", s.data1)) {
          items.push(s.tradeableItem);
        }
      } else if (s.itemType == ItemType.EUDORA) {
        if (this.visitCheck("account.php?tab=correspondence", s.data1)) {
          items.push(s.tradeableItem);
        }
      } else if (s.itemType == ItemType.PROPERTY) {
        if (getProperty(s.data1) == "true") {
          items.push(s.tradeableItem);
        }
      } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
        if (this.visitCheck(s.data1, s.data2)) {
          items.push(s.tradeableItem);
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

        let count: number;

        for (let k of copy.keys()) {
          if (k.tradeableItem != item) {
            continue;
          }

          count = copy.get(k);
          break;
        }

        if (count == null) {
          continue;
        }

        this.addItem(ownedItems, s.tradeableItem, item.name, "Bound", count);
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
    let version: number = 0;
    let expectedVersion: number = 1;

    for (let line of buffer.split("\n")) {
      let spl = line.split("\t");

      if (spl.length < 2 || spl[0].startsWith("#")) {
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
        case "version":
          version = toInt(spl[1]);
          continue;
      }

      try {
        let v: AccValStuff = new AccValStuff();

        v.itemType = e;
        v.tradeableItem = Item.get(spl[1]);
        v.data1 = spl[2];
        v.data2 = spl[3];

        values.push(v);

        if (!v.tradeableItem.tradeable) {
          print(
            "Uh, looks like a typo was made. " +
              v.tradeableItem +
              " is not a tradeable item..",
            "red"
          );
        }
      } catch (e) {
        print("You probably need to update mafia! Got an error! " + e, "red");
      }
    }

    if (version == null || version < expectedVersion) {
      print(
        "Your accountval_binds.txt is out of date! Try reinstalling AccountVal. Expected version " +
          expectedVersion +
          ", but got version " +
          version,
        "red"
      );
      wait(3);
    }

    return values;
  }
}
