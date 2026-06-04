export class AccountValUtils {
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
    maxStr: string,
  ): string {
    if (number > max) {
      return maxStr;
    }

    if (number < min) {
      return minStr;
    }

    return this.getNumber(number);
  }

  static toBoolean(string: string): boolean {
    return ["true", "yes", "1"].includes(string.toLowerCase());
  }

  static toFloat(string: string): number {
    return parseFloat(string.replaceAll(",", ""));
  }

  static toInt(string: string): number {
    return parseInt(string.replaceAll(",", ""));
  }
}
