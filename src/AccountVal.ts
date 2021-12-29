import {
  abort,
  autosellPrice,
  closetAmount,
  displayAmount,
  equippedAmount,
  getRevision,
  getVersion,
  getWorkshed,
  isCoinmasterItem,
  itemAmount,
  myClosetMeat,
  myMeat,
  myStorageMeat,
  print,
  printHtml,
  shopAmount,
  shopPrice,
  storageAmount,
  toInt,
} from "kolmafia";
import { ItemResolver } from "./ItemResolver";
import { ItemPrice, PriceResolver, PriceType } from "./PriceResolver";
import {
  AccountValSettings,
  PricingSettings,
  SortBy,
} from "./AccountValSettings";
import { FetchFromPage, StoreItem } from "./PageResolver";

export enum ItemStatus {
  BOUND,

  FAMILIAR,

  IN_USE,

  SHOP_WORTH,
}

export class ValItem {
  name: string;
  tradeableItem: Item;
  bound: ItemStatus;
  shopWorth: number;

  constructor(item: Item, name: string = item.name, bound?: ItemStatus) {
    this.name = name;
    this.tradeableItem = item;
    this.bound = bound;
  }

  getBound(): string {
    if (this.bound == ItemStatus.BOUND) {
      return "Bound";
    } else if (this.bound == ItemStatus.FAMILIAR) {
      return "Familiar";
    } else if (this.bound == ItemStatus.IN_USE) {
      return "In Use";
    }

    return null;
  }

  isBound(): boolean {
    return this.bound == ItemStatus.BOUND || this.bound == ItemStatus.FAMILIAR;
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
        let item = new ValItem(i.item);

        if (this.settings.shopWorth) {
          item.bound = ItemStatus.SHOP_WORTH;
          item.shopWorth = i.price;
        }

        this.addItem(item, i.amount);
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

      if (this.settings.fetchStorage) {
        amount += storageAmount(item);
      }

      if (this.settings.fetchDisplaycase) {
        amount += displayAmount(item);
      }

      if (this.settings.fetchShop) {
        if (this.settings.shopWorth && shopAmount(item) > 0) {
          let i = new ValItem(item);
          i.bound = ItemStatus.SHOP_WORTH;
          i.shopWorth = shopPrice(item);

          this.ownedItems.set(i, shopAmount(item));
          continue;
        } else {
          amount += shopAmount(item);
        }
      }

      if (amount == 0) {
        continue;
      }

      this.ownedItems.set(new ValItem(item), amount);
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
            this.addItem(new ValItem(i, i.name, ItemStatus.IN_USE));
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

    if (this.settings.doBound) {
      this.resolver.resolveBoundToTradeables(copy, this.ownedItems);
    }

    for (let item of this.ownedItems.keys()) {
      if (this.ownedItems.get(item) >= this.settings.minimumAmount) {
        // If we're doing bound items, and this is a bound item..
        if (this.settings.doBound && item.isBound()) {
          continue;
        }

        // If we're doing familiars and this is a familiar
        if (this.settings.doFamiliars && item.bound == ItemStatus.FAMILIAR) {
          continue;
        }

        // If we're doing tradeables, and this isn't a bound item, and is tradeable
        if (
          this.settings.doTradeables &&
          item.tradeableItem.tradeable &&
          !item.isBound()
        ) {
          continue;
        }

        // If we're doing non-tradeables, and this is a non-tradeable that isn't bound. Also is worth something..
        if (
          this.settings.doNontradeables &&
          item.tradeableItem.tradeable &&
          !item.isBound() &&
          autosellPrice(item.tradeableItem) > 0
        ) {
          continue;
        }
      }

      this.ownedItems.delete(item);
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
            i.name +
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

      if (price.price < this.settings.minimumMeat) {
        this.ownedItems.delete(i);
        continue;
      }

      this.prices.push([i, price]);
    }

    this.doSort();
  }

