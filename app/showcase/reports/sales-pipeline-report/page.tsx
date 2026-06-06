"use client";

import {
  BackLink,
  Card,
  CardHeader,
  CardHeaderSubtitle,
  CardHeaderTitle,
  CardPanel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
} from "@/ascendra-ui";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/ascendra-ui/shadcn";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

// ─── KPIs ─────────────────────────────────────────────────────────────────────

const kpis = [
  { label: "Pipeline Value",  value: "$8.4M",  sub: "Active deals"        },
  { label: "Deals Won",       value: "47",     sub: "YTD closed-won"      },
  { label: "Avg. Deal Size",  value: "$128K",  sub: "+14% vs prior year"  },
  { label: "Win Rate",        value: "32.4%",  sub: "+3.1 pp vs prior yr" },
];

// ─── Pipeline funnel ──────────────────────────────────────────────────────────

const stages = [
  { stage: "Prospect",     deals: 214, value: 27.4, pct: 100 },
  { stage: "Qualified",    deals: 118, value: 15.2, pct:  56 },
  { stage: "Proposal",     deals:  72, value:  9.8, pct:  34 },
  { stage: "Negotiation",  deals:  38, value:  5.6, pct:  18 },
  { stage: "Closed Won",   deals:  24, value:  3.1, pct:  11 },
];

// ─── Rep performance ──────────────────────────────────────────────────────────

const reps = [
  { name: "Daniela Reyes",   quota: 1_200, attained: 1_418, deals: 14, avgSize: 101 },
  { name: "Marcus Okafor",   quota: 1_000, attained: 1_102, deals: 11, avgSize: 100 },
  { name: "Sara Lindqvist",  quota: 1_400, attained: 1_376, deals: 13, avgSize: 106 },
  { name: "James Whitmore",  quota:   900, attained:   715, deals:  8, avgSize:  89 },
  { name: "Priya Mehta",     quota: 1_100, attained:   932, deals:  9, avgSize: 104 },
  { name: "Tobias Braun",    quota:   800, attained:   876, deals: 10, avgSize:  88 },
];

// ─── Monthly bookings vs target ───────────────────────────────────────────────

const bookings = [
  { month: "Jan", actual: 520,  target: 580 },
  { month: "Feb", actual: 490,  target: 580 },
  { month: "Mar", actual: 680,  target: 620 },
  { month: "Apr", actual: 610,  target: 640 },
  { month: "May", actual: 720,  target: 660 },
  { month: "Jun", actual: 840,  target: 700 },
  { month: "Jul", actual: 775,  target: 720 },
  { month: "Aug", actual: 690,  target: 740 },
];

const bookingsConfig: ChartConfig = {
  actual: { label: "Actual Bookings", color: "var(--chart-1)" },
  target: { label: "Target",          color: "var(--chart-2)" },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return n >= 1000 ? `$${(n / 1000).toFixed(1)}M` : `$${n}K`;
}

