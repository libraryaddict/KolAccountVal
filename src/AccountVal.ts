import {
  entityDecode,
  getPlayerName,
  getRevision,
  Item,
  myClosetMeat,
  myId,
  myMeat,
  myStorageMeat,
  print,
  printHtml,
  toInt,
} from "kolmafia";
import { AccountValLogic, ItemStatus } from "./AccountValLogic";
import {
  AccountValSettings,
  FieldType,
  PricingSettings,
  SortBy,
} from "./AccountValSettings";
import { AccountValUtils } from "./AccountValUtils";
import { PriceType } from "./PriceResolver";

class AccountVal {
  private logic: AccountValLogic;
  private settings: AccountValSettings;

  doCheck() {
    const pronoun = this.settings.fetchClan
      ? "The clan stash is"
      : !this.settings.playerId || this.settings.playerId == toInt(myId())
      ? "You are"
      : getPlayerName(this.settings.playerId) + " is";
    let netvalue: number = 0;
    this.logic.doPricing();

    const aWorth = this.logic.priceResolver.itemPrice(
      Item.get("Mr. Accessory"),
      1
    ).price;

    let lines: string[] = [];
    let mallExtinct: string[] = [];
    let shopNetValue: number = 0;
    let shopPricedAt: number = 0;

    for (let no = this.logic.prices.length - 1; no >= 0; no--) {
      const item = this.logic.prices[no][0];
      const price = this.logic.prices[no][1];

      if (
        this.settings.sales > 0 &&
        this.logic.priceResolver.history.getAmountSold(item.tradeableItem, 14) <
          this.settings.sales
      ) {
        continue;
      }

      const worthEach = price.price * (1 / item.worthMultiplier);

      const count = this.logic.ownedItems.get(item);
      const totalWorth = Math.round(worthEach * count);
      netvalue += totalWorth;

      if (lines.length >= this.settings.displayLimit) {
        continue;
      }

      let titleName = item.name;

      if (item.name != item.tradeableItem.name) {
        titleName =
          item.name +
          (item.worthMultiplier > 1 ? " x " + item.worthMultiplier : "") +
          " (" +
          item.tradeableItem.name +
          ")";
      }

      let title =
        titleName +
        " @ " +
        (price.accuracy == PriceType.MALL_SALES
          ? "last sold "
          : "last malled ") +
        AccountValUtils.getNumber(price.price) +
        " meat each. Price valid as of " +
        AccountValUtils.getNumber(price.daysOutdated, 1) +
        " days ago";

      if (item.shopWorth > 0) {
        title +=
          ". Shop selling at: " + AccountValUtils.getNumber(item.shopWorth);
      }

      let name = this.escapeHTML(item.name);

      if (item.bound != null) {
        let boundInfo: string;
        let color = "#db2525";

        if (item.bound == ItemStatus.SHOP_WORTH) {
          const overpricedPerc = item.shopWorth / worthEach;

          if (item.shopWorth < 999_999_000) {
            shopPricedAt += item.shopWorth * count;
            shopNetValue += totalWorth;
          }

          if (overpricedPerc <= 1.05) {
            color = "#196f3d";
          }

          boundInfo = `Price: ${AccountValUtils.getNumber(
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

      const text =
        AccountValUtils.getNumber(count) +
        " " +
        name +
        " worth a total of " +
        AccountValUtils.getNumber(totalWorth);

      lines.push(
        "<font title='" + this.escapeHTML(title) + "'>" + text + "</font>"
      );
    }

    lines = lines.reverse();
    const skipping = Math.max(
      0,
      this.logic.prices.length - this.settings.displayLimit
    );

    if (skipping > 0) {
      printHtml(
        "<font color='gray'>Skipping " +
          AccountValUtils.getNumber(skipping) +
          " lines and displaying the last " +
          AccountValUtils.getNumber(this.settings.displayLimit) +
          " lines..</font>"
      );
    }

    for (const line of lines) {
      printHtml(line);
    }

    if (mallExtinct.length > 0) {
      const colors: string[] = ["#4f5893", "#934f4f"];

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
      pronoun + " worth " + AccountValUtils.getNumber(netvalue) + " meat!",
      "blue"
    );

    const mrAWorth = (0.0 + netvalue) / aWorth;

    printHtml(
      `<font title='With Mr. Accessory worth being ${AccountValUtils.getNumber(
        aWorth
      )} meat'>Going by the value of a Mr. Accessory, that's $${AccountValUtils.getNumber(
        mrAWorth * 10
      )}</font>`
    );

    if (
      shopPricedAt > 0 &&
      this.logic.prices.filter((v) => v[0].bound == ItemStatus.SHOP_WORTH)
        .length == this.logic.prices.length
    ) {
      shopPricedAt /= shopNetValue;
      print(
        `Overall, the shop is ${AccountValUtils.getNumber(
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
    const meatSources: string[] = [];

    if (this.settings.fetchInventory && myMeat() != 0) {
      meat += myMeat();
      meatSources.push(AccountValUtils.getNumber(myMeat()) + " in inventory");
    }

    if (this.settings.fetchCloset && myClosetMeat() != 0) {
      meat += myClosetMeat();
      meatSources.push(
        AccountValUtils.getNumber(myClosetMeat()) + " in closet"
      );
    }

    if (this.settings.fetchStorage && myStorageMeat() != 0) {
      meat += myStorageMeat();
      meatSources.push(
        AccountValUtils.getNumber(myStorageMeat()) + " in storage"
      );
    }

    if (meat > 0 && this.settings.playerId == 0) {
      printHtml(
        "<font title='" +
          meatSources.join(", ") +
          "'>This doesn't include your " +
          AccountValUtils.getNumber(meat) +
          " meat!</font>"
      );
    }
  }

  escapeHTML(str: string): string {
    return entityDecode(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
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

    let even = true;

    for (const setting of AccountValSettings.getSettings()) {
      let defaultOf = ".</font> <font>Default is: ";

      if (this.settings[setting.field] != null) {
        let val = this.settings[setting.field];

        if (setting.type == FieldType.NUMBER) {
          val = setting.names[0] + "=" + val;
        } else if (setting.type == FieldType.SORTBY) {
          val = setting.names[0] + "=" + SortBy[val];
        }

        if (val == "" && typeof val != "boolean") {
          val = "null";
        }

        defaultOf += val;
      } else {
        defaultOf += "null";
      }

      printHtml(
        `<font color='gray' title='Aliases: ${setting.names.join(", ")}'><b>${
          setting.names[0]
        }</b> - ${setting.desc}${defaultOf}</font>`
      );

      even = !even;
    }

    printHtml(
      "<font color='gray'>Disclaimer: The prices shown are not absolute, and are generally priced at higher than what it really is worth.</font>"
    );
    // show - How many to show, defaults to 100
    // count - How many we must have of this item
    // sortby - Indiv Price, Total Price, Amount
    // trade
    // accountval price>3000 iprice>3000 show
  }

  start(command: string) {
    this.settings = new AccountValSettings();
    const priceSettings = new PricingSettings();
    this.logic = new AccountValLogic(this.settings, priceSettings);

    try {
      if (command == null) {
        print(
          "To fine tune what we check, including to tradeables only.. Provide the parameter 'help'",
          "blue"
        );
        command = "";
      } else if (command.toLowerCase().match(/([^a-z]|^)help([^a-z]|$)/)) {
        this.settings.doSettings([]);
        this.doHelp();
        return;
      }

      const spl: string[] = AccountValUtils.splitArguments(
        this.settings,
        command
      );

      const unknown = this.settings.doSettings(spl);

      if (unknown.length > 0) {
        print("Unrecognized params! " + unknown.join(", "), "red");
        return;
      }

      this.logic.loadItems();
      this.doCheck();
    } finally {
      const revision = getRevision();

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
}

export function main(command: string) {
  new AccountVal().start(command);
}
