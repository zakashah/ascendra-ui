"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { LuLock } from "react-icons/lu";
import { z } from "zod";

import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { MainSectionFooterIcon } from "@/ascendra-ui/components/layout/main-section-footer-icon";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { MainSectionPanelItemGroup } from "@/ascendra-ui/components/layout/main-section-panel-item-group";
import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";

import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";
import { UnsavedChangesBar } from "@/ascendra-ui/components/common-ui/unsaved-changes-bar";
import { BackLink } from "@/ascendra-ui/components/forms/back-link";
import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { PageContent } from "@/ascendra-ui/components/layout/page-content";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";
import { PageWrapper } from "@/ascendra-ui/components/layout/page-wrapper";
import { Checkbox } from "@/ascendra-ui/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGrid,
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
import { MainSectionPanelItemCrown } from "@/ascendra-ui/components/layout/main-section-panel-item-crown";

// ─── Schema ────────────────────────────────────────────────────────────────────

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email address is required").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"),
  phone: z.string(),
  company: z.string(),
  subject: z.string().min(1, "Please select a subject"),
  inquiryType: z.string(),
  message: z.string().min(1, "Please enter your message").min(20, "Message must be at least 20 characters"),
  referralSource: z.string(),
  marketingConsent: z.boolean(),
});

type ContactValues = z.infer<typeof schema>;

// ─── Data ──────────────────────────────────────────────────────────────────────

const SUBJECTS = [
  { value: "general", label: "General Inquiry" },
  { value: "technical", label: "Technical Support" },
  { value: "sales", label: "Sales" },
  { value: "partnership", label: "Partnership" },
  { value: "media", label: "Media / Press" },
  { value: "other", label: "Other" },
];

const INQUIRY_TYPES = [
  { value: "question", label: "Question" },
  { value: "feedback", label: "Feedback" },
  { value: "bug-report", label: "Bug Report" },
  { value: "feature-request", label: "Feature Request" },
];

const REFERRAL_SOURCES = [
  { value: "search", label: "Search engine" },
  { value: "social", label: "Social media" },
  { value: "word-of-mouth", label: "Word of mouth" },
  { value: "blog", label: "Blog / Article" },
  { value: "advertisement", label: "Advertisement" },
  { value: "other", label: "Other" },
];

// ─── Form ──────────────────────────────────────────────────────────────────────

