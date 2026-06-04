import { provider } from "../api/apiSupplier";
import { AccountValLogic } from "../core/logic";
import { AccountValSettings } from "../settings/settings";
import { AccountValUtils } from "../utils/utils";
import { AccountValColors } from "../utils/colors";
import { ReportOutput } from "./output";
import { ValItem, ItemStatus, ItemPrice, PriceType } from "../models/typings";
import { KoLItem } from "../api/supplierTypings";

interface ResolvedItem {
  item: ValItem;
  price: ItemPrice;
  worthEach: number;
  count: number;
}

export class ValuationReport {
  private netvalue: number = 0;
  private aWorth: number;
  private lines: string[] = [];
  private mallExtinct: [string, string][] = [];
  private shopNetValue: number = 0;
  private shopPricedAt: number = 0;
  private lastCategory: string | null = null;
  private shelfValue: number = 0;
  private exceededMax = false;
  private pronoun: string;
  private logic: AccountValLogic;
  private settings: AccountValSettings;
  private out: ReportOutput;

  constructor(
    logic: AccountValLogic,
    settings: AccountValSettings,
    out: ReportOutput,
  ) {
    this.logic = logic;
    this.settings = settings;
    this.out = out;
    this.aWorth = this.logic.priceResolver.itemPrice(
      KoLItem.get("Mr. Accessory"),
    ).price;
    this.pronoun = this.settings.fetchClan
      ? "The clan stash is"
      : !this.settings.playerId ||
          this.settings.playerId == AccountValUtils.toInt(provider().myId())
        ? this.settings.fetchSession
          ? "Your session is"
          : "You are"
        : provider().getPlayerName(this.settings.playerId) + " is";
  }

  public run() {
    const resolved = this.filterAndResolveItems();

    for (const res of resolved) {
      this.formatResolvedItem(res);
    }

    this.onShelfName(null, 0); // close shelf
    this.printLinesAndExtinct(resolved.length);
    this.printSummary();
  }

  private filterAndResolveItems(): ResolvedItem[] {
    const useJsFilter =
      this.logic.jsFilter != null &&
      this.settings.doesJSFilterUsePriceOrSales();
    const resolved: ResolvedItem[] = [];

    for (let no = this.logic.prices.length - 1; no >= 0; no--) {
      const item = this.logic.prices[no][0];
      const price = this.logic.prices[no][1];
      const worthEach = Math.min(
        this.settings.maxNaturalPrice + 1,
        price.price <= 0 && item.worthMultiplier == 1
          ? -1
          : price.price * (1 / item.worthMultiplier),
      );
      const count = this.logic.ownedItems.get(item);

      if (isNaN(count)) {
        this.out.printLine(
          "Unable to handle the item '" + item.name + "', skipping..",
          "plain",
          AccountValColors.attentionGrabbingWarning,
        );
        continue;
      }

      if (
        useJsFilter &&
        !this.logic.jsFilter(item.actualItem, count, worthEach, price.volume)
      ) {
        continue;
      }

      resolved.push({ item, price, worthEach, count });
    }

    return resolved;
  }

  private onShelfName(name: string, worth: number) {
    if (!this.settings.doCategories || name == this.lastCategory) {
      this.shelfValue += worth;

      return;
    }

    if (this.lastCategory != null) {
      this.lines.push(
        `<u><b>DC Shelf:</b> ${this.out.escapeHTML(this.lastCategory)}<font color='${AccountValColors.minorNote}'>, worth ${AccountValUtils.getNumber(this.shelfValue)} meat</font></u>`,
      );
      this.lines.push("");
    }

    this.lastCategory = name;
    this.shelfValue = worth;
  }