  doSort() {
    if (this.settings.sortBy == SortBy.TOTAL_PRICE) {
      this.prices.sort(
        (v1, v2) =>
          (v1[1].price <= 0 ? 999_999_999 : v1[1].price) *
            this.ownedItems.get(v1[0]) -
          (v2[1].price <= 0 ? 999_999_999 : v2[1].price) *
            this.ownedItems.get(v2[0])
      );
    } else if (this.settings.sortBy == SortBy.PRICE) {
      this.prices.sort(
        (v1, v2) =>
          (v1[1].price <= 0 ? 999_999_999 : v1[1].price) -
          (v2[1].price <= 0 ? 999_999_999 : v2[1].price)
      );
    } else if (this.settings.sortBy == SortBy.QUANTITY) {
      this.prices.sort(
        (v1, v2) => this.ownedItems.get(v1[0]) - this.ownedItems.get(v2[0])
      );
    } else if (this.settings.sortBy == SortBy.NAME) {
      this.prices.sort((v1, v2) => v1[0].name.localeCompare(v2[0].name));
    } else if (this.settings.sortBy == SortBy.ITEM_ID) {
      this.prices.sort(
        (v1, v2) => toInt(v1[0].tradeableItem) - toInt(v2[0].tradeableItem)
      );
    } else if (this.settings.sortBy == "SortBy.SALES_VOLUME") {
      // Removed for now cos it does too many hits
      let toUpdate: Item[] = [];

      for (let i of this.prices) {
        let item = i[1].item;

        if (!item.tradeable || item.gift) {
          continue;
        }

        // If its an item we buy from NPCs
        if (
          autosellPrice(item) > 0 &&
          i[1].price < 1000 &&
          isCoinmasterItem(item)
        ) {
          continue;
        }

        let v = this.priceResolver.history.getMallRecords(item, 7, false);

        if (v == null) {
          toUpdate.push(item);
          continue;
        }

        let priceTotal = i[1].price * this.ownedItems.get(i[0]);
        // If our expected price is different from mall price by a bigger margin than expected.. Aka 50% more expensive/cheap
        let priceDiff =
          i[1].price > v.getPriceSold(30)
            ? v.getPriceSold(30) / i[1].price
            : i[1].price / v.getPriceSold(30);

        let days = priceDiff < 0.5 ? 7 : priceTotal > 5_000_000 ? 30 : 100;
        let daysOld = (Date.now() / 1000 - v.lastUpdated) / (24 * 60 * 60);

        if (daysOld < days) {
          continue;
        }

        toUpdate.push(item);
      }

      print(
        "Need to update " +
          this.getNumber(toUpdate.length) +
          " items mall histories",
        "blue"
      );

      let last = Date.now();
      let progress: number = 0;

      for (let i of toUpdate) {
        if (last + 5000 < Date.now()) {
          last = Date.now();

          print(
            "Checking sales volume of " +
              i.name +
              " (" +
              progress +
              " / " +
              toUpdate.length +
              ")",
            "blue"
          );
        }

        progress++;
        this.priceResolver.history.getAmountSold(i, 30);
      }

      this.prices.sort((v1, v2) => {
        let s1 = this.priceResolver.history.getMallRecords(
          v1[1].item,
          1,
          false
        );
        let s2 = this.priceResolver.history.getMallRecords(
          v2[1].item,
          1,
          false
        );

        return (
          (s1 == null ? 0 : s1.getAmountSold(30)) -
          (s2 == null ? 0 : s2.getAmountSold(30))
        );
      });
    } else {
      abort("Unknown sort option " + this.settings.sortBy);
    }

    if (this.settings.reverseSort) {
      print("Reverse");
      this.prices.reverse();
    }
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
    let shopNetValue: number = 0;
    let shopPricedAt: number = 0;

    for (let i of this.prices) {
      let item = i[0];
      let price = i[1];
      let count = this.ownedItems.get(item);
      let totalWorth = price.price * count;
      netvalue += totalWorth;

      let titleName = item.name;

      if (item.name != item.tradeableItem.name) {
        titleName = item.name + " (" + item.tradeableItem.name + ")";
      }

      let title =
        titleName +
        " @ " +
        this.getNumber(price.price) +
        " meat each. Price valid as of " +
        this.getNumber(price.daysOutdated, 1) +
        " days ago";

      if (item.shopWorth > 0) {
        title += ". Shop selling at: " + this.getNumber(item.shopWorth);
      }

      let name = this.escapeHTML(item.name);

      if (item.bound != null) {
        let boundInfo: string;
        let color = "#db2525";

        if (item.bound == ItemStatus.SHOP_WORTH) {
          let overpricedPerc = item.shopWorth / price.price;

          if (item.shopWorth < 999_999_000) {
            shopPricedAt += item.shopWorth * count;
            shopNetValue += totalWorth;
          }

          if (overpricedPerc <= 1.05) {
            color = "#196f3d";
          }

          boundInfo = `Price: ${this.getNumber(
            Math.round(overpricedPerc * 100)
          )}%`;
        } else {
          boundInfo = item.getBound();
        }

        name = `${name} (<font color='${color}' title='${title}'>${this.escapeHTML(
          boundInfo
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

    let pronoun = this.settings.playerId == null ? "You" : "They";

    print(
      pronoun + " are worth " + this.getNumber(netvalue) + " meat!",
      "blue"
    );

    let mrAWorth = (0.0 + netvalue) / aWorth;

    print(
      "Going by the value of a Mr. Accessory, that's $" +
        this.getNumber(mrAWorth * 10)
    );

    if (
      shopPricedAt > 0 &&
      this.prices.filter((v) => v[0].bound == ItemStatus.SHOP_WORTH).length ==
        this.prices.length
    ) {
      shopPricedAt /= shopNetValue;
      print(
        `Overall, the shop is ${this.getNumber(
          Math.round(shopPricedAt * 100)
        )}% of mall`
      );
      print(
        "Disclaimer: Cheapest price being 100% can mean we're comparing prices against.. this shop.",
        "gray"
      );
    }

    this.printMeat();
  }

  printMeat() {
    if (!this.settings.doTradeables) {
      return;
    }

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

    let tCommand = command;
    let spl: string[] = [];
    let match: RegExpMatchArray;

    // Splitting so we can do name="Tom the Hunk"
    while (
      (match = tCommand.match(/(?:^| )([^ ]+=(\"|')[^=]+(\"|'))(?:$| )/)) !=
      null
    ) {
      let v = match[1];

      while (v.includes('"') || v.includes("'")) {
        v = v.replace('"', "").replace("'", "");
      }

      spl.push(v);
      tCommand = tCommand.replace(match[1], "").trim().replace(/ +/, " ");
    }

    if (tCommand.length > 0) {
      spl.push(...tCommand.split(" "));
    }

    let unknown = settings.doSettings(spl);

    priceSettings.maxHistoricalAge = settings.maxAge;
    priceSettings.maxMallSalesAge = settings.maxAge;
    priceSettings.cheapHistoricalAge = settings.maxAge * 10;

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