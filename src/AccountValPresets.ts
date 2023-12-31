import {
  Item,
  Slot,
  autosellPrice,
  fullnessLimit,
  inebrietyLimit,
  isDiscardable,
  itemType,
  myFullness,
  myInebriety,
  myLevel,
  mySpleenUse,
  spleenLimit,
  toSlot,
} from "kolmafia";
import { ValItem } from "./AccountValLogic";

export interface AccountValPreset {
  name(): string[];

  isShown?(item: ValItem, worth: number): boolean;

  isProcessed(item: Item, worth: number): boolean;

  desc(): string;
}

const presets: AccountValPreset[] = [];

presets.push({
  name() {
    return ["consumables", "diet"];
  },

  isProcessed: function (item: Item, worth: number): boolean {
    return ["food", "booze", "spleen item"].includes(itemType(item));
  },

  desc: function (): string {
    return "Show only consumables";
  },
});

presets.push({
  name() {
    return ["hungry"];
  },

  isProcessed: function (item: Item, worth: number): boolean {
    if (
      myFullness() + item.fullness >= fullnessLimit() ||
      item.levelreq < myLevel()
    ) {
      return false;
    }

    return itemType(item) == "food";
  },

  desc: function (): string {
    return "Show only food you can fit in stomach";
  },
});

presets.push({
  name() {
    return ["thirsty"];
  },

  isProcessed: function (item: Item, worth: number): boolean {
    if (
      myInebriety() + item.inebriety >= inebrietyLimit() ||
      item.levelreq < myLevel()
    ) {
      return false;
    }

    return itemType(item) == "booze";
  },
  desc: function (): string {
    return "Show only booze you can fit in liver";
  },
});

presets.push({
  name() {
    return ["munchy"];
  },

  isProcessed: function (item: Item, worth: number): boolean {
    if (
      mySpleenUse() + item.spleen >= spleenLimit() ||
      item.levelreq < myLevel()
    ) {
      return false;
    }

    return itemType(item) == "spleen item";
  },
  desc: function (): string {
    return "Show only spleen items you can fit in spleen";
  },
});

for (const type of ["food", "booze", "spleen"]) {
  presets.push({
    name() {
      return [type];
    },

    isProcessed: function (item: Item): boolean {
      return itemType(item).replace(" item", "") == type;
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

  isProcessed: function (item: Item, worth: number): boolean {
    return item.notes.includes("BEVERAGE");
  },
  desc: function (): string {
    return "Show only beverage";
  },
});

presets.push({
  name() {
    return ["equip", "equips", "equipment", "gear"];
  },

  isProcessed: function (item: Item): boolean {
    return toSlot(item) != Slot.none;
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
    return item.isTradeable() && isDiscardable(item.actualItem);
  },

  desc: function (): string {
    return "Show only items that can be stolen";
  },
  isProcessed: function (item: Item, worth: number): boolean {
    throw new Error("Function not implemented.");
  },
});

presets.push({
  name() {
    return ["hatchling", "hatchlings", "larva"];
  },

  isProcessed: function (item: Item, worth: number): boolean {
    return itemType(item) == "familiar larva";
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
    if (item.isBound() || !isDiscardable(item.actualItem)) {
      return false;
    }

    const price = autosellPrice(item.actualItem) * 2;

    return price >= worth;
  },

  desc: function (): string {
    return "Show only items that sell at mall min";
  },

  isProcessed: function (item: Item, worth: number): boolean {
    throw new Error("Function not implemented.");
  },
});

export function getPreset(name: string) {
  return presets.find((p) => {
    return p.name().includes(name.toLowerCase());
  });
}

export function getPresets() {
  return presets;
}
