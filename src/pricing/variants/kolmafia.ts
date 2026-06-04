import { provider } from "../../api/apiSupplier";
import { ItemPrice, PriceType } from "../../models/typings";
import { PriceVolunteer } from "../priceInterface";
import { KoLItem, MallPricesOutcome } from "../../api/supplierTypings";
import { getProperty } from "kolmafia";

export class MallPricing implements PriceVolunteer {
  sessionKey = "accountval_loadedAllMallItems";
  ignoreKey = "_accountval_force_mallprices";
  loadedAllMallItems: MallPricesOutcome = "not_loaded";

  constructor() {
    this.loadLastState();

    // If prices have not been loaded yet
    if (this.loadedAllMallItems == "not_loaded") {
      this.loadMallPrices();
    }
  }

  loadLastState() {
    const prop = provider().retrieveCache(this.sessionKey, "transient");

    if (!prop) {
      return;
    }

    this.loadedAllMallItems = prop as MallPricesOutcome;
  }

  resetStateMaybe() {
    if (getProperty(this.ignoreKey) != "true") {
      return;
    }

    // If it used mallcheck.js
    if (this.loadedAllMallItems == "not_loaded") {
      // Force it to resolve prices ourselves
      this.loadedAllMallItems = "unsure";
    }
  }

  loadMallPrices() {
    if (this.loadedAllMallItems == "loaded") {
      throw `Mall prices failed to load, check that loathers/mall-check (mallcheck.js) is installed and working, set '${this.ignoreKey}=true' to ignore this error`;
    } else if (this.loadedAllMallItems == "unsure") {
      provider().print(
        `Mall prices didn't resolve properly, please make sure that mallcheck.js from loathers/mall-check is installed, now falling back to manually searching.`,
        "red",
      );
    }

    this.loadedAllMallItems = provider().resolveAllMallPrices(
      this.loadedAllMallItems,
    );

    provider().storeCache(
      this.sessionKey,
      this.loadedAllMallItems,
      "transient",
    );
  }

  isViable(): boolean {
    return true;
  }

  resolve(item: KoLItem): ItemPrice {
    const prevAge = provider().historicalAge(item);
    const price = provider().mallPrice(item);

    // The age should only go up, if it went down, there was a mall search
    if (
      provider().historicalAge(item) < prevAge &&
      // If the new malled price is not valid, then it was an item that can't be found in mall, which explains why the cached mall prices didn't work
      price >= 100 &&
      price < 999_999_999_999
    ) {
      this.resetStateMaybe();
      this.loadMallPrices();
    }

    return new ItemPrice(
      item,
      price,
      PriceType.MALL,
      provider().historicalAge(item),
    );
  }
}

export class HistoricalPricing implements PriceVolunteer {
  isViable(): boolean {
    return true;
  }

  resolve(item: KoLItem): ItemPrice {
    return new ItemPrice(
      item,
      provider().historicalPrice(item),
      PriceType.HISTORICAL,
      provider().historicalAge(item),
    );
  }
}
