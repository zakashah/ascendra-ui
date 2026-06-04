"use client";

import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import {
  Skeleton,
  SkeletonCard,
  SkeletonStat,
  SkeletonTable,
  SkeletonTableRow,
  SkeletonText,
  SkeletonUser,
} from "@/ascendra-ui";

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
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function SkeletonShowcasePage() {
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
          Skeleton / Loading Shimmer
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Powered by{" "}
          <span className="text-foreground font-medium">shadcn Skeleton</span>{" "}
          — a single{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">
            animate-pulse
          </code>{" "}
          base component with Ascendra preset compositions for common layouts:
          text, card, table, stat, and user rows.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 flex flex-wrap gap-6 border-t border-b py-5">
        {[
          { label: "Presets", value: "6" },
          { label: "Base primitive", value: "✓" },
          { label: "Composable", value: "✓" },
          { label: "Zero JS", value: "✓" },
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
          {`import { Skeleton, SkeletonText, SkeletonCard, SkeletonTable, SkeletonStat, SkeletonUser } from "@/ascendra-ui";`}
        </code>
      </div>

      {/* Demos */}
      <div className="flex flex-col gap-10">

        {/* Base */}
        <DemoSection
          title="Base — Skeleton"
          description="The raw primitive. Any size, any shape — compose freely."
        >
          <div className="flex items-center gap-4">
            <Skeleton className="size-12 rounded-full" />
            <Skeleton className="size-12 rounded-lg" />
            <Skeleton className="h-12 w-48 rounded-lg" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </DemoSection>

        {/* Text */}
        <DemoSection
          title="SkeletonText"
          description="Mimics a block of body text. The last line is always shorter to feel natural."
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <p className="text-[0.6875rem] text-muted-foreground mb-1">2 lines</p>
              <SkeletonText lines={2} />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-[0.6875rem] text-muted-foreground mb-1">4 lines</p>
              <SkeletonText lines={4} />
            </div>
          </div>
        </DemoSection>

        {/* User */}
        <DemoSection
          title="SkeletonUser"
          description="Avatar + name/email row. Use in table cells, comment threads, member lists."
        >
          <div className="flex flex-col gap-4">
            <SkeletonUser />
            <SkeletonUser />
            <SkeletonUser />
          </div>
        </DemoSection>

        {/* Stat */}
        <DemoSection
          title="SkeletonStat"
          description="Mimics a stat card (metric title, large number, trend line). Use in dashboard grids."
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <SkeletonStat />
            <SkeletonStat />
            <SkeletonStat />
            <SkeletonStat />
          </div>
        </DemoSection>

        {/* Card */}
        <DemoSection
          title="SkeletonCard"
          description="Mimics a content card with avatar header and body text."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </DemoSection>

        {/* Table row */}
        <DemoSection
          title="SkeletonTableRow"
          description="Single table row with configurable column count. Use inside an existing table shell."
        >
          <div className="rounded-xl border bg-background overflow-hidden">
            <SkeletonTableRow columns={5} />
            <SkeletonTableRow columns={5} />
            <SkeletonTableRow columns={5} />
          </div>
        </DemoSection>

        {/* Full table */}
        <DemoSection
          title="SkeletonTable"
          description="Complete table skeleton including a header row. Pass rows and columns as needed."
        >
          <SkeletonTable rows={5} columns={5} />
        </DemoSection>

        {/* Composed page skeleton */}
        <DemoSection
          title="Composed — full page loading state"
          description="Combine presets to produce a realistic loading screen for an entire page."
        >
          <div className="flex flex-col gap-6 rounded-xl border bg-background p-6">
            {/* Page header */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-3 w-64" />
              </div>
              <Skeleton className="h-8 w-24 rounded-md" />
            </div>
            {/* Stat row */}
            <div className="grid grid-cols-4 gap-4">
              <SkeletonStat />
              <SkeletonStat />
              <SkeletonStat />
              <SkeletonStat />
            </div>
            {/* Table */}
            <SkeletonTable rows={4} columns={5} />
          </div>
        </DemoSection>

      </div>
    </div>
  );
}
