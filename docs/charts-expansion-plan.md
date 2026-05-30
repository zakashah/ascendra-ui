# Charts Expansion Plan

> Created: 2026-05-31  
> Purpose: Complete reference for the charts showcase expansion — gap analysis, missing types, charts gallery page, and implementation order. Paste this document into a new session to resume.

---

## 1. Current State (as of 2026-05-31)

8 chart type pages exist in `app/showcase/charts/`:

| Slug | Name | Variants |
|------|------|----------|
| `line` | Line Charts | 5 (Basic, Multi-Line, Gradient Fill, Step Line, Reference Band) |
| `area` | Area Charts | 5 (Stacked, 100%, Target, Single Area, Diverging) |
| `bar` | Bar Charts | 6 (Grouped, Stacked, Horizontal, Labels, Waterfall, Diverging) |
| `pie` | Pie & Donut | 5 (Donut+Stat, Donut+Legend, Active Slice, Simple Pie, Semi-circle) |
| `radial` | Radial & Gauge | 4 (Progress Ring, Multi-KPI, Gauge, Comparison Ring) |
| `radar` | Radar Charts | 3 (Basic, Comparative, Filled) |
| `scatter` | Scatter & Bubble | 3 (Scatter Plot, Bubble, Multi-Series) |
| `composed` | Composed Charts | 4 (Bar+Line, Dual Axis, Area+Scatter, Triple Metric) |

**Total: 35 variants across 8 chart types. No gallery index page exists.**

Nav entries are in `lib/nav-config.ts` under the "Charts" category.

---

## 2. User's Taxonomy vs Current Coverage

| Category | Chart Type | Status |
|----------|------------|--------|
| **Comparison** | Bar / Column | ✅ `bar` page |
| **Comparison** | Radar | ✅ `radar` page |
| **Temporal / Trend** | Line | ✅ `line` page |
| **Temporal / Trend** | Area | ✅ `area` page |
| **Temporal / Trend** | Candlestick | ❌ Missing |
| **Composition** | Pie | ✅ `pie` page |
| **Composition** | Donut | ✅ `pie` page |
| **Composition** | Treemap | ❌ Missing |
| **Distribution** | Histogram | ❌ Missing |
| **Distribution** | Box Plot | ❌ Missing |
| **Relational** | Scatter Plot | ✅ `scatter` page |
| **Relational** | Bubble Chart | ✅ `scatter` page |
| **Flow & Process** | Sankey Diagram | ❌ Missing (no recharts support) |
| **Flow & Process** | Gantt Chart | ❌ Missing |
| **Geospatial** | Choropleth / Bubble Map | ❌ Missing (different library) |

---

## 3. Missing Charts — Feasibility & Recommendation

### ✅ Implement (recharts-native or easy to build)

#### Treemap — `app/showcase/charts/treemap/page.tsx`
- Recharts has a native `Treemap` component
- High value: common in product/sales dashboards for hierarchical data
- Variants to build (3):
  1. **Basic Treemap** (Badge: Basic) — single-level, colour by value
  2. **Nested Treemap** (Badge: Nested) — two-level hierarchy (parent → children)
  3. **Treemap with Labels** (Badge: Labels) — value labels on each cell, custom `content` renderer

#### Histogram — `app/showcase/charts/histogram/page.tsx`
- Built with standard `BarChart` + pre-binned data (no special recharts primitive needed)
- High value: analytics, data science, QA dashboards
- Variants to build (3):
  1. **Basic Histogram** (Badge: Basic) — equal-width bins, frequency count
  2. **Density Histogram** (Badge: Density) — normalised to % of total
  3. **Overlapping Histograms** (Badge: Overlay) — two distributions on same axis, using semi-transparent fills

#### Candlestick — add to `app/showcase/charts/line/page.tsx` OR new `app/showcase/charts/candlestick/page.tsx`
- Approximated with `ComposedChart` + custom `Bar` (high-low range via stacked transparent bar + value bar) + `Line` (open/close dots)
- Alternatively: use recharts `ComposedChart` with a custom SVG shape via `customizedBar`
- Moderate complexity — recommend a **new dedicated page** for cleanliness
- Variants to build (2):
  1. **OHLC Candlestick** (Badge: OHLC) — open/high/low/close, green/red colouring
  2. **Candlestick + Volume** (Badge: +Volume) — volume bars below the candles (dual chart)

### ⚠️ Deprioritise (complex or requires external library)

