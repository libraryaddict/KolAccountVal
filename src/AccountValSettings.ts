import { getPlayerId, toInt } from "kolmafia";

export class ValSetting {
  field: string;
  names: string[];
  desc: string;
}

export class AccountValSettings {
  fetchCloset: boolean;
  fetchStorage: boolean;
  fetchInventory: boolean;
  fetchShop: boolean;
  fetchDisplaycase: boolean;
  fetchEverywhere: boolean = true;
  doSuperFast: boolean = false;
  doTradeables: boolean;
  doNontradeables: boolean;
  doBound: boolean;
  doFamiliars: boolean;
  playerId: number;
  displayLimit = 100;
  minimumMeat = 0;

  static getSettings(): ValSetting[] {
    let settings = [];

    function makeSetting(name: string, aliases: string[], desc: string) {
      let setting = new ValSetting();

      setting.field = name;
      setting.names = aliases;
      setting.desc = desc;

      settings.push(setting);
    }

    makeSetting(
      "fetchCloset",
      ["closet", "clos"],
      "Should it fetch from the closet"
    );
    makeSetting(
      "fetchStorage",
      ["storage", "stor", "hagnk", "hagnks"],
      "Should it fetch from storage"
    );
    makeSetting(
      "fetchShop",
      ["store", "mall", "shop"],
      "Should it fetch from the shop"
    );
    makeSetting(
      "fetchInventory",
      ["inventory", "inv"],
      "Should it fetch from your inventory"
    );
    makeSetting(
      "fetchDisplaycase",
      ["displaycase", "display", "dc"],
      "Should it fetch from the displaycase"
    );
    makeSetting(
      "doTradeables",
      ["tradable", "tradeables", "trade", "true"],
      "Should it do tradeables"
    );
    makeSetting(
      "doNontradeables",
      [
        "notrade",
        "nontrade",
        "notradeable",
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
      "doFamiliars",
      ["familiar", "familiars", "fam", "fams", "hatchling", "hatchlings"],
      "Should it do familiars (Resolves to their item)"
    );
    makeSetting(
      "doBound",
      ["bound", "bind", "bounded", "binds", "binded"],
      "Should it do items that are bound to your account (Generally only iotms)"
    );

    makeSetting(
      "=minimumMeat",
      ["minmeat", "minimummeat", "meat", "minmeat", "min-meat"],
      "Each item total worth, at least this amount. (meat=4000)"
    );
    makeSetting(
      "=displayLimit",
      ["limit", "displaylimit", "maxdisplay"],
      "Limit results to display this amount (limit=100)"
    );
    makeSetting(
      "=playerId",
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
      "Target another player's DC and Shop. Can provide the dc/shop param"
    );
    makeSetting(
      "doSuperFast",
      ["fast", "superfast", "speed", "quick", "rough"],
      "Try resolve everything with historical price, no matter how outdated"
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
      ],
      ["doTradeables", "doNontradeables", "doBound", "doFamiliars"],
    ];
    let settings = AccountValSettings.getSettings();

    for (let arg of args) {
      if (arg.length == 0) {
        continue;
      }

      let isTrue = !arg.startsWith("-");

      if (arg.startsWith("-") || arg.startsWith("+")) {
        arg = arg.substring(1);
      }

      let field: string = null;
      let name = arg.split("=")[0].toLowerCase();

      settings.forEach((setting) => {
        if (!setting.names.includes(name)) {
          return;
        }

        field = setting.field;
      });

      if (field == null) {
        unknown.push(arg);
        continue;
      }

      if (field.startsWith("=")) {
        if (!arg.includes("=")) {
          unknown.push(arg);
          continue;
        }

        let v = arg.substring(arg.indexOf("=") + 1);

        if (v.length == 0) {
          unknown.push(arg);
          continue;
        }

        if (field == "=playerId") {
          if (!v.match(/[0-9]+/)) {
            v = getPlayerId(v);
          }
        }

        if (!v.match(/[0-9]+/)) {
          unknown.push(arg);
          continue;
        }

        this[field.substring(1)] = toInt(v);
      } else {
        this[field] = isTrue;
      }
    }

    let wasSet: string[] = Object.keys(this).filter((k) => this[k] != null);
    this.fetchEverywhere =
      incompatible[0].find((v) => wasSet.includes(v)) == null;

    if (!this.fetchEverywhere) {
      if (this.doBound == null) {
        this.doBound = false;
      }

      if (this.doFamiliars == null) {
        this.doFamiliars = false;
      }
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