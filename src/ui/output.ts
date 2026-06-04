import { provider } from "../api/apiSupplier";
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
        line = provider().entityEncode(line);
      }

      this.output.push(line);
    } else if (textType == "html") {
      provider().printHtml(line);
    } else if (color != null) {
      provider().print(line, color);
    } else {
      provider().print(line);
    }
  }

  escapeHTML(str: string): string {
    return provider()
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

    provider().storeCache(
      this.settings.logOutputTo,
      this.output.join("\n"),
      "large_persist",
    );
    provider().print(
      `accounval results printed to 'data/${this.settings.logOutputTo}'`,
    );
  }
}
