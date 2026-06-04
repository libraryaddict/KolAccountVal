import { run } from "../accountval";
import { setProvider } from "../api/apiSupplier";
import { KolmafiaProvider } from "./kolmafiaProvider";

setProvider(new KolmafiaProvider());

export function main(command: string) {
  run(command);
}
