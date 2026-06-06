import {
  BackLink,
  Card,
  CardPanel,
  ReportHeaderBody,
  ReportHeaderContent,
  ReportHeaderField,
  ReportHeaderFooter,
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
} from "@/ascendra-ui";
import { ReportDocumentWrapper } from "@/ascendra-ui/components/reports/report-document-wraper";
import { ReportHeaderBodyWrap } from "@/ascendra-ui/components/reports/report-header-body-wrap";

// ─── Patient data ──────────────────────────────────────────────────────────────

const patient = {
  name: "Marcus J. Okafor",
  dob: "14 March 1978",
  age: 46,
  mrn: "PX-2024-08847",
  physician: "Dr. Sarah Chen, MD",
  specialty: "Internal Medicine",
  insurance: "BlueCross PPO",
  memberId: "BCX-4481-9027",
  visitDate: "28 May 2024",
  nextVisit: "28 August 2024",
};

const vitals = [
  { label: "Heart Rate", value: "72 bpm", status: "normal" },
  { label: "Blood Pressure", value: "128 / 82 mmHg", status: "borderline" },
  { label: "Temperature", value: "98.6 °F", status: "normal" },
  { label: "SpO2", value: "97 %", status: "normal" },
  { label: "Weight", value: "187 lbs", status: "normal" },
  { label: "BMI", value: "26.4", status: "normal" },
];

const medications = [
  {
    drug: "Lisinopril",
    dose: "10 mg",
    freq: "Once daily (morning)",
    prescriber: "Dr. Chen",
    start: "15 Jan 2023",
  },
  {
    drug: "Atorvastatin",
    dose: "20 mg",
    freq: "Once daily (evening)",
    prescriber: "Dr. Chen",
    start: "15 Jan 2023",
  },
  {
    drug: "Metformin",
    dose: "500 mg",
    freq: "Twice daily (with meals)",
    prescriber: "Dr. Patel",
    start: "02 Jun 2022",
  },
  {
    drug: "Vitamin D3",
    dose: "2,000 IU",
    freq: "Once daily",
    prescriber: "Self",
    start: "10 Mar 2024",
  },
];

type LabStatus = "normal" | "borderline" | "abnormal";

const labs: {
  test: string;
  result: string;
  range: string;
  status: LabStatus;
}[] = [
  {
    test: "HbA1c",
    result: "6.8 %",
    range: "< 5.7% (normal), < 7.0% (controlled)",
    status: "normal",
  },
  {
    test: "Fasting Glucose",
    result: "112 mg/dL",
    range: "70 – 99 mg/dL",
    status: "borderline",
  },
  {
    test: "Total Cholesterol",
    result: "172 mg/dL",
    range: "< 200 mg/dL",
    status: "normal",
  },
  {
    test: "LDL Cholesterol",
    result: "98 mg/dL",
    range: "< 100 mg/dL",
    status: "normal",
  },
  {
    test: "HDL Cholesterol",
    result: "52 mg/dL",
    range: "> 40 mg/dL (male)",
    status: "normal",
  },
  {
    test: "Triglycerides",
    result: "148 mg/dL",
    range: "< 150 mg/dL",
    status: "normal",
  },
  { test: "eGFR", result: "78 mL/min", range: "> 60 mL/min", status: "normal" },
];

// ─── Status styling ────────────────────────────────────────────────────────────

const statusCls: Record<
  LabStatus | "normal" | "borderline" | "abnormal",
  string
> = {
  normal:
    "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-400 dark:ring-emerald-500/30",
  borderline:
    "bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-400 dark:ring-amber-500/30",
  abnormal:
    "bg-rose-500/10 text-rose-700 ring-rose-500/20 dark:text-rose-400 dark:ring-rose-500/30",
};

const vitalStatusCls: Record<string, string> = {
  normal:
    "bg-emerald-500/10 text-emerald-700 ring-emerald-500/20 dark:text-emerald-400 dark:ring-emerald-500/30",
  borderline:
    "bg-amber-500/10 text-amber-700 ring-amber-500/20 dark:text-amber-400 dark:ring-amber-500/30",
};

