import { KoLAPI } from "./supplierTypings";

let api: KoLAPI;

export function provider(): KoLAPI {
  if (!api) {
    throw `Trying to access api provider before setting it`;
  }

  return api;
}

export function setProvider(provider: KoLAPI) {
  api = provider;
}
