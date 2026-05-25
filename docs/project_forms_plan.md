# Sample Forms — Complete Build Plan

## Project context

The forms showcase lives at `/showcase/forms`. Ten forms, each a standalone page at `/showcase/forms/[slug]`. The dynamic route at `app/showcase/forms/[slug]/page.tsx` auto-imports `components/forms/{slug}-form.tsx` and falls back to a "Coming soon" placeholder if the file doesn't exist.

---

## Canonical page structure

Every form page follows this exact structure (no custom wrapper components):

```tsx
"use client";
// react-hook-form with mode: "onTouched"
// UnsavedChangesBar: isDirty, isValid, isSaving, onSave (returns Promise<boolean>)
// handleSave: trigger() → 1400ms fake API → reset(getValues()) → return true/false

return (
  <>
    <div className="app-container mt-8 pb-24 lg:mt-10 lg:pb-28">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">

        <BackLink href="/showcase/forms">Forms Gallery</BackLink>

        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>…</PageTitle>
            <PageSubtitle>…</PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>

        {/* MainSection × N */}

      </div>
    </div>

    <UnsavedChangesBar
      isDirty={isDirty}
      isValid={isValid}
      isSaving={isSaving}
      onSave={handleSave}
      onReset={() => reset()}
      onInvalid={() => trigger()}
      className="lg:left-[calc(50%+7rem)]"
    />
  </>
);
```

For tabbed forms (`hasEditMode: true`), replace the MainSection stack with `PageMain > Tabs > TabList + TabContent × N`. Each `TabContent` already has `mt-8` built in — do NOT nest `PageContent` inside it.

```tsx
<PageMain>
  <Tabs defaultValue="…">
    <TabList>
      <TabTrigger value="tab1">Tab 1</TabTrigger>
    </TabList>
    <TabContent value="tab1">
      <div className="px-0 pb-6 flex flex-col gap-6">   {/* inner padding */}
        <MainSection>…</MainSection>
      </div>
    </TabContent>
  </Tabs>
</PageMain>
```

---

## Key imports

```tsx
// Layout
import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";

// Tabs (only for tabbed forms)
import { Tabs } from "@/ascendra-ui/components/tabs/tabs";
import { TabList } from "@/ascendra-ui/components/tabs/tab-list";
import { TabTrigger } from "@/ascendra-ui/components/tabs/tab-trigger";
import { TabContent } from "@/ascendra-ui/components/tabs/tab-content";

// BackLink — lives in design system, NOT in components/
import { BackLink } from "@/ascendra-ui/components/forms/back-link";

// UnsavedChangesBar
import { UnsavedChangesBar } from "@/ascendra-ui/components/common-ui/unsaved-changes-bar";

// Fields
import { Field, FieldGroup, FieldSet, FieldLegend, FieldLabel, FieldTitle, FieldHint } from "@/ascendra-ui/components/ui/field";
```

---

## Badge strategy rule

Count mandatory vs optional fields per form. Apply **one badge type only** — to the minority group:
- More mandatory fields → badge optional fields with `<FieldHint optional />`
- More optional fields → badge mandatory fields with `<FieldHint mandatory />`
- Errors always show via `<FieldHint error={errors.field as {message?: string}} />`

---

## Inline Textarea (missing from design system)

No Textarea component exists yet. Copy this inline `StyledTextarea` into each form that needs it:

```tsx
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}
function StyledTextarea({ className, invalid, ...props }: TextareaProps) {
  return (
    <div className={cn(
      "dark:bg-secondary flex w-full rounded-[.375rem] bg-white transition overflow-hidden",
      "ring-1 ring-(--color-umbra)/12 dark:ring-(--color-gray-1000)/88 dark:ring-inset",
      "shadow-[0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04)]",
      "dark:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24)]",
      "has-[textarea:not(:disabled):not(:focus)]:hover:ring-(--color-umbra)/24",
      "has-[textarea:disabled]:cursor-not-allowed has-[textarea:disabled]:opacity-40",
      invalid && "outline-2 outline-destructive outline-offset-1"
    )}>
      <textarea className={cn(
        "w-full resize-none bg-transparent px-3 py-2 text-sm leading-relaxed",
        "outline-none placeholder:text-gray-500 dark:placeholder:text-gray-700",
        "disabled:cursor-not-allowed", className
      )} {...props} />
    </div>
  );
}
```

---

## Collapsible section pattern

Used when a section can be enabled/disabled by a Switch in its header:

```tsx
const [sectionEnabled, setSectionEnabled] = useState(false);

<MainSection>
  <MainSectionHeader>
    <div className="flex items-center gap-2">
      <Switch checked={sectionEnabled} onClick={() => setSectionEnabled(p => !p)} />
      <MainSectionHeaderTitle>Section Title</MainSectionHeaderTitle>
    </div>
    <MainSectionHeaderSubtitle className="ml-8">
      Description of what enabling does
    </MainSectionHeaderSubtitle>
  </MainSectionHeader>
  <MainSectionPanel collapsed={!sectionEnabled}>
    <MainSectionPanelItem>…</MainSectionPanelItem>
  </MainSectionPanel>
  <MainSectionFooter>…footer text…</MainSectionFooter>
</MainSection>
```

