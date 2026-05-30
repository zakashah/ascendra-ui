"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { ComposedChart, Bar, Line, Area, XAxis, YAxis, CartesianGrid, Scatter, ZAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/ascendra-ui/shadcn/components/ui/chart";
import { ChartCard } from "@/components/charts/chart-card";
import { ChartSeriesLegend } from "@/components/charts/chart-series-legend";

// ─── Data ─────────────────────────────────────────────────────────────────────

const revenueGrowthData = [
  { month: "Jan", revenue: 42100, growthRate: 4.2 },
  { month: "Feb", revenue: 51800, growthRate: 6.8 },
  { month: "Mar", revenue: 48600, growthRate: -1.2 },
  { month: "Apr", revenue: 62400, growthRate: 8.4 },
  { month: "May", revenue: 71200, growthRate: 9.1 },
  { month: "Jun", revenue: 68900, growthRate: -1.8 },
  { month: "Jul", revenue: 79400, growthRate: 7.3 },
  { month: "Aug", revenue: 91100, growthRate: 10.2 },
  { month: "Sep", revenue: 85700, growthRate: -3.1 },
  { month: "Oct", revenue: 98400, growthRate: 8.9 },
  { month: "Nov", revenue: 94200, growthRate: -2.4 },
  { month: "Dec", revenue: 112600, growthRate: 12.1 },
];

const dualAxisData = [
  { month: "Jan", orders: 1840, avgOrderValue: 228 },
  { month: "Feb", orders: 2210, avgOrderValue: 234 },
  { month: "Mar", orders: 1980, avgOrderValue: 245 },
  { month: "Apr", orders: 2650, avgOrderValue: 236 },
  { month: "May", orders: 3120, avgOrderValue: 228 },
  { month: "Jun", orders: 2890, avgOrderValue: 238 },
  { month: "Jul", orders: 3410, avgOrderValue: 233 },
  { month: "Aug", orders: 3860, avgOrderValue: 236 },
  { month: "Sep", orders: 3520, avgOrderValue: 243 },
  { month: "Oct", orders: 4210, avgOrderValue: 234 },
  { month: "Nov", orders: 3980, avgOrderValue: 237 },
  { month: "Dec", orders: 4630, avgOrderValue: 243 },
];

const areaScatterData = [
  { month: "Jan", baseline: 18000, outlier: null },
  { month: "Feb", baseline: 22000, outlier: 28000 },
  { month: "Mar", baseline: 21000, outlier: null },
  { month: "Apr", baseline: 26000, outlier: null },
  { month: "May", baseline: 31000, outlier: 38000 },
  { month: "Jun", baseline: 29000, outlier: null },
  { month: "Jul", baseline: 34000, outlier: null },
  { month: "Aug", baseline: 39000, outlier: 47000 },
  { month: "Sep", baseline: 35000, outlier: null },
  { month: "Oct", baseline: 42000, outlier: null },
  { month: "Nov", baseline: 40000, outlier: 51000 },
  { month: "Dec", baseline: 46000, outlier: null },
];

// ─── Chart configs ─────────────────────────────────────────────────────────────

const revenueGrowthConfig: ChartConfig = {
  revenue: { label: "Revenue ($)", color: "var(--chart-1)" },
  growthRate: { label: "Growth Rate (%)", color: "var(--chart-3)" },
};

const dualAxisConfig: ChartConfig = {
  orders: { label: "Orders", color: "var(--chart-1)" },
  avgOrderValue: { label: "Avg. Order Value ($)", color: "var(--chart-4)" },
};

const areaScatterConfig: ChartConfig = {
  baseline: { label: "Baseline Revenue", color: "var(--chart-1)" },
  outlier: { label: "Outlier Event", color: "var(--chart-4)" },
};

function fmtDollar(v: number) {
  return `$${(v / 1000).toFixed(0)}k`;
}

