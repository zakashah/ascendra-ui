#!/usr/bin/env node
/**
 * Upgrade ascendra-ui to a newer version.
 *
 * Usage:
 *   npm run upgrade                       — interactive: lists versions, prompts
 *   npm run upgrade -- --version 1.2.0   — upgrade to a specific version
 *
 * What this updates:
 *   ascendra-ui/          — component library
 *   app/layout.tsx + app/globals.css + app/(app)/layout.tsx — managed shell files
 *   docs/                 — reference docs
 *   CHANGELOG.md
 *   scripts/upgrade.js    — self-updating
 *   ascendra.json         — version, commit hash, and managed dependency list
 *
 * New dependencies added in the target version are installed automatically.
 * Removed dependencies are flagged as warnings (never auto-removed).
 */

const { execSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const readline = require("readline");

const ROOT = path.resolve(__dirname, "..");

function run(cmd, opts = {}) {
  return execSync(cmd, { cwd: ROOT, ...opts });
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

function isGreater(a, b) {
  const p = (v) => v.replace(/^v/, "").split(".").map(Number);
  const [aM, am, ap] = p(a);
  const [bM, bm, bp] = p(b);
  return aM !== bM ? aM > bM : am !== bm ? am > bm : ap > bp;
}

function depDiff(oldDeps = {}, newDeps = {}) {
  const toInstall = [];
  const removed = [];

  for (const [pkg, ver] of Object.entries(newDeps)) {
    if (!oldDeps[pkg] || oldDeps[pkg] !== ver) {
      toInstall.push(`${pkg}@${ver.replace(/^\^|^~/, "")}`);
    }
  }
  for (const pkg of Object.keys(oldDeps)) {
    if (!newDeps[pkg]) removed.push(pkg);
  }

  return { toInstall, removed };
}

async function main() {
  const configPath = path.join(ROOT, "ascendra.json");
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

  if (!config.source) {
    console.error(
      "Error: no source set in ascendra.json.\n" +
      "This project was not initialized with create-project.js — cannot upgrade."
    );
    process.exit(1);
  }

  const source = config.source;
  const currentVersion = config.version;

  // List available tags from source repo
  let tags;
  try {
    const output = run(`git ls-remote --tags "${source}"`, { stdio: "pipe" }).toString();
    tags = output
      .split("\n")
      .filter(Boolean)
      .map((line) => line.split("\t")[1])
      .filter((ref) => ref?.startsWith("refs/tags/") && !ref.endsWith("^{}"))
      .map((ref) => ref.replace("refs/tags/", ""))
      .filter((tag) => /^v\d+\.\d+\.\d+$/.test(tag))
      .sort((a, b) => (isGreater(b, a) ? 1 : -1));
  } catch {
    console.error(`Error: could not read tags from "${source}".`);
    process.exit(1);
  }

  if (tags.length === 0) {
    console.error("No tagged versions found in the source repository.");
    process.exit(1);
  }

  // Resolve target version from flag or interactive prompt
  const versionArg = (() => {
    const idx = process.argv.findIndex((a) => a === "--version" || a === "-v");
    if (idx !== -1) return process.argv[idx + 1];
    const eq = process.argv.find((a) => a.startsWith("--version="));
    if (eq) return eq.split("=")[1];
    return null;
  })();

  let targetVersion;
  if (versionArg) {
    targetVersion = versionArg.replace(/^v/, "");
    rl.close();
  } else {
    console.log(`\nCurrent version: v${currentVersion}`);
    console.log("Available versions:");
    tags.forEach((t) => {
      const label = isGreater(t, `v${currentVersion}`) ? t : `${t} (current or older)`;
      console.log(`  ${label}`);
    });
    const answer = (await ask("\nUpgrade to version (e.g. 1.2.0): ")).trim();
    rl.close();
    targetVersion = answer.replace(/^v/, "");
  }

  const tag = `v${targetVersion}`;

  if (!tags.includes(tag)) {
    console.error(`Error: ${tag} not found. Available: ${tags.join(", ")}`);
    process.exit(1);
  }

  if (targetVersion === currentVersion) {
    console.log(`\nAlready on v${currentVersion}. Nothing to do.\n`);
    process.exit(0);
  }

  if (!isGreater(tag, `v${currentVersion}`)) {
    const proceed = await (async () => {
      const r = readline.createInterface({ input: process.stdin, output: process.stdout });
      return new Promise((resolve) => {
        r.question(
          `\nWarning: ${tag} is older than current v${currentVersion}. Downgrade? [y/N]: `,
          (a) => { r.close(); resolve(a.trim().toLowerCase()); }
        );
      });
    })();
    if (proceed !== "y") {
      console.log("Aborted.");
      process.exit(0);
    }
  }

  console.log(`\nUpgrading ascendra-ui: v${currentVersion} → v${targetVersion}\n`);

  const tmpDir = path.join(os.tmpdir(), `ascendra-upgrade-${Date.now()}`);
  try {
    execSync(`git clone --depth 1 --branch ${tag} "${source}" "${tmpDir}"`, { stdio: "inherit" });

    // Show CHANGELOG entry for this version
    try {
      const changelog = fs.readFileSync(path.join(tmpDir, "CHANGELOG.md"), "utf8");
      const lines = changelog.split("\n");
      const start = lines.findIndex((l) => l.startsWith(`## [${targetVersion}]`));
      if (start !== -1) {
        const end = lines.findIndex((l, i) => i > start && l.startsWith("## ["));
        const entry = lines.slice(start, end === -1 ? undefined : end).join("\n").trim();
        console.log("─── What changed ─────────────────────────────────────────────────");
        console.log(entry);
        console.log("──────────────────────────────────────────────────────────────────\n");
      }
    } catch {
      // Non-critical
    }

    // ── Replace ascendra-ui/ component library ────────────────────────────────────
    const libSrc = path.join(tmpDir, "ascendra-ui");
    const libDest = path.join(ROOT, "ascendra-ui");
    if (fs.existsSync(libDest)) fs.rmSync(libDest, { recursive: true });
    // Copy ascendra-ui/ but skip template/ — it's a showcase-internal dir
    fs.mkdirSync(libDest, { recursive: true });
    for (const entry of fs.readdirSync(libSrc, { withFileTypes: true })) {
      if (entry.name === "template") continue;
      const s = path.join(libSrc, entry.name);
      const d = path.join(libDest, entry.name);
      if (entry.isDirectory()) fs.cpSync(s, d, { recursive: true });
      else fs.copyFileSync(s, d);
    }
    console.log("  ✓ Updated ascendra-ui/");

    // ── Apply managed template app updates ───────────────────────────────────────
    const templateSrc = path.join(tmpDir, "ascendra-ui", "template", "app");
    if (fs.existsSync(templateSrc)) {
      const appDest = path.join(ROOT, "app");

      for (const managed of ["layout.tsx", "globals.css", "favicon.ico"]) {
        const src = path.join(templateSrc, managed);
        if (fs.existsSync(src)) fs.copyFileSync(src, path.join(appDest, managed));
      }

      const appShellSrc = path.join(templateSrc, "(app)");
      const appShellDest = path.join(appDest, "(app)");
      if (fs.existsSync(appShellSrc)) {
        const shellLayoutSrc = path.join(appShellSrc, "layout.tsx");
        if (fs.existsSync(shellLayoutSrc)) {
          fs.mkdirSync(appShellDest, { recursive: true });
          fs.copyFileSync(shellLayoutSrc, path.join(appShellDest, "layout.tsx"));
        }
        const gettingStartedSrc = path.join(appShellSrc, "page.tsx");
        if (fs.existsSync(gettingStartedSrc)) {
          fs.copyFileSync(gettingStartedSrc, path.join(appShellDest, "page.tsx"));
        }
        const sandboxSrc = path.join(appShellSrc, "sandbox", "page.tsx");
        const sandboxDest = path.join(appShellDest, "sandbox");
        if (fs.existsSync(sandboxSrc)) {
          fs.mkdirSync(sandboxDest, { recursive: true });
          fs.copyFileSync(sandboxSrc, path.join(sandboxDest, "page.tsx"));
        }
      }
      console.log("  ✓ Updated app/layout.tsx, app/globals.css, app/(app)/layout.tsx");
    }

    // ── Update docs/ ──────────────────────────────────────────────────────────────
    const srcDocs = path.join(tmpDir, "docs");
    if (fs.existsSync(srcDocs)) {
      const destDocs = path.join(ROOT, "docs");
      fs.mkdirSync(destDocs, { recursive: true });
      fs.cpSync(srcDocs, destDocs, { recursive: true });
      console.log("  ✓ Updated docs/");
    }

    // ── Update CHANGELOG.md ───────────────────────────────────────────────────────
    const changelogSrc = path.join(tmpDir, "CHANGELOG.md");
    if (fs.existsSync(changelogSrc)) {
      fs.copyFileSync(changelogSrc, path.join(ROOT, "CHANGELOG.md"));
      console.log("  ✓ Updated CHANGELOG.md");
    }

    // ── Self-update scripts/upgrade.js ────────────────────────────────────────────
    const newUpgradeSrc = path.join(tmpDir, "ascendra-ui", "template", "scripts", "upgrade.js");
    if (fs.existsSync(newUpgradeSrc)) {
      fs.copyFileSync(newUpgradeSrc, path.join(ROOT, "scripts", "upgrade.js"));
      console.log("  ✓ Updated scripts/upgrade.js");
    }

    // ── Sync dependencies ─────────────────────────────────────────────────────────
    const newSrcConfig = JSON.parse(
      fs.readFileSync(path.join(tmpDir, "ascendra.json"), "utf8")
    );
    const newDeps = newSrcConfig.dependencies || {};
    const newDevDeps = newSrcConfig.devDependencies || {};
    const oldDeps = config.dependencies || {};
    const oldDevDeps = config.devDependencies || {};

    const { toInstall: depsToInstall, removed: depsRemoved } = depDiff(oldDeps, newDeps);
    const { toInstall: devDepsToInstall, removed: devDepsRemoved } = depDiff(oldDevDeps, newDevDeps);

    if (depsToInstall.length > 0) {
      console.log("\n  Installing new/updated dependencies...");
      execSync(`npm install ${depsToInstall.join(" ")}`, { cwd: ROOT, stdio: "inherit" });
    }
    if (devDepsToInstall.length > 0) {
      console.log("  Installing new/updated dev dependencies...");
      execSync(`npm install --save-dev ${devDepsToInstall.join(" ")}`, { cwd: ROOT, stdio: "inherit" });
    }
    if (depsToInstall.length > 0 || devDepsToInstall.length > 0) {
      console.log("  ✓ Dependencies synced");
    }

    const allRemoved = [...depsRemoved, ...devDepsRemoved];
    if (allRemoved.length > 0) {
      console.log("\n  The following packages are no longer required by ascendra-ui:");
      allRemoved.forEach((p) => console.log(`    ${p}`));
      console.log("  You can remove them with: npm uninstall <package>");
    }

    // ── Update ascendra.json ───────────────────────────────────────────────────────
    const srcCommit = run("git rev-parse HEAD", { cwd: tmpDir, stdio: "pipe" }).toString().trim();
    config.version = targetVersion;
    config.commit = srcCommit;
    config.dependencies = newDeps;
    config.devDependencies = newDevDeps;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
    console.log("  ✓ Updated ascendra.json");

  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }

  // Commit the upgrade
  try {
    run(
      "git add ascendra-ui/ docs/ CHANGELOG.md ascendra.json app/layout.tsx app/globals.css " +
      "\"app/(app)/layout.tsx\" \"app/(app)/page.tsx\" \"app/(app)/sandbox/page.tsx\" " +
      "scripts/upgrade.js package-lock.json",
      { stdio: "inherit" }
    );
    run(`git commit -m "chore: upgrade ascendra-ui v${currentVersion} → v${targetVersion}"`, { stdio: "inherit" });
  } catch {
    // No-op if nothing changed
  }

  console.log(`\n✓ Upgraded to v${targetVersion}`);
  console.log("  Review Breaking changes in CHANGELOG.md and update your code accordingly.\n");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
