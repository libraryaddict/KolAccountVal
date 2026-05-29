import {
  print,
  printHtml,
  abort,
  visitUrl,
  getRevision,
  myId,
  getPlayerId,
  getPlayerName,
  myMeat,
  myClosetMeat,
  myStorageMeat,
  mySessionMeat,
  myFullness,
  fullnessLimit,
  myInebriety,
  inebrietyLimit,
  mySpleenUse,
  spleenLimit,
  myLevel,
  isDarkMode,
  Item,
  toItem,
  Familiar,
  toFamiliar,
  entityEncode,
  entityDecode,
  bufferToFile,
  fileToBuffer,
  autosellPrice,
  shopPrice,
  Coinmaster,
  sellPrice,
  historicalPrice,
  historicalAge,
  equippedAmount,
  familiarEquippedEquipment,
  getInventory,
  getCloset,
  getStorage,
  getFreePulls,
  getNoPulls,
  getStash,
  getDisplay,
  getShop,
  mySessionItems,
  getCampground,
  myFamiliar,
  haveFamiliar,
  Skill,
  haveSkill,
  getPermedSkills,
  skillModifier,
  myGardenType,
  getWorkshed,
  getRelated,
  allNormalOutfits,
  itemType,
  Slot,
  toSlot,
  sessionStorage,
  setProperty,
  getProperty,
} from "kolmafia";
import * as kolmafia from "kolmafia";
import { DataType, KoLAPI } from "../supplierTypings";

const requiredRevision = 28933;

export class KolmafiaProvider implements KoLAPI {
  print(message: string, color?: string): void {
    print(message, color);
  }

  printHtml(message: string): void {
    printHtml(message);
  }

  abort(message: string): void {
    abort(message);
  }

  visitUrl(url: string): string {
    return visitUrl(url);
  }

  checkOutdated(): void {
    if (getRevision() >= requiredRevision) {
      return;
    }

    this.printHtml(
      `<font color='red'>You need to update KoLMafia to the latest version. This script will not work properly on versions older than ${requiredRevision}.</font>`,
    );
  }

  myId(): string {
    return myId();
  }

  getPlayerId(name: string): string {
    return getPlayerId(name);
  }

  getPlayerName(id: number): string {
    return getPlayerName(id);
  }

  myMeat(): number {
    return myMeat();
  }

  myClosetMeat(): number {
    return myClosetMeat();
  }

  myStorageMeat(): number {
    return myStorageMeat();
  }

  mySessionMeat(): number {
    return mySessionMeat();
  }

  myFullness(): number {
    return myFullness();
  }

  fullnessLimit(): number {
    return fullnessLimit();
  }

  myInebriety(): number {
    return myInebriety();
  }

  inebrietyLimit(): number {
    return inebrietyLimit();
  }

  mySpleenUse(): number {
    return mySpleenUse();
  }

  spleenLimit(): number {
    return spleenLimit();
  }

  myLevel(): number {
    return myLevel();
  }

  isDarkMode(): boolean {
    return isDarkMode();
  }

  toItem(val: number): Item {
    if (typeof val == "string") {
      return Item.get(val);
    }

    return toItem(val);
  }

  toFamiliar(val: string | number): Familiar {
    if (typeof val == "string") {
      return Familiar.get(val);
    }

    return toFamiliar(val);
  }

  entityEncode(val: string): string {
    return entityEncode(val);
  }

  entityDecode(val: string): string {
    return entityDecode(val);
  }

  storeCache(key: string, value: string, dataType: DataType): void {
    if (dataType == "large_persist") {
      bufferToFile(key, value);
    } else if (dataType == "small_persist") {
      setProperty(key, value);
    } else {
      sessionStorage.setItem(key, value);
    }
  }

  retrieveCache(key: string, dataType: DataType): string {
    if (dataType == "large_persist") {
      return fileToBuffer(key);
    } else if (dataType == "small_persist") {
      return getProperty(dataType);
    }

    return sessionStorage.getItem(key) ?? "";
  }

  autosellPrice(item: Item): number {
    return autosellPrice(item);
  }

  shopPrice(item: Item): number {
    return shopPrice(item);
  }

  sellPrice(coinmaster: Coinmaster, item: Item): number {
    return sellPrice(coinmaster, item);
  }

  historicalPrice(item: Item): number {
    return historicalPrice(item);
  }

  historicalAge(item: Item): number {
    return historicalAge(item);
  }

  equippedAmount(item: Item): number {
    return equippedAmount(item);
  }

  familiarEquippedEquipment(fam: Familiar): Item {
    return familiarEquippedEquipment(fam);
  }

  itemsToMap(items: { [item: string]: number }): Map<Item, number> {
    const map: Map<Item, number> = new Map();

    for (const [key, value] of Object.entries(items)) {
      map.set(Item.get(key), value);
    }

    return map;
  }

  getInventory(): Map<Item, number> {
    return this.itemsToMap(getInventory());
  }

  getCloset(): Map<Item, number> {
    return this.itemsToMap(getCloset());
  }

  getStorage(): Map<Item, number> {
    const map: Map<Item, number> = this.itemsToMap(getStorage());

    for (const items of [getFreePulls(), getNoPulls()]) {
      const m = this.itemsToMap(items);

      for (const [item, amount] of m) {
        map.set(item, (map.get(item) ?? 0) + amount);
      }
    }

    return map;
  }

  getStash(): Map<Item, number> {
    return this.itemsToMap(getStash());
  }

  getDisplay(): Map<Item, number> {
    return this.itemsToMap(getDisplay());
  }

  getShop(): Map<Item, number> {
    return this.itemsToMap(getShop());
  }

  mySessionItems(): Map<Item, number> {
    return this.itemsToMap(mySessionItems());
  }

  getCampground(): Map<Item, number> {
    return this.itemsToMap(getCampground());
  }

  myFamiliar(): Familiar {
    return myFamiliar();
  }

  haveFamiliar(fam: Familiar): boolean {
    return haveFamiliar(fam);
  }

  haveSkill(skill: Skill): boolean {
    return haveSkill(skill);
  }

  getPermedSkills(): { [skill: string]: boolean } {
    return getPermedSkills();
  }

  associatedSkill(item: Item): Skill {
    return skillModifier(item, "Skill");
  }

  myGardenType(): string {
    return myGardenType();
  }

  getWorkshed(): Item {
    return getWorkshed();
  }

  getRelated(item: Item, type: string): Map<Item, number> {
    return this.itemsToMap(getRelated(item, type));
  }

  allNormalOutfits(): string[] {
    return allNormalOutfits();
  }

  itemType(item: Item): string {
    return itemType(item);
  }

  getItem(name: string | number): Item {
    return Item.get(name);
  }

  allItems(): Item[] {
    return Item.all();
  }

  noItem(): Item {
    return Item.none;
  }

  allFamiliars(): Familiar[] {
    return Familiar.all();
  }

  getSkill(name: string): Skill {
    return Skill.get(name);
  }

  allSkills(): Skill[] {
    return Skill.all();
  }

  noSkill(): Skill {
    return Skill.none;
  }

  noSlot(): Slot {
    return Slot.none;
  }

  toSlot(item: Item): Slot {
    return toSlot(item);
  }

  evalJsFilter(js: string) {
    return new Function("scope", `with (scope) {${js}}`)(kolmafia);
  }
}
