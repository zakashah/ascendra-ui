/**
 * Generates docs/ui-reference.md from all lib config files.
 *
 * Sources:
 *   lib/registry.ts          — primitive components (props, imports, examples)
 *   lib/forms-config.ts      — composite form patterns
 *   lib/dialogs-config.ts    — dialog patterns
 *   lib/sheets-config.ts     — sheet patterns
 *   lib/drawers-config.ts    — drawer patterns
 *   lib/dashboards-config.ts — dashboard patterns
 *   lib/nav-config.ts        — category ordering
 *
 * Run: npm run docs:generate
 * Re-run whenever any registry entry or config file is changed.
 */

import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { dashboardsConfig } from "../lib/dashboards-config";
import { dialogsConfig } from "../lib/dialogs-config";
import { drawersConfig } from "../lib/drawers-config";
import { formsConfig } from "../lib/forms-config";
import { navConfig } from "../lib/nav-config";
import { registry } from "../lib/registry";
import { reportsConfig } from "../lib/reports-config";
import { sheetsConfig } from "../lib/sheets-config";
import type { LayoutCell, PropDef } from "../lib/types";

// ── Slug resolution ────────────────────────────────────────────────────────────
// navConfig uses prefixed slugs like 'feedback/simple-badge'.
// Registry keys use bare slugs like 'simple-badge'.
// Try the full slug first, then the basename segment.
function resolveRegistry(navSlug: string) {
  return registry[navSlug] ?? registry[navSlug.split("/").pop()!];
}

// Given a registry bare slug, find its category title from navConfig.
function getCategoryTitle(regSlug: string): string {
  for (const category of navConfig) {
    for (const item of category.items) {
      if (item.slug === regSlug || item.slug.split("/").pop() === regSlug) {
        return category.title;
      }
    }
  }
  return "Uncategorised";
}

// ── "Used in" cross-reference index ───────────────────────────────────────────
// Maps each component display-name (as listed in config `components` arrays)
// to all the composite patterns that include it.
type UsageSite = {
  kind: "Form" | "Dialog" | "Sheet" | "Drawer";
  name: string;
  slug: string;
};
const usedIn = new Map<string, UsageSite[]>();

function addUsage(componentName: string, site: UsageSite) {
  if (!usedIn.has(componentName)) usedIn.set(componentName, []);
  usedIn.get(componentName)!.push(site);
}

for (const f of formsConfig)   f.components.forEach((c) => addUsage(c, { kind: "Form",   name: f.name, slug: f.slug }));
for (const d of dialogsConfig) d.components.forEach((c) => addUsage(c, { kind: "Dialog", name: d.name, slug: d.slug }));
for (const s of sheetsConfig)  s.components.forEach((c) => addUsage(c, { kind: "Sheet",  name: s.name, slug: s.slug }));
for (const d of drawersConfig) d.components.forEach((c) => addUsage(c, { kind: "Drawer", name: d.name, slug: d.slug }));

// ── Overview grouping ──────────────────────────────────────────────────────────
const grouped = new Map<string, string[]>();
for (const [slug, meta] of Object.entries(registry)) {
  const cat = getCategoryTitle(slug);
  if (!grouped.has(cat)) grouped.set(cat, []);
  grouped.get(cat)!.push(meta.name);
}

// ── Render helpers ─────────────────────────────────────────────────────────────

