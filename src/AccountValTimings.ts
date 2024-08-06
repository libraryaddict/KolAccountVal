import { printHtml } from "kolmafia";
import { AccountValUtils } from "./AccountValUtils";
import { AccountValSettings } from "./AccountValSettings";

export class AccValTiming {
  static tracking: ["STARTED" | "STOPPED", AccValTiming][] = [];
  static timingsSlowdown: number = 0;

  name: string;
  started: number = Date.now();
  stopped: number;
  depth: number = 0;
  stepStarted: number;
  totalTimeTaken: number = null;

  constructor(name: string, isSteps: boolean = false) {
    this.name = name;

    if (isSteps) {
      this.totalTimeTaken = 0;
      this.start();
    }
  }

  start() {
    if (this.totalTimeTaken == null) {
      throw this.getName() + " was not configured as a total time timings";
    }

    if (this.stepStarted != null) {
      throw this.getName() + " was not stopped properly";
    }

    this.stepStarted = Date.now();
  }

  getName(): string {
    return this.name;
  }

  stop(print: boolean = false): AccValTiming {
    if (this.stopped != null && this.stepStarted == null) {
      throw "The timing for " + this.getName() + " was already stopped";
    }

    this.stopped = Date.now();

    if (print) {
      printHtml(
        `<font color='blue'>${this.getName()}<font color='green'> time taken: </font>${this.getTimeStr()}</font>`
      );
    }

    if (this.totalTimeTaken != null) {
      this.totalTimeTaken += Date.now() - this.stepStarted;
      this.stepStarted = null;
    }

    return this;
  }

  getTime(): number {
    return this.totalTimeTaken ?? (this.stopped ?? Date.now()) - this.started;
  }

  getTimeStr(): string {
    return (
      AccountValUtils.getNumber(this.getTime()) +
      "ms" +
      (this.stopped == null ? " (never stopped)" : "") +
      (this.stepStarted != null ? " (step never stopped)" : "")
    );
  }

  static start(name: string, withSteps: boolean = false): AccValTiming {
    if (!AccountValSettings.timingsDebug) {
      return null;
    }

    const started = Date.now();
    let existing = this.tracking.find(([, t]) => t.getName() == name);

    if (
      existing != null &&
      (existing[1].totalTimeTaken == null || existing[1].stepStarted != null)
    ) {
      throw "The timing for " + name + " was already started";
    }

    if (existing == null) {
      this.tracking.push(
        (existing = ["STARTED", new AccValTiming(name, withSteps)])
      );

      existing[1].depth =
        this.tracking.filter(([state, t]) => t.stopped == null).length - 1;
    } else {
      existing[1].start();
    }

    this.timingsSlowdown += Date.now() - started;

    return existing[1];
  }

  static stop(name: string, print: boolean = false): AccValTiming {
    if (!AccountValSettings.timingsDebug) {
      return null;
    }

    const started = Date.now();
    const existing = this.tracking.find(([, t]) => t.getName() == name);

    if (existing == null) {
      throw "There was no time tracking created for " + name;
    }

    this.tracking = this.tracking.filter(
      ([s, t]) => s != "STOPPED" || t != existing[1]
    );
    this.tracking.push(["STOPPED", existing[1]]);

    existing[1].stop(print);

    this.timingsSlowdown += Date.now() - started;

    return existing[1];
  }

  static printTracked(
    method: "PRINT_JUST_ONCE" | "PRINT_START_AND_END" | "PRINT_JUST_END"
  ) {
    const sortedTimes: ["STARTED" | "STOPPED", AccValTiming][] = [
      ...this.tracking,
    ];

    this.tracking.forEach(([state, t]) => {
      if (t.stopped == null) {
        sortedTimes.push(["STOPPED", t]);
      }
    });

    for (const [state, timing] of sortedTimes) {
      const depthStr = `<font color='gray'>${">&nbsp;".repeat(
        timing.depth
      )}</font>`;

      if (method == "PRINT_JUST_ONCE") {
        if (state != "STARTED") {
          continue;
        }

        printHtml(
          `${depthStr}<font color='blue'>${timing.getName()} <font color='green'>time taken:</font> ${timing.getTimeStr()}</font>`
        );
      } else if (method == "PRINT_START_AND_END") {
        if (state == "STARTED") {
          printHtml(
            `${depthStr}<font color='blue'>${timing.getName()}</font> <font color='green'>started</font>`
          );
        } else {
          printHtml(
            `${depthStr}<font color='blue'>${timing.getName()}<font color='green'> stopped, time taken: </font>${timing.getTimeStr()}</font>`
          );
        }
      } else if (method == "PRINT_JUST_END") {
        if (state == "STARTED") {
          continue;
        }

        printHtml(
          `${depthStr}<font color='blue'>${timing.getName()}<font color='green'> time taken: </font>${timing.getTimeStr()}</font>`
        );
      }
    }

    printHtml(
      `<font color='green'>The usage of timings took an extra: </font><font color='blue'>${AccountValUtils.getNumber(
        this.timingsSlowdown
      )}ms</font>`
    );
  }
}
