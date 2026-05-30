"use client";

import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  PolarGrid,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/ascendra-ui/shadcn/components/ui/chart";
import { ChartCard } from "@/components/charts/chart-card";

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

// ─── Gauge zones ──────────────────────────────────────────────────────────────

function GaugeNeedle({ value, cx, cy, radius }: { value: number; cx: number; cy: number; radius: number }) {
  // 270° arc from -135° to 135° (mapped to 0–100)
  const angle = -135 + (value / 100) * 270;
  const rad = (angle * Math.PI) / 180;
  const x2 = cx + radius * 0.75 * Math.cos(rad);
  const y2 = cy + radius * 0.75 * Math.sin(rad);
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="var(--foreground)" />
      <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="var(--foreground)" strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function RadialChartsPage() {
  const GAUGE_VALUE = 68;

  return (
    <div className="mx-auto max-w-5xl px-8 py-12">
      {/* Back */}
      <Link
        href="/showcase"
        className="text-muted-foreground hover:text-foreground mb-8 flex w-fit items-center gap-1.5 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      >
        <LuArrowLeft className="size-3 stroke-2" />
        Component Showcase
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Charts
        </div>
        <h1 className="mb-3 text-3xl font-semibold tracking-tight text-foreground">
          Radial & Gauge Charts
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Radial charts communicate progress and KPI attainment at a glance. Gauge charts add directional context for health or performance scores.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* 1 — Single Progress Ring */}
        <ChartCard
          title="Single Progress Ring"
          description="One KPI displayed as an arc fill against a track — ideal for compact dashboard widgets showing goal completion."
          badge="Progress"
          badgeVariant="default"
        >
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
                {/* Center label */}
                <text x="50%" y="46%" textAnchor="middle" dominantBaseline="middle" fontSize={26} fontWeight={700} fill="currentColor" className="fill-foreground">
                  73%
                </text>
                <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontSize={10} fill="currentColor" className="fill-muted-foreground">
                  Goal attained
                </text>
              </RadialBarChart>
            </ChartContainer>
          </div>
        </ChartCard>

        {/* 2 — Multi-Series Radial */}
        <ChartCard
          title="Multi-Series Radial"
          description="Four KPIs on concentric arcs — Revenue, Users, Retention, and Satisfaction scores compared in a compact layout."
          badge="Multi-KPI"
          badgeVariant="blue"
        >
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

            {/* Stat list */}
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
        </ChartCard>

        {/* 3 — Gauge / Speedometer */}
        <ChartCard
          title="Gauge / Speedometer"
          description="Health or performance score displayed on a 270° arc with colour zones — green/yellow/red at a glance."
          badge="Gauge"
          badgeVariant="orange"
        >
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
                {/* Zone track: red */}
                <RadialBar
                  dataKey={() => 100}
                  cornerRadius={8}
                  fill="var(--chart-5)"
                  fillOpacity={0.15}
                  background={false}
                  isAnimationActive={false}
                />
                {/* Zone track: yellow */}
                <RadialBar
                  dataKey={() => 66}
                  cornerRadius={8}
                  fill="var(--chart-4)"
                  fillOpacity={0.18}
                  background={false}
                  isAnimationActive={false}
                />
                {/* Zone track: green */}
                <RadialBar
                  dataKey={() => 33}
                  cornerRadius={8}
                  fill="var(--chart-3)"
                  fillOpacity={0.2}
                  background={false}
                  isAnimationActive={false}
                />
                {/* Actual value arc */}
                <RadialBar dataKey="value" cornerRadius={8} fill="var(--chart-1)" />
                <ChartTooltip content={<ChartTooltipContent formatter={(v) => `${v}/100`} />} />
              </RadialBarChart>
            </ChartContainer>

            {/* Score display */}
            <div className="flex flex-col items-center -mt-6">
              <span className="text-4xl font-bold text-foreground">{GAUGE_VALUE}</span>
              <span className="text-xs text-muted-foreground mt-1">Performance score</span>
              <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full" style={{ background: "var(--chart-5)" }} /> Poor</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full" style={{ background: "var(--chart-4)" }} /> Fair</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full" style={{ background: "var(--chart-3)" }} /> Good</span>
                <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full" style={{ background: "var(--chart-1)" }} /> Score</span>
              </div>
            </div>
          </div>
        </ChartCard>
      </div>
    </div>
  );
}
