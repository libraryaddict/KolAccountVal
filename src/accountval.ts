import { kol, setProvider } from "./api/apiSupplier";
import { KolmafiaProvider } from "./api/kolmafiaProvider";
import { AccountValLogic } from "./core/logic";
import { AccountValSettings, PricingSettings } from "./settings/settings";
import { AccountValUtils } from "./utils/utils";
import {
  AccountValColors,
  showAccountvalColors,
  initAccountValColors,
} from "./utils/colors";
import { AccValTiming } from "./utils/timings";
import { ReportOutput } from "./ui/output";
import { ValuationReport } from "./ui/valuation";
import { SortBy, FieldType } from "./models/typings";

class AccountVal {
  private logic: AccountValLogic;
  private settings: AccountValSettings;
  private out: ReportOutput;

  getSettings(): AccountValSettings {
    return this.settings;
  }

  doHelp() {
    this.out.printLine(
      "AccountVal is a script to check what your account is worth, and find the good stuff fast.",
      "plain",
      AccountValColors.helpfulStateInfo,
    );
    this.out.printLine(
      "You can provide these as a parameter to accountval to do other stuff than the base script. Hover over them to see aliases.",
      "plain",
      AccountValColors.helpfulStateInfo,
    );
    this.out.printLine(
      `<font color='${AccountValColors.helpfulStateInfo}'>Use ! or - to negate a boolean option, as well as =. Eg:</font><font color='gray'> -bound !bound bound=false</font>`,
      "html",
    );

    const groups: [string, string[]][] = [];

    for (const setting of AccountValSettings.getSettings()) {
      let defaultOf = ".</font> <font>Default is: ";

      if (this.settings[setting.field] != null) {
        let val = this.settings[setting.field];

        if (setting.type == FieldType.NUMBER) {
          val = setting.names[0] + "=" + val;
        } else if (setting.type == FieldType.SORTBY) {
          val = setting.names[0] + "=" + SortBy[val as number];
        }

        if (val == "" && typeof val != "boolean") {
          val = "null";
        }

        defaultOf += val;
      } else {
        defaultOf += "null";
      }

      if (setting.groupUnder != null) {
        let group = groups.find(([l]) => l == setting.groupUnder);

        if (group == null) {
          groups.push((group = [setting.groupUnder, []]));
        }

        group[1].push(
          `<font title='${setting.desc}${setting.names.length > 1 ? `&#010;&#010;Aliases: ${setting.names.filter((s) => s != setting.names[0]).join(", ")}` : ""}'><b>${setting.names[0]}</b></font>`,
        );
      } else {
        this.out.printLine(
          `<font color='${AccountValColors.minorNote}' title='Aliases: ${setting.names.join(", ")}'><b>${setting.names[0]}</b> - ${setting.desc}${defaultOf}</font>`,
          "html",
        );
      }
    }

    for (const [groupName, grouped] of groups) {
      const toPrint = grouped.map(
        (s, i) =>
          `<font color='${i % 2 == 0 ? AccountValColors.mallExtinctColor1 : AccountValColors.mallExtinctColor2}'>${s}</font>`,
      );
      this.out.printLine(
        `<font color='${AccountValColors.minorNote}'><b>${groupName}:</b> ${toPrint.join(", ")}</font>`,
        "html",
      );
    }

    this.out.printLine(
      `<font color='${AccountValColors.minorNote}'>Disclaimer: The prices shown are not absolute, and can overstate what it really is worth.</font>`,
      "html",
    );
  }

  load(command: string): boolean {
    this.settings = new AccountValSettings();
    this.out = new ReportOutput(this.settings);

    if (command == "test") {
      this.runTests();

      return false;
    }

    if (command == null) {
      this.out.printLine(
        "To fine tune what we check, including to tradeables only.. Provide the parameter 'help' for more info",
        "plain",
        AccountValColors.helpfulStateInfo,
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
      command,
    );
    const unknown = this.settings.doSettings(spl);

    if (unknown.length > 0) {
      unknown.forEach((s) =>
        this.out.printLine(
          `<font color='${AccountValColors.attentionGrabbingWarning}'>${s}</font>`,
          "html",
        ),
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
    priceSettings.globalSettings = this.settings;
    this.logic = new AccountValLogic(this.settings, priceSettings);
    AccValTiming.stop("Construct Logic");

    AccValTiming.start("Load Logic Items");
    this.logic.loadItems();
    AccValTiming.stop("Load Logic Items");

    AccValTiming.start("Load Logic Prices");
    this.logic.doPricing();
    AccValTiming.stop("Load Logic Prices");

    AccValTiming.start("Start Valuation");
    const report = new ValuationReport(this.logic, this.settings, this.out);
    report.run();
    AccValTiming.stop("Start Valuation");
  }

  stop() {
    this.logic.priceResolver.stop();
    this.out.stop();
  }

  runTests() {
    this.runTest("", {
      doBound: true,
      sortBy: SortBy.TOTAL_PRICE,
      fetchInventory: true,
    });
    this.runTest("sort meat!bound", { doBound: false, sortBy: SortBy.PRICE });
    this.out.printLine("Tests Finished", "plain", "green");
  }

  runTest(args: string, verify: { [key: string]: any }) {
    this.load(args);

    for (const [key, value] of Object.entries(verify)) {
      const setTo = this.settings[key];

      if (setTo == value) {
        continue;
      }

      this.out.printLine(
        `On '${args}', ${key} was not set to ${value} but instead ${setTo}`,
        "plain",
        "red",
      );
    }
  }
}

export function main(command: string) {
  setProvider(new KolmafiaProvider());
  initAccountValColors();

  const requiredRevision = 28933;

  if (kol.getRevision() < requiredRevision) {
    kol.printHtml(
      `<font color='red'>You need to update KoLMafia to the latest version. This script will not work properly on versions older than ${requiredRevision}.</font>`,
    );
  }

  const val = new AccountVal();

  if (val.load(command)) {
    AccValTiming.start("Run AccountVal");
    val.start();
    val.stop();
    AccValTiming.stop("Run AccountVal");
  }

  if (AccountValSettings.timingsDebug) {
    AccValTiming.printTracked("PRINT_JUST_ONCE");
  }
}
