"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/ascendra-ui/shadcn/components/ui/chart";
import { ChartCard } from "@/components/charts/chart-card";
import { ChartSeriesLegend } from "@/components/charts/chart-series-legend";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stackedData = [
  { month: "Jan", mobile: 18400, desktop: 32100, tablet: 8200 },
  { month: "Feb", mobile: 22100, desktop: 35800, tablet: 9100 },
  { month: "Mar", mobile: 19800, desktop: 31200, tablet: 8700 },
  { month: "Apr", mobile: 26500, desktop: 38900, tablet: 10200 },
  { month: "May", mobile: 31200, desktop: 43100, tablet: 11400 },
  { month: "Jun", mobile: 28900, desktop: 40600, tablet: 10800 },
  { month: "Jul", mobile: 34100, desktop: 47300, tablet: 12100 },
  { month: "Aug", mobile: 38600, desktop: 52100, tablet: 13800 },
  { month: "Sep", mobile: 35200, desktop: 48700, tablet: 12600 },
  { month: "Oct", mobile: 42100, desktop: 56400, tablet: 14900 },
  { month: "Nov", mobile: 39800, desktop: 53200, tablet: 13700 },
  { month: "Dec", mobile: 46300, desktop: 61800, tablet: 16200 },
];

const percentData = stackedData.map((d) => {
  const total = d.mobile + d.desktop + d.tablet;
  return {
    month: d.month,
    mobile: +((d.mobile / total) * 100).toFixed(1),
    desktop: +((d.desktop / total) * 100).toFixed(1),
    tablet: +((d.tablet / total) * 100).toFixed(1),
  };
});

const targetData = [
  { month: "Jan", actual: 18400, target: 22000 },
  { month: "Feb", actual: 22100, target: 22000 },
  { month: "Mar", actual: 19800, target: 22000 },
  { month: "Apr", actual: 26500, target: 25000 },
  { month: "May", actual: 31200, target: 25000 },
  { month: "Jun", actual: 28900, target: 28000 },
  { month: "Jul", actual: 34100, target: 30000 },
  { month: "Aug", actual: 38600, target: 33000 },
  { month: "Sep", actual: 35200, target: 36000 },
  { month: "Oct", actual: 42100, target: 38000 },
  { month: "Nov", actual: 39800, target: 40000 },
  { month: "Dec", actual: 46300, target: 42000 },
];

// ─── Chart configs ─────────────────────────────────────────────────────────────

const deviceConfig: ChartConfig = {
  mobile: { label: "Mobile", color: "var(--chart-1)" },
  desktop: { label: "Desktop", color: "var(--chart-2)" },
  tablet: { label: "Tablet", color: "var(--chart-6)" },
};

const targetConfig: ChartConfig = {
  actual: { label: "Actual", color: "var(--chart-1)" },
  target: { label: "Target", color: "var(--chart-4)" },
};

const DEVICE_KEYS = ["mobile", "desktop", "tablet"] as const;
const DEVICE_CHART_NUMS = [1, 2, 6] as const;

