'use client';

import { ComponentPreview } from '../component-preview';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import { Checkbox } from '@/components/custom/ui/checkbox';
import { registry } from '@/lib/showcase/registry';

const meta = registry['checkbox'];

export function CheckboxDocContent() {
  return (
    <div className="space-y-10">

      <ComponentPreview code={`import { Checkbox } from "@/components/custom/ui/checkbox";

<Checkbox />`}>
        <Checkbox />
      </ComponentPreview>

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">States</h3>
          <p className="text-xs text-muted-foreground">Unchecked, checked, indeterminate, and disabled states.</p>
          <ComponentPreview
            code={`<Checkbox />
<Checkbox defaultChecked />
<Checkbox checked="indeterminate" />
<Checkbox disabled />
<Checkbox defaultChecked disabled />`}
          >
            <Checkbox />
            <Checkbox defaultChecked />
            <Checkbox checked="indeterminate" />
            <Checkbox disabled />
            <Checkbox defaultChecked disabled />
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">With Label</h3>
          <p className="text-xs text-muted-foreground">Pair with a label element for form use.</p>
          <ComponentPreview
            code={`<label className="flex items-center gap-2 cursor-pointer">
  <Checkbox defaultChecked />
  <span className="text-sm text-foreground">Send payment reminders</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
  <Checkbox />
  <span className="text-sm text-foreground">Enable auto-invoice</span>
</label>`}
          >
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox defaultChecked />
                <span className="text-sm text-foreground">Send payment reminders</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox />
                <span className="text-sm text-foreground">Enable auto-invoice</span>
              </label>
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
