"use client";

import { ComponentPreview } from "../component-preview";
import { SectionHeader } from "../section-header";
import { PropsTable } from "../props-table";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
  FieldDescription,
  FieldError,
  FieldSet,
  FieldLegend,
  FieldSeparator,
} from "@/ascendra-ui/components/ui/field";
import { Input } from "@/ascendra-ui/components/ui/input";
import { registry } from "@/lib/registry";

const meta = registry["field"];

export function FieldDocContent() {
  return (
    <div className="space-y-10">
      {/* Hero preview */}
      <ComponentPreview
        align="start"
        code={`import { Field, FieldLabel, FieldDescription, FieldError } from "@/ascendra-ui/components/ui/field";
import { Input } from "@/ascendra-ui/components/ui/input";

<Field>
  <FieldLabel>Email address</FieldLabel>
  <Input placeholder="you@example.com" full />
  <FieldDescription>We will never share your email.</FieldDescription>
</Field>`}
      >
        <div className="w-72">
          <Field>
            <FieldLabel>Email address</FieldLabel>
            <Input placeholder="you@example.com" full />
            <FieldDescription>
              We will never share your email.
            </FieldDescription>
          </Field>
        </div>
      </ComponentPreview>

      {/* Examples */}
      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        {/* Orientations */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Orientation</h3>
          <p className="text-xs text-muted-foreground">
            Vertical stacks the label above the control. Horizontal places them
            side by side. Responsive switches at the{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">md</code>{" "}
            container breakpoint.
          </p>
          <ComponentPreview
            align="start"
            code={`<FieldGroup>
  <Field orientation="vertical">
    <FieldTitle>Username</FieldTitle>
    <Input placeholder="acme" full />
  </Field>
  <Field orientation="horizontal">
    <FieldTitle>Username</FieldTitle>
    <Input placeholder="acme" full />
  </Field>
</FieldGroup>`}
          >
            <div className="w-full max-w-sm space-y-4">
              <FieldGroup>
                <Field orientation="vertical">
                  <FieldTitle>Vertical</FieldTitle>
                  <Input placeholder="acme" full />
                </Field>
                <Field orientation="horizontal">
                  <FieldTitle>Horizontal</FieldTitle>
                  <Input placeholder="acme" full />
                </Field>
              </FieldGroup>
            </div>
          </ComponentPreview>
        </div>

        {/* With description */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            With description
          </h3>
          <p className="text-xs text-muted-foreground">
            Add helper text below the control with{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              FieldDescription
            </code>
            .
          </p>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabel>Password</FieldLabel>
  <Input type="password" placeholder="••••••••" full />
  <FieldDescription>
    Must be at least 8 characters.
  </FieldDescription>
</Field>`}
          >
            <div className="w-72">
              <Field>
                <FieldLabel>Password</FieldLabel>
                <Input type="password" placeholder="••••••••" full />
                <FieldDescription>
                  Must be at least 8 characters.
                </FieldDescription>
              </Field>
            </div>
          </ComponentPreview>
        </div>

        {/* With error */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">With error</h3>
          <p className="text-xs text-muted-foreground">
            Pass an{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              errors
            </code>{" "}
            array to{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              FieldError
            </code>{" "}
            — duplicate messages are deduplicated automatically.
          </p>
          <ComponentPreview
            align="start"
            code={`<Field>
  <FieldLabel>Email</FieldLabel>
  <Input placeholder="you@example.com" full />
  <FieldError errors={[{ message: "Invalid email address" }]} />
</Field>`}
          >
            <div className="w-72">
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input placeholder="you@example.com" full />
                <FieldError errors={[{ message: "Invalid email address" }]} />
              </Field>
            </div>
          </ComponentPreview>
        </div>

        {/* FieldSet with legend */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            FieldSet with legend
          </h3>
          <p className="text-xs text-muted-foreground">
            Wrap a group of related fields in a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              FieldSet
            </code>{" "}
            with a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              FieldLegend
            </code>{" "}
            for accessibility.
          </p>
          <ComponentPreview
            align="start"
            code={`<FieldSet>
  <FieldLegend>Personal information</FieldLegend>
  <FieldGroup>
    <Field>
      <FieldTitle>First name</FieldTitle>
      <Input placeholder="Jane" full />
    </Field>
    <Field>
      <FieldTitle>Last name</FieldTitle>
      <Input placeholder="Doe" full />
    </Field>
  </FieldGroup>
</FieldSet>`}
          >
            <div className="w-72">
              <FieldSet>
                <FieldLegend>Personal information</FieldLegend>
                <FieldGroup>
                  <Field>
                    <FieldTitle>First name</FieldTitle>
                    <Input placeholder="Jane" full />
                  </Field>
                  <FieldSeparator />
                  <Field>
                    <FieldTitle>Last name</FieldTitle>
                    <Input placeholder="Doe" full />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
          </ComponentPreview>
        </div>
      </div>

      {/* Props */}
      <div className="space-y-4">
        <SectionHeader>Props</SectionHeader>
        <PropsTable props={meta.props ?? []} />
      </div>
    </div>
  );
}