// ─── Section heading ───────────────────────────────────────────────────────────

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-4 border-b pb-2.5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PatientHealthSummaryPage() {
  return (
    <>
      <BackLink href="/showcase/reports">Report Gallery</BackLink>

      <ReportDocumentWrapper>
        {/* ── Document Header ──────────────────────────────────────────────── */}
        <Card>
          <CardPanel border={{ color: "teal" }}>
            <ReportHeaderContent>
              <ReportHeaderBody>
                <ReportHeaderBodyWrap>
                  <ReportTitle>Patient Health Summary</ReportTitle>
                  <ReportTitleHeader>{patient.name}</ReportTitleHeader>
                </ReportHeaderBodyWrap>
                <SimpleBadge variant={"info"}>Visit Summary</SimpleBadge>
              </ReportHeaderBody>
              <ReportHeaderFooter stacked className="sm:grid-cols-4">
                {[
                  { label: "Date of Birth", value: patient.dob },
                  { label: "Age", value: `${patient.age} years` },
                  { label: "MRN", value: patient.mrn },
                  { label: "Physician", value: patient.physician },
                  { label: "Specialty", value: patient.specialty },
                  { label: "Insurance", value: patient.insurance },
                  { label: "Visit Date", value: patient.visitDate },
                  { label: "Next Appointment", value: patient.nextVisit },
                ].map((f) => (
                  <ReportHeaderField key={f.label} label={f.label}>
                    {f.value}
                  </ReportHeaderField>
                ))}
              </ReportHeaderFooter>
            </ReportHeaderContent>
          </CardPanel>
        </Card>

        {/* ── Vital Signs ──────────────────────────────────────────────────── */}
        <div>
          <SectionHeading title="Vital Signs" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {vitals.map((v) => (
              <div
                key={v.label}
                className="flex flex-col gap-2 rounded-lg border bg-muted/20 p-4"
              >
                <span className="text-[0.6875rem] text-muted-foreground">
                  {v.label}
                </span>
                <span className="text-xl font-bold leading-tight tracking-tight text-foreground">
                  {v.value}
                </span>
                <span
                  className={`inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide ring-1 ring-inset ${vitalStatusCls[v.status] ?? ""}`}
                >
                  {v.status === "normal" ? "Normal" : "Borderline"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Active Medications ───────────────────────────────────────────── */}
        <div>
          <SectionHeading title="Active Medications" />
          <TableWrapper>
            <Table horizontal vertical scrollable>
              <TableHeader>
                <TableHeaderRow>
                  <TableHead>Medication</TableHead>
                  <TableHead>Dose</TableHead>
                  <TableHead>Frequency</TableHead>
                  <TableHead>Prescriber</TableHead>
                  <TableHead>Start Date</TableHead>
                </TableHeaderRow>
              </TableHeader>
              <TableBody border={{}} bg={{}}>
                {medications.map((m) => (
                  <TableRow key={m.drug}>
                    <TableCell className="font-medium">{m.drug}</TableCell>
                    <TableCell className="tabular-nums text-muted-foreground">
                      {m.dose}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {m.freq}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {m.prescriber}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {m.start}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </div>

        {/* ── Lab Results ──────────────────────────────────────────────────── */}
        <div>
          <SectionHeading title="Recent Lab Results" />
          <p className="mb-3 text-xs text-muted-foreground">
            Specimens drawn {patient.visitDate} · Processed at Ascendra Regional
            Laboratory
          </p>
          <TableWrapper>
            <Table horizontal vertical scrollable>
              <TableHeader>
                <TableHeaderRow>
                  <TableHead>Test</TableHead>
                  <TableHead className="text-right">Result</TableHead>
                  <TableHead>Reference Range</TableHead>
                  <TableHead>Status</TableHead>
                </TableHeaderRow>
              </TableHeader>
              <TableBody border={{}} bg={{}}>
                {labs.map((l) => (
                  <TableRow key={l.test}>
                    <TableCell className="font-medium">{l.test}</TableCell>
                    <TableCell className="text-right font-mono tabular-nums font-medium">
                      {l.result}
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {l.range}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.6875rem] font-medium ring-1 ring-inset capitalize ${statusCls[l.status]}`}
                      >
                        {l.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableWrapper>
        </div>

        {/* ── Clinical Notes ───────────────────────────────────────────────── */}
        <div>
          <SectionHeading title="Clinical Notes" />
          <div className="flex flex-col gap-5 text-sm leading-relaxed">
            <div>
              <p className="mb-1 font-semibold text-foreground">
                Reason for Visit
              </p>
              <p className="text-muted-foreground">
                Routine follow-up for management of Type 2 Diabetes Mellitus and
                hypertension. Patient attends every 3 months for monitoring and
                medication review.
              </p>
            </div>
            <div>
              <p className="mb-1 font-semibold text-foreground">Findings</p>
              <p className="text-muted-foreground">
                Patient reports good compliance with all prescribed medications.
                HbA1c at 6.8% remains within the controlled target range (&lt;
                7.0%). Fasting glucose slightly elevated at 112 mg/dL; patient
                was counselled on dietary modifications, particularly reducing
                refined carbohydrate intake. Blood pressure borderline at 128/82
                mmHg; patient counselled on sodium reduction and increased
                physical activity. All lipid panels within normal reference
                ranges, consistent with statin therapy response. No signs of
                renal deterioration (eGFR 78 mL/min). No new symptoms reported.
              </p>
            </div>
            <div>
              <p className="mb-1 font-semibold text-foreground">
                Assessment & Plan
              </p>
              <ul className="flex flex-col gap-1.5 text-muted-foreground">
                {[
                  "Continue Lisinopril 10 mg and Atorvastatin 20 mg — no dose adjustment required at this time.",
                  "Continue Metformin 500 mg BD; reinforce dietary advice regarding carbohydrate management.",
                  "Repeat HbA1c and fasting glucose in 3 months to monitor trend.",
                  "Monitor blood pressure at home; advise patient to keep log for next visit.",
                  "Referral to registered dietitian for structured nutrition counselling.",
                  "Follow-up appointment scheduled for 28 August 2024.",
                ].map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Facility Footer ──────────────────────────────────────────────── */}
        <div className="flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground">
          <p>
            This document is a confidential patient health record generated by
            Ascendra Regional Medical Centre. It is intended solely for the
            treating physician and authorised clinical staff. Unauthorised
            disclosure is prohibited under applicable privacy law.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <span className="font-medium text-foreground/60">
              Ascendra Regional Medical Centre
            </span>
            <div className="flex items-center gap-4 text-muted-foreground/60">
              <span>MRN: {patient.mrn}</span>
              <span>·</span>
              <span>Report Date: {patient.visitDate}</span>
              <span>·</span>
              <span>Confidential</span>
            </div>
          </div>
        </div>
      </ReportDocumentWrapper>
    </>
  );
}
