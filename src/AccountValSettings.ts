import { getPlayerId, isDarkMode, print, toBoolean, toFloat } from "kolmafia";
import {
  AccountValColors,
  getAccountvalColors,
  loadAccountvalColors,
} from "./AccountValColors";
import { AccountValPreset, getPresets } from "./AccountValPresets";
import { ValItem } from "./AccountValLogic";

export enum FieldType {
  NUMBER,
  SORTBY,
  COLOR_SCHEME,
  BOOLEAN,
  NAME,
  STRING,
}

export interface ValSetting {
  groupUnder?: string;
  type: FieldType;
  field: string;
  names: string[];
  desc: string;
  preset?: AccountValPreset;
}

export enum SortBy {
  NAME,
  QUANTITY,
  PRICE,
  TOTAL_PRICE,
  SALES_VOLUME,
  ITEM_ID,
}

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

type PresetSetting = {
  preset: AccountValPreset;
  negated: boolean;
};

export class AccountValSettings {
  fetchCloset: boolean;
  fetchStorage: boolean;
  fetchInventory: boolean;
  fetchShop: boolean;
  fetchDisplaycase: boolean;
  fetchSession: boolean = false;
  fetchClan: boolean = false;
  fetchingEverywhereish: boolean = true; // If we're fetching from everywhere but maybe some areas
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
  colorScheme: string = isDarkMode() ? "dark" : "default";
  presets: PresetSetting[] = [];
  doCategories: boolean = false;
  maxNaturalPrice = 999_999_999;
  showSingleItemWorth: boolean = false;

