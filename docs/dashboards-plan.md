# Dashboard Gallery — Complete Build Plan

## Status

| Milestone | Status |
|-----------|--------|
| `lib/types.ts` — `DashboardMeta`, `LayoutCell`, `LayoutCellHeight` | ✅ Done |
| `lib/dashboards-config.ts` — all 10 entries with layout | ✅ Done |
| `lib/nav-config.ts` — "Sample Dashboards" section | ✅ Done |
| `app/showcase/dashboards/page.tsx` — gallery | ✅ Done |
| 10 stub pages with coming-soon state | ✅ Done |
| `components/dashboards/dashboard-coming-soon.tsx` | ✅ Done |
| Build actual dashboard pages (10 dashboards) | ⏳ Upcoming |

---

## Repository context

- **Framework**: Next.js App Router, TypeScript, Tailwind CSS v4
- **Chart library**: recharts + shadcn/ui `ChartContainer` / `ChartTooltip`
- **Existing chart types** (slugs): `line`, `area`, `bar`, `pie`, `radial`, `radar`,
  `scatter`, `composed`, `treemap`, `histogram`, `candlestick`
- **Chart CSS variables**: `--chart-1` … `--chart-4`, `--primary`, semantic tokens

### Key shared components

| Import path | Component |
|-------------|-----------|
| `@/ascendra-ui/components/layout/main-section` | `<MainSection>` |
| `@/ascendra-ui/components/layout/main-section-header` | `<MainSectionHeader>` |
| `@/ascendra-ui/components/layout/main-section-header-title` | `<MainSectionHeaderTitle>` |
| `@/ascendra-ui/components/layout/main-section-header-subtitle` | `<MainSectionHeaderSubtitle>` |
| `@/ascendra-ui/components/layout/main-section-panel` | `<MainSectionPanel>` |
| `@/ascendra-ui/components/layout/main-section-footer` | `<MainSectionFooter>` |
| `@/components/charts/chart-series-legend` | `<ChartSeriesLegend>` |
| `@/components/charts/make-tooltip-formatter` | `makeTooltipFormatter(config, fmt)` |
| `@/ascendra-ui/components/common-ui/simple-badge` | `<SimpleBadge variant>` |

---

## Layout type system (`lib/types.ts`)

```ts
export type LayoutCellHeight = 'sm' | 'md' | 'lg' | 'xl';

export type LayoutCell = {
  type: 'chart' | 'table';
  cols: number;            // col-span in 12-col grid — each row's cols must sum to 12
  title: string;           // displayed in MainSectionHeaderTitle
  height?: LayoutCellHeight; // default: cols===12 → 'lg', cols<=4 → 'sm', else 'md'
};

export type DashboardMeta = {
  slug: string;
  name: string;
  domain: string;
  description: string;
  chartTypes: string[];
  kpis: [string, string, string, string];
  layout: LayoutCell[][];  // rows of cells; KPI row is auto-rendered from kpis[]
};
```

Height class mapping: `xl → h-80`, `lg → h-64`, `md → h-52`, `sm → h-40`

---

## Card primitive rules

**Charts and tables** — wrap in `MainSection` + `MainSectionHeader` + `MainSectionPanel`:
```tsx
<MainSection>
  <MainSectionHeader>
    <MainSectionHeaderTitle>Chart Title</MainSectionHeaderTitle>
    <MainSectionHeaderSubtitle>Optional context line</MainSectionHeaderSubtitle>
  </MainSectionHeader>
  <MainSectionPanel>
    <div className="p-5">
      <ChartContainer ...>...</ChartContainer>
    </div>
  </MainSectionPanel>
  <MainSectionFooter>   {/* optional — use for ChartSeriesLegend */}
    <ChartSeriesLegend ... />
  </MainSectionFooter>
</MainSection>
```

**KPI metric cards** — omit header and footer, use only `MainSection` + `MainSectionPanel`:
```tsx
<MainSection>
  <MainSectionPanel>
    <div className="p-5">
      {/* KPI value, label, delta */}
    </div>
  </MainSectionPanel>
</MainSection>
```

