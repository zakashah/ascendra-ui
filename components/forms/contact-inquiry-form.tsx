"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LuLock } from "react-icons/lu";

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

// ─── Types ─────────────────────────────────────────────────────────────────────

interface ContactValues {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  inquiryType: string;
  message: string;
  referralSource: string;
  marketingConsent: boolean;
}

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
    register,
    control,
    trigger,
    reset,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useForm<ContactValues>({
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
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldLabel htmlFor="full-name">
                                Full Name
                              </FieldLabel>
                              <Input
                                id="full-name"
                                full
                                placeholder="Jane Smith"
                                autoComplete="name"
                                aria-invalid={!!errors.fullName}
                                {...register("fullName", {
                                  required: "Full name is required",
                                })}
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
                              <Input
                                id="email"
                                full
                                type="email"
                                placeholder="jane@example.com"
                                autoComplete="email"
                                aria-invalid={!!errors.email}
                                {...register("email", {
                                  required: "Email address is required",
                                  pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address",
                                  },
                                })}
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
                              <Input
                                id="phone"
                                full
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                autoComplete="tel"
                                {...register("phone")}
                              />
                              <FieldHint optional />
                            </Field>

                            <Field>
                              <FieldLabel htmlFor="company">
                                Company / Organization
                              </FieldLabel>
                              <Input
                                id="company"
                                full
                                placeholder="Acme Inc."
                                autoComplete="organization"
                                {...register("company")}
                              />
                              <FieldHint mandatory />
                            </Field>
                          </div>
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
                                rules={{ required: "Please select a subject" }}
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
                              <InputGroup>
                                <InputGroupTextarea
                                  id="message"
                                  rows={5}
                                  placeholder="Describe your inquiry in detail…"
                                  aria-invalid={!!errors.message}
                                  {...register("message", {
                                    required: "Please enter your message",
                                    minLength: {
                                      value: 20,
                                      message:
                                        "Message must be at least 20 characters",
                                    },
                                  })}
                                />
                              </InputGroup>
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
