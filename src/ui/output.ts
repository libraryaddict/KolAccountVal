import { kol } from "../api/apiSupplier";
import { AccountValSettings } from "../settings/settings";

export class ReportOutput {
  private output: string[];
  private settings: AccountValSettings;

  constructor(settings: AccountValSettings) {
    this.settings = settings;
  }

  printLine(line: string, textType: "html" | "plain", color?: string) {
    if (this.settings.logOutputAs == "plain" && textType == "html") {
      line = line.replace(/<[^>]*>/g, "");
      textType = "plain";
    }

    if (this.settings.logOutputTo) {
      if (this.output == null) {
        if (line != null) {
          line = line.trim();
        }

        if (line == null || line == "") {
          return;
        }

        this.output = [];
      }

      if (textType == "plain" && this.settings.logOutputTo.endsWith(".html")) {
        line = kol.entityEncode(line);
      }

      this.output.push(line);
    } else if (textType == "html") {
      kol.printHtml(line);
    } else if (color != null) {
      kol.print(line, color);
    } else {
      kol.print(line);
    }
  }

  escapeHTML(str: string): string {
    return kol
      .entityDecode(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  stop() {
    if (this.output == null || this.output.length == 0) {
      return;
    }

    kol.bufferToFile(this.output.join("\n"), this.settings.logOutputTo);
    kol.print(
      `accounval results printed to 'data/${this.settings.logOutputTo}'`,
    );
  }
}