---
---

# Form 1 — Contact & Inquiry

**Status: ✅ COMPLETE** (`components/forms/contact-inquiry-form.tsx`)

**File:** `components/forms/contact-inquiry-form.tsx`
**Route:** `/showcase/forms/contact-inquiry`
**Complexity:** Simple | **Domain:** General / Marketing

**Structure:** Single MainSection, no tabs.

**Section: "Send us a message"**
- *Panel Item 1 — Contact Details (2-col grid at sm)*
  - Full Name — Input, mandatory
  - Email Address — Input email, mandatory (pattern validation)
  - Phone Number — Input tel, optional
  - Company / Organization — Input, optional
- *Panel Item 2 — Your Message*
  - SimpleAlert: "Our team responds within 1 business day…"
  - Subject — Select (General/Technical/Sales/Partnership/Media/Other), mandatory
  - Inquiry Type — RadioGroup 2-col (Question/Feedback/Bug Report/Feature Request), optional
  - Message — StyledTextarea rows=5, mandatory min 20 chars
- *Panel Item 3 — Additional Information*
  - How did you hear about us? — Select (Search/Social/Word-of-mouth/Blog/Advertisement/Other), optional
  - Marketing consent — Checkbox, optional

**MainSectionFooter:** LuLock icon + privacy policy note with link

**Badge strategy:** 4 mandatory / 5 optional → show `mandatory` badge on mandatory fields

---
---

# Form 2 — User Profile Settings

**Status: 🔲 TODO** (`components/forms/user-profile-form.tsx`)

**File:** `components/forms/user-profile-form.tsx`
**Route:** `/showcase/forms/user-profile`
**Complexity:** Medium | **Domain:** SaaS / Product
**Special:** `hasEditMode: true` → uses Tabs

**Page title:** "User Profile"
**Page subtitle:** "Manage your personal information and account preferences."

**Structure:** PageMain > Tabs with 3 tabs: General / Preferences / Notifications

---

### Tab: General
**Section: Personal Information** (MainSection)
- *Panel Item 1 — Identity (2-col grid at sm)*
  - First Name — Input, mandatory
  - Last Name — Input, mandatory
  - Display Name — Input, optional (shown publicly)
  - Username — Input, optional, pattern validation (alphanumeric + hyphens)
- *Panel Item 2 — Contact*
  - Email Address — Input email, mandatory (disabled/read-only to show the pattern; add hint "Contact support to change your email")
  - Phone Number — Input tel, optional
- *Panel Item 3 — About*
  - Bio / About — StyledTextarea rows=3, optional, max 200 chars
  - Website — Input url, optional

**MainSectionFooter:** "Changes to your display name are visible to all team members immediately."

---

### Tab: Preferences
**Section: Regional Settings** (MainSection)
- *Panel Item 1 — Locale*
  - Language — Combobox (English / Spanish / French / German / Japanese / Portuguese), mandatory
  - Timezone — Combobox (IANA timezone list, e.g. America/New_York, Europe/London, etc.), mandatory
- *Panel Item 2 — Formatting*
  - Date format — Select (MM/DD/YYYY / DD/MM/YYYY / YYYY-MM-DD), mandatory
  - Time format — RadioGroup: 12-hour / 24-hour, mandatory

**Section: Appearance** (MainSection)
- *Panel Item 1*
  - Theme — RadioGroup: System / Light / Dark, mandatory (use `orientation="horizontal"` on Field)

---

### Tab: Notifications
**Section: Email Notifications** (MainSection)
- *Panel Item 1 — Activity (each is Switch + label, horizontal Field)*
  - New comment on my items — Switch
  - Mentions — Switch
  - Direct messages — Switch
  - Weekly digest — Switch

**Section: In-App Notifications** (MainSection)
- *Panel Item 1*
  - System alerts — Switch (forced on, disabled)
  - Product updates — Switch
  - Team activity — Switch

**MainSectionFooter:** "Notification settings apply across all devices linked to your account."

---

**Badge strategy:** Mandatory fields: First Name, Last Name, Email, Language, Timezone, Date format, Time format (7). Optional: most others. Show `optional` badge on optional fields.

**Form fields (react-hook-form):**
```ts
interface UserProfileValues {
  firstName: string; lastName: string; displayName: string; username: string;
  email: string; phone: string; bio: string; website: string;
  language: string; timezone: string; dateFormat: string; timeFormat: string;
  theme: string;
  notifyComment: boolean; notifyMention: boolean; notifyDM: boolean; notifyDigest: boolean;
  notifyProductUpdates: boolean; notifyTeamActivity: boolean;
}
```

