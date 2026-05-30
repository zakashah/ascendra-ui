"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { PieChart, Pie, Cell, Sector, Legend } from "recharts";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/ascendra-ui/shadcn/components/ui/chart";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";

// ─── Data ─────────────────────────────────────────────────────────────────────

const revenueByRegion = [
  { name: "North America", value: 42800 },
  { name: "Europe", value: 31400 },
  { name: "Asia Pacific", value: 24600 },
  { name: "Latin America", value: 11200 },
  { name: "Middle East", value: 7800 },
];

const planDistribution = [
  { name: "Enterprise", value: 1840, fill: "var(--chart-1)" },
  { name: "Pro", value: 3220, fill: "var(--chart-2)" },
  { name: "Starter", value: 5610, fill: "var(--chart-6)" },
  { name: "Free", value: 9140, fill: "var(--chart-7)" },
];

const CHART_COLORS = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

// ─── Chart configs ─────────────────────────────────────────────────────────────

const regionConfig: ChartConfig = {
  "North America": { label: "North America", color: "var(--chart-1)" },
  Europe: { label: "Europe", color: "var(--chart-2)" },
  "Asia Pacific": { label: "Asia Pacific", color: "var(--chart-3)" },
  "Latin America": { label: "Latin America", color: "var(--chart-4)" },
  "Middle East": { label: "Middle East", color: "var(--chart-5)" },
};

const planConfig: ChartConfig = {
  Enterprise: { label: "Enterprise", color: "var(--chart-1)" },
  Pro: { label: "Pro", color: "var(--chart-2)" },
  Starter: { label: "Starter", color: "var(--chart-6)" },
  Free: { label: "Free", color: "var(--chart-7)" },
};

// ─── Active shape ─────────────────────────────────────────────────────────────

function renderActiveShape(props: PieSectorDataItem) {
  const {
    cx = 0, cy = 0,
    innerRadius = 0, outerRadius = 0,
    startAngle, endAngle, fill,
    payload, value,
  } = props;
  const name = (payload as { name?: string })?.name ?? "";

  return (
    <g>
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize={13} fontWeight={600} fill="currentColor">
        {name}
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fontSize={11} fill="var(--muted-foreground)">
        {typeof value === "number" ? `$${value.toLocaleString()}` : ""}
      </text>
      <Sector
        cx={cx} cy={cy}
        innerRadius={Number(innerRadius)}
        outerRadius={Number(outerRadius) + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx} cy={cy}
        innerRadius={Number(outerRadius) + 12}
        outerRadius={Number(outerRadius) + 15}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PieChartsPage() {
  const [hiddenPlans, setHiddenPlans] = useState<Record<string, boolean>>({});

  const total = planDistribution.reduce((sum, d) => sum + d.value, 0);
  const visiblePlans = planDistribution.filter((d) => !hiddenPlans[d.name]);
  const visibleTotal = visiblePlans.reduce((sum, d) => sum + d.value, 0);

  function togglePlan(name: string) {
    setHiddenPlans((prev) => ({ ...prev, [name]: !prev[name] }));
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
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Pie & Donut Charts</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Part-to-whole relationships at a glance. Donuts with a center stat surface the most important KPI immediately. Hover slices to explore; click legend to filter.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* 1 — Donut with Center Stat */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>Donut — Center Stat</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  Revenue split by region. Hover a slice to see name and value in the center hole.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="default" className="shrink-0 mt-px">Interactive</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5">
              <ChartContainer config={regionConfig} className="h-72 w-full">
                <PieChart>
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(v) => `$${Number(v).toLocaleString()}`}
                        nameKey="name"
                      />
                    }
                  />
                  <Pie
                    data={revenueByRegion}
                    cx="50%"
                    cy="50%"
                    innerRadius={75}
                    outerRadius={115}
                    paddingAngle={2}
                    dataKey="value"
                    activeShape={renderActiveShape}
                  >
                    {revenueByRegion.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </div>
          </MainSectionPanel>
          <MainSectionFooter>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 w-full">
              {revenueByRegion.map((d, i) => (
                <div key={d.name} className="flex items-center gap-1.5">
                  <span className="inline-block h-2.5 w-2.5 rounded-full shrink-0" style={{ background: CHART_COLORS[i % CHART_COLORS.length] }} />
                  {d.name}
                </div>
              ))}
            </div>
          </MainSectionFooter>
        </MainSection>

        {/* 2 — Donut with Legend List */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>Donut — Legend List</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  Subscription plan distribution with a tabular legend showing exact counts. Click any row to hide/show that slice.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="blue" className="shrink-0 mt-px">Legend</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5">
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <ChartContainer config={planConfig} className="h-60 w-60 shrink-0">
                  <PieChart>
                    <Pie
                      data={visiblePlans}
                      cx="50%"
                      cy="50%"
                      innerRadius={65}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {visiblePlans.map((entry) => (
                        <Cell key={entry.name} fill={entry.fill} />
                      ))}
                    </Pie>
                    <text x="50%" y="46%" textAnchor="middle" dominantBaseline="middle" fontSize={20} fontWeight={600} fill="currentColor">
                      {visibleTotal.toLocaleString()}
                    </text>
                    <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fontSize={10} fill="var(--muted-foreground)">
                      Total users
                    </text>
                    <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                  </PieChart>
                </ChartContainer>

                <div className="flex flex-col gap-1 w-full">
                  {planDistribution.map((d) => (
                    <button
                      key={d.name}
                      type="button"
                      onClick={() => togglePlan(d.name)}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors hover:bg-muted/60 ${hiddenPlans[d.name] ? "opacity-40" : ""}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: d.fill }} />
                        <span className="font-medium text-foreground">{d.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <span>{d.value.toLocaleString()}</span>
                        <span className="w-10 text-right">{((d.value / total) * 100).toFixed(1)}%</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </MainSectionPanel>
        </MainSection>

        {/* 3 — Active Slice Highlight */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>Active Slice Highlight</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  Hover any slice to explode it outward with a ring indicator — useful for dashboards where users drill into specific segments.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="green" className="shrink-0 mt-px">Hover</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5">
              <ChartContainer config={regionConfig} className="h-72 w-full">
                <PieChart>
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(v) => `$${Number(v).toLocaleString()}`}
                        nameKey="name"
                      />
                    }
                  />
                  <Pie
                    data={revenueByRegion}
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    paddingAngle={3}
                    dataKey="value"
                    activeShape={(props: PieSectorDataItem) => (
                      <Sector
                        cx={props.cx ?? 0}
                        cy={props.cy ?? 0}
                        innerRadius={Number(props.innerRadius ?? 0)}
                        outerRadius={Number(props.outerRadius ?? 0) + 10}
                        startAngle={props.startAngle}
                        endAngle={props.endAngle}
                        fill={props.fill}
                      />
                    )}
                  >
                    {revenueByRegion.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend
                    formatter={(value) => (
                      <span className="text-xs text-muted-foreground">{value}</span>
                    )}
                  />
                </PieChart>
              </ChartContainer>
            </div>
          </MainSectionPanel>
        </MainSection>
      </div>
    </div>
  );
}
