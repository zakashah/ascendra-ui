"use client";

import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { cn } from "@/ascendra-ui/shadcn/lib/utils";
import { UnsavedChangesBar } from "@/ascendra-ui/components/common-ui/unsaved-changes-bar";

// ─── Sub-components ───────────────────────────────────────────────────────────

export function FormPageBack({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground hover:text-foreground flex w-fit items-center gap-1.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
    >
      <LuArrowLeft className="size-3.5" />
      {label}
    </Link>
  );
}

export function FormPageHeader({
  title,
  description,
  action,
  className,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-start justify-between gap-4", className)}>
      <div className="flex flex-col gap-0.5">
        <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function FormPageTabs({
  tabs,
  active,
  onChange,
  className,
}: {
  tabs: { label: string; value: string }[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <nav
      className={cn(
        "flex gap-0.5 border-b border-border -mb-px",
        className
      )}
      aria-label="Form tabs"
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          className={cn(
            "relative px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-t-sm",
            active === tab.value
              ? "text-foreground after:absolute after:bottom-0 after:inset-x-0 after:h-px after:bg-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-selected={active === tab.value}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

// ─── Section primitives ───────────────────────────────────────────────────────

export function FormSection({
  children,
  className,
  danger = false,
}: {
  children: React.ReactNode;
  className?: string;
  danger?: boolean;
}) {
  return (
    <section
      data-slot="form-section"
      className={cn(
        "group bg-muted flex flex-col rounded-xl py-1",
        danger && "bg-red-50 dark:bg-(--color-red-1500)",
        className
      )}
    >
      {children}
    </section>
  );
}

export function FormSectionHeader({
  title,
  description,
  action,
  collapsible = false,
  collapsed = false,
  onToggle,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
  collapsible?: boolean;
  collapsed?: boolean;
  onToggle?: () => void;
}) {
  return (
    <header className="flex items-start justify-between gap-4 px-6 py-4">
      <button
        type="button"
        className={cn(
          "flex flex-col gap-0.5 text-left",
          collapsible && "cursor-pointer"
        )}
        onClick={collapsible ? onToggle : undefined}
        aria-expanded={collapsible ? !collapsed : undefined}
      >
        <span className="text-base font-medium">{title}</span>
        {description && (
          <span className="text-muted-foreground text-xs">{description}</span>
        )}
      </button>
      <div className="flex shrink-0 items-center gap-2">
        {action}
        {collapsible && (
          <span
            className={cn(
              "text-muted-foreground transition-transform duration-200",
              !collapsed && "rotate-180"
            )}
            aria-hidden
          >
            ▾
          </span>
        )}
      </div>
    </header>
  );
}

export function FormSectionPanel({
  collapsed = false,
  children,
  className,
}: {
  collapsed?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="main-section-panel"
      data-collapsed={collapsed ? "true" : "false"}
      inert={collapsed}
      className={cn(
        "grid transition-all duration-300",
        collapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]",
        className
      )}
    >
      <div className="-m-2 overflow-hidden mask-[linear-gradient(to_bottom,black,black_calc(100%-8px),transparent)] p-2 transition-all duration-300">
        <div
          className={cn(
            "bg-background mx-1 rounded-lg ring-1 ring-(--color-umbra)/4 dark:ring-black/20",
            "shadow-[0_1px_2px_0_rgba(25,28,33,0.06),0_0_2px_0_rgba(0,0,0,0.08)]",
            "dark:shadow-[inset_0_0_1px_1px_rgba(255,255,255,0.01),0_1px_3px_0_rgba(0,0,0,0.4),0_0_3px_0_rgba(0,0,0,0.2)]"
          )}
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export function FormSectionBlock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="form-section-block"
      className={cn("border-border space-y-5 border-t px-5 py-6 first:border-none", className)}
    >
      {children}
    </div>
  );
}

export function FormSectionBlockTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-sm font-medium", className)}>{children}</p>
  );
}

export function FormSectionFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <footer
      data-slot="main-section-footer"
      className={cn(
        "text-muted-foreground flex items-start px-5 pt-4 pb-3 text-xs transition-colors duration-300",
        "border-border border-t",
        "group-[:has(>[data-slot=main-section-panel][data-collapsed='false'])]:border-t-0",
        className
      )}
    >
      {children}
    </footer>
  );
}

// ─── Root layout wrapper ──────────────────────────────────────────────────────

interface FormPageLayoutProps {
  backHref: string;
  backLabel: string;
  title: string;
  description?: string;
  /** Sidebar offset class passed to UnsavedChangesBar — default matches the showcase sidebar width */
  unsavedBarClassName?: string;
  /** Controlled UnsavedChangesBar state */
  isDirty: boolean;
  isValid: boolean;
  isSaving: boolean;
  onSave: () => boolean | Promise<boolean> | void;
  onReset: () => void;
  onInvalid?: () => void;
  children: React.ReactNode;
}

export function FormPageLayout({
  backHref,
  backLabel,
  title,
  description,
  unsavedBarClassName,
  isDirty,
  isValid,
  isSaving,
  onSave,
  onReset,
  onInvalid,
  children,
}: FormPageLayoutProps) {
  return (
    <div className="app-container mt-8 pb-24 lg:mt-10 lg:pb-28">
      <div className="flex flex-col gap-6">
        <FormPageBack href={backHref} label={backLabel} />
        <FormPageHeader title={title} description={description} />
        <div className="flex flex-col gap-6">{children}</div>
      </div>

      <UnsavedChangesBar
        isDirty={isDirty}
        isValid={isValid}
        isSaving={isSaving}
        onSave={onSave}
        onReset={onReset}
        onInvalid={onInvalid}
        className={unsavedBarClassName ?? "lg:left-[calc(50%+7rem)]"}
      />
    </div>
  );
}
