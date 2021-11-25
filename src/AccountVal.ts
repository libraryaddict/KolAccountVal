import {
  autosellPrice,
  closetAmount,
  displayAmount,
  equippedAmount,
  fileToBuffer,
  getProperty,
  getRelated,
  haveFamiliar,
  historicalAge,
  historicalPrice,
  itemAmount,
  mallPrice,
  myClosetMeat,
  myMeat,
  myStorageMeat,
  print,
  shopAmount,
  storageAmount,
  visitUrl,
} from "kolmafia";
import { MallHistory } from "kol-mallhistory";
const mallHistory = eval("require")("scripts/utils/mallhistory.js");

enum ItemType {
  UNTRADEABLE_ITEM,

  BOOK,

  PROPERTY,

  EUDORA,

  VISIT_URL_CHECK,
}

class AccValStuff {
  itemType: ItemType;
  tradeableItem: Item;
  data1: string;
  data2: string;
}

class AccountVal {
  private tradeableOnly: boolean;
  private history: MallHistory;
  private visitCache: Map<string, string> = new Map();
  private ownedItems: Map<Item, number> = new Map();

  constructor(tradeableOnly: boolean) {
    this.tradeableOnly = tradeableOnly;
    this.history = new mallHistory.MallHistory();
    this.loadItems();
  }

  loadItems() {
    for (let item of Item.all()) {
      let amount =
        storageAmount(item) +
        closetAmount(item) +
        displayAmount(item) +
        equippedAmount(item) +
        itemAmount(item) +
        shopAmount(item);

      if (amount == 0) {
        continue;
      }

      this.ownedItems.set(item, amount);
    }

    if (!this.tradeableOnly) {
      let stuff = this.loadAccountValStuff();

      for (let s of stuff) {
        if (s.itemType == ItemType.UNTRADEABLE_ITEM) {
          let count = this.ownedItems.get(Item.get(s.data1));

          if (count == null) {
            continue;
          }

          this.ownedItems.delete(Item.get(s.data1));

          this.addItem(s.tradeableItem, count);
        } else if (s.itemType == ItemType.BOOK) {
          if (this.visitCheck("campground.php?action=bookshelf", s.data1)) {
            this.addItem(s.tradeableItem, 1);
          }
        } else if (s.itemType == ItemType.EUDORA) {
          if (this.visitCheck("account.php?tab=correspondence", s.data1)) {
            this.addItem(s.tradeableItem, 1);
          }
        } else if (s.itemType == ItemType.PROPERTY) {
          if (getProperty(s.data1) == "true") {
            this.addItem(s.tradeableItem, 1);
          }
        } else if (s.itemType == ItemType.VISIT_URL_CHECK) {
          if (this.visitCheck(s.data1, s.data2)) {
            this.addItem(s.tradeableItem, 1);
          }
        }
      }

      for (let fam of Familiar.all()) {
        if (!haveFamiliar(fam)) {
          continue;
        }

        this.addItem(fam.hatchling, 1);
      }

      if (this.ownedItems.get(Item.get("gregarious ghostling")) > 0) {
        // I hate that this is hardcoded but that's the way it is for now
        this.addItem(Item.get("box o' ghosts"), 1);
      }
    }

    for (let item of Item.all()) {
      if (item.tradeable || autosellPrice(item) > 0) {
        continue;
      }

      this.ownedItems.delete(item);
    }
  }

  doCheck() {
    let checked = 0;
    let items: [Item, number][] = [];
    let lastPrinted = Date.now();

    for (let i of this.ownedItems.keys()) {
      if (++checked % 20 == 0 && lastPrinted + 1000 < Date.now()) {
        lastPrinted = Date.now();
        print(
          "Checking value of " +
            i +
            " (" +
            checked +
            " / " +
            this.ownedItems.size +
            ")",
          "blue"
        );
      }

      items.push([i, this.itemPrice(i)]);
    }

    let netvalue: number = myMeat() + myClosetMeat() + myStorageMeat();

    items.sort(
      (v1, v2) =>
        (v1[1] <= 0 ? 999_999_999 : v1[1]) * this.ownedItems.get(v1[0]) -
        (v2[1] <= 0 ? 999_999_999 : v2[1]) * this.ownedItems.get(v2[0])
    );

    for (let i of items) {
      let totalWorth = i[1] * this.ownedItems.get(i[0]);
      netvalue += totalWorth;

      if (totalWorth <= 0) {
        print(
          this.ownedItems.get(i[0]) + " " + i[0] + " that is mall extinct!"
        );
      } else {
        print(
          this.ownedItems.get(i[0]) +
            " " +
            i[0] +
            " worth a total of " +
            this.getNumber(totalWorth)
        );
      }
    }

    print("You are worth " + this.getNumber(netvalue) + " meat!");

    let mrAWorth = (0.0 + netvalue) / 40_000_000; //this.itemPrice(Item.get("Mr. Accessory"));

    print(
      "Going by the value of a Mr. Accessory, that's $" +
        this.getNumber(mrAWorth * 10)
    );
  }

  addItem(item: Item, count: number) {
    if (this.ownedItems.has(item)) {
      count += this.ownedItems.get(item);
    }

    this.ownedItems.set(item, count);
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

      let v: AccValStuff = new AccValStuff();

      v.itemType = e;
      v.tradeableItem = Item.get(spl[1]);
      v.data1 = spl[2];
      v.data2 = spl[3];

      values.push(v);
    }

    return values;
  }

  itemPrice(item: Item, ignoreFold: boolean = false): number {
    if (!item.tradeable) {
      return autosellPrice(item);
    }

    if (
      historicalAge(item) < 14 ||
      (historicalPrice(item) > 0 && historicalPrice(item) < 10000)
    ) {
      return historicalPrice(item);
    }

    let soldRecently = this.history.getAmountSold(item, 14);

    if (soldRecently >= 1) {
      return this.history.getPriceSold(item, 14);
    }

    let lowestMall = mallPrice(item);

    if (ignoreFold) {
      return lowestMall;
    }

    for (let foldable of Object.keys(getRelated(item, "fold"))) {
      let folded = Item.get(foldable);

      lowestMall = Math.min(this.itemPrice(folded, true));
    }

    return lowestMall;
  }

  private getNumber(number: number, trimAt: number = 2): string {
    var str = number.toString().split(".");

    if (str.length > 1 && str[1].length > trimAt) {
      str[1] = str[1].substring(0, trimAt);
    }

    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
}

export function main(tradeableOnly: boolean) {
  if (tradeableOnly == null) {
    print(
      "To check the value of only tradeable items, provide `true` as a parameter!",
      "blue"
    );
  }

  new AccountVal(tradeableOnly).doCheck();
}