#### Box Plot
- No recharts native support
- Requires custom SVG rendering of quartile boxes, whiskers, and outlier dots
- Feasible but significant effort — defer unless explicitly requested

#### Gantt Chart
- Can be approximated with horizontal stacked bar chart using transparent base bars + coloured duration bars
- Moderate effort, niche use case
- Defer until needed

#### Sankey Diagram
- No recharts support
- Would need `d3-sankey` or a dedicated library (`react-flow`, `nivo`)
- Out of scope for this recharts-based showcase

#### Geospatial (Choropleth, Bubble Map)
- Requires a mapping library (Leaflet, Mapbox, Google Maps)
- Completely different technology stack
- Out of scope

---

## 4. Charts Gallery Page

### Goal
Mirror the forms gallery at `app/showcase/forms/page.tsx`. The charts gallery lives at `app/showcase/charts/page.tsx` (currently missing).

### Data shape — `lib/charts-config.ts`

```ts
export type ChartMeta = {
  slug: string;           // matches app/showcase/charts/{slug}/
  name: string;           // display name
  category: string;       // user-facing taxonomy group
  description: string;    // 1–2 sentence explanation of when to use this chart type
  variants: number;       // count of variants on the page
  primitives: string[];   // recharts components used (shown as tags)
  badge?: string;         // optional accent label (e.g. "Finance", "New")
};

export const chartsConfig: ChartMeta[] = [
  {
    slug: 'line',
    name: 'Line Charts',
    category: 'Temporal / Trend',
    description: 'Connects data points over time to show progression, momentum, and trend direction. Add reference bands to highlight target zones.',
    variants: 5,
    primitives: ['LineChart', 'Line', 'AreaChart', 'ReferenceLine', 'ReferenceArea'],
  },
  {
    slug: 'area',
    name: 'Area Charts',
    category: 'Temporal / Trend',
    description: 'Line charts with filled areas that emphasise volume and composition. Stacking shows individual contribution and total simultaneously.',
    variants: 5,
    primitives: ['AreaChart', 'Area'],
  },
  {
    slug: 'bar',
    name: 'Bar Charts',
    category: 'Comparison',
    description: 'Categorical comparisons at a glance. Grouped, stacked, horizontal, waterfall, and diverging variants cover most business needs.',
    variants: 6,
    primitives: ['BarChart', 'Bar', 'LabelList', 'Cell'],
  },
  {
    slug: 'pie',
    name: 'Pie & Donut',
    category: 'Composition',
    description: 'Part-to-whole relationships. Donuts surface a key stat in the centre hole; semi-circle variants save vertical space in dashboard cards.',
    variants: 5,
    primitives: ['PieChart', 'Pie', 'Cell', 'Sector'],
  },
  {
    slug: 'radial',
    name: 'Radial & Gauge',
    category: 'Composition',
    description: 'Progress rings and speedometer gauges communicate KPI attainment at a glance — ideal for compact dashboard widgets.',
    variants: 4,
    primitives: ['RadialBarChart', 'RadialBar', 'PolarAngleAxis'],
  },
  {
    slug: 'radar',
    name: 'Radar Charts',
    category: 'Comparison',
    description: 'Spider charts for multivariate profiles — skill assessments, team comparisons, and period-over-period scoring across many dimensions.',
    variants: 3,
    primitives: ['RadarChart', 'Radar', 'PolarGrid', 'PolarAngleAxis'],
  },
  {
    slug: 'scatter',
    name: 'Scatter & Bubble',
    category: 'Relational',
    description: 'Reveal correlations between two continuous variables. Bubble charts add a third dimension via dot size.',
    variants: 3,
    primitives: ['ScatterChart', 'Scatter', 'ZAxis'],
  },
  {
    slug: 'composed',
    name: 'Composed Charts',
    category: 'Multi-type',
    description: 'Layer bars, lines, areas, and scatter on one canvas when metrics share a time axis but have different units or scales.',
    variants: 4,
    primitives: ['ComposedChart', 'Bar', 'Line', 'Area', 'Scatter'],
  },
  // Add after implementation:
  // { slug: 'treemap', name: 'Treemap', category: 'Composition', ... }
  // { slug: 'histogram', name: 'Histogram', category: 'Distribution', ... }
  // { slug: 'candlestick', name: 'Candlestick', category: 'Temporal / Trend', badge: 'Finance', ... }
];
```

### Gallery Page Layout — `app/showcase/charts/page.tsx`

