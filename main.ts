// The Meeting That Should Have Been an Email — make.fun one-liner entry.
// Writes a single joke line to /output/entry.txt (at most 200 characters).
// The gate counts the raw file content, so the line is written with no
// trailing newline and no extra whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Nine salaries per hour, one slide, and the only decision made was to schedule another meeting.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
