import { kol } from "../api/apiSupplier";
import { KoLItem, KoLFamiliar, KoLSkill } from "../api/supplierTypings";
import { AccountValColors } from "../utils/colors";
import { AccountValUtils } from "../utils/utils";

export class StoreItem {
  item: KoLItem;
  amount: number;
  limit: number;
  price: number;
}

export interface DisplaycaseItem {
  shelf: string;
  item: KoLItem;
}

export class PageResolver {
  getSnapshot(
    username: string,
  ): (KoLFamiliar | KoLSkill | KoLItem | [KoLItem, number])[] {
    const items: Map<string, KoLItem> = new Map(
      KoLItem.all().map((i) => {
        let name = i.name;

        while (name.match(/<\/?i>/)) {
          name = name.replace(/<\/?i>/, "");
        }

        return [kol.entityDecode(name).toLowerCase(), i];
      }),
    );
    const skills: Map<string, KoLSkill> = new Map(
      KoLSkill.all().map((s) => [kol.entityDecode(s.name).toLowerCase(), s]),
    );
    const fams: Map<string, KoLFamiliar> = new Map(
      KoLFamiliar.all().map((f) => [f.toString().toLowerCase(), f]),
    );
    const ignore: string[] = [...fams.values()].map((f) =>
      f.hatchling.toString().toLowerCase(),
    );
    ignore.push(
      ...Object.values(kol.allNormalOutfits()).map((s) => s.toLowerCase()),
    );
    ignore.push("miming regalia");

    let page = kol.visitUrl(
      "https://api.aventuristo.net/av-snapshot?u=" + username,
    );

    if (!page.includes("<p>Snapshot for <b>")) {
      return [];
    }

    page = page.substring(0, page.indexOf(`id='a7'>Discoveries</h1>`));

    const tdRegex = /<td(.*?)<\/td>/m;
    const linkRegex =
      /class='(perm|hcperm|fam_run_90|fam_have|fam_run_100)'.*?<a href="[^"]+" rel="noreferrer">(?:.*?>)?([^>]*?)<\/a>/;
    let match: string[];
    const has = [];

    while ((match = page.match(tdRegex)) != null) {
      page = page.substring(page.indexOf(match[0]) + match[0].length);
      const link = match[1].match(linkRegex);

      if (link == null) {
        continue;
      }

      let name = kol.entityDecode(link[2]).toLowerCase();

      if (ignore.includes(name)) {
        continue;
      }

      const type = link[1];
      const isFam = !type.includes("perm");

      if (isFam) {
        if (fams.has(name)) {
          has.push(fams.get(name));
        } else {
          kol.print(
            "Unable to resolve the familiar '" + name + "' from av-snapshot",
            AccountValColors.attentionGrabbingWarning,
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
        count = AccountValUtils.toInt(
          name.substring(name.lastIndexOf("x") + 1),
        );
        name = name.substring(0, name.lastIndexOf(" "));
      }

      if (!items.has(name)) {
        kol.print(
          "Unable to resolve the item '" + name + "' from av-snapshot",
          AccountValColors.attentionGrabbingWarning,
        );
        continue;
      }

      has.push([items.get(name), count]);
    }

    return has;
  }

  getFamiliars(userId: number): KoLFamiliar[] {
    let page = kol.visitUrl("showfamiliars.php?who=" + userId);
    const regex = /onClick='fam\((\d+)\)'/;
    let match: string[];
    const familiars: KoLFamiliar[] = [];

    while ((match = page.match(regex)) != null) {
      page = page.replace(match[0], "");
      familiars.push(kol.toFamiliar(AccountValUtils.toInt(match[1])));
    }

    return familiars;
  }

  getStore(userId: number): StoreItem[] {
    const items: StoreItem[] = [];
    const page = kol.visitUrl("mallstore.php?whichstore=" + userId);

    for (const s of page.split("<tr>")) {
      const match = s.match(
        /selecteditem=(\d+).+?<b>.+?<\/b> \(([\d,]+)\) +(?:\(Limit ([\d,]+) \/ day\))?<\/td><td>((?:\d|,)+) Meat<\/td>/,
      );

      if (match == null) {
        continue;
      }

      const item = new StoreItem();
      item.item = KoLItem.get(AccountValUtils.toInt(match[1]));
      item.amount = AccountValUtils.toInt(match[2]);
      item.limit = match[3] == null ? 0 : AccountValUtils.toInt(match[3]);
      item.price = AccountValUtils.toInt(match[4]);
      items.push(item);
    }

    return items;
  }

  getDisplaycase(userId: number): Map<DisplaycaseItem, number> {
    const map: Map<DisplaycaseItem, number> = new Map();
    const descs: Map<string, KoLItem> = new Map(
      KoLItem.all().map((i) => [i.descid, i]),
    );
    const page = kol.visitUrl("displaycollection.php?who=" + userId);
    let lastShelf: string;
    const itemRegex =
      /<td width=30 height=30><img src=".+?" class=hand onClick='descitem\((\d+),(\d+)\)'><\/td><td valign=center><b>.+?<\/b>(?: \(((?:\d|,)+)\))?<\/td><\/tr>/;
    const shelfRegex = /<font color=white>([^<]+)<\/font>/;

    for (const s of page.split("<tr>")) {
      const shelfMatch = s.match(shelfRegex);

      if (shelfMatch != null) {
        lastShelf = kol.entityDecode(shelfMatch[1]);
      }

      const match = s.match(itemRegex);

      if (match == null) {
        continue;
      }

      const item = descs.get(match[1]);

      if (item == null) {
        kol.print(
          "Unknown item description: " + match[1] + ", update mafia?",
          AccountValColors.attentionGrabbingWarning,
        );
        continue;
      }

      map.set(
        { item: item, shelf: lastShelf },
        match[3] == null ? 1 : AccountValUtils.toInt(match[3]),
      );
    }

    return map;
  }
}
