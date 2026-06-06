# Sample Reports — Complete Build Plan

> Canonical reference for all 10 reports in the showcase. Use this to check specs and status before starting any implementation.

---

## Infrastructure

| File | Purpose |
|------|---------|
| `lib/types.ts` | `ReportMeta`, `ReportComplexity`, `ReportLayout`, `ReportType`, `ReportStatus` types |
| `lib/reports-config.ts` | Array of all 10 `ReportMeta` objects (update `status` when implemented) |
| `components/reports/report-coming-soon.tsx` | Placeholder rendered by all unimplemented reports |
| `app/showcase/reports/page.tsx` | Gallery page — grid with domain/complexity/layout badges |
| `app/showcase/layout.tsx` | Sidebar: "Sample Reports" section with all 10 nav items |

**Routing pattern:** Each report lives at `app/showcase/reports/[slug]/page.tsx` (static folder, not dynamic). Available reports put everything directly in the page file (same as dashboards). Coming-soon pages: look up slug from `reportsConfig` and render `<ReportComingSoon report={r} />`.

**Common rules:**
- All report pages import `BackLink` from `@/ascendra-ui` for the back link
- Available reports use `"use client"` if they contain charts or state, otherwise omit
- Document-layout reports: content goes inside `<div className="flex flex-col gap-10">` with no extra max-width — the showcase ContentArea already constrains width appropriately
- Wide-layout reports: same flex-col gap-10 pattern, full width
- Never use `DashboardContent` wrapper in reports
- When done, update `status: 'available'` in `lib/reports-config.ts`

---

## Status

| # | Slug | Name | Layout | Complexity | Status |
|---|------|------|--------|------------|--------|
| 1 | `annual-financial-statement` | Annual Financial Statement | Document | Complex | **AVAILABLE** |
| 2 | `executive-business-review` | Executive Business Review | Wide | Simple | **AVAILABLE** |
| 3 | `patient-health-summary` | Patient Health Summary | Document | Medium | **AVAILABLE** |
| 4 | `project-status-report` | Project Status Report | Mixed | Simple | **AVAILABLE** |
| 5 | `sales-pipeline-report` | Sales Pipeline Report | Wide | Medium | coming-soon |
| 6 | `marketing-campaign-analysis` | Marketing Campaign Analysis | Wide | Medium | coming-soon |
| 7 | `supply-chain-ops-report` | Supply Chain Operations Report | Wide | Complex | coming-soon |
| 8 | `employee-performance-review` | Employee Performance Review | Document | Simple | coming-soon |
| 9 | `security-incident-report` | Cybersecurity Incident Report | Document | Medium | coming-soon |
| 10 | `esg-sustainability-report` | ESG Sustainability Report | Mixed | Complex | coming-soon |

---

## Report Specifications

### 1 · Annual Financial Statement — AVAILABLE
- **Domain:** Finance / Accounting · **Complexity:** Complex · **Layout:** Document
- **Report Type:** Financial
- **Key Metrics:** Total Revenue $42.8M, Net Income $6.4M, Total Assets $89.2M, Operating Cash Flow $9.1M
- **Sections:** Branded document header (company, FY, CONFIDENTIAL badge, prepared-by strip) → Financial Highlights (4 KPI cards with PY comparison) → Consolidated Income Statement (full P&L table with indent hierarchy, subtotals, bold totals, green/red variance columns) → Quarterly Revenue Trend (grouped bar chart FY2024 vs FY2023) → Balance Sheet Summary → Cash Flow Summary → Notes to Financial Statements → Document footer (GAAP disclaimer, page ref, classification)
- **Data ($000s):** Revenue 42,800/37,180 · Net Income 6,400/5,500 · Total Assets 89,200 · Op. Cash 9,100
- **Quarterly:** Q1 9,800/8,400 · Q2 10,200/9,100 · Q3 10,900/9,800 · Q4 11,900/9,880
- **Key Design:** Accounting table rows (header/data/subtotal/total/margin-pct); right-aligned monospaced; accounting parentheses for negatives; green/red variance; branded emerald header strip; GAAP footer

