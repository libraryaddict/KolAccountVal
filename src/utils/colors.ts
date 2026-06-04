import { provider } from "../api/apiSupplier";

export type ColorsInterface = {
  attentionGrabbingWarning: string;
  failedToParseSettings: string;
  minorNote: string;
  helpfulStateInfo: string;
  mallExtinctColor1: string;
  mallExtinctColor2: string;
  shopPricedOk: string;
  shopPricesOverpriced: string;
  noteUntradeable: string;
};

export let AccountValColors: ColorsInterface;

const map: Map<string, ColorsInterface> = new Map();

map.set("light", {
  attentionGrabbingWarning: "red",
  failedToParseSettings: "purple",
  minorNote: "gray",
  helpfulStateInfo: "blue",
  mallExtinctColor1: "#4f5893",
  mallExtinctColor2: "#934f4f",
  shopPricedOk: "#196f3d",
  shopPricesOverpriced: "#db2525",
  noteUntradeable: "red",
});

map.set("dark", {
  attentionGrabbingWarning: "red",
  failedToParseSettings: "purple",
  minorNote: "gray",
  helpfulStateInfo: "#3ccabb",
  mallExtinctColor1: "#6b7ade",
  mallExtinctColor2: "#d76d6d",
  shopPricedOk: "#269f59",
  shopPricesOverpriced: "#dd4040",
  noteUntradeable: "red",
});

export function loadAccountvalColors(name: string): boolean {
  if (name == "default") {
    name = provider().isDarkMode() ? "dark" : "light";
  }

  if (!map.has(name)) {
    return false;
  }

  AccountValColors = map.get(name);

  return true;
}

export function getAccountvalColors(): string[] {
  return ["default", ...map.keys()];
}

export function showAccountvalColors(name: string) {
  if (!map.has(name)) {
    provider().print("Can't find any colors by that name", "red");

    return;
  }

  const colors = map.get(name);

  for (const [k, v] of Object.entries(colors)) {
    provider().printHtml(`<font color='${v}'>${k}</font>`);
  }
}

export function initAccountValColors() {
  const def = provider().isDarkMode() ? "dark" : "default";
  loadAccountvalColors(
    provider().retrieveCache("accountvalColorScheme", "small_persist")
      ? provider().retrieveCache("accountvalColorScheme", "small_persist")
      : def,
  );
}
