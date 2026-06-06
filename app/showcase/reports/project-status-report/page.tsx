"use client";

import {
  BackLink,
  Card,
  CardHeader,
  CardHeaderSubtitle,
  CardHeaderTitle,
  CardPanel,
  SimpleBadge,
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
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

// ─── Project meta ──────────────────────────────────────────────────────────────

const project = {
  name:   "Ascendra Platform — Cloud Migration",
  client: "Ascendra Holdings Ltd.",
  pm:     "Cameron Walsh",
  period: "Week 24 · June 3 – 7, 2024",
  deadline: "August 5, 2024",
};

const rag = {
  status:  "AMBER" as const,
  label:   "On Track with Concerns",
  summary: "Infrastructure environment setup is 8 days behind schedule. All other workstreams on track and budget remains within tolerance.",
};

// ─── KPIs ─────────────────────────────────────────────────────────────────────

const kpis = [
  { label: "% Complete",        value: "62%"     },
  { label: "Days to Deadline",  value: "41"      },
  { label: "Budget Consumed",   value: "58%"     },
  { label: "Open Risks",        value: "3"       },
];

// ─── Milestones ────────────────────────────────────────────────────────────────

type MilestoneState = "complete" | "in-progress" | "upcoming";

const milestones: { label: string; date: string; state: MilestoneState }[] = [
  { label: "Project Kickoff",    date: "Apr 1",  state: "complete"    },
  { label: "Infra Design",       date: "Apr 29", state: "complete"    },
  { label: "Dev Env Setup",      date: "May 20", state: "complete"    },
  { label: "Data Migration",     date: "Jun 28", state: "in-progress" },
  { label: "UAT Testing",        date: "Jul 19", state: "upcoming"    },
  { label: "Go Live",            date: "Aug 5",  state: "upcoming"    },
];

// ─── Budget data ───────────────────────────────────────────────────────────────

const budgetData = [
  { phase: "Discovery",     budget: 48,  actual: 46  },
  { phase: "Infra",         budget: 120, actual: 128 },
  { phase: "Development",   budget: 240, actual: 218 },
  { phase: "Data Migration",budget: 96,  actual: 72  },
  { phase: "Testing",       budget: 72,  actual: 0   },
  { phase: "Deployment",    budget: 24,  actual: 0   },
];

const budgetConfig: ChartConfig = {
  budget: { label: "Budget ($K)", color: "var(--chart-2)" },
  actual: { label: "Actual ($K)", color: "var(--chart-1)" },
};

// ─── Risks ────────────────────────────────────────────────────────────────────

type RiskStatus = "Escalated" | "Monitoring" | "Mitigated";
type RiskSeverity = "High" | "Medium" | "Low";

const risks: {
  description: string;
  probability: RiskSeverity;
  impact: RiskSeverity;
  owner: string;
  due: string;
  status: RiskStatus;
}[] = [
  {
    description: "Infrastructure vendor delay extends project timeline",
    probability: "Medium", impact: "High",
    owner: "J. Torres", due: "Jun 14", status: "Escalated",
  },
  {
    description: "Data quality issues in legacy system requiring remediation",
    probability: "High", impact: "Medium",
    owner: "M. Patel", due: "Jun 21", status: "Monitoring",
  },
  {
    description: "Key backend developer on extended leave",
    probability: "Low", impact: "High",
    owner: "C. Walsh", due: "Jul 1", status: "Mitigated",
  },
];

// ─── Team ─────────────────────────────────────────────────────────────────────

const team = [
  { name: "Cameron Walsh",  role: "Project Manager",       allocation: "100%" },
  { name: "Juan Torres",    role: "Lead Architect",         allocation: "80%"  },
  { name: "Amy Kim",        role: "Senior Backend Engineer",allocation: "100%" },
  { name: "Bruno Reyes",    role: "Backend Engineer",       allocation: "100%" },
  { name: "Maya Patel",     role: "Data Engineer",          allocation: "60%"  },
  { name: "Sam Nguyen",     role: "QA Lead",                allocation: "40%"  },
];

// ─── Styling helpers ───────────────────────────────────────────────────────────

const riskStatusVariant: Record<RiskStatus, "red" | "amber" | "green"> = {
  Escalated:  "red",
  Monitoring: "amber",
  Mitigated:  "green",
};

const riskLevelCls: Record<RiskSeverity, string> = {
  High:   "text-rose-600 dark:text-rose-400 font-semibold",
  Medium: "text-amber-600 dark:text-amber-400 font-semibold",
  Low:    "text-sky-600 dark:text-sky-400 font-semibold",
};

// ─── Milestone timeline ────────────────────────────────────────────────────────

function MilestoneTimeline() {
  return (
    <div className="overflow-x-auto">
      <div className="relative flex min-w-[560px] items-start">
        {/* Track line */}
        <div className="absolute left-[calc(100%/12)] right-[calc(100%/12)] top-3 h-0.5 bg-border" />
        {/* Completed fill — approx 3/5 done */}
        <div
          className="absolute top-3 h-0.5 bg-primary"
          style={{ left: "calc(100% / 12)", width: "calc((100% - 100%/6) * 0.55)" }}
        />

        {milestones.map((m, i) => {
          const isFirst = i === 0;
          const isLast  = i === milestones.length - 1;
          return (
            <div
              key={m.label}
              className={`flex flex-1 flex-col items-center ${isFirst ? "items-start" : isLast ? "items-end" : "items-center"}`}
            >
              {/* Dot */}
              <div
                className={[
                  "relative z-10 flex items-center justify-center rounded-full border-2",
                  m.state === "complete"
                    ? "h-6 w-6 border-primary bg-primary"
                    : m.state === "in-progress"
                    ? "h-6 w-6 border-primary bg-background"
                    : "h-6 w-6 border-border bg-background",
                ].join(" ")}
              >
                {m.state === "complete" && (
                  <svg className="size-3 text-primary-foreground" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {m.state === "in-progress" && (
                  <div className="h-2 w-2 rounded-full bg-primary" />
                )}
              </div>

              {/* Labels */}
              <div className={`mt-3 flex flex-col gap-0.5 ${isFirst ? "items-start" : isLast ? "items-end" : "items-center text-center"}`}>
                <span className="text-[0.6875rem] font-medium leading-snug text-foreground">
                  {m.label}
                </span>
                <span className="text-[0.625rem] text-muted-foreground">{m.date}</span>
                <span
                  className={[
                    "text-[0.625rem] font-medium",
                    m.state === "complete"    ? "text-emerald-600 dark:text-emerald-400" :
                    m.state === "in-progress" ? "text-blue-600 dark:text-blue-400"       :
                    "text-muted-foreground/40",
                  ].join(" ")}
                >
                  {m.state === "complete" ? "Complete" : m.state === "in-progress" ? "In Progress" : "Upcoming"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Section heading ───────────────────────────────────────────────────────────

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4 border-b pb-3">
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ProjectStatusReportPage() {
  return (
    <>
      <BackLink href="/showcase/reports">Report Gallery</BackLink>

      <div className="flex flex-col gap-10">

        {/* ── Report Header ────────────────────────────────────────────────── */}
        <div className="overflow-hidden rounded-xl border">
          <div className="h-1 w-full bg-blue-500" />
          <div className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-widest text-muted-foreground">
                  Project Status Report
                </p>
                <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                  {project.name}
                </h1>
                <p className="mt-0.5 text-sm text-muted-foreground">{project.period}</p>
              </div>
              <span className="inline-flex items-center rounded border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-400">
                Weekly Update
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-6 border-t pt-4 text-xs text-muted-foreground">
              <span><span className="font-medium text-foreground">Client:</span> {project.client}</span>
              <span><span className="font-medium text-foreground">Project Manager:</span> {project.pm}</span>
              <span><span className="font-medium text-foreground">Go-Live Target:</span> {project.deadline}</span>
            </div>
          </div>
        </div>

        {/* ── RAG Status Banner ────────────────────────────────────────────── */}
        <div className="rounded-xl border border-amber-200/60 bg-amber-50/60 p-5 dark:border-amber-800/30 dark:bg-amber-950/20">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                  {rag.status}
                </span>
                <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                  — {rag.label}
                </span>
              </div>
              <p className="mt-1 text-sm text-amber-600/90 dark:text-amber-500/90">
                {rag.summary}
              </p>
            </div>
          </div>
        </div>

        {/* ── KPIs ─────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {kpis.map((k) => (
            <Card key={k.label}>
              <CardPanel>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground">{k.label}</p>
                  <p className="mt-3 text-3xl font-bold tracking-tight text-foreground">
                    {k.value}
                  </p>
                </div>
              </CardPanel>
            </Card>
          ))}
        </div>

        {/* ── Milestone Timeline ───────────────────────────────────────────── */}
        <div>
          <SectionHeading
            title="Milestone Timeline"
            subtitle="Six project phases — complete, in progress, and upcoming"
          />
          <MilestoneTimeline />
        </div>

        {/* ── Budget vs. Actual ────────────────────────────────────────────── */}
        <Card>
          <CardHeader>
            <CardHeaderTitle>Budget vs. Actual Spend by Phase</CardHeaderTitle>
            <CardHeaderSubtitle>
              In thousands USD ($K) · Testing and Deployment not yet started
            </CardHeaderSubtitle>
          </CardHeader>
          <CardPanel>
            <div className="p-6">
              <ChartContainer config={budgetConfig} className="h-48 w-full">
                <BarChart
                  data={budgetData}
                  margin={{ top: 4, right: 16, left: 0, bottom: 0 }}
                  barCategoryGap="28%"
                  barGap={3}
                >
                  <CartesianGrid
                    vertical={false}
                    stroke="var(--border)"
                    strokeOpacity={0.6}
                    strokeWidth={0.5}
                  />
                  <XAxis
                    dataKey="phase"
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
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(v, k) => [
                          v === 0 ? "Not started" : `$${Number(v).toLocaleString()}K`,
                          budgetConfig[k as keyof typeof budgetConfig]?.label ?? k,
                        ]}
                      />
                    }
                  />
                  <Bar dataKey="budget" fill="var(--chart-2)" fillOpacity={0.5} radius={[3, 3, 0, 0]} />
                  <Bar dataKey="actual"  fill="var(--chart-1)" fillOpacity={0.85} radius={[3, 3, 0, 0]} />
                </BarChart>
              </ChartContainer>
              <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-3 rounded-[2px]" style={{ background: "var(--chart-1)" }} />
                  Actual
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-3 rounded-[2px]" style={{ background: "var(--chart-2)", opacity: 0.55 }} />
                  Budget
                </div>
              </div>
            </div>
          </CardPanel>
        </Card>

        {/* ── Risk Register ────────────────────────────────────────────────── */}
        <div>
          <SectionHeading title="Risk Register" subtitle="Active risks as of report date" />
          <TableWrapper>
            <Table horizontal vertical>
              <TableHeader>
                <TableHeaderRow>
                  <TableHead>Risk Description</TableHead>
                  <TableHead>Probability</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Status</TableHead>
                </TableHeaderRow>
              </TableHeader>
              <TableBody border={{}} bg={{}}>
                {risks.map((r, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{r.description}</TableCell>
                    <TableCell className={riskLevelCls[r.probability]}>{r.probability}</TableCell>
                    <TableCell className={riskLevelCls[r.impact]}>{r.impact}</TableCell>
                    <TableCell className="text-muted-foreground">{r.owner}</TableCell>
                    <TableCell className="text-muted-foreground tabular-nums">{r.due}</TableCell>
                    <TableCell>
                      <SimpleBadge variant={riskStatusVariant[r.status]}>
                        {r.status}
                      </SimpleBadge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </div>

        {/* ── Team Allocation ──────────────────────────────────────────────── */}
        <div>
          <SectionHeading title="Team Allocation" />
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((t) => (
              <div
                key={t.name}
                className="flex items-center justify-between gap-3 rounded-lg border bg-muted/20 px-4 py-3"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </div>
                <span className="shrink-0 text-sm font-semibold text-muted-foreground">
                  {t.allocation}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Report Footer ─────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-6 text-xs text-muted-foreground">
          <span className="font-medium text-foreground/60">{project.name}</span>
          <div className="flex items-center gap-4 text-muted-foreground/60">
            <span>{project.period}</span>
            <span>·</span>
            <span>PM: {project.pm}</span>
            <span>·</span>
            <span>Internal Use Only</span>
          </div>
        </div>

      </div>
    </>
  );
}
