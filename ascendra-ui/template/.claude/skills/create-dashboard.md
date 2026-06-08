---
description: Scaffold a dashboard page with KPI stats, charts, and optional table
---

Read `docs/showcase-reference.md` → Template 3 (Dashboard Page), Dashboards section, and Charts section before generating.

Ask:
1. Dashboard name and domain (e.g. "Sales Analytics", "HR Overview")
2. KPI metrics: name, value type (number | currency | percentage), trend indicator needed?
3. Charts: type (area | bar | line | pie | donut | radar) and what each series represents
4. DataTable at the bottom? If yes, what entity and columns?

Generate:
- `MainSection` + `PageHeader` from `@/ascendra-ui`
- `StatGroup` + `Stat` components for each KPI
- Each chart: `ChartContainer` from `@/ascendra-ui/shadcn` with `chartConfig` using `chart-1` through `chart-8` color tokens; recharts primitives (`AreaChart`, `BarChart`, etc.) from `recharts`; `ChartTooltip` + `ChartTooltipContent` from `@/ascendra-ui/shadcn`
- Sample data arrays with realistic shape
- DataTable section if requested (ask entity + columns, apply DataTable logic)

Critical import rule: `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `type ChartConfig` come from `@/ascendra-ui/shadcn` — not `@/ascendra-ui`.