  private formatResolvedItem({ item, price, worthEach, count }: ResolvedItem) {
    this.exceededMax =
      this.exceededMax ||
      this.settings.maxNaturalPrice + 1 <
        price.price * (1 / item.worthMultiplier);
    const totalWorth = Math.round(worthEach * count);
    this.netvalue += totalWorth;

    if (this.lines.length >= this.settings.displayLimit) {
      return;
    }

    let title: string[] = [];

    if (item.name != item.tradeableItem.name && item.worthMultiplier != 1) {
      title.push(`=== ${this.out.escapeHTML(item.name)} ===`);
      title.push("");
      title.push(
        `${this.out.escapeHTML(item.tradeableItem.name)} / ${this.out.escapeHTML(item.pluralName)} (${item.worthMultiplier}) = ${item.pluralName} are worth ${AccountValUtils.getNumber(Math.round(worthEach))} meat each.`,
      );
    } else {
      title.push(`=== ${this.out.escapeHTML(item.tradeableItem.name)} ===`);
      title.push("");
    }

    let tradeableWorth = ` @ ${AccountValUtils.getNumber(price.price)} meat.`;

    if (price.price < 0) {
      tradeableWorth = " as mall extinct.";
    }

    const accName =
      price.accuracy == PriceType.NEW_PRICES
        ? "Last malled"
        : price.accuracy == PriceType.MALL_SALES
          ? "Last sold"
          : price.accuracy == PriceType.AUTOSELL
            ? "Autosell"
            : "Last mafia malled";
    title.push(accName + tradeableWorth);

    if (price.price2 > 0 && price.accuracy == PriceType.NEW_PRICES) {
      title.push(
        `Last sold @ ${AccountValUtils.getNumber(price.price2)} meat.`,
      );
    }

    if (item.shopWorth > 0) {
      title.push(
        `${this.pronoun} selling @ ${AccountValUtils.getNumber(item.shopWorth)} meat.`,
      );
    }

    if (count > 1 && this.settings.showSingleItemWorth) {
      title.push(`Worth a total of ${AccountValUtils.getNumber(totalWorth)}`);
    }

    if (price.accuracy != PriceType.AUTOSELL) {
      title.push("");
      title.push(
        `Price valid as of ${AccountValUtils.getNumber(price.daysOutdated, 1)} day${price.daysOutdated != 1 ? "s" : ""} ago.`,
      );
    }

    if (price.volume >= 0) {
      title.push("");
      title.push(
        `${AccountValUtils.getNumber(price.volume)} sold in the last week.`,
      );
    }

    if (item.snapshotSource != null) {
      title = [`Owns in ${item.snapshotSource}.`, ...title];
    }

    let name = this.out.escapeHTML(item.name);

    if (item.bound != null) {
      let boundInfo: string;
      let color = AccountValColors.shopPricesOverpriced;

      if (item.bound == ItemStatus.SHOP_WORTH) {
        const overpricedPerc = item.shopWorth / worthEach;

        if (item.shopWorth < 999_999_000) {
          this.shopPricedAt += item.shopWorth * count;
          this.shopNetValue += totalWorth;
        }

        if (overpricedPerc <= 1.05) {
          color = AccountValColors.shopPricedOk;
        }

        boundInfo = AccountValUtils.getNumberOrClamp(
          Math.round(overpricedPerc * 100),
          -999,
          999,
          "Very underpriced",
          "Very overpriced",
        );

        if (boundInfo.match(/\d$/)) {
          boundInfo = `Price: ${boundInfo}%`;
        }
      } else {
        boundInfo = item.getBound();
      }

      name = `${name} (<font color='${color}' title='${title.join("&#010;")}'>${this.out.escapeHTML(boundInfo)}</font>)`;
    }

    if (worthEach <= 0 || worthEach > this.settings.maxNaturalPrice) {
      if (count > 1) {
        this.mallExtinct.push([count + " @ " + name, title.join("&#010;")]);
      } else {
        this.mallExtinct.push([name, title.join("&#010;")]);
      }

      return;
    }

    this.onShelfName(item.category, totalWorth);

    let text = `${AccountValUtils.getNumber(count)} ${name}`;

    if (this.settings.showSingleItemWorth) {
      text += ` each worth ${AccountValUtils.getNumber(worthEach)}`;
    } else {
      text += ` worth a total of ${AccountValUtils.getNumber(totalWorth)}`;
    }

    this.lines.push(
      "<font title='" +
        this.out.escapeHTML(title.join("&#010;")) +
        "'>" +
        text +
        "</font>",
    );
  }

  private printLinesAndExtinct(totalResolved: number) {
    if (!this.settings.brief) {
      this.lines = this.lines.reverse();
      const skipping = Math.max(0, totalResolved - this.settings.displayLimit);

      if (skipping > 0) {
        this.out.printLine("", "plain");
        this.out.printLine(
          `<font color='${AccountValColors.minorNote}'>Skipping ${AccountValUtils.getNumber(skipping)} lines and displaying the last ${AccountValUtils.getNumber(this.settings.displayLimit)} lines..</font>`,
          "html",
        );
      }

      if (this.lines.length > 0) {
        this.lines.push("");
      }

      if (this.lines[0] == "") {
        this.lines.shift();
      }

      for (const line of this.lines) {
        this.out.printLine(line.replace(/\n/g, "&#010;"), "html");
      }

      if (this.mallExtinct.length > 0) {
        const colors = [
          AccountValColors.mallExtinctColor1,
          AccountValColors.mallExtinctColor2,
        ];
        const extinct = this.mallExtinct.map(
          ([name, title], i) =>
            "<font color='" +
            colors[i % 2] +
            "' title='" +
            title +
            "'>" +
            name +
            "</font>",
        );
        this.out.printLine(
          "There were " +
            extinct.length +
            " mall extinct items! Items: " +
            extinct.join(", "),
          "html",
        );
      }
    }
  }

