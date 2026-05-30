"use client";

import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
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
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";

// ─── Data ─────────────────────────────────────────────────────────────────────

const singleProgressData = [{ name: "Progress", value: 73, fill: "var(--chart-1)" }];

const multiKpiData = [
  { name: "Revenue", value: 88, fill: "var(--chart-1)" },
  { name: "Users", value: 74, fill: "var(--chart-2)" },
  { name: "Retention", value: 91, fill: "var(--chart-3)" },
  { name: "Satisfaction", value: 66, fill: "var(--chart-4)" },
];

const gaugeData = [{ name: "Score", value: 68, fill: "var(--chart-1)" }];

// ─── Chart configs ─────────────────────────────────────────────────────────────

const singleConfig: ChartConfig = {
  Progress: { label: "Progress", color: "var(--chart-1)" },
};

const multiConfig: ChartConfig = {
  Revenue: { label: "Revenue", color: "var(--chart-1)" },
  Users: { label: "Users", color: "var(--chart-2)" },
  Retention: { label: "Retention", color: "var(--chart-3)" },
  Satisfaction: { label: "Satisfaction", color: "var(--chart-4)" },
};

const gaugeConfig: ChartConfig = {
  Score: { label: "Score", color: "var(--chart-1)" },
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function RadialChartsPage() {
  const GAUGE_VALUE = 68;

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
        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
          Radial & Gauge Charts
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Radial charts communicate progress and KPI attainment at a glance. Gauge charts add directional context for health or performance scores.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* 1 — Single Progress Ring */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>Single Progress Ring</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  One KPI displayed as an arc fill against a track — ideal for compact dashboard widgets showing goal completion.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="default" className="shrink-0 mt-px">Progress</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5">
              <div className="flex flex-col items-center">
                <ChartContainer config={singleConfig} className="h-[220px] w-[220px]">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    startAngle={90}
                    endAngle={-270}
                    data={singleProgressData}
                    barSize={14}
                  >
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar
                      dataKey="value"
                      cornerRadius={7}
                      background={{ fill: "var(--muted)" }}
                    />
                    <ChartTooltip content={<ChartTooltipContent formatter={(v) => `${v}%`} />} />
                    <text x="50%" y="46%" textAnchor="middle" dominantBaseline="middle" fontSize={26} fontWeight={700} fill="currentColor" className="fill-foreground">
                      73%
                    </text>
                    <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize={10} fill="currentColor" className="fill-muted-foreground">
                      Goal attained
                    </text>
                  </RadialBarChart>
                </ChartContainer>
              </div>
            </div>
          </MainSectionPanel>
        </MainSection>

        {/* 2 — Multi-Series Radial */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>Multi-Series Radial</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  Four KPIs on concentric arcs — Revenue, Users, Retention, and Satisfaction scores compared in a compact layout.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="blue" className="shrink-0 mt-px">Multi-KPI</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <ChartContainer config={multiConfig} className="h-[260px] w-[260px] shrink-0">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={110}
                    startAngle={90}
                    endAngle={-270}
                    data={multiKpiData}
                    barSize={12}
                    barGap={4}
                  >
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar dataKey="value" cornerRadius={6} background={{ fill: "var(--muted)" }} />
                    <ChartTooltip content={<ChartTooltipContent formatter={(v) => `${v}%`} nameKey="name" />} />
                  </RadialBarChart>
                </ChartContainer>

                <div className="flex flex-col gap-3 w-full">
                  {multiKpiData.map((d) => (
                    <div key={d.name} className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: d.fill }} />
                      <span className="text-xs text-foreground font-medium flex-1">{d.name}</span>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="h-1.5 w-24 rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${d.value}%`, background: d.fill }}
                          />
                        </div>
                        <span className="text-muted-foreground w-8 text-right">{d.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MainSectionPanel>
        </MainSection>

        {/* 3 — Gauge / Speedometer */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>Gauge / Speedometer</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  Health or performance score displayed on a 270° arc with colour zones — green/yellow/red at a glance.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="orange" className="shrink-0 mt-px">Gauge</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5">
              <div className="flex flex-col items-center">
                <ChartContainer config={gaugeConfig} className="h-[200px] w-[260px]">
                  <RadialBarChart
                    cx="50%"
                    cy="70%"
                    innerRadius={80}
                    outerRadius={115}
                    startAngle={225}
                    endAngle={-45}
                    data={gaugeData}
                    barSize={16}
                  >
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar
                      dataKey={() => 100}
                      cornerRadius={8}
                      fill="var(--chart-5)"
                      fillOpacity={0.15}
                      background={false}
                      isAnimationActive={false}
                    />
                    <RadialBar
                      dataKey={() => 66}
                      cornerRadius={8}
                      fill="var(--chart-4)"
                      fillOpacity={0.18}
                      background={false}
                      isAnimationActive={false}
                    />
                    <RadialBar
                      dataKey={() => 33}
                      cornerRadius={8}
                      fill="var(--chart-3)"
                      fillOpacity={0.2}
                      background={false}
                      isAnimationActive={false}
                    />
                    <RadialBar dataKey="value" cornerRadius={8} fill="var(--chart-1)" />
                    <ChartTooltip content={<ChartTooltipContent formatter={(v) => `${v}/100`} />} />
                  </RadialBarChart>
                </ChartContainer>

                <div className="flex flex-col items-center -mt-6">
                  <span className="text-4xl font-bold text-foreground">{GAUGE_VALUE}</span>
                  <span className="text-xs text-muted-foreground mt-1">Performance score</span>
                </div>
              </div>
            </div>
          </MainSectionPanel>
          <MainSectionFooter>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 w-full">
              {[
                { label: "Poor", color: "var(--chart-5)" },
                { label: "Fair", color: "var(--chart-4)" },
                { label: "Good", color: "var(--chart-3)" },
                { label: "Score", color: "var(--chart-1)" },
              ].map((item) => (
                <span key={item.label} className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full shrink-0" style={{ background: item.color }} />
                  {item.label}
                </span>
              ))}
            </div>
          </MainSectionFooter>
        </MainSection>
      </div>
    </div>
  );
}