---

### 2 · Executive Business Review — AVAILABLE
- **Domain:** Corporate / C-Suite · **Complexity:** Simple · **Layout:** Wide
- **Report Type:** Executive
- **Key Metrics:** H1 Revenue $142.4M, Gross Profit $58.6M, EBITDA $28.1M, Cash $44.2M
- **Sections:** Dark branded header (slate-900 bg, company, H1 2024, BOARD CONFIDENTIAL, prepared-by strip) → 4 large KPIs (text-4xl values, prior year comparison) → Monthly revenue grouped bar chart (FY2024 vs FY2023, Jan–Jun) → Division performance table (North America, Europe, Asia-Pacific, Enterprise, SMB — revenue, % of total, vs. target, vs. LY with color) → Executive highlights two-column (Achievements | Focus Areas) → Board footer
- **Monthly data ($M):** Jan 21.4/18.2 · Feb 20.8/17.8 · Mar 23.6/19.8 · Apr 22.9/19.5 · May 24.8/21.4 · Jun 28.9/23.8
- **Divisions ($M):** North America 68.4 (+4.2% vs target, +21.3% vs LY) · Europe 32.8 (+1.8%, +14.6%) · Asia-Pacific 22.4 (−2.1%, +18.9%) · Enterprise 13.2 (+6.4%, +22.1%) · SMB & Other 5.6 (−4.8%, +8.4%)
- **Key Design:** Dark/black header card (bg-slate-900 text-white); oversized KPI numbers (text-4xl font-bold); inline colored variance text on table rows; two-column highlights with green/amber accent borders

---

### 3 · Patient Health Summary — AVAILABLE
- **Domain:** Healthcare / Clinical · **Complexity:** Medium · **Layout:** Document
- **Report Type:** Clinical
- **Key Metrics:** Age 46, BMI 26.4, Blood Pressure 128/82 mmHg, Last Visit May 28 2024
- **Sections:** Clinical header strip (patient name, DOB, MRN, physician, insurance — in a structured info grid, not KPI cards) → Vital signs panel (HR 72 bpm, BP 128/82, Temp 98.6°F, SpO2 97%, Weight 187 lbs, BMI 26.4 — 3-col grid cards) → Active medications table (drug, dose, frequency, prescriber, start date) → Recent lab results table (test, result, reference range, status badge — color-coded Normal/Borderline/Abnormal) → Clinical notes (visit reason, findings, plan as structured text) → Facility footer
- **Patient:** Marcus J. Okafor · DOB 14-Mar-1978 · MRN PX-2024-08847 · Dr. Sarah Chen · BlueCross PPO
- **Meds:** Lisinopril 10mg OD · Atorvastatin 20mg OD · Metformin 500mg BD · Vitamin D3 2000IU OD
- **Labs:** HbA1c 6.8% (Normal) · Total Cholesterol 172 (Normal) · LDL 98 (Normal) · HDL 52 (Normal) · Triglycerides 148 (Normal) · Fasting Glucose 112 (Borderline) · eGFR 78 (Normal)
- **Key Design:** ZERO charts; patient info as a structured 2-col grid (not cards); vital signs as tile grid with prominent values; lab status badges (green Normal, amber Borderline, red Abnormal); clinical note sections with labeled paragraphs; facility disclaimer footer

---