---
---

# Form 3 — Support Ticket

**Status: 🔲 TODO** (`components/forms/support-ticket-form.tsx`)

**File:** `components/forms/support-ticket-form.tsx`
**Route:** `/showcase/forms/support-ticket`
**Complexity:** Medium | **Domain:** IT / SaaS
**Special:** Conditional section via Switch toggle

**Page title:** "Submit a Support Ticket"
**Page subtitle:** "Our support team will respond based on the priority level selected."

**Structure:** No tabs. Two MainSections, second one collapsible.

**Above sections — SimpleAlert:**
> "Response SLAs: Critical → 2 h · High → 8 h · Medium → 24 h · Low → 72 h"

---

### Section 1: Issue Details

- *Panel Item 1 — Summary*
  - Summary / Title — Input, mandatory (max 120 chars)
  - Product / Module — Select (Dashboard / Billing / API / Authentication / Reporting / Other), mandatory
- *Panel Item 2 — Priority & Type*
  - Priority — RadioGroup 2-col (Low / Medium / High / Critical), mandatory
  - Issue Type — Select (Bug / Feature Request / How-to Question / Performance / Other), mandatory
- *Panel Item 3 — Description*
  - Description — StyledTextarea rows=6, mandatory min 30 chars
  - Attach logs checkbox — Checkbox: "I have log files to attach (link them in the description)", optional
- *Panel Item 4 — Affected users*
  - Affected users — Select (Just me / My team / All users / Unknown), optional
  - Steps to reproduce — StyledTextarea rows=3, optional

**MainSectionFooter:** LuInfo + "Do not include passwords, personal data, or payment details in your ticket."

---

### Section 2: System Information *(collapsible — collapsed by default)*

Header has Switch + "Include system information" + subtitle "Helps our team diagnose environment-specific issues faster."

- *Panel Item 1 — Environment (2-col at sm)*
  - Operating System — Combobox (Windows 11 / macOS Sonoma / macOS Ventura / Ubuntu 22 / Other), optional
  - Browser — Select (Chrome / Firefox / Safari / Edge / Other), optional
  - App Version — Input, optional (placeholder "e.g. 2.4.1")
  - Screen resolution — Input, optional (placeholder "e.g. 1920×1080")
- *Panel Item 2 — Error Details*
  - Error code / message — Input, optional
  - First occurred — DatePicker, optional

**MainSectionFooter:** "System information is only visible to our support engineers."

---

**Badge strategy:** More mandatory fields → show `optional` badge on optional fields.

**Conditional state:**
```ts
const [includeSystemInfo, setIncludeSystemInfo] = useState(false);
// Section 2 Panel: collapsed={!includeSystemInfo}
```

**Form fields:**
```ts
interface SupportTicketValues {
  summary: string; product: string; priority: string; issueType: string;
  description: string; attachLogs: boolean; affectedUsers: string; stepsToReproduce: string;
  os: string; browser: string; appVersion: string; screenResolution: string;
  errorCode: string; firstOccurred: Date | null;
}
```

---
---

# Form 4 — Appointment Booking

**Status: 🔲 TODO** (`components/forms/appointment-booking-form.tsx`)

**File:** `components/forms/appointment-booking-form.tsx`
**Route:** `/showcase/forms/appointment-booking`
**Complexity:** Medium | **Domain:** Healthcare / Services

**Page title:** "Book an Appointment"
**Page subtitle:** "Choose a service, select a time, and confirm your details."

**Structure:** No tabs. Three MainSections — step-like visual flow.

---

### Section 1: Service Selection

- *Panel Item 1 — Service type*
  - Service — RadioGroup vertical (General Consultation / Specialist Review / Follow-up Visit / Urgent Care), mandatory
- *Panel Item 2 — Provider & Location (2-col at sm)*
  - Provider — Combobox (Dr. Sarah Chen / Dr. Marcus Webb / Dr. Aisha Patel / Dr. Leo Torres), mandatory
  - Location — Select (Main Clinic / North Branch / Telehealth), mandatory
- *Panel Item 3 — Notes for provider*
  - Reason for visit — StyledTextarea rows=3, optional, placeholder "Brief reason for your visit…"

**MainSectionFooter:** "Appointments can be cancelled up to 24 hours in advance without charge."

---

### Section 2: Date & Time

**Above panel — SimpleAlert:** "Available slots shown are for the selected provider and location."

- *Panel Item 1 — Date*
  - Appointment date — DatePicker, mandatory (disable past dates via `minDate={new Date()}`)
- *Panel Item 2 — Time slot*
  - Time slot — RadioGroup 2-col (9:00 AM / 10:30 AM / 12:00 PM / 2:00 PM / 3:30 PM / 5:00 PM), mandatory
  - Duration — Select (30 minutes / 45 minutes / 60 minutes), mandatory

