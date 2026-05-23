import { kol } from "../api/apiSupplier";
import {
  AccountValColors,
  getAccountvalColors,
  loadAccountvalColors,
} from "../utils/colors";
import { AccountValPreset, getPresets } from "./presets";
import {
  ValItem,
  FieldType,
  SortBy,
  ValSetting,
  PresetSetting,
} from "../models/typings";

const sortByAliases: Map<string, SortBy> = new Map([
  ["count", SortBy.QUANTITY],
  ["amount", SortBy.QUANTITY],
  ["meat", SortBy.PRICE],
  ["price", SortBy.PRICE],
  ["totalmeat", SortBy.TOTAL_PRICE],
  ["totalprice", SortBy.TOTAL_PRICE],
  ["id", SortBy.ITEM_ID],
  ["sales", SortBy.SALES_VOLUME],
  ["sold", SortBy.SALES_VOLUME],
]);

export class AccountValSettings {
  fetchCloset: boolean;
  fetchStorage: boolean;
  fetchInventory: boolean;
  fetchShop: boolean;
  fetchDisplaycase: boolean;
  fetchSession: boolean = false;
  fetchClan: boolean = false;
  fetchingEverywhereish: boolean = true;
  fetchingNonItems: boolean = true;
  doSuperFast: boolean = false;
  doTradeables: boolean;
  doNontradeables: boolean;
  doBound: boolean;
  fetchFamiliars: boolean;
  fetchSnapshot: boolean;
  playerId: number = 0;
  displayLimit = 100;
  minimumMeat = 0;
  minimumAmount = 1;
  maxAge: number = 999_999;
  sales: number = 0;
  sortBy: SortBy = SortBy.TOTAL_PRICE;
  reverseSort: boolean = false;
  shopWorth: boolean = false;
  javascriptFilter: string = "";
  useLastSold: boolean = false;
  settingsDebug: boolean = false;
  static timingsDebug: boolean = false;
  brief: boolean = false;
  oldPricing: boolean = false;
  colorScheme: string;
  presets: PresetSetting[] = [];
  doCategories: boolean = false;

  static defaultMaxNaturalPrice =
    (new Date().getFullYear() - 2021) * 2_000_000_000;

  maxNaturalPrice = AccountValSettings.defaultMaxNaturalPrice;
  showSingleItemWorth: boolean = false;
  dateToFetch: string;
  logOutputAs: "fancy" | "plain" = "fancy";
  logOutputTo: string;
  pricegun: boolean = false;

  private static settingsCache: ValSetting[] = null;

  constructor() {
    this.colorScheme = "default";
  }