  static getSettings(): ValSetting[] {
    const settings: ValSetting[] = [];

    function makeSetting(
      type: FieldType,
      name: string,
      aliases: string[],
      desc: string,
      groupUnder?: string,
      preset?: AccountValPreset
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
      "Should it fetch from the closet"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchStorage",
      ["storage", "stor", "hagnk", "hagnks"],
      "Should it fetch from storage"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchShop",
      ["store", "mall", "shop"],
      "Should it fetch from the shop"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchInventory",
      ["inventory", "inv"],
      "Should it fetch from your inventory"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchDisplaycase",
      ["displaycase", "display", "dc"],
      "Should it fetch from the displaycase"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchClan",
      ["clan", "stash"],
      "Should it check clan's stash? False by default"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchSession",
      ["session"],
      "Should it fetch using your current session of items acquired? False by default"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "doTradeables",
      ["tradeable", "tradeables", "trade", "tradable"],
      "Should it do tradeables"
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
      "Should it do non-tradeables (Resolves to tradeables if it can)"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchFamiliars",
      ["familiar", "familiars", "fam", "fams"],
      "Should it do familiars (Resolves to their item). Bound being true also means this is true if not set"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "fetchSnapshot",
      ["snapshot"],
      "Should it attempt to use av-snapshot?"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "doBound",
      ["bound", "bind", "bounded", "binds", "binded"],
      "Should it do items that are bound to your account (Generally only iotms)"
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
      "Each item total worth, at least this amount."
    );
    makeSetting(
      FieldType.NUMBER,
      "minimumAmount",
      ["amount", "count", "minimumamount", "minamount"],
      "At least this many items"
    );
    makeSetting(
      FieldType.NUMBER,
      "displayLimit",
      ["limit", "displaylimit", "maxdisplay", "lines"],
      "Limit results to display this amount"
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
      'Target another player\'s DC and Shop. Can provide the dc/shop param. Can do player="John Smith" for spaces'
    );
    makeSetting(
      FieldType.BOOLEAN,
      "doSuperFast",
      ["fast", "superfast", "speed", "quick", "rough"],
      "Try resolve everything with historical price, no matter how outdated"
    );

    makeSetting(
      FieldType.NUMBER,
      "maxAge",
      ["age", "maxage", "days"],
      "The max days a price is allowed to be outdated, useful if you're trying to force things to be more up to date"
    );

    makeSetting(
      FieldType.SORTBY,
      "sortBy",
      ["sort", "sortby", "sorted"],
      "What we should sort the results by, prefix with ! or - to reverse sort. Supports: " +
        Object.keys(SortBy)
          .filter((s) => s.length > 2)
          .join(", ")
    );

    makeSetting(
      FieldType.BOOLEAN,
      "shopWorth",
      ["worth", "shopworth", "pricing", "prices"],
      "Seperates items in shop from the other items, and shows how under/overpriced they are. This can be inaccurate"
    );

    makeSetting(
      FieldType.STRING,
      "javascriptFilter",
      ["jsfilter", "javascriptfilter", "javascript", "js"],
      'Filters if an item can be shown, provides an item & amount and expects a boolean. Any double quotes in your code must not have an empty space to the right. Example: jsfilter="(item, amount) => item.name.includes("beer") && toSlot(item) != Slot.none"'
    );

    makeSetting(
      FieldType.NUMBER,
      "sales",
      ["sales", "sold"],
      "Hides items that have less than this amount of sales"
    );

    makeSetting(
      FieldType.BOOLEAN,
      "useLastSold",
      ["useLastSold", "lastsold", "soldprice"],
      "Resolve prices by their last sold, initial runs with this parameter can be quite slow"
    );

    makeSetting(
      FieldType.BOOLEAN,
      "brief",
      ["brief"],
      "Prints out a single line as the final result, the total meat."
    );

    makeSetting(
      FieldType.BOOLEAN,
      "oldPricing",
      ["oldpricing"],
      "Has accountval calculate prices from the old slower and more inaccurate method"
    );

    makeSetting(
      FieldType.COLOR_SCHEME,
      "colorScheme",
      ["color", "colors", "colorscheme", "scheme"],
      "What color schemes to use, set `accountvalColorScheme` pref to change the default. Supports: " +
        getAccountvalColors().join(", ")
    );

    makeSetting(
      FieldType.NUMBER,
      "maxNaturalPrice",
      ["max", "mallmax"],
      "The max natural price an item will reach before it's capped and called mall extinct"
    );

    makeSetting(
      FieldType.BOOLEAN,
      "doCategories",
      ["category", "categories", "shelf", "shelves"],
      "Used only for Display Cases at this point, seperates the items into categories"
    );
    makeSetting(
      FieldType.BOOLEAN,
      "showSingleItemWorth",
      ["each"],
      "Displays the individual price of each item instead of the total, works best with `sort=meat`"
    );

    for (const preset of getPresets()) {
      makeSetting(
        FieldType.BOOLEAN,
        preset.name()[0],
        preset.name(),
        preset.desc(),
        "Preset Filters",
        preset
      );
    }

    return settings;
  }

  getSetting(alias: string): ValSetting {
    alias = alias.toLowerCase();

    for (const setting of AccountValSettings.getSettings()) {
      if (!setting.names.includes(alias)) {
        continue;
      }

      return setting;
    }

    return null;
  }