---

### Section 3: Patient Details

- *Panel Item 1 — Personal (2-col at sm)*
  - Full Name — Input, mandatory
  - Date of Birth — DatePicker, mandatory
- *Panel Item 2 — Contact (2-col at sm)*
  - Phone — Input tel, mandatory
  - Email — Input email, optional
- *Panel Item 3 — Insurance (2-col at sm)*
  - Insurance Provider — Input, optional
  - Policy Number — Input, optional
- *Panel Item 4 — Additional*
  - Allergies or conditions — StyledTextarea rows=2, optional
  - I consent to the appointment terms — Checkbox, mandatory

**MainSectionFooter:** LuShieldCheck + "Your medical information is encrypted and never shared with third parties."

---

**Badge strategy:** More mandatory → show `optional` badge on optional fields.

**Form fields:**
```ts
interface AppointmentValues {
  service: string; provider: string; location: string; visitReason: string;
  appointmentDate: Date | null; timeSlot: string; duration: string;
  fullName: string; dateOfBirth: Date | null; phone: string; email: string;
  insuranceProvider: string; policyNumber: string; allergies: string; consent: boolean;
}
```

---
---

# Form 5 — Job Application

**Status: 🔲 TODO** (`components/forms/job-application-form.tsx`)

**File:** `components/forms/job-application-form.tsx`
**Route:** `/showcase/forms/job-application`
**Complexity:** Medium | **Domain:** HR / Recruitment

**Page title:** "Job Application"
**Page subtitle:** "Apply for a position at Ascendra. We review all applications within 5 business days."

**Structure:** No tabs. Three MainSections.

---

### Section 1: Personal Information

- *Panel Item 1 — Name (2-col at sm)*
  - First Name — Input, mandatory
  - Last Name — Input, mandatory
- *Panel Item 2 — Contact (2-col at sm)*
  - Email Address — Input email, mandatory
  - Phone Number — Input tel, optional
- *Panel Item 3 — Online presence (2-col at sm)*
  - LinkedIn URL — Input url, optional
  - Portfolio / Website — Input url, optional

---

### Section 2: Position Details

- *Panel Item 1 — Role (2-col at sm)*
  - Position — Combobox (Frontend Engineer / Backend Engineer / Product Designer / Product Manager / Data Analyst / DevOps Engineer / Other), mandatory
  - Department — Select (Engineering / Design / Product / Data / Operations / Sales), optional
- *Panel Item 2 — Availability & arrangement (2-col at sm)*
  - Available from — DatePicker, mandatory
  - Work arrangement — Select (Onsite / Remote / Hybrid), mandatory
- *Panel Item 3 — Compensation*
  - Expected salary — InputGroup (currency prefix "USD", Input type="number"), optional
  - Pay period — Select (Per year / Per month / Per hour) shown alongside salary, optional

---

### Section 3: Background & Cover Letter

- *Panel Item 1 — Experience (2-col at sm)*
  - Years of experience — Select (0–1 / 1–3 / 3–5 / 5–10 / 10+), mandatory
  - Highest education — Select (High School / Associate / Bachelor's / Master's / PhD / Other), mandatory
- *Panel Item 2 — Current situation*
  - Current employer — Input, optional
  - Notice period — Select (Immediately / 2 weeks / 1 month / 2 months / 3 months), optional
- *Panel Item 3 — Cover letter*
  - Cover letter — StyledTextarea rows=7, mandatory min 50 chars
- *Panel Item 4 — Declarations (two checkboxes stacked)*
  - "All information provided is accurate and complete." — Checkbox, mandatory
  - "I agree to the recruitment privacy policy." — Checkbox, mandatory

---

**Badge strategy:** More mandatory → show `optional` badge on optional fields.

**Form fields:**
```ts
interface JobApplicationValues {
  firstName: string; lastName: string; email: string; phone: string;
  linkedIn: string; portfolio: string;
  position: string; department: string; availableFrom: Date | null;
  workArrangement: string; expectedSalary: string; payPeriod: string;
  yearsExperience: string; education: string; currentEmployer: string; noticePeriod: string;
  coverLetter: string; declarationAccurate: boolean; declarationPrivacy: boolean;
}
```

---
---

# Form 6 — Financial Transaction

**Status: 🔲 TODO** (`components/forms/financial-transaction-form.tsx`)

**File:** `components/forms/financial-transaction-form.tsx`
**Route:** `/showcase/forms/financial-transaction`
**Complexity:** Medium | **Domain:** Finance / Banking
**Special:** Collapsible recurring section; horizontal-label layout for the main transaction fields

**Page title:** "New Transaction"
**Page subtitle:** "Record a financial transaction. Posted transactions are processed immediately."

**Structure:** No tabs. Two MainSections — main form + collapsible recurring schedule.