  static getSettings(): ValSetting[] {
    if (this.settingsCache) {
      return this.settingsCache;
    }

    const settings: ValSetting[] = [];

    function makeSetting(
      type: FieldType,
      name: string,
      aliases: string[],
      desc: string,
      groupUnder?: string,
      preset?: AccountValPreset,
    ) {
      const setting: ValSetting = {
        groupUnder,
        type,
        field: name,
        names: aliases.map((s) => s.toLowerCase()),
        desc,
        preset: preset,
      };
      settings.push(setting);

      return setting;
    }

    makeSetting(
      FieldType.BOOLEAN,
      "fetchCloset",
      ["closet", "clos"],
      "Should it fetch from the closet",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchStorage",
      ["storage", "stor", "hagnk", "hagnks"],
      "Should it fetch from storage",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchShop",
      ["store", "mall", "shop"],
      "Should it fetch from the shop",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchInventory",
      ["inventory", "inv"],
      "Should it fetch from your inventory",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchDisplaycase",
      ["displaycase", "display", "dc"],
      "Should it fetch from the displaycase",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchClan",
      ["clan", "stash"],
      "Should it check clan's stash? False by default",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchSession",
      ["session"],
      "Should it fetch using your current session of items acquired? False by default",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "doTradeables",
      ["tradeable", "tradeables", "trade", "tradable"],
      "Should it do tradeables",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "doNontradeables",
      [
        "notrade",
        "nontrade",
        "notradeable",
        "notradable",
        "nontradeable",
        "notradeables",
        "nontradeables",
        "untrade",
        "untradeable",
        "untradeables",
      ],
      "Should it do non-tradeables",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchFamiliars",
      ["familiar", "familiars", "fam", "fams"],
      "Should it do familiars. Bound being true also means this is true if not set",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchSnapshot",
      ["snapshot"],
      "Should it attempt to use av-snapshot?",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "doBound",
      ["bound", "bind", "bounded", "binds", "binded"],
      "Should it do items that are bound to your account",
    );

    makeSetting(
      FieldType.NUMBER,
      "minimumMeat",
      [
        "meat",
        "minmeat",
        "minimummeat",
        "minmeat",
        "min-meat",
        "minprice",
        "price",
      ],
      "Each item total worth, at least this amount.",
    );
    makeSetting(
      FieldType.NUMBER,
      "minimumAmount",
      ["amount", "count", "minimumamount", "minamount"],
      "At least this many items",
    );
    makeSetting(
      FieldType.NUMBER,
      "displayLimit",
      ["limit", "displaylimit", "maxdisplay", "lines"],
      "Limit results to display this amount",
    );
    makeSetting(
      FieldType.NAME,
      "playerId",
      [
        "player",
        "playerid",
        "playername",
        "user",
        "who",
        "target",
        "name",
        "username",
      ],
      "Target another player's DC and Shop.",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "doSuperFast",
      ["fast", "superfast", "speed", "quick", "rough"],
      "Try resolve everything with historical price",
    );
    makeSetting(
      FieldType.NUMBER,
      "maxAge",
      ["age", "maxage", "days"],
      "The max days a price is allowed to be outdated",
    );
    makeSetting(
      FieldType.SORTBY,
      "sortBy",
      ["sort", "sortby", "sorted"],
      "What we should sort the results by",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "shopWorth",
      ["worth", "shopworth", "pricing", "prices"],
      "Seperates items in shop from the other items",
    );
    makeSetting(
      FieldType.STRING,
      "javascriptFilter",
      ["jsfilter", "javascriptfilter", "javascript", "js"],
      "Filters if an item can be shown",
    );
    makeSetting(
      FieldType.NUMBER,
      "sales",
      ["sales", "sold"],
      "Hides items that have less than this amount of sales",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "useLastSold",
      ["useLastSold", "lastsold", "soldprice"],
      "Resolve prices by their last sold",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "brief",
      ["brief"],
      "Prints out a single line as the final result, the total meat.",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "oldPricing",
      ["oldpricing"],
      "Has accountval calculate prices from the old slower method",
    );
    makeSetting(
      FieldType.COLOR_SCHEME,
      "colorScheme",
      ["color", "colors", "colorscheme", "scheme"],
      "What color schemes to use",
    );
    makeSetting(
      FieldType.NUMBER,
      "maxNaturalPrice",
      ["max", "mallmax"],
      "The max natural price an item will reach before it's capped",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "doCategories",
      ["category", "categories", "shelf", "shelves"],
      "Seperates the items into categories",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "showSingleItemWorth",
      ["each"],
      "Displays the individual price of each item",
    );
    makeSetting(
      FieldType.STRING,
      "dateToFetch",
      ["date", "fetchdate", "historical", "time", "when", "at"],
      "View everything with the prices of the past",
    );
    makeSetting(
      FieldType.TEXT_TYPE,
      "logOutputAs",
      ["text", "logtype", "formatting"],
      "If accountval should log everything with plain or fancy text",
    );
    makeSetting(
      FieldType.STRING,
      "logOutputTo",
      ["output"],
      "Send the output of accountval to a file instead of printing into cli",
    );
    makeSetting(
      FieldType.BOOLEAN,
      "pricegun",
      ["pricegun"],
      "Resolve prices using pricegun. This will be slow.",
    );

    for (const preset of getPresets()) {
      makeSetting(
        FieldType.BOOLEAN,
        preset.name()[0],
        preset.name(),
        preset.desc(),
        "Preset Filters",
        preset,
      );
    }

    this.settingsCache = settings;

    return settings;
  }

  getSetting(alias: string): ValSetting {
    alias = alias.toLowerCase();

    return (
      AccountValSettings.getSettings().find((s) => s.names.includes(alias)) ||
      null
    );
  }

