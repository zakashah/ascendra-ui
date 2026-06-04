"use client";

import { useState } from "react";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { ColorPicker } from "@/ascendra-ui";
import { Field, FieldLabel, FieldHint } from "@/ascendra-ui";
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
      <div className="flex flex-wrap gap-4">{children}</div>
    </div>
  );
}

// ─── Color swatch display ─────────────────────────────────────────────────────

function ColorDisplay({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="size-5 rounded-md border border-foreground/10 shadow-sm shrink-0"
        style={{ backgroundColor: color }}
      />
      <div className="flex flex-col gap-0">
        <span className="text-xs font-medium text-foreground">{label}</span>
        <span className="font-mono text-[0.6875rem] text-muted-foreground">{color}</span>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

const CHART_PRESETS = ["#2563eb", "#16a34a", "#d97706", "#dc2626", "#7c3aed", "#0891b2"];
const BRAND_PRESETS = ["#111827", "#1d4ed8", "#2563eb", "#3b82f6", "#93c5fd"];

export default function ColorPickerShowcasePage() {
  const [primary, setPrimary] = useState("#2563eb");
  const [secondary, setSecondary] = useState("#16a34a");
  const [accent, setAccent] = useState("#d97706");

  const [brandColor, setBrandColor] = useState("#1d4ed8");
  const [chartColor, setChartColor] = useState("#2563eb");
  const [swatchOnly, setSwatchOnly] = useState("#7c3aed");

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
          Color Picker
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A fully custom color picker that uses{" "}
          <span className="text-foreground font-medium">Radix DropdownMenu</span> as the
          floating shell — the same token-aligned popover used by all other dropdowns in the
          system. Supports HSL sliders, a hex input, and a configurable preset swatch grid.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-10 flex flex-wrap gap-6 border-t border-b py-5">
        {[
          { label: "HSL sliders", value: "3" },
          { label: "Hex input", value: "✓" },
          { label: "Presets", value: "✓" },
          { label: "Presets-only mode", value: "✓" },
          { label: "Controlled", value: "✓" },
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
          {`import { ColorPicker } from "@/ascendra-ui";`}
        </code>
      </div>

      {/* Demos */}
      <div className="flex flex-col gap-10">

        <DemoSection
          title="Default — full picker"
          description="Click the swatch to open. Use the hue/saturation/lightness sliders or type a hex code directly."
        >
          <div className="flex items-center gap-3">
            <ColorPicker value={primary} onChange={setPrimary} />
            <ColorDisplay label="Primary" color={primary} />
          </div>
        </DemoSection>

        <DemoSection
          title="Preset-only mode"
          description="Pass presetsOnly to hide the sliders and hex input — just the swatch grid."
        >
          <div className="flex items-center gap-3">
            <ColorPicker
              value={swatchOnly}
              onChange={setSwatchOnly}
              presetsOnly
            />
            <ColorDisplay label="Selected" color={swatchOnly} />
          </div>
        </DemoSection>

        <DemoSection
          title="Custom preset palette"
          description="Pass a presets array to replace the default palette — useful for branded color sets."
        >
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Brand palette</p>
              <div className="flex items-center gap-3">
                <ColorPicker
                  value={brandColor}
                  onChange={setBrandColor}
                  presets={BRAND_PRESETS}
                />
                <ColorDisplay label="Brand color" color={brandColor} />
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Chart colors only</p>
              <div className="flex items-center gap-3">
                <ColorPicker
                  value={chartColor}
                  onChange={setChartColor}
                  presets={CHART_PRESETS}
                  presetsOnly
                />
                <ColorDisplay label="Chart series" color={chartColor} />
              </div>
            </div>
          </div>
        </DemoSection>

        <DemoSection
          title="Multiple pickers — theme builder"
          description="Compose multiple pickers in a row to configure a mini palette."
        >
          <div className="rounded-lg border bg-muted/20 p-5 flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: "Primary", value: primary, onChange: setPrimary },
                { label: "Secondary", value: secondary, onChange: setSecondary },
                { label: "Accent", value: accent, onChange: setAccent },
              ].map(({ label, value, onChange }) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-muted-foreground">{label}</span>
                  <div className="flex items-center gap-2">
                    <ColorPicker value={value} onChange={onChange} />
                    <span className="font-mono text-xs text-foreground">{value}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Live preview strip */}
            <div
              className="h-8 rounded-md shadow-inner"
              style={{
                background: `linear-gradient(to right, ${primary}, ${secondary}, ${accent})`,
              }}
            />
          </div>
        </DemoSection>

        <DemoSection
          title="Disabled"
          description="Pass disabled to prevent opening."
        >
          <ColorPicker value="#6b7280" disabled />
        </DemoSection>

        <DemoSection
          title="Inside Field"
          description="Pair with a Field wrapper and a label for form use."
        >
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Field>
              <FieldLabel>Brand color</FieldLabel>
              <div className="flex items-center gap-2 py-1">
                <ColorPicker value={brandColor} onChange={setBrandColor} />
                <span className="font-mono text-sm text-foreground">{brandColor}</span>
              </div>
            </Field>
            <Field>
              <FieldLabel>Chart series color</FieldLabel>
              <div className="flex items-center gap-2 py-1">
                <ColorPicker
                  value={chartColor}
                  onChange={setChartColor}
                  presets={CHART_PRESETS}
                  presetsOnly
                />
                <span className="font-mono text-sm text-foreground">{chartColor}</span>
              </div>
              <FieldHint description="Used in report visualisations" />
            </Field>
          </div>
        </DemoSection>

        {/* Usage note */}
        <div className="rounded-lg border bg-muted/30 p-5 text-xs leading-relaxed text-muted-foreground">
          <p className="mb-2 font-medium text-foreground">Notes</p>
          <ol className="list-decimal pl-4 space-y-1.5">
            <li>
              The trigger is a plain swatch button — place it inline next to a label or hex display as shown above.
            </li>
            <li>
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">value</code> and{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">onChange</code>{" "}
              use 6-digit hex strings (e.g.{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">#2563eb</code>).
            </li>
            <li>
              Use{" "}
              <code className="rounded bg-muted px-1 font-mono text-[0.6875rem]">presetsOnly</code>{" "}
              when you want to constrain users to approved brand colors.
            </li>
          </ol>
        </div>

      </div>
    </div>
  );
}