function escapeCell(s: string) {
  return s.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function propsTable(props: PropDef[]): string {
  if (!props.length) return "_No custom props — accepts standard HTML attributes._\n";
  const header = ["| Prop | Type | Default | Description |", "|---|---|---|---|"];
  const rows = props.map((p) => {
    const namePart = p.component ? `\`${p.name}\` _(on ${p.component})_` : `\`${p.name}\``;
    return `| ${[
      namePart,
      `\`${escapeCell(p.type)}\``,
      p.default ? `\`${escapeCell(p.default)}\`` : "—",
      escapeCell(p.description ?? ""),
    ].join(" | ")} |`;
  });
  return [...header, ...rows].join("\n") + "\n";
}

function usedInBlock(importNames: string[]): string {
  const seen = new Set<string>();
  const refs: UsageSite[] = [];
  for (const name of importNames) {
    for (const site of usedIn.get(name) ?? []) {
      const key = `${site.kind}:${site.slug}`;
      if (!seen.has(key)) { seen.add(key); refs.push(site); }
    }
  }
  if (!refs.length) return "";

  const kindPrefix: Record<string, string> = {
    Form: "forms/", Dialog: "dialogs", Sheet: "sheets", Drawer: "drawers",
  };
  const byKind: Record<string, UsageSite[]> = {};
  for (const ref of refs) {
    if (!byKind[ref.kind]) byKind[ref.kind] = [];
    byKind[ref.kind].push(ref);
  }

  const lines = ["**Used in**", ""];
  for (const [kind, sites] of Object.entries(byKind)) {
    // Forms and dashboards have individual pages; dialogs/sheets/drawers share a gallery.
    const links = sites.map((s) =>
      kind === "Form"
        ? `[${s.name}](/showcase/forms/${s.slug})`
        : `[${s.name}](/showcase/${kindPrefix[kind]})`
    );
    // Deduplicate gallery links (dialogs/sheets/drawers all point to the same page).
    const unique = [...new Set(links)];
    lines.push(`- _${kind}s:_ ${unique.join(", ")}`);
  }
  return lines.join("\n") + "\n";
}

function examplesBlock(examples?: string[]): string {
  if (!examples?.length) return "";
  const blocks = examples.map((ex) => ["```tsx", ex.trim(), "```"].join("\n"));
  return ["**Usage example**", "", ...blocks].join("\n") + "\n";
}

function layoutGrid(layout: LayoutCell[][]): string {
  const rows = layout.map((row, i) => {
    const cells = row.map(
      (cell) => `\`${cell.type}[${cell.cols}]\` ${cell.title}${cell.height ? ` _(${cell.height})_` : ""}`
    );
    return `- Row ${i + 1}: ${cells.join("  ·  ")}`;
  });
  return ["**Layout** (12-column grid)", "", ...rows].join("\n") + "\n";
}

// ── Categories to treat as non-primitive (skip in Part 1 component loop) ──────
const SAMPLE_CATEGORIES = new Set([
  "Getting Started",
  "Sample Dialogs",
  "Sample Sheets",
  "Sample Drawers",
  "Sample Dashboards",
  "Sample Reports",
  "Sample Forms",
  "Charts",
]);

// Known nav items that are gallery/guide pages with no registry entry (not drift).
const KNOWN_NON_REGISTRY_SLUGS = new Set([
  "", "design-tokens", "guidelines", "accessibility",
  "dialogs", "sheets", "drawers", "dashboards", "forms", "reports", "charts",
  "data-table-lab", "layout-guide",
  ...formsConfig.map((f) => `forms/${f.slug}`),
  ...dialogsConfig.map((d) => `dialogs/${d.slug}`),
  ...sheetsConfig.map((s) => `sheets/${s.slug}`),
  ...drawersConfig.map((d) => `drawers/${d.slug}`),
  ...dashboardsConfig.map((d) => `dashboards/${d.slug}`),
  ...reportsConfig.map((r) => `reports/${r.slug}`),
  "charts/line", "charts/area", "charts/bar", "charts/pie", "charts/radial",
  "charts/radar", "charts/scatter", "charts/composed", "charts/treemap",
  "charts/histogram", "charts/candlestick",
]);

// ── Build markdown ─────────────────────────────────────────────────────────────

const today = new Date().toISOString().slice(0, 10);
const componentCount = Object.keys(registry).length;

const ascendraConfig = JSON.parse(readFileSync(join(process.cwd(), "ascendra.json"), "utf8")) as { version: string };
const uiVersion = ascendraConfig.version;

