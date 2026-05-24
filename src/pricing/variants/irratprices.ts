import { kol } from "../../api/apiSupplier";
import { FlatfilePrices, ItemPriceMap } from "./flatfile";

export class IrratPrices extends FlatfilePrices {
  ofThePast: boolean = false;

  doWarning() {
    if (this.prices == null || this.ofThePast || this.lastUpdated == null) {
      return false;
    }

    const aWeekIsThisManyMillis = 7 * 24 * 60 * 60 * 1000;

    if (this.lastUpdated + aWeekIsThisManyMillis < Date.now()) {
      return false;
    }

    return true;
  }

  isViable() {
    if (this.prices == null) {
      return false;
    }

    if (this.ofThePast) {
      return true;
    }

    if (this.lastUpdated == null) {
      return false;
    }

    const irratDedAtWeek = 3;
    const aWeekIsThisManyMillis = 7 * 24 * 60 * 60 * 1000;

    if (
      this.lastUpdated + irratDedAtWeek * aWeekIsThisManyMillis <
      Date.now()
    ) {
      return false;
    }

    return true;
  }

  loadDataFile(): string {
    const toFetch = this.settings.dateToFetch;

    if (toFetch == null) {
      return kol.retrieveCache("irrats_item_prices.txt", "large_persist");
    }

    let finalDateString: string;
    const minDate = new Date(2023, 7, 23);
    minDate.setHours(0, 0, 0, 0);

    const absoluteDateRegex = /^\d{1,2}[-/]\d{1,2}[-/]\d{4}$/;

    if (absoluteDateRegex.test(toFetch)) {
      const [day, month, year] = toFetch.split(/[-/]/).map(Number);
      const parsedDate = new Date(year, month - 1, day);
      parsedDate.setHours(0, 0, 0, 0);

      if (
        parsedDate.getFullYear() !== year ||
        parsedDate.getMonth() !== month - 1 ||
        parsedDate.getDate() !== day
      ) {
        throw new Error(
          `Invalid date provided: ${toFetch} resolved to ${parsedDate.getDate()}-${parsedDate.getMonth() + 1}-${parsedDate.getFullYear()}.`,
        );
      }

      if (parsedDate < minDate) {
        throw new Error(`Date ${toFetch} cannot be older than 23-08-2023.`);
      }

      finalDateString = toFetch;
    } else {
      const dMatch = toFetch.match(/(\d+)d(?:ays?)?/);
      const mMatch = toFetch.match(/(\d+)m(?:onths?)?/);
      const yMatch = toFetch.match(/(\d+)y(?:ears?)?/);

      const days = dMatch ? parseInt(dMatch[1], 10) : 0;
      const months = mMatch ? parseInt(mMatch[1], 10) : 0;
      const years = yMatch ? parseInt(yMatch[1], 10) : 0;

      const consumedLength =
        (dMatch?.[0].length ?? 0) +
        (mMatch?.[0].length ?? 0) +
        (yMatch?.[0].length ?? 0);

      if (consumedLength !== toFetch.length || consumedLength === 0) {
        throw new Error(
          `Invalid date format for 'dateToFetch': "${toFetch}". Please use 'DD-MM-YYYY' or a relative format like '1d2m3y'.`,
        );
      }

      let targetDate = new Date();
      targetDate.setDate(targetDate.getDate() - days);
      targetDate.setMonth(targetDate.getMonth() - months);
      targetDate.setFullYear(targetDate.getFullYear() - years);

      if (targetDate < minDate) {
        targetDate = minDate;
      }

      const finalDay = String(targetDate.getDate()).padStart(2, "0");
      const finalMonth = String(targetDate.getMonth() + 1).padStart(2, "0");
      const finalYear = targetDate.getFullYear();
      finalDateString = `${finalDay}-${finalMonth}-${finalYear}`;
    }

    const responseText: string = kol.visitUrl(
      `https://kolprices.lib.co.nz/file/${finalDateString}`,
    );

    if (!responseText.startsWith("Last Updated:")) {
      if (responseText.length > 200) {
        throw new Error("Received an unexpected response from the server.");
      } else {
        throw new Error(responseText);
      }
    }

    kol.print(`Now resolving prices with date: ${finalDateString}`, "blue");
    this.ofThePast = true;

    return responseText;
  }

  loadDataItem(spl2: string[]): [number, ItemPriceMap] {
    const itemId = parseInt(spl2[0]);
    const age = parseInt(spl2[1]);
    const price = parseInt(spl2[2]);
    const volume = spl2[3] ? parseInt(spl2[3]) : -1;
    const lastSoldAt = spl2[4] ? parseInt(spl2[4]) : -1;

    return [
      itemId,
      { price: price, updated: age, volume: volume, lastSoldAt: lastSoldAt },
    ];
  }
}
