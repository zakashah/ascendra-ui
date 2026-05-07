import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

// ─── Token data ───────────────────────────────────────────────────────────────
// Values hard-coded from app/globals.css so no client-side JS is needed.
// Swatches use Tailwind utility classes, so they flip automatically with the
// dark-mode toggle — no JavaScript required.

type ColorToken = {
  name: string;
  cssVar: string;
  twBg: string;
  lightApprox: string;
  darkApprox: string;
};

const semanticColors: ColorToken[] = [
  {
    name: "Background",
    cssVar: "--background",
    twBg: "bg-background",
    lightApprox: "#ffffff",
    darkApprox: "#1e1e24",
  },
  {
    name: "Foreground",
    cssVar: "--foreground",
    twBg: "bg-foreground",
    lightApprox: "#2b2b34",
    darkApprox: "#f6f6f7",
  },
  {
    name: "Surface Soft",
    cssVar: "--surface-soft",
    twBg: "bg-surface-soft",
    lightApprox: "#fafafa",
    darkApprox: "#1e1e22",
  },
  {
    name: "Primary",
    cssVar: "--primary",
    twBg: "bg-primary",
    lightApprox: "#6c47ff",
    darkApprox: "#6c47ff",
  },
  {
    name: "Primary Foreground",
    cssVar: "--primary-foreground",
    twBg: "bg-primary-foreground",
    lightApprox: "#f4f9fc",
    darkApprox: "#0f2040",
  },
  {
    name: "Secondary",
    cssVar: "--secondary",
    twBg: "bg-secondary",
    lightApprox: "#ffffff",
    darkApprox: "#33333e",
  },
  {
    name: "Secondary Foreground",
    cssVar: "--secondary-foreground",
    twBg: "bg-secondary-foreground",
    lightApprox: "#1b1b1b",
    darkApprox: "#f9f9f6",
  },
  {
    name: "Muted",
    cssVar: "--muted",
    twBg: "bg-muted",
    lightApprox: "#fafafb",
    darkApprox: "#111113",
  },
  {
    name: "Muted Foreground",
    cssVar: "--muted-foreground",
    twBg: "bg-muted-foreground",
    lightApprox: "#5f5f6f",
    darkApprox: "#adadb7",
  },
  {
    name: "Accent",
    cssVar: "--accent",
    twBg: "bg-accent",
    lightApprox: "#f7f7ef",
    darkApprox: "#2b2520",
  },
  {
    name: "Accent Foreground",
    cssVar: "--accent-foreground",
    twBg: "bg-accent-foreground",
    lightApprox: "#1c1c1b",
    darkApprox: "#f9f9f6",
  },
  {
    name: "Destructive",
    cssVar: "--destructive",
    twBg: "bg-destructive",
    lightApprox: "#e13232",
    darkApprox: "#e84e4e",
  },
  {
    name: "Border",
    cssVar: "--border",
    twBg: "bg-border",
    lightApprox: "#ececee",
    darkApprox: "#232328",
  },
  {
    name: "Ring",
    cssVar: "--ring",
    twBg: "bg-ring",
    lightApprox: "#6c47ff",
    darkApprox: "#6c47ff",
  },
  {
    name: "Card",
    cssVar: "--card",
    twBg: "bg-card",
    lightApprox: "#ffffff",
    darkApprox: "#1c1c1b",
  },
  {
    name: "Popover",
    cssVar: "--popover",
    twBg: "bg-popover",
    lightApprox: "#ffffff",
    darkApprox: "#1c1c1b",
  },
];

const brandColors: ColorToken[] = [
  {
    name: "Brand",
    cssVar: "--brand",
    twBg: "bg-brand",
    lightApprox: "#6c47ff",
    darkApprox: "#846bff",
  },
  {
    name: "Positive",
    cssVar: "--positive",
    twBg: "bg-positive",
    lightApprox: "#15892b",
    darkApprox: "#31c854",
  },
  {
    name: "Negative",
    cssVar: "--negative",
    twBg: "bg-negative",
    lightApprox: "#e02e2e",
    darkApprox: "#f73d3d",
  },
  {
    name: "Warning",
    cssVar: "--warning",
    twBg: "bg-warning",
    lightApprox: "#fd7224",
    darkApprox: "#fd7224",
  },
  {
    name: "Info",
    cssVar: "--info",
    twBg: "bg-info",
    lightApprox: "#236dd7",
    darkApprox: "#307ff6",
  },
  {
    name: "Dimmed",
    cssVar: "--dimmed",
    twBg: "bg-dimmed",
    lightApprox: "#adadb7",
    darkApprox: "#5f5f6f",
  },
];

type RadiusToken = {
  name: string;
  cssVar: string;
  twClass: string;
  value: string;
};

