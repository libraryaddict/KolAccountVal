import { KoLAPI } from "./supplierTypings";

export let kol: KoLAPI;

export function setProvider(provider: KoLAPI) {
  kol = provider;
}
