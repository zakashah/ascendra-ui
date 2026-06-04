"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import {
  BarChart2,
  Bell,
  FileText,
  LayoutDashboard,
  LogOut,
  Plus,
  Search,
  Settings,
  Share2,
  Star,
  Table2,
  Trash2,
  UserPlus,
  Users,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/ascendra-ui/shadcn";
import { CommandPalette, useCommandPalette } from "@/ascendra-ui";
import { Button } from "@/ascendra-ui";
import { SimpleBadge } from "@/ascendra-ui";

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
      {children}
    </div>
  );
}

// ─── App palette groups ───────────────────────────────────────────────────────

const paletteGroups = [
  {
    label: "Navigation",
    items: [
      { id: "dashboard", label: "Go to Dashboard", icon: LayoutDashboard, shortcut: "⌘D", onSelect: () => {} },
      { id: "reports", label: "Go to Reports", icon: BarChart2, shortcut: "⌘R", onSelect: () => {} },
      { id: "users", label: "Go to Users", icon: Users, shortcut: "⌘U", onSelect: () => {} },
      { id: "data-table", label: "Go to Data Table", icon: Table2, onSelect: () => {} },
    ],
  },
  {
    label: "Actions",
    items: [
      { id: "new-report", label: "New Report", icon: Plus, shortcut: "⌘N", onSelect: () => {} },
      { id: "invite", label: "Invite Team Member", icon: UserPlus, onSelect: () => {} },
      { id: "share", label: "Share Current View", icon: Share2, shortcut: "⌘⇧S", onSelect: () => {} },
      { id: "export", label: "Export as CSV", icon: FileText, onSelect: () => {} },
    ],
  },
  {
    label: "Recent",
    items: [
      { id: "recent-1", label: "Q4 Revenue Report", icon: Star, onSelect: () => {} },
      { id: "recent-2", label: "Marketing Dashboard", icon: Star, onSelect: () => {} },
    ],
  },
  {
    label: "Settings",
    items: [
      { id: "settings", label: "Open Settings", icon: Settings, shortcut: "⌘,", onSelect: () => {} },
      { id: "notifications", label: "Notification Preferences", icon: Bell, onSelect: () => {} },
      { id: "logout", label: "Sign Out", icon: LogOut, onSelect: () => {} },
    ],
  },
];

const destructiveGroups = [
  {
    label: "Danger Zone",
    items: [
      { id: "del-report", label: "Delete Selected Report", icon: Trash2, shortcut: "⌫", onSelect: () => {} },
      { id: "del-all", label: "Clear All Filters", icon: Trash2, onSelect: () => {} },
    ],
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CommandPaletteShowcasePage() {
  const { open, setOpen } = useCommandPalette();
  const [destructiveOpen, setDestructiveOpen] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const trackedGroups = paletteGroups.map((g) => ({
    ...g,
    items: g.items.map((item) => ({
      ...item,
      onSelect: () => setLastAction(item.label),
    })),
  }));

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
          Overlays
        </div>
        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
          Command Palette
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Powered by{" "}
          <span className="text-foreground font-medium">cmdk</span> via shadcn{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">Command</code>.
          The{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">CommandPalette</code>{" "}
          wrapper handles the dialog shell, grouped items, and keyboard shortcut registration.
          Use{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">useCommandPalette()</code>{" "}
          for the{" "}
          <kbd className="inline-flex h-4 items-center rounded border px-1 font-mono text-[0.6rem]">⌘K</kbd>{" "}
          keybind.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 flex flex-wrap gap-6 border-t border-b py-5">
        {[
          { label: "Keyboard shortcut", value: "⌘K" },
          { label: "Grouped items", value: "✓" },
          { label: "Fuzzy search", value: "✓" },
          { label: "Shortcuts display", value: "✓" },
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
          {`import { CommandPalette, useCommandPalette } from "@/ascendra-ui";`}
        </code>
        <code className="block font-mono text-xs text-foreground">
          {`import { Command, CommandInput, CommandItem, CommandGroup, CommandShortcut, ... } from "@/ascendra-ui/shadcn";`}
        </code>
      </div>

      {/* Demos */}
      <div className="flex flex-col gap-10">

        {/* Main palette */}
        <DemoSection
          title="Full command palette"
          description="4 groups: Navigation, Actions, Recent, Settings. Press ⌘K anywhere on this page or click the button."
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="secondary" size="sm" className="gap-2" onClick={() => setOpen(true)}>
              <Search className="size-3.5" />
              Open palette
            </Button>
            <div className="flex items-center gap-1.5 rounded-md border bg-muted/40 px-2 py-1 text-xs text-muted-foreground">
              Or press
              <kbd className="inline-flex h-4 items-center rounded border px-1 font-mono text-[0.6rem]">⌘</kbd>
              <kbd className="inline-flex h-4 items-center rounded border px-1 font-mono text-[0.6rem]">K</kbd>
            </div>
            {lastAction && (
              <SimpleBadge variant="green">
                Selected: {lastAction}
              </SimpleBadge>
            )}
          </div>

          <CommandPalette
            open={open}
            onOpenChange={setOpen}
            groups={trackedGroups}
          />
        </DemoSection>

        {/* Inline (embedded) */}
        <DemoSection
          title="Inline (embedded)"
          description="The same Command primitives can be embedded directly in a panel — no dialog needed."
        >
          <div className="rounded-xl border bg-background overflow-hidden max-w-md">
            <Command>
              <CommandInput placeholder="Search commands…" />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Navigation">
                  <CommandItem>
                    <LayoutDashboard className="size-4 text-muted-foreground" />
                    Dashboard
                    <CommandShortcut>⌘D</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <BarChart2 className="size-4 text-muted-foreground" />
                    Reports
                    <CommandShortcut>⌘R</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Users className="size-4 text-muted-foreground" />
                    Users
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Actions">
                  <CommandItem>
                    <Plus className="size-4 text-muted-foreground" />
                    New Report
                    <CommandShortcut>⌘N</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="size-4 text-muted-foreground" />
                    Settings
                    <CommandShortcut>⌘,</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </DemoSection>

        {/* Destructive actions palette */}
        <DemoSection
          title="Danger zone palette"
          description="Restrict a palette to destructive actions only — use sparingly."
        >
          <div className="flex items-center gap-3">
            <Button variant="destructive" size="sm" onClick={() => setDestructiveOpen(true)}>
              Open danger palette
            </Button>
          </div>
          <CommandPalette
            open={destructiveOpen}
            onOpenChange={setDestructiveOpen}
            groups={destructiveGroups}
            placeholder="Type a destructive action…"
          />
        </DemoSection>

        {/* Usage note */}
        <div className="rounded-lg border bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground">
          <p className="mb-2 font-medium text-foreground">Usage notes</p>
          <ol className="list-decimal pl-4 space-y-1.5">
            <li>
              Call{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">useCommandPalette()</code>{" "}
              once per palette to get{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">&#123; open, setOpen &#125;</code>{" "}
              — it registers the{" "}
              <kbd className="inline-flex h-4 items-center rounded border px-1 font-mono text-[0.6rem]">⌘K</kbd>{" "}
              listener automatically.
            </li>
            <li>
              Use{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">CommandPalette</code>{" "}
              when you want the full modal experience with grouped items and fuzzy search.
            </li>
            <li>
              Use the raw{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">Command</code>{" "}
              primitives when embedding in a sidebar, drawer, or panel without a dialog wrapper.
            </li>
            <li>
              cmdk handles all fuzzy filtering internally — no extra configuration needed.
            </li>
          </ol>
        </div>

      </div>
    </div>
  );
}
