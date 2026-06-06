"use client";

import {
  BackLink,
  Card,
  CardHeader,
  CardHeaderSubtitle,
  CardHeaderTitle,
  CardPanel,
  Item,
  ItemDescription,
  ItemTitle,
  ReportHeaderBody,
  ReportHeaderContent,
  ReportHeaderField,
  ReportHeaderFooter,
  ReportSubTitle,
  ReportTitle,
  ReportTitleHeader,
  SimpleBadge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
  ReportDocumentFooter,
  ReportDocumentFooterLine,
  ReportDocumentFooterLineLeft,
  ReportDocumentFooterLineRight,
  ReportDocumentFooterNote,
} from "@/ascendra-ui";
import { ReportDocumentWrapper } from "@/ascendra-ui/components/reports/report-document-wraper";
import { ReportHeaderBodyWrap } from "@/ascendra-ui/components/reports/report-header-body-wrap";
import { ReportSectionHeader } from "@/ascendra-ui/components/reports/report-section-header";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/ascendra-ui/shadcn";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

// ─── Employee data ─────────────────────────────────────────────────────────────

const employee = {
  name: "Amara Nwosu",
  role: "Senior Product Manager",
  department: "Product",
  manager: "Daniel Park",
  reviewPeriod: "January – December 2023",
  employeeId: "EMP-10342",
  startDate: "14 March 2021",
  tenure: "2 yrs 10 mo",
};

const overallRating = 4.2;
const tier = "Exceeds Expectations";
const goalsSummary = { achieved: 8, total: 10, score: 4.0 };

// ─── Competencies ─────────────────────────────────────────────────────────────

const competencies = [
  { subject: "Leadership", score: 4.0, fullMark: 5 },
  { subject: "Technical", score: 4.5, fullMark: 5 },
  { subject: "Collaboration", score: 4.8, fullMark: 5 },
  { subject: "Communication", score: 4.2, fullMark: 5 },
  { subject: "Initiative", score: 4.6, fullMark: 5 },
  { subject: "Delivery", score: 4.1, fullMark: 5 },
];

const radarConfig: ChartConfig = {
  score: { label: "Score", color: "var(--chart-1)" },
};

// ─── Goals ────────────────────────────────────────────────────────────────────

type GoalStatus = "Achieved" | "Partial" | "Not Met";

const goals: {
  name: string;
  target: string;
  result: string;
  status: GoalStatus;
  weight: number;
}[] = [
  {
    name: "Launch mobile app v2.0",
    target: "Q3 2023 release",
    result: "Released Aug 2023",
    status: "Achieved",
    weight: 20,
  },
  {
    name: "Improve NPS score",
    target: "NPS ≥ 45",
    result: "NPS 52 achieved",
    status: "Achieved",
    weight: 15,
  },
  {
    name: "Roadmap alignment with sales",
    target: "Monthly sync cadence",
    result: "100% sync adherence",
    status: "Achieved",
    weight: 10,
  },
  {
    name: "Reduce time-to-market",
    target: "≤ 6 weeks per feature",
    result: "5.8 wks avg",
    status: "Achieved",
    weight: 15,
  },
  {
    name: "Customer advisory board",
    target: "3 sessions / yr",
    result: "3 sessions held",
    status: "Achieved",
    weight: 10,
  },
  {
    name: "Cross-team collaboration index",
    target: "Score ≥ 4.2",
    result: "Score 4.5",
    status: "Achieved",
    weight: 10,
  },
  {
    name: "Documentation overhaul",
    target: "100% coverage",
    result: "82% complete",
    status: "Partial",
    weight: 10,
  },
  {
    name: "Data analytics integration",
    target: "Q4 delivery",
    result: "Slipped to Q1 2024",
    status: "Partial",
    weight: 5,
  },
  {
    name: "Hire 2 associate PMs",
    target: "Dec 2023",
    result: "1 hired; 1 ongoing",
    status: "Partial",
    weight: 3,
  },
  {
    name: "Competitive analysis refresh",
    target: "Bi-annual cadence",
    result: "Only 1 completed",
    status: "Not Met",
    weight: 2,
  },
];

const goalStatusCls: Record<GoalStatus, string> = {
  Achieved:
    "bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-400 dark:ring-emerald-500/30",
  Partial:
    "bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/20 dark:text-amber-400 dark:ring-amber-500/30",
  "Not Met":
    "bg-rose-500/10 text-rose-700 ring-1 ring-rose-500/20 dark:text-rose-400 dark:ring-rose-500/30",
};

// ─── Development plan ─────────────────────────────────────────────────────────

