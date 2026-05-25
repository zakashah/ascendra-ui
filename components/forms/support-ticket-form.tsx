"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LuInfo } from "react-icons/lu";

import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { MainSectionFooterIcon } from "@/ascendra-ui/components/layout/main-section-footer-icon";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { PageContent } from "@/ascendra-ui/components/layout/page-content";
import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageWrapper } from "@/ascendra-ui/components/layout/page-wrapper";

import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";
import { UnsavedChangesBar } from "@/ascendra-ui/components/common-ui/unsaved-changes-bar";
import { BackLink } from "@/ascendra-ui/components/forms/back-link";
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
import {
  Field,
  FieldGroup,
  FieldHint,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/ascendra-ui/components/ui/field";
import { DatePicker } from "@/ascendra-ui/components/date/date-picker";
import { Input } from "@/ascendra-ui/components/ui/input";
import {
  InputGroup,
  InputGroupTextarea,
} from "@/ascendra-ui/components/ui/input-group";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/ascendra-ui/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ascendra-ui/components/ui/select";
import { Switch } from "@/ascendra-ui/components/ui/switch";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface SupportTicketValues {
  summary: string;
  product: string;
  priority: string;
  issueType: string;
  description: string;
  attachLogs: boolean;
  affectedUsers: string;
  stepsToReproduce: string;
  os: string;
  browser: string;
  appVersion: string;
  screenResolution: string;
  errorCode: string;
  firstOccurred: Date | undefined;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const PRODUCTS = [
  { value: "dashboard", label: "Dashboard" },
  { value: "billing", label: "Billing" },
  { value: "api", label: "API" },
  { value: "authentication", label: "Authentication" },
  { value: "reporting", label: "Reporting" },
  { value: "other", label: "Other" },
];

const PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "critical", label: "Critical" },
];

const ISSUE_TYPES = [
  { value: "bug", label: "Bug" },
  { value: "feature-request", label: "Feature Request" },
  { value: "how-to", label: "How-to Question" },
  { value: "performance", label: "Performance" },
  { value: "other", label: "Other" },
];

const AFFECTED_USERS = [
  { value: "just-me", label: "Just me" },
  { value: "my-team", label: "My team" },
  { value: "all-users", label: "All users" },
  { value: "unknown", label: "Unknown" },
];

const OS_OPTIONS = [
  "Windows 11",
  "macOS Sonoma",
  "macOS Ventura",
  "Ubuntu 22",
  "Other",
];

const BROWSERS = [
  { value: "chrome", label: "Chrome" },
  { value: "firefox", label: "Firefox" },
  { value: "safari", label: "Safari" },
  { value: "edge", label: "Edge" },
  { value: "other", label: "Other" },
];

// ─── Form ──────────────────────────────────────────────────────────────────────

