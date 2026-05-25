"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LuShieldCheck } from "react-icons/lu";
import { z } from "zod";

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
import { DatePicker } from "@/ascendra-ui/components/date/date-picker";
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

// ─── Schema ────────────────────────────────────────────────────────────────────

const schema = z.object({
  service: z.string().min(1, "Please select a service"),
  provider: z.string().min(1, "Provider is required"),
  location: z.string().min(1, "Please select a location"),
  visitReason: z.string(),
  appointmentDate: z.date({ error: "Please select a date" }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  duration: z.string().min(1, "Please select a duration"),
  fullName: z.string().min(1, "Full name is required"),
  dateOfBirth: z.date({ error: "Date of birth is required" }),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string(),
  insuranceProvider: z.string(),
  policyNumber: z.string(),
  allergies: z.string(),
  consent: z.literal(true, { error: "You must consent to proceed" }),
});

type AppointmentValues = z.infer<typeof schema>;

// ─── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  { value: "general-consultation", label: "General Consultation" },
  { value: "specialist-review", label: "Specialist Review" },
  { value: "follow-up", label: "Follow-up Visit" },
  { value: "urgent-care", label: "Urgent Care" },
];

const PROVIDERS = [
  "Dr. Sarah Chen",
  "Dr. Marcus Webb",
  "Dr. Aisha Patel",
  "Dr. Leo Torres",
];

const LOCATIONS = [
  { value: "main-clinic", label: "Main Clinic" },
  { value: "north-branch", label: "North Branch" },
  { value: "telehealth", label: "Telehealth" },
];

const TIME_SLOTS = [
  { value: "9:00am", label: "9:00 AM" },
  { value: "10:30am", label: "10:30 AM" },
  { value: "12:00pm", label: "12:00 PM" },
  { value: "2:00pm", label: "2:00 PM" },
  { value: "3:30pm", label: "3:30 PM" },
  { value: "5:00pm", label: "5:00 PM" },
];

const DURATIONS = [
  { value: "30min", label: "30 minutes" },
  { value: "45min", label: "45 minutes" },
  { value: "60min", label: "60 minutes" },
];

// ─── Form ──────────────────────────────────────────────────────────────────────

