import {
  AccountValColors,
  getAccountvalColors as getColorSchemes,
  loadAccountvalColors,
} from "../utils/colors";
import { getPresets } from "./presets";
import { ValItem, SortBy, PresetSetting } from "../models/typings";
import { ParseError, Args } from "./grimoireArgs";
import { provider } from "../api/apiSupplier";
import { Item } from "kolmafia";
import { AccValTiming } from "../utils/timings";

const sortBys: SortBy[] = [
  {
    name: "TOTAL_PRICE",
    aliases: ["TOTAL_MEAT"],
    assignValue(item, price, owned, maxPrice) {
      item.sortValue =
        price.price <= 0
          ? maxPrice
          : (1 / item.worthMultiplier) * price.price * owned.get(item);
    },
  },
  {
    name: "PRICE",
    aliases: ["MEAT"],
    assignValue(item, price, owned, maxPrice) {
      item.sortValue =
        price.price <= 0 ? maxPrice : (1 / item.worthMultiplier) * price.price;
    },
  },
  {
    name: "QUANTITY",
    aliases: ["COUNT", "AMOUNT"],
    assignValue(item, price, owned, maxPrice) {
      item.sortValue = owned.get(item);
    },
  },
  {
    name: "NAME",
    aliases: [],
    assignValue: undefined,
    fallback: (v1, v2) => v1.name.localeCompare(v2.name),
  },
  {
    name: "ITEM_ID",
    aliases: ["ID"],
    assignValue(item, price, owned, maxPrice) {
      item.sortValue = item.tradeableItem.id;
    },
  },
  {
    name: "SALES_VOLUME",
    aliases: ["SALES", "SOLD"],
    assignValue(item, price, owned, maxPrice) {
      item.sortValue = price.volume;
    },
  },
];

function numberParser(arg: string): number | ParseError {
  let cleaned = arg;

  while (cleaned.includes(",") || cleaned.includes("_")) {
    cleaned = cleaned.replace(/[,_]/g, "");
  }

  const match = cleaned.match(/^((?:\d+)|(?:\d*\.\d+))([mkbt]?)$/i);

  if (match == null) {
    return new ParseError("Invalid number format");
  }

  let num = parseFloat(match[1]);
  const mod = match[2]?.toLowerCase();

  if (mod == "t") {
    num *= 1_000_000_000_000;
  } else if (mod == "b") {
    num *= 1_000_000_000;
  } else if (mod == "m") {
    num *= 1_000_000;
  } else if (mod == "k") {
    num *= 1_000;
  }

  return num;
}

function playerParser(arg: string): number | ParseError {
  let v = arg;

  if (!v.match(/^[0-9]+$/)) {
    v = provider().getPlayerId(v);

    if (!v.match(/^[0-9]+$/)) {
      return new ParseError(`Failed to convert ${arg} into a player ID`);
    }
  }

  return parseInt(v);
}

function sortByParser(arg: string): SortBy | ParseError {
  const neg = /^[-!]/.test(arg);
  const v = arg
    .toLowerCase()
    .replace("_", "")
    .substring(neg ? 1 : 0);

  for (const sort of sortBys) {
    if (
      sort.name.toLowerCase().replace("_", "") != v &&
      !sort.aliases.some((a) => a.toLowerCase().replace("_", "") == v)
    ) {
      continue;
    }

    // Negate the sort
    if (neg) {
      return {
        ...sort,
        assignValue: sort.assignValue
          ? (item, price, owned, maxPrice) => {
              sort.assignValue(item, price, owned, maxPrice);
              item.sortValue = -item.sortValue;
            }
          : undefined,
        fallback: sort.fallback
          ? (item1, item2) => {
              return -sort.fallback(item1, item2);
            }
          : undefined,
      };
    }

    return sort;
  }

  return new ParseError(`Unknown sort option: ${arg}`);
}

function colorSchemeParser(arg: string): string | ParseError {
  const v = arg.toLowerCase();

  if (!getColorSchemes().includes(v)) {
    return new ParseError(`Unknown color scheme: ${arg}`);
  }

  return v;
}

function logTypeParser(arg: string): "plain" | "fancy" | ParseError {
  const v = arg.toLowerCase();

  if (v !== "plain" && v !== "fancy") {
    return new ParseError(`Unknown log type: ${arg}`);
  }

  return v as "plain" | "fancy";
}

export const defaultMaxNaturalPrice =
  (new Date().getFullYear() - 2021) * 2_000_000_000;