  doSettings(args: string[]): string[] {
    const errors: string[] = [];
    const defaultValues: unknown[] = [];
    const wasSet: string[] = [];

    const settings = AccountValSettings.getSettings();

    for (const setting of settings) {
      if (setting.preset != null) {
        continue;
      }

      defaultValues[setting.field] = this[setting.field];
    }

    const addUnknown = (arg) => {
      errors.push(
        `Failed to handle parameter: <font color='${AccountValColors.failedToParseSettings}'>${arg}</font>`
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

      let setting: ValSetting;
      const name = arg
        .split("=")[0]
        .toLowerCase()
        .replace("-", "")
        .replace("+", "")
        .replace("!", "");

      settings.forEach((s) => {
        if (!s.names.includes(name)) {
          return;
        }

        setting = s;
      });

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

        isTrue = toBoolean(v);
      }

      if (setting.type == FieldType.SORTBY) {
        if (!arg.includes("=")) {
          addUnknown(arg);
          continue;
        }

        const v = arg.substring(arg.indexOf("=") + 1);

        if (v.length == 0) {
          addUnknown(arg);
          continue;
        }

        let sortBy: SortBy =
          SortBy[
            Object.keys(SortBy).find((k) => k.toLowerCase() == v.toLowerCase())
          ];

        if (sortBy == null) {
          sortBy = sortByAliases.get(v.toLowerCase());
        }

        if (sortBy == null) {
          addUnknown(arg);
          continue;
        }

        this.sortBy = sortBy;
        this.reverseSort = !isTrue;
      } else if (setting.type == FieldType.COLOR_SCHEME) {
        if (!arg.includes("=")) {
          addUnknown(arg);
          continue;
        }

        const v = arg.substring(arg.indexOf("=") + 1);

        if (v.length == 0) {
          addUnknown(arg);
          continue;
        }

        if (!getAccountvalColors().includes(v)) {
          addUnknown(arg);
          continue;
        }

        this.colorScheme = v;
        loadAccountvalColors(v);
      } else if (
        setting.type == FieldType.NUMBER ||
        setting.type == FieldType.NAME
      ) {
        if (!arg.includes("=")) {
          addUnknown(arg);
          continue;
        }

        let v = arg.substring(arg.indexOf("=") + 1);

        if (v.length == 0) {
          addUnknown(arg);
          continue;
        }

        if (setting.type == FieldType.NAME) {
          if (!v.match(/^[0-9]+$/)) {
            v = getPlayerId(v);

            if (!v.match(/^[0-9]+$/)) {
              errors.push(
                `Failed to convert <font color='${AccountValColors.failedToParseSettings}'>${v}</font> into a player ID`
              );
              continue;
            }
          }
        }

        const num = this.toNumber(v);

        if (v == null) {
          addUnknown(arg);
          continue;
        }

        this[setting.field] = num;
      } else if (setting.type == FieldType.STRING) {
        if (!arg.includes("=")) {
          addUnknown(arg);
          continue;
        }

        const v = arg.substring(arg.indexOf("=") + 1);

        if (v.length == 0) {
          addUnknown(arg);
          continue;
        }

        this[setting.field] = v;
      } else {
        if (setting.preset != null) {
          this.presets.push({
            preset: setting.preset,
            negated: !isTrue,
          });
        } else {
          this[setting.field] = isTrue;
        }

        wasSet.push(setting.field);
      }
    }

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

    // We can do fams if bound isn't false
    // We can do bound if nontrade isn't false
    // We can do notrade if tradeables isn't true
    // We can do tradeables if non-trade isn't true

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

    if (this.settingsDebug) {
      for (const setting of Object.keys(this)) {
        print(setting + " = " + this[setting]);
      }
    }

    return errors;
  }

  isShown(item: ValItem, worth: number): boolean {
    return this.presets.every(
      (pre) =>
        (pre.preset.isShown != null
          ? pre.preset.isShown(item, worth)
          : pre.preset.isProcessed(item.actualItem, worth)) != pre.negated
    );
  }

  isArg(arg: string, args: string[]): boolean {
    arg = arg.toLowerCase().split("=")[0];

    for (const a of args) {
      if (arg != a) {
        continue;
      }

      return true;
    }

    return false;
  }

  toNumber(arg: string): number {
    while (arg.includes(",") || arg.includes("_")) {
      arg = arg.replace(",", "").replace("_", "");
    }

    const match = arg.match(/^((?:\d+)|(?:\d*\.\d+))([mkb]?)$/);

    if (match == null) {
      return null;
    }

    let num = toFloat(match[1]);

    if (match[2] == "b") {
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

  /**
   * A scaler on where we want stuff that's lower priced, to be updated less often. Returns day count.
   */
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
