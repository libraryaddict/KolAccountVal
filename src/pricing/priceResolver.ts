import { provider } from "../api/apiSupplier";
import { AccountValSettings } from "../settings/settings";
import { AccValTiming } from "../utils/timings";
import { ItemPrice, PriceType } from "../models/typings";
import { PriceVolunteer } from "./priceInterface";
import { HistoricalPricing, MallPricing } from "./variants/kolmafia";
import { IrratPrices } from "./variants/irratprices";
import { PricegunResolver } from "./variants/pricegun";
import { KoLItem } from "../api/supplierTypings";

export class PriceResolver {
  private specialCase: Map<KoLItem, number> = new Map();
  private resolvers: PriceVolunteer[] = [];

  constructor(private settings: AccountValSettings) {
    let specialResolver: PriceVolunteer;

    if (settings.pricegun) {
      specialResolver = new PricegunResolver(settings);
    } else if (settings.mallPrice) {
      specialResolver = new MallPricing();
    } else {
      specialResolver = new IrratPrices(settings);
    }

    if (specialResolver && specialResolver.loadLastState) {
      specialResolver.loadLastState();
    }

    this.resolvers.push(specialResolver);
    this.resolvers.push(new HistoricalPricing());

    this.fillSpecialCase();
  }

  addSpecialCase(item: KoLItem, meat: number) {
    this.specialCase.set(item, meat);
  }

  private fillSpecialCase() {
    this.specialCase.set(KoLItem.get("Meat Paste"), 10);
    this.specialCase.set(KoLItem.get("Meat Stack"), 100);
    this.specialCase.set(KoLItem.get("Dense meat stack"), 1000);
  }

  doWarning(): boolean {
    if (this.resolvers[0] instanceof IrratPrices) {
      return this.resolvers[0].doWarning();
    }

    return false;
  }

  stop() {
    this.resolvers.forEach((r) => r.stop && r.stop());
  }

  bulkLoad(items: KoLItem[]) {
    if (!this.resolvers[0].bulkResolve) {
      return;
    }

    const toCheck = new Set(items);
    const checked = new Set<KoLItem>();

    for (const item of toCheck) {
      if (checked.has(item)) {
        continue;
      }

      const folds = provider().getFoldables(item, "fold");

      if (!folds.length) {
        continue;
      }

      for (const i of folds) {
        checked.add(i);
        toCheck.add(i);
      }
    }

    this.resolvers[0].bulkResolve(Array.from(toCheck));
  }

  itemPrice(
    item: KoLItem,
    ignoreFold: boolean = false,
    forcePricing: PriceType = null,
    doSuperFast: boolean = false,
    doEstimates: boolean = false,
    timingsKey: string = "",
  ): ItemPrice {
    if (this.settings.pricegun) {
      ignoreFold = true;
    }

    if (!ignoreFold) {
      AccValTiming.start(timingsKey + "Check Foldable", true);

      try {
        const foldables = provider().getFoldables(item, "fold");

        if (foldables.length) {
          AccValTiming.start(timingsKey + "Deeper Foldable Check", true);

          try {
            const foldPrices = foldables
              .map((f) =>
                this.itemPrice(f, true, forcePricing, doSuperFast, doEstimates),
              )
              .filter((p) => p != null);

            foldPrices.sort((f1, f2) =>
              f1.item.tradeable != f2.item.tradeable
                ? f1.item.tradeable
                  ? -1
                  : 1
                : f1.price - f2.price,
            );
            const compare = foldPrices.find((f) => f.item == item);

            for (const f of foldPrices) {
              if (f.daysOutdated > compare.daysOutdated * 3) {
                continue;
              }

              return f;
            }

            return foldPrices[0];
          } finally {
            AccValTiming.stop(timingsKey + "Deeper Foldable Check");
          }
        }
      } finally {
        AccValTiming.stop(timingsKey + "Check Foldable");
      }
    }

    AccValTiming.start(timingsKey + "Check Pricing Misc", true);

    try {
      if (this.specialCase.has(item)) {
        return new ItemPrice(
          item,
          this.specialCase.get(item),
          PriceType.MALL,
          0,
        );
      }

      if (!item.tradeable) {
        return new ItemPrice(
          item,
          provider().autosellPrice(item),
          PriceType.AUTOSELL,
          0,
        );
      }
    } finally {
      AccValTiming.stop(timingsKey + "Check Pricing Misc");
    }

    AccValTiming.start(timingsKey + "Final Pricing Check", true);

    try {
      for (const resolver of this.resolvers) {
        const price = resolver.resolve(item);

        if (price == null && this.settings.dateToFetch == null) {
          continue;
        }

        return price;
      }
    } finally {
      AccValTiming.stop(timingsKey + "Final Pricing Check");
    }

    throw "Failed to resolve price for " + item;
  }
}
