import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your evals pass this week, but only because the test set leaked into training. Celebrate quietly: the auditors arrive Monday, and they read changelogs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