  doSettings(args: string[]): string[] {
    const errors: string[] = [];

    this.colorScheme = kol.isDarkMode() ? "dark" : "default";

    if (kol.getProperty("accountval_maxNaturalPrice").length > 0) {
      this.maxNaturalPrice = this.toNumber(
        kol.getProperty("accountval_maxNaturalPrice"),
      );
    }

    if (kol.getProperty("accountval_text").length > 0) {
      const str = kol.getProperty("accountval_text");

      if (str == "plain" || str == "fancy") {
        this.logOutputAs = str;
      } else {
        errors.push(
          `The property 'accountval_text' has been set to '${str}' which is invalid.`,
        );
      }
    }

    const wasSet: string[] = [];
    const settings = AccountValSettings.getSettings();

    const addUnknown = (arg) => {
      errors.push(
        `Failed to handle parameter: <font color='${AccountValColors.failedToParseSettings}'>${arg}</font>`,
      );
    };

    for (let arg of args) {
      if (arg.length == 0) {
        continue;
      }

      if (arg == "debug") {
        this.settingsDebug = true;
        AccountValSettings.timingsDebug = true;
        continue;
      }

      if (arg == "timings") {
        AccountValSettings.timingsDebug = true;
        continue;
      } else if (arg == "settings") {
        this.settingsDebug = true;
        continue;
      }

      const name = arg.split("=")[0].toLowerCase().replace(/[-+!]/g, "");
      const setting = settings.find((s) => s.names.includes(name));

      if (setting == null) {
        addUnknown(arg);
        continue;
      }

      let isTrue = !arg.startsWith("-") && !arg.startsWith("!");

      if (arg.startsWith("-") || arg.startsWith("+") || arg.startsWith("!")) {
        arg = arg.substring(1);
      } else if (arg.includes("=") && setting.type == FieldType.BOOLEAN) {
        const v = arg.substring(arg.indexOf("=") + 1);

        if (!v.toLowerCase().match("^(0|1|(true)|(false)|(yes)|(no))$")) {
          addUnknown(arg);
          continue;
        }

        isTrue = kol.toBoolean(v);
      }

      switch (setting.type) {
        case FieldType.SORTBY:
          this.parseSortBy(arg, isTrue, addUnknown);
          break;
        case FieldType.COLOR_SCHEME:
          this.parseColorScheme(arg, addUnknown);
          break;
        case FieldType.TEXT_TYPE:
          this.parseTextType(arg, addUnknown);
          break;
        case FieldType.NUMBER:
        case FieldType.NAME:
          this.parseNumberOrName(setting, arg, addUnknown, errors);
          break;
        case FieldType.STRING:
          this.parseString(setting, arg, addUnknown);
          break;
        default: // BOOLEAN
          if (setting.preset != null) {
            this.presets.push({ preset: setting.preset, negated: !isTrue });
          } else {
            this[setting.field] = isTrue;
          }

          wasSet.push(setting.field);
          break;
      }
    }

    this.resolveFetchSources(wasSet);

    if (this.settingsDebug) {
      for (const setting of Object.keys(this)) {
        kol.print(setting + " = " + this[setting]);
      }
    }

    return errors;
  }

  private parseSortBy(
    arg: string,
    isTrue: boolean,
    addUnknown: (arg: string) => void,
  ) {
    if (!arg.includes("=")) {
      return addUnknown(arg);
    }

    const v = arg.substring(arg.indexOf("=") + 1);

    if (v.length == 0) {
      return addUnknown(arg);
    }

    let sortBy: SortBy =
      SortBy[
        Object.keys(SortBy).find((k) => k.toLowerCase() == v.toLowerCase())
      ];

    if (sortBy == null) {
      sortBy = sortByAliases.get(v.toLowerCase());
    }

    if (sortBy == null) {
      return addUnknown(arg);
    }

    this.sortBy = sortBy;
    this.reverseSort = !isTrue;
  }

  private parseColorScheme(arg: string, addUnknown: (arg: string) => void) {
    if (!arg.includes("=")) {
      return addUnknown(arg);
    }

    const v = arg.substring(arg.indexOf("=") + 1);

    if (v.length == 0 || !getAccountvalColors().includes(v)) {
      return addUnknown(arg);
    }

    this.colorScheme = v;
    loadAccountvalColors(v);
  }

  private parseTextType(arg: string, addUnknown: (arg: string) => void) {
    if (!arg.includes("=")) {
      return addUnknown(arg);
    }

    const v = arg.substring(arg.indexOf("=") + 1).toLowerCase();

    if (v.length == 0 || (v != "plain" && v != "fancy")) {
      return addUnknown(arg);
    }

    this.logOutputAs = v as "plain" | "fancy";
  }

  private parseNumberOrName(
    setting: ValSetting,
    arg: string,
    addUnknown: (arg: string) => void,
    errors: string[],
  ) {
    if (!arg.includes("=")) {
      return addUnknown(arg);
    }

    let v = arg.substring(arg.indexOf("=") + 1);

    if (v.length == 0) {
      return addUnknown(arg);
    }

    if (setting.type == FieldType.NAME) {
      if (!v.match(/^[0-9]+$/)) {
        v = kol.getPlayerId(v);

        if (!v.match(/^[0-9]+$/)) {
          errors.push(
            `Failed to convert <font color='${AccountValColors.failedToParseSettings}'>${v}</font> into a player ID`,
          );

          return;
        }
      }
    }

    const num = this.toNumber(v);

    if (num == null) {
      return addUnknown(arg);
    }

    this[setting.field] = num;
  }

