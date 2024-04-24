import {
  entityDecode,
  getPlayerName,
  Item,
  myClosetMeat,
  myId,
  myMeat,
  mySessionMeat,
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
import { AccountValColors, showAccountvalColors } from "./AccountValColors";

class AccountVal {
  private logic: AccountValLogic;
  private settings: AccountValSettings;

  doCheck() {
    let netvalue: number = 0;

    this.logic.doPricing();

    const aWorth = this.logic.priceResolver.itemPrice(
      Item.get("Mr. Accessory"),
      1
    ).price;

    let lines: string[] = [];
    const mallExtinct: [string, string][] = [];
    let shopNetValue: number = 0;
    let shopPricedAt: number = 0;
    let lastCategory = null;
    let shelfValue: number = 0;

    const onShelfName = (name: string, worth: number) => {
      if (!this.settings.doCategories || name == lastCategory) {
        shelfValue += worth;

        return;
      }

      if (lastCategory != null) {
        lines.push(
          `<u><b>DC Shelf:</b> ${this.escapeHTML(lastCategory)}<font color='${
            AccountValColors.minorNote
          }'>, worth ${AccountValUtils.getNumber(shelfValue)} meat</font></u>`
        );
        lines.push("");
      }

      lastCategory = name;
      shelfValue = worth;
    };

    for (let no = this.logic.prices.length - 1; no >= 0; no--) {
      const item = this.logic.prices[no][0];
      const price = this.logic.prices[no][1];

      // Mall extinct items should be 1b
      const worthEach =
        price.price <= 0 && item.worthMultiplier == 1
          ? -1
          : price.price * (1 / item.worthMultiplier);

      const count = this.logic.ownedItems.get(item);
      const totalWorth = Math.round(worthEach * count);
      netvalue += totalWorth;

      if (lines.length >= this.settings.displayLimit) {
        continue;
      }

      let titleName = item.tradeableItem.name;
      const priceType =
        price.accuracy == PriceType.NEW_PRICES
          ? "last recorded"
          : price.accuracy == PriceType.MALL_SALES
          ? "last sold"
          : price.accuracy == PriceType.AUTOSELL
          ? "autosell"
          : "last malled";
      const validAsOf =
        "Price valid as of " +
        AccountValUtils.getNumber(price.daysOutdated, 1) +
        " day" +
        (price.daysOutdated != 1 ? "s" : "") +
        " ago";
      let tradeableWorth =
        AccountValUtils.getNumber(price.price) + " meat each.";

      if (price.price < 0) {
        tradeableWorth = "as mall extinct.";
      }

      let title =
        titleName + " @ " + priceType + " " + tradeableWorth + " " + validAsOf;

      if (item.name != item.tradeableItem.name && item.worthMultiplier != 1) {
        titleName = `1 ${item.tradeableItem.name} / ${item.worthMultiplier} ${
          item.pluralName
        } = ${AccountValUtils.getNumber(worthEach)} each.`;

        title =
          titleName +
          " " +
          item.tradeableItem.name +
          " " +
          priceType +
          " " +
          tradeableWorth +
          " " +
          validAsOf;
      }

      if (price.volume >= 0) {
        title += `. ${AccountValUtils.getNumber(
          price.volume
        )} sold in the last week.`;
      }

      if (item.shopWorth > 0) {
        title +=
          ". Shop selling at: " + AccountValUtils.getNumber(item.shopWorth);
      }

      if (item.snapshotSource != null) {
        title = `Owns in ${item.snapshotSource}. ${title}`;
      }

      let name = this.escapeHTML(item.name);

      if (item.bound != null) {
        let boundInfo: string;
        let color = AccountValColors.shopPricesOverpriced;

        if (item.bound == ItemStatus.SHOP_WORTH) {
          const overpricedPerc = item.shopWorth / worthEach;

          if (item.shopWorth < 999_999_000) {
            shopPricedAt += item.shopWorth * count;
            shopNetValue += totalWorth;
          }

          if (overpricedPerc <= 1.05) {
            color = AccountValColors.shopPricedOk;
          }

          boundInfo = AccountValUtils.getNumberOrClamp(
            Math.round(overpricedPerc * 100),
            -999,
            999,
            "Very underpriced",
            "Very overpriced"
          );

          if (boundInfo.match(/\d$/)) {
            boundInfo = `Price: ${boundInfo}%`;
          }
        } else {
          boundInfo = item.getBound();
        }

        name = `${name} (<font color='${color}' title='${this.escapeHTML(
          title
        )}'>${this.escapeHTML(boundInfo)}</font>)`;
      }

      if (worthEach <= 0 || worthEach > 999_999_999) {
        if (count > 1) {
          mallExtinct.push([count + " @ " + name, title]);
        } else {
          mallExtinct.push([name, title]);
        }

        continue;
      }

      onShelfName(item.category, totalWorth);

      const text = `${AccountValUtils.getNumber(
        count
      )} ${name} worth a total of ${AccountValUtils.getNumber(totalWorth)}`;

      lines.push(
        "<font title='" + this.escapeHTML(title) + "'>" + text + "</font>"
      );
    }

    onShelfName(null, 0);

    if (!this.settings.brief) {
      lines = lines.reverse();
      const skipping = Math.max(
        0,
        this.logic.prices.length - this.settings.displayLimit
      );

      if (skipping > 0) {
        printHtml(`
          <font color='${
            AccountValColors.minorNote
          }'>Skipping ${AccountValUtils.getNumber(
          skipping
        )} lines and displaying the last ${AccountValUtils.getNumber(
          this.settings.displayLimit
        )} lines..</font>`);
      }

      if (lines.length > 0) {
        lines.push("");
      }

      if (lines[0] == "") {
        lines.shift();
      }

      for (const line of lines) {
        printHtml(line);
      }

      if (mallExtinct.length > 0) {
        const colors: string[] = [
          AccountValColors.mallExtinctColor1,
          AccountValColors.mallExtinctColor2,
        ];

        const extinct = mallExtinct.map(
          ([name, title], i) =>
            "<font color='" +
            colors[i % 2] +
            "' title='" +
            this.escapeHTML(title) +
            "'>" +
            name +
            "</font>"
        );

        printHtml(
          "There were " +
            extinct.length +
            " mall extinct items! Items: " +
            extinct.join(", ")
        );
      }
    }

    const pronoun = this.settings.fetchClan
      ? "The clan stash is"
      : !this.settings.playerId || this.settings.playerId == toInt(myId())
      ? this.settings.fetchSession
        ? "Your session is"
        : "You are"
      : getPlayerName(this.settings.playerId) + " is";

    let mrAMeat = netvalue;

    print(
      pronoun + " worth " + AccountValUtils.getNumber(netvalue) + " meat!",
      AccountValColors.helpfulStateInfo
    );

    if (this.settings.fetchSession && mySessionMeat() != 0) {
      mrAMeat = netvalue + mySessionMeat();
      print(
        `Add meat from session, that's ${AccountValUtils.getNumber(
          mrAMeat
        )} meat!`,
        AccountValColors.helpfulStateInfo
      );
    }

    if (this.settings.brief) {
      return;
    }

    const mrAWorth = (0.0 + mrAMeat) / aWorth;

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
      let perc = AccountValUtils.getNumberOrClamp(
        Math.round(shopPricedAt * 100),
        -999,
        999,
        "Very underpriced",
        "Very overpriced"
      );

      if (perc.match(/\d$/)) {
        perc += "%";
      }

      print(`Overall, the shop is ${perc} of mall`);
      print(
        "Disclaimer: Cheapest price being 100% can mean we're comparing prices against.. this shop.",
        AccountValColors.minorNote
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
      meatSources.push(
        AccountValUtils.getNumber(myMeat()) + " meat in inventory"
      );
    }

    if (this.settings.fetchCloset && myClosetMeat() != 0) {
      meat += myClosetMeat();
      meatSources.push(
        AccountValUtils.getNumber(myClosetMeat()) + " meat in closet"
      );
    }

    if (this.settings.fetchStorage && myStorageMeat() != 0) {
      meat += myStorageMeat();
      meatSources.push(
        AccountValUtils.getNumber(myStorageMeat()) + " meat in storage"
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
      AccountValColors.helpfulStateInfo
    );
    print(
      "You can provide these as a parameter to accountval to do other stuff than the base script. Hover over them to see aliases.",
      AccountValColors.helpfulStateInfo
    );
    printHtml(
      `<font color='${AccountValColors.helpfulStateInfo}'>Use ! or - to negate a boolean option, as well as =. Eg:</font><font color='gray'> -bound !bound bound=false</font>`
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
        `<font color='${
          AccountValColors.minorNote
        }' title='Aliases: ${setting.names.join(", ")}'><b>${
          setting.names[0]
        }</b> - ${setting.desc}${defaultOf}</font>`
      );

      even = !even;
    }

    printHtml(
      `<font color='${AccountValColors.minorNote}'>Disclaimer: The prices shown are not absolute, and can overstate what it really is worth.</font>`
    );
    // show - How many to show, defaults to 100
    // count - How many we must have of this item
    // sortby - Indiv Price, Total Price, Amount
    // trade
    // accountval price>3000 iprice>3000 show
  }

  load(command: string): boolean {
    this.settings = new AccountValSettings();

    if (command == "test") {
      this.runTests();

      return false;
    }

    if (command == null) {
      print(
        "To fine tune what we check, including to tradeables only.. Provide the parameter 'help' for more info",
        AccountValColors.helpfulStateInfo
      );
      command = "";
    } else if (command.toLowerCase().match(/([^a-z]|^)help([^a-z]|$)/)) {
      this.settings.doSettings([]);
      this.doHelp();

      return false;
    } else if (command.toLowerCase().match(/^debugcolors=[^ ]+$/)) {
      const scheme = command.split("=")[1];
      showAccountvalColors(scheme);

      return false;
    }

    const spl: string[] = AccountValUtils.splitArguments(
      this.settings,
      command
    );

    const unknown = this.settings.doSettings(spl);

    if (unknown.length > 0) {
      unknown.forEach((s) =>
        printHtml(
          `<font color='${AccountValColors.attentionGrabbingWarning}'>${s}</font>`
        )
      );

      return false;
    }

    return true;
  }

  start() {
    const priceSettings = new PricingSettings();
    priceSettings.maxPriceAge = this.settings.maxAge;
    priceSettings.oldPricing = this.settings.oldPricing;
    this.logic = new AccountValLogic(this.settings, priceSettings);

    this.logic.loadItems();
    this.doCheck();
  }

  runTests() {
    this.runTest("", {
      doBound: true,
      sortBy: SortBy.TOTAL_PRICE,
      fetchInventory: true,
    });
    this.runTest("sort meat!bound", { doBound: false, sortBy: SortBy.PRICE });
    print("Tests Finished", "green");
  }

  runTest(args: string, verify: { [key: string]: any }) {
    this.load(args);

    for (const [key, value] of Object.entries(verify)) {
      const setTo = this.settings[key];

      if (setTo == value) {
        continue;
      }

      print(
        `On '${args}', ${key} was not set to ${value} but instead ${setTo}`,
        "red"
      );
    }
  }
}

export function main(command: string) {
  const val = new AccountVal();

  if (val.load(command)) {
    val.start();
  }
}
