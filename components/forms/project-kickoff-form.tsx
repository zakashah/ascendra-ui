"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { LuInfo } from "react-icons/lu";
import { z } from "zod";
import type { DateRange } from "react-day-picker";

import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { MainSectionFooterIcon } from "@/ascendra-ui/components/layout/main-section-footer-icon";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageContent } from "@/ascendra-ui/components/layout/page-content";
import { PageWrapper } from "@/ascendra-ui/components/layout/page-wrapper";
import { MainContent } from "@/ascendra-ui/components/layout/main-content";

import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";
import { UnsavedChangesBar } from "@/ascendra-ui/components/common-ui/unsaved-changes-bar";
import { BackLink } from "@/ascendra-ui/components/forms/back-link";
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
import {
  Field,
  FieldGroup,
  FieldHint,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/ascendra-ui/components/ui/field";
import { Input } from "@/ascendra-ui/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
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

// ─── Schema ────────────────────────────────────────────────────────────────────

const schema = z.object({
  name: z.string().min(1, "Project name is required"),
  code: z.string(),
  description: z.string(),
  status: z.string().min(1, "Status is required"),
  priority: z.string().min(1, "Priority is required"),
  client: z.string(),
  visibility: z.string().min(1, "Visibility is required"),
  owner: z.string().min(1, "Project owner is required"),
  members: z.string(),
  externalStakeholders: z.string(),
  dateRange: z
    .object({ from: z.date().optional(), to: z.date().optional() })
    .refine((v) => !!v.from, { message: "Start date is required" }),
  budget: z.string(),
  budgetType: z.string(),
  hourlyRate: z.string(),
  billable: z.boolean(),
  milestoneDiscovery: z.boolean(),
  milestoneDesign: z.boolean(),
  milestoneDev: z.boolean(),
  milestoneTesting: z.boolean(),
  milestoneLaunch: z.boolean(),
});

type ProjectValues = z.infer<typeof schema>;

// ─── Data ──────────────────────────────────────────────────────────────────────

const STATUSES = [
  { value: "planning", label: "Planning" },
  { value: "active", label: "Active" },
  { value: "on-hold", label: "On Hold" },
  { value: "completed", label: "Completed" },
];

const PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "critical", label: "Critical" },
];

const CLIENTS = [
  "Acme Corp",
  "Globex Corporation",
  "Initech",
  "Umbrella Ltd",
  "Stark Industries",
  "Wayne Enterprises",
];

const VISIBILITY_OPTIONS = [
  { value: "public", label: "Public" },
  { value: "private", label: "Private" },
  { value: "team-only", label: "Team only" },
];

const TEAM_MEMBERS = [
  "Alice Chen",
  "Bob Martinez",
  "Carol Lee",
  "David Kim",
  "Emily Watson",
  "Frank Zhou",
];

const BUDGET_TYPES = [
  { value: "fixed-price", label: "Fixed price" },
  { value: "time-materials", label: "Time & materials" },
  { value: "retainer", label: "Retainer" },
];

const MILESTONES = [
  { name: "milestoneDiscovery" as const, label: "Discovery" },
  { name: "milestoneDesign" as const, label: "Design" },
  { name: "milestoneDev" as const, label: "Development" },
  { name: "milestoneTesting" as const, label: "Testing & QA" },
  { name: "milestoneLaunch" as const, label: "Launch" },
];

// ─── Form ──────────────────────────────────────────────────────────────────────