const lines: string[] = [
  `<!-- ascendra-ui-version: ${uiVersion} -->`,
  "# Ascendra UI — UI Reference",
  "",
  `> Auto-generated on ${today} · ascendra-ui v${uiVersion}`,
  "> Run `npm run docs:generate` after any registry or config change.",
  "",
  "---",
  "",
  "## Overview",
  "",
  `**Primitive components:** ${componentCount}  `,
  `**Composite forms:** ${formsConfig.length}  `,
  `**Dialogs:** ${dialogsConfig.length}  `,
  `**Sheets:** ${sheetsConfig.length}  `,
  `**Drawers:** ${drawersConfig.length}  `,
  `**Dashboards:** ${dashboardsConfig.length}  `,
  `**Reports:** ${reportsConfig.length}`,
  "",
  "### Primitive components by category",
  "",
  "| Category | Components |",
  "|---|---|",
  ...[...grouped.entries()].map(([cat, names]) => `| ${cat} | ${names.join(", ")} |`),
  "",
  "---",
  "",
  "## Part 1 — Primitive Components",
  "",
  "> These are the individual building blocks. Import from `@/ascendra-ui` (or `@/ascendra-ui/shadcn` where noted).",
  "> The **Used in** section shows which composite patterns reference each component — use it to find real-world examples.",
  "",
];

// ── Part 1: primitives grouped by navConfig category ──────────────────────────

for (const category of navConfig) {
  if (SAMPLE_CATEGORIES.has(category.title)) continue;

  const categoryEntries = category.items
    .map((item) => resolveRegistry(item.slug))
    .filter(Boolean);

  if (!categoryEntries.length) continue;

  lines.push(`### ${category.title}`, "");

  for (const meta of categoryEntries) {
    const importStatement = `import { ${meta.importNames.join(", ")} } from "${meta.importPath}"`;
    // Build the showcase URL from the registry slug using the navConfig entry for this component.
    const navItem = navConfig
      .flatMap((c) => c.items)
      .find((item) => resolveRegistry(item.slug)?.slug === meta.slug);
    const showcaseSlug = navItem?.slug ?? meta.slug;
    const showcaseUrl = `/showcase/${showcaseSlug}`;

    lines.push(
      `#### ${meta.name}`,
      "",
      meta.description,
      "",
      `- **Import:** \`${importStatement}\``,
      `- **Showcase:** [${showcaseUrl}](${showcaseUrl})`,
      "",
      "**Props**",
      "",
      propsTable(meta.props ?? []),
    );

    const examples = examplesBlock(meta.examples);
    if (examples) lines.push(examples);

    const usageBlock = usedInBlock(meta.importNames);
    if (usageBlock) lines.push(usageBlock);

    lines.push("---", "");
  }
}

// ── Part 2: Composite Patterns ─────────────────────────────────────────────────

lines.push(
  "## Part 2 — Composite Patterns",
  "",
  "> Full-page patterns built from the primitives above. Each showcases a realistic domain scenario.",
  "> Use the **Components used** lists to understand how primitives are composed together.",
  "",
);

// ── Forms ─────────────────────────────────────────────────────────────────────

lines.push(
  "### Forms",
  "",
  `${formsConfig.length} form patterns covering SaaS, HR, e-commerce, finance, and general scenarios.`,
  "",
  "| Name | Domain | Complexity | Layout |",
  "|---|---|---|---|",
  ...formsConfig.map(
    (f) => `| [${f.name}](/showcase/forms/${f.slug}) | ${f.domain} | ${f.complexity} | ${escapeCell(f.layout)} |`
  ),
  "",
);

for (const f of formsConfig) {
  lines.push(
    `#### ${f.name}`,
    "",
    f.description,
    "",
    `- **Slug:** \`${f.slug}\``,
    `- **Showcase:** [/showcase/forms/${f.slug}](/showcase/forms/${f.slug})`,
    `- **Domain:** ${f.domain}`,
    `- **Complexity:** ${f.complexity}`,
    `- **Layout:** ${f.layout}`,
    `- **Edit mode:** ${f.hasEditMode ? "Yes — ships with a read-only view and an Edit toggle" : "No"}`,
    `- **Components used:** ${f.components.join(", ")}`,
    "",
    "---",
    "",
  );
}