**Above sections — SimpleAlert:**
> "Posted transactions cannot be edited. Contact your administrator to void or reverse a posted entry."

---

### Section 1: Transaction Details

Use **horizontal Field layout** (`<Field orientation="horizontal">`) for all fields in this section — label on left, input on right. This mirrors accounting/banking UI conventions.

- *Panel Item 1 — Core fields (each as horizontal Field)*
  - Transaction date — DatePicker, mandatory
  - Transaction type — RadioGroup inline (Debit / Credit), mandatory
  - From account — TableLookup (account selector), mandatory
  - To account / Payee — Combobox (vendor/payee list), mandatory
  - Amount — InputGroup (currency prefix "USD", Input type="number"), mandatory
  - Category — Select (Operating Expenses / Travel / Payroll / Revenue / COGS / Other), mandatory
- *Panel Item 2 — Supporting details*
  - Reference number — Input, optional (placeholder "Invoice #, PO #…")
  - Memo / Description — Input, optional
  - Tax deductible — Checkbox, optional

**MainSectionFooter:** "All amounts in USD. Currency conversion is not supported in this view."

---

### Section 2: Recurring Schedule *(collapsible — collapsed by default)*

Header: Switch + "Set as recurring" + subtitle "Automatically repeat this transaction on a schedule."

- *Panel Item 1 — Frequency*
  - Frequency — RadioGroup 2-col (Daily / Weekly / Monthly / Quarterly), mandatory when visible
- *Panel Item 2 — Date range*
  - Active period — DateRangePicker, mandatory when visible
- *Panel Item 3 — End condition*
  - End condition — RadioGroup vertical (Never / On a specific date / After N occurrences), mandatory when visible
  - (Conditional text input for "After N occurrences" if that option is selected)

---

**Badge strategy:** Horizontal layout with few optional fields — show `optional` badge on optional fields.

**Conditional state:**
```ts
const [isRecurring, setIsRecurring] = useState(false);
```

**Form fields:**
```ts
interface TransactionValues {
  transactionDate: Date | null; transactionType: string;
  fromAccount: string; payee: string; amount: string; category: string;
  reference: string; memo: string; taxDeductible: boolean;
  frequency: string; activePeriod: { from: Date | null; to: Date | null };
  endCondition: string; occurrenceCount: string;
}
```

---
---

# Form 7 — Create Product Listing

**Status: 🔲 TODO** (`components/forms/create-product-form.tsx`)

**File:** `components/forms/create-product-form.tsx`
**Route:** `/showcase/forms/create-product`
**Complexity:** Complex | **Domain:** E-Commerce
**Special:** `hasEditMode: true` → uses Tabs; track-inventory toggle reveals conditional fields

**Page title:** "Create Product"
**Page subtitle:** "Add a new product to your catalog. Fill in all required fields before publishing."

**Structure:** PageMain > Tabs: Details / Pricing & Inventory / Shipping

---

### Tab: Details

**Section: Basic Information**
- *Panel Item 1 — Identification (2-col at sm)*
  - Product Name — Input, mandatory
  - SKU — Input, optional (placeholder "Auto-generated if left blank")
- *Panel Item 2 — Classification (2-col at sm)*
  - Category — Combobox (Clothing / Electronics / Home & Garden / Sports / Books / Other), mandatory
  - Sub-category — Select (populated based on category), optional
- *Panel Item 3 — Brand & Status (2-col at sm)*
  - Brand — Combobox, optional
  - Status — Select (Draft / Active / Archived), mandatory default "Draft"
- *Panel Item 4 — Description*
  - Description — StyledTextarea rows=5, mandatory min 20 chars
- *Panel Item 5 — Tags*
  - Tags — Combobox multi-select (type to add), optional

**SimpleAlert** above this section: "Products in Draft status are not visible to customers."

---

### Tab: Pricing & Inventory

**Section: Pricing**
- *Panel Item 1 — Price (2-col at sm)*
  - Price — InputGroup (currency "USD", Input type="number"), mandatory
  - Compare-at price — InputGroup (currency "USD"), optional (shown as strikethrough to customers)
- *Panel Item 2 — Cost*
  - Cost per item — InputGroup (currency "USD"), optional
  - Margin (read-only, calculated display) — not a form field, just a display

**Section: Inventory** (with collapsible via Switch)
- Header: Switch "Track inventory" + subtitle "Monitor stock levels and get low-stock alerts"
- *Panel Item 1 (shown when tracking enabled — collapsed={!trackInventory})*
  - Quantity on hand — Input type="number", mandatory when visible
  - Low-stock threshold — Input type="number", optional (placeholder "Alert when stock falls below…")
  - Allow backorders — Checkbox, optional
- *Panel Item 2 (always visible)*
  - Barcode (ISBN, UPC, GTIN) — Input, optional

---

### Tab: Shipping

**Section: Physical Details**
- *Panel Item 1 — Physical product toggle*
  - Is a physical product — Switch (true by default)
