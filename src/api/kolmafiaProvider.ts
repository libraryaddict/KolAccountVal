import {
  print,
  printHtml,
  abort,
  getProperty,
  setProperty,
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
  toBoolean,
  toFloat,
  Item,
  toInt,
  toItem,
  Familiar,
  toFamiliar,
  entityEncode,
  entityDecode,
  bufferToFile,
  fileToBuffer,
  autosellPrice,
  shopAmount,
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
  isDiscardable,
  Slot,
  toSlot,
} from "kolmafia";
import { KoLAPI } from "./supplierTypings";

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

  getProperty(name: string): string {
    return getProperty(name);
  }

  setProperty(name: string, value: string): void {
    setProperty(name, value);
  }

  visitUrl(url: string): string {
    return visitUrl(url);
  }

  getRevision(): number {
    return getRevision();
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

  toBoolean(val: string): boolean {
    return toBoolean(val);
  }

  toFloat(val: string): number {
    return toFloat(val);
  }

  toInt(val: string | Item): number {
    return typeof val == "string" ? toInt(val) : toInt(val);
  }

  toItem(val: string | number): Item {
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

  bufferToFile(buffer: string, file: string): void {
    bufferToFile(buffer, file);
  }

  fileToBuffer(file: string): string {
    return fileToBuffer(file);
  }

  autosellPrice(item: Item): number {
    return autosellPrice(item);
  }

  shopAmount(item: Item): number {
    return shopAmount(item);
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

  getInventory(): { [item: string]: number } {
    return getInventory();
  }

  getCloset(): { [item: string]: number } {
    return getCloset();
  }

  getStorage(): { [item: string]: number } {
    return getStorage();
  }

  getFreePulls(): { [item: string]: number } {
    return getFreePulls();
  }

  getNoPulls(): { [item: string]: number } {
    return getNoPulls();
  }

  getStash(): { [item: string]: number } {
    return getStash();
  }

  getDisplay(): { [item: string]: number } {
    return getDisplay();
  }

  getShop(): { [item: string]: number } {
    return getShop();
  }

  mySessionItems(): { [item: string]: number } {
    return mySessionItems();
  }

  getCampground(): { [item: string]: number } {
    return getCampground();
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

  skillModifier(item: Item, mod: string): Skill {
    return skillModifier(item, mod);
  }

  myGardenType(): string {
    return myGardenType();
  }

  getWorkshed(): Item {
    return getWorkshed();
  }

  getRelated(item: Item, type: string): { [item: string]: number } {
    return getRelated(item, type);
  }

  allNormalOutfits(): string[] {
    return allNormalOutfits();
  }

  itemType(item: Item): string {
    return itemType(item);
  }

  isDiscardable(item: Item): boolean {
    return isDiscardable(item);
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
    return new Function(`with (this) { return (${js}); }`).call(
      `require("kolmafia")`,
    );
  }
}
