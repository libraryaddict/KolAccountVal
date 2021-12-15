import { print, toInt, toItem, visitUrl } from "kolmafia";

export class StoreItem {
  item: Item;
  amount: number;
  limit: number;
  price: number;
}

export class FetchFromPage {
  getStore(userId: number): StoreItem[] {
    let items: StoreItem[] = [];

    let page = visitUrl("mallstore.php?whichstore=" + userId);

    for (let s of page.split("<tr>")) {
      let match = s.match(
        /selecteditem=(\d+).+?<b>.+?<\/b> \((\d+)\) +(?:\(Limit (\d+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/
      );

      if (match == null) {
        continue;
      }

      let item = new StoreItem();
      item.item = toItem(match[1].substring(0, match[1].length - 9));
      item.amount = toInt(match[2]);
      item.limit = match[3] == null ? 0 : toInt(match[3]);
      item.price = toInt(match[4]);

      items.push(item);
    }

    return items;
  }

  getDisplaycase(userId: number): Map<Item, number> {
    let map: Map<Item, number> = new Map();

    let page = visitUrl("displaycollection.php?who=" + userId);

    for (let s of page.split("<tr>")) {
      let match = s.match(
        /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/
      );

      if (match == null) {
        continue;
      }

      let item = null;

      for (let i of Item.all()) {
        if (i.descid != match[1]) {
          continue;
        }

        item = i;
        break;
      }

      if (item == null) {
        print("Unknown item description: " + match[1] + ", update mafia?");
        continue;
      }

      map.set(item, match[3] == null ? 1 : toInt(match[3]));
    }

    return map;
  }
}