- *Panel Item 2 — Weight & Dimensions (shown when physical, 2-col grid)*
  - Weight — InputGroup (suffix "kg"), optional
  - Dimensions (L × W × H) — three Input fields in a row, optional
- *Panel Item 3 — Shipping class*
  - Shipping class — Select (Standard / Express / Fragile / Bulky / Digital), optional
  - Country of origin — Combobox (country list), optional
- *Panel Item 4 — Customs*
  - HS tariff code — Input, optional
  - Requires customs declaration — Checkbox, optional

---

**Badge strategy:** Several mandatory fields — show `optional` badge on optional fields.

**State:**
```ts
const [trackInventory, setTrackInventory] = useState(false);
const [isPhysical, setIsPhysical] = useState(true);
```

**Form fields (abbreviated):**
```ts
interface ProductValues {
  name: string; sku: string; category: string; subCategory: string;
  brand: string; status: string; description: string; tags: string[];
  price: string; compareAtPrice: string; costPerItem: string;
  quantity: string; lowStockThreshold: string; allowBackorders: boolean; barcode: string;
  isPhysical: boolean; weight: string; length: string; width: string; height: string;
  shippingClass: string; countryOfOrigin: string; hsTariffCode: string; requiresCustoms: boolean;
}
```

---
---

# Form 8 — Project Kickoff

**Status: 🔲 TODO** (`components/forms/project-kickoff-form.tsx`)

**File:** `components/forms/project-kickoff-form.tsx`
**Route:** `/showcase/forms/project-kickoff`
**Complexity:** Complex | **Domain:** Project Management

**Page title:** "New Project"
**Page subtitle:** "Set up a new project. You can update these details at any time."

**Structure:** No tabs. Three MainSections.

**Above sections — SimpleAlert:**
> "Projects are visible to all members of your organization by default. Change visibility in Section 1 to restrict access."

---

### Section 1: Project Basics

- *Panel Item 1 — Identity (2-col at sm)*
  - Project name — Input, mandatory
  - Project code — Input, optional (auto-suggested format e.g. "PRJ-001")
- *Panel Item 2 — Description*
  - Description — StyledTextarea rows=3, optional
- *Panel Item 3 — Classification (2-col at sm)*
  - Status — Select (Planning / Active / On Hold / Completed), mandatory (default "Planning")
  - Priority — Select (Low / Medium / High / Critical), mandatory (default "Medium")
- *Panel Item 4 — Client & visibility (2-col at sm)*
  - Client / Company — Combobox (list of clients), optional
  - Visibility — RadioGroup (Public / Private / Team only), mandatory

---

### Section 2: Team

- *Panel Item 1 — Ownership*
  - Project owner — Combobox (team member list), mandatory
- *Panel Item 2 — Members*
  - Team members — Combobox multi-select, optional (placeholder "Search and add team members…")
- *Panel Item 3 — External*
  - External stakeholders — Input, optional (placeholder "Email addresses, comma separated")

**MainSectionFooter:** "Team members will receive an email invitation when the project is created."

---

### Section 3: Timeline & Budget

- *Panel Item 1 — Timeline*
  - Project dates — DateRangePicker, mandatory
- *Panel Item 2 — Budget (2-col at sm)*
  - Total budget — InputGroup (currency "USD"), optional
  - Budget type — Select (Fixed price / Time & materials / Retainer), optional
- *Panel Item 3 — Billing*
  - Hourly rate — InputGroup (currency "USD", suffix "/hr"), optional
  - Billable — Checkbox "This project is billable to the client", optional
- *Panel Item 4 — Milestones (checklist)*
  - Discovery — Checkbox
  - Design — Checkbox
  - Development — Checkbox
  - Testing & QA — Checkbox
  - Launch — Checkbox

**MainSectionFooter:** LuInfo + "Budget alerts are sent when spending reaches 80% and 100% of the total."

---

**Badge strategy:** More optional than mandatory — show `mandatory` badge on mandatory fields.

**Form fields:**
```ts
interface ProjectValues {
  name: string; code: string; description: string;
  status: string; priority: string; client: string; visibility: string;
  owner: string; members: string[]; externalStakeholders: string;
  dateRange: { from: Date | null; to: Date | null };
  budget: string; budgetType: string; hourlyRate: string; billable: boolean;
  milestoneDiscovery: boolean; milestoneDesign: boolean; milestoneDev: boolean;
  milestoneTesting: boolean; milestoneLaunch: boolean;
}
```

---
---

# Form 9 — Search & Filter Panel

**Status: 🔲 TODO** (`components/forms/search-filter-form.tsx`)

**File:** `components/forms/search-filter-form.tsx`
**Route:** `/showcase/forms/search-filter`
**Complexity:** Simple | **Domain:** Universal Utility
**Special:** Uses Apply + Reset buttons instead of UnsavedChangesBar. No save state.