export default function ContactInquiryForm() {
  const [isSaving, setIsSaving] = useState(false);

  const {
    control,
    trigger,
    reset,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      inquiryType: "",
      message: "",
      referralSource: "",
      marketingConsent: false,
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
              <PageTitle>Contact &amp; Inquiry</PageTitle>
              <PageSubtitle>
                Get in touch with our team. We typically respond within one
                business day.
              </PageSubtitle>
            </PageHeaderGroup>
          </PageHeader>
          <PageMain>
            <PageWrapper>
              <PageContent>
                <MainContent>
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Send us a message
                      </MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Fill in the form below and a member of our team will be
                        in touch.
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>

                    <MainSectionPanel>
                      {/* ── Contact Details ──────────────────────────────────────────── */}
                      <MainSectionPanelItem>
                        <FieldSet>
                          <FieldGrid>
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
                                  />
                                )}
                              />
                              <FieldHint
                                error={errors.fullName as { message?: string }}
                                mandatory
                              />
                            </Field>

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
                                    placeholder="jane@example.com"
                                    autoComplete="email"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                    aria-invalid={!!errors.email}
                                  />
                                )}
                              />
                              <FieldHint
                                error={errors.email as { message?: string }}
                                mandatory
                              />
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

                            <Field>
                              <FieldLabel htmlFor="company">
                                Company / Organization
                              </FieldLabel>
                              <Controller
                                name="company"
                                control={control}
                                render={({ field: f }) => (
                                  <Input
                                    id="company"
                                    full
                                    placeholder="Acme Inc."
                                    autoComplete="organization"
                                    value={f.value}
                                    onChange={f.onChange}
                                    onBlur={f.onBlur}
                                  />
                                )}
                              />
                              <FieldHint mandatory />
                            </Field>
                          </FieldGrid>
                        </FieldSet>
                      </MainSectionPanelItem>

                      {/* ── Your Message ─────────────────────────────────────────────── */}
                      <MainSectionPanelItem className="relative">
                        <MainSectionPanelItemCrown>
                          Provide your message details below
                        </MainSectionPanelItemCrown>
                        <MainSectionPanelItemGroup>
                          <SimpleAlert variant="secondary">
                            Our team responds to all inquiries within{" "}
                            <strong>1 business day</strong>. For urgent matters,
                            include &ldquo;Urgent&rdquo; in your subject line.
                          </SimpleAlert>
                          <FieldGroup>
                            <Field>
                              <FieldLabel htmlFor="subject">Subject</FieldLabel>
                              <Controller
                                name="subject"
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
                                      id="subject"
                                      className="w-full"
                                      aria-invalid={
                                        !!errors.subject || undefined
                                      }
                                    >
                                      <SelectValue placeholder="Select a subject…" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectGroup>
                                        {SUBJECTS.map((s) => (
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
                                error={errors.subject as { message?: string }}
                                mandatory
                              />
                            </Field>

                            <FieldSet>
                              <FieldLegend variant="label">
                                Inquiry Type
                              </FieldLegend>
                              <Controller
                                name="inquiryType"
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
                                    {INQUIRY_TYPES.map((opt) => (
                                      <Field
                                        key={opt.value}
                                        orientation="horizontal"
                                        className="items-baseline"
                                      >
                                        <RadioGroupItem
                                          value={opt.value}
                                          id={`inquiry-type-${opt.value}`}
                                        />
                                        <FieldLabel
                                          htmlFor={`inquiry-type-${opt.value}`}
                                          className="cursor-pointer font-normal"
                                        >
                                          {opt.label}
                                        </FieldLabel>
                                      </Field>
                                    ))}
                                  </RadioGroup>
                                )}
                              />
                              <FieldHint />
                            </FieldSet>

                            <Field>
                              <FieldLabel htmlFor="message">Message</FieldLabel>
                              <Controller
                                name="message"
                                control={control}
                                render={({ field: f }) => (
                                  <InputGroup>
                                    <InputGroupTextarea
                                      id="message"
                                      rows={5}
                                      placeholder="Describe your inquiry in detail…"
                                      value={f.value}
                                      onChange={f.onChange}
                                      onBlur={f.onBlur}
                                      aria-invalid={!!errors.message}
                                      maxLength={200}
                                    />
                                  </InputGroup>
                                )}
                              />
                              <FieldHint
                                error={errors.message as { message?: string }}
                                mandatory
                              />
                            </Field>
                          </FieldGroup>
                        </MainSectionPanelItemGroup>
                      </MainSectionPanelItem>

                      {/* ── Additional Information ───────────────────────────────────── */}
                      <MainSectionPanelItem>
                        <FieldLegend>Additional Information</FieldLegend>
                        <FieldDescription>
                          Please provide any additional information that may
                          help us better assist you.
                        </FieldDescription>
                        <FieldGroup>
                          <Field>
                            <FieldLabel htmlFor="referral-source">
                              How did you hear about us?
                            </FieldLabel>
                            <Controller
                              name="referralSource"
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
                                    id="referral-source"
                                    className="w-full"
                                  >
                                    <SelectValue placeholder="Select a source…" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      {REFERRAL_SOURCES.map((s) => (
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
                            <FieldHint />
                          </Field>

                          <Controller
                            name="marketingConsent"
                            control={control}
                            render={({ field: f }) => (
                              <Field
                                orientation="horizontal"
                                className="items-baseline"
                              >
                                <Checkbox
                                  id="marketing-consent"
                                  checked={f.value}
                                  onCheckedChange={f.onChange}
                                  onBlur={f.onBlur}
                                />
                                <FieldLabel
                                  htmlFor="marketing-consent"
                                  className="cursor-pointer font-normal"
                                >
                                  I&apos;d like to receive occasional product
                                  updates and news from Ascendra
                                </FieldLabel>
                              </Field>
                            )}
                          />
                        </FieldGroup>
                      </MainSectionPanelItem>
                    </MainSectionPanel>

                    <MainSectionFooter>
                      <MainSectionFooterIcon icon={LuLock} />
                      <span>
                        By submitting this form you agree to our{" "}
                        <a
                          href="#"
                          className="underline underline-offset-2 hover:text-foreground transition-colors"
                        >
                          Privacy Policy
                        </a>
                        . We&apos;ll never share your contact details with third
                        parties.
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