const radiusTokens: RadiusToken[] = [
  {
    name: "sm",
    cssVar: "--radius-sm",
    twClass: "rounded-sm",
    value: "0.375rem (6px)",
  },
  {
    name: "md",
    cssVar: "--radius-md",
    twClass: "rounded-md",
    value: "0.5rem (8px)",
  },
  {
    name: "lg",
    cssVar: "--radius-lg",
    twClass: "rounded-lg",
    value: "0.625rem (10px)",
  },
  {
    name: "xl",
    cssVar: "--radius-xl",
    twClass: "rounded-xl",
    value: "0.875rem (14px)",
  },
  {
    name: "2xl",
    cssVar: "--radius-2xl",
    twClass: "rounded-2xl",
    value: "1.125rem (18px)",
  },
  {
    name: "3xl",
    cssVar: "--radius-3xl",
    twClass: "rounded-3xl",
    value: "1.375rem (22px)",
  },
  {
    name: "4xl",
    cssVar: "--radius-4xl",
    twClass: "rounded-4xl",
    value: "1.625rem (26px)",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ColorSwatch({ token }: { token: ColorToken }) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className={`h-12 w-full border-b ${token.twBg}`} />
      <div className="space-y-0.5 p-2.5">
        <p className="text-xs font-medium text-foreground">{token.name}</p>
        <p className="font-mono text-[0.6875rem] text-muted-foreground">
          {token.cssVar}
        </p>
        <p className="font-mono text-[0.6875rem] text-muted-foreground">
          {token.twBg}
        </p>
        <p className="pt-0.5 font-mono text-[0.6rem] text-muted-foreground/60">
          <span className="mr-2">☀ {token.lightApprox}</span>
          <span>☾ {token.darkApprox}</span>
        </p>
      </div>
    </div>
  );
}

function RadiusSwatch({ token }: { token: RadiusToken }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`h-12 w-16 border-2 border-primary/40 bg-primary/10 ${token.twClass}`}
      />
      <div className="text-center">
        <p className="font-mono text-xs font-medium text-foreground">
          {token.name}
        </p>
        <p className="font-mono text-[0.6rem] text-muted-foreground">
          {token.value}
        </p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DesignTokensPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 py-12">
      {/* Breadcrumb */}
      <p className="mb-4 text-xs text-muted-foreground">
        <Link
          href="/showcase"
          className="hover:text-foreground transition-colors"
        >
          Overview
        </Link>
        <span className="mx-1.5">/</span>
        Getting Started
        <span className="mx-1.5">/</span>
        Design Tokens
      </p>

      {/* Heading */}
      <div className="mb-8">
        <h1 className="mb-1.5 text-2xl font-semibold tracking-tight text-foreground">
          Design Tokens
        </h1>
        <p className="text-sm text-muted-foreground">
          OKLCH-based semantic token system defined in{" "}
          <code className="rounded bg-muted px-1 font-mono text-xs">
            app/globals.css
          </code>
          . All swatches switch automatically with the dark-mode toggle —
          colours are driven by live CSS variables, not static values.
        </p>
      </div>

      <div className="space-y-12">
        {/* ── Semantic Colors ── */}
        <div className="space-y-4">
          <SectionHeader>Semantic Colors</SectionHeader>
          <p className="text-xs text-muted-foreground">
            shadcn/ui base tokens mapped via{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              @theme inline
            </code>{" "}
            to Tailwind utilities (
            <code className="rounded bg-muted px-1 font-mono text-xs">
              bg-primary
            </code>
            ,{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              text-muted-foreground
            </code>
            , etc.).
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {semanticColors.map((token) => (
              <ColorSwatch key={token.cssVar} token={token} />
            ))}
          </div>
        </div>

        {/* ── Brand Colors ── */}
        <div className="space-y-4">
          <SectionHeader>Brand Colors</SectionHeader>
          <p className="text-xs text-muted-foreground">
            Intent-based aliases sourced from the Clerk palette. Light and dark
            values differ — see{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              .dark
            </code>{" "}
            overrides in{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              globals.css
            </code>
            .
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {brandColors.map((token) => (
              <ColorSwatch key={token.cssVar} token={token} />
            ))}
          </div>
        </div>

        {/* ── Border Radius ── */}
        <div className="space-y-4">
          <SectionHeader>Border Radius Scale</SectionHeader>
          <p className="text-xs text-muted-foreground">
            All steps derived from a single base variable{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              --radius: 0.625rem
            </code>{" "}
            (10px). Changing the base shifts every step at once.
          </p>
          <div className="flex flex-wrap gap-6 pt-2">
            {radiusTokens.map((token) => (
              <RadiusSwatch key={token.cssVar} token={token} />
            ))}
          </div>
        </div>

        {/* ── Typography ── */}
        <div className="space-y-4">
          <SectionHeader>Typography</SectionHeader>
          <p className="text-xs text-muted-foreground">
            Font families are injected by{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              next/font
            </code>{" "}
            in the root layout and exposed as CSS variables.
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-mono text-[0.6875rem] text-muted-foreground">
                --font-sans · <span className="italic">body / UI text</span>
              </p>
              <p className="text-sm text-foreground">
                The quick brown fox jumps over the lazy dog. 0123456789
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="mb-2 font-mono text-[0.6875rem] text-muted-foreground">
                --font-mono · <span className="italic">code blocks</span>
              </p>
              <p className="font-mono text-sm text-foreground">
                const token = &quot;oklch(0.5573 0.2543 283.67)&quot;;
              </p>
            </div>
          </div>
        </div>

        {/* ── Source note ── */}
        <p className="border-t pt-6 text-xs text-muted-foreground">
          All values are defined in{" "}
          <code className="rounded bg-muted px-1 font-mono">
            app/globals.css
          </code>
          . Edit the{" "}
          <code className="rounded bg-muted px-1 font-mono">:root</code> and{" "}
          <code className="rounded bg-muted px-1 font-mono">.dark</code> blocks
          to update light and dark mode values globally.
        </p>
      </div>
    </div>
  );
}
