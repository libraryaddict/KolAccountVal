import { AccountValPreset } from "../settings/presets";
import { KoLItem } from "../api/supplierTypings";

export enum ItemStatus {
  BOUND,
  NO_TRADE,
  FAMILIAR,
  IN_USE,
  SHOP_WORTH,
}

export enum ItemType {
  UNTRADEABLE_ITEM,
  BOOK,
  PROPERTY,
  EUDORA,
  GARDEN,
  VISIT_URL_CHECK,
  SKILL,
  CURRENCY,
  CAMPGROUND,
  SCRIPT,
}

export enum PriceType {
  NEW_PRICES,
  HISTORICAL,
  MALL,
  MALL_SALES,
  AUTOSELL,
}

export enum FieldType {
  NUMBER,
  SORTBY,
  COLOR_SCHEME,
  BOOLEAN,
  NAME,
  STRING,
  TEXT_TYPE,
}

export interface SortBy {
  name: string;
  aliases: string[];
  assignValue: (
    item: ValItem,
    price: ItemPrice,
    owned: Map<ValItem, number>,
    maxPrice: number,
  ) => void;
  fallback?: (item1: ValItem, item2: ValItem) => number;
}
export interface ValSetting {
  groupUnder?: string;
  type: FieldType;
  field: string;
  names: string[];
  desc: string;
  preset?: AccountValPreset;
}

export type PresetSetting = {
  preset: AccountValPreset;
  negated: boolean;
};

export class ValItem {
  name: string;
  pluralName: string;
  category?: string;
  actualItem: KoLItem;
  tradeableItem: KoLItem;
  bound: ItemStatus;
  shopWorth: number;
  worthMultiplier: number = 1;
  snapshotSource: string;
  sortValue: number;

  constructor(
    actualItem: KoLItem,
    item: KoLItem = actualItem,
    name: string = item.name,
    pluralName: string = item.plural,
    bound?: ItemStatus,
    snapshotSource?: string,
  ) {
    this.actualItem = actualItem;
    this.name = name;
    this.pluralName = pluralName;
    this.tradeableItem = item;
    this.bound = bound;
    this.snapshotSource = snapshotSource;

    if (this.bound == null && !item.tradeable) {
      this.bound = ItemStatus.NO_TRADE;
    }
  }

  withCategory(category: string): ValItem {
    this.category = category;

    return this;
  }

  getBound(): string {
    if (this.bound == ItemStatus.BOUND) {
      return "Bound";
    }

    if (this.bound == ItemStatus.FAMILIAR) {
      return "Familiar";
    }

    if (this.bound == ItemStatus.IN_USE) {
      return "In Use";
    }

    if (this.bound == ItemStatus.NO_TRADE) {
      return "Untradeable";
    }

    return null;
  }

  isBound(): boolean {
    return this.bound == ItemStatus.BOUND || this.bound == ItemStatus.FAMILIAR;
  }

  isTradeable(): boolean {
    return (
      this.bound == null ||
      this.bound == ItemStatus.IN_USE ||
      this.bound == ItemStatus.SHOP_WORTH
    );
  }
}

export class ItemPrice {
  item: KoLItem;
  price: number;
  price2: number;
  accuracy: PriceType;
  daysOutdated: number;
  volume: number;

  constructor(
    item: KoLItem,
    price: number,
    accuracy: PriceType,
    daysOutdated: number,
    volume: number = -1,
    price2: number = -1,
  ) {
    this.item = item;
    this.price = price;
    this.accuracy = accuracy;
    this.daysOutdated = daysOutdated;
    this.volume = volume;
    this.price2 = price2;
  }
}
