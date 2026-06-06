import { provider } from "../api/apiSupplier";
import { AccountValUtils } from "./utils";
import { printHtml } from "kolmafia";

export class AccValTiming {
  static tracking: ["STARTED" | "STOPPED", AccValTiming][] = [];
  static trackingMap: Map<string, AccValTiming> = new Map();
  static timingsSlowdown: number = 0;
  static enabled = false;

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

  static printHtml(line: string) {
    if (provider == null) {
      printHtml(line);
    } else {
      provider().printHtml(line);
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
      AccValTiming.printHtml(
        `<font color='blue'>${this.getName()}<font color='green'> time taken: </font>${this.getTimeStr()}</font>`,
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
    if (!this.enabled) {
      return null;
    }

    const started = Date.now();
    let existing = this.trackingMap.get(name);

    if (
      existing != null &&
      (existing.totalTimeTaken == null || existing.stepStarted != null)
    ) {
      throw "The timing for " + name + " was already started";
    }

    if (existing == null) {
      existing = new AccValTiming(name, withSteps);
      this.trackingMap.set(name, existing);
      this.tracking.push(["STARTED", existing]);
      existing.depth =
        this.tracking.filter(
          ([state, t]) => t.stopped == null && state == "STARTED",
        ).length - 1;
    } else {
      existing.start();
    }

    this.timingsSlowdown += Date.now() - started;

    return existing;
  }

  static stop(name: string, print: boolean = false): AccValTiming {
    if (!this.enabled) {
      return null;
    }

    const started = Date.now();
    const existing = this.trackingMap.get(name);

    if (existing == null) {
      throw "There was no time tracking created for " + name;
    }

    let lastStopIndex = -1;

    for (let i = this.tracking.length - 1; i >= 0; i--) {
      if (
        this.tracking[i][0] === "STOPPED" &&
        this.tracking[i][1] === existing
      ) {
        lastStopIndex = i;
        break;
      }
    }

    if (lastStopIndex !== -1) {
      this.tracking.splice(lastStopIndex, 1);
    }

    this.tracking.push(["STOPPED", existing]);

    existing.stop(print);
    this.timingsSlowdown += Date.now() - started;

    return existing;
  }

  static printTracked(
    method: "PRINT_JUST_ONCE" | "PRINT_START_AND_END" | "PRINT_JUST_END",
  ) {
    if (!this.enabled) {
      return;
    }

    const sortedTimes: ["STARTED" | "STOPPED", AccValTiming][] = [
      ...this.tracking,
    ];

    this.tracking.forEach(([state, t]) => {
      if (t.stopped == null) {
        sortedTimes.push(["STOPPED", t]);
      }
    });

    for (const [state, timing] of sortedTimes) {
      const depthStr = `<font color='gray'>${">&nbsp;".repeat(timing.depth)}</font>`;

      if (method == "PRINT_JUST_ONCE") {
        if (state != "STARTED") {
          continue;
        }

        this.printHtml(
          `${depthStr}<font color='blue'>${timing.getName()} <font color='green'>time taken:</font> ${timing.getTimeStr()}</font>`,
        );
      } else if (method == "PRINT_START_AND_END") {
        if (state == "STARTED") {
          this.printHtml(
            `${depthStr}<font color='blue'>${timing.getName()}</font> <font color='green'>started</font>`,
          );
        } else {
          this.printHtml(
            `${depthStr}<font color='blue'>${timing.getName()}<font color='green'> stopped, time taken: </font>${timing.getTimeStr()}</font>`,
          );
        }
      } else if (method == "PRINT_JUST_END") {
        if (state == "STARTED") {
          continue;
        }

        this.printHtml(
          `${depthStr}<font color='blue'>${timing.getName()}<font color='green'> time taken: </font>${timing.getTimeStr()}</font>`,
        );
      }
    }

    this.printHtml(
      `<font color='green'>The usage of timings took an extra: </font><font color='blue'>${AccountValUtils.getNumber(this.timingsSlowdown)}ms</font>`,
    );
  }
}
