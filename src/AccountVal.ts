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
  toInt
} from "kolmafia";
import { AccountValLogic, ItemStatus, ValItem } from "./AccountValLogic";
import {
  AccountValSettings,
  FieldType,
  PricingSettings,
  SortBy
} from "./AccountValSettings";
import { AccountValUtils } from "./AccountValUtils";
import { ItemPrice, PriceType } from "./PriceResolver";
import { AccountValColors, showAccountvalColors } from "./AccountValColors";
import { AccValTiming } from "./AccountValTimings";

class AccountVal {
  private logic: AccountValLogic;
  private settings: AccountValSettings;

  getSettings(): AccountValSettings {
    return this.settings;
  }

  runValuation() {
    let netvalue: number = 0;

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

    const pronoun = this.settings.fetchClan
      ? "The clan stash is"
      : !this.settings.playerId || this.settings.playerId == toInt(myId())
      ? this.settings.fetchSession
        ? "Your session is"
        : "You are"
      : getPlayerName(this.settings.playerId) + " is";

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

    let exceededMax = false;
    const useJsFilter =
      this.logic.jsFilter != null &&
      this.settings.doesJSFilterUsePriceOrSales();

    interface ResolvedItem {
      item: ValItem;
      price: ItemPrice;
      worthEach: number;
      count: number;
    }

    const resolved: ResolvedItem[] = [];

    for (let no = this.logic.prices.length - 1; no >= 0; no--) {
      const item = this.logic.prices[no][0];
      const price = this.logic.prices[no][1];

      // Mall extinct items should be at max natural price
      const worthEach = Math.min(
        this.settings.maxNaturalPrice + 1,
        price.price <= 0 && item.worthMultiplier == 1
          ? -1
          : price.price * (1 / item.worthMultiplier)
      );

      const count = this.logic.ownedItems.get(item);

      if (isNaN(count)) {
        print(
          "Unable to handle the item '" + item.name + "', skipping..",
          AccountValColors.attentionGrabbingWarning
        );
        continue;
      }

      if (useJsFilter) {
        if (
          !this.logic.jsFilter(item.actualItem, count, worthEach, price.volume)
        ) {
          continue;
        }
      }

      resolved.push({
        item: item,
        price: price,
        worthEach: worthEach,
        count: count
      });
    }

    for (const { item, price, worthEach, count } of resolved) {
      exceededMax =
        exceededMax ||
        this.settings.maxNaturalPrice + 1 <
          price.price * (1 / item.worthMultiplier);

      const totalWorth = Math.round(worthEach * count);
      netvalue += totalWorth;

      if (lines.length >= this.settings.displayLimit) {
        continue;
      }

      let title: string[] = [];

      if (item.name != item.tradeableItem.name && item.worthMultiplier != 1) {
        title.push(`=== ${this.escapeHTML(item.name)} ===`);
        title.push("");
        title.push(
          `${this.escapeHTML(item.tradeableItem.name)} / ${this.escapeHTML(
            item.pluralName
          )} (${item.worthMultiplier}) = ${
            item.pluralName
          } are worth ${AccountValUtils.getNumber(
            Math.round(worthEach)
          )} meat each.`
        );
      } else {
        title.push(`=== ${this.escapeHTML(item.tradeableItem.name)} ===`);
        title.push("");
      }

      let tradeableWorth = ` @ ${AccountValUtils.getNumber(price.price)} meat.`;

      if (price.price < 0) {
        tradeableWorth = " as mall extinct.";
      }

      title.push(
        (price.accuracy == PriceType.NEW_PRICES
          ? "Last malled"
          : price.accuracy == PriceType.MALL_SALES
          ? "Last sold"
          : price.accuracy == PriceType.AUTOSELL
          ? "Autosell"
          : "Last mafia malled") + tradeableWorth
      );

      if (price.price2 > 0 && price.accuracy == PriceType.NEW_PRICES) {
        title.push(
          `Last sold @ ${AccountValUtils.getNumber(price.price2)} meat.`
        );
      }

      if (item.shopWorth > 0) {
        title.push(
          pronoun +
            " selling @ " +
            AccountValUtils.getNumber(item.shopWorth) +
            " meat."
        );
      }

      if (count > 1 && this.settings.showSingleItemWorth) {
        title.push(`Worth a total of ${AccountValUtils.getNumber(totalWorth)}`);
      }

      if (price.accuracy != PriceType.AUTOSELL) {
        title.push("");
        title.push(
          "Price valid as of " +
            AccountValUtils.getNumber(price.daysOutdated, 1) +
            " day" +
            (price.daysOutdated != 1 ? "s" : "") +
            " ago."
        );
      }

      if (price.volume >= 0) {
        title.push("");
        title.push(
          `${AccountValUtils.getNumber(price.volume)} sold in the last week.`
        );
      }

      if (item.snapshotSource != null) {
        title = [`Owns in ${item.snapshotSource}.`, ...title];
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

        name = `${name} (<font color='${color}' title='${title.join(
          "&#010;"
        )}'>${this.escapeHTML(boundInfo)}</font>)`;
      }

      if (worthEach <= 0 || worthEach > this.settings.maxNaturalPrice) {
        if (count > 1) {
          mallExtinct.push([count + " @ " + name, title.join("&#010;")]);
        } else {
          mallExtinct.push([name, title.join("&#010;")]);
        }

        continue;
      }

      onShelfName(item.category, totalWorth);

      let text = `${AccountValUtils.getNumber(count)} ${name}`;

      if (this.settings.showSingleItemWorth) {
        text += ` each worth ${AccountValUtils.getNumber(worthEach)}`;
      } else {
        text += ` worth a total of ${AccountValUtils.getNumber(totalWorth)}`;
      }

      lines.push(
        "<font title='" +
          this.escapeHTML(title.join("&#010;")) +
          "'>" +
          text +
          "</font>"
      );
    }

    onShelfName(null, 0);

    if (!this.settings.brief) {
      lines = lines.reverse();
      const skipping = Math.max(
        0,
        resolved.length - this.settings.displayLimit
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
        printHtml(line.replace(/\n/g, "&#010;"));
      }

      if (mallExtinct.length > 0) {
        const colors: string[] = [
          AccountValColors.mallExtinctColor1,
          AccountValColors.mallExtinctColor2
        ];

        const extinct = mallExtinct.map(
          ([name, title], i) =>
            "<font color='" +
            colors[i % 2] +
            "' title='" +
            title +
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
      resolved.filter((v) => v.item.bound == ItemStatus.SHOP_WORTH).length ==
        resolved.length
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

    if (exceededMax) {
      printHtml(
        `<font color='${
          AccountValColors.minorNote
        }' title="The max natural price is currently set to ${AccountValUtils.getNumber(
          this.settings.maxNaturalPrice
        )}. (${
          this.settings.maxNaturalPrice ==
          AccountValSettings.defaultMaxNaturalPrice
            ? "default"
            : `default is ${AccountValUtils.getNumber(
                AccountValSettings.defaultMaxNaturalPrice
              )}`
        })&#010;&#010;You can change this by using 'max=3b' as an arg.&#010;You can also set the property 'accountval_maxNaturalPrice' to a number (3b, 5,000,000, 3m1k, etc)">Some items were expensive and were marked as mall extinct. Hover for details.</font>`
      );
    }
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

    const groups: [string, string[]][] = [];

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

      if (setting.groupUnder != null) {
        let group: [string, string[]] = groups.find(
          ([l]) => l == setting.groupUnder
        );

        if (group == null) {
          groups.push((group = [setting.groupUnder, []]));
        }

        group[1].push(
          `<font title='${setting.desc}${
            setting.names.length > 1
              ? `&#010;&#010;Aliases: ${setting.names
                  .filter((s) => s != setting.names[0])
                  .join(", ")}`
              : ""
          }'><b>${setting.names[0]}</b></font>`
        );
      } else {
        printHtml(
          `<font color='${
            AccountValColors.minorNote
          }' title='Aliases: ${setting.names.join(", ")}'><b>${
            setting.names[0]
          }</b> - ${setting.desc}${defaultOf}</font>`
        );
      }
    }

    for (const [groupName, grouped] of groups) {
      const toPrint = grouped.map((s, i) => {
        return `<font color='${
          i % 2 == 0
            ? AccountValColors.mallExtinctColor1
            : AccountValColors.mallExtinctColor2
        }'>${s}</font>`;
      });
      printHtml(
        `<font color='${
          AccountValColors.minorNote
        }'><b>${groupName}:</b> ${toPrint.join(", ")}</font>`
      );
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
    AccValTiming.start("Construct Logic");
    const priceSettings = new PricingSettings();
    priceSettings.maxPriceAge = this.settings.maxAge;
    priceSettings.oldPricing = this.settings.oldPricing;
    priceSettings.dateToFetch = this.settings.dateToFetch;
    this.logic = new AccountValLogic(this.settings, priceSettings);
    AccValTiming.stop("Construct Logic");

    AccValTiming.start("Load Logic Items");
    this.logic.loadItems();
    AccValTiming.stop("Load Logic Items");

    AccValTiming.start("Load Logic Prices");
    this.logic.doPricing();
    AccValTiming.stop("Load Logic Prices");

    AccValTiming.start("Start Valuation");
    this.runValuation();
    AccValTiming.stop("Start Valuation");
  }

  runTests() {
    this.runTest("", {
      doBound: true,
      sortBy: SortBy.TOTAL_PRICE,
      fetchInventory: true
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
  //   AccValTiming.start("Construct Class");
  const val = new AccountVal();
  //   AccValTiming.stop("Construct Class");

  //   AccValTiming.start("Load Command");

  if (val.load(command)) {
    //     AccValTiming.stop("Load Command");
    AccValTiming.start("Run AccountVal");
    val.start();
    AccValTiming.stop("Run AccountVal");
  }

  if (AccountValSettings.timingsDebug) {
    AccValTiming.printTracked("PRINT_JUST_ONCE");
  }
}
