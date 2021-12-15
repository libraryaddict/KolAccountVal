import {
  fileToBuffer,
  getProperty,
  haveFamiliar,
  print,
  visitUrl,
} from "kolmafia";

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
  getUrledItems(): Item[] {
    let items: Item[] = [];

    for (let s of this.accValStuff) {
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
    ownedItems: Map<Item, number>,
    item: Item,
    count: number = 1
  ) {
    ownedItems.set(item, (ownedItems.get(item) | 0) + count);
  }

  resolveBoundToTradeables(
    copy: Map<Item, number>,
    ownedItems: Map<Item, number>
  ) {
    for (let s of this.accValStuff) {
      if (s.itemType != ItemType.UNTRADEABLE_ITEM) {
        continue;
      }

      try {
        let item = Item.get(s.data1);
        let count = copy.get(item);

        if (count == null) {
          continue;
        }

        this.addItem(ownedItems, s.tradeableItem, count);
      } catch (e) {
        print("You probably need to update mafia! Got an error! " + e, "red");
      }
    }
  }

  resolveFamiliars(ownedItems: Map<Item, number>) {
    for (let fam of Familiar.all()) {
      if (!haveFamiliar(fam) || !fam.hatchling.tradeable) {
        continue;
      }

      this.addItem(ownedItems, fam.hatchling);
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
      let spl = line.split("\t");

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
      }

      try {
        let v: AccValStuff = new AccValStuff();

        v.itemType = e;
        v.tradeableItem = Item.get(spl[1]);
        v.data1 = spl[2];
        v.data2 = spl[3];

        values.push(v);
      } catch (e) {
        print("You probably need to update mafia! Got an error! " + e, "red");
      }
    }

    return values;
  }
}