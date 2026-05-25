"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
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

import { TabContent } from "@/ascendra-ui/components/tabs/tab-content";
import { TabList } from "@/ascendra-ui/components/tabs/tab-list";
import { TabTrigger } from "@/ascendra-ui/components/tabs/tab-trigger";
import { Tabs } from "@/ascendra-ui/components/tabs/tabs";

import { UnsavedChangesBar } from "@/ascendra-ui/components/common-ui/unsaved-changes-bar";
import { BackLink } from "@/ascendra-ui/components/forms/back-link";
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
  FieldInfo,
  FieldLabel,
  FieldLabelGroup,
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
import { Switch } from "@/ascendra-ui/components/ui/switch";

// ─── Schema ────────────────────────────────────────────────────────────────────

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  displayName: z.string(),
  username: z
    .string()
    .regex(/^[a-zA-Z0-9-]*$/, "Only letters, numbers and hyphens allowed"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  phone: z.string(),
  bio: z.string().max(200, "Bio must be 200 characters or fewer"),
  website: z.string(),
  language: z.string().min(1, "Language is required"),
  timezone: z.string().min(1, "Timezone is required"),
  dateFormat: z.string().min(1, "Date format is required"),
  timeFormat: z.string().min(1, "Time format is required"),
  theme: z.string().min(1, "Theme is required"),
  notifyComment: z.boolean(),
  notifyMention: z.boolean(),
  notifyDM: z.boolean(),
  notifyDigest: z.boolean(),
  notifyProductUpdates: z.boolean(),
  notifyTeamActivity: z.boolean(),
});

type UserProfileValues = z.infer<typeof schema>;

// ─── Data ──────────────────────────────────────────────────────────────────────

const LANGUAGES = [
  "English",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Portuguese",
];

const TIMEZONES = [
  "America/New_York",
  "America/Chicago",
  "America/Denver",
  "America/Los_Angeles",
  "America/Toronto",
  "America/Sao_Paulo",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "Europe/Moscow",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Pacific/Auckland",
];

