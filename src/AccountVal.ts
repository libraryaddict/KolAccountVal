import {
  autosellPrice,
  closetAmount,
  displayAmount,
  equippedAmount,
  getRevision,
  getVersion,
  getWorkshed,
  itemAmount,
  myClosetMeat,
  myMeat,
  myStorageMeat,
  print,
  printHtml,
  shopAmount,
  storageAmount,
} from "kolmafia";
import { ItemResolver } from "./ItemResolver";
import { ItemPrice, PriceResolver, PriceType } from "./PriceResolver";
import { AccountValSettings, PricingSettings } from "./AccountValSettings";
import { FetchFromPage, StoreItem } from "./PageResolver";

export class ValItem {
  name: string;
  tradeableItem: Item;
  bound: string;

  constructor(item: Item, name: string = item.name, bound?: string) {
    this.name = name;
    this.tradeableItem = item;
    this.bound = bound;
  }
}

class AccountVal {
  private ownedItems: Map<ValItem, number> = new Map();
  private resolver: ItemResolver = new ItemResolver();
  private priceResolver: PriceResolver;
  private prices: [ValItem, ItemPrice][] = [];
  private settings: AccountValSettings;

  constructor(settings: AccountValSettings, priceSettings: PricingSettings) {
    this.settings = settings;
    this.priceResolver = new PriceResolver(priceSettings);
  }

  loadPageItems() {
    let pager = new FetchFromPage();

    if (this.settings.fetchShop) {
      let items = pager.getStore(this.settings.playerId);

      items.forEach((i) => {
        this.addItem(new ValItem(i.item), i.amount);
      });
    }

    if (this.settings.fetchDisplaycase) {
      let items = pager.getDisplaycase(this.settings.playerId);

      items.forEach((v, k) => {
        this.addItem(new ValItem(k), v);
      });
    }

    this.resolveNoTrades();
  }

  loadItems() {
    if (this.settings.playerId > 0) {
      this.loadPageItems();
      return;
    }

    for (let item of Item.all()) {
      let amount = 0;

      if (this.settings.fetchCloset) {
        amount += closetAmount(item);
      }

      if (this.settings.fetchInventory) {
        amount += equippedAmount(item) + itemAmount(item);
      }

      if (this.settings.fetchShop) {
        amount += shopAmount(item);
      }

      if (this.settings.fetchStorage) {
        amount += storageAmount(item);
      }

      if (this.settings.fetchDisplaycase) {
        amount += displayAmount(item);
      }

      if (amount == 0) {
        continue;
      }

      this.ownedItems.set(new ValItem(item), amount);
    }

    if (this.settings.fetchEverywhere) {
      if (this.settings.doBound || this.settings.doTradeables) {
        let i = getWorkshed();

        if (i != null && i != Item.get("None")) {
          this.addItem(new ValItem(i, i.name, "In Use"));
        }
      }
    }

    if (this.settings.doFamiliars) {
      this.resolver.resolveFamiliars(this.ownedItems);
    }

    // Check our current workshed
    if (this.settings.fetchEverywhere) {
      if (this.settings.doBound || this.settings.doTradeables) {
        let i = getWorkshed();

        if (i != null && i != Item.get("None")) {
          if (
            i.tradeable ? this.settings.doTradeables : this.settings.doBound
          ) {
            this.addItem(new ValItem(i, i.name, "In Use"));
          }
        }
      }
    }

    if (this.settings.doBound) {
      for (let item of this.resolver.getUrledItems()) {
        if (
          item[0].tradeable
            ? !this.settings.doTradeables
            : !this.settings.doBound
        ) {
          continue;
        }

        this.addItem(new ValItem(item[0], item[0].name, item[1]));
      }
    }

    this.resolveNoTrades();
  }

  private resolveNoTrades() {
    let copy: Map<ValItem, number> = new Map();

    this.ownedItems.forEach((v, k) => {
      copy.set(k, v);
    });

    for (let item of this.ownedItems.keys()) {
      if (item.tradeableItem.tradeable) {
        if (this.settings.doTradeables) {
          continue;
        }
      } else {
        if (
          this.settings.doNontradeables &&
          autosellPrice(item.tradeableItem) > 0
        ) {
          continue;
        }
      }

      this.ownedItems.delete(item);
    }

    if (this.settings.doBound) {
      this.resolver.resolveBoundToTradeables(copy, this.ownedItems);
    }
  }

  doPricing() {
    let checked = 0;
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

      let price = this.priceResolver.itemPrice(
        i.tradeableItem,
        this.ownedItems.get(i),
        false,
        this.settings.doSuperFast ? PriceType.HISTORICAL : null
      );

      if (price.price == 0) {
        price = this.priceResolver.itemPrice(
          i.tradeableItem,
          this.ownedItems.get(i),
          false,
          PriceType.MALL_SALES
        );
      }

      this.prices.push([i, price]);
    }

