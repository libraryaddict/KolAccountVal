import {
  entityDecode,
  Familiar,
  Item,
  print,
  Skill,
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
  getSnapshot(username: string): (Familiar | Skill | Item | [Item, number])[] {
    const items: Map<string, Item> = new Map(
      Item.all().map((i) => {
        let name = i.name;

        while (name.match(/<\/?i>/)) {
          name = name.replace(/<\/?i>/, "");
        }

        return [entityDecode(name).toLowerCase(), i];
      })
    );
    const skills: Map<string, Skill> = new Map(
      Skill.all().map((s) => [entityDecode(s.name).toLowerCase(), s])
    );
    const fams: Map<string, Familiar> = new Map(
      Familiar.all().map((f) => [f.toString().toLowerCase(), f])
    );
    // The hatching item is also listed alongside the familiar, so delete any items.
    const ignore: string[] = [...fams.values()].map((f) =>
      f.hatchling.toString().toLowerCase()
    );

    let page = visitUrl(
      "https://api.aventuristo.net/av-snapshot?u=" + username
    );

    if (!page.includes("<p>Snapshot for <b>")) {
      return [];
    }

    page = page.substring(0, page.indexOf(`id='a7'>Discoveries</h1>`));

    const tdRegex = /<td(.*?)<\/td>/m;
    const linkRegex =
      /class='(perm|hcperm|fam_run_90|fam_have|fam_run_100)'.*<a href="[^"]+">(?:.*?>)?([^>]*?)<\/a>/;
    let match: string[];
    const has = [];

    while ((match = page.match(tdRegex)) != null) {
      page = page.substring(page.indexOf(match[0]) + match[0].length);

      const link = match[1].match(linkRegex);

      if (link == null) {
        continue;
      }

      let name = entityDecode(link[2]).toLowerCase();

      if (ignore.includes(name)) {
        continue;
      }

      const type = link[1];
      const isFam = !type.includes("perm");

      if (isFam) {
        if (fams.has(name)) {
          has.push(fams.get(name));
        } else {
          print(
            "Unable to resolve the familiar '" + name + "' from av-snapshot",
            "red"
          );
        }

        continue;
      }

      if (name.match(/: level \d+$/)) {
        name = name.substring(0, name.lastIndexOf(":"));
      } else if (name.match(/ \(\d+\/\d+\)$/)) {
        name = name.substring(0, name.lastIndexOf(" "));
      } else if (name.match(/ \d+\/\d+$/)) {
        continue;
      }

      if (skills.has(name)) {
        has.push(skills.get(name));
        continue;
      }

      if (items.has(name)) {
        has.push(items.get(name));
        continue;
      }

      let count = 1;

      if (name.match(/ x\d+$/)) {
        count = toInt(name.substring(name.lastIndexOf("x") + 1));
        name = name.substring(0, name.lastIndexOf(" "));
      }

      if (!items.has(name)) {
        print(
          "Unable to resolve the item '" + name + "' from av-snapshot",
          "red"
        );
        continue;
      }

      has.push([items.get(name), count]);
    }

    return has;
  }

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
        /selecteditem=(\d+).+?<b>.+?<\/b> \(([\d,]+)\) +(?:\(Limit ([\d,]+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/
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
    const descs: Map<string, Item> = new Map(
      Item.all().map((i) => [i.descid, i])
    );

    const page = visitUrl("displaycollection.php?who=" + userId);

    for (const s of page.split("<tr>")) {
      const match = s.match(
        /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/
      );

      if (match == null) {
        continue;
      }

      const item = descs.get(match[1]);

      if (item == null) {
        print("Unknown item description: " + match[1] + ", update mafia?");
        continue;
      }

      map.set(item, match[3] == null ? 1 : toInt(match[3]));
    }

    return map;
  }
}
