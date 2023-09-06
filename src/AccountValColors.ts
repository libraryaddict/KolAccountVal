import { getProperty } from "kolmafia";

export interface ColorsInterface {
  failedParameter: string;
  helpfulNote: string;
  warning: string;
  untradeable: string;
  helpfulInfo: string;
  mallExtinctColor1: string;
  mallExtinctColor2: string;
  shopPrice: string;
  shopPriceOverpriced: string;
}

export let AccountValColors: ColorsInterface;

const map: Map<string, ColorsInterface> = new Map();

map.set("default", {
  failedParameter: "purple",
  helpfulNote: "gray",
  warning: "red",
  untradeable: "red",
  helpfulInfo: "blue",
  mallExtinctColor1: "#4f5893",
  mallExtinctColor2: "#934f4f",
  shopPrice: "#db2525",
  shopPriceOverpriced: "#196f3d"
});

export function loadAccountvalColors(name: string): boolean {
  if (!map.has(name)) {
    return false;
  }

  AccountValColors = map.get(name);

  return true;
}

export function getAccountvalColors(): string[] {
  return [...map.keys()];
}

loadAccountvalColors(
  map.has(getProperty("accountvalColorScheme"))
    ? getProperty("accountvalColorScheme")
    : "default"
);
