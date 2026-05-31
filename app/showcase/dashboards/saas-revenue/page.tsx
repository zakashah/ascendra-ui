"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft, LuLayoutDashboard, LuTrendingUp, LuTrendingDown } from "react-icons/lu";
import {
  ComposedChart, Bar, Line,
  AreaChart, Area,
  BarChart,
  PieChart, Pie,
  RadialBarChart, RadialBar, PolarAngleAxis,
  XAxis, YAxis, CartesianGrid,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/ascendra-ui/shadcn/components/ui/chart";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { ChartSeriesLegend } from "@/components/charts/chart-series-legend";
import { makeTooltipFormatter } from "@/components/charts/make-tooltip-formatter";

// ─── KPIs ─────────────────────────────────────────────────────────────────────

const kpis = [
  { label: "Monthly Recurring Revenue", value: "$248,400", delta: "+8.2%",    up: true  },
  { label: "Annual Run Rate",           value: "$2.98M",   delta: "+8.2%",    up: true  },
  { label: "Churn Rate",                value: "2.1%",     delta: "−0.3 pts", up: true  },
  { label: "Net Revenue Retention",     value: "118%",     delta: "+5.0 pts", up: true  },
] as const;

// ─── MRR & Growth Rate ────────────────────────────────────────────────────────

const mrrData = [
  { month: "Jun", mrr: 151200, growth: 3.8 },
  { month: "Jul", mrr: 163400, growth: 8.1 },
  { month: "Aug", mrr: 172800, growth: 5.8 },
  { month: "Sep", mrr: 179600, growth: 3.9 },
  { month: "Oct", mrr: 192100, growth: 7.0 },
  { month: "Nov", mrr: 204800, growth: 6.6 },
  { month: "Dec", mrr: 218300, growth: 6.6 },
  { month: "Jan", mrr: 224600, growth: 2.9 },
  { month: "Feb", mrr: 230100, growth: 2.4 },
  { month: "Mar", mrr: 236800, growth: 2.9 },
  { month: "Apr", mrr: 242400, growth: 2.4 },
  { month: "May", mrr: 248400, growth: 2.5 },
];

const mrrConfig: ChartConfig = {
  mrr:    { label: "MRR ($)",         color: "var(--chart-1)" },
  growth: { label: "MoM Growth (%)",  color: "var(--chart-3)" },
};

// ─── Plan Mix ─────────────────────────────────────────────────────────────────

const planMixData = [
  { name: "Enterprise", value: 89400, fill: "var(--chart-1)" },
  { name: "Pro",        value: 74500, fill: "var(--chart-2)" },
  { name: "Starter",    value: 59600, fill: "var(--chart-3)" },
  { name: "Growth",     value: 24900, fill: "var(--chart-4)" },
];

// ─── Revenue by Tier ──────────────────────────────────────────────────────────

const TIER_KEYS = ["enterprise", "pro", "starter", "growth"] as const;
type TierKey = (typeof TIER_KEYS)[number];

const revByTierData: ({ month: string } & Record<TierKey, number>)[] = [
  { month: "Jun", enterprise: 52000, pro: 44800, starter: 39200, growth: 15200 },
  { month: "Jul", enterprise: 57200, pro: 48400, starter: 42600, growth: 15200 },
  { month: "Aug", enterprise: 61800, pro: 51200, starter: 44800, growth: 15000 },
  { month: "Sep", enterprise: 64400, pro: 53200, starter: 46800, growth: 15200 },
  { month: "Oct", enterprise: 69600, pro: 56800, starter: 50100, growth: 15600 },
  { month: "Nov", enterprise: 75200, pro: 60800, starter: 53600, growth: 15200 },
  { month: "Dec", enterprise: 80100, pro: 64800, starter: 57600, growth: 15800 },
  { month: "Jan", enterprise: 82400, pro: 67200, starter: 58800, growth: 16200 },
  { month: "Feb", enterprise: 84200, pro: 69200, starter: 59800, growth: 16900 },
  { month: "Mar", enterprise: 86400, pro: 71200, starter: 61600, growth: 17600 },
  { month: "Apr", enterprise: 87600, pro: 72800, starter: 62400, growth: 19600 },
  { month: "May", enterprise: 89400, pro: 74500, starter: 59600, growth: 24900 },
];

const revByTierConfig: ChartConfig = {
  enterprise: { label: "Enterprise", color: "var(--chart-1)" },
  pro:        { label: "Pro",        color: "var(--chart-2)" },
  starter:    { label: "Starter",    color: "var(--chart-3)" },
  growth:     { label: "Growth",     color: "var(--chart-4)" },
};

// ─── NRR Gauge ────────────────────────────────────────────────────────────────

const nrrData = [{ name: "NRR", value: 118, fill: "var(--chart-3)" }];

const nrrConfig: ChartConfig = {
  NRR: { label: "NRR", color: "var(--chart-3)" },
};

// ─── Top Accounts ─────────────────────────────────────────────────────────────

const topAccounts = [
  { company: "Acme Corp",      plan: "Enterprise", mrr: 8400, since: "Jan 2022", health: "Healthy"  },
  { company: "TechVentures",   plan: "Enterprise", mrr: 7200, since: "Mar 2022", health: "Healthy"  },
  { company: "ScaleStack",     plan: "Enterprise", mrr: 6800, since: "Jun 2022", health: "At Risk"  },
  { company: "DataPulse",      plan: "Enterprise", mrr: 6400, since: "Sep 2022", health: "Healthy"  },
  { company: "NexaFlow",       plan: "Pro",        mrr: 4800, since: "Nov 2022", health: "Healthy"  },
  { company: "CloudBase Inc",  plan: "Pro",        mrr: 4200, since: "Feb 2023", health: "Healthy"  },
  { company: "BuildRight",     plan: "Pro",        mrr: 3800, since: "Apr 2023", health: "At Risk"  },
  { company: "Syntax Labs",    plan: "Pro",        mrr: 3400, since: "Jun 2023", health: "Healthy"  },
];

// ─── Churn by Plan Tier ───────────────────────────────────────────────────────

const churnData: ({ month: string } & Record<TierKey, number>)[] = [
  { month: "Dec", enterprise: 1050, pro: 2100, starter: 3150, growth: 700 },
  { month: "Jan", enterprise:  980, pro: 1960, starter: 2940, growth: 620 },
  { month: "Feb", enterprise:  930, pro: 1860, starter: 2800, growth: 610 },
  { month: "Mar", enterprise:  880, pro: 1760, starter: 2640, growth: 620 },
  { month: "Apr", enterprise:  820, pro: 1650, starter: 2480, growth: 650 },
  { month: "May", enterprise:  780, pro: 1560, starter: 2340, growth: 520 },
];

const churnConfig: ChartConfig = {
  enterprise: { label: "Enterprise", color: "var(--chart-1)" },
  pro:        { label: "Pro",        color: "var(--chart-2)" },
  starter:    { label: "Starter",    color: "var(--chart-3)" },
  growth:     { label: "Growth",     color: "var(--chart-4)" },
};

// ─── Formatters ───────────────────────────────────────────────────────────────

function fmtMrr(v: number) {
  return `$${(v / 1000).toFixed(0)}k`;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SaasRevenuePage() {
  const [hiddenMrr,     setHiddenMrr]     = useState<Record<string, boolean>>({});
  const [hiddenRevTier, setHiddenRevTier] = useState<Record<string, boolean>>({});
  const [hiddenChurn,   setHiddenChurn]   = useState<Record<string, boolean>>({});

  return (
    <div className="mx-auto max-w-7xl px-8 py-12">
      {/* Back */}
      <Link
        href="/showcase/dashboards"
        className="text-muted-foreground hover:text-foreground mb-10 flex w-fit items-center gap-1.5 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      >
        <LuArrowLeft className="size-3 stroke-2" />
        Dashboard Gallery
      </Link>

      {/* Page header */}
      <div className="mb-10">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
            <LuLayoutDashboard className="size-3" />
            Dashboards
          </div>
        </div>
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            SaaS Revenue &amp; Growth
          </h1>
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-500/20 dark:text-blue-400 dark:ring-blue-500/30">
            SaaS / Startup
          </span>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Monthly recurring revenue, plan-tier breakdown, churn, and net revenue retention — the core metrics for a SaaS growth review.
        </p>
      </div>

      <div className="flex flex-col gap-4">

        {/* ── KPI row ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {kpis.map((kpi) => (
            <MainSection key={kpi.label}>
              <MainSectionPanel>
                <div className="p-5">
                  <p className="mb-3 text-xs text-muted-foreground">{kpi.label}</p>
                  <div className="flex items-end justify-between gap-2">
                    <span className="text-2xl font-semibold tracking-tight">{kpi.value}</span>
                    <span
                      className={`mb-0.5 flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[0.6875rem] font-medium ${
                        kpi.up
                          ? "bg-green-500/10 text-green-600 dark:text-green-400"
                          : "bg-red-500/10 text-red-600 dark:text-red-400"
                      }`}
                    >
                      {kpi.up
                        ? <LuTrendingUp className="size-3" />
                        : <LuTrendingDown className="size-3" />}
                      {kpi.delta}
                    </span>
                  </div>
                </div>
              </MainSectionPanel>
            </MainSection>
          ))}
        </div>

        {/* ── Row 1: MRR & Growth Rate | Plan Mix ─────────────────────────── */}
        <div className="grid grid-cols-12 gap-4">

          {/* MRR & Growth Rate — Bar + Line, dual Y-axis */}
          <div className="col-span-12 md:col-span-8">
            <MainSection>
              <MainSectionHeader>
                <MainSectionHeaderTitle>MRR &amp; Growth Rate</MainSectionHeaderTitle>
              </MainSectionHeader>
              <MainSectionPanel>
                <div className="p-5">
                  <ChartContainer config={mrrConfig} className="h-64 w-full">
                    <ComposedChart data={mrrData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
                      <CartesianGrid vertical={false} stroke="var(--border)" strokeOpacity={0.4} />
                      <XAxis
                        dataKey="month"
                        tickLine={false} axisLine={false}
                        tick={{ fontSize: 11 }} dy={6}
                      />
                      <YAxis
                        yAxisId="left"
                        tickLine={false} axisLine={false}
                        tick={{ fontSize: 11 }}
                        tickFormatter={fmtMrr}
                        width={44}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        tickLine={false} axisLine={false}
                        tick={{ fontSize: 11 }}
                        tickFormatter={(v: number) => `${v}%`}
                        width={36}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            formatter={makeTooltipFormatter(mrrConfig, (v, k) =>
                              k === "mrr" ? fmtMrr(v) : `${v.toFixed(1)}%`
                            )}
                          />
                        }
                      />
                      <Bar
                        yAxisId="left"
                        dataKey="mrr"
                        fill="var(--chart-1)"
                        fillOpacity={0.85}
                        radius={[3, 3, 0, 0]}
                        hide={hiddenMrr["mrr"]}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="growth"
                        stroke="var(--chart-3)"
                        strokeWidth={2}
                        dot={{ r: 3, fill: "var(--chart-3)" }}
                        activeDot={{ r: 5 }}
                        hide={hiddenMrr["growth"]}
                      />
                    </ComposedChart>
                  </ChartContainer>
                </div>
              </MainSectionPanel>
              <MainSectionFooter>
                <ChartSeriesLegend
                  config={mrrConfig}
                  hidden={hiddenMrr}
                  onToggle={(k) => setHiddenMrr((p) => ({ ...p, [k]: !p[k] }))}
                  className="w-full"
                />
              </MainSectionFooter>
            </MainSection>
          </div>

          {/* Plan Mix — Donut */}
          <div className="col-span-12 md:col-span-4">
            <MainSection>
              <MainSectionHeader>
                <MainSectionHeaderTitle>Plan Mix</MainSectionHeaderTitle>
              </MainSectionHeader>
              <MainSectionPanel>
                <div className="p-5">
                  <ChartContainer config={{}} className="h-36 w-full">
                    <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                      <Pie
                        data={planMixData}
                        cx="50%" cy="50%"
                        innerRadius={44}
                        outerRadius={64}
                        paddingAngle={2}
                        dataKey="value"
                        nameKey="name"
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            formatter={(v) => [`$${Number(v).toLocaleString()}`, ""]}
                            nameKey="name"
                          />
                        }
                      />
                    </PieChart>
                  </ChartContainer>
                  {/* Custom legend */}
                  <div className="mt-4 flex flex-col gap-2">
                    {planMixData.map((d) => {
                      const pct = ((d.value / 248400) * 100).toFixed(0);
                      return (
                        <div key={d.name} className="flex items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-1.5">
                            <span
                              className="h-2 w-2 shrink-0 rounded-[2px]"
                              style={{ background: d.fill }}
                            />
                            <span className="text-muted-foreground">{d.name}</span>
                          </div>
                          <div className="flex items-center gap-2 tabular-nums">
                            <span className="text-muted-foreground/60">{pct}%</span>
                            <span className="font-medium">${(d.value / 1000).toFixed(1)}k</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </MainSectionPanel>
            </MainSection>
          </div>
        </div>

        {/* ── Row 2: Revenue by Tier | NRR Gauge ──────────────────────────── */}
        <div className="grid grid-cols-12 gap-4">

          {/* Revenue by Tier — Stacked Area */}
          <div className="col-span-12 md:col-span-8">
            <MainSection>
              <MainSectionHeader>
                <MainSectionHeaderTitle>Revenue by Tier</MainSectionHeaderTitle>
              </MainSectionHeader>
              <MainSectionPanel>
                <div className="p-5">
                  <ChartContainer config={revByTierConfig} className="h-64 w-full">
                    <AreaChart data={revByTierData} margin={{ top: 4, right: 12, left: 0, bottom: 0 }}>
                      <defs>
                        {TIER_KEYS.map((key, i) => (
                          <linearGradient key={key} id={`grad-tier-${key}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%"  stopColor={`var(--chart-${i + 1})`} stopOpacity={0.35} />
                            <stop offset="95%" stopColor={`var(--chart-${i + 1})`} stopOpacity={0.05} />
                          </linearGradient>
                        ))}
                      </defs>
                      <CartesianGrid vertical={false} stroke="var(--border)" strokeOpacity={0.4} />
                      <XAxis
                        dataKey="month"
                        tickLine={false} axisLine={false}
                        tick={{ fontSize: 11 }} dy={6}
                      />
                      <YAxis
                        tickLine={false} axisLine={false}
                        tick={{ fontSize: 11 }}
                        tickFormatter={fmtMrr}
                        width={44}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            formatter={makeTooltipFormatter(revByTierConfig, (v) => fmtMrr(v))}
                          />
                        }
                      />
                      {TIER_KEYS.map((key, i) => (
                        <Area
                          key={key}
                          type="monotone"
                          dataKey={key}
                          stackId="1"
                          stroke={`var(--chart-${i + 1})`}
                          fill={`url(#grad-tier-${key})`}
                          strokeWidth={1.5}
                          hide={hiddenRevTier[key]}
                        />
                      ))}
                    </AreaChart>
                  </ChartContainer>
                </div>
              </MainSectionPanel>
              <MainSectionFooter>
                <ChartSeriesLegend
                  config={revByTierConfig}
                  hidden={hiddenRevTier}
                  onToggle={(k) => setHiddenRevTier((p) => ({ ...p, [k]: !p[k] }))}
                  className="w-full"
                />
              </MainSectionFooter>
            </MainSection>
          </div>

          {/* NRR Gauge — Radial progress ring, scale 0–150% */}
          <div className="col-span-12 md:col-span-4">
            <MainSection>
              <MainSectionHeader>
                <MainSectionHeaderTitle>NRR Gauge</MainSectionHeaderTitle>
              </MainSectionHeader>
              <MainSectionPanel>
                <div className="flex flex-col items-center justify-center p-6">
                  <ChartContainer config={nrrConfig} className="h-44 w-44">
                    <RadialBarChart
                      cx="50%" cy="50%"
                      innerRadius={60} outerRadius={84}
                      startAngle={90} endAngle={-270}
                      data={nrrData}
                      barSize={14}
                    >
                      <PolarAngleAxis type="number" domain={[0, 150]} tick={false} />
                      <RadialBar dataKey="value" cornerRadius={7} background={{ fill: "var(--muted)" }} />
                      <text
                        x="50%" y="44%"
                        textAnchor="middle" dominantBaseline="middle"
                        fontSize={22} fontWeight={700}
                        className="fill-foreground"
                      >
                        118%
                      </text>
                      <text
                        x="50%" y="60%"
                        textAnchor="middle" dominantBaseline="middle"
                        fontSize={9}
                        className="fill-muted-foreground"
                      >
                        Net Rev Retention
                      </text>
                    </RadialBarChart>
                  </ChartContainer>
                  <div className="mt-1 flex flex-col items-center gap-1 text-xs text-muted-foreground">
                    <span className="font-medium text-green-600 dark:text-green-400">
                      +5.0 pts vs. prior year
                    </span>
                    <span className="text-muted-foreground/60">Target: 150%</span>
                  </div>
                </div>
              </MainSectionPanel>
            </MainSection>
          </div>
        </div>

        {/* ── Row 3: Top Accounts | Churn by Cohort ───────────────────────── */}
        <div className="grid grid-cols-12 gap-4">

          {/* Top Accounts — table */}
          <div className="col-span-12 md:col-span-7">
            <MainSection>
              <MainSectionHeader>
                <MainSectionHeaderTitle>Top Accounts</MainSectionHeaderTitle>
              </MainSectionHeader>
              <MainSectionPanel>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                          Company
                        </th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-muted-foreground">
                          Plan
                        </th>
                        <th className="px-3 py-3 text-right text-xs font-medium text-muted-foreground">
                          MRR
                        </th>
                        <th className="px-3 py-3 text-left text-xs font-medium text-muted-foreground">
                          Since
                        </th>
                        <th className="px-5 py-3 text-left text-xs font-medium text-muted-foreground">
                          Health
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {topAccounts.map((row) => (
                        <tr
                          key={row.company}
                          className="text-xs transition-colors hover:bg-muted/40"
                        >
                          <td className="px-5 py-3 font-medium">{row.company}</td>
                          <td className="px-3 py-3 text-muted-foreground">{row.plan}</td>
                          <td className="px-3 py-3 text-right font-mono tabular-nums">
                            ${row.mrr.toLocaleString()}
                          </td>
                          <td className="px-3 py-3 text-muted-foreground">{row.since}</td>
                          <td className="px-5 py-3">
                            <span
                              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.6875rem] font-medium ring-1 ring-inset ${
                                row.health === "Healthy"
                                  ? "bg-green-500/10 text-green-700 ring-green-500/20 dark:text-green-400"
                                  : "bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-400"
                              }`}
                            >
                              {row.health}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </MainSectionPanel>
            </MainSection>
          </div>

          {/* Churn by Plan Tier — Stacked Bar, last 6 months */}
          <div className="col-span-12 md:col-span-5">
            <MainSection>
              <MainSectionHeader>
                <MainSectionHeaderTitle>Churn by Cohort</MainSectionHeaderTitle>
              </MainSectionHeader>
              <MainSectionPanel>
                <div className="p-5">
                  <ChartContainer config={churnConfig} className="h-52 w-full">
                    <BarChart data={churnData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
                      <CartesianGrid vertical={false} stroke="var(--border)" strokeOpacity={0.4} />
                      <XAxis
                        dataKey="month"
                        tickLine={false} axisLine={false}
                        tick={{ fontSize: 11 }} dy={6}
                      />
                      <YAxis
                        tickLine={false} axisLine={false}
                        tick={{ fontSize: 11 }}
                        tickFormatter={fmtMrr}
                        width={40}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            formatter={makeTooltipFormatter(churnConfig, (v) => fmtMrr(v))}
                          />
                        }
                      />
                      {TIER_KEYS.map((key, i) => (
                        <Bar
                          key={key}
                          dataKey={key}
                          stackId="churn"
                          fill={`var(--chart-${i + 1})`}
                          fillOpacity={0.85}
                          radius={key === "growth" ? [3, 3, 0, 0] : [0, 0, 0, 0]}
                          hide={hiddenChurn[key]}
                        />
                      ))}
                    </BarChart>
                  </ChartContainer>
                </div>
              </MainSectionPanel>
              <MainSectionFooter>
                <ChartSeriesLegend
                  config={churnConfig}
                  hidden={hiddenChurn}
                  onToggle={(k) => setHiddenChurn((p) => ({ ...p, [k]: !p[k] }))}
                  className="w-full"
                />
              </MainSectionFooter>
            </MainSection>
          </div>
        </div>

      </div>
    </div>
  );
}