function fmtPct(v: number) {
  return `${v > 0 ? "+" : ""}${v.toFixed(1)}%`;
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ComposedChartsPage() {
  const [hiddenRevGrowth, setHiddenRevGrowth] = useState<Record<string, boolean>>({});
  const [hiddenDual, setHiddenDual] = useState<Record<string, boolean>>({});
  const [hiddenAreaScatter, setHiddenAreaScatter] = useState<Record<string, boolean>>({});

  return (
    <div className="mx-auto max-w-5xl px-8 py-12">
      <Link
        href="/showcase"
        className="text-muted-foreground hover:text-foreground mb-8 flex w-fit items-center gap-1.5 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      >
        <LuArrowLeft className="size-3 stroke-2" />
        Component Showcase
      </Link>

      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Charts
        </div>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Composed Charts</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Composed charts layer multiple mark types — bars, lines, areas, and scatter — on a single canvas. Use them when two related metrics have different units or scales.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* 1 — Bar + Line */}
        <ChartCard
          title="Bar + Line"
          description="Monthly revenue bars overlaid with a growth-rate line. The bar shows absolute performance; the line shows momentum."
          badge="Bar + Line"
          badgeVariant="default"
        >
          <ChartContainer config={revenueGrowthConfig} className="h-72 w-full">
            <ComposedChart data={revenueGrowthData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} dy={6} />
              <YAxis yAxisId="left" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} tickFormatter={fmtDollar} width={44} />
              <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} tickFormatter={fmtPct} width={44} />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name) =>
                      name === "revenue" ? fmtDollar(Number(value)) : fmtPct(Number(value))
                    }
                  />
                }
              />
              <Bar yAxisId="left" dataKey="revenue" fill="var(--chart-1)" fillOpacity={0.85} radius={[3, 3, 0, 0]} hide={hiddenRevGrowth["revenue"]} />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="growthRate"
                stroke="var(--chart-3)"
                strokeWidth={2}
                dot={{ r: 3, fill: "var(--chart-3)" }}
                activeDot={{ r: 5 }}
                hide={hiddenRevGrowth["growthRate"]}
              />
            </ComposedChart>
          </ChartContainer>
          <ChartSeriesLegend config={revenueGrowthConfig} hidden={hiddenRevGrowth} onToggle={(k) => setHiddenRevGrowth((p) => ({ ...p, [k]: !p[k] }))} />
        </ChartCard>

        {/* 2 — Dual Y-Axis */}
        <ChartCard
          title="Dual Y-Axis"
          description="Order volume (bars, left axis) against average order value (line, right axis). Two scales that can't share an axis — each reads correctly without distortion."
          badge="Dual Axis"
          badgeVariant="blue"
        >
          <ChartContainer config={dualAxisConfig} className="h-72 w-full">
            <ComposedChart data={dualAxisData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} dy={6} />
              <YAxis
                yAxisId="left"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11 }}
                tickFormatter={(v: number) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : String(v)}
                width={42}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11 }}
                tickFormatter={(v: number) => `$${v}`}
                width={44}
                domain={[200, 260]}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name) =>
                      name === "orders" ? Number(value).toLocaleString() : `$${value}`
                    }
                  />
                }
              />
              <Bar yAxisId="left" dataKey="orders" fill="var(--chart-1)" fillOpacity={0.85} radius={[3, 3, 0, 0]} hide={hiddenDual["orders"]} />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="avgOrderValue"
                stroke="var(--chart-4)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
                hide={hiddenDual["avgOrderValue"]}
              />
            </ComposedChart>
          </ChartContainer>
          <ChartSeriesLegend config={dualAxisConfig} hidden={hiddenDual} onToggle={(k) => setHiddenDual((p) => ({ ...p, [k]: !p[k] }))} />
        </ChartCard>

        {/* 3 — Area + Scatter */}
        <ChartCard
          title="Area + Scatter"
          description="Baseline revenue trend as a filled area with high-impact outlier events plotted as scatter points — surface anomalies without losing the trend."
          badge="Area + Scatter"
          badgeVariant="orange"
        >
          <ChartContainer config={areaScatterConfig} className="h-72 w-full">
            <ComposedChart data={areaScatterData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="grad-baseline" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} dy={6} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} tickFormatter={fmtDollar} width={42} />
              <ZAxis range={[60, 60]} />
              <ChartTooltip content={<ChartTooltipContent formatter={(v) => fmtDollar(Number(v))} />} />
              <Area
                type="monotone"
                dataKey="baseline"
                stroke="var(--chart-1)"
                fill="url(#grad-baseline)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
                hide={hiddenAreaScatter["baseline"]}
              />
              <Scatter dataKey="outlier" fill="var(--chart-4)" hide={hiddenAreaScatter["outlier"]} />
            </ComposedChart>
          </ChartContainer>
          <ChartSeriesLegend config={areaScatterConfig} hidden={hiddenAreaScatter} onToggle={(k) => setHiddenAreaScatter((p) => ({ ...p, [k]: !p[k] }))} />
        </ChartCard>
      </div>
    </div>
  );
}