const DATE_FORMATS = [
  { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
  { value: "DD/MM/YYYY", label: "DD/MM/YYYY" },
  { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
];

const TIME_FORMATS = [
  { value: "12h", label: "12-hour" },
  { value: "24h", label: "24-hour" },
];

const THEMES = [
  { value: "system", label: "System" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

const EMAIL_NOTIFICATION_FIELDS = [
  {
    name: "notifyComment" as const,
    label: "New comment on my items",
    id: "notify-comment",
  },
  { name: "notifyMention" as const, label: "Mentions", id: "notify-mention" },
  {
    name: "notifyDM" as const,
    label: "Direct messages",
    id: "notify-dm",
  },
  {
    name: "notifyDigest" as const,
    label: "Weekly digest",
    id: "notify-digest",
  },
];

const IN_APP_NOTIFICATION_FIELDS = [
  {
    name: "notifyProductUpdates" as const,
    label: "Product updates",
    id: "notify-product-updates",
  },
  {
    name: "notifyTeamActivity" as const,
    label: "Team activity",
    id: "notify-team-activity",
  },
];

// ─── Form ──────────────────────────────────────────────────────────────────────

export default function UserProfileForm() {
  const [isSaving, setIsSaving] = useState(false);

  const {
    control,
    trigger,
    reset,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useForm<UserProfileValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      displayName: "",
      username: "",
      email: "jane.smith@example.com",
      phone: "",
      bio: "",
      website: "",
      language: "",
      timezone: "",
      dateFormat: "",
      timeFormat: "",
      theme: "system",
      notifyComment: false,
      notifyMention: false,
      notifyDM: false,
      notifyDigest: false,
      notifyProductUpdates: false,
      notifyTeamActivity: false,
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
              <PageTitle>User Profile</PageTitle>
              <PageSubtitle>
                Manage your personal information and account preferences.
              </PageSubtitle>
            </PageHeaderGroup>
          </PageHeader>

          <PageMain>
            <Tabs defaultValue="general">
              <TabList>
                <TabTrigger value="general">General</TabTrigger>
                <TabTrigger value="preferences">Preferences</TabTrigger>
                <TabTrigger value="notifications">Notifications</TabTrigger>
              </TabList>

              {/* ── Tab: General ──────────────────────────────────────────── */}
              <TabContent value="general">
                <div className="w-full pb-6 flex flex-col gap-6">
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Personal Information
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Update your name, contact details, and public profile.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      {/* Panel Item 1 — Identity */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabelGroup>
                                <FieldLabel htmlFor="first-name">
                                  First Name
                                </FieldLabel>
                                <FieldInfo>info</FieldInfo>
                              </FieldLabelGroup>
                              <Controller
                                name="firstName"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="first-name"
                                    full
                                    placeholder="Jane"
                                    autoComplete="given-name"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    aria-invalid={!!errors.firstName}
                                  />
                                )}
                              />
                              <FieldHint
                                error={errors.firstName as { message?: string }}
                                mandatory
                              />
                            </Field>

                            <Field>
                              <FieldLabelGroup>
                                <FieldLabel htmlFor="last-name">
                                  Last Name
                                </FieldLabel>
                                <FieldInfo />
                              </FieldLabelGroup>
                              <Controller
                                name="lastName"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="last-name"
                                    full
                                    placeholder="Smith"
                                    autoComplete="family-name"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    aria-invalid={!!errors.lastName}
                                  />
                                )}
                              />
                              <FieldHint
                                error={errors.lastName as { message?: string }}
                                mandatory
                              />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="display-name">
                                Display Name
                              </FieldLabel>
                              <Controller
                                name="displayName"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="display-name"
                                    full
                                    placeholder="jane.smith"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                  />
                                )}
                              />
                              <FieldHint
                                description="Shown publicly to other team members."
                                optional
                              />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="username">
                                Username
                              </FieldLabel>
                              <Controller
                                name="username"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="username"
                                    full
                                    placeholder="jane-smith"
                                    autoComplete="username"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    aria-invalid={!!errors.username}
                                  />
                                )}
                              />
                              <FieldHint
                                error={errors.username as { message?: string }}
                                optional
                              />
                            </Field>
                          </div>
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* Panel Item 2 — Contact */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="email">
                              Email Address
                            </FieldLabel>
                            <Controller
                              name="email"
                              control={control}
                              render={({ field: f }) => (
                                <Input
                                  id="email"
                                  full
                                  type="email"
                                  value={f.value}
                                  disabled
                                />
                              )}
                            />
                            <FieldHint description="Contact support to change your email." />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="phone">
                              Phone Number
                            </FieldLabel>
                            <Controller
                              name="phone"
                              control={control}
                              render={({ field: f }) => (
                                <Input
                                  id="phone"
                                  full
                                  type="tel"
                                  placeholder="+1 (555) 000-0000"
                                  autoComplete="tel"
                                  value={f.value}
                                  onChange={f.onChange}
                                  onBlur={f.onBlur}
                                />
                              )}
                            />
                            <FieldHint optional />
                          </Field>
                        </FieldGroup>
                      </MainSectionPanelItem>

                      {/* Panel Item 3 — About */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="bio">Bio / About</FieldLabel>
                            <Controller
                              name="bio"
                              control={control}
                              render={({ field: f }) => (
                                <InputGroup>
                                  <InputGroupTextarea
                                    id="bio"
                                    rows={3}
                                    placeholder="Tell your team a bit about yourself…"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    aria-invalid={!!errors.bio}
                                    maxLength={200}
                                  />
                                </InputGroup>
                              )}
                            />
                            <FieldHint
                              error={errors.bio as { message?: string }}
                              optional
                            />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="website">Website</FieldLabel>
                            <Controller
                              name="website"
                              control={control}
                              render={({ field: f }) => (
                                <Input
                                  id="website"
                                  full
                                  type="url"
                                  placeholder="https://yoursite.com"
                                  value={f.value}
                                  onChange={f.onChange}
                                  onBlur={f.onBlur}
                                />
                              )}
                            />
                            <FieldHint optional />
                          </Field>
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>

                    <MainSectionFooter>
                      Changes to your display name are visible to all team
                      members immediately.
                    </MainSectionFooter>
                  </MainSection>
                </div>
              </TabContent>

              {/* ── Tab: Preferences ──────────────────────────────────────── */}
              <TabContent value="preferences">
                <div className="w-full pb-6 flex flex-col gap-6">
                  {/* Section: Regional Settings */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Regional Settings
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Set your language, timezone, and date/time formatting
                        preferences.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      {/* Panel Item 1 — Locale */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="language">
                                Language
                              </FieldLabel>
                              <Controller
                                name="language"
                                control={control}
                                render={({ field: f }) => (
                                  <Combobox
                                    items={LANGUAGES}
                                    value={f.value}
                                    onValueChange={(v) => f.onChange(v)}
                                  >
                                    <ComboboxInput
                                      id="language"
                                      placeholder="Search language…"
                                      onBlur={f.onBlur}
                                      className="w-full"
                                    />
                                    <ComboboxContent>
                                      <ComboboxList>
                                        <ComboboxEmpty>
                                          No results found.
                                        </ComboboxEmpty>
                                        <ComboboxCollection>
                                          {(lang: string) => (
                                            <ComboboxItem
                                              key={lang}
                                              value={lang}
                                            >
                                              {lang}
                                            </ComboboxItem>
                                          )}
                                        </ComboboxCollection>
                                      </ComboboxList>
                                    </ComboboxContent>
                                  </Combobox>
                                )}
                              />
                              <FieldHint
                                error={errors.language as { message?: string }}
                                mandatory
                              />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="timezone">
                                Timezone
                              </FieldLabel>
                              <Controller
                                name="timezone"
                                control={control}
                                render={({ field: f }) => (
                                  <Combobox
                                    items={TIMEZONES}
                                    value={f.value}
                                    onValueChange={(v) => f.onChange(v)}
                                  >
                                    <ComboboxInput
                                      id="timezone"
                                      placeholder="Search timezone…"
                                      onBlur={f.onBlur}
                                      className="w-full"
                                    />
                                    <ComboboxContent>
                                      <ComboboxList>
                                        <ComboboxEmpty>
                                          No results found.
                                        </ComboboxEmpty>
                                        <ComboboxCollection>
                                          {(tz: string) => (
                                            <ComboboxItem key={tz} value={tz}>
                                              {tz}
                                            </ComboboxItem>
                                          )}
                                        </ComboboxCollection>
                                      </ComboboxList>
                                    </ComboboxContent>
                                  </Combobox>
                                )}
                              />
                              <FieldHint
                                error={errors.timezone as { message?: string }}
                                mandatory
                              />
                            </Field>
                          </div>
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* Panel Item 2 — Formatting */}
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="date-format">
                              Date Format
                            </FieldLabel>
                            <Controller
                              name="dateFormat"
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
                                    id="date-format"
                                    className="w-full"
                                    aria-invalid={
                                      !!errors.dateFormat || undefined
                                    }
                                  >
                                    <SelectValue placeholder="Select a format…" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      {DATE_FORMATS.map((d) => (
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
                              error={errors.dateFormat as { message?: string }}
                              mandatory
                            />
                          </Field>

                          <FieldSet>
                            <FieldLegend variant="label">
                              Time Format
                            </FieldLegend>
                            <Controller
                              name="timeFormat"
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
                                  {TIME_FORMATS.map((opt) => (
                                    <Field
                                      key={opt.value}
                                      orientation="horizontal"
                                      className="w-auto items-baseline"
                                    >
                                      <RadioGroupItem
                                        value={opt.value}
                                        id={`time-format-${opt.value}`}
                                      />
                                      <FieldLabel
                                        htmlFor={`time-format-${opt.value}`}
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
                              error={errors.timeFormat as { message?: string }}
                              mandatory
                            />
                          </FieldSet>
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>
                  </MainSection>

                  {/* Section: Appearance */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Appearance
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Choose how Ascendra looks for you.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      <MainSectionPanelItem>
                        <FieldSet>
                          <FieldLegend variant="label">Theme</FieldLegend>
                          <Controller
                            name="theme"
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
                                {THEMES.map((opt) => (
                                  <Field
                                    key={opt.value}
                                    orientation="horizontal"
                                    className="w-auto items-baseline"
                                  >
                                    <RadioGroupItem
                                      value={opt.value}
                                      id={`theme-${opt.value}`}
                                    />
                                    <FieldLabel
                                      htmlFor={`theme-${opt.value}`}
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
                            error={errors.theme as { message?: string }}
                          />
                        </FieldSet>
                      </MainSectionPanelItem>
                    </MainSectionPanel>
                  </MainSection>
                </div>
              </TabContent>

              {/* ── Tab: Notifications ────────────────────────────────────── */}
              <TabContent value="notifications">
                <div className="w-full pb-6 flex flex-col gap-6">
                  {/* Section: Email Notifications */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Email Notifications
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Choose which activity emails you&apos;d like to receive.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      <MainSectionPanelItem>
                        <FieldGroup>
                          {EMAIL_NOTIFICATION_FIELDS.map(
                            ({ name, label, id }) => (
                              <Controller
                                key={id}
                                name={name}
                                control={control}
                                render={({ field: f }) => (
                                  <Field
                                    orientation="horizontal"
                                    className="items-center"
                                  >
                                    <Switch
                                      id={id}
                                      checked={f.value}
                                      onCheckedChange={f.onChange}
                                      onBlur={f.onBlur}
                                    />
                                    <FieldLabel
                                      htmlFor={id}
                                      className="cursor-pointer font-normal"
                                    >
                                      {label}
                                    </FieldLabel>
                                  </Field>
                                )}
                              />
                            ),
                          )}
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>
                  </MainSection>

                  {/* Section: In-App Notifications */}
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        In-App Notifications
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Control which notifications appear within the
                        application.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      <MainSectionPanelItem>
                        <FieldGroup>
                          <Field
                            orientation="horizontal"
                            className="items-center"
                          >
                            <Switch
                              id="system-alerts"
                              checked={true}
                              disabled
                            />
                            <FieldLabel
                              htmlFor="system-alerts"
                              className="font-normal opacity-50"
                            >
                              System alerts
                            </FieldLabel>
                          </Field>

                          {IN_APP_NOTIFICATION_FIELDS.map(
                            ({ name, label, id }) => (
                              <Controller
                                key={id}
                                name={name}
                                control={control}
                                render={({ field: f }) => (
                                  <Field
                                    orientation="horizontal"
                                    className="items-center"
                                  >
                                    <Switch
                                      id={id}
                                      checked={f.value}
                                      onCheckedChange={f.onChange}
                                      onBlur={f.onBlur}
                                    />
                                    <FieldLabel
                                      htmlFor={id}
                                      className="cursor-pointer font-normal"
                                    >
                                      {label}
                                    </FieldLabel>
                                  </Field>
                                )}
                              />
                            ),
                          )}
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>

                    <MainSectionFooter>
                      Notification settings apply across all devices linked to
                      your account.
                    </MainSectionFooter>
                  </MainSection>
                </div>
              </TabContent>
            </Tabs>
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