### 4 · Project Status Report — AVAILABLE
- **Domain:** Project Management · **Complexity:** Simple · **Layout:** Mixed
- **Report Type:** Operational
- **Key Metrics:** 62% Complete, 41 Days to Deadline, 58% Budget Consumed, 3 Open Risks
- **Sections:** Report header (project, client, PM, Week 24 Jun 3–7 2024) → RAG banner AMBER ("On Track with Concerns: Infrastructure setup delayed 8 days; budget within tolerance") → 4 KPI cards → Milestone timeline (6 milestones, three visual states: complete/in-progress/upcoming) → Budget vs. actual bar chart by phase → Risk register table → Team allocation list → Footer
- **Milestones:** Project Kickoff Apr 1 ✓ · Infra Design Apr 29 ✓ · Dev Env Setup May 20 ✓ · Data Migration Jun 28 (In Progress) · UAT Testing Jul 19 (Upcoming) · Go Live Aug 5 (Upcoming)
- **Budget ($K):** Discovery 48/46 · Infrastructure 120/128 · Development 240/218 · Data Migration 96/72 · Testing 72/— · Deployment 24/—
- **Risks:** Infra vendor delay (Medium/High, Escalated) · Data quality issues (High/Medium, Monitoring) · Dev resource on leave (Low/High, Mitigated)
- **Key Design:** RAG banner with amber styling (the defining element); milestone horizontal timeline with complete/in-progress/upcoming dot states; risk register with severity badges; budget bar chart showing over/under by phase

---

### 5 · Sales Pipeline Report
- **Domain:** Sales / CRM · **Complexity:** Medium · **Layout:** Wide
- **Report Type:** Performance
- **Key Metrics:** Pipeline Value $4.2M, Deals Won 28, Avg. Deal Size $148K, Win Rate 34%
- **Sections:** Report header → 4 KPIs → Pipeline by stage funnel (horizontal bars descending: Prospect 142 → Qualified 89 → Proposal 54 → Negotiation 31 → Closed Won 28; each bar labeled with count + value) → Sales rep performance table (name, quota $, attained $, attainment %, deals closed, avg size — with inline progress bar for attainment %, above-quota in green, below in amber/red) → Monthly bookings vs target (composed bar+line chart, 6 months) → Deal size distribution (bar chart, bucket ranges)
- **Key Design:** Funnel using descending horizontal bars with stage counts + values; rep table with inline progress bar (using a CSS width trick, not a component); above/below-quota attainment % color coding

---

### 6 · Marketing Campaign Analysis
- **Domain:** Marketing / Growth · **Complexity:** Medium · **Layout:** Wide
- **Report Type:** Performance
- **Key Metrics:** Impressions 4.8M, Conversions 3,240, Blended ROAS 4.2×, Cost per Conversion $18.40
- **Sections:** Report header → 4 KPIs → Channel performance bar chart (grouped: Paid Search, Social, Email, Display, Affiliate — clicks and conversions per channel) → Conversion funnel (horizontal bars with % drop-offs annotated between stages: Impression → Click → Landing → Signup → Purchase) → Audience breakdown donut → Campaign ROI table (campaign name, spend, revenue, ROAS, CPC, conversions) → Budget allocation vs actual spend bar
- **Key Design:** Multi-channel grouped bars; conversion funnel with labeled drop-off % between stages; audience donut with legend showing % split; ROI table with ROAS highlighted in green for strong performers

---

### 7 · Supply Chain Operations Report
- **Domain:** Operations / Logistics · **Complexity:** Complex · **Layout:** Wide
- **Report Type:** Operational
- **Key Metrics:** On-time Delivery 91.4%, Inventory Value $8.2M, Stockout Events 3, Avg. Lead Time 12.4 days
- **Sections:** Report header → 4 KPIs → Inventory level trend (multi-series area: Raw Materials, WIP, Finished Goods, 12 months) → Supplier performance scorecard table (10 suppliers — on-time %, quality score, lead time, defect rate; cells color-coded red/amber/green by threshold) → Regional shipment breakdown (horizontal grouped bar) → Order fulfillment rate by warehouse (bar) → Critical open orders table (order ID, product, qty, supplier, promised date, delay, status badge) → Cost trend line chart
- **Key Design:** Supplier scorecard with colored table cells (not just badge — the cell background changes by threshold value); multi-series area chart; critical orders table with overdue row highlighting

---