  private printSummary() {
    let mrAMeat = this.netvalue;
    this.out.printLine(
      this.pronoun +
        " worth " +
        AccountValUtils.getNumber(this.netvalue) +
        " meat!",
      "plain",
      AccountValColors.helpfulStateInfo,
    );

    if (this.settings.fetchSession && provider().mySessionMeat() != 0) {
      mrAMeat = this.netvalue + provider().mySessionMeat();
      this.out.printLine(
        `Add meat from session, that's ${AccountValUtils.getNumber(mrAMeat)} meat!`,
        "plain",
        AccountValColors.helpfulStateInfo,
      );
    }

    if (this.settings.brief) {
      return;
    }

    const mrAWorth = (0.0 + mrAMeat) / this.aWorth;
    this.out.printLine(
      `<font title='With Mr. Accessory worth being ${AccountValUtils.getNumber(this.aWorth)} meat'>Going by the value of a Mr. Accessory, that's $${AccountValUtils.getNumber(mrAWorth * 10)}</font>`,
      "html",
    );

    if (this.shopPricedAt > 0) {
      this.shopPricedAt /= this.shopNetValue;
      let perc = AccountValUtils.getNumberOrClamp(
        Math.round(this.shopPricedAt * 100),
        -999,
        999,
        "Very underpriced",
        "Very overpriced",
      );

      if (perc.match(/\d$/)) {
        perc += "%";
      }

      this.out.printLine(`Overall, the shop is ${perc} of mall`, "plain");
      this.out.printLine(
        "Disclaimer: Cheapest price being 100% can mean we're comparing prices against.. this shop.",
        "plain",
        AccountValColors.minorNote,
      );
    }

    this.printMeat();

    if (this.exceededMax) {
      this.out.printLine(
        `<font color='${AccountValColors.minorNote}' title="The max natural price is currently set to ${AccountValUtils.getNumber(this.settings.maxNaturalPrice)}. (${this.settings.maxNaturalPrice == AccountValSettings.defaultMaxNaturalPrice ? "default" : `default is ${AccountValUtils.getNumber(AccountValSettings.defaultMaxNaturalPrice)}`})&#010;&#010;You can change this by using 'max=3b' as an arg.&#010;You can also set the property 'accountval_maxNaturalPrice' to a number (3b, 5,000,000, 3m1k, etc), this cap increases by 2b every year to account for meatflation">Some items were expensive and were marked as mall extinct. Hover for details.</font>`,
        "html",
      );
    }

    if (this.logic.priceResolver.doWarning()) {
      this.out.printLine(
        `<font color='${AccountValColors.attentionGrabbingWarning}'>Unfortunately I'm having issues resolving mall prices, the old database has gone down and my PR for the other source is on hold and waiting for approval. <u><a href='https://github.com/loathers/pricegun/pull/8'>https://github.com/loathers/pricegun/pull/8</a></u></font>`,
        "html",
      );
      this.out.printLine(
        `As such please bear with me that prices are effectively 'frozen'.`,
        "plain",
        AccountValColors.attentionGrabbingWarning,
      );
    }
  }

  private printMeat() {
    if (!this.settings.doTradeables) {
      return;
    }

    let meat = 0;
    const meatSources: string[] = [];

    if (this.settings.fetchInventory && provider().myMeat() != 0) {
      meat += provider().myMeat();
      meatSources.push(
        AccountValUtils.getNumber(provider().myMeat()) + " meat in inventory",
      );
    }

    if (this.settings.fetchCloset && provider().myClosetMeat() != 0) {
      meat += provider().myClosetMeat();
      meatSources.push(
        AccountValUtils.getNumber(provider().myClosetMeat()) +
          " meat in closet",
      );
    }

    if (this.settings.fetchStorage && provider().myStorageMeat() != 0) {
      meat += provider().myStorageMeat();
      meatSources.push(
        AccountValUtils.getNumber(provider().myStorageMeat()) +
          " meat in storage",
      );
    }

    if (meat > 0 && this.settings.playerId == 0) {
      this.out.printLine(
        "<font title='" +
          meatSources.join(", ") +
          "'>This doesn't include your " +
          AccountValUtils.getNumber(meat) +
          " meat!</font>",
        "html",
      );
    }
  }
}
