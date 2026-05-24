import { kol } from "./apiSupplier";

export type DataType = "large_persist" | "small_persist" | "transient";

export interface KoLCoinmaster {
  item: KoLItem;
}

export interface KoLItem {
  id: number;
  name: string;
  plural: string;
  tradeable: boolean;
  gift: boolean;
  quest: boolean;
  seller?: KoLCoinmaster;
  descid: string;
  notes: string;
  fullness: number;
  inebriety: number;
  spleen: number;
  levelreq: number;
  reusable: boolean;
  discardable: boolean;
}

export class KoLItem implements KoLItem {
  static get(key: string | number): KoLItem {
    return kol.getItem(key);
  }

  static get none() {
    return kol.noItem();
  }

  static all(): KoLItem[] {
    return kol.allItems();
  }
}

export interface KoLFamiliar {
  hatchling: KoLItem;
  toString(): string;
}

export class KoLFamiliar {
  static all() {
    return kol.allFamiliars();
  }
}

export interface KoLSlot {}

export class KoLSlot implements KoLSlot {
  static get none() {
    return kol.noSlot();
  }
}
export interface KoLSkill {
  name: string;
}

export class KoLSkill implements KoLSkill {
  static all(): KoLSkill[] {
    return kol.allSkills();
  }

  static get none() {
    return kol.noSkill();
  }

  static get(key: string): KoLSkill {
    return kol.getSkill(key);
  }
}

export interface KoLAPI {
  print(message: string, color?: string): void;
  printHtml(message: string): void;
  abort(message: string): void;
  visitUrl(url: string): string;
  checkOutdated(): void;
  myId(): string;
  getPlayerId(name: string): string;
  getPlayerName(id: number): string;
  myMeat(): number;
  myClosetMeat(): number;
  myStorageMeat(): number;
  mySessionMeat(): number;
  myFullness(): number;
  fullnessLimit(): number;
  myInebriety(): number;
  inebrietyLimit(): number;
  mySpleenUse(): number;
  spleenLimit(): number;
  myLevel(): number;
  isDarkMode(): boolean;
  toItem(val: number): KoLItem;
  toFamiliar(val: string | number): KoLFamiliar;
  entityEncode(val: string): string;
  entityDecode(val: string): string;
  storeCache(key: string, value: string, dataType: DataType): void;
  retrieveCache(key: string, dataType: DataType): string;
  autosellPrice(item: KoLItem): number;
  shopPrice(item: KoLItem): number;
  sellPrice(coinmaster: KoLCoinmaster, item: KoLItem): number;
  historicalPrice(item: KoLItem): number;
  historicalAge(item: KoLItem): number;
  equippedAmount(item: KoLItem): number;
  familiarEquippedEquipment(fam: KoLFamiliar): KoLItem;
  getInventory(): Map<KoLItem, number>;
  getCloset(): Map<KoLItem, number>;
  getStorage(): Map<KoLItem, number>;
  getStash(): Map<KoLItem, number>;
  getDisplay(): Map<KoLItem, number>;
  getShop(): Map<KoLItem, number>;
  mySessionItems(): Map<KoLItem, number>;
  getCampground(): Map<KoLItem, number>;
  myFamiliar(): KoLFamiliar;
  haveFamiliar(fam: KoLFamiliar): boolean;
  haveSkill(skill: KoLSkill): boolean;
  getPermedSkills(): { [skill: string]: boolean };
  associatedSkill(item: KoLItem): KoLSkill;
  myGardenType(): string;
  getWorkshed(): KoLItem;
  getRelated(item: KoLItem, type: "fold"): Map<KoLItem, number>;
  allNormalOutfits(): string[];
  itemType(item: KoLItem): string;

  getItem(name: string | number): KoLItem;
  allItems(): KoLItem[];
  noItem(): KoLItem;
  allFamiliars(): KoLFamiliar[];
  getSkill(name: string): KoLSkill;
  allSkills(): KoLSkill[];
  noSkill(): KoLSkill;
  noSlot(): KoLSlot;
  toSlot(item: KoLItem): KoLSlot;

  evalJsFilter(
    js: string,
  ): (item: KoLItem, amount: number, price?: number, sales?: number) => boolean;
}