export default function ProjectKickoffForm() {
  const [isSaving, setIsSaving] = useState(false);

  const {
    control,
    trigger,
    reset,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useForm<ProjectValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      code: "",
      description: "",
      status: "planning",
      priority: "medium",
      client: "",
      visibility: "",
      owner: "",
      members: "",
      externalStakeholders: "",
      dateRange: { from: undefined, to: undefined },
      budget: "",
      budgetType: "",
      hourlyRate: "",
      billable: false,
      milestoneDiscovery: false,
      milestoneDesign: false,
      milestoneDev: false,
      milestoneTesting: false,
      milestoneLaunch: false,
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
              <PageTitle>New Project</PageTitle>
              <PageSubtitle>
                Set up a new project. You can update these details at any time.
              </PageSubtitle>
            </PageHeaderGroup>
          </PageHeader>

          <PageMain>
            <PageWrapper>
              <PageContent>
                <MainContent>
                  <SimpleAlert>
                    Projects are visible to all members of your organization by
                    default. Change visibility in Section 1 to restrict access.
                  </SimpleAlert>

                  {/* ── Section 1: Project Basics ──────────────────────────── */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Project Basics
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Define the core identity and classification of this
                        project.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      {/* Panel Item 1 — Identity */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="project-name">
                                Project Name
                              </FieldLabel>
                              <Controller
                                name="name"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="project-name"
                                    full
                                    placeholder="e.g. Website Redesign"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    aria-invalid={!!errors.name}
                                  />
                                )}
                              />
                              <FieldHint
                                error={errors.name as { message?: string }}
                                mandatory
                              />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="project-code">
                                Project Code
                              </FieldLabel>
                              <Controller
                                name="code"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="project-code"
                                    full
                                    placeholder="e.g. PRJ-001"
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

                      {/* Panel Item 2 — Description */}
                      <MainSectionPanelItem>
                        <Field>
                          <FieldLabel htmlFor="description">
                            Description
                          </FieldLabel>
                          <Controller
                            name="description"
                            control={control}
                            render={({ field: f }) => (
                              <InputGroup>
                                <textarea
                                  id="description"
                                  rows={3}
                                  placeholder="Brief description of the project goals and scope…"
                                  value={f.value}
                                  onChange={f.onChange}
                                  onBlur={f.onBlur}
                                  className="w-full flex-1 resize-none bg-transparent px-3 py-2 text-sm border-0 ring-0 outline-none placeholder:text-gray-500"
                                />
                              </InputGroup>
                            )}
                          />
                          <FieldHint />
                        </Field>
                      </MainSectionPanelItem>

                      {/* Panel Item 3 — Classification */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="proj-status">
                                Status
                              </FieldLabel>
                              <Controller
                                name="status"
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
                                      id="proj-status"
                                      className="w-full"
                                      aria-invalid={
                                        !!errors.status || undefined
                                      }
                                    >
                                      <SelectValue placeholder="Select status…" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        {STATUSES.map((s) => (
                                          <SelectItem
                                            key={s.value}
                                            value={s.value}
                                          >
                                            {s.label}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                )}
                              />
                              <FieldHint
                                error={errors.status as { message?: string }}
                                mandatory
                              />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="proj-priority">
                                Priority
                              </FieldLabel>
                              <Controller
                                name="priority"
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
                                      id="proj-priority"
                                      className="w-full"
                                      aria-invalid={
                                        !!errors.priority || undefined
                                      }
                                    >
                                      <SelectValue placeholder="Select priority…" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        {PRIORITIES.map((p) => (
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
                                error={errors.priority as { message?: string }}
                                mandatory
                              />
                            </Field>
                          </div>
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* Panel Item 4 — Client & Visibility */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <FieldSet>
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                              <Field>
                                <FieldLabel htmlFor="client">
                                  Client / Company
                                </FieldLabel>
                                <Controller
                                  name="client"
                                  control={control}
                                  render={({ field: f }) => (
                                    <Combobox
                                      items={CLIENTS}
                                      value={f.value}
                                      onValueChange={(v) => f.onChange(v)}
                                    >
                                      <ComboboxInput
                                        id="client"
                                        placeholder="Search client…"
                                        onBlur={f.onBlur}
                                        className="w-full"
                                      />
                                      <ComboboxContent>
                                        <ComboboxList>
                                          <ComboboxEmpty>
                                            No results found.
                                          </ComboboxEmpty>
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
                                  )}
                                />
                                <FieldHint />
                              </Field>
                            </div>
                          </FieldSet>

                          <FieldSet>
                            <FieldLegend variant="label">Visibility</FieldLegend>
                            <Controller
                              name="visibility"
                              control={control}
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
                                  className="flex gap-4"
                                >
                                  {VISIBILITY_OPTIONS.map((opt) => (
                                    <Field
                                      key={opt.value}
                                      orientation="horizontal"
                                      className="w-auto items-baseline"
                                    >
                                      <RadioGroupItem
                                        value={opt.value}
                                        id={`vis-${opt.value}`}
                                      />
                                      <FieldLabel
                                        htmlFor={`vis-${opt.value}`}
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
                              error={errors.visibility as { message?: string }}
                              mandatory
                            />
                          </FieldSet>
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>
                  </MainSection>

                  {/* ── Section 2: Team ────────────────────────────────────── */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>Team</MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Assign an owner and invite team members to collaborate.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      {/* Panel Item 1 — Ownership */}
                      <MainSectionPanelItem>
                        <Field>
                          <FieldLabel htmlFor="owner">
                            Project Owner
                          </FieldLabel>
                          <Controller
                            name="owner"
                            control={control}
                            render={({ field: f }) => (
                              <Combobox
                                items={TEAM_MEMBERS}
                                value={f.value}
                                onValueChange={(v) => f.onChange(v)}
                              >
                                <ComboboxInput
                                  id="owner"
                                  placeholder="Search team member…"
                                  onBlur={f.onBlur}
                                  className="w-full"
                                />
                                <ComboboxContent>
                                  <ComboboxList>
                                    <ComboboxEmpty>
                                      No results found.
                                    </ComboboxEmpty>
                                    <ComboboxCollection>
                                      {(m: string) => (
                                        <ComboboxItem key={m} value={m}>
                                          {m}
                                        </ComboboxItem>
                                      )}
                                    </ComboboxCollection>
                                  </ComboboxList>
                                </ComboboxContent>
                              </Combobox>
                            )}
                          />
                          <FieldHint
                            error={errors.owner as { message?: string }}
                            mandatory
                          />
                        </Field>
                      </MainSectionPanelItem>

                      {/* Panel Item 2 — Members */}
                      <MainSectionPanelItem>
                        <Field>
                          <FieldLabel htmlFor="members">
                            Team Members
                          </FieldLabel>
                          <Controller
                            name="members"
                            control={control}
                            render={({ field: f }) => (
                              <Input
                                id="members"
                                full
                                placeholder="Search and add team members…"
                                value={f.value}
                                onChange={f.onChange}
                                onBlur={f.onBlur}
                              />
                            )}
                          />
                          <FieldHint />
                        </Field>
                      </MainSectionPanelItem>

                      {/* Panel Item 3 — External */}
                      <MainSectionPanelItem>
                        <Field>
                          <FieldLabel htmlFor="external-stakeholders">
                            External Stakeholders
                          </FieldLabel>
                          <Controller
                            name="externalStakeholders"
                            control={control}
                            render={({ field: f }) => (
                              <Input
                                id="external-stakeholders"
                                full
                                placeholder="Email addresses, comma separated"
                                value={f.value}
                                onChange={f.onChange}
                                onBlur={f.onBlur}
                              />
                            )}
                          />
                          <FieldHint />
                        </Field>
                      </MainSectionPanelItem>
                    </MainSectionPanel>

                    <MainSectionFooter>
                      Team members will receive an email invitation when the
                      project is created.
                    </MainSectionFooter>
                  </MainSection>

                  {/* ── Section 3: Timeline & Budget ───────────────────────── */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Timeline &amp; Budget
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Set project dates, budget, and define key milestones.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      {/* Panel Item 1 — Timeline */}
                      <MainSectionPanelItem>
                        <Field>
                          <FieldLabel htmlFor="project-dates">
                            Project Dates
                          </FieldLabel>
                          <Controller
                            name="dateRange"
                            control={control}
                            render={({ field: f }) => (
                              <DateRangePicker
                                id="project-dates"
                                value={f.value as DateRange | undefined}
                                onChange={f.onChange}
                                onBlur={f.onBlur}
                                placeholder="Select date range…"
                              />
                            )}
                          />
                          <FieldHint
                            error={errors.dateRange as { message?: string }}
                            mandatory
                          />
                        </Field>
                      </MainSectionPanelItem>

                      {/* Panel Item 2 — Budget */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="budget">
                                Total Budget
                              </FieldLabel>
                              <Controller
                                name="budget"
                                control={control}
                                render={({ field: f }) => (
                                  <InputGroup>
                                    <InputGroupAddon align="inline-start">
                                      <InputGroupText>USD</InputGroupText>
                                    </InputGroupAddon>
                                    <InputGroupInput
                                      id="budget"
                                      type="number"
                                      placeholder="0"
                                      value={f.value}
                                      onChange={f.onChange}
                                      onBlur={f.onBlur}
                                    />
                                  </InputGroup>
                                )}
                              />
                              <FieldHint />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="budget-type">
                                Budget Type
                              </FieldLabel>
                              <Controller
                                name="budgetType"
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
                                      id="budget-type"
                                      className="w-full"
                                    >
                                      <SelectValue placeholder="Select type…" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        {BUDGET_TYPES.map((b) => (
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
                          </div>
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* Panel Item 3 — Billing */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="hourly-rate">
                              Hourly Rate
                            </FieldLabel>
                            <Controller
                              name="hourlyRate"
                              control={control}
                              render={({ field: f }) => (
                                <InputGroup className="max-w-40">
                                  <InputGroupAddon align="inline-start">
                                    <InputGroupText>USD</InputGroupText>
                                  </InputGroupAddon>
                                  <InputGroupInput
                                    id="hourly-rate"
                                    type="number"
                                    placeholder="0"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                  />
                                  <InputGroupAddon align="inline-end">
                                    <InputGroupText>/hr</InputGroupText>
                                  </InputGroupAddon>
                                </InputGroup>
                              )}
                            />
                            <FieldHint />
                          </Field>

                          <Controller
                            name="billable"
                            control={control}
                            render={({ field: f }) => (
                              <Field
                                orientation="horizontal"
                                className="items-baseline"
                              >
                                <Checkbox
                                  id="billable"
                                  checked={f.value}
                                  onCheckedChange={f.onChange}
                                  onBlur={f.onBlur}
                                />
                                <FieldLabel
                                  htmlFor="billable"
                                  className="cursor-pointer font-normal"
                                >
                                  This project is billable to the client
                                </FieldLabel>
                              </Field>
                            )}
                          />
                        </FieldGroup>
                      </MainSectionPanelItem>

                      {/* Panel Item 4 — Milestones */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <FieldLegend>Milestones</FieldLegend>
                          {MILESTONES.map(({ name, label }) => (
                            <Controller
                              key={name}
                              name={name}
                              control={control}
                              render={({ field: f }) => (
                                <Field
                                  orientation="horizontal"
                                  className="items-baseline"
                                >
                                  <Checkbox
                                    id={`milestone-${name}`}
                                    checked={f.value}
                                    onCheckedChange={f.onChange}
                                    onBlur={f.onBlur}
                                  />
                                  <FieldLabel
                                    htmlFor={`milestone-${name}`}
                                    className="cursor-pointer font-normal"
                                  >
                                    {label}
                                  </FieldLabel>
                                </Field>
                              )}
                            />
                          ))}
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>

                    <MainSectionFooter>
                      <MainSectionFooterIcon icon={LuInfo} />
                      <span>
                        Budget alerts are sent when spending reaches{" "}
                        <strong>80%</strong> and <strong>100%</strong> of the
                        total.
                      </span>
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
