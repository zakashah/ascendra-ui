'use client';

import { ComponentPreview } from '../component-preview';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import { Input } from '@/components/custom/ui/input';
import { registry } from '@/lib/showcase/registry';

const meta = registry['input'];

export function InputDocContent() {
  return (
    <div className="space-y-10">

      <ComponentPreview code={`import { Input } from "@/components/custom/ui/input";

<Input placeholder="Enter your email" />`}>
        <Input placeholder="Enter your email" />
      </ComponentPreview>

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">States</h3>
          <p className="text-xs text-muted-foreground">Default, with value, disabled, and readonly states.</p>
          <ComponentPreview
            align="start"
            code={`<Input placeholder="Placeholder text" />
<Input defaultValue="Filled value" />
<Input disabled placeholder="Disabled" />
<Input readOnly defaultValue="Read-only value" />`}
          >
            <div className="flex w-64 flex-col gap-3">
              <Input placeholder="Placeholder text" />
              <Input defaultValue="Filled value" />
              <Input disabled placeholder="Disabled" />
              <Input readOnly defaultValue="Read-only value" />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Full Width</h3>
          <p className="text-xs text-muted-foreground">Use <code className="rounded bg-muted px-1 font-mono text-xs">full</code> to expand to the container width.</p>
          <ComponentPreview
            align="start"
            code={`<Input full placeholder="Full-width input" />`}
          >
            <div className="w-full max-w-sm">
              <Input full placeholder="Full-width input" />
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Types</h3>
          <p className="text-xs text-muted-foreground">Supports all native HTML input types.</p>
          <ComponentPreview
            align="start"
            code={`<Input type="text" placeholder="Text" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="number" placeholder="Number" />`}
          >
            <div className="flex w-64 flex-col gap-3">
              <Input type="text" placeholder="Text" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Input type="number" placeholder="Number" />
            </div>
          </ComponentPreview>
        </div>
      </div>

      <div className="space-y-4">
        <SectionHeader>Props</SectionHeader>
        <PropsTable props={meta.props ?? []} />
      </div>
    </div>
  );
}
