"use client";

import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { toast } from "@/ascendra-ui";
import { Button } from "@/ascendra-ui";

// ─── Section wrapper ───────────────────────────────────────────────────────────

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
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ToastsShowcasePage() {
  // ── Promise demo ──────────────────────────────────────────────────────────────
  function handlePromise() {
    const work = new Promise<{ name: string }>((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.3
          ? resolve({ name: "report_Q4_2025.pdf" })
          : reject(new Error("Server timeout"));
      }, 2000);
    });

    toast.promise(work, {
      loading: "Generating report…",
      success: (data) => `${data.name} is ready to download.`,
      error: "Failed to generate report. Please try again.",
    });
  }

  // ── Loading → update ──────────────────────────────────────────────────────────
  function handleLoadingUpdate() {
    const id = toast.loading("Uploading file…");
    setTimeout(() => {
      toast.success("File uploaded successfully.", { id });
    }, 2000);
  }

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
          Toast Notifications
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Powered by{" "}
          <span className="text-foreground font-medium">Sonner</span> — a
          lightweight, accessible toast library. The{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">
            {"<Toaster />"}
          </code>{" "}
          is mounted once in the root layout; call{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">
            toast()
          </code>{" "}
          from anywhere in the app. Click any button below to see a live toast.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 flex flex-wrap gap-6 border-t border-b py-5">
        {[
          { label: "Variants", value: "5" },
          { label: "Positions", value: "6" },
          { label: "Promise", value: "✓" },
          { label: "Actions", value: "✓" },
          { label: "Loading state", value: "✓" },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-0.5">
            <span className="text-2xl font-semibold text-foreground">
              {value}
            </span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>

      {/* ── Import chip ─────────────────────────────────────────────────────────── */}
      <div className="mb-10 rounded-lg border bg-muted/40 px-4 py-3">
        <p className="mb-1 text-[0.6875rem] font-medium uppercase tracking-wider text-muted-foreground">
          Import
        </p>
        <code className="font-mono text-xs text-foreground">
          {`import { toast, Toaster } from "@/ascendra-ui";`}
        </code>
      </div>

      {/* ── Demos ───────────────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-10">
        {/* Basic variants */}
        <DemoSection
          title="Variants"
          description="Five semantic variants driven by the design token system. Use the right one for the right message."
        >
          <Button size="sm" variant="secondary" onClick={() => toast("Changes auto-saved.")}>
            Default
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => toast.success("Invite sent to alex@example.com.")}
          >
            Success
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast.error("Payment failed. Check your card details.")
            }
          >
            Error
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast.warning("Your trial expires in 3 days.")
            }
          >
            Warning
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast.info("A new version of the app is available.")
            }
          >
            Info
          </Button>
        </DemoSection>

        {/* With description */}
        <DemoSection
          title="With description"
          description="Add a second line of supporting detail via the description option."
        >
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast.success("Record updated.", {
                description:
                  "Your profile information has been saved successfully.",
              })
            }
          >
            Success + description
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast.error("Sync failed.", {
                description:
                  "Could not reach the server. Your local changes are preserved.",
              })
            }
          >
            Error + description
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast.warning("Storage almost full.", {
                description:
                  "You have used 4.8 GB of your 5 GB plan. Upgrade to avoid interruptions.",
              })
            }
          >
            Warning + description
          </Button>
        </DemoSection>

        {/* With action */}
        <DemoSection
          title="With action"
          description="An inline action button for quick recovery or navigation without leaving the current page."
        >
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast("3 records deleted.", {
                action: {
                  label: "Undo",
                  onClick: () => toast.success("Deletion reversed."),
                },
              })
            }
          >
            Undo action
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast.error("Draft discarded.", {
                description: "Your unsaved changes have been removed.",
                action: {
                  label: "Restore",
                  onClick: () => toast.success("Draft restored."),
                },
              })
            }
          >
            Restore action
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast.info("New team member joined.", {
                description: "Jordan Lee accepted the invitation.",
                action: {
                  label: "View profile",
                  onClick: () => toast("Opening profile…"),
                },
              })
            }
          >
            View action
          </Button>
        </DemoSection>

        {/* Promise */}
        <DemoSection
          title="Promise"
          description="Pass a promise and Sonner handles the loading → success / error lifecycle automatically. 70% chance of success."
        >
          <Button size="sm" variant="secondary" onClick={handlePromise}>
            Generate report (promise)
          </Button>
        </DemoSection>

        {/* Loading → update */}
        <DemoSection
          title="Loading → update"
          description="Use toast.loading() to show a spinner, then resolve it by passing the same id to another toast call."
        >
          <Button
            size="sm"
            variant="secondary"
            onClick={handleLoadingUpdate}
          >
            Upload file (loading → success)
          </Button>
        </DemoSection>

        {/* Duration */}
        <DemoSection
          title="Duration"
          description="Override the default 4 000 ms dismiss timer with any duration in milliseconds."
        >
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast("Dismissed in 1 s.", { duration: 1000 })
            }
          >
            1 second
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast("Dismissed in 8 s.", { duration: 8000 })
            }
          >
            8 seconds
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() =>
              toast("This toast stays until you close it.", {
                duration: Infinity,
              })
            }
          >
            Persistent
          </Button>
        </DemoSection>

        {/* Dismiss */}
        <DemoSection
          title="Dismiss all"
          description="Programmatically dismiss every visible toast — useful on navigation or modal close."
        >
          <Button
            size="sm"
            variant="secondary"
            onClick={() => {
              toast("Toast 1 — waiting to be dismissed.");
              toast.warning("Toast 2 — waiting to be dismissed.");
              toast.error("Toast 3 — waiting to be dismissed.");
            }}
          >
            Show 3 toasts
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => toast.dismiss()}
          >
            Dismiss all
          </Button>
        </DemoSection>

        {/* Usage note */}
        <div className="rounded-lg border bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground">
          <p className="mb-2 font-medium text-foreground">Usage</p>
          <ol className="list-decimal pl-4 space-y-1.5">
            <li>
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">
                {"<Toaster />"}
              </code>{" "}
              is already mounted in{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">
                app/layout.tsx
              </code>{" "}
              — no setup needed.
            </li>
            <li>
              Import{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">
                {"toast"}
              </code>{" "}
              from{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">
                {"@/ascendra-ui"}
              </code>{" "}
              in any client component and call it directly.
            </li>
            <li>
              Server Actions can trigger toasts by calling{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">
                toast()
              </code>{" "}
              in the{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">
                .then()
              </code>{" "}
              handler on the client.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
