---
description: Scaffold a report page with ReportDocument structure and optional PDF export
---

Read `docs/showcase-reference.md` → Template 4 (Report Page) and Reports section before generating.

Ask:
1. Report name (e.g. "Annual Financial Statement", "Project Status Report")
2. Section headings (list them)
3. PDF export button needed?
4. Print-optimized layout? (adds print: Tailwind classes)

Generate:
- `ReportDocument` as the outer wrapper
- `ReportHeader` + `ReportHeaderContent` for title/metadata
- `ReportContent` wrapping all sections
- `ReportSectionHeader` for each section
- `ReportPdfExportButton` if requested
- Placeholder content in each section
- `"use client"` directive and all imports from `@/ascendra-ui`
