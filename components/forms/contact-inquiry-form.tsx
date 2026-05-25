"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { LuLock } from "react-icons/lu";

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
import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";
import { UnsavedChangesBar } from "@/ascendra-ui/components/common-ui/unsaved-changes-bar";
import { BackLink } from "@/ascendra-ui/components/forms/back-link";
import { cn } from "@/ascendra-ui/shadcn/lib/utils";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";
import { PageWrapper } from "@/ascendra-ui/components/layout/page-wrapper";
import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { PageContent } from "@/ascendra-ui/components/layout/page-content";

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

// ─── Textarea ──────────────────────────────────────────────────────────────────
// NOTE: A reusable Textarea component would be a good addition to the design system.

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
                        <p className="text-sm font-medium">Contact Details</p>
                        <FieldGroup>
                          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <Field>
                              <FieldTitle>Full Name</FieldTitle>
                              <Input
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
                              <FieldTitle>Email Address</FieldTitle>
                              <Input
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
                              <FieldTitle>Phone Number</FieldTitle>
                              <Input
                                full
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                autoComplete="tel"
                                {...register("phone")}
                              />
                              <FieldHint optional />
                            </Field>

                            <Field>
                              <FieldTitle>Company / Organization</FieldTitle>
                              <Input
                                full
                                placeholder="Acme Inc."
                                autoComplete="organization"
                                {...register("company")}
                              />
                              <FieldHint optional />
                            </Field>
                          </div>
                        </FieldGroup>
                      </MainSectionPanelItem>

                      {/* ── Your Message ─────────────────────────────────────────────── */}
                      <MainSectionPanelItem>
                        <p className="text-sm font-medium">Your Message</p>
                        <FieldGroup>
                          <SimpleAlert>
                            Our team responds to all inquiries within{" "}
                            <strong>1 business day</strong>. For urgent matters,
                            include &ldquo;Urgent&rdquo; in your subject line.
                          </SimpleAlert>

                          <Field>
                            <FieldTitle>Subject</FieldTitle>
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
                                    className="w-full"
                                    aria-invalid={!!errors.subject || undefined}
                                  >
                                    <SelectValue placeholder="Select a subject…" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {SUBJECTS.map((s) => (
                                      <SelectItem key={s.value} value={s.value}>
                                        {s.label}
                                      </SelectItem>
                                    ))}
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
                                      className="items-center"
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
                            <FieldHint optional />
                          </FieldSet>

                          <Field>
                            <FieldTitle>Message</FieldTitle>
                            <StyledTextarea
                              rows={5}
                              placeholder="Describe your inquiry in detail…"
                              invalid={!!errors.message}
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
                            <FieldHint
                              error={errors.message as { message?: string }}
                              mandatory
                            />
                          </Field>
                        </FieldGroup>
                      </MainSectionPanelItem>

                      {/* ── Additional Information ───────────────────────────────────── */}
                      <MainSectionPanelItem>
                        <p className="text-sm font-medium">
                          Additional Information
                        </p>
                        <FieldGroup>
                          <Field>
                            <FieldTitle>How did you hear about us?</FieldTitle>
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
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a source…" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {REFERRAL_SOURCES.map((s) => (
                                      <SelectItem key={s.value} value={s.value}>
                                        {s.label}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              )}
                            />
                            <FieldHint optional />
                          </Field>

                          <Controller
                            name="marketingConsent"
                            control={control}
                            render={({ field: f }) => (
                              <Field orientation="horizontal">
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
                      <LuLock className="mt-0.5 mr-2 size-3 shrink-0" />
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
