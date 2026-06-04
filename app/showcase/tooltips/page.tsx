"use client";

import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import {
  AlignLeft,
  Bell,
  Copy,
  Download,
  Edit,
  Info,
  Mail,
  MoreHorizontal,
  Settings,
  Share2,
  Trash2,
  Upload,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ascendra-ui/shadcn";
import { Button } from "@/ascendra-ui";
import { SimpleBadge } from "@/ascendra-ui";

// ─── Section wrapper ────────────────────────────────────────────────────────

function DemoSection({
  title,
  description,
  children,
  grid,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  grid?: boolean;
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
      <div className={grid ? "grid grid-cols-2 gap-4 sm:grid-cols-4" : "flex flex-wrap gap-3"}>
        {children}
      </div>
    </div>
  );
}

// ─── Demo card ──────────────────────────────────────────────────────────────

function PlacementCard({
  side,
  children,
}: {
  side: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center rounded-lg border bg-muted/30 p-6">
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side}>
          Tooltip on the {side}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

// ─── Keyboard shortcut badge ────────────────────────────────────────────────

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="ml-2 inline-flex h-4 items-center rounded border border-background/30 bg-background/20 px-1 font-mono text-[0.6rem] text-current">
      {children}
    </kbd>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function TooltipShowcasePage() {
  return (
    <TooltipProvider delayDuration={200}>
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
            Overlays
          </div>
          <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
            Tooltip
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Powered by{" "}
            <span className="text-foreground font-medium">Radix UI Tooltip</span>{" "}
            — a fully accessible, portal-rendered overlay. Wrap any trigger in{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">
              {"<Tooltip>"}
            </code>{" "}
            and add a{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">
              {"<TooltipContent>"}
            </code>{" "}
            sibling. Mount{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">
              {"<TooltipProvider>"}
            </code>{" "}
            once near the root of your tree.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-10 flex flex-wrap gap-6 border-t border-b py-5">
          {[
            { label: "Placements", value: "4" },
            { label: "Delay control", value: "✓" },
            { label: "Rich content", value: "✓" },
            { label: "Accessible", value: "✓" },
            { label: "Portal rendered", value: "✓" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="text-2xl font-semibold text-foreground">{value}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* Import */}
        <div className="mb-10 rounded-lg border bg-muted/40 px-4 py-3">
          <p className="mb-1 text-[0.6875rem] font-medium uppercase tracking-wider text-muted-foreground">
            Import
          </p>
          <code className="font-mono text-xs text-foreground">
            {`import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/ascendra-ui/shadcn";`}
          </code>
        </div>

        {/* Demos */}
        <div className="flex flex-col gap-10">

          {/* Placement */}
          <DemoSection
            title="Placement"
            description="Four placement variants. TooltipContent accepts a side prop: top, right, bottom, left."
            grid
          >
            <PlacementCard side="top">
              <Button variant="secondary" size="sm">Top</Button>
            </PlacementCard>
            <PlacementCard side="right">
              <Button variant="secondary" size="sm">Right</Button>
            </PlacementCard>
            <PlacementCard side="bottom">
              <Button variant="secondary" size="sm">Bottom</Button>
            </PlacementCard>
            <PlacementCard side="left">
              <Button variant="secondary" size="sm">Left</Button>
            </PlacementCard>
          </DemoSection>

          {/* Icon buttons */}
          <DemoSection
            title="Icon buttons"
            description="The primary use case — replace missing visible labels on compact icon-only buttons."
          >
            {[
              { icon: Edit, label: "Edit" },
              { icon: Copy, label: "Duplicate" },
              { icon: Share2, label: "Share" },
              { icon: Download, label: "Download" },
              { icon: Upload, label: "Export" },
              { icon: Mail, label: "Send email" },
              { icon: Bell, label: "Notifications" },
              { icon: Settings, label: "Settings" },
              { icon: Trash2, label: "Delete" },
              { icon: MoreHorizontal, label: "More options" },
            ].map(({ icon: Icon, label }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={label}>
                    <Icon className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
          </DemoSection>

          {/* With keyboard shortcut */}
          <DemoSection
            title="With keyboard shortcut"
            description="Embed a keyboard shortcut hint directly inside the tooltip content."
          >
            {[
              { icon: Copy, label: "Copy", shortcut: "⌘C" },
              { icon: AlignLeft, label: "Select all", shortcut: "⌘A" },
              { icon: Trash2, label: "Delete", shortcut: "⌫" },
              { icon: Share2, label: "Share", shortcut: "⌘⇧S" },
            ].map(({ icon: Icon, label, shortcut }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label={label}>
                    <Icon className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-1">
                  {label}
                  <Kbd>{shortcut}</Kbd>
                </TooltipContent>
              </Tooltip>
            ))}
          </DemoSection>

          {/* Disabled element */}
          <DemoSection
            title="Disabled element"
            description="Disabled buttons swallow pointer events. Wrap in a span so the tooltip can still fire."
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="inline-flex">
                  <Button variant="secondary" size="sm" disabled className="pointer-events-none">
                    Disabled action
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                You don&apos;t have permission to perform this action
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <span tabIndex={0} className="inline-flex">
                  <Button variant="destructive" size="sm" disabled className="pointer-events-none">
                    Delete
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                Upgrade your plan to enable bulk delete
              </TooltipContent>
            </Tooltip>
          </DemoSection>

          {/* Rich content */}
          <DemoSection
            title="Rich content"
            description="Tooltip content can include icons, multi-line text, or structured markup."
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" size="sm" className="gap-1.5">
                  <Info className="size-3.5" />
                  What is this?
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-56 text-center leading-relaxed">
                This score is calculated from your last 30 days of activity and resets on the 1st of each month.
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <SimpleBadge
                  variant="blue"
                  className="cursor-default select-none"
                >
                  Beta
                </SimpleBadge>
              </TooltipTrigger>
              <TooltipContent className="max-w-44 text-center leading-relaxed">
                This feature is in early access. Behaviour may change before GA.
              </TooltipContent>
            </Tooltip>
          </DemoSection>

          {/* Delay duration */}
          <DemoSection
            title="Delay duration"
            description="Control how long the user must hover before the tooltip appears. Default is 200 ms."
          >
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="sm">Instant (0 ms)</Button>
                </TooltipTrigger>
                <TooltipContent>No delay</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="sm">Default (200 ms)</Button>
                </TooltipTrigger>
                <TooltipContent>200 ms delay</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={700}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="sm">Slow (700 ms)</Button>
                </TooltipTrigger>
                <TooltipContent>700 ms delay</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DemoSection>

          {/* Usage note */}
          <div className="rounded-lg border bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground">
            <p className="mb-2 font-medium text-foreground">Usage notes</p>
            <ol className="list-decimal pl-4 space-y-1.5">
              <li>
                Mount{" "}
                <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">{"<TooltipProvider>"}</code>{" "}
                once at the top of your app (or per feature area) — not once per tooltip.
              </li>
              <li>
                Always add an{" "}
                <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">aria-label</code>{" "}
                to icon-only buttons even when a tooltip is present — screen readers don&apos;t wait for hover.
              </li>
              <li>
                Disabled native elements block pointer events.{" "}
                Wrap them in a{" "}
                <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">{"<span tabIndex={0}>"}</code>{" "}
                to restore tooltip behaviour.
              </li>
              <li>
                Tooltips are already used inside{" "}
                <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">{"<Field>"}</code>{" "}
                for the hint icon — no extra setup needed when using the form system.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
