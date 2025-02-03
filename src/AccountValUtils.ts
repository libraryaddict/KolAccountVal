import { print } from "kolmafia";
import { AccountValSettings, FieldType } from "./AccountValSettings";
import { AccountValColors } from "./AccountValColors";

export class AccountValUtils {
  static splitArguments(
    settings: AccountValSettings,
    command: string,
    debugMessages: boolean = false
  ): string[] {
    const debug = function (message: string) {
      if (!debugMessages) {
        return;
      }

      print("DEBUG: " + message, AccountValColors.minorNote);
    };

    let tCommand = command;
    let match: RegExpMatchArray;

    while (
      (match = tCommand.match(/(^| )([a-zA-Z]+ )([a-zA-Z\d"]+)/)) != null
    ) {
      tCommand = tCommand.replace(match[2], "");

      const setting = settings.getSetting(match[2].trim());

      const v2 = (match[3] || "").replace("!", "").split("=")[0].trim();
      const setting2 = settings.getSetting(
        v2.toLowerCase() == "true" ? "" : v2
      );

      if (
        setting == null ||
        (setting.type == FieldType.BOOLEAN && setting2 != null)
      ) {
        debug(`'${match[2]}' is not a key parameter`);
        continue;
      }

      command = command.replace(match[2], match[2].trim() + "=");
      tCommand = tCommand.replace(match[3], "");
      debug(
        `Replacing '${match[2]}' as a key parameter, matched using '${match[0]}'`
      );
    }

    tCommand = command;
    const spl: string[] = [];

    // Splitting so we can do name="Tom the Hunk"
    while (
      (match = tCommand.match(/(?:^| )([^ =]+=("|').+?"|')(?=(?:$| ))/)) != null
    ) {
      let v = match[1];
      let val = "";

      if (v.indexOf("=") > 0) {
        val = v.substring(0, v.indexOf("=") + 1);
        v = v.substring(val.length);
      }

      if (
        (v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))
      ) {
        v = v.substring(1, v.length - 1);
      }

      v = val + v;

      spl.push(v);
      tCommand = tCommand.replace(match[1], "").trim().replace(/ +/, " ");
      debug(`'${v} defined as a key="value", matched '${match[0]}'`);
    }

    if (tCommand.length > 0) {
      for (const arg of tCommand.split(" ")) {
        debug(`Found leftover parameter '${arg}`);
        spl.push(arg);
      }
    }

    debug("Final parameters are: " + spl.map((s) => `{${s}}`).join(" "));

    return spl;
  }

  static getNumber(number: number, trimAt: number = 2): string {
    const str = number.toString().split(".");

    if (str.length > 1 && str[1].length > trimAt) {
      str[1] = str[1].substring(0, trimAt);
    }

    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return str.join(".");
  }

  static getNumberOrClamp(
    number: number,
    min: number,
    max: number,
    minStr: string,
    maxStr: string
  ): string {
    if (number > max) {
      return maxStr;
    }

    if (number < min) {
      return minStr;
    }

    return this.getNumber(number);
  }
}