---

## Page shell pattern

```tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { /* recharts primitives */ } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig }
  from "@/ascendra-ui/shadcn/components/ui/chart";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { ChartSeriesLegend } from "@/components/charts/chart-series-legend";
import { makeTooltipFormatter } from "@/components/charts/make-tooltip-formatter";
import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";

export default function SomeDashboardPage() {
  const [hiddenXxx, setHiddenXxx] = useState<Record<string, boolean>>({});

  return (
    <div className="mx-auto max-w-7xl px-8 py-12">
      {/* Back link */}
      <Link href="/showcase/dashboards" className="...">
        <LuArrowLeft className="size-3 stroke-2" /> Dashboard Gallery
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 ...">  {/* pill tag */} </div>
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Dashboard Name</h1>
          <span className="...domain badge...">Domain</span>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">Description.</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* KPI row — 4 × col-span-3, MainSection without header/footer */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* 4 KPI cards */}
        </div>

        {/* Chart rows — vary col-span per dashboard layout */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <MainSection>
              <MainSectionHeader>...</MainSectionHeader>
              <MainSectionPanel><div className="p-5 h-64">...</div></MainSectionPanel>
              <MainSectionFooter>...</MainSectionFooter>
            </MainSection>
          </div>
          <div className="col-span-12 md:col-span-4">
            {/* narrower chart */}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Styling rules

| Concern | Value |
|---------|-------|
| Page container | `mx-auto max-w-7xl px-8 py-12` |
| Dashboard title | `text-2xl font-semibold tracking-tight` |
| Chart container | `h-64 w-full` standard · `h-80` hero · `h-52` compact · `h-40` gauge |
| Delta positive | `text-emerald-600 dark:text-emerald-400` |
| Delta negative | `text-red-600 dark:text-red-400` |
| Primary series | `--chart-1` · secondary `--chart-2` · accent `--chart-3`, `--chart-4` |
| Responsive collapse | `col-span-12 md:col-span-N` — full width on mobile, N-col on desktop |

---

## Dashboard layouts (all 10)

All layouts below describe chart/table rows only. The KPI row (4 × `col-span-3`) is always first.

### 1 · SaaS Revenue & Growth (`saas-revenue`)
Domain: SaaS / Startup · Charts: composed, pie, area, radial, bar

| Row | Cells |
|-----|-------|
| 2 | MRR & Growth Rate (8) · Plan Mix (4) |
| 3 | Revenue by Tier (8) · NRR Gauge (4) |
| 4 | Top Accounts — table (7) · Churn by Cohort (5) |

KPIs: MRR · Annual Run Rate · Churn Rate · Net Revenue Retention

---

### 2 · E-commerce Operations (`ecommerce-ops`)
Domain: Retail / E-commerce · Charts: line, bar, treemap, histogram

| Row | Cells |
|-----|-------|
| 2 | Daily Orders — full width (12) |
| 3 | Orders by Category (6) · GMV by Category (6) |
| 4 | Order Value Distribution (5) · Top Products — table (7) |

KPIs: Gross Merchandise Value · Orders Placed · Avg. Order Value · Return Rate

---

### 3 · Marketing Performance (`marketing`)
Domain: Marketing / Growth · Charts: bar, radar, area, pie, composed

| Row | Cells |
|-----|-------|
| 2 | Channel ROAS (5) · Channel Scorecard (7) |
| 3 | Traffic by Source (8) · Spend Allocation (4) |
| 4 | Spend vs Revenue (8) · Status Summary (4) |
| 5 | Active Campaigns — table, full width (12) |

KPIs: Attributed Revenue · Blended ROAS · Customer Acq. Cost · Avg. CTR

---

### 4 · Financial P&L (`financial-pnl`)
Domain: Finance / CFO · Charts: composed, radial, area, bar

| Row | Cells |
|-----|-------|
| 2 | Costs & EBITDA Margin (7) · Budget Attainment (5) |
| 3 | Revenue vs Expenses — full width (12) |
| 4 | Cash Flow Waterfall (6) · P&L Summary — table (6) |

KPIs: Total Revenue · EBITDA · Monthly Burn Rate · Cash Runway

---

### 5 · Trading & Portfolio (`trading-portfolio`)
Domain: Finance / Trading · Charts: candlestick, histogram, scatter, composed

| Row | Cells |
|-----|-------|
| 2 | Price Action — full width, `height:'xl'` (12) |
| 3 | Return Distribution (4) · Risk vs Return (4) · Price + Volume (4) |
| 4 | Positions — table, full width (12) |

KPIs: Portfolio Value · Day P&L · Beta · Sharpe Ratio

---

### 6 · Healthcare Analytics (`healthcare`)
Domain: Healthcare / Clinical · Charts: line, radial, bar, radar, histogram

| Row | Cells |
|-----|-------|
| 2 | Admissions Trend (8) · Bed Occupancy (4) |
| 3 | Conditions by Department (6) · Department Scorecard (6) |
| 4 | Patient Age Distribution (5) · Recent Cases — table (7) |

KPIs: Active Patients · Avg. Wait Time · Bed Occupancy · Recovery Rate

---

### 7 · HR & People Analytics (`hr-people`)
Domain: People Operations · Charts: line, pie, bar, scatter

| Row | Cells |
|-----|-------|
| 2 | Hiring vs Attrition (7) · Seniority Mix (5) |
| 3 | Headcount by Department — full width (12) |
| 4 | Tenure vs Performance (6) · Recent Hires — table (6) |

KPIs: Total Headcount · Attrition Rate · Avg. Time to Hire · eNPS Score

---

### 8 · DevOps Monitoring (`devops`)
Domain: Engineering / SRE · Charts: area, line, bar, composed, radial

| Row | Cells |
|-----|-------|
| 2 | Request Volume — full width (12) |
| 3 | P99 Latency (6) · Errors by Service (6) |
| 4 | Error Rate & Throughput (8) · SLA Uptime (4) |

KPIs: Uptime (30d) · P99 Latency · Error Rate · Deploy Frequency

---

### 9 · Supply Chain (`supply-chain`)
Domain: Operations / Logistics · Charts: composed, bar, treemap, radar

| Row | Cells |
|-----|-------|
| 2 | Inventory Flow (7) · Shipments by Region (5) |
| 3 | Supplier Spend Share — full width (12) |
| 4 | Supplier Scorecard (5) · Open Orders — table (7) |

KPIs: On-time Delivery · Inventory Fill Rate · Inventory Turns · Avg. Lead Time

---

### 10 · Real Estate Portfolio (`real-estate`)
Domain: Property Investment · Charts: treemap, pie, composed, bar, scatter

| Row | Cells |
|-----|-------|
| 2 | Portfolio by Type (7) · Geographic Allocation (5) |
| 3 | Rental Income & Yield (8) · Properties by Value (4) |
| 4 | Price vs Area (5) · Properties — table (7) |

KPIs: Portfolio Value · Avg. Gross Yield · Occupancy Rate · Monthly Income

---

## Per-dashboard chart + data specs

### Dashboard 1 — SaaS Revenue & Growth

**MRR & Growth Rate** (Composed: Bar + Line, dual axis)
- Data: `{ month, mrr, growth }` · 12 months
- MRR bars on left axis ($), growth-rate line on right axis (%)
- MRR range: ~$118k (Jan) → ~$284k (Dec); growth: +4% to +22%, two negative months

**Plan Mix** (Pie / Donut)
- Segments: Starter 18%, Growth 41%, Pro 28%, Enterprise 13%

**Revenue by Tier** (Area stacked)
- Data: `{ month, starter, growth, pro, enterprise }` · 12 months

**NRR Gauge** (Radial gauge)
- Single arc: 114% of 100% target · green fill

**Churn by Cohort** (Bar grouped horizontal)
- Cohort ages: 0–3mo, 4–12mo, 12mo+ · monthly

**Top Accounts table**
- Columns: Account, Plan, MRR, MoM Δ, Health (pill)

---

### Dashboard 2 — E-commerce Operations

**Daily Orders** (Line, two series)
- Data: `{ week, orders, returns }` · 52 weeks (weekly aggregate)

**Orders by Category** (Bar grouped)
- Top 6 categories · this month vs prior month

**GMV by Category** (Treemap)
- 8 categories · `--chart-1..4` rotating

**Order Value Distribution** (Histogram)
- ~12 bins: $0–25, $25–50, …, $200+

**Top Products table**
- Columns: Product, Category, Units Sold, GMV, Return Rate, Trend (pill)

---

### Dashboard 3 — Marketing Performance

**Channel ROAS** (Bar horizontal)
- Channels: Paid Search, Paid Social, Display, Email, Affiliate, Organic
- Data: `{ channel, roas, target }` with target reference line

**Channel Scorecard** (Radar, two series)
- Dimensions: Volume, Cost Efficiency, Conv. Rate, Brand Fit, Scalability, Attribution
- Actual vs benchmark

**Traffic by Source** (Area stacked, normalized %)
- Sources: Organic, Paid, Email, Direct, Referral · monthly

**Spend Allocation** (Pie donut) · 6 segments

**Spend vs Revenue** (Composed: Bar + Line, dual axis)
- Monthly ad spend bars + attributed revenue line

**Active Campaigns table**
- Columns: Campaign, Channel, Spend, Revenue, ROAS, CTR, Status (pill)

---

### Dashboard 4 — Financial P&L

**Costs & EBITDA Margin** (Composed: Stacked Bar + Line, dual axis)
- Stacked bars: Infra + Payroll + Marketing · EBITDA margin % line on right

**Budget Attainment** (Radial gauge)
- Actual $8.64M vs target $8.0M = 108% · green fill

**Revenue vs Expenses** (Area two-series)
- Revenue vs Total Expenses · gap = EBITDA visually

**Cash Flow Waterfall** (Bar waterfall)
- Net monthly cash: positive bars `--chart-2`, negative `--destructive`, balance line overlay

**P&L Summary table**
- Columns: Line Item, Q1, Q2, Q3, Q4, Full Year, YoY Δ
- Rows: Revenue, Gross Profit, EBITDA, Net Income, Headcount

---

### Dashboard 5 — Trading & Portfolio

**Price Action** (Candlestick, h-80)
- 60 trading days OHLC · `{ date, open, high, low, close, volume }`
- 20-day MA line overlay on secondary axis

**Return Distribution** (Histogram)
- ~16 bins −3% → +3% · normal curve overlay as Line

**Risk vs Return** (Scatter bubble)
- X = volatility (annualised), Y = return YTD, Z = position size · 12 holdings

**Price + Volume** (Composed)
- Simplified 20-day candles + volume bar pane

**Positions table**
- Columns: Ticker, Name, Shares, Avg Cost, Current Price, P&L $, P&L %, Weight, Beta

---

### Dashboard 6 — Healthcare Analytics

**Admissions Trend** (Line multi-series, 3 lines)
- Admissions, Discharges, Readmissions · 12 months · capacity reference band

**Bed Occupancy** (Radial gauge)
- 78.4% vs 85% target · amber fill

**Conditions by Department** (Bar grouped)
- Top 6 conditions × 6 departments · this month vs 3-month avg

**Department Scorecard** (Radar two series)
- Dimensions: Patient Satisfaction, Wait Time, Outcome Rate, Readmission Rate, Capacity Utilisation, Staff:Patient Ratio
- Actual vs national benchmark

**Patient Age Distribution** (Histogram)
- 9 bins: 0–10, 11–20, …, 80+

**Recent Cases table**
- Columns: Case ID, Department, Admission Date, Condition, Status (pill), LOS (days)

---

### Dashboard 7 — HR & People Analytics

**Hiring vs Attrition** (Composed: Bar + Line)
- Monthly hires bars + separations bars + net headcount line

**Seniority Mix** (Pie donut)
- IC-1 14%, IC-2 28%, IC-3 22%, Senior 18%, Staff+ 10%, Management 8%

**Headcount by Department** (Bar horizontal, sorted)
- Top 10 departments · delta % badge per row

**Tenure vs Performance** (Scatter)
- X = tenure (0–8 yrs), Y = perf score (1–5), dot size = comp band · ~80 points

**Recent Hires table**
- Columns: Name (initials), Role, Department, Level, Start Date, Recruiter

---

### Dashboard 8 — DevOps Monitoring

**Request Volume** (Area stacked)
- 4-hour buckets · 30 days = ~180 points · stacked: API, Auth, Storage, Worker

**P99 Latency** (Line multi-series)
- 4 services · 30 days · 200ms SLA reference line

**Errors by Service** (Bar)
- 8 services this week · above-threshold bars red via `Cell`

**Error Rate & Throughput** (Composed: Bar + Line, dual axis)
- Daily deploy count bars + error rate % line

**SLA Uptime** (Radial gauge)
- 99.94% vs 99.9% SLA target · green fill

**Recent Incidents table**
- Columns: Incident ID, Service, Severity (pill), Started, Duration, Status (pill), Responder

---

### Dashboard 9 — Supply Chain

**Inventory Flow** (Composed: Grouped Bar + Area, dual axis)
- Grouped bars: received vs dispatched · running inventory balance area on right axis · 12 months

**Shipments by Region** (Bar grouped)
- Regions: North, South, East, West, International · this month vs prior month

**Supplier Spend Share** (Treemap)
- 12 suppliers · color = spend tier (`--chart-1..4`)

**Supplier Scorecard** (Radar)
- Top 5 suppliers across: Price, Quality, Lead Time, Reliability, Flexibility, Communication

**Open Orders table**
- Columns: PO Number, Supplier, Items, Value, Order Date, Expected Date, Status (pill)

---

### Dashboard 10 — Real Estate Portfolio

**Portfolio by Type** (Treemap)
- Residential (apartment, house), Commercial (office, retail), Mixed-use · 16 properties

**Geographic Allocation** (Pie donut)
- City Centre 38%, Suburban 31%, Commuter Belt 21%, Regional 10%

**Rental Income & Yield** (Composed: Bar + Line, dual axis)
- Monthly rental income bars + gross yield % line on right axis · 12 months

**Properties by Value** (Bar horizontal, sorted descending)
- Top 10 properties · color by type via `Cell`

**Price vs Area** (Scatter bubble)
- X = floor area (sqft), Y = price per sqft, Z = annual yield · 16 properties · segments by type

**Properties table**
- Columns: Property, Type, Location, Value, Rental/mo, Yield, Occupancy, Status (pill)

---

## Quality checklist (apply to every dashboard)

- [ ] Data tells a coherent story (realistic trends, seasonality, variance)
- [ ] All charts wrapped in `MainSection` + `MainSectionHeader` + `MainSectionPanel`
- [ ] All KPI cards use `MainSection` + `MainSectionPanel` only (no header/footer)
- [ ] `ChartSeriesLegend` toggle wired up for every multi-series chart (`hide` prop)
- [ ] Tooltip formatters produce human-readable values ($, %, k, ×)
- [ ] KPI deltas are mathematically consistent with chart data
- [ ] Status pills used in tables (never raw colored text)
- [ ] Responsive: `col-span-12 md:col-span-N` on every grid cell
- [ ] Dark mode: only CSS vars (`--chart-N`, `--border`, etc.), no hardcoded hex
- [ ] Page container: `mx-auto max-w-7xl px-8 py-12`
- [ ] Dashboard title: `text-2xl font-semibold tracking-tight`