    this.prices.sort(
      (v1, v2) =>
        (v1[1].price <= 0 ? 999_999_999 : v1[1].price) *
          this.ownedItems.get(v1[0]) -
        (v2[1].price <= 0 ? 999_999_999 : v2[1].price) *
          this.ownedItems.get(v2[0])
    );
  }

  doCheck() {
    let netvalue: number = 0;
    this.doPricing();

    let aWorth = this.priceResolver.itemPrice(
      Item.get("Mr. Accessory"),
      1
    ).price;

    let lines: string[] = [];
    let mallExtinct: string[] = [];

    for (let i of this.prices) {
      let item = i[0];
      let price = i[1];
      let count = this.ownedItems.get(item);
      let totalWorth = price.price * count;
      netvalue += totalWorth;

      let name = this.escapeHTML(item.name);

      if (item.bound != null) {
        name = `${name} (<font color='#db2525'>${this.escapeHTML(
          item.bound
        )}</font>)`;
      }

      if (totalWorth <= 0) {
        if (count > 1) {
          mallExtinct.push(count + " @ " + name);
        } else {
          mallExtinct.push(name);
        }

        continue;
      }

      let text =
        this.getNumber(count) +
        " " +
        name +
        " worth a total of " +
        this.getNumber(totalWorth);

      let titleName = item.name;

      if (item.bound != null) {
        titleName = item.name + " (" + item.tradeableItem.name + ")";
      }

      let title =
        titleName +
        " @ " +
        this.getNumber(price.price) +
        " meat each. Price valid as of " +
        this.getNumber(price.daysOutdated, 1) +
        " days ago";

      lines.push(
        "<font title='" + this.escapeHTML(title) + "'>" + text + "</font>"
      );
    }

    let skipping = Math.max(0, lines.length - this.settings.displayLimit);

    if (skipping > 0) {
      printHtml(
        "<font color='gray'>Skipping " +
          this.getNumber(skipping) +
          " lines and displaying the last " +
          this.getNumber(this.settings.displayLimit) +
          " lines..</font>"
      );
    }

    for (let i = skipping; i < lines.length; i++) {
      printHtml(lines[i]);
    }

    if (mallExtinct.length > 0) {
      let colors: string[] = ["#4f5893", "#934f4f"];

      mallExtinct = mallExtinct.map(
        (s, i) => "<font color='" + colors[i % 2] + "'>" + s + "</font>"
      );

      printHtml(
        "There were " +
          mallExtinct.length +
          " mall extinct items! Items: " +
          mallExtinct.join(", ")
      );
    }

    print(
      (this.settings.playerId == null ? "You" : "They") +
        " are worth " +
        this.getNumber(netvalue) +
        " meat!",
      "blue"
    );

    let mrAWorth = (0.0 + netvalue) / aWorth;

    print(
      "Going by the value of a Mr. Accessory, that's $" +
        this.getNumber(mrAWorth * 10)
    );

    let meat = 0;

    if (this.settings.fetchInventory) {
      meat += myMeat();
    }

    if (this.settings.fetchCloset) {
      meat += myClosetMeat();
    }

    if (this.settings.fetchStorage) {
      meat += myStorageMeat();
    }

    if (meat > 0 && this.settings.playerId == null) {
      print("This doesn't include your " + this.getNumber(meat) + " meat!");
    }
  }

  escapeHTML(str: string): string {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  addItem(item: ValItem, count: number = 1) {
    this.ownedItems.set(item, (this.ownedItems.get(item) | 0) + count);
  }

  private getNumber(number: number, trimAt: number = 2): string {
    var str = number.toString().split(".");

    if (str.length > 1 && str[1].length > trimAt) {
      str[1] = str[1].substring(0, trimAt);
    }

    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  doHelp() {
    print(
      "AccountVal is a script to check what your account is worth, and find the good stuff fast.",
      "blue"
    );
    print(
      "You can provide these as a parameter to accountval to do other stuff than the base script. Hover over them to see aliases.",
      "blue"
    );
    printHtml(
      "<font color='blue'>Use ! or - to negate a boolean option, as well as =. Eg:</font><font color='gray'> -bound !bound bound=false</font>"
    );

    for (let setting of AccountValSettings.getSettings()) {
      printHtml(
        "<font color='gray' title='Aliases: " +
          setting.names.join(", ") +
          "'>" +
          setting.names[0] +
          " - " +
          setting.desc +
          "</font>"
      );
    }
    // show - How many to show, defaults to 100
    // count - How many we must have of this item
    // sortby - Indiv Price, Total Price, Amount
    // trade
    // accountval price>3000 iprice>3000 show
  }
}

export function main(command: string) {
  let settings = new AccountValSettings();
  let priceSettings = new PricingSettings();
  let acc = new AccountVal(settings, priceSettings);

  try {
    if (command == null) {
      print(
        "To fine tune what we check, including to tradeables only.. Provide the parameter 'help'",
        "blue"
      );
      command = "";
    } else if (command.toLowerCase() == "help") {
      acc.doHelp();
      return;
    }

    let unknown = settings.doSettings(command.split(" "));

    unknown = priceSettings.doSettings(unknown);

    if (unknown.length > 0) {
      print("Unrecognized params! " + unknown.join(", "), "red");
      return;
    }

    acc.loadItems();
    acc.doCheck();
  } finally {
    let revision = getRevision();

    if (revision != null && revision > 0 && revision < 26000) {
      printHtml(
        "<font color='red'>Warning! You are using an outdated version of KoLmafia! You're likely missing some items, and may not have the ability to render the 'title' attribute! You could even be missing wrapped text!</font>"
      );
      printHtml(
        "Downloads: <a color='blue' href='https://github.com/kolmafia/kolmafia/releases'>[Github]</a> or <a color='blue' href='https://ci.kolmafia.us/'>[Jenkins]</a> <a color='gray' href='https://ci.kolmafia.us/job/Kolmafia/lastSuccessfulBuild/artifact/dist/'>[Link to Jar]</a>"
      );
    }
  }
}