**Page title:** "Search & Filter"
**Page subtitle:** "Narrow down results using the filters below."

**Structure:** No tabs, no UnsavedChangesBar. Single MainSection. Action buttons live in the MainSectionFooter.

**Implementation note:** Use `react-hook-form` with `handleSubmit` (not UnsavedChangesBar). On "Apply" run `handleSubmit(onApply)`. On "Reset" run `reset()`. Show a result count `SimpleAlert` after applying.

---

### Section: Filters

- *Panel Item 1 — Keyword*
  - Search — Input, optional (placeholder "Search by name, ID, or keyword…", with search icon)
- *Panel Item 2 — Date range*
  - Date range — DateRangePicker, optional
- *Panel Item 3 — Categories*
  - Categories — Combobox multi-select, optional (placeholder "All categories")
- *Panel Item 4 — Status (checkboxes)*
  - Active — Checkbox (default checked)
  - Pending — Checkbox (default checked)
  - Inactive — Checkbox
  - Archived — Checkbox
- *Panel Item 5 — Sort by*
  - Sort order — RadioGroup (Newest first / Oldest first / Alphabetical A–Z / Most relevant), mandatory (default "Newest first")

**MainSectionFooter** (right-aligned buttons using flex justify-end):
```tsx
<MainSectionFooter className="justify-end gap-2">
  <Button variant="ghost" onClick={() => reset()}>Reset</Button>
  <Button onClick={handleSubmit(onApply)}>Apply filters</Button>
</MainSectionFooter>
```

**Result feedback:** After apply, show a `SimpleAlert` below the section: "Showing N results for your filters." (use local `useState` for result count simulation).

---

**No badge strategy needed** (all fields are optional, only Sort by has a default).

**Form fields:**
```ts
interface FilterValues {
  keyword: string;
  dateRange: { from: Date | null; to: Date | null };
  categories: string[];
  statusActive: boolean; statusPending: boolean; statusInactive: boolean; statusArchived: boolean;
  sortBy: string;
}
// defaultValues: { statusActive: true, statusPending: true, sortBy: "newest", ...rest: "" }
```

---
---

# Form 10 — Employee Onboarding Wizard

**Status: 🔲 TODO** (`components/forms/employee-onboarding-form.tsx`)

**File:** `components/forms/employee-onboarding-form.tsx`
**Route:** `/showcase/forms/employee-onboarding`
**Complexity:** Complex | **Domain:** HR / Enterprise
**Special:** 4-step wizard with step indicator. Each step is a MainSection. Only current step is fully visible; others are collapsed (no panel shown, just header as a step marker).

**Page title:** "Employee Onboarding"
**Page subtitle:** "Complete all four steps to set up the new employee's profile and access."

**Structure:** No tabs. 4 MainSections (one per step). UnsavedChangesBar only on final step completion.

**Step indicator** at the top (custom — render 4 numbered steps with status: complete / active / pending):

```tsx
// Simple step indicator above the sections
<div className="flex items-center gap-2">
  {steps.map((step, i) => (
    <div key={i} className="flex items-center gap-2">
      <button onClick={() => currentStep > i && setCurrentStep(i)} className={…}>
        {currentStep > i ? <LuCheck /> : i + 1}
      </button>
      <span>{step.label}</span>
      {i < steps.length - 1 && <div className="h-px w-8 bg-border" />}
    </div>
  ))}
</div>
```

**Navigation buttons** (Previous / Next / Submit) rendered between sections or in a fixed bottom area. Use UnsavedChangesBar only on step 4 submission.

**Per-step content:** Each MainSection shows its panel only when it's the current or a completed step. Use `collapsed` prop to hide panels of inactive steps. Completed steps show a summary line in the header.

---

### Step 1: Personal Information

**Section header:** "Step 1 — Personal Information"

- *Panel Item 1 — Full name (2-col at sm)*
  - First Name — Input, mandatory
  - Last Name — Input, mandatory
- *Panel Item 2 — Identity (2-col at sm)*
  - Date of Birth — DatePicker, mandatory
  - National ID / SSN — Input, mandatory (masked input hint in placeholder)
- *Panel Item 3 — Contact (2-col at sm)*
  - Personal Email — Input email, mandatory
  - Personal Phone — Input tel, mandatory
- *Panel Item 4 — Address*
  - Street Address — Input, mandatory
  - City — Input, mandatory
  - State / Province — Combobox, mandatory
  - ZIP / Postal Code — Input, mandatory
  - Country — Combobox, mandatory

---

### Step 2: Employment Details

**Section header:** "Step 2 — Employment Details"

- *Panel Item 1 — Role (2-col at sm)*
  - Job Title — Input, mandatory
  - Department — Combobox (Engineering / Product / Design / HR / Finance / Operations / Sales), mandatory