### 8 · Employee Performance Review
- **Domain:** Human Resources · **Complexity:** Simple · **Layout:** Document
- **Report Type:** Performance
- **Key Metrics:** Overall Rating 4.2/5, Goals Achieved 8/10, 360° Score 4.0/5, Tenure 3.2 yrs
- **Sections:** Employee info header (name, role, dept, manager, review period, employee ID — structured info grid) → Overall rating display (large "4.2/5.0" score, star visual using divs, "Exceeds Expectations" tier badge) → Competency radar chart (6 axes: Leadership 4.1, Technical 4.6, Collaboration 4.3, Communication 3.8, Initiative 4.0, Delivery 4.5) → Goal achievement table (goal name, target, actual, status badge, weight %) → Peer/360 feedback (3 themed text blocks: Strengths / Areas for Growth / Team Impact) → Development plan table (skill gap, action, timeline, support) → Sign-off section (manager + employee signature lines with date)
- **Employee:** Jamie Rivera · Senior Software Engineer · Engineering · Manager: Alex Patel · Review Period: Jan–Dec 2024
- **Key Design:** Radar chart for competencies; star rating using repeating elements; sign-off area with dashed lines; development plan as a clean table; "Exceeds Expectations" tier badge prominently displayed

---

### 9 · Cybersecurity Incident Report
- **Domain:** IT / Security · **Complexity:** Medium · **Layout:** Document
- **Report Type:** Compliance
- **Key Metrics:** Severity CRITICAL, Systems Affected 3, Records at Risk 12,400, Time to Containment 4h 22m
- **Sections:** TLP banner at very top ("TLP:AMBER — Restricted Distribution") → Incident header (INC-2024-0847, CRITICAL severity badge in red, detection/containment timestamps, incident type) → Executive summary (3-paragraph text) → Incident timeline (vertical, 8 events with timestamps: Detection 02:14 → Alert 02:17 → Escalation 02:31 → Isolation 03:08 → Forensics 04:40 → Containment 06:36 → Remediation 09:00 → Closed 14-Jun) → Affected systems table (system name, role, exposure type, data sensitivity, current status badge) → Impact assessment bar chart (severity breakdown of incidents in last 12 months for context) → Remediation actions table (action, owner, status badge, priority, due date) → Lessons learned section (numbered recommendations) → TLP footer
- **Incident:** Unauthorized access via compromised credentials, affecting Auth Service, User DB, and API Gateway; 12,400 user records exposed
- **Key Design:** TLP amber banner strip at very top; CRITICAL badge with red background; vertical timeline with event-type color dots (red=breach, blue=action, orange=escalation, green=resolved); red/amber accent throughout for security context; classification markings in footer

---

### 10 · ESG Sustainability Report
- **Domain:** Corporate / ESG · **Complexity:** Complex · **Layout:** Mixed
- **Report Type:** Compliance
- **Key Metrics:** Carbon Emissions 48,200 tCO2e (−12% YoY), Renewable Energy 64%, Workforce Diversity 43% women, Board Independence 78%
- **Sections:** ESG branded header → Year highlights (4 KPIs with vs-target) → Environmental section (green left-border accent: emissions trend area chart, energy mix donut, 3 progress bars to 2030 targets: Net Zero 48K→0, Renewable 64%→100%, Water Reduction 18%→40%) → Social section (blue accent: workforce diversity grouped bars by seniority level, safety metrics mini-table, community investment callout) → Governance section (purple accent: board composition table, policy compliance grid, audit findings) → Overall ESG composite score (radial gauge) → Industry benchmark radar (vs sector average) → SDG alignment grid (8 SDG icons with short alignment descriptions)
- **Key Design:** Three visually distinct pillar sections with colored left-border accent strips (green/blue/purple); progress bars with 2030 target endpoint labeled; ESG composite score radial; SDG grid as a simple icon+text layout; section color themes carry through to badges and accent elements

---

## Domain Color Map

| Domain | Color |
|--------|-------|
| Finance / Accounting | emerald |
| Corporate / C-Suite | slate |
| Healthcare / Clinical | teal |
| Project Management | blue |
| Sales / CRM | orange |
| Marketing / Growth | purple |
| Operations / Logistics | amber |
| Human Resources | indigo |
| IT / Security | red |
| Corporate / ESG | green |
