import { getPlayerId, toBoolean, toInt } from "kolmafia";

export enum FieldType {
  NUMBER,
  SORTBY,
  BOOLEAN,
  NAME,
  STRING,
}

export class ValSetting {
  type: FieldType;
  field: string;
  names: string[];
  desc: string;
}

export enum SortBy {
  NAME,
  QUANTITY,
  PRICE,

  TOTAL_PRICE,

  // SALES_VOLUME,

  ITEM_ID,
}

export class AccountValSettings {
  fetchCloset: boolean;
  fetchStorage: boolean;
  fetchInventory: boolean;
  fetchShop: boolean;
  fetchDisplaycase: boolean;
  fetchClan: boolean = false;
  fetchEverywhere: boolean = true;
  doSuperFast: boolean = false;
  doTradeables: boolean;
  doNontradeables: boolean;
  doBound: boolean;
  doFamiliars: boolean;
  playerId: number;
  displayLimit = 100;
  minimumMeat = 0;
  minimumAmount = 1;
  maxAge: number = 14;
  sales: number = 0;
  sortBy: SortBy = SortBy.TOTAL_PRICE;
  reverseSort: boolean = false;
  shopWorth: boolean = false;
  javascriptFilter: string;

  static getSettings(): ValSetting[] {
    let settings = [];

    function makeSetting(
      type: FieldType,
      name: string,
      aliases: string[],
      desc: string
    ) {
      let setting = new ValSetting();

      setting.type = type;
      setting.field = name;
      setting.names = aliases;
      setting.desc = desc;

      settings.push(setting);
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
      "doTradeables",
      ["tradeable", "tradeables", "trade", "tradable", "true"],
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
      "doFamiliars",
      ["familiar", "familiars", "fam", "fams", "hatchling", "hatchlings"],
      "Should it do familiars (Resolves to their item). Bound being true also means this is true if not set"
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
      'Filters if an item can be shown, provides an item & amount and expects a boolean. Any double quotes in your code must not have an empty space to the right. Example: jsfilter="(item, amount) => item.name.includes("beer") && require("kolmafia").toSlot(item) != Slot.get("None")"'
    );

    makeSetting(
      FieldType.NUMBER,
      "sales",
      ["sales"],
      "Hides items that have less than this amount of sales. As this would be incredibly slow otherwise, it will only take effect on what would be the last X items showed"
    );

    return settings;
  }

  doSettings(args: string[]): string[] {
    let unknown: string[] = [];
    let incompatible: string[][] = [
      [
        "fetchCloset",
        "fetchStorage",
        "fetchShop",
        "fetchInventory",
        "fetchDisplaycase",
        "fetchClan",
      ],
      ["doTradeables", "doNontradeables", "doBound", "doFamiliars"],
    ];
    let settings = AccountValSettings.getSettings();

    for (let arg of args) {
      if (arg.length == 0) {
        continue;
      }

      let setting: ValSetting;
      let name = arg
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
        unknown.push(arg);
        continue;
      }

      let isTrue = !arg.startsWith("-") && !arg.startsWith("!");

      if (arg.startsWith("-") || arg.startsWith("+") || arg.startsWith("!")) {
        arg = arg.substring(1);
      } else if (arg.includes("=") && setting.type == FieldType.BOOLEAN) {
        isTrue = toBoolean(arg.split("=")[1]);
      }

      if (setting.type == FieldType.SORTBY) {
        if (!arg.includes("=")) {
          unknown.push(arg);
          continue;
        }

        let v = arg.substring(arg.indexOf("=") + 1);

        if (v.length == 0) {
          unknown.push(arg);
          continue;
        }

        let sortBy: SortBy =
          SortBy[
            Object.keys(SortBy).find((k) => k.toLowerCase() == v.toLowerCase())
          ];

        if (sortBy == null) {
          unknown.push(arg);
          continue;
        }

        this.sortBy = sortBy;
        this.reverseSort = !isTrue;
      } else if (
        setting.type == FieldType.NUMBER ||
        setting.type == FieldType.NAME
      ) {
        if (!arg.includes("=")) {
          unknown.push(arg);
          continue;
        }

        let v = arg.substring(arg.indexOf("=") + 1);

        if (v.length == 0) {
          unknown.push(arg);
          continue;
        }

        if (setting.type == FieldType.NAME) {
          if (!v.match(/^[0-9]+$/)) {
            v = getPlayerId(v);
          }
        }

        if (!v.match(/^[0-9]+$/)) {
          unknown.push(arg);
          continue;
        }

        this[setting.field] = toInt(v);
      } else if (setting.type == FieldType.STRING) {
        if (!arg.includes("=")) {
          unknown.push(arg);
          continue;
        }

        let v = arg.substring(arg.indexOf("=") + 1);

        if (v.length == 0) {
          unknown.push(arg);
          continue;
        }

        this[setting.field] = v;
      } else {
        this[setting.field] = isTrue;
      }
    }

    let wasSet: string[] = Object.keys(this).filter((k) => this[k] == true);
    this.fetchEverywhere =
      !this.fetchClan &&
      incompatible[0].find((v) => wasSet.includes(v)) == null;

    if (!this.fetchEverywhere) {
      if (this.doBound == null) {
        this.doBound = false;
      }

      if (this.doFamiliars == null) {
        this.doFamiliars = false;
      }
    } else if (this.doFamiliars == null && this.doBound != null) {
      this.doFamiliars = this.doBound;
    }

    for (let f of settings.map((s) => s.field)) {
      if (this[f] != null) {
        continue;
      }

      let incomp = incompatible.filter((v) => v.includes(f))[0];

      if (incomp == null) {
        continue;
      }

      this[f] = incomp.find((i) => wasSet.includes(i)) == null;
    }

    return unknown;
  }

  isArg(arg: string, args: string[]): boolean {
    arg = arg.toLowerCase().split("=")[0];

    for (let a of args) {
      if (arg != a) {
        continue;
      }

      return true;
    }

    return false;
  }
}

export class PricingSettings {
  public cheapHistoricalAge: number = 300;
  public cheapItemsWorth: number = 1_000;
  public cheapTotalsLessThan: number = 2_000_000;

  // The max historical age for any non-cheap item
  public maxHistoricalAge: number = 14;

  // The max mall sales data age
  public maxMallSalesAge: number = 14;

  doSettings(args: string[]): string[] {
    let unknown: string[] = [];

    for (let arg of args) {
      if (arg.length == 0) {
        continue;
      }

      if (this.isArg(arg, ["max-age", "age"])) {
        let amount = arg.split("=")[1];

        if (amount != null && amount.match(/[0-9]+/)) {
          this.maxHistoricalAge = toInt(amount);
          this.maxMallSalesAge = toInt(amount);
          continue;
        }
      }

      unknown.push(arg);
    }

    return unknown;
  }

  isArg(arg: string, args: string[]): boolean {
    arg = arg.toLowerCase().split("=")[0];

    for (let a of args) {
      if (arg != a) {
        continue;
      }

      return true;
    }

    return false;
  }
}