- *Panel Item 2 — Reporting (2-col at sm)*
  - Manager — Combobox (employee list), mandatory
  - Office location — Select (HQ / Remote / Hybrid / New York / London / Singapore), mandatory
- *Panel Item 3 — Employment terms (2-col at sm)*
  - Start Date — DatePicker, mandatory
  - Employment Type — Select (Full-time / Part-time / Contract / Intern), mandatory
- *Panel Item 4 — Work details*
  - Work email (generated/assigned) — Input, optional (read-only style, auto-populated)
  - Employee ID — Input, optional (auto-assigned)

**SimpleAlert:** "A welcome email with login instructions will be sent to the personal email on the start date."

---

### Step 3: Compensation & Benefits

**Section header:** "Step 3 — Compensation & Benefits"

- *Panel Item 1 — Salary (2-col at sm)*
  - Base Salary — InputGroup (currency "USD", Input type="number"), mandatory
  - Pay frequency — Select (Weekly / Bi-weekly / Semi-monthly / Monthly), mandatory
- *Panel Item 2 — Equity & Bonus*
  - Eligible for bonus — Switch, optional
  - Equity grant (RSUs) — Input type="number" suffix "shares", optional
- *Panel Item 3 — Benefits*
  - Health insurance — Checkbox: "Enroll in health insurance plan"
  - Dental & Vision — Checkbox: "Enroll in dental and vision"
  - 401(k) enrollment — Checkbox: "Enroll in 401(k) retirement plan"
  - Contribution % — Input type="number" suffix "%", optional (shown when 401k checked)

---

### Step 4: IT & System Access

**Section header:** "Step 4 — IT & System Access"

- *Panel Item 1 — Hardware (2-col at sm)*
  - Laptop type — Select (MacBook Pro 14" / MacBook Pro 16" / Dell XPS / ThinkPad / Other), mandatory
  - Operating system — RadioGroup (macOS / Windows / Linux), mandatory
- *Panel Item 2 — Software & Tools*
  - Required software — Combobox multi-select (Slack / Notion / Figma / GitHub / Jira / VS Code / Other), optional
  - License tier — Select (Standard / Professional / Enterprise), mandatory
- *Panel Item 3 — Access & Permissions*
  - Access level — Select (Viewer / Contributor / Admin), mandatory
  - VPN access — Switch, optional
  - Admin console access — Switch, optional (disabled unless Access level = Admin)
- *Panel Item 4 — Security*
  - Send MFA enrollment email — Checkbox (default checked), optional
  - Hardware security key required — Checkbox, optional

**MainSectionFooter:** LuShieldCheck + "IT provisioning typically takes 1–2 business days before the start date."

---

**Badge strategy:** Many mandatory fields across all steps — show `optional` badge on optional fields.

**State:**
```ts
const [currentStep, setCurrentStep] = useState(0); // 0-indexed
const steps = ['Personal Information', 'Employment Details', 'Compensation & Benefits', 'IT & System Access'];
```

**Each section uses:** `<MainSectionPanel collapsed={currentStep !== stepIndex}>`

**Navigation:** Previous button (disabled on step 0) calls `setCurrentStep(s => s - 1)`. Next button calls `trigger(stepFields[currentStep])` then `setCurrentStep(s => s + 1)`. On step 3, UnsavedChangesBar visible and handleSave submits.

**Form fields:**
```ts
interface OnboardingValues {
  // Step 1
  firstName: string; lastName: string; dateOfBirth: Date | null; nationalId: string;
  personalEmail: string; personalPhone: string;
  street: string; city: string; state: string; zip: string; country: string;
  // Step 2
  jobTitle: string; department: string; manager: string; officeLocation: string;
  startDate: Date | null; employmentType: string; workEmail: string; employeeId: string;
  // Step 3
  baseSalary: string; payFrequency: string; bonusEligible: boolean; equityGrant: string;
  enrollHealth: boolean; enrollDental: boolean; enroll401k: boolean; contribution401k: string;
  // Step 4
  laptopType: string; operatingSystem: string; software: string[]; licenseTier: string;
  accessLevel: string; vpnAccess: boolean; adminConsole: boolean;
  mfaEnrollment: boolean; hardwareKey: boolean;
}
```

---

## Build order recommendation

1. ✅ Contact & Inquiry (done)
2. 🔲 Support Ticket (simpler — no tabs, one collapsible section)
3. 🔲 User Profile Settings (introduces tabs)
4. 🔲 Financial Transaction (horizontal layout + collapsible + TableLookup)
5. 🔲 Job Application (multi-section, wide field coverage)
6. 🔲 Appointment Booking (DatePicker heavy)
7. 🔲 Project Kickoff (complex multi-section)
8. 🔲 Create Product (tabbed + multiple toggles)
9. 🔲 Search & Filter Panel (no UnsavedChangesBar, different pattern)
10. 🔲 Employee Onboarding Wizard (most complex — wizard state)