  private parseString(
    setting: ValSetting,
    arg: string,
    addUnknown: (arg: string) => void,
  ) {
    if (!arg.includes("=")) {
      return addUnknown(arg);
    }

    const v = arg.substring(arg.indexOf("=") + 1);

    if (v.length == 0) {
      return addUnknown(arg);
    }

    this[setting.field] = v;
  }

  private resolveFetchSources(wasSet: string[]) {
    const fetchSources: string[] = [
      "fetchCloset",
      "fetchStorage",
      "fetchShop",
      "fetchInventory",
      "fetchDisplaycase",
      "fetchClan",
      "fetchSession",
      "fetchFamiliars",
      "fetchSnapshot",
    ];

    this.fetchingEverywhereish =
      !this.fetchSession &&
      !this.fetchClan &&
      fetchSources.find((v) => wasSet.includes(v) && this[v]) == null;

    if (!wasSet.includes("doTradeables")) {
      this.doTradeables = this.doBound
        ? false
        : wasSet.includes("doNontradeables")
          ? !this.doNontradeables
          : true;
    }

    if (!wasSet.includes("doNontradeables")) {
      this.doNontradeables = this.doBound
        ? false
        : wasSet.includes("doTradeables")
          ? !this.doTradeables
          : true;
    }

    if (!wasSet.includes("doBound")) {
      this.doBound =
        (this.doTradeables || this.fetchingEverywhereish) &&
        this.doNontradeables;
    }

    if (!wasSet.includes("fetchFamiliars") && wasSet.includes("hatchling")) {
      this.fetchFamiliars = false;
    } else if (
      !wasSet.includes("fetchFamiliars") &&
      this.fetchingEverywhereish
    ) {
      this.fetchFamiliars = this.doBound;
    }

    for (const fetchSource of fetchSources) {
      if (this[fetchSource] != null) {
        continue;
      }

      this[fetchSource] = this.fetchingEverywhereish;
    }

    this.fetchingNonItems = this.fetchingEverywhereish;
  }

  doesJSFilterUsePriceOrSales(): boolean {
    return (
      this.javascriptFilter != null &&
      this.javascriptFilter.split("=>")[0].split(",").length >= 3
    );
  }

  isShown(item: ValItem, worth: number): boolean {
    return this.presets.every(
      (pre) =>
        (pre.preset.isShown != null
          ? pre.preset.isShown(item, worth)
          : pre.preset.isProcessed(item.actualItem, worth)) != pre.negated,
    );
  }

  isArg(arg: string, args: string[]): boolean {
    arg = arg.toLowerCase().split("=")[0];

    return args.some((a) => arg === a);
  }

  toNumber(arg: string): number {
    while (arg.includes(",") || arg.includes("_")) {
      arg = arg.replace(",", "").replace("_", "");
    }

    const match = arg.match(/^((?:\d+)|(?:\d*\.\d+))([mkbt]?)$/);

    if (match == null) {
      return null;
    }

    let num = kol.toFloat(match[1]);

    if (match[2] == "t") {
      num *= 1_000_000_000_000;
    } else if (match[2] == "b") {
      num *= 1_000_000_000;
    } else if (match[2] == "m") {
      num *= 1_000_000;
    } else if (match[2] == "k") {
      num *= 1_000;
    }

    return num;
  }
}

export class PricingSettings {
  public expensivePricesAt: number = 40_000_000;
  public cheapTotalsLessThan: number = 20_000_000;
  public cheapPricesLessThan: number = 2_000_000;
  public maxPriceAge: number;
  public oldPricing: boolean;
  public dateToFetch: string;
  public globalSettings: AccountValSettings;

  getMaxPriceAge(price: number, amount: number): number {
    return Math.min(this.maxPriceAge, this.internalMaxPriceAge(price, amount));
  }

  internalMaxPriceAge(price: number, amount: number): number {
    if (price > this.expensivePricesAt) {
      return 30;
    }

    const total = price * amount;

    if (total > this.cheapTotalsLessThan) {
      return amount > 10 ? 90 : 180;
    }

    if (price > this.cheapPricesLessThan) {
      return Math.max(90, 180 - amount * 5);
    }

    if (price > 1000) {
      return 365;
    }

    return 900;
  }
}