// ── Dialogs ───────────────────────────────────────────────────────────────────

lines.push(
  "### Dialogs",
  "",
  `${dialogsConfig.length} dialog patterns grouped by intent type. All are rendered on the shared [Dialog Gallery](/showcase/dialogs) page.`,
  "",
  "| Name | Type | Components |",
  "|---|---|---|",
  ...dialogsConfig.map(
    (d) => `| ${d.name} | ${d.type} | ${d.components.join(", ")} |`
  ),
  "",
);

// Group by type for detailed subsections
const dialogsByType = new Map<string, typeof dialogsConfig>();
for (const d of dialogsConfig) {
  if (!dialogsByType.has(d.type)) dialogsByType.set(d.type, []);
  dialogsByType.get(d.type)!.push(d);
}

for (const [type, dialogs] of dialogsByType) {
  lines.push(`**${type} dialogs**`, "");
  for (const d of dialogs) {
    lines.push(
      `##### ${d.name}`,
      "",
      d.description,
      "",
      `- **Slug:** \`${d.slug}\``,
      `- **Components:** ${d.components.join(", ")}`,
      "",
    );
  }
}

lines.push("---", "");

// ── Sheets ────────────────────────────────────────────────────────────────────

lines.push(
  "### Sheets",
  "",
  `${sheetsConfig.length} slide-out panel patterns for Detail, Preview, Activity, and Settings use-cases. All rendered on the [Sheet Gallery](/showcase/sheets) page.`,
  "",
  "| Name | Type | Domain | Components |",
  "|---|---|---|---|",
  ...sheetsConfig.map(
    (s) => `| ${s.name} | ${s.type} | ${s.domain} | ${s.components.join(", ")} |`
  ),
  "",
);

for (const s of sheetsConfig) {
  lines.push(
    `#### ${s.name}`,
    "",
    s.description,
    "",
    `- **Slug:** \`${s.slug}\``,
    `- **Type:** ${s.type}`,
    `- **Domain:** ${s.domain}`,
    `- **Components:** ${s.components.join(", ")}`,
    "",
  );
}

lines.push("---", "");

// ── Drawers ───────────────────────────────────────────────────────────────────

lines.push(
  "### Drawers",
  "",
  `${drawersConfig.length} bottom-drawer patterns for mobile-first Action, Panel, Preview, and Input flows. All rendered on the [Drawer Gallery](/showcase/drawers) page.`,
  "",
  "| Name | Type | Domain | Components |",
  "|---|---|---|---|",
  ...drawersConfig.map(
    (d) => `| ${d.name} | ${d.type} | ${d.domain} | ${d.components.join(", ")} |`
  ),
  "",
);

for (const d of drawersConfig) {
  lines.push(
    `#### ${d.name}`,
    "",
    d.description,
    "",
    `- **Slug:** \`${d.slug}\``,
    `- **Type:** ${d.type}`,
    `- **Domain:** ${d.domain}`,
    `- **Components:** ${d.components.join(", ")}`,
    "",
  );
}

lines.push("---", "");

// ── Dashboards ────────────────────────────────────────────────────────────────

lines.push(
  "### Dashboards",
  "",
  `${dashboardsConfig.length} full analytics dashboards, each with KPI tiles, multiple chart types, and a data table. Each has its own showcase page.`,
  "",
  "| Name | Domain | Chart types | KPIs |",
  "|---|---|---|---|",
  ...dashboardsConfig.map(
    (d) => `| [${d.name}](/showcase/dashboards/${d.slug}) | ${d.domain} | ${d.chartTypes.join(", ")} | ${d.kpis.join(", ")} |`
  ),
  "",
);

