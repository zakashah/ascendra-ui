"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, AreaChart, Area } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/ascendra-ui/shadcn/components/ui/chart";
import { ChartCard } from "@/components/charts/chart-card";
import { ChartSeriesLegend } from "@/components/charts/chart-series-legend";

// ─── Data ─────────────────────────────────────────────────────────────────────

const monthlyData = [
  { month: "Jan", revenue: 18400, expenses: 12200, profit: 6200 },
  { month: "Feb", revenue: 22100, expenses: 13800, profit: 8300 },
  { month: "Mar", revenue: 19800, expenses: 14100, profit: 5700 },
  { month: "Apr", revenue: 26500, expenses: 15200, profit: 11300 },
  { month: "May", revenue: 31200, expenses: 16400, profit: 14800 },
  { month: "Jun", revenue: 28900, expenses: 15800, profit: 13100 },
  { month: "Jul", revenue: 34100, expenses: 17200, profit: 16900 },
  { month: "Aug", revenue: 38600, expenses: 18600, profit: 20000 },
  { month: "Sep", revenue: 35200, expenses: 17900, profit: 17300 },
  { month: "Oct", revenue: 42100, expenses: 19400, profit: 22700 },
  { month: "Nov", revenue: 39800, expenses: 18200, profit: 21600 },
  { month: "Dec", revenue: 46300, expenses: 20100, profit: 26200 },
];

const singleData = monthlyData.map((d) => ({ month: d.month, revenue: d.revenue }));

const gradientData = [
  { month: "Jan", visitors: 4200 },
  { month: "Feb", visitors: 5800 },
  { month: "Mar", visitors: 5100 },
  { month: "Apr", visitors: 7300 },
  { month: "May", visitors: 8900 },
  { month: "Jun", visitors: 8100 },
  { month: "Jul", visitors: 10400 },
  { month: "Aug", visitors: 12100 },
  { month: "Sep", visitors: 11300 },
  { month: "Oct", visitors: 13800 },
  { month: "Nov", visitors: 12600 },
  { month: "Dec", visitors: 15200 },
];

// ─── Chart configs ─────────────────────────────────────────────────────────────

const singleConfig: ChartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
};

const multiConfig: ChartConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  expenses: { label: "Expenses", color: "var(--chart-2)" },
  profit: { label: "Profit", color: "var(--chart-3)" },
};

const gradientConfig: ChartConfig = {
  visitors: { label: "Visitors", color: "var(--chart-1)" },
};

function fmtDollar(v: number) {
  return `$${(v / 1000).toFixed(0)}k`;
}

function fmtNum(v: number) {
  return v >= 1000 ? `${(v / 1000).toFixed(1)}k` : String(v);
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function LineChartsPage() {
  const [hidden, setHidden] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setHidden((prev) => ({ ...prev, [key]: !prev[key] }));
  }

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
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Line Charts</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Line charts are ideal for continuous data over time — trends, comparisons, and cumulative growth. Click legend labels to toggle individual series.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* 1 — Single Line */}
        <ChartCard
          title="Single Line"
          description="Monthly revenue over a 12-month period. Clean baseline with grid and tooltip."
          badge="Basic"
        >
          <ChartContainer config={singleConfig} className="h-[260px] w-full">
            <LineChart data={singleData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} dy={6} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} tickFormatter={fmtDollar} width={42} />
              <ChartTooltip content={<ChartTooltipContent formatter={(v) => fmtDollar(Number(v))} />} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--color-revenue)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </ChartCard>

        {/* 2 — Multi-Line with toggle */}
        <ChartCard
          title="Multi-Line"
          description="Revenue, expenses, and profit compared across 12 months. Click legend labels to toggle series visibility."
          badge="Interactive"
          badgeVariant="default"
        >
          <ChartContainer config={multiConfig} className="h-[260px] w-full">
            <LineChart data={monthlyData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} dy={6} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} tickFormatter={fmtDollar} width={42} />
              <ChartTooltip content={<ChartTooltipContent formatter={(v) => fmtDollar(Number(v))} />} />
              {(["revenue", "expenses", "profit"] as const).map((key) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={`var(--color-${key})`}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                  hide={hidden[key]}
                />
              ))}
            </LineChart>
          </ChartContainer>
          <ChartSeriesLegend config={multiConfig} hidden={hidden} onToggle={toggle} />
        </ChartCard>

        {/* 3 — Gradient Area-Line */}
        <ChartCard
          title="Gradient Fill"
          description="Line with a subtle gradient fill underneath — conveys volume and momentum at a glance."
          badge="Style"
          badgeVariant="blue"
        >
          <ChartContainer config={gradientConfig} className="h-[260px] w-full">
            <AreaChart data={gradientData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="gradVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11 }} dy={6} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11 }} tickFormatter={fmtNum} width={42} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="var(--chart-1)"
                strokeWidth={2}
                fill="url(#gradVisitors)"
                dot={false}
                activeDot={{ r: 4 }}
              />
            </AreaChart>
          </ChartContainer>
        </ChartCard>
      </div>
    </div>
  );
}
