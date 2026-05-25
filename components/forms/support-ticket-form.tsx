"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { LuInfo } from "react-icons/lu";

import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";

import {
  Field,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldLabel,
  FieldTitle,
  FieldHint,
} from "@/ascendra-ui/components/ui/field";
import { Input } from "@/ascendra-ui/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ascendra-ui/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/ascendra-ui/components/ui/radio-group";
import { Checkbox } from "@/ascendra-ui/components/ui/checkbox";
import { Switch } from "@/ascendra-ui/components/ui/switch";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxCollection,
} from "@/ascendra-ui/components/ui/combobox";
import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";
import { UnsavedChangesBar } from "@/ascendra-ui/components/common-ui/unsaved-changes-bar";
import { BackLink } from "@/ascendra-ui/components/forms/back-link";
import { cn } from "@/ascendra-ui/shadcn/lib/utils";

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
  os: string | null;
  browser: string;
  appVersion: string;
  screenResolution: string;
  errorCode: string;
  firstOccurred: string;
}

// ─── Textarea ──────────────────────────────────────────────────────────────────

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

function StyledTextarea({ className, invalid, ...props }: TextareaProps) {
  return (
    <div
      className={cn(
        "dark:bg-secondary flex w-full rounded-[.375rem] bg-white transition overflow-hidden",
        "ring-1 ring-(--color-umbra)/12 dark:ring-(--color-gray-1000)/88 dark:ring-inset",
        "shadow-[0_2px_2px_-1px_rgba(0,0,0,0.06),0_4px_4px_-2px_rgba(0,0,0,0.04)]",
        "dark:shadow-[0_2px_2px_-1px_rgba(0,0,0,0.16),0_4px_4px_-2px_rgba(0,0,0,0.24)]",
        "has-[textarea:not(:disabled):not(:focus)]:hover:ring-(--color-umbra)/24",
        "has-[textarea:disabled]:cursor-not-allowed has-[textarea:disabled]:opacity-40",
        invalid && "outline-2 outline-destructive outline-offset-1",
      )}
    >
      <textarea
        className={cn(
          "w-full resize-none bg-transparent px-3 py-2 text-sm leading-relaxed",
          "outline-none placeholder:text-gray-500 dark:placeholder:text-gray-700",
          "disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
    </div>
  );
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
    register,
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
      os: null,
      browser: "",
      appVersion: "",
      screenResolution: "",
      errorCode: "",
      firstOccurred: "",
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
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
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

          <SimpleAlert>
            Response SLAs:{" "}
            <strong>Critical → 2 h</strong> &middot;{" "}
            <strong>High → 8 h</strong> &middot;{" "}
            <strong>Medium → 24 h</strong> &middot;{" "}
            <strong>Low → 72 h</strong>
          </SimpleAlert>

          {/* ── Section 1: Issue Details ──────────────────────────────────── */}
          <MainSection>
            <MainSectionHeader>
              <MainSectionHeaderTitle>Issue Details</MainSectionHeaderTitle>
              <MainSectionHeaderSubtitle>
                Describe the problem you&apos;re experiencing as clearly as
                possible.
              </MainSectionHeaderSubtitle>
            </MainSectionHeader>

            <MainSectionPanel>
              {/* Panel Item 1 — Summary */}
              <MainSectionPanelItem>
                <p className="text-sm font-medium">Summary</p>
                <FieldGroup>
                  <Field>
                    <FieldTitle>Summary / Title</FieldTitle>
                    <Input
                      full
                      placeholder="Brief description of the issue"
                      aria-invalid={!!errors.summary}
                      {...register("summary", {
                        required: "Summary is required",
                        maxLength: {
                          value: 120,
                          message: "Summary must be 120 characters or fewer",
                        },
                      })}
                    />
                    <FieldHint
                      error={errors.summary as { message?: string }}
                      mandatory
                    />
                  </Field>

                  <Field>
                    <FieldTitle>Product / Module</FieldTitle>
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
                            className="w-full"
                            aria-invalid={!!errors.product || undefined}
                          >
                            <SelectValue placeholder="Select a product…" />
                          </SelectTrigger>
                          <SelectContent>
                            {PRODUCTS.map((p) => (
                              <SelectItem key={p.value} value={p.value}>
                                {p.label}
                              </SelectItem>
                            ))}
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
                <p className="text-sm font-medium">Priority &amp; Type</p>
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
                              !e.currentTarget.contains(e.relatedTarget as Node)
                            )
                              f.onBlur();
                          }}
                          className="grid-cols-2 gap-y-1.5"
                        >
                          {PRIORITIES.map((opt) => (
                            <Field
                              key={opt.value}
                              orientation="horizontal"
                              className="items-center"
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
                    <FieldTitle>Issue Type</FieldTitle>
                    <Controller
                      name="issueType"
                      control={control}
                      rules={{ required: "Please select an issue type" }}
                      render={({ field: f }) => (
                        <Select
                          value={f.value}
                          onValueChange={f.onChange}
                          onOpenChange={(open) => {
                            if (!open) f.onBlur();
                          }}
                        >
                          <SelectTrigger
                            className="w-full"
                            aria-invalid={!!errors.issueType || undefined}
                          >
                            <SelectValue placeholder="Select a type…" />
                          </SelectTrigger>
                          <SelectContent>
                            {ISSUE_TYPES.map((t) => (
                              <SelectItem key={t.value} value={t.value}>
                                {t.label}
                              </SelectItem>
                            ))}
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
                <p className="text-sm font-medium">Description</p>
                <FieldGroup>
                  <Field>
                    <FieldTitle>Description</FieldTitle>
                    <StyledTextarea
                      rows={6}
                      placeholder="Describe the issue in detail…"
                      invalid={!!errors.description}
                      aria-invalid={!!errors.description}
                      {...register("description", {
                        required: "Please describe the issue",
                        minLength: {
                          value: 30,
                          message: "Description must be at least 30 characters",
                        },
                      })}
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
                      <Field orientation="horizontal">
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
                <p className="text-sm font-medium">Affected Users</p>
                <FieldGroup>
                  <Field>
                    <FieldTitle>Affected users</FieldTitle>
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
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Who is affected?" />
                          </SelectTrigger>
                          <SelectContent>
                            {AFFECTED_USERS.map((u) => (
                              <SelectItem key={u.value} value={u.value}>
                                {u.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    <FieldHint optional />
                  </Field>

                  <Field>
                    <FieldTitle>Steps to reproduce</FieldTitle>
                    <StyledTextarea
                      rows={3}
                      placeholder="1. Go to…&#10;2. Click on…&#10;3. Observe…"
                      {...register("stepsToReproduce")}
                    />
                    <FieldHint optional />
                  </Field>
                </FieldGroup>
              </MainSectionPanelItem>
            </MainSectionPanel>

            <MainSectionFooter>
              <LuInfo className="mt-0.5 mr-2 size-3 shrink-0" />
              <span>
                Do not include passwords, personal data, or payment details in
                your ticket.
              </span>
            </MainSectionFooter>
          </MainSection>

          {/* ── Section 2: System Information (collapsible) ───────────────── */}
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
                Helps our team diagnose environment-specific issues faster.
              </MainSectionHeaderSubtitle>
            </MainSectionHeader>

            <MainSectionPanel collapsed={!includeSystemInfo}>
              {/* Panel Item 1 — Environment */}
              <MainSectionPanelItem>
                <p className="text-sm font-medium">Environment</p>
                <FieldGroup>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field>
                      <FieldTitle>Operating System</FieldTitle>
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
                              placeholder="Search OS…"
                              onBlur={f.onBlur}
                              className="w-full"
                            />
                            <ComboboxContent>
                              <ComboboxList>
                                <ComboboxEmpty>No results found.</ComboboxEmpty>
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
                      <FieldHint optional />
                    </Field>

                    <Field>
                      <FieldTitle>Browser</FieldTitle>
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
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a browser…" />
                            </SelectTrigger>
                            <SelectContent>
                              {BROWSERS.map((b) => (
                                <SelectItem key={b.value} value={b.value}>
                                  {b.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      <FieldHint optional />
                    </Field>

                    <Field>
                      <FieldTitle>App Version</FieldTitle>
                      <Input
                        full
                        placeholder="e.g. 2.4.1"
                        {...register("appVersion")}
                      />
                      <FieldHint optional />
                    </Field>

                    <Field>
                      <FieldTitle>Screen Resolution</FieldTitle>
                      <Input
                        full
                        placeholder="e.g. 1920×1080"
                        {...register("screenResolution")}
                      />
                      <FieldHint optional />
                    </Field>
                  </div>
                </FieldGroup>
              </MainSectionPanelItem>

              {/* Panel Item 2 — Error Details */}
              <MainSectionPanelItem>
                <p className="text-sm font-medium">Error Details</p>
                <FieldGroup>
                  <Field>
                    <FieldTitle>Error code / message</FieldTitle>
                    <Input
                      full
                      placeholder="e.g. ERR_CONNECTION_REFUSED or 500 Internal Server Error"
                      {...register("errorCode")}
                    />
                    <FieldHint optional />
                  </Field>

                  <Field>
                    <FieldTitle>First occurred</FieldTitle>
                    <Input full type="date" {...register("firstOccurred")} />
                    <FieldHint optional />
                  </Field>
                </FieldGroup>
              </MainSectionPanelItem>
            </MainSectionPanel>

            <MainSectionFooter>
              System information is only visible to our support engineers.
            </MainSectionFooter>
          </MainSection>
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
