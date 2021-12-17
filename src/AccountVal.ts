import {
  autosellPrice,
  closetAmount,
  displayAmount,
  equippedAmount,
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

class AccountVal {
  private ownedItems: Map<Item, number> = new Map();
  private resolver: ItemResolver = new ItemResolver();
  private priceResolver: PriceResolver;
  private prices: ItemPrice[] = [];
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
        this.addItem(i.item, i.amount);
      });
    }

    if (this.settings.fetchDisplaycase) {
      let items = pager.getDisplaycase(this.settings.playerId);

      items.forEach((v, k) => {
        this.addItem(k, v);
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

      this.ownedItems.set(item, amount);
    }

    this.resolveNoTrades();

    if (this.settings.doFamiliars) {
      this.resolver.resolveFamiliars(this.ownedItems);
    }

    if (this.settings.fetchEverywhere) {
      // Now we add items that are bound. But wait! Some of these are still tradeables!
      for (let item of this.resolver.getUrledItems()) {
        // If we're skipping bound items, or we're skipping untradeables
        if (!this.settings.doBound || !this.settings.doTradeables) {
          let tradeableWorkshed = this.resolver.isWorkshedAndTradeable(item);

          if (
            tradeableWorkshed
              ? !this.settings.doTradeables
              : !this.settings.doBound
          ) {
            continue;
          }
        }

        this.addItem(item);
      }
    }
  }

  private resolveNoTrades() {
    let copy: Map<Item, number> = new Map();

    this.ownedItems.forEach((v, k) => {
      copy.set(k, v);
    });

    for (let item of Item.all()) {
      if (item.tradeable) {
        if (this.settings.doTradeables) {
          continue;
        }
      } else {
        if (this.settings.doNontradeables && autosellPrice(item) > 0) {
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
        i,
        this.ownedItems.get(i),
        false,
        this.settings.doSuperFast ? PriceType.HISTORICAL : null
      );

      if (price.price == 0) {
        price = this.priceResolver.itemPrice(
          i,
          this.ownedItems.get(i),
          false,
          PriceType.MALL_SALES
        );
      }

      this.prices.push(price);
    }

    this.prices.sort(
      (v1, v2) =>
        (v1.price <= 0 ? 999_999_999 : v1.price) *
          this.ownedItems.get(v1.item) -
        (v2.price <= 0 ? 999_999_999 : v2.price) * this.ownedItems.get(v2.item)
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
      let count = this.ownedItems.get(i.item);
      let totalWorth = i.price * count;
      netvalue += totalWorth;

      if (totalWorth <= 0) {
        if (count > 1) {
          mallExtinct.push(count + " @ " + i.item);
        } else {
          mallExtinct.push("" + i.item);
        }
      } else {
        let text =
          this.getNumber(count) +
          " " +
          i.item +
          " worth a total of " +
          this.getNumber(totalWorth);

        let title =
          i.item.name +
          " @ " +
          this.getNumber(i.price) +
          " meat each. Price valid as of " +
          this.getNumber(i.daysOutdated, 1) +
          " days ago";

        lines.push(
          "<font title='" +
            this.escapeHTML(title) +
            "'>" +
            this.escapeHTML(text) +
            "</font>"
        );
      }
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
      print(
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
        " meat!"
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

  addItem(item: Item, count: number = 1) {
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
      "You can provide these as a parameter to accountval to do other stuff than the base script. Hover over them to see aliases",
      "blue"
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

  if (command == null) {
    print("To fine tune what we check, provide the parameter 'help'", "blue");
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
}
