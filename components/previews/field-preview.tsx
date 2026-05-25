"use client";

import { useState } from "react";
import { type DateRange } from "react-day-picker";

import { ComponentPreview } from "../component-preview";
import { PropsTable } from "../props-table";
import { SectionHeader } from "../section-header";

import {
  Field,
  FieldGroup,
  FieldHint,
  FieldInfo,
  FieldLabel,
  FieldLabelGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/ascendra-ui/components/ui/field";

import { DatePicker } from "@/ascendra-ui/components/date/date-picker";
import { DateRangePicker } from "@/ascendra-ui/components/date/date-range-picker";
import { Checkbox } from "@/ascendra-ui/components/ui/checkbox";
import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/ascendra-ui/components/ui/combobox";
import { Input } from "@/ascendra-ui/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/ascendra-ui/components/ui/input-group";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/ascendra-ui/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ascendra-ui/components/ui/select";
import { Switch } from "@/ascendra-ui/components/ui/switch";

import { registry } from "@/lib/registry";
import { LuGlobe } from "react-icons/lu";

const meta = registry["field"];

const countries = ["Pakistan", "United Kingdom", "United States", "Germany", "France"];

// ─── Doc content ──────────────────────────────────────────────────────────────

export function FieldDocContent() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [comboValue, setComboValue] = useState<string | null>(null);

  return (
    <div className="space-y-10">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <ComponentPreview
        align="start"
        code={`import {
  Field, FieldLabel, FieldLabelGroup, FieldInfo, FieldHint,
} from "@/ascendra-ui/components/ui/field";
import { Input } from "@/ascendra-ui/components/ui/input";

// Simple — label only
<Field>
  <FieldLabel htmlFor="email">Email address</FieldLabel>
  <Input id="email" placeholder="you@example.com" full />
  <FieldHint description="We will never share your email." optional />
</Field>

// With label info
<Field>
  <FieldLabelGroup>
    <FieldLabel htmlFor="company">Company</FieldLabel>
    <FieldInfo>Shown on invoices and receipts</FieldInfo>
  </FieldLabelGroup>
  <Input id="company" placeholder="Acme Inc." full />
  <FieldHint mandatory />
</Field>`}
      >
        <div className="w-72 space-y-5">
          <Field>
            <FieldLabel htmlFor="hero-email">Email address</FieldLabel>
            <Input id="hero-email" placeholder="you@example.com" full />
            <FieldHint description="We will never share your email." optional />
          </Field>
          <Field>
            <FieldLabelGroup>
              <FieldLabel htmlFor="hero-company">Company</FieldLabel>
              <FieldInfo>Shown on invoices and receipts</FieldInfo>
            </FieldLabelGroup>
            <Input id="hero-company" placeholder="Acme Inc." full />
            <FieldHint mandatory />
          </Field>
        </div>
      </ComponentPreview>

      {/* ── Label variants ───────────────────────────────────────────────── */}
      <div className="space-y-8">
        <SectionHeader>Label</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">FieldLabel</h3>
          <p className="text-xs text-muted-foreground">
            Associates a label with a control via{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">htmlFor</code>.
            Inherits disabled / invalid tinting from the parent{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">Field</code>.
          </p>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabel htmlFor="username">Username</FieldLabel>
  <Input id="username" placeholder="acme" full />
  <FieldHint />
</Field>`}
          >
            <div className="w-64">
              <Field>
                <FieldLabel htmlFor="lv-username">Username</FieldLabel>
                <Input id="lv-username" placeholder="acme" full />
                <FieldHint />
              </Field>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            FieldLabelGroup + FieldInfo
          </h3>
          <p className="text-xs text-muted-foreground">
            Wrap{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">FieldLabel</code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">FieldInfo</code>{" "}
            in a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">FieldLabelGroup</code>{" "}
            to add a secondary description line directly beneath the label — before the
            control.
          </p>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabelGroup>
    <FieldLabel htmlFor="subdomain">Subdomain</FieldLabel>
    <FieldInfo>Changing this will break existing links</FieldInfo>
  </FieldLabelGroup>
  <Input id="subdomain" placeholder="acme" full />
  <FieldHint description="Must be lowercase, letters and hyphens only." />
</Field>`}
          >
            <div className="w-72">
              <Field>
                <FieldLabelGroup>
                  <FieldLabel htmlFor="lv-subdomain">Subdomain</FieldLabel>
                  <FieldInfo>Changing this will break existing links</FieldInfo>
                </FieldLabelGroup>
                <Input id="lv-subdomain" placeholder="acme" full />
                <FieldHint description="Must be lowercase, letters and hyphens only." />
              </Field>
            </div>
          </ComponentPreview>
        </div>
      </div>

      {/* ── FieldHint variants ───────────────────────────────────────────── */}
      <div className="space-y-8">
        <SectionHeader>FieldHint</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Description</h3>
          <p className="text-xs text-muted-foreground">
            Pass a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">description</code>{" "}
            string for helper text below the control.
          </p>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabel htmlFor="pw">Password</FieldLabel>
  <Input id="pw" type="password" placeholder="••••••••" full />
  <FieldHint description="Must be at least 8 characters." />
</Field>`}
          >
            <div className="w-64">
              <Field>
                <FieldLabel htmlFor="fh-pw">Password</FieldLabel>
                <Input id="fh-pw" type="password" placeholder="••••••••" full />
                <FieldHint description="Must be at least 8 characters." />
              </Field>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Error</h3>
          <p className="text-xs text-muted-foreground">
            Pass an{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">error</code>{" "}
            object to replace the description with a destructive message. Pair with{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">aria-invalid</code>{" "}
            on the control.
          </p>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabel htmlFor="email-err">Email</FieldLabel>
  <Input
    id="email-err"
    aria-invalid={true}
    defaultValue="invalid@"
    full
  />
  <FieldHint error={{ message: "Enter a valid email address." }} />
</Field>`}
          >
            <div className="w-64">
              <Field>
                <FieldLabel htmlFor="fh-email-err">Email</FieldLabel>
                <Input
                  id="fh-email-err"
                  aria-invalid={true}
                  defaultValue="invalid@"
                  full
                />
                <FieldHint error={{ message: "Enter a valid email address." }} />
              </Field>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            Mandatory &amp; Optional badges
          </h3>
          <p className="text-xs text-muted-foreground">
            Pass{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">mandatory</code>{" "}
            or{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">optional</code>{" "}
            to show a badge aligned to the trailing edge of the hint row. They can
            combine with a description or error.
          </p>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabel htmlFor="fullname">Full name</FieldLabel>
  <Input id="fullname" placeholder="Jane Doe" full />
  <FieldHint description="As it appears on your ID." mandatory />
</Field>

<Field>
  <FieldLabel htmlFor="nickname">Nickname</FieldLabel>
  <Input id="nickname" placeholder="ace" full />
  <FieldHint optional />
</Field>`}
          >
            <div className="w-72 space-y-5">
              <Field>
                <FieldLabel htmlFor="fh-fullname">Full name</FieldLabel>
                <Input id="fh-fullname" placeholder="Jane Doe" full />
                <FieldHint description="As it appears on your ID." mandatory />
              </Field>
              <Field>
                <FieldLabel htmlFor="fh-nickname">Nickname</FieldLabel>
                <Input id="fh-nickname" placeholder="ace" full />
                <FieldHint optional />
              </Field>
            </div>
          </ComponentPreview>
        </div>
      </div>

      {/* ── Forms & Input controls ───────────────────────────────────────── */}
      <div className="space-y-8">
        <SectionHeader>Forms &amp; Input</SectionHeader>

        {/* Input */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Input</h3>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabel htmlFor="city">City</FieldLabel>
  <Input id="city" placeholder="Karachi" full />
  <FieldHint mandatory />
</Field>`}
          >
            <div className="w-64">
              <Field>
                <FieldLabel htmlFor="ctrl-city">City</FieldLabel>
                <Input id="ctrl-city" placeholder="Karachi" full />
                <FieldHint mandatory />
              </Field>
            </div>
          </ComponentPreview>
        </div>

        {/* InputGroup — icon prefix */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">InputGroup</h3>
          <p className="text-xs text-muted-foreground">
            Wrap{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">InputGroupInput</code>{" "}
            in an{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">InputGroup</code>{" "}
            as the control inside{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">Field</code>.
          </p>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabel htmlFor="website">Website</FieldLabel>
  <InputGroup>
    <InputGroupAddon align="inline-start">
      <LuGlobe className="size-4" />
      <InputGroupText>https://</InputGroupText>
    </InputGroupAddon>
    <InputGroupInput id="website" placeholder="example.com" />
  </InputGroup>
  <FieldHint description="Include the full URL." optional />
</Field>`}
          >
            <div className="w-72">
              <Field>
                <FieldLabel htmlFor="ctrl-website">Website</FieldLabel>
                <InputGroup>
                  <InputGroupAddon align="inline-start">
                    <LuGlobe className="size-4" />
                    <InputGroupText>https://</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput id="ctrl-website" placeholder="example.com" />
                </InputGroup>
                <FieldHint description="Include the full URL." optional />
              </Field>
            </div>
          </ComponentPreview>
        </div>

        {/* Textarea */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Textarea</h3>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabelGroup>
    <FieldLabel htmlFor="notes">Notes</FieldLabel>
    <FieldInfo>Visible to client on the invoice</FieldInfo>
  </FieldLabelGroup>
  <InputGroup>
    <InputGroupTextarea id="notes" placeholder="Add a note..." rows={3} />
  </InputGroup>
  <FieldHint optional />
</Field>`}
          >
            <div className="w-72">
              <Field>
                <FieldLabelGroup>
                  <FieldLabel htmlFor="ctrl-notes">Notes</FieldLabel>
                  <FieldInfo>Visible to client on the invoice</FieldInfo>
                </FieldLabelGroup>
                <InputGroup>
                  <InputGroupTextarea
                    id="ctrl-notes"
                    placeholder="Add a note..."
                    rows={3}
                  />
                </InputGroup>
                <FieldHint optional />
              </Field>
            </div>
          </ComponentPreview>
        </div>

        {/* Select */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Select</h3>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabel htmlFor="status">Status</FieldLabel>
  <Select>
    <SelectTrigger id="status">
      <SelectValue placeholder="Select status" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="active">Active</SelectItem>
      <SelectItem value="inactive">Inactive</SelectItem>
      <SelectItem value="pending">Pending</SelectItem>
    </SelectContent>
  </Select>
  <FieldHint mandatory />
</Field>`}
          >
            <div className="w-64">
              <Field>
                <FieldLabel htmlFor="ctrl-status">Status</FieldLabel>
                <Select>
                  <SelectTrigger id="ctrl-status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
                <FieldHint mandatory />
              </Field>
            </div>
          </ComponentPreview>
        </div>

        {/* Combobox */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Combobox</h3>
          <ComponentPreview
            align="start"
            code={`const [country, setCountry] = useState<string | null>(null);

<Field>
  <FieldLabelGroup>
    <FieldLabel htmlFor="country">Country</FieldLabel>
    <FieldInfo>Used for tax and compliance rules</FieldInfo>
  </FieldLabelGroup>
  <Combobox
    items={countries}
    value={country}
    onValueChange={(v) => setCountry(v as string)}
  >
    <ComboboxInput id="country" placeholder="Search country..." />
    <ComboboxContent>
      <ComboboxList>
        <ComboboxEmpty>No results.</ComboboxEmpty>
        <ComboboxCollection>
          {(c: string) => <ComboboxItem key={c} value={c}>{c}</ComboboxItem>}
        </ComboboxCollection>
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
  <FieldHint mandatory />
</Field>`}
          >
            <div className="w-64">
              <Field>
                <FieldLabelGroup>
                  <FieldLabel htmlFor="ctrl-country">Country</FieldLabel>
                  <FieldInfo>Used for tax and compliance rules</FieldInfo>
                </FieldLabelGroup>
                <Combobox
                  items={countries}
                  value={comboValue}
                  onValueChange={(v) => setComboValue(v as string)}
                >
                  <ComboboxInput
                    id="ctrl-country"
                    placeholder="Search country..."
                  />
                  <ComboboxContent>
                    <ComboboxList>
                      <ComboboxEmpty>No results.</ComboboxEmpty>
                      <ComboboxCollection>
                        {(c: string) => (
                          <ComboboxItem key={c} value={c}>
                            {c}
                          </ComboboxItem>
                        )}
                      </ComboboxCollection>
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
                <FieldHint mandatory />
              </Field>
            </div>
          </ComponentPreview>
        </div>
      </div>

      {/* ── Choice controls ──────────────────────────────────────────────── */}
      <div className="space-y-8">
        <SectionHeader>Choice Controls</SectionHeader>

        {/* Checkbox */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Checkbox</h3>
          <p className="text-xs text-muted-foreground">
            Use{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              orientation=&quot;horizontal&quot;
            </code>{" "}
            so the checkbox and label sit side by side.
          </p>
          <ComponentPreview
            align="start"
            code={`<Field orientation="horizontal">
  <Checkbox id="terms" />
  <FieldLabel htmlFor="terms">
    I agree to the Terms &amp; Conditions
  </FieldLabel>
</Field>

<Field orientation="horizontal">
  <Checkbox id="marketing" defaultChecked />
  <FieldLabel htmlFor="marketing">Receive marketing emails</FieldLabel>
</Field>`}
          >
            <div className="w-72 space-y-3">
              <Field orientation="horizontal">
                <Checkbox id="ctrl-terms" />
                <FieldLabel htmlFor="ctrl-terms">
                  I agree to the Terms &amp; Conditions
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="ctrl-marketing" defaultChecked />
                <FieldLabel htmlFor="ctrl-marketing">
                  Receive marketing emails
                </FieldLabel>
              </Field>
            </div>
          </ComponentPreview>
        </div>

        {/* RadioGroup */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">RadioGroup</h3>
          <p className="text-xs text-muted-foreground">
            Wrap radio items in a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">FieldSet</code>{" "}
            +{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">FieldLegend</code>{" "}
            for proper accessibility grouping.
          </p>
          <ComponentPreview
            align="start"
            code={`<FieldSet>
  <FieldLegend>Billing cycle</FieldLegend>
  <RadioGroup defaultValue="monthly">
    <Field orientation="horizontal">
      <RadioGroupItem id="monthly" value="monthly" className="mb-1" />
      <FieldLabel htmlFor="monthly">Monthly</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem id="yearly" value="yearly" className="mb-1" />
      <FieldLabel htmlFor="yearly">Yearly</FieldLabel>
    </Field>
  </RadioGroup>
  <FieldHint description="Yearly billing saves 20%." />
</FieldSet>`}
          >
            <div className="w-56">
              <FieldSet>
                <FieldLegend>Billing cycle</FieldLegend>
                <RadioGroup defaultValue="monthly">
                  <Field orientation="horizontal">
                    <RadioGroupItem
                      id="ctrl-monthly"
                      value="monthly"
                      className="mb-1"
                    />
                    <FieldLabel htmlFor="ctrl-monthly">Monthly</FieldLabel>
                  </Field>
                  <Field orientation="horizontal">
                    <RadioGroupItem
                      id="ctrl-yearly"
                      value="yearly"
                      className="mb-1"
                    />
                    <FieldLabel htmlFor="ctrl-yearly">Yearly</FieldLabel>
                  </Field>
                </RadioGroup>
                <FieldHint description="Yearly billing saves 20%." />
              </FieldSet>
            </div>
          </ComponentPreview>
        </div>

        {/* Switch */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Switch</h3>
          <p className="text-xs text-muted-foreground">
            Use{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              orientation=&quot;horizontal&quot;
            </code>{" "}
            and swap label order so the switch sits on the trailing edge.
          </p>
          <ComponentPreview
            align="start"
            code={`<Field orientation="horizontal">
  <FieldLabel htmlFor="notifs">Email notifications</FieldLabel>
  <Switch id="notifs" defaultChecked />
</Field>

<Field orientation="horizontal">
  <FieldLabel htmlFor="sms">SMS reminders</FieldLabel>
  <Switch id="sms" />
</Field>`}
          >
            <div className="w-64 space-y-3">
              <Field orientation="horizontal">
                <FieldLabel htmlFor="ctrl-notifs">
                  Email notifications
                </FieldLabel>
                <Switch id="ctrl-notifs" defaultChecked />
              </Field>
              <Field orientation="horizontal">
                <FieldLabel htmlFor="ctrl-sms">SMS reminders</FieldLabel>
                <Switch id="ctrl-sms" />
              </Field>
            </div>
          </ComponentPreview>
        </div>
      </div>

      {/* ── Date & Time ──────────────────────────────────────────────────── */}
      <div className="space-y-8">
        <SectionHeader>Date &amp; Time</SectionHeader>

        {/* DatePicker */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">DatePicker</h3>
          <ComponentPreview
            align="start"
            code={`const [dob, setDob] = useState<Date | undefined>(undefined);

<Field>
  <FieldLabel htmlFor="dob">Date of birth</FieldLabel>
  <DatePicker
    value={dob}
    onChange={setDob}
    fromYear={1950}
    toYear={2010}
  />
  <FieldHint mandatory />
</Field>`}
          >
            <div className="w-64">
              <Field>
                <FieldLabel htmlFor="ctrl-dob">Date of birth</FieldLabel>
                <DatePicker
                  value={date}
                  onChange={setDate}
                  fromYear={1950}
                  toYear={2010}
                />
                <FieldHint mandatory />
              </Field>
            </div>
          </ComponentPreview>
        </div>

        {/* DateRangePicker */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            DateRangePicker
          </h3>
          <ComponentPreview
            align="start"
            code={`const [range, setRange] = useState<DateRange | undefined>(undefined);

<Field>
  <FieldLabelGroup>
    <FieldLabel htmlFor="period">Reporting period</FieldLabel>
    <FieldInfo>Inclusive of start and end dates</FieldInfo>
  </FieldLabelGroup>
  <DateRangePicker value={range} onChange={setRange} />
  <FieldHint description="Select up to 90 days." optional />
</Field>`}
          >
            <div className="w-72">
              <Field>
                <FieldLabelGroup>
                  <FieldLabel htmlFor="ctrl-period">
                    Reporting period
                  </FieldLabel>
                  <FieldInfo>Inclusive of start and end dates</FieldInfo>
                </FieldLabelGroup>
                <DateRangePicker value={range} onChange={setRange} />
                <FieldHint description="Select up to 90 days." optional />
              </Field>
            </div>
          </ComponentPreview>
        </div>
      </div>

      {/* ── Field Grouping ───────────────────────────────────────────────── */}
      <div className="space-y-8">
        <SectionHeader>Grouping</SectionHeader>

        {/* FieldGroup */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">FieldGroup</h3>
          <p className="text-xs text-muted-foreground">
            Stack multiple fields with consistent vertical spacing. Each field
            gets its own{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              FieldHint
            </code>{" "}
            row.
          </p>
          <ComponentPreview
            align="start"
            code={`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="first">First name</FieldLabel>
    <Input id="first" placeholder="Jane" full />
    <FieldHint mandatory />
  </Field>
  <Field>
    <FieldLabel htmlFor="last">Last name</FieldLabel>
    <Input id="last" placeholder="Doe" full />
    <FieldHint mandatory />
  </Field>
  <Field>
    <FieldLabel htmlFor="email-group">Email</FieldLabel>
    <Input id="email-group" type="email" placeholder="you@example.com" full />
    <FieldHint optional />
  </Field>
</FieldGroup>`}
          >
            <div className="w-72">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="grp-first">First name</FieldLabel>
                  <Input id="grp-first" placeholder="Jane" full />
                  <FieldHint mandatory />
                </Field>
                <Field>
                  <FieldLabel htmlFor="grp-last">Last name</FieldLabel>
                  <Input id="grp-last" placeholder="Doe" full />
                  <FieldHint mandatory />
                </Field>
                <Field>
                  <FieldLabel htmlFor="grp-email">Email</FieldLabel>
                  <Input
                    id="grp-email"
                    type="email"
                    placeholder="you@example.com"
                    full
                  />
                  <FieldHint optional />
                </Field>
              </FieldGroup>
            </div>
          </ComponentPreview>
        </div>

        {/* FieldSet + FieldLegend + FieldSeparator */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            FieldSet + FieldLegend
          </h3>
          <p className="text-xs text-muted-foreground">
            Use{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              FieldSet
            </code>{" "}
            with a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              FieldLegend
            </code>{" "}
            to semantically group related fields. Add a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              FieldSeparator
            </code>{" "}
            between distinct sub-groups.
          </p>
          <ComponentPreview
            align="start"
            code={`<FieldSet>
  <FieldLegend>Billing address</FieldLegend>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="addr-line1">Address line 1</FieldLabel>
      <Input id="addr-line1" placeholder="123 Main St" full />
      <FieldHint mandatory />
    </Field>
    <Field>
      <FieldLabel htmlFor="addr-line2">Address line 2</FieldLabel>
      <Input id="addr-line2" placeholder="Suite 4B" full />
      <FieldHint optional />
    </Field>
    <FieldSeparator />
    <Field>
      <FieldLabel htmlFor="addr-city">City</FieldLabel>
      <Input id="addr-city" placeholder="Karachi" full />
      <FieldHint mandatory />
    </Field>
    <Field>
      <FieldLabel htmlFor="addr-zip">Postal code</FieldLabel>
      <Input id="addr-zip" placeholder="75500" full />
      <FieldHint mandatory />
    </Field>
  </FieldGroup>
</FieldSet>`}
          >
            <div className="w-72">
              <FieldSet>
                <FieldLegend>Billing address</FieldLegend>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="fs-line1">Address line 1</FieldLabel>
                    <Input id="fs-line1" placeholder="123 Main St" full />
                    <FieldHint mandatory />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="fs-line2">Address line 2</FieldLabel>
                    <Input id="fs-line2" placeholder="Suite 4B" full />
                    <FieldHint optional />
                  </Field>
                  <FieldSeparator />
                  <Field>
                    <FieldLabel htmlFor="fs-city">City</FieldLabel>
                    <Input id="fs-city" placeholder="Karachi" full />
                    <FieldHint mandatory />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="fs-zip">Postal code</FieldLabel>
                    <Input id="fs-zip" placeholder="75500" full />
                    <FieldHint mandatory />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </ComponentPreview>
        </div>
      </div>

      {/* ── Props ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <SectionHeader>Props</SectionHeader>
        <PropsTable props={meta.props ?? []} />
      </div>
    </div>
  );
}