function attainPct(attained: number, quota: number) {
  return Math.round((attained / quota) * 100);
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-5 border-b pb-3">
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

// ─── Pipeline Funnel ─────────────────────────────────────────────────────────

function PipelineFunnel() {
  const max = stages[0].pct;
  return (
    <div className="flex flex-col gap-2">
      {stages.map((s, i) => {
        const dropOff = i > 0 ? stages[i - 1].deals - s.deals : null;
        return (
          <div key={s.stage}>
            {dropOff !== null && (
              <div className="mb-1 flex items-center gap-2 pl-2 text-[0.6875rem] text-muted-foreground/70">
                <span className="h-px w-4 bg-muted-foreground/30" />
                –{dropOff} deals dropped
              </div>
            )}
            <div className="flex items-center gap-3">
              <span className="w-28 shrink-0 text-right text-sm font-medium text-foreground">
                {s.stage}
              </span>
              <div className="relative flex-1">
                <div className="h-9 w-full rounded bg-muted/40" />
                <div
                  className="absolute inset-y-0 left-0 rounded bg-orange-500/80"
                  style={{ width: `${(s.pct / max) * 100}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-3">
                  <span className="text-xs font-semibold text-white drop-shadow">
                    {s.deals} deals
                  </span>
                  <span className="text-xs font-semibold text-white drop-shadow">
                    {fmt(s.value * 1000)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function SalesPipelineReportPage() {
  return (
    <>
      <BackLink href="/showcase/reports">Report Gallery</BackLink>

      <div className="flex flex-col gap-10">

        {/* ── Report Header ────────────────────────────────────────────────── */}
        <div className="overflow-hidden rounded-xl border">
          <div className="h-1 w-full bg-orange-500" />
          <div className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground">
                  Sales Pipeline Report
                </p>
                <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                  Ascendra Sales — YTD Performance
                </h1>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Year-to-date · January – August 2024
                </p>
              </div>
              <span className="inline-flex items-center rounded border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700 dark:border-orange-800/60 dark:bg-orange-950/40 dark:text-orange-400">
                Sales Confidential
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-6 border-t pt-3 text-xs text-muted-foreground">
              <span><span className="font-medium text-foreground">Prepared by:</span> Revenue Operations</span>
              <span><span className="font-medium text-foreground">Report Date:</span> September 2, 2024</span>
              <span><span className="font-medium text-foreground">Period:</span> Jan 1 – Aug 31, 2024</span>
            </div>
          </div>
        </div>

        {/* ── KPIs ─────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-lg border bg-card p-5">
              <p className="text-xs text-muted-foreground">{k.label}</p>
              <p className="mt-1.5 text-3xl font-bold tracking-tight text-foreground">{k.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Pipeline Funnel ──────────────────────────────────────────────── */}
        <div>
          <SectionHeading
            title="Pipeline by Stage"
            subtitle="Active deals count and estimated value descending through conversion stages"
          />
          <PipelineFunnel />
        </div>

        {/* ── Rep Performance ──────────────────────────────────────────────── */}
        <div>
          <SectionHeading
            title="Sales Rep Performance"
            subtitle="Quota attainment YTD — all values in $000s"
          />
          <TableWrapper>
            <Table horizontal vertical>
              <TableHeader>
                <TableHeaderRow>
                  <TableHead>Rep</TableHead>
                  <TableHead className="text-right">Quota</TableHead>
                  <TableHead className="text-right">Attained</TableHead>
                  <TableHead>Attainment</TableHead>
                  <TableHead className="text-right">Deals</TableHead>
                  <TableHead className="text-right">Avg. Size</TableHead>
                </TableHeaderRow>
              </TableHeader>
              <TableBody border={{}} bg={{}}>
                {reps
                  .slice()
                  .sort((a, b) => attainPct(b.attained, b.quota) - attainPct(a.attained, a.quota))
                  .map((r) => {
                    const pct = attainPct(r.attained, r.quota);
                    const over = pct >= 100;
                    return (
                      <TableRow key={r.name}>
                        <TableCell className="font-medium">{r.name}</TableCell>
                        <TableCell className="text-right font-mono tabular-nums text-muted-foreground">
                          ${r.quota.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right font-mono tabular-nums">
                          ${r.attained.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2.5">
                            <div className="h-2 w-28 overflow-hidden rounded-full bg-muted">
                              <div
                                className={`h-full rounded-full transition-all ${over ? "bg-emerald-500" : "bg-orange-400"}`}
                                style={{ width: `${Math.min(pct, 100)}%` }}
                              />
                            </div>
                            <span
                              className={`w-12 text-right text-xs font-semibold tabular-nums ${over ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}
                            >
                              {pct}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right tabular-nums">{r.deals}</TableCell>
                        <TableCell className="text-right font-mono tabular-nums text-muted-foreground">
                          ${r.avgSize}K
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableWrapper>
        </div>

        {/* ── Bookings vs Target ───────────────────────────────────────────── */}
        <Card>
          <CardHeader>
            <CardHeaderTitle>Monthly Bookings vs. Target</CardHeaderTitle>
            <CardHeaderSubtitle>Closed-won bookings per month vs. monthly quota — in $000s</CardHeaderSubtitle>
          </CardHeader>
          <CardPanel>
            <div className="p-6">
              <ChartContainer config={bookingsConfig} className="h-56 w-full">
                <ComposedChart
                  data={bookings}
                  margin={{ top: 4, right: 16, left: 0, bottom: 0 }}
                  barCategoryGap="36%"
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="var(--border)"
                    strokeOpacity={0.6}
                    strokeWidth={0.5}
                  />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11 }}
                    dy={6}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11 }}
                    tickFormatter={(v: number) => `$${v}K`}
                    width={44}
                    domain={[0, 900]}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(v, k) => [
                          `$${Number(v).toLocaleString()}K`,
                          bookingsConfig[k as keyof typeof bookingsConfig]?.label ?? k,
                        ]}
                      />
                    }
                  />
                  <Bar
                    dataKey="actual"
                    fill="var(--chart-1)"
                    fillOpacity={0.85}
                    radius={[3, 3, 0, 0]}
                  />
                  <Line
                    dataKey="target"
                    stroke="var(--chart-2)"
                    strokeWidth={2}
                    dot={{ r: 3, fill: "var(--chart-2)" }}
                    strokeDasharray="4 3"
                    type="monotone"
                  />
                </ComposedChart>
              </ChartContainer>
              <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-3 rounded-[2px]" style={{ background: "var(--chart-1)" }} />
                  Actual Bookings
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-0.5 w-4"
                    style={{ background: "var(--chart-2)", borderTop: "2px dashed var(--chart-2)" }}
                  />
                  Target
                </div>
              </div>
            </div>
          </CardPanel>
        </Card>

        {/* ── Report Footer ─────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-6 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/60">Ascendra Sales — Revenue Operations</span>
          <div className="flex items-center gap-4 text-muted-foreground/60">
            <span>YTD Sales Pipeline Report</span>
            <span>·</span>
            <span>Sales Confidential</span>
            <span>·</span>
            <span>September 2, 2024</span>
          </div>
        </div>

      </div>
    </>
  );
}