const staticAccountValSpec = {
  fetchCloset: Args.boolean({
    key: "closet",
    aliases: ["clos"],
    help: "Should it fetch from the closet",
  }),
  fetchStorage: Args.boolean({
    key: "storage",
    aliases: ["stor", "hagnk", "hagnks"],
    help: "Should it fetch from storage",
  }),
  fetchShop: Args.boolean({
    key: "store",
    aliases: ["mall", "shop"],
    help: "Should it fetch from the shop",
  }),
  fetchInventory: Args.boolean({
    key: "inventory",
    aliases: ["inv"],
    help: "Should it fetch from your inventory",
  }),
  fetchDisplaycase: Args.boolean({
    key: "displaycase",
    aliases: ["display", "dc"],
    help: "Should it fetch from the displaycase",
  }),
  fetchClan: Args.boolean({
    key: "clan",
    aliases: ["stash"],
    help: "Should it check clan's stash? False by default",
  }),
  fetchSession: Args.boolean({
    key: "session",
    help: "Should it fetch using your current session of items acquired? False by default",
  }),
  doTradeables: Args.boolean({
    key: "tradeable",
    aliases: ["tradeables", "trade", "tradable"],
    help: "Should it do tradeables",
  }),
  doNonTradeables: Args.boolean({
    key: "notrade",
    aliases: [
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
    help: "Should it do non-tradeables",
  }),
  fetchFamiliars: Args.boolean({
    key: "familiar",
    aliases: ["familiars", "fam", "fams"],
    help: "Should it do familiars. Bound being true also means this is true if not set",
  }),
  fetchSnapshot: Args.boolean({
    key: "snapshot",
    help: "Should it attempt to use av-snapshot?",
  }),
  doBound: Args.boolean({
    key: "bound",
    aliases: ["bind", "bounded", "binds", "binded"],
    help: "Should it do items that are bound to your account",
  }),
  minimumMeat: Args.custom(
    {
      key: "meat",
      aliases: ["minmeat", "minimummeat", "min-meat", "minprice", "price"],
      help: "Each item total worth, at least this amount.",
      default: 0,
    },
    numberParser,
    "NUMBER",
  ),
  minimumAmount: Args.custom(
    {
      key: "amount",
      aliases: ["count", "minimumamount", "minamount"],
      help: "At least this many items",
      default: 1,
    },
    numberParser,
    "NUMBER",
  ),
  displayLimit: Args.number({
    key: "limit",
    aliases: ["displaylimit", "maxdisplay", "lines"],
    help: "Limit results to display this amount",
    default: 100,
  }),
  playerId: Args.custom(
    {
      key: "player",
      aliases: [
        "playerid",
        "playername",
        "user",
        "who",
        "target",
        "name",
        "username",
      ],
      help: `Target another player's DC, shop, av-snapshot (if exists). Can do player="John Smith" for spaces`,
      default: 0,
    },
    playerParser,
    "PLAYER_ID",
  ),
  doSuperFast: Args.boolean({
    key: "fast",
    aliases: ["superfast", "speed", "quick", "rough"],
    help: "Try resolve everything with historical price",
    default: false,
  }),
  maxAge: Args.number({
    key: "age",
    aliases: ["maxage", "days"],
    help: "The max days a price is allowed to be outdated",
    default: 999_999,
  }),
  sortBy: Args.custom<SortBy>(
    {
      key: "sort",
      aliases: ["sortby", "sorted"],
      help: `What we should sort the results by, prefix with ! or - to reverse sort. Supports: ${sortBys
        .map((s) => `${s.name} (${s.aliases.join(", ")})`)
        .join(", ")
        .toUpperCase()}`,
      default: sortByParser("TOTAL_PRICE") as SortBy,
    },
    sortByParser,
    "SORT_BY",
  ),
  reverseSort: Args.boolean({
    key: "reverse",
    aliases: ["desc", "descending"],
    help: "Reverse the sort order",
    default: false,
  }),
  shopWorth: Args.boolean({
    key: "worth",
    aliases: ["shopworth", "pricing", "prices"],
    help: "Seperates items in shop from the other items, and shows how under/overpriced they are. This can be inaccurate",
  }),
  javascriptFilter: Args.string({
    key: "jsfilter",
    aliases: ["javascriptfilter", "javascript", "js"],
    help: [
      `Filters if an item can be shown, provides an item & amount and expects a boolean.`,
      `"quotes" must be escaped if the next character is a space.`,
      `Example: jsfilter="(item, amount, worth, sales) => itemType(item) == "booze\\" && item.name.includes("beer")`,
    ].join(" "),
    default: "",
  }),
  sales: Args.number({
    key: "sales",
    aliases: ["sold"],
    help: "Hides items that have less than this amount of sales",
    default: 0,
  }),
  useLastSold: Args.boolean({
    key: "useLastSold",
    aliases: ["lastSold", "soldprice"],
    help: "Resolve prices by their last sold",
    default: false,
  }),
  brief: Args.boolean({
    key: "brief",
    help: "Prints out a single line as the final result, the total meat.",
    default: false,
  }),
  colorScheme: Args.custom(
    {
      key: "color",
      aliases: ["colors", "colorscheme", "scheme"],
      help:
        "What color schemes to use, set `accountvalColorScheme` pref to change the default. Supports: " +
        getColorSchemes().join(", "),
      default: "default",
      options: ["default", ...getColorSchemes()].map((s) => [s]),
    },
    colorSchemeParser,
    "COLOR_SCHEME",
  ),
  maxNaturalPrice: Args.custom(
    {
      key: "max",
      aliases: ["mallmax"],
      help: "The max natural price an item will reach before it's capped and called mall extinct. Default increases by 2b every year.",
      default: defaultMaxNaturalPrice,
      setting: "accountval_maxNaturalPrice",
    },
    numberParser,
    "NUMBER",
  ),
  doCategories: Args.boolean({
    key: "category",
    aliases: ["categories", "shelf", "shelves"],
    help: "Used only for Display Cases at this point, seperates the items into categories",
  }),
  showSingleItemWorth: Args.boolean({
    key: "each",
    help: "Displays the individual price of each item instead of the total, works best with `sort=meat`",
  }),
  dateToFetch: Args.string({
    key: "date",
    aliases: ["fetchdate", "historical", "time", "when", "at"],
    help: [
      `View everything with the prices of the past, either provide a '1d2m3y' which will automatically be converted and capped,`,
      `or a specified date 'DD-MM-YYYY' which cannot be older than 22-08-2023.`,
      `This obviously won't work for items that didn't exist then, and will make a backend call to 'kolprices.lib.co.nz/files/:date'`,
    ].join(" "),
  }),
  logOutputAs: Args.custom(
    {
      key: "text",
      aliases: ["logtype", "formatting"],
      help: [
        `If accountval should log everything with "fancy" text, which means html, or "plain" which means the output is also logged to your session log,`,
        `but will have no hover text or colors.`,
        `Try looking into kolmafia \'mirror\' if you want the output as html. Example usage: "text=plain". Change the default by using "set accountval_text=plain"`,
      ].join(" "),
      default: "fancy",
      setting: "accountval_text",
      options: [["plain"], ["fancy"]],
    },
    logTypeParser,
    "TEXT_TYPE",
  ),
  logOutputTo: Args.string({
    key: "output",
    help: [
      `Send the output of accountval to a file instead of printing into cli, eg 'output=accountval.html' would send it into the 'data/accountval.html'.`,
      `If the file ends with .html, it will entity encode all non-html lines.`,
    ].join(" "),
    default: "",
  }),
  pricegun: Args.boolean({
    key: "pricegun",
    help: "Resolve prices using pricegun. This will be slower.",
    default: false,
  }),
  mallPrice: Args.boolean({
    key: "mallPrice",
    help: [
      `Has accountval calculate prices from mallprice, it will load (and cache) ${Math.ceil(Item.all().filter((i) => i.tradeable).length / 30)} pages of items if needed.`,
      `Beware that although this is cached, you should avoid using this setting if you're going to be running accountval a dozen times, restarting after each or something,`,
      `as that many mall searches can't be differnated from mall abuse by TPTB`,
    ].join(" "),
    default: false,
  }),
  showPresetFilters: Args.boolean({
    key: "presets",
    help: "Show the preset filters",
    setting: "",
  }),

  pricegunBatchSize: Args.number({
    hidden: true,
    default: 500,
    help: "Max amount of items to send per pricegun request",
  }),
  settings: Args.boolean({ hidden: true, default: false }),
  timings: Args.boolean({ hidden: true, default: false }),
};

export interface AccountValSettings extends ReturnType<
  typeof Args.create<typeof staticAccountValSpec>
> {}

export class AccountValSettings {
  static defaultMaxNaturalPrice = defaultMaxNaturalPrice;

  // These are not exposed
  fetchingEverywhereish: boolean = true;
  fetchingNonItems: boolean = true;
  presets: PresetSetting[] = [];
  public expensivePricesAt: number = 40_000_000;
  public cheapTotalsLessThan: number = 20_000_000;
  public cheapPricesLessThan: number = 2_000_000;
  public maxPriceAge: number;

  doSettings(command: string): string[] {
    const errors: string[] = [];

    const presetSpec: any = {};

    for (const preset of getPresets()) {
      const names = preset.name();
      presetSpec[`preset_${names[0]}`] = Args.boolean({
        key: names[0],
        aliases: names.slice(1),
        help: preset.desc(),
        setting: `accountval_preset_${names[0]}`,
        hidden: true,
      });
    }

    const fullSpec = {
      ...staticAccountValSpec,
      presetFilters: Args.group("Preset Filters", presetSpec, true),
    };

    const scriptHelp = [
      `<font color=${AccountValColors.helpfulStateInfo}>AccountVal is a script to check what your account is worth, and find the good stuff fast.</font>`,
      `<font color=${AccountValColors.helpfulStateInfo}>You can provide these as a parameter to accountval to do other stuff than the base script.</font>`,
      `<font color='${AccountValColors?.helpfulStateInfo ?? "blue"}'>Use ! or - to negate a boolean, or use '='. Eg:</font><font color='gray'> -bound !bound bound=false</font>`,
      `<font color='${AccountValColors?.minorNote ?? "gray"}'>Disclaimer: The prices shown are not absolute, and can over/understate what it really is worth.</font>`,
    ];

    try {
      Object.assign(
        this,
        Args.parse("accountval", scriptHelp.join("\n"), fullSpec, command),
      );
    } catch (e: any) {
      errors.push(e.message || e.toString());

      return errors;
    }

    AccValTiming.enabled = this.timings;

    loadAccountvalColors(this.colorScheme);

    // Resolve Presets dynamically
    for (const preset of getPresets()) {
      const names = preset.name();
      const presetVal = (this as any).presetFilters?.[`preset_${names[0]}`];

      if (presetVal !== undefined) {
        this.presets.push({ preset: preset, negated: !presetVal });
      }
    }

    this.resolveFetchSources();

    if (this.settings) {
      for (const setting of Object.keys(this)) {
        provider().print(`${setting} = ${this[setting]}`);
      }
    }

    return errors;
  }

  private resolveFetchSources() {
    const fetchSources: (keyof typeof staticAccountValSpec)[] = [
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
    const wasSet = Object.entries(this)
      .filter(([k, v]) => v !== undefined)
      .map(([k]) => k as keyof AccountValSettings);

    // Unsupplied properties are undefined
    this.fetchingEverywhereish =
      !this.fetchSession &&
      !this.fetchClan &&
      fetchSources.find((v) => wasSet.includes(v) && this[v]) == null;

    this.fetchClan = this.fetchClan ?? false;
    this.fetchSession = this.fetchSession ?? false;

    if (!wasSet.includes("doTradeables")) {
      this.doTradeables = this.doBound
        ? false
        : wasSet.includes("doNonTradeables")
          ? !this.doNonTradeables
          : true;
    }

    if (!wasSet.includes("doNonTradeables")) {
      this.doNonTradeables = this.doBound
        ? false
        : wasSet.includes("doTradeables")
          ? !this.doTradeables
          : true;
    }

    if (!wasSet.includes("doBound")) {
      this.doBound =
        (this.doTradeables || this.fetchingEverywhereish) &&
        this.doNonTradeables;
    }

    if (
      wasSet.includes("fetchFamiliars") &&
      this.presets.find((p) => p.preset.name().includes("hatchling"))
    ) {
      this.fetchFamiliars = false;
    } else if (
      !wasSet.includes("fetchFamiliars") &&
      this.fetchingEverywhereish
    ) {
      this.fetchFamiliars = this.doBound;
    }

    for (const fetchSource of fetchSources) {
      if ((this as any)[fetchSource] !== undefined) {
        continue;
      }

      (this as any)[fetchSource] = this.fetchingEverywhereish;
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

  getMaxPriceAge(price: number, amount: number): number {
    return Math.min(this.maxAge, this.internalMaxPriceAge(price, amount));
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
