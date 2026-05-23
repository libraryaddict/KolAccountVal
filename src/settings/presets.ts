import { kol } from "../api/apiSupplier";
import { ValItem } from "../models/typings";
import { KoLItem, KoLSlot } from "../api/supplierTypings";

export interface AccountValPreset {
  name(): string[];
  isShown?(item: ValItem, worth: number): boolean;
  isProcessed?(item: KoLItem, worth: number): boolean;
  desc(): string;
}

let presets: AccountValPreset[] = null;

export function getPresets(): AccountValPreset[] {
  if (presets != null) {
    return presets;
  }

  presets = [];

  presets.push({
    name() {
      return ["consumables", "consumable", "diet", "consume", "consumeable"];
    },
    isProcessed: function (item: KoLItem, worth: number): boolean {
      return ["food", "booze", "spleen item"].includes(kol.itemType(item));
    },
    desc: function (): string {
      return "Show only consumables";
    },
  });

  for (const type of ["food", "booze", "spleen"]) {
    presets.push({
      name() {
        return [type];
      },
      isProcessed: function (item: KoLItem): boolean {
        return kol.itemType(item).replace(" item", "") == type;
      },
      desc: function (): string {
        return "Show only " + type;
      },
    });
  }

  presets.push({
    name() {
      return ["beverage"];
    },
    isProcessed: function (item: KoLItem, worth: number): boolean {
      return item.notes.includes("BEVERAGE");
    },
    desc: function (): string {
      return "Show only beverage";
    },
  });

  presets.push({
    name() {
      return ["hungry"];
    },
    isProcessed: function (item: KoLItem, worth: number): boolean {
      if (
        kol.myFullness() + item.fullness >= kol.fullnessLimit() ||
        item.levelreq < kol.myLevel()
      ) {
        return false;
      }

      return kol.itemType(item) == "food";
    },
    desc: function (): string {
      return "Show only food you can fit in stomach";
    },
  });

  presets.push({
    name() {
      return ["thirsty"];
    },
    isProcessed: function (item: KoLItem, worth: number): boolean {
      if (
        kol.myInebriety() + item.inebriety >= kol.inebrietyLimit() ||
        item.levelreq < kol.myLevel()
      ) {
        return false;
      }

      return kol.itemType(item) == "booze";
    },
    desc: function (): string {
      return "Show only booze you can fit in liver";
    },
  });

  presets.push({
    name() {
      return ["munchy"];
    },
    isProcessed: function (item: KoLItem, worth: number): boolean {
      if (
        kol.mySpleenUse() + item.spleen >= kol.spleenLimit() ||
        item.levelreq < kol.myLevel()
      ) {
        return false;
      }

      return kol.itemType(item) == "spleen item";
    },
    desc: function (): string {
      return "Show only spleen items you can fit in spleen";
    },
  });

  presets.push({
    name() {
      return ["equip", "equips", "equipment", "gear"];
    },
    isProcessed: function (item: KoLItem): boolean {
      return kol.toSlot(item) != KoLSlot.none;
    },
    desc: function (): string {
      return "Show only items that can be equipped";
    },
  });

  presets.push({
    name() {
      return ["pvpable", "pvp", "stealable"];
    },
    isShown(item: ValItem, worth: number): boolean {
      return item.isTradeable() && kol.isDiscardable(item.actualItem);
    },
    desc: function (): string {
      return "Show only items that can be stolen";
    },
  });

  presets.push({
    name() {
      return ["hatchling", "hatchlings", "larva"];
    },
    isProcessed: function (item: KoLItem, worth: number): boolean {
      return kol.itemType(item) == "familiar larva";
    },
    desc: function (): string {
      return "Show only items that can turn into familiars";
    },
  });

  presets.push({
    name() {
      return ["autosell", "junk"];
    },
    isShown(item: ValItem, worth: number): boolean {
      if (item.isBound() || !kol.isDiscardable(item.actualItem)) {
        return false;
      }

      return kol.autosellPrice(item.actualItem) * 2 >= worth;
    },
    desc: function (): string {
      return "Show only items that sell at mall min";
    },
  });

  const autoselluseItems: KoLItem[] = [
    "Bag of park garbage",
    "ancient vinyl coin purse",
    "Black pension check",
    "Briefcase",
    "Collection of tiny spooky objects",
    "CSA discount card",
    "Duct tape wallet",
    "Fat Wallet",
    "Gathered Meat-Clip",
    "LOLmec statuette",
    "Orcish meat locker",
    "Old coin purse",
    "Old leather wallet",
    "Penultimate Fantasy chest",
    "Roll of meat",
    "Shiny stones",
    "SMOOCH bottlecap",
    "Solid gold jewel",
    "Stolen meatpouch",
    "Warm Subject gift certificate",
    "Envelope full of Meat",
    "chest of the Bonerdagon",
    "cursed piece of thirteen",
    "Discount Telescope Warehouse gift certificate",
    "dungeon dragon chest",
    "fat stack of cash",
    "flytrap pellet",
    "Gratitude chocolate (Meat-filled)",
    "handful of tips",
    "kobold treasure hoard",
    "loose Meats",
    "meat globe",
    "Mr. Big's Wallet",
    "pixel coin",
    "pixellated moneybag",
    "smut orc keepsake box",
    "Stock Certificate",
  ].map((s) => KoLItem.get(s));

  presets.push({
    name: function (): string[] {
      return ["autouse"];
    },
    isProcessed: function (item: KoLItem): boolean {
      return autoselluseItems.includes(item);
    },
    desc: function (): string {
      return "Show only (some) usable items that could make you some meat";
    },
  });

  presets.forEach((preset) => {
    if (preset.isProcessed == null && preset.isShown == null) {
      throw (
        "The preset " +
        preset.name()[0] +
        " must have one of isProcessed or isShown defined!"
      );
    }

    if (preset.isProcessed != null && preset.isShown != null) {
      throw (
        "The preset " +
        preset.name()[0] +
        " can only have one of isProcessed and isShown defined!"
      );
    }
  });

  return presets;
}

export function getPreset(name: string): AccountValPreset {
  return getPresets().find((p) => p.name().includes(name.toLowerCase()));
}