export default function AppointmentBookingForm() {
  const [isSaving, setIsSaving] = useState(false);

  const {
    control,
    trigger,
    reset,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useForm<AppointmentValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: "",
      provider: "",
      location: "",
      visitReason: "",
      appointmentDate: undefined,
      timeSlot: "",
      duration: "",
      fullName: "",
      dateOfBirth: undefined,
      phone: "",
      email: "",
      insuranceProvider: "",
      policyNumber: "",
      allergies: "",
      consent: undefined,
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
              <PageTitle>Book an Appointment</PageTitle>
              <PageSubtitle>
                Choose a service, select a time, and confirm your details.
              </PageSubtitle>
            </PageHeaderGroup>
          </PageHeader>

          <PageMain>
            <PageWrapper>
              <PageContent>
                <MainContent>
                  {/* ── Section 1: Service Selection ──────────────────────── */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Service Selection
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Choose the type of appointment and your preferred
                        provider.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      {/* Panel Item 1 — Service type */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <FieldLegend variant="label">Service</FieldLegend>
                          <Controller
                            name="service"
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
                                className="flex flex-col gap-y-1.5"
                              >
                                {SERVICES.map((opt) => (
                                  <Field
                                    key={opt.value}
                                    orientation="horizontal"
                                    className="items-baseline"
                                  >
                                    <RadioGroupItem
                                      value={opt.value}
                                      id={`service-${opt.value}`}
                                    />
                                    <FieldLabel
                                      htmlFor={`service-${opt.value}`}
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
                            error={errors.service as { message?: string }}
                          />
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* Panel Item 2 — Provider & Location */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="provider">
                                Provider
                              </FieldLabel>
                              <Controller
                                name="provider"
                                control={control}
                                render={({ field: f }) => (
                                  <Combobox
                                    items={PROVIDERS}
                                    value={f.value}
                                    onValueChange={(v) => f.onChange(v)}
                                    readOnly
                                  >
                                    <ComboboxInput
                                      id="provider"
                                      placeholder="Search provider…"
                                      onBlur={f.onBlur}
                                      className="w-full"
                                    />
                                    <ComboboxContent>
                                      <ComboboxList>
                                        <ComboboxEmpty>
                                          No results found.
                                        </ComboboxEmpty>
                                        <ComboboxCollection>
                                          {(p: string) => (
                                            <ComboboxItem key={p} value={p}>
                                              {p}
                                            </ComboboxItem>
                                          )}
                                        </ComboboxCollection>
                                      </ComboboxList>
                                    </ComboboxContent>
                                  </Combobox>
                                )}
                              />
                              <FieldHint
                                error={errors.provider as { message?: string }}
                              />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="location">
                                Location
                              </FieldLabel>
                              <Controller
                                name="location"
                                control={control}
                                render={({ field: f }) => (
                                  <Select
                                    value={f.value}
                                    onValueChange={f.onChange}
                                    onOpenChange={(open) => {
                                      if (!open) f.onBlur();
                                    }}
                                    readOnly
                                  >
                                    <SelectTrigger
                                      id="location"
                                      className="w-full"
                                      aria-invalid={
                                        !!errors.location || undefined
                                      }
                                    >
                                      <SelectValue placeholder="Select a location…" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        {LOCATIONS.map((l) => (
                                          <SelectItem
                                            key={l.value}
                                            value={l.value}
                                          >
                                            {l.label}
                                          </SelectItem>
                                        ))}
                                      </SelectGroup>
                                    </SelectContent>
                                  </Select>
                                )}
                              />
                              <FieldHint
                                error={errors.location as { message?: string }}
                              />
                            </Field>
                          </div>
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* Panel Item 3 — Notes for provider */}
                      <MainSectionPanelItem>
                        <Field>
                          <FieldLabel htmlFor="visit-reason">
                            Reason for Visit
                          </FieldLabel>
                          <Controller
                            name="visitReason"
                            control={control}
                            render={({ field: f }) => (
                              <InputGroup>
                                <InputGroupTextarea
                                  id="visit-reason"
                                  rows={3}
                                  placeholder="Brief reason for your visit…"
                                  value={f.value}
                                  onChange={f.onChange}
                                  onBlur={f.onBlur}
                                  readOnly
                                />
                              </InputGroup>
                            )}
                          />
                          <FieldHint optional />
                        </Field>
                      </MainSectionPanelItem>
                    </MainSectionPanel>

                    <MainSectionFooter>
                      Appointments can be cancelled up to 24 hours in advance
                      without charge.
                    </MainSectionFooter>
                  </MainSection>

                  {/* ── Section 2: Date & Time ─────────────────────────────── */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Date &amp; Time
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Select your preferred appointment date and time slot.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      {/* Panel Item 1 — Date */}
                      <MainSectionPanelItem>
                        <SimpleAlert variant="secondary">
                          Available slots shown are for the selected provider
                          and location.
                        </SimpleAlert>
                        <Field>
                          <FieldLabel htmlFor="appointment-date">
                            Appointment Date
                          </FieldLabel>
                          <Controller
                            name="appointmentDate"
                            control={control}
                            render={({ field: f }) => (
                              <DatePicker
                                id="appointment-date"
                                value={f.value}
                                onChange={f.onChange}
                                onBlur={f.onBlur}
                                placeholder="Pick a date"
                                fromYear={new Date().getFullYear()}
                                readOnly
                              />
                            )}
                          />
                          <FieldHint
                            error={
                              errors.appointmentDate as { message?: string }
                            }
                          />
                        </Field>
                      </MainSectionPanelItem>

                      {/* Panel Item 2 — Time slot */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <FieldSet>
                            <FieldLegend variant="label">Time Slot</FieldLegend>
                            <Controller
                              name="timeSlot"
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
                                  className="grid-cols-2 gap-y-1.5"
                                >
                                  {TIME_SLOTS.map((opt) => (
                                    <Field
                                      key={opt.value}
                                      orientation="horizontal"
                                      className="items-baseline"
                                    >
                                      <RadioGroupItem
                                        value={opt.value}
                                        id={`slot-${opt.value}`}
                                      />
                                      <FieldLabel
                                        htmlFor={`slot-${opt.value}`}
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
                              error={errors.timeSlot as { message?: string }}
                            />
                          </FieldSet>

                          <Field>
                            <FieldLabel htmlFor="duration">Duration</FieldLabel>
                            <Controller
                              name="duration"
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
                                    id="duration"
                                    className="w-full"
                                    aria-invalid={
                                      !!errors.duration || undefined
                                    }
                                  >
                                    <SelectValue placeholder="Select duration…" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      {DURATIONS.map((d) => (
                                        <SelectItem
                                          key={d.value}
                                          value={d.value}
                                        >
                                          {d.label}
                                        </SelectItem>
                                      ))}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            <FieldHint
                              error={errors.duration as { message?: string }}
                            />
                          </Field>
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>
                  </MainSection>

                  {/* ── Section 3: Patient Details ─────────────────────────── */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Patient Details
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Provide your personal information and insurance details.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      {/* Panel Item 1 — Personal */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="full-name">
                                Full Name
                              </FieldLabel>
                              <Controller
                                name="fullName"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="full-name"
                                    full
                                    placeholder="Jane Smith"
                                    autoComplete="name"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    aria-invalid={!!errors.fullName}
                                    readOnly
                                  />
                                )}
                              />
                              <FieldHint
                                error={errors.fullName as { message?: string }}
                              />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="date-of-birth">
                                Date of Birth
                              </FieldLabel>
                              <Controller
                                name="dateOfBirth"
                                control={control}
                                render={({ field: f }) => (
                                  <DatePicker
                                    id="date-of-birth"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    placeholder="Pick a date"
                                    toYear={new Date().getFullYear()}
                                    captionLayout="dropdown"
                                  />
                                )}
                              />
                              <FieldHint
                                error={
                                  errors.dateOfBirth as { message?: string }
                                }
                              />
                            </Field>
                          </div>
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* Panel Item 2 — Contact */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="patient-phone">
                                Phone
                              </FieldLabel>
                              <Controller
                                name="phone"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="patient-phone"
                                    full
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    autoComplete="tel"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    aria-invalid={!!errors.phone}
                                  />
                                )}
                              />
                              <FieldHint
                                error={errors.phone as { message?: string }}
                              />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="patient-email">
                                Email
                              </FieldLabel>
                              <Controller
                                name="email"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="patient-email"
                                    full
                                    type="email"
                                    placeholder="jane@example.com"
                                    autoComplete="email"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                  />
                                )}
                              />
                              <FieldHint optional />
                            </Field>
                          </div>
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* Panel Item 3 — Insurance */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="insurance-provider">
                                Insurance Provider
                              </FieldLabel>
                              <Controller
                                name="insuranceProvider"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="insurance-provider"
                                    full
                                    placeholder="e.g. Blue Cross Blue Shield"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                  />
                                )}
                              />
                              <FieldHint optional />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="policy-number">
                                Policy Number
                              </FieldLabel>
                              <Controller
                                name="policyNumber"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="policy-number"
                                    full
                                    placeholder="e.g. BCB-123456789"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                  />
                                )}
                              />
                              <FieldHint optional />
                            </Field>
                          </div>
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* Panel Item 4 — Additional */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="allergies">
                              Allergies or Conditions
                            </FieldLabel>
                            <Controller
                              name="allergies"
                              control={control}
                              render={({ field: f }) => (
                                <InputGroup>
                                  <InputGroupTextarea
                                    id="allergies"
                                    rows={2}
                                    placeholder="List any known allergies or medical conditions…"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                  />
                                </InputGroup>
                              )}
                            />
                            <FieldHint optional />
                          </Field>

                          <Controller
                            name="consent"
                            control={control}
                            render={({ field: f }) => (
                              <Field
                                orientation="horizontal"
                                className="items-baseline"
                              >
                                <Checkbox
                                  id="consent"
                                  checked={!!f.value}
                                  onCheckedChange={(checked) =>
                                    f.onChange(checked ? true : undefined)
                                  }
                                  onBlur={f.onBlur}
                                  aria-invalid={!!errors.consent}
                                />
                                <FieldLabel
                                  htmlFor="consent"
                                  className="cursor-pointer font-normal"
                                >
                                  I consent to the appointment terms and
                                  conditions
                                </FieldLabel>
                              </Field>
                            )}
                          />
                          {errors.consent && (
                            <FieldHint
                              className="-mt-3"
                              error={errors.consent as { message?: string }}
                            />
                          )}
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>

                    <MainSectionFooter>
                      <MainSectionFooterIcon icon={LuShieldCheck} />
                      <span>
                        Your medical information is encrypted and never shared
                        with third parties.
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
