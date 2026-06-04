import { StoreItem } from "../resolvers/pages";
import {
  DataType,
  KoLAPI,
  KoLCoinmaster,
  KoLItem,
  MallPricesOutcome,
} from "../api/supplierTypings";

const KEY_PREFIX = "kol-accountval-";

export class BrowserProvider implements KoLAPI {
  ele = document.createElement("div");
  status: KoLStatus;
  myFamiliars: Familiar[];
  myShop: StoreItem[];
  mySkills: Skill[];

  mallPrice(item: KoLItem): number {
    throw new Error("Method not implemented.");
  }

  resolveAllMallPrices(previous: MallPricesOutcome): MallPricesOutcome {
    throw new Error("Method not implemented.");
  }

  storeCache(key: string, value: string, dataType: DataType): void {
    if (dataType == "transient") {
      sessionStorage.setItem(KEY_PREFIX + key, value);
    } else {
      localStorage.setItem(KEY_PREFIX + key, value);
    }
  }

  retrieveCache(key: string, dataType: DataType): string {
    if (dataType == "transient") {
      return sessionStorage.getItem(KEY_PREFIX + key) ?? "";
    }

    return localStorage.getItem(KEY_PREFIX + key) ?? "";
  }

  print(message: string, color?: string): void {
    message = this.entityEncode(message);

    if (color) {
      this.printHtml(`<font color='${color}'>${message}</font>`);
    } else {
      this.printHtml(message);
    }
  }

  printHtml(message: string): void {
    // TODO print it to w/e they're using
    throw new Error("Method not implemented.");
  }

  abort(message: string): void {
    console.error(message);
    this.print(message, "red");

    throw new Error(message);
  }

  visitUrl(url: string): string {
    // TODO If relative url, it's kol and should have credentials.
    const response = fetch(url, {
      method: "GET",
      headers: {
        Accept: "text/plain",
        "User-Agent": `accountval - https://github.com/libraryaddict/accountval`,
      },
    });
    //let text = response.text();
    throw new Error("Method not implemented.");
  }

  checkOutdated(): void {}

  myId(): string {
    return this.status.playerid;
  }

  getPlayerId(name: string): string {
    // TODO Change the rest of accountval to use a {name,id} instead of this
    throw new Error("Method not implemented.");
  }

  getPlayerName(id: number): string {
    throw new Error("Method not implemented.");
  }

  myMeat(): number {
    return this.status.meat;
  }

  myClosetMeat(): number {
    throw new Error("Method not implemented.");
  }

  myStorageMeat(): number {
    throw new Error("Method not implemented.");
  }

  mySessionMeat(): number {
    throw new Error("Not available in non-kolmafia.");
  }

  myFullness(): number {
    throw new Error("Not available in non-kolmafia.");
  }

  fullnessLimit(): number {
    throw new Error("Not available in non-kolmafia.");
  }

  myInebriety(): number {
    throw new Error("Not available in non-kolmafia.");
  }

  inebrietyLimit(): number {
    throw new Error("Not available in non-kolmafia.");
  }

  mySpleenUse(): number {
    throw new Error("Not available in non-kolmafia.");
  }

  spleenLimit(): number {
    throw new Error("Not available in non-kolmafia.");
  }

  myLevel(): number {
    throw new Error("Not available in non-kolmafia.");
  }

  isDarkMode(): boolean {
    return false;
  }

  getInventory(): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  getCloset(): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  getStorage(): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  getFreePulls(): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  getNoPulls(): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  getStash(): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  getDisplay(): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  getShop(): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  mySessionItems(): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  getCampground(): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  getFoldables(item: KoLItem, type: "fold"): Map<KoLItem, number> {
    throw new Error("Method not implemented.");
  }

  toItem(val: number): Item {
    return allItems[val];
  }

  toFamiliar(val: string | number): Familiar {
    if (typeof val == "number") {
      return allFamiliars[val];
    }

    return allFamiliars.find((f) => f.type.toLowerCase() == val.toLowerCase());
  }

  entityEncode(val: string): string {
    this.ele.textContent = val;

    return this.ele.innerHTML;
  }

  entityDecode(val: string): string {
    this.ele.innerHTML = val;

    return this.ele.textContent;
  }

  autosellPrice(item: Item): number {
    return item.autosellPrice;
  }

  shopPrice(item: Item): number {
    throw new Error("Method not implemented.");
  }

  sellPrice(coinmaster: KoLCoinmaster, item: Item): number {
    throw new Error("Method not implemented.");
  }

