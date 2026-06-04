"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { FileUpload } from "@/ascendra-ui";
import type { FileUploadState } from "@/ascendra-ui";
import { Button } from "@/ascendra-ui";
import { Field, FieldLabel, FieldHint } from "@/ascendra-ui";

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

// ─── Simulated upload demo ────────────────────────────────────────────────────

function SimulatedUpload() {
  const [state, setState] = useState<FileUploadState>("idle");
  const [progress, setProgress] = useState(0);

  function handleFiles() {
    setState("uploading");
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setState("success");
          return 100;
        }
        return p + 10;
      });
    }, 200);
  }

  return (
    <FileUpload
      variant="dropzone"
      accept=".pdf,.docx"
      maxSize={5 * 1024 * 1024}
      state={state}
      uploadProgress={state === "uploading" ? progress : undefined}
      onFiles={handleFiles}
    />
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FileUploadShowcasePage() {
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
          Forms &amp; Inputs
        </div>
        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
          File Upload
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A fully custom file upload component with three layout variants and five controlled states.
          Follows the same border, ring, and shadow tokens as other inputs in the design system.
          Supports drag-and-drop, file type validation, size limits, and a progress bar.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 flex flex-wrap gap-6 border-t border-b py-5">
        {[
          { label: "Variants", value: "3" },
          { label: "States", value: "5" },
          { label: "Drag & drop", value: "✓" },
          { label: "Validation", value: "✓" },
          { label: "Multi-file", value: "✓" },
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
        <code className="block font-mono text-xs text-foreground">
          {`import { FileUpload } from "@/ascendra-ui";`}
        </code>
      </div>

      {/* Demos */}
      <div className="flex flex-col gap-10">

        {/* ── Dropzone ──────────────────────────────────────────────────────── */}

        <DemoSection
          title='variant="dropzone"'
          description="Large drag-and-drop zone. Best for primary upload actions on a dedicated page. Shows progress inline."
        >
          {/* Default idle */}
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">Idle — any file type</p>
            <FileUpload variant="dropzone" />
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">With type and size restrictions</p>
            <FileUpload
              variant="dropzone"
              accept=".pdf,.docx,.xlsx"
              maxSize={10 * 1024 * 1024}
              multiple
            />
          </div>
        </DemoSection>

        <DemoSection
          title="Dropzone — controlled states"
          description="All five states rendered statically for inspection."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Drag-over</p>
              <FileUpload variant="dropzone" state="dragover" />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Uploading (60%)</p>
              <FileUpload variant="dropzone" state="uploading" uploadProgress={60} />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Success</p>
              <FileUpload variant="dropzone" state="success" />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Error</p>
              <FileUpload
                variant="dropzone"
                state="error"
                errorMessage="document.pdf exceeds max size of 5.0 MB."
              />
            </div>
          </div>
        </DemoSection>

        <DemoSection
          title="Dropzone — simulated upload"
          description="Click the zone (or drag a file) to trigger a progress animation that resolves to success."
        >
          <SimulatedUpload />
        </DemoSection>

        <DemoSection
          title="Dropzone — disabled"
          description="Pass disabled to block all interactions."
        >
          <FileUpload variant="dropzone" disabled />
        </DemoSection>

        {/* ── Button ────────────────────────────────────────────────────────── */}

        <DemoSection
          title='variant="button"'
          description="Compact inline trigger. Good for form fields where space is limited."
        >
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Single file</p>
              <FileUpload variant="button" accept=".pdf" maxSize={5 * 1024 * 1024} />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Multiple files</p>
              <FileUpload variant="button" multiple />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Error state</p>
              <FileUpload
                variant="button"
                state="error"
                errorMessage="Only .pdf files are accepted."
              />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Disabled</p>
              <FileUpload variant="button" disabled />
            </div>
          </div>
        </DemoSection>

        {/* ── Inline ────────────────────────────────────────────────────────── */}

        <DemoSection
          title='variant="inline"'
          description="Chips-style multi-file selector that lives inside a form row. Files appear as removable tags."
        >
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Default</p>
              <FileUpload variant="inline" multiple />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Error state</p>
              <FileUpload
                variant="inline"
                multiple
                state="error"
                errorMessage="Maximum 3 files allowed."
              />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Disabled</p>
              <FileUpload variant="inline" multiple disabled />
            </div>
          </div>
        </DemoSection>

        {/* ── Inside Field ──────────────────────────────────────────────────── */}

        <DemoSection
          title="Inside Field"
          description="All three variants drop into a Field wrapper like any other input."
        >
          <div className="flex flex-col gap-5">
            <Field>
              <FieldLabel>Attachment</FieldLabel>
              <FileUpload variant="button" accept=".pdf,.docx" maxSize={10 * 1024 * 1024} />
              <FieldHint description="PDF or Word doc, max 10 MB" />
            </Field>
            <Field>
              <FieldLabel>Supporting documents</FieldLabel>
              <FileUpload variant="inline" multiple accept=".pdf,.jpg,.png" />
              <FieldHint description="Multiple files allowed" />
            </Field>
            <Field>
              <FieldLabel>Cover image</FieldLabel>
              <FileUpload variant="dropzone" accept="image/*" />
            </Field>
          </div>
        </DemoSection>

      </div>
    </div>
  );
}