const devPlan = [
  {
    skill: "Executive presence",
    action: "Enroll in leadership communication programme",
    timeline: "Q1 2024",
    support: "L&D budget",
  },
  {
    skill: "Data-driven roadmapping",
    action: "Complete advanced analytics course",
    timeline: "Q1 2024",
    support: "Online learning",
  },
  {
    skill: "People management",
    action: "Shadow VP of Product in hiring process",
    timeline: "Q2 2024",
    support: "Manager sponsorship",
  },
  {
    skill: "OKR facilitation",
    action: "Lead next cycle OKR workshop for squad",
    timeline: "Q2 2024",
    support: "No external cost",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => {
        const filled = rating >= s;
        const half = !filled && rating >= s - 0.5;
        return (
          <svg key={s} viewBox="0 0 20 20" className="h-5 w-5">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`half-${s}`}>
                    <stop offset="50%" stopColor="var(--chart-1)" />
                    <stop
                      offset="50%"
                      stopColor="currentColor"
                      stopOpacity={0.15}
                    />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#half-${s})`}
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </>
            ) : (
              <path
                fill={filled ? "var(--chart-1)" : "currentColor"}
                fillOpacity={filled ? 1 : 0.15}
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function EmployeePerformanceReviewPage() {
  return (
    <>
      <BackLink href="/showcase/reports">Report Gallery</BackLink>

      <ReportDocumentWrapper>
        {/* ── Document Header ──────────────────────────────────────────────── */}
        <Card>
          <CardPanel border={{ color: "indigo" }}>
            <ReportHeaderContent>
              <ReportHeaderBody>
                <ReportHeaderBodyWrap>
                  <ReportTitle>Annual Performance Review</ReportTitle>
                  <ReportTitleHeader>{employee.name}</ReportTitleHeader>
                  <ReportSubTitle>
                    {employee.role} · {employee.department}
                  </ReportSubTitle>
                </ReportHeaderBodyWrap>
                <SimpleBadge variant={"violet"}>Confidential HR</SimpleBadge>
              </ReportHeaderBody>
              <ReportHeaderFooter stacked className="gap-y-4">
                {[
                  { label: "Employee ID", value: employee.employeeId },
                  { label: "Manager", value: employee.manager },
                  { label: "Start Date", value: employee.startDate },
                  { label: "Tenure", value: employee.tenure },
                  { label: "Review Period", value: employee.reviewPeriod },
                  { label: "Department", value: employee.department },
                ].map((f) => (
                  <ReportHeaderField key={f.label} label={f.label}>
                    {f.value}
                  </ReportHeaderField>
                ))}
              </ReportHeaderFooter>
            </ReportHeaderContent>
          </CardPanel>
        </Card>

        {/* ── Overall Rating ───────────────────────────────────────────────── */}
        <div>
          <ReportSectionHeader>
            <CardHeaderTitle>Overall Rating</CardHeaderTitle>
          </ReportSectionHeader>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <p className="text-6xl font-black tracking-tight text-foreground">
                {overallRating.toFixed(1)}
                <span className="text-2xl font-medium text-muted-foreground">
                  /5
                </span>
              </p>
              <Stars rating={overallRating} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center rounded-md bg-indigo-500/10 px-3 py-1.5 text-sm font-semibold text-indigo-700 ring-1 ring-indigo-500/20 dark:text-indigo-400">
                {tier}
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>
                  Goals achieved:{" "}
                  <span className="font-semibold text-foreground">
                    {goalsSummary.achieved}/{goalsSummary.total}
                  </span>
                </span>
                <span>·</span>
                <span>
                  360° score:{" "}
                  <span className="font-semibold text-foreground">
                    {goalsSummary.score.toFixed(1)}/5
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Competency Radar ─────────────────────────────────────────────── */}
        <Card>
          <CardHeader>
            <CardHeaderTitle>Competency Assessment</CardHeaderTitle>
            <CardHeaderSubtitle>
              Six core competencies rated on a 5-point scale by manager and
              peers
            </CardHeaderSubtitle>
          </CardHeader>
          <CardPanel>
            <div className="flex justify-center p-6">
              <ChartContainer
                config={radarConfig}
                className="h-72 w-full max-w-xs"
              >
                <RadarChart data={competencies}>
                  <PolarGrid stroke="var(--border)" strokeOpacity={0.6} />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(v) => [`${v}/5`, "Score"]}
                      />
                    }
                  />
                  <Radar
                    dataKey="score"
                    stroke="var(--chart-1)"
                    fill="var(--chart-1)"
                    fillOpacity={0.25}
                    strokeWidth={2}
                    dot={{ r: 3, fill: "var(--chart-1)" }}
                  />
                </RadarChart>
              </ChartContainer>
            </div>
          </CardPanel>
        </Card>

        {/* ── Goal Achievement ─────────────────────────────────────────────── */}
        <div>
          <ReportSectionHeader>
            <CardHeaderTitle>Goal Achievement</CardHeaderTitle>
          </ReportSectionHeader>
          <TableWrapper>
            <Table horizontal vertical scrollable>
              <TableHeader>
                <TableHeaderRow>
                  <TableHead>Goal</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Result</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Weight</TableHead>
                </TableHeaderRow>
              </TableHeader>
              <TableBody border={{}} bg={{}}>
                {goals.map((g) => (
                  <TableRow key={g.name}>
                    <TableCell className="font-medium">{g.name}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {g.target}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {g.result}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.6875rem] font-medium capitalize ${goalStatusCls[g.status]}`}
                      >
                        {g.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right tabular-nums text-muted-foreground">
                      {g.weight}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </div>

        {/* ── 360° Feedback ─────────────────────────────────────────────────── */}
        <div>
          <ReportSectionHeader>
            <CardHeaderTitle>Peer & 360° Feedback Summary</CardHeaderTitle>
          </ReportSectionHeader>
          <div className="flex flex-col gap-4">
            {[
              {
                theme: "Strategic Thinking",
                quote:
                  "Amara consistently brings a clear product vision to planning sessions. She is one of the best at translating ambiguous business goals into actionable roadmap items. Multiple stakeholders noted her ability to pre-empt downstream blockers before they surface.",
              },
              {
                theme: "Cross-Team Collaboration",
                quote:
                  "Feedback across engineering, design, and marketing was overwhelmingly positive. Amara is described as a 'go-to connector' who proactively closes communication gaps between teams. Two peers highlighted her monthly stakeholder digests as particularly valuable.",
              },
              {
                theme: "Development Areas",
                quote:
                  "A recurring theme across reviewers is the opportunity to delegate more intentionally — Amara sometimes retains ownership of tasks that could develop junior colleagues. This is noted as a growth area rather than a deficiency, and aligns with her own self-assessment.",
              },
            ].map((f) => (
              <Item key={f.theme} variant="outline">
                <ItemTitle className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {f.theme}
                </ItemTitle>
                <ItemDescription>{f.quote}</ItemDescription>
              </Item>
            ))}
          </div>
        </div>

        {/* ── Development Plan ─────────────────────────────────────────────── */}
        <div>
          <ReportSectionHeader>
            <CardHeaderTitle>Development Plan 2024</CardHeaderTitle>
          </ReportSectionHeader>
          <TableWrapper>
            <Table horizontal vertical scrollable>
              <TableHeader>
                <TableHeaderRow>
                  <TableHead>Skill / Gap</TableHead>
                  <TableHead>Action Item</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead>Support Needed</TableHead>
                </TableHeaderRow>
              </TableHeader>
              <TableBody border={{}} bg={{}}>
                {devPlan.map((d) => (
                  <TableRow key={d.skill}>
                    <TableCell className="font-medium">{d.skill}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {d.action}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {d.timeline}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {d.support}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </div>

        {/* ── Sign-off ─────────────────────────────────────────────────────── */}
        <div>
          <ReportSectionHeader>
            <CardHeaderTitle>Sign-off</CardHeaderTitle>
          </ReportSectionHeader>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                role: "Manager",
                name: employee.manager,
                title: "Head of Product",
              },
              { role: "Employee", name: employee.name, title: employee.role },
            ].map((s) => (
              <Item
                key={s.role}
                variant="outline"
                className="p-5 flex-col items-start gap-4"
              >
                <div>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-muted-foreground">
                    {s.role}
                  </p>
                  <p className="mt-0.5 font-medium text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.title}</p>
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <div>
                    <p className="mb-1 text-[0.6875rem] text-muted-foreground">
                      Signature
                    </p>
                    <div className="h-8 w-full border-b border-dashed" />
                  </div>
                  <div>
                    <p className="mb-1 text-[0.6875rem] text-muted-foreground">
                      Date
                    </p>
                    <div className="h-8 w-32 border-b border-dashed" />
                  </div>
                </div>
              </Item>
            ))}
          </div>
        </div>

        {/* ── Footer ───────────────────────────────────────────────────────── */}
        <ReportDocumentFooter>
          <ReportDocumentFooterNote>
            This document is a confidential personnel record. It is intended
            solely for the named employee, their direct manager, and authorised
            HR personnel. Unauthorised disclosure is prohibited under
            Ascendra&apos;s employee privacy policy.
          </ReportDocumentFooterNote>
          <ReportDocumentFooterLine>
            <ReportDocumentFooterLineLeft>
              Ascendra — People & Talent
            </ReportDocumentFooterLineLeft>
            <ReportDocumentFooterLineRight>
              <span>{employee.employeeId}</span>
              <span>·</span>
              <span>{employee.reviewPeriod}</span>
              <span>·</span>
              <span>Confidential HR</span>
            </ReportDocumentFooterLineRight>
          </ReportDocumentFooterLine>
        </ReportDocumentFooter>
      </ReportDocumentWrapper>
    </>
  );
}
