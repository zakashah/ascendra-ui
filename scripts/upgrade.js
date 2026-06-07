#!/usr/bin/env node
/**
 * Pull the latest ascendra-ui/ component library from the ascendra-ui repo (main branch).
 * Always takes the latest — showcase is always on the bleeding edge.
 * Usage: npm run upgrade
 */

const { execSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

function main() {
  // Derive ascendra-ui URL from showcase's own remote (remove -showcase suffix)
  let sourceUrl;
  try {
    const origin = execSync("git remote get-url origin", { cwd: ROOT, stdio: "pipe" })
      .toString()
      .trim();
    sourceUrl = origin.endsWith("-showcase.git")
      ? origin.replace(/-showcase\.git$/, ".git")
      : origin.replace(/-showcase$/, "");
  } catch {
    console.error("Error: could not read git remote.");
    process.exit(1);
  }

  console.log(`\nUpgrading ascendra-ui/ from: ${sourceUrl}\n`);

  const tmpDir = path.join(os.tmpdir(), `ascendra-ui-${Date.now()}`);
  try {
    execSync(`git clone --depth 1 "${sourceUrl}" "${tmpDir}"`, { stdio: "inherit" });

    // Replace ascendra-ui/ component library
    const libDest = path.join(ROOT, "ascendra-ui");
    if (fs.existsSync(libDest)) fs.rmSync(libDest, { recursive: true });
    fs.cpSync(path.join(tmpDir, "ascendra-ui"), libDest, { recursive: true });

    // Copy CHANGELOG for reference
    const changelogSrc = path.join(tmpDir, "CHANGELOG.md");
    if (fs.existsSync(changelogSrc)) {
      fs.copyFileSync(changelogSrc, path.join(ROOT, "CHANGELOG.md"));
    }

    console.log("\n✓ ascendra-ui/ updated to latest");
    console.log("  Run npm run docs:generate to regenerate docs if needed.\n");
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

main();