function fmtDollar(v: number) {
  return `$${(v / 1000).toFixed(0)}k`;
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function AreaChartsPage() {
  const [hiddenStacked, setHiddenStacked] = useState<Record<string, boolean>>({});
  const [hiddenPercent, setHiddenPercent] = useState<Record<string, boolean>>({});
  const [hiddenTarget, setHiddenTarget] = useState<Record<string, boolean>>({});

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
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Area Charts</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Area charts emphasise volume and composition over time. Stacking shows absolute contributions; percent-stacking reveals proportion shifts. Click legend labels to toggle series.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* 1 — Stacked Area */}
        <ChartCard
          title="Stacked Area"
          description="Session counts by device type — absolute values stacked to show both individual contribution and total volume."
          badge="Stacked"
          badgeVariant="default"
        >
          <ChartContainer config={deviceConfig} className="h-72 w-full">
            <AreaChart data={stackedData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
              <defs>
                {DEVICE_KEYS.map((key, i) => (
                  <linearGradient key={key} id={`grad-${key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={`var(--chart-${DEVICE_CHART_NUMS[i]})`} stopOpacity={0.35} />
                    <stop offset="95%" stopColor={`var(--chart-${DEVICE_CHART_NUMS[i]})`} stopOpacity={0.05} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} dy={6} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} tickFormatter={fmtDollar} width={42} />
              <ChartTooltip content={<ChartTooltipContent formatter={(v) => fmtDollar(Number(v))} />} />
              {DEVICE_KEYS.map((key, i) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stackId="1"
                  stroke={`var(--chart-${DEVICE_CHART_NUMS[i]})`}
                  fill={`url(#grad-${key})`}
                  strokeWidth={1.5}
                  hide={hiddenStacked[key]}
                />
              ))}
            </AreaChart>
          </ChartContainer>
          <ChartSeriesLegend config={deviceConfig} hidden={hiddenStacked} onToggle={(k) => setHiddenStacked((p) => ({ ...p, [k]: !p[k] }))} />
        </ChartCard>

        {/* 2 — Percent-Stacked */}
        <ChartCard
          title="Percent-Stacked Area"
          description="The same data normalised to 100% — reveals how device-type share shifts month by month, independent of volume."
          badge="100%"
          badgeVariant="blue"
        >
          <ChartContainer config={deviceConfig} className="h-72 w-full">
            <AreaChart data={percentData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
              <defs>
                {DEVICE_KEYS.map((key, i) => (
                  <linearGradient key={key} id={`pgrad-${key}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={`var(--chart-${DEVICE_CHART_NUMS[i]})`} stopOpacity={0.4} />
                    <stop offset="95%" stopColor={`var(--chart-${DEVICE_CHART_NUMS[i]})`} stopOpacity={0.05} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} dy={6} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11 }}
                tickFormatter={(v) => `${v}%`}
                width={38}
                domain={[0, 100]}
              />
              <ChartTooltip content={<ChartTooltipContent formatter={(v) => `${v}%`} />} />
              {DEVICE_KEYS.map((key, i) => (
                <Area
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stackId="1"
                  stroke={`var(--chart-${DEVICE_CHART_NUMS[i]})`}
                  fill={`url(#pgrad-${key})`}
                  strokeWidth={1.5}
                  hide={hiddenPercent[key]}
                />
              ))}
            </AreaChart>
          </ChartContainer>
          <ChartSeriesLegend config={deviceConfig} hidden={hiddenPercent} onToggle={(k) => setHiddenPercent((p) => ({ ...p, [k]: !p[k] }))} />
        </ChartCard>

        {/* 3 — Area with Reference Line */}
        <ChartCard
          title="Area with Target Line"
          description="Monthly revenue against a rolling target. The dashed reference line makes it immediately clear when performance is above or below goal."
          badge="Target"
          badgeVariant="orange"
        >
          <ChartContainer config={targetConfig} className="h-72 w-full">
            <AreaChart data={targetData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="grad-actual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} dy={6} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} tickFormatter={fmtDollar} width={42} />
              <ChartTooltip content={<ChartTooltipContent formatter={(v) => fmtDollar(Number(v))} />} />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="var(--chart-1)"
                fill="url(#grad-actual)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
                hide={hiddenTarget["actual"]}
              />
              <Area
                type="monotone"
                dataKey="target"
                stroke="var(--chart-4)"
                fill="none"
                strokeWidth={1.5}
                strokeDasharray="5 4"
                dot={false}
                hide={hiddenTarget["target"]}
              />
            </AreaChart>
          </ChartContainer>
          <ChartSeriesLegend config={targetConfig} hidden={hiddenTarget} onToggle={(k) => setHiddenTarget((p) => ({ ...p, [k]: !p[k] }))} />
        </ChartCard>
      </div>
    </div>
  );
}
