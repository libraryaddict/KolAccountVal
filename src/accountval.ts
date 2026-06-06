import { AccountValLogic } from "./core/logic";
import { AccountValSettings } from "./settings/settings";
import {
  AccountValColors,
  showAccountvalColors,
  initAccountValColors,
} from "./utils/colors";
import { AccValTiming } from "./utils/timings";
import { ReportOutput } from "./ui/output";
import { ValuationReport } from "./ui/valuation";
import { Args } from "./settings/grimoireArgs";

class AccountVal {
  private logic: AccountValLogic;
  private settings: AccountValSettings;
  private out: ReportOutput;

  getSettings(): AccountValSettings {
    return this.settings;
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
    } else if (command.toLowerCase().match(/^debugcolors=[^ ]+$/)) {
      const scheme = command.split("=")[1];
      showAccountvalColors(scheme);

      return false;
    }

    const unknown = this.settings.doSettings(command);

    if (this.settings.help) {
      Args.showHelp(this.settings, 0);
    }

    if (this.settings.showPresetFilters) {
      const meta = Args.getMetadata(this.settings as any);
      meta.traverse(
        (v, k) => {
          if ((v.setting ?? "").startsWith("accountval_preset_")) {
            Args.showArgHelp(meta, v, k);
          }
        },
        (g, k) => {
          if (k != "presetFilters") {
            return;
          }

          Args.showGroupHelp(meta, g, k);
        },
      );
    }

    if (this.settings.help || this.settings.showPresetFilters) {
      return;
    }

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
    this.logic = new AccountValLogic(this.settings);
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
    /*this.runTest("", {
      doBound: true,
      sortBy: SortBy.TOTAL_PRICE,
      fetchInventory: true,
    });
    this.runTest("sort=meat !bound", { doBound: false, sortBy: SortBy.PRICE });*/
    this.out.printLine("Tests Finished", "plain", "green");
  }

  runTest(args: string, verify: { [key: string]: any }) {
    this.load(args);

    for (const [key, value] of Object.entries(verify)) {
      const setTo = (this.settings as any)[key];

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

export function run(command: string) {
  initAccountValColors();

  const val = new AccountVal();

  if (val.load(command)) {
    AccValTiming.start("Run AccountVal");
    val.start();
    val.stop();
    AccValTiming.stop("Run AccountVal");
  }

  AccValTiming.printTracked("PRINT_JUST_ONCE");
}
