import {
  Familiar,
  Item,
  print,
  toFamiliar,
  toInt,
  toItem,
  visitUrl,
} from "kolmafia";

export class StoreItem {
  item: Item;
  amount: number;
  limit: number;
  price: number;
}

export class FetchFromPage {
  getFamiliars(userId: number): Familiar[] {
    let page = visitUrl("showfamiliars.php?who=" + userId);
    const regex = /onClick='fam\((\d+)\)'/;
    let match: string[];
    const familiars: Familiar[] = [];

    while ((match = page.match(regex)) != null) {
      page = page.replace(match[0], "");

      familiars.push(toFamiliar(toInt(match[1])));
    }

    return familiars;
  }

  getStore(userId: number): StoreItem[] {
    const items: StoreItem[] = [];

    const page = visitUrl("mallstore.php?whichstore=" + userId);

    for (const s of page.split("<tr>")) {
      const match = s.match(
        /selecteditem=(\d+).+?<b>.+?<\/b> \((\d+)\) +(?:\(Limit (\d+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/
      );

      if (match == null) {
        continue;
      }

      const item = new StoreItem();
      item.item = toItem(match[1].substring(0, match[1].length - 9));
      item.amount = toInt(match[2]);
      item.limit = match[3] == null ? 0 : toInt(match[3]);
      item.price = toInt(match[4]);

      items.push(item);
    }

    return items;
  }

  getDisplaycase(userId: number): Map<Item, number> {
    const map: Map<Item, number> = new Map();

    const page = visitUrl("displaycollection.php?who=" + userId);

    for (const s of page.split("<tr>")) {
      const match = s.match(
        /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/
      );

      if (match == null) {
        continue;
      }

      let item = null;

      for (const i of Item.all()) {
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