  historicalPrice(item: Item): number {
    return item.historicalPrice;
  }

  historicalAge(item: Item): number {
    return item.historicalAge;
  }

  equippedAmount(item: Item): number {
    throw new Error("Method not implemented.");
  }

  familiarEquippedEquipment(fam: Familiar): Item {
    return fam.equipment;
  }

  myFamiliar(): Familiar {
    if (this.status.familiar) {
      return this.toFamiliar(this.status.familiar);
    }

    return noFam;
  }

  haveFamiliar(fam: Familiar): boolean {
    if (this.myFamiliars == null) {
      // TODO
      throw new Error("Method not implemented.");
    }

    return this.myFamiliars.includes(fam);
  }

  haveSkill(skill: Skill): boolean {
    if (this.mySkills == null) {
      // TODO
      throw new Error("Method not implemented.");
    }

    return this.mySkills.includes(skill);
  }

  getPermedSkills(): { [skill: string]: boolean } {
    throw new Error("Method not implemented.");
  }

  associatedSkill(item: Item): Skill {
    return item.skill;
  }

  myGardenType(): string {
    throw new Error("Method not implemented.");
  }

  getWorkshed(): Item {
    throw new Error("Method not implemented.");
  }

  allNormalOutfits(): string[] {
    throw new Error("Method not implemented.");
  }

  itemType(item: Item): string {
    return item.type;
  }

  getItem(name: string | number): Item {
    if (typeof name == "number") {
      return allItems[name];
    }

    return allItems.find((i) => i.name.toLowerCase() == name.toLowerCase());
  }

  allItems(): Item[] {
    return allItems;
  }

  noItem(): Item {
    return noItem;
  }

  allFamiliars(): Familiar[] {
    return allFamiliars;
  }

  getSkill(name: string): Skill {
    return allSkills.find((s) => s.name.toLowerCase() == name.toLowerCase());
  }

  allSkills(): Skill[] {
    return allSkills;
  }

  noSkill(): Skill {
    return noSkill;
  }

  noSlot(): Slot {
    return "none";
  }

  toSlot(item: Item): Slot {
    return item.slot;
  }

  evalJsFilter(
    js: string,
  ): (item: Item, amount: number, price?: number, sales?: number) => boolean {
    // Not worth the effort
    throw new Error("Not available in non-kolmafia.");
  }
}

type KoLStatus = {
  playerid: string;
  name: string;
  equipment: Map<Slot, number>;
  familiar?: number;
  meat: number;
  pwd: string;
};

type Skill = {
  id: number;
  name: string;
};

const slotNames = [
  "hat",
  "weapon",
  "holster",
  "off-hand",
  "back",
  "shirt",
  "pants",
  "acc1",
  "acc2",
  "acc3",
  "familiar",
  "crown-of-thrones",
  "sticker1",
  "sticker2",
  "sticker3",
  "card-sleeve",
  "folder1",
  "folder2",
  "folder3",
  "folder4",
  "folder5",
  "buddy-bjorn",
  "bootskin",
  "bootspur",
  "codpiece1",
  "codpiece2",
  "codpiece3",
  "codpiece4",
  "codpiece5",
  "fakehand",
  "hats",
  "none",
] as const;

type Slot = (typeof slotNames)[number];

type Item = {
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

  skill: Skill;
  type: string;
  slot: Slot;
  historicalAge: number;
  historicalPrice: number;
  autosellPrice: number;
};

type Familiar = {
  id: number;
  type: string;
  hatchling: Item;
  equipment: Item;
};

const allItems: Item[] = [];
const allFamiliars: Familiar[] = [];
const allSkills: Skill[] = [];
const noSkill: Skill = {
  id: -1,
  name: "none",
};
const noItem: Item = {
  id: -1,
  name: "none",
  plural: "none",
  tradeable: false,
  gift: false,
  quest: false,
  descid: "",
  notes: "",
  fullness: 0,
  inebriety: 0,
  spleen: 0,
  levelreq: 0,
  reusable: false,
  discardable: false,
  skill: {
    id: 0,
    name: "",
  },
  type: "",
  slot: "none",
  autosellPrice: -1,
  historicalAge: -1,
  historicalPrice: -1,
};
const noFam: Familiar = {
  id: -1,
  type: "none",
  hatchling: noItem,
  equipment: noItem,
};

function loadItems() {
  // TODO
}

function loadSkills() {}

function loadFamiliars() {}
