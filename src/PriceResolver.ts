import { autosellPrice, Item, getRelated } from "kolmafia";
import { PricingSettings } from "./AccountValSettings";
import { AccValTiming } from "./AccountValTimings";
import { ItemPrice, PriceType, PriceVolunteer } from "./types";
import { HistoricalPricing, MallPricing } from "./pricing/kolmafia";
import { IrratPrices } from "./pricing/irratprices";
import { PricegunResolver } from "./pricing/pricegun";

export class PriceResolver {
  private specialCase: Map<Item, number> = new Map();
  private settings: PricingSettings;
  private resolvers: PriceVolunteer[] = [];

  constructor(settings: PricingSettings) {
    this.settings = settings;

    let specialResolver: PriceVolunteer;

    if (settings.globalSettings.pricegun) {
      specialResolver = new PricegunResolver();
    } else {
      specialResolver = new IrratPrices(settings);
    }

    if (specialResolver && specialResolver.load) {
      specialResolver.load();
    }

    this.resolvers.push(specialResolver);
    this.resolvers.push(new HistoricalPricing());
    this.resolvers.push(new MallPricing());

    this.fillSpecialCase();
  }

  addSpecialCase(item: Item, meat: number) {
    this.specialCase.set(item, meat);
  }

  private fillSpecialCase() {
    this.specialCase.set(Item.get("Meat Paste"), 10);
    this.specialCase.set(Item.get("Meat Stack"), 100);
    this.specialCase.set(Item.get("Dense meat stack"), 1000);
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

  bulkLoad(items: Item[]) {
    // Dedupes items
    const toCheck = items.filter((i, ind) => items.lastIndexOf(i) == ind);
    const checked: Item[] = [];

    for (const item of items) {
      if (checked.includes(item)) {
        continue;
      }

      const foldables = Object.keys(getRelated(item, "fold"));

      if (foldables == null || foldables.length <= 1) {
        continue;
      }

      const items = foldables
        .map((s) => Item.get(s))
        .filter((i) => !checked.includes(i));

      checked.push(...items);
      items.filter((i) => !toCheck.includes(i)).forEach((i) => toCheck.push(i));
    }

    this.resolvers[0].bulkResolve(toCheck);
  }

  itemPrice(
    item: Item,
    ignoreFold: boolean = false,
    forcePricing: PriceType = null,
    doSuperFast: boolean = false,
    doEstimates: boolean = false,
  ): ItemPrice {
    if (this.settings.globalSettings.pricegun) {
      ignoreFold = true;
    }

    if (!ignoreFold) {
      AccValTiming.start("Check Foldable", true);

      try {
        const foldables = Object.keys(getRelated(item, "fold"));

        if (foldables != null && foldables.length > 1) {
          AccValTiming.start("Deeper Foldable Check", true);

          try {
            const foldPrices = foldables
              .map((f) =>
                this.itemPrice(
                  Item.get(f),
                  true,
                  forcePricing,
                  doSuperFast,
                  doEstimates,
                ),
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
            AccValTiming.stop("Deeper Foldable Check");
          }
        }
      } finally {
        AccValTiming.stop("Check Foldable");
      }
    }

    AccValTiming.start("Check Pricing Misc", true);

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
        return new ItemPrice(item, autosellPrice(item), PriceType.AUTOSELL, 0);
      }
    } finally {
      AccValTiming.stop("Check Pricing Misc");
    }

    AccValTiming.start("Run Final Pricing Check", true);

    for (const resolver of this.resolvers) {
      const price = resolver.resolve(item);

      if (price == null && this.settings.dateToFetch == null) {
        continue;
      }

      return price;
    }

    throw "Failed to resolve price for " + item;
  }
}