Mirrors `app/showcase/forms/page.tsx` with these adaptations:

```
Page structure:
├── Back link → /showcase
├── Hero section
│   ├── Pill badge: "Charts"
│   ├── H1: "Chart Gallery"
│   └── Description: "X chart types · Y variants total · built with recharts + shadcn/ui"
├── Stats strip (border-t / border-b, py-5)
│   ├── Chart Types: chartsConfig.length
│   ├── Total Variants: sum of all .variants
│   ├── Categories: unique count of .category values
│   └── Built with: "recharts"
└── Grid: grid gap-4 sm:grid-cols-2
    └── Card per chart type (Link)
        ├── Header: name (left) + category badge (right)
        ├── Description: 2-line clamp
        ├── Variants count: "5 variants" in muted text
        ├── Primitives: up to 5 tags (like form components), "+N more" if overflow
        └── CTA: "View charts →" on hover (same as forms)
```

Category badge colours (map `category` → colour):
- Comparison → `blue`
- Temporal / Trend → `default` (primary)
- Composition → `green`
- Distribution → `orange`
- Relational → `purple` (or secondary)
- Multi-type → `secondary`

Use `SimpleBadge` from `@/ascendra-ui/components/common-ui/simple-badge` for category badges.

### Nav entry
Add to `lib/nav-config.ts` under "Charts" **at the top** of the items list:
```ts
{ name: 'Chart Gallery', slug: 'charts' },
```

---

## 5. Files to Create / Modify

| File | Action | Notes |
|------|--------|-------|
| `lib/charts-config.ts` | **Create** | ChartMeta type + chartsConfig array (8 entries now, 3 more later) |
| `app/showcase/charts/page.tsx` | **Create** | Gallery page — mirrors forms gallery |
| `lib/nav-config.ts` | **Edit** | Add `{ name: 'Chart Gallery', slug: 'charts' }` as first Charts item |
| `app/showcase/charts/treemap/page.tsx` | **Create** | 3 variants (when implementing) |
| `app/showcase/charts/histogram/page.tsx` | **Create** | 3 variants (when implementing) |
| `app/showcase/charts/candlestick/page.tsx` | **Create** | 2 variants (when implementing) |

---

## 6. Implementation Order

### Phase 1 — Gallery (no new chart pages, just wiring)
1. Create `lib/charts-config.ts` (covers the 8 existing chart types)
2. Create `app/showcase/charts/page.tsx`
3. Add "Chart Gallery" nav entry to `lib/nav-config.ts`

### Phase 2 — New Chart Types
4. Create `app/showcase/charts/treemap/page.tsx` (3 variants)
5. Create `app/showcase/charts/histogram/page.tsx` (3 variants)
6. Create `app/showcase/charts/candlestick/page.tsx` (2 variants)
7. Add 3 new entries to `lib/charts-config.ts`
8. Add 3 new nav entries to `lib/nav-config.ts`

---

## 7. Key Code Patterns to Reuse

All chart pages follow the same layout pattern:
```tsx
// Imports
import { MainSection, MainSectionHeader, MainSectionHeaderTitle,
         MainSectionHeaderSubtitle, MainSectionPanel, MainSectionFooter }
  from "@/ascendra-ui/components/layout/..."
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig }
  from "@/ascendra-ui/shadcn/components/ui/chart"
import { makeTooltipFormatter } from "@/components/charts/make-tooltip-formatter"
import { ChartSeriesLegend } from "@/components/charts/chart-series-legend"
import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge"

// Grid line style (all charts):
<CartesianGrid stroke="var(--border)" strokeOpacity={0.4} vertical={false} />

// Axis style:
<XAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} dy={6} />
<YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} width={42} />

// Colors: var(--chart-1) through var(--chart-7)
```

---

## 8. Verification Steps

After implementing the gallery:
1. `npm run dev` → visit `/showcase/charts` — gallery should render all 8 cards
2. Click each card → confirm it navigates to the correct chart page
3. Check nav sidebar → "Chart Gallery" link appears at top of Charts section
4. Hover card → "View charts →" CTA fades in

After implementing new chart types:
1. Visit `/showcase/charts/treemap` — 3 variants render correctly
2. Visit `/showcase/charts/histogram` — bins are pre-computed, bars render
3. Visit `/showcase/charts/candlestick` — OHLC candles show green/red colouring
4. Gallery page shows updated total count in stats strip