for (const d of dashboardsConfig) {
  lines.push(
    `#### ${d.name}`,
    "",
    d.description,
    "",
    `- **Slug:** \`${d.slug}\``,
    `- **Showcase:** [/showcase/dashboards/${d.slug}](/showcase/dashboards/${d.slug})`,
    `- **Domain:** ${d.domain}`,
    `- **KPIs:** ${d.kpis.join(", ")}`,
    `- **Chart types:** ${d.chartTypes.join(", ")}`,
    "",
    layoutGrid(d.layout),
    "---",
    "",
  );
}

// ── Reports ───────────────────────────────────────────────────────────────────

lines.push(
  "### Reports",
  "",
  `${reportsConfig.length} document-style reports covering finance, HR, clinical, operational, performance, and compliance domains. Each has its own showcase page.`,
  "",
  "| Name | Domain | Type | Complexity | Layout |",
  "|---|---|---|---|---|",
  ...reportsConfig.map(
    (r) => `| [${r.name}](/showcase/reports/${r.slug}) | ${r.domain} | ${r.reportType} | ${r.complexity} | ${r.layout} |`
  ),
  "",
);

for (const r of reportsConfig) {
  lines.push(
    `#### ${r.name}`,
    "",
    r.description,
    "",
    `- **Slug:** \`${r.slug}\``,
    `- **Showcase:** [/showcase/reports/${r.slug}](/showcase/reports/${r.slug})`,
    `- **Domain:** ${r.domain}`,
    `- **Report type:** ${r.reportType}`,
    `- **Complexity:** ${r.complexity}`,
    `- **Layout:** ${r.layout}`,
    `- **Key metrics:** ${r.keyMetrics.join(", ")}`,
    `- **Elements:** ${r.elements.join(", ")}`,
    "",
    "---",
    "",
  );
}

// ── Validation ────────────────────────────────────────────────────────────────
// Detect drift between navConfig and registry.
// Warnings are appended to the doc AND printed to stdout.

const warnings: string[] = [];

// 1. navConfig items in component categories that have no registry entry
for (const category of navConfig) {
  if (SAMPLE_CATEGORIES.has(category.title)) continue;
  for (const item of category.items) {
    if (!item.slug || KNOWN_NON_REGISTRY_SLUGS.has(item.slug)) continue;
    if (!resolveRegistry(item.slug)) {
      warnings.push(
        `navConfig item "${item.name}" (slug: \`${item.slug}\`, category: ${category.title}) has no matching registry entry.`
      );
    }
  }
}

// 2. Registry entries that don't appear in any navConfig item
for (const regSlug of Object.keys(registry)) {
  const found = navConfig.some((cat) =>
    cat.items.some(
      (item) => item.slug === regSlug || item.slug.split("/").pop() === regSlug
    )
  );
  if (!found) {
    warnings.push(
      `Registry entry \`${regSlug}\` ("${registry[regSlug].name}") has no navConfig item — it won't appear in the component sections.`
    );
  }
}

if (warnings.length) {
  lines.push(
    "## Validation Warnings",
    "",
    "> The following mismatches were detected. Fix them to keep the reference accurate.",
    "",
    ...warnings.map((w) => `- ${w}`),
    "",
  );
}

// ── Write file ────────────────────────────────────────────────────────────────

const outPath = join(process.cwd(), "docs", "ui-reference.md");
writeFileSync(outPath, lines.join("\n"), "utf8");

const summary = [
  `${componentCount} components`,
  `${formsConfig.length} forms`,
  `${dialogsConfig.length} dialogs`,
  `${sheetsConfig.length} sheets`,
  `${drawersConfig.length} drawers`,
  `${dashboardsConfig.length} dashboards`,
].join(", ");

console.log(`✓ Generated docs/ui-reference.md · ascendra-ui v${uiVersion} (${summary})`);

if (warnings.length) {
  console.warn(`\n⚠  ${warnings.length} validation warning${warnings.length > 1 ? "s" : ""}:`);
  for (const w of warnings) console.warn(`   - ${w}`);
}
