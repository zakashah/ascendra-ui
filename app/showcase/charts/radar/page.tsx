"use client";

import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
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

const skillData = [
  { skill: "Frontend", value: 88 },
  { skill: "Backend", value: 74 },
  { skill: "DevOps", value: 61 },
  { skill: "Design", value: 79 },
  { skill: "Testing", value: 83 },
  { skill: "Security", value: 56 },
];

const teamCompareData = [
  { dimension: "Speed", teamA: 82, teamB: 64 },
  { dimension: "Quality", teamA: 76, teamB: 88 },
  { dimension: "Collab", teamA: 91, teamB: 72 },
  { dimension: "Delivery", teamA: 68, teamB: 85 },
  { dimension: "Innovation", teamA: 74, teamB: 61 },
  { dimension: "Support", teamA: 59, teamB: 80 },
];

const filledData = [
  { axis: "Revenue", current: 78, previous: 62 },
  { axis: "Users", current: 85, previous: 71 },
  { axis: "Retention", current: 69, previous: 58 },
  { axis: "NPS", current: 91, previous: 74 },
  { axis: "CSAT", current: 73, previous: 66 },
  { axis: "Uptime", current: 96, previous: 89 },
];

// ─── Chart configs ─────────────────────────────────────────────────────────────

const skillConfig: ChartConfig = {
  value: { label: "Score", color: "var(--chart-1)" },
};

const teamConfig: ChartConfig = {
  teamA: { label: "Team A", color: "var(--chart-1)" },
  teamB: { label: "Team B", color: "var(--chart-2)" },
};

const filledConfig: ChartConfig = {
  current: { label: "Current Period", color: "var(--chart-1)" },
  previous: { label: "Previous Period", color: "var(--chart-3)" },
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function RadarChartsPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-12">
      <Link
        href="/showcase/charts"
        className="text-muted-foreground hover:text-foreground mb-8 flex w-fit items-center gap-1.5 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      >
        <LuArrowLeft className="size-3 stroke-2" />
        Chart Gallery
      </Link>

      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Charts
        </div>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">Radar Charts</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Radar (spider) charts reveal multivariate profiles at a glance — ideal for skill assessments, team comparisons, and period-over-period performance across several dimensions simultaneously.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* 1 — Basic Radar */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>Basic Radar</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  Single-series skill profile across six dimensions. Each axis is independent — the filled polygon shows relative strengths at a glance.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="secondary" className="shrink-0 mt-px">Basic</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5 flex justify-center">
              <ChartContainer config={skillConfig} className="h-[300px] w-[340px]">
                <RadarChart data={skillData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                  <PolarGrid stroke="var(--border)" strokeOpacity={0.4} />
                  <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Score"
                    dataKey="value"
                    stroke="var(--chart-1)"
                    fill="var(--chart-1)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                    dot={{ r: 3, fill: "var(--chart-1)" }}
                  />
                  <ChartTooltip content={<ChartTooltipContent formatter={(v) => `${v}/100`} />} />
                </RadarChart>
              </ChartContainer>
            </div>
          </MainSectionPanel>
        </MainSection>

        {/* 2 — Multi-Series Comparative */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>Multi-Series Radar</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  Two teams plotted on the same axes — overlapping polygons make it immediately clear where each team leads or lags.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="default" className="shrink-0 mt-px">Comparative</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5 flex justify-center">
              <ChartContainer config={teamConfig} className="h-[300px] w-[340px]">
                <RadarChart data={teamCompareData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                  <PolarGrid stroke="var(--border)" strokeOpacity={0.4} />
                  <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 11 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="teamA"
                    dataKey="teamA"
                    stroke="var(--chart-1)"
                    fill="none"
                    strokeWidth={2}
                    dot={{ r: 3, fill: "var(--chart-1)" }}
                  />
                  <Radar
                    name="teamB"
                    dataKey="teamB"
                    stroke="var(--chart-2)"
                    fill="none"
                    strokeWidth={2}
                    dot={{ r: 3, fill: "var(--chart-2)" }}
                  />
                  <ChartTooltip content={<ChartTooltipContent formatter={(v) => `${v}/100`} />} />
                </RadarChart>
              </ChartContainer>
            </div>
          </MainSectionPanel>
          <MainSectionFooter>
            <div className="flex justify-center gap-6 w-full">
              {(["teamA", "teamB"] as const).map((key) => (
                <div key={key} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: teamConfig[key].color }} />
                  {teamConfig[key].label}
                </div>
              ))}
            </div>
          </MainSectionFooter>
        </MainSection>

        {/* 3 — Filled Comparative */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>Filled Radar</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  Current vs previous period with semi-transparent fills — the overlap area shows retained performance while gaps reveal gains or regressions.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="blue" className="shrink-0 mt-px">Filled</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5 flex justify-center">
              <ChartContainer config={filledConfig} className="h-[300px] w-[340px]">
                <RadarChart data={filledData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                  <PolarGrid stroke="var(--border)" strokeOpacity={0.4} />
                  <PolarAngleAxis dataKey="axis" tick={{ fontSize: 11 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="previous"
                    dataKey="previous"
                    stroke="var(--chart-3)"
                    fill="var(--chart-3)"
                    fillOpacity={0.15}
                    strokeWidth={1.5}
                  />
                  <Radar
                    name="current"
                    dataKey="current"
                    stroke="var(--chart-1)"
                    fill="var(--chart-1)"
                    fillOpacity={0.25}
                    strokeWidth={2}
                  />
                  <ChartTooltip content={<ChartTooltipContent formatter={(v) => `${v}/100`} />} />
                </RadarChart>
              </ChartContainer>
            </div>
          </MainSectionPanel>
          <MainSectionFooter>
            <div className="flex justify-center gap-6 w-full">
              {(["current", "previous"] as const).map((key) => (
                <div key={key} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: filledConfig[key].color }} />
                  {filledConfig[key].label}
                </div>
              ))}
            </div>
          </MainSectionFooter>
        </MainSection>
      </div>
    </div>
  );
}
