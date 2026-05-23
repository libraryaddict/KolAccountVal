import { kol } from "./apiSupplier";

export interface KoLCoinmaster {
  item: KoLItem;
}

export interface KoLItem {
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

export class KoLSlot {
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
  getProperty(name: string): string;
  setProperty(name: string, value: string): void;
  visitUrl(url: string): string;
  getRevision(): number;
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
  toBoolean(val: string): boolean;
  toFloat(val: string): number;
  toInt(val: string | KoLItem): number;
  toItem(val: string | number): KoLItem;
  toFamiliar(val: string | number): KoLFamiliar;
  entityEncode(val: string): string;
  entityDecode(val: string): string;
  bufferToFile(buffer: string, file: string): void;
  fileToBuffer(file: string): string;
  autosellPrice(item: KoLItem): number;
  shopAmount(item: KoLItem): number;
  shopPrice(item: KoLItem): number;
  sellPrice(coinmaster: KoLCoinmaster, item: KoLItem): number;
  historicalPrice(item: KoLItem): number;
  historicalAge(item: KoLItem): number;
  equippedAmount(item: KoLItem): number;
  familiarEquippedEquipment(fam: KoLFamiliar): KoLItem;
  getInventory(): { [item: string]: number };
  getCloset(): { [item: string]: number };
  getStorage(): { [item: string]: number };
  getFreePulls(): { [item: string]: number };
  getNoPulls(): { [item: string]: number };
  getStash(): { [item: string]: number };
  getDisplay(): { [item: string]: number };
  getShop(): { [item: string]: number };
  mySessionItems(): { [item: string]: number };
  getCampground(): { [item: string]: number };
  myFamiliar(): KoLFamiliar;
  haveFamiliar(fam: KoLFamiliar): boolean;
  haveSkill(skill: KoLSkill): boolean;
  getPermedSkills(): { [skill: string]: boolean };
  skillModifier(item: KoLItem, mod: string): KoLSkill;
  myGardenType(): string;
  getWorkshed(): KoLItem;
  getRelated(item: KoLItem, type: "fold"): { [item: string]: number };
  allNormalOutfits(): string[];
  itemType(item: KoLItem): string;
  isDiscardable(item: KoLItem): boolean;

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