export default function SupportTicketForm() {
  const [isSaving, setIsSaving] = useState(false);
  const [includeSystemInfo, setIncludeSystemInfo] = useState(false);

  const {
    control,
    trigger,
    reset,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useForm<SupportTicketValues>({
    defaultValues: {
      summary: "",
      product: "",
      priority: "",
      issueType: "",
      description: "",
      attachLogs: false,
      affectedUsers: "",
      stepsToReproduce: "",
      os: "",
      browser: "",
      appVersion: "",
      screenResolution: "",
      errorCode: "",
      firstOccurred: undefined,
    },
    mode: "onTouched",
  });

  async function handleSave(): Promise<boolean> {
    const ok = await trigger();
    if (!ok) return false;
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 1400));
    setIsSaving(false);
    reset(getValues());
    return true;
  }

  return (
    <>
      <div className="app-container mt-8 pb-24 lg:mt-10 lg:pb-28">
        <div className="mx-auto flex w-full max-w-3xl flex-col">
          <BackLink href="/showcase/forms">Forms Gallery</BackLink>

          <PageHeader>
            <PageHeaderGroup>
              <PageTitle>Submit a Support Ticket</PageTitle>
              <PageSubtitle>
                Our support team will respond based on the priority level
                selected.
              </PageSubtitle>
            </PageHeaderGroup>
          </PageHeader>

          <PageMain>
            <PageWrapper>
              <PageContent>
                <MainContent>
                  <SimpleAlert>
                    Response SLAs: <strong>Critical → 2 h</strong> &middot;{" "}
                    <strong>High → 8 h</strong> &middot;{" "}
                    <strong>Medium → 24 h</strong> &middot;{" "}
                    <strong>Low → 72 h</strong>
                  </SimpleAlert>

                  {/* ── Section 1: Issue Details ──────────────────────────── */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Issue Details
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Describe the problem you&apos;re experiencing as clearly
                        as possible.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      {/* Panel Item 1 — Summary */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="summary">
                              Summary / Title
                            </FieldLabel>
                            <Controller
                              name="summary"
                              control={control}
                              rules={{
                                required: "Summary is required",
                                maxLength: {
                                  value: 120,
                                  message:
                                    "Summary must be 120 characters or fewer",
                                },
                              }}
                              render={({ field: f }) => (
                                <Input
                                  id="summary"
                                  full
                                  placeholder="Brief description of the issue"
                                  value={f.value}
                                  onChange={f.onChange}
                                  onBlur={f.onBlur}
                                  aria-invalid={!!errors.summary}
                                />
                              )}
                            />
                            <FieldHint
                              error={errors.summary as { message?: string }}
                              mandatory
                            />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="product">
                              Product / Module
                            </FieldLabel>
                            <Controller
                              name="product"
                              control={control}
                              rules={{ required: "Please select a product" }}
                              render={({ field: f }) => (
                                <Select
                                  value={f.value}
                                  onValueChange={f.onChange}
                                  onOpenChange={(open) => {
                                    if (!open) f.onBlur();
                                  }}
                                >
                                  <SelectTrigger
                                    id="product"
                                    className="w-full"
                                    aria-invalid={!!errors.product || undefined}
                                  >
                                    <SelectValue placeholder="Select a product…" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      {PRODUCTS.map((p) => (
                                        <SelectItem
                                          key={p.value}
                                          value={p.value}
                                        >
                                          {p.label}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            <FieldHint
                              error={errors.product as { message?: string }}
                              mandatory
                            />
                          </Field>
                        </FieldGroup>
                      </MainSectionPanelItem>

                      {/* Panel Item 2 — Priority & Type */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <FieldSet>
                            <FieldLegend variant="label">Priority</FieldLegend>
                            <Controller
                              name="priority"
                              control={control}
                              rules={{ required: "Priority is required" }}
                              render={({ field: f }) => (
                                <RadioGroup
                                  value={f.value}
                                  onValueChange={f.onChange}
                                  onBlurCapture={(e: React.FocusEvent) => {
                                    if (
                                      !e.currentTarget.contains(
                                        e.relatedTarget as Node,
                                      )
                                    )
                                      f.onBlur();
                                  }}
                                  className="grid-cols-2 gap-y-1.5"
                                >
                                  {PRIORITIES.map((opt) => (
                                    <Field
                                      key={opt.value}
                                      orientation="horizontal"
                                      className="items-baseline"
                                    >
                                      <RadioGroupItem
                                        value={opt.value}
                                        id={`priority-${opt.value}`}
                                      />
                                      <FieldLabel
                                        htmlFor={`priority-${opt.value}`}
                                        className="cursor-pointer font-normal"
                                      >
                                        {opt.label}
                                      </FieldLabel>
                                    </Field>
                                  ))}
                                </RadioGroup>
                              )}
                            />
                            <FieldHint
                              error={errors.priority as { message?: string }}
                              mandatory
                            />
                          </FieldSet>

                          <Field>
                            <FieldLabel htmlFor="issue-type">
                              Issue Type
                            </FieldLabel>
                            <Controller
                              name="issueType"
                              control={control}
                              rules={{
                                required: "Please select an issue type",
                              }}
                              render={({ field: f }) => (
                                <Select
                                  value={f.value}
                                  onValueChange={f.onChange}
                                  onOpenChange={(open) => {
                                    if (!open) f.onBlur();
                                  }}
                                >
                                  <SelectTrigger
                                    id="issue-type"
                                    className="w-full"
                                    aria-invalid={
                                      !!errors.issueType || undefined
                                    }
                                  >
                                    <SelectValue placeholder="Select a type…" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      {ISSUE_TYPES.map((t) => (
                                        <SelectItem
                                          key={t.value}
                                          value={t.value}
                                        >
                                          {t.label}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            <FieldHint
                              error={errors.issueType as { message?: string }}
                              mandatory
                            />
                          </Field>
                        </FieldGroup>
                      </MainSectionPanelItem>

                      {/* Panel Item 3 — Description */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="description">
                              Description
                            </FieldLabel>
                            <Controller
                              name="description"
                              control={control}
                              rules={{
                                required: "Please describe the issue",
                                minLength: {
                                  value: 30,
                                  message:
                                    "Description must be at least 30 characters",
                                },
                              }}
                              render={({ field: f }) => (
                                <InputGroup>
                                  <InputGroupTextarea
                                    id="description"
                                    rows={6}
                                    placeholder="Describe the issue in detail…"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    aria-invalid={!!errors.description}
                                    maxLength={300}
                                  />
                                </InputGroup>
                              )}
                            />
                            <FieldHint
                              error={errors.description as { message?: string }}
                              mandatory
                            />
                          </Field>

                          <Controller
                            name="attachLogs"
                            control={control}
                            render={({ field: f }) => (
                              <Field
                                orientation="horizontal"
                                className="items-baseline"
                              >
                                <Checkbox
                                  id="attach-logs"
                                  checked={f.value}
                                  onCheckedChange={f.onChange}
                                  onBlur={f.onBlur}
                                />
                                <FieldLabel
                                  htmlFor="attach-logs"
                                  className="cursor-pointer font-normal"
                                >
                                  I have log files to attach (link them in the
                                  description)
                                </FieldLabel>
                              </Field>
                            )}
                          />
                        </FieldGroup>
                      </MainSectionPanelItem>

                      {/* Panel Item 4 — Affected Users */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="affected-users">
                              Affected users
                            </FieldLabel>
                            <Controller
                              name="affectedUsers"
                              control={control}
                              render={({ field: f }) => (
                                <Select
                                  value={f.value}
                                  onValueChange={f.onChange}
                                  onOpenChange={(open) => {
                                    if (!open) f.onBlur();
                                  }}
                                >
                                  <SelectTrigger
                                    id="affected-users"
                                    className="w-full"
                                  >
                                    <SelectValue placeholder="Who is affected?" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      {AFFECTED_USERS.map((u) => (
                                        <SelectItem
                                          key={u.value}
                                          value={u.value}
                                        >
                                          {u.label}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            <FieldHint />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="steps-to-reproduce">
                              Steps to reproduce
                            </FieldLabel>
                            <Controller
                              name="stepsToReproduce"
                              control={control}
                              render={({ field: f }) => (
                                <InputGroup>
                                  <InputGroupTextarea
                                    id="steps-to-reproduce"
                                    rows={3}
                                    placeholder={
                                      "1. Go to…\n2. Click on…\n3. Observe…"
                                    }
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    maxLength={300}
                                  />
                                </InputGroup>
                              )}
                            />
                            <FieldHint />
                          </Field>
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>

                    <MainSectionFooter>
                      <MainSectionFooterIcon icon={LuInfo} />
                      <span>
                        Do not include passwords, personal data, or payment
                        details in your ticket.
                      </span>
                    </MainSectionFooter>
                  </MainSection>

                  {/* ── Section 2: System Information (collapsible) ───────── */}
                  <MainSection>
                    <MainSectionHeader>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={includeSystemInfo}
                          onCheckedChange={setIncludeSystemInfo}
                        />
                        <MainSectionHeaderTitle>
                          Include system information
                        </MainSectionHeaderTitle>
                      </div>
                      <MainSectionHeaderSubtitle className="ml-8">
                        Helps our team diagnose environment-specific issues
                        faster.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel collapsed={!includeSystemInfo}>
                      {/* Panel Item 1 — Environment */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="os">
                                Operating System
                              </FieldLabel>
                              <Controller
                                name="os"
                                control={control}
                                render={({ field: f }) => (
                                  <Combobox
                                    items={OS_OPTIONS}
                                    value={f.value}
                                    onValueChange={(v) => f.onChange(v)}
                                  >
                                    <ComboboxInput
                                      id="os"
                                      placeholder="Search OS…"
                                      onBlur={f.onBlur}
                                      className="w-full"
                                    />
                                    <ComboboxContent>
                                      <ComboboxList>
                                        <ComboboxEmpty>
                                          No results found.
                                        </ComboboxEmpty>
                                        <ComboboxCollection>
                                          {(os: string) => (
                                            <ComboboxItem key={os} value={os}>
                                              {os}
                                            </ComboboxItem>
                                          )}
                                        </ComboboxCollection>
                                      </ComboboxList>
                                    </ComboboxContent>
                                  </Combobox>
                                )}
                              />
                              <FieldHint mandatory/>
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="browser">Browser</FieldLabel>
                              <Controller
                                name="browser"
                                control={control}
                                render={({ field: f }) => (
                                  <Select
                                    value={f.value}
                                    onValueChange={f.onChange}
                                    onOpenChange={(open) => {
                                      if (!open) f.onBlur();
                                    }}
                                  >
                                    <SelectTrigger
                                      id="browser"
                                      className="w-full"
                                    >
                                      <SelectValue placeholder="Select a browser…" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        {BROWSERS.map((b) => (
                                          <SelectItem
                                            key={b.value}
                                            value={b.value}
                                          >
                                            {b.label}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                )}
                              />
                              <FieldHint />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="app-version">
                                App Version
                              </FieldLabel>
                              <Controller
                                name="appVersion"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="app-version"
                                    full
                                    placeholder="e.g. 2.4.1"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                  />
                                )}
                              />
                              <FieldHint />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="screen-resolution">
                                Screen Resolution
                              </FieldLabel>
                              <Controller
                                name="screenResolution"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="screen-resolution"
                                    full
                                    placeholder="e.g. 1920×1080"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                  />
                                )}
                              />
                              <FieldHint />
                            </Field>
                          </div>
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* Panel Item 2 — Error Details */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="error-code">
                              Error code / message
                            </FieldLabel>
                            <Controller
                              name="errorCode"
                              control={control}
                              render={({ field: f }) => (
                                <Input
                                  id="error-code"
                                  full
                                  placeholder="e.g. ERR_CONNECTION_REFUSED or 500 Internal Server Error"
                                  value={f.value}
                                  onChange={f.onChange}
                                  onBlur={f.onBlur}
                                />
                              )}
                            />
                            <FieldHint />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="first-occurred">
                              First occurred
                            </FieldLabel>
                            <Controller
                              name="firstOccurred"
                              control={control}
                              render={({ field: f }) => (
                                <DatePicker
                                  id="first-occurred"
                                  value={f.value}
                                  onChange={f.onChange}
                                  onBlur={f.onBlur}
                                  placeholder="Pick a date"
                                  toYear={new Date().getFullYear()}
                                />
                              )}
                            />
                            <FieldHint />
                          </Field>
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>

                    <MainSectionFooter>
                      <MainSectionFooterIcon />
                      System information is only visible to our support
                      engineers.
                    </MainSectionFooter>
                  </MainSection>
                </MainContent>
              </PageContent>
            </PageWrapper>
          </PageMain>
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
}
