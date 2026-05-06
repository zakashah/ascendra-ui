/**
 * Generates docs/components-reference.md from lib/registry.ts.
 *
 * Run: npm run docs:generate
 *
 * Re-run any time a registry entry is added, removed, or updated.
 */

import { writeFileSync } from "fs";
import { join } from "path";
import { registry } from "../lib/registry";
import { navConfig } from "../lib/nav-config";
import type { PropDef } from "../lib/types";

// ── Build slug → category map ─────────────────────────────────────────────────

const categoryBySlug = new Map<string, string>();
for (const category of navConfig) {
  for (const item of category.items) {
    if (item.slug) categoryBySlug.set(item.slug, category.title);
  }
}

// ── Group registry entries by category for the overview table ─────────────────

const grouped = new Map<string, string[]>();
for (const [slug, meta] of Object.entries(registry)) {
  const cat = categoryBySlug.get(slug) ?? "Uncategorised";
  if (!grouped.has(cat)) grouped.set(cat, []);
  grouped.get(cat)!.push(meta.name);
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function escapeCell(s: string) {
  return s.replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function propsTable(props: PropDef[]): string {
  if (!props.length) return "_No props — accepts standard HTML attributes._\n";

  const rows = props
    .map((p) => {
      const cells = [
        `\`${p.name}\``,
        `\`${escapeCell(p.type)}\``,
        p.default ? `\`${escapeCell(p.default)}\`` : "—",
        escapeCell(p.description ?? ""),
      ];
      return `| ${cells.join(" | ")} |`;
    })
    .join("\n");

  return [
    "| Prop | Type | Default | Description |",
    "|---|---|---|---|",
    rows,
  ].join("\n") + "\n";
}

// ── Build markdown ────────────────────────────────────────────────────────────

const today = new Date().toISOString().slice(0, 10);
const componentCount = Object.keys(registry).length;

const lines: string[] = [
  "# Ascendra UI — Component Reference",
  "",
  `> Auto-generated on ${today} from \`lib/registry.ts\`.  `,
  "> Run \`npm run docs:generate\` after any registry change to keep this file current.",
  "",
  "---",
  "",
  "## Overview",
  "",
  `**Total components:** ${componentCount}`,
  "",
  "| Category | Components |",
  "|---|---|",
  ...[...grouped.entries()].map(
    ([cat, names]) => `| ${cat} | ${names.join(", ")} |`
  ),
  "",
  "---",
  "",
  "## Components",
  "",
];

// Emit components grouped by category, in navConfig order
for (const category of navConfig) {
  const categoryEntries = category.items
    .map((item) => registry[item.slug])
    .filter(Boolean);

  if (!categoryEntries.length) continue;

  lines.push(`### ${category.title}`, "");

  for (const meta of categoryEntries) {
    const importStatement = `import { ${meta.importNames.join(", ")} } from "${meta.importPath}"`;

    lines.push(
      `#### ${meta.name}`,
      "",
      `${meta.description}`,
      "",
      `- **Slug:** \`${meta.slug}\``,
      `- **Import:** \`${importStatement}\``,
      `- **Showcase:** \`/showcase/${meta.slug}\``,
      "",
      "**Props**",
      "",
      propsTable(meta.props ?? []),
      "---",
      ""
    );
  }
}

// ── Write file ────────────────────────────────────────────────────────────────

const outPath = join(process.cwd(), "docs", "components-reference.md");
writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`✓ Generated docs/components-reference.md (${componentCount} components)`);
