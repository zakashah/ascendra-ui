"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { RichTextEditor } from "@/ascendra-ui";
import { Field, FieldLabel, FieldHint } from "@/ascendra-ui";
import { Button } from "@/ascendra-ui";

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

// ─── Controlled form example ──────────────────────────────────────────────────

function ControlledExample() {
  const [html, setHtml] = useState("<p>Start typing your notes here…</p>");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <RichTextEditor
        value={html}
        onChange={setHtml}
        placeholder="Write your notes…"
      />
      <div className="flex items-center gap-2">
        <Button variant="primary" size="sm" onClick={() => setSubmitted(true)}>
          Submit
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => { setHtml(""); setSubmitted(false); }}
        >
          Clear
        </Button>
      </div>
      {submitted && (
        <div className="rounded-lg border bg-muted/30 px-4 py-3">
          <p className="mb-1 text-[0.6875rem] font-medium uppercase tracking-wider text-muted-foreground">
            HTML output
          </p>
          <code className="break-all font-mono text-xs text-foreground">{html}</code>
        </div>
      )}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

const INITIAL_CONTENT = `<p>This is a <strong>rich text editor</strong> built with <em>Tiptap</em>.</p><ul><li>Bold, italic, strikethrough</li><li>Bulleted and numbered lists</li><li>Link support</li></ul>`;

export default function RichTextEditorShowcasePage() {
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
          Rich Text Editor
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Powered by{" "}
          <span className="text-foreground font-medium">Tiptap</span> — a headless,
          extensible rich text framework. The{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">
            RichTextEditor
          </code>{" "}
          wrapper adds a fixed minimal toolbar, Ascendra input styling, and a controlled{" "}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[0.6875rem]">
            value/onChange
          </code>{" "}
          API that works with react-hook-form.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 flex flex-wrap gap-6 border-t border-b py-5">
        {[
          { label: "Toolbar actions", value: "6" },
          { label: "Read-only mode", value: "✓" },
          { label: "HTML output", value: "✓" },
          { label: "Placeholder", value: "✓" },
          { label: "RHF compatible", value: "✓" },
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
          {`import { RichTextEditor } from "@/ascendra-ui";`}
        </code>
      </div>

      {/* Demos */}
      <div className="flex flex-col gap-10">

        <DemoSection
          title="Default"
          description="Basic editor with toolbar and placeholder."
        >
          <RichTextEditor placeholder="Start writing…" />
        </DemoSection>

        <DemoSection
          title="Pre-populated content"
          description="Pass an HTML string as the initial value."
        >
          <RichTextEditor value={INITIAL_CONTENT} />
        </DemoSection>

        <DemoSection
          title="Read-only mode"
          description="Hides the toolbar and disables editing. Matches the disabled-input styling."
        >
          <RichTextEditor
            value={INITIAL_CONTENT}
            readOnly
          />
        </DemoSection>

        <DemoSection
          title="Custom min-height"
          description="Expand the writing surface for longer-form content like notes or descriptions."
        >
          <RichTextEditor
            placeholder="Write a detailed description…"
            minHeight={240}
          />
        </DemoSection>

        <DemoSection
          title="Inside Field"
          description="Drops into a Field wrapper like any other input."
        >
          <div className="flex flex-col gap-5">
            <Field>
              <FieldLabel>Description</FieldLabel>
              <RichTextEditor placeholder="Describe your project…" />
              <FieldHint description="Supports bold, italic, and lists" />
            </Field>
            <Field>
              <FieldLabel>Release notes <span className="text-destructive">*</span></FieldLabel>
              <RichTextEditor placeholder="What changed in this release?" minHeight={160} />
            </Field>
          </div>
        </DemoSection>

        <DemoSection
          title="Controlled — with HTML output"
          description="onChange fires with the full HTML string. Click Submit to inspect the raw output."
        >
          <ControlledExample />
        </DemoSection>

        {/* Usage note */}
        <div className="rounded-lg border bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground">
          <p className="mb-2 font-medium text-foreground">Usage with react-hook-form</p>
          <pre className="overflow-x-auto rounded bg-muted p-3 font-mono text-[0.6875rem] leading-relaxed">
{`const { control } = useForm<{ body: string }>();

<Controller
  control={control}
  name="body"
  render={({ field }) => (
    <RichTextEditor
      value={field.value}
      onChange={field.onChange}
    />
  )}
/>`}
          </pre>
        </div>

      </div>
    </div>
  );
}
