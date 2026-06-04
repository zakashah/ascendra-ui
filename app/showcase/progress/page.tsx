"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { ProgressBar } from "@/ascendra-ui";
import { Stepper } from "@/ascendra-ui";
import { Button } from "@/ascendra-ui";
import type { StepStatus } from "@/ascendra-ui";

// ─── Section wrapper ─────────────────────────────────────────────────────────

function DemoSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <div className="flex items-center gap-3 pb-2">
          <h2 className="text-sm font-semibold whitespace-nowrap">{title}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ProgressShowcasePage() {
  const [step, setStep] = useState(1);
  const [errorStep, setErrorStep] = useState(1);

  const onboardingSteps = [
    { label: "Account", description: "Create credentials" },
    { label: "Profile", description: "Add your details" },
    { label: "Workspace", description: "Set up your team" },
    { label: "Done", description: "All set" },
  ];

  const checkoutSteps = [
    { label: "Cart", description: "Review items" },
    { label: "Shipping", description: "Delivery address" },
    { label: "Payment", description: "Card details" },
  ];

  const errorSteps: Array<{ label: string; status: StepStatus }> = [
    { label: "Upload", status: "completed" },
    { label: "Validate", status: errorStep === 1 ? "error" : errorStep > 1 ? "completed" : "pending" },
    { label: "Process", status: errorStep === 2 ? "active" : errorStep > 2 ? "completed" : "pending" },
    { label: "Publish", status: "pending" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-8 py-12">
      {/* Back */}
      <Link
        href="/showcase"
        className="text-muted-foreground hover:text-foreground mb-8 flex w-fit items-center gap-1.5 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      >
        <LuArrowLeft className="size-3 stroke-2" />
        Component Showcase
      </Link>

      {/* Hero */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Feedback &amp; Status
        </div>
        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
          Progress &amp; Stepper
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          <span className="text-foreground font-medium">ProgressBar</span> wraps{" "}
          <span className="text-foreground font-medium">Radix UI Progress</span> with size and color
          variants.{" "}
          <span className="text-foreground font-medium">Stepper</span> is a fully custom
          horizontal step-progress component with completion, active, and error states.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 flex flex-wrap gap-6 border-t border-b py-5">
        {[
          { label: "Bar sizes", value: "4" },
          { label: "Bar colors", value: "5" },
          { label: "Indeterminate", value: "✓" },
          { label: "Step states", value: "4" },
          { label: "Accessible", value: "✓" },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-0.5">
            <span className="text-2xl font-semibold text-foreground">{value}</span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>

      {/* Import */}
      <div className="mb-10 rounded-lg border bg-muted/40 px-4 py-3 space-y-1">
        <p className="text-[0.6875rem] font-medium uppercase tracking-wider text-muted-foreground">
          Import
        </p>
        <code className="block font-mono text-xs text-foreground">
          {`import { ProgressBar } from "@/ascendra-ui";`}
        </code>
        <code className="block font-mono text-xs text-foreground">
          {`import { Stepper } from "@/ascendra-ui";`}
        </code>
      </div>

      {/* Demos */}
      <div className="flex flex-col gap-10">

        {/* ── ProgressBar ──────────────────────────────────────────────────────── */}

        <DemoSection
          title="Sizes"
          description="Four height variants: xs (2 px), sm (4 px), md (6 px, default), lg (10 px)."
        >
          {(["xs", "sm", "md", "lg"] as const).map((size) => (
            <div key={size} className="flex items-center gap-3">
              <span className="w-6 text-right text-[0.6875rem] text-muted-foreground">{size}</span>
              <div className="flex-1">
                <ProgressBar value={65} size={size} />
              </div>
            </div>
          ))}
        </DemoSection>

        <DemoSection
          title="Color variants"
          description="Semantic color tokens that map to design-system values."
        >
          {(
            [
              { color: "default", label: "Default (primary)" },
              { color: "success", label: "Success" },
              { color: "warning", label: "Warning" },
              { color: "destructive", label: "Destructive" },
              { color: "info", label: "Info" },
            ] as const
          ).map(({ color, label }) => (
            <div key={color} className="flex items-center gap-3">
              <span className="w-36 text-[0.6875rem] text-muted-foreground">{label}</span>
              <div className="flex-1">
                <ProgressBar value={60} color={color} />
              </div>
            </div>
          ))}
        </DemoSection>

        <DemoSection
          title="Determinate values"
          description="Pass any value 0–100. The bar transitions smoothly on change."
        >
          {[0, 25, 50, 75, 100].map((v) => (
            <div key={v} className="flex items-center gap-3">
              <span className="w-10 text-right text-[0.6875rem] tabular-nums text-muted-foreground">
                {v}%
              </span>
              <div className="flex-1">
                <ProgressBar value={v} />
              </div>
            </div>
          ))}
        </DemoSection>

        <DemoSection
          title="Indeterminate"
          description="Pass indeterminate when the completion percentage is unknown — file upload, background fetch."
        >
          <div className="flex items-center gap-3">
            <span className="w-24 text-[0.6875rem] text-muted-foreground">Loading…</span>
            <div className="flex-1">
              <ProgressBar indeterminate />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-24 text-[0.6875rem] text-muted-foreground">Syncing…</span>
            <div className="flex-1">
              <ProgressBar indeterminate color="info" size="lg" />
            </div>
          </div>
        </DemoSection>

        {/* ── Stepper ──────────────────────────────────────────────────────────── */}

        <DemoSection
          title="Stepper — onboarding flow"
          description="4-step onboarding wizard. Use the buttons to advance or go back."
        >
          <div className="rounded-lg border bg-muted/20 p-6 flex flex-col gap-6">
            <Stepper steps={onboardingSteps} currentStep={step} />
            <div className="flex items-center justify-between">
              <Button
                variant="secondary"
                size="sm"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
              >
                Back
              </Button>
              <span className="text-xs text-muted-foreground">
                Step {step + 1} of {onboardingSteps.length}
              </span>
              <Button
                variant="primary"
                size="sm"
                disabled={step === onboardingSteps.length - 1}
                onClick={() => setStep((s) => Math.min(onboardingSteps.length - 1, s + 1))}
              >
                Continue
              </Button>
            </div>
          </div>
        </DemoSection>

        <DemoSection
          title="Stepper — 3-step checkout"
          description="Minimal stepper without descriptions — good for compact spaces."
        >
          <div className="rounded-lg border bg-muted/20 p-6">
            <Stepper steps={checkoutSteps} currentStep={1} />
          </div>
        </DemoSection>

        <DemoSection
          title="Stepper — error state"
          description="Individual steps can carry an error status independently of currentStep. Click Retry to clear."
        >
          <div className="rounded-lg border bg-muted/20 p-6 flex flex-col gap-6">
            <Stepper steps={errorSteps} />
            <div className="flex gap-2">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setErrorStep(1)}
              >
                Reset to error
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setErrorStep(2)}
              >
                Retry
              </Button>
            </div>
          </div>
        </DemoSection>

        <DemoSection
          title="Stepper — manual status control"
          description="Pass status per-step when you need full control outside of currentStep."
        >
          <div className="rounded-lg border bg-muted/20 p-6">
            <Stepper
              steps={[
                { label: "Submitted", status: "completed" },
                { label: "In Review", status: "completed" },
                { label: "Approved", status: "active" },
                { label: "Published", status: "pending" },
              ]}
            />
          </div>
        </DemoSection>

      </div>
    </div>
  );
}
