'use client';

import { ComponentPreview } from '../component-preview';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import { BubbleBadge } from '@/components/custom/common-ui/bubble-badge';
import { registry } from '@/lib/showcase/registry';

const meta = registry['bubble-badge'];

export function BubbleBadgeDocContent() {
  return (
    <div className="space-y-10">

      <ComponentPreview code={`import { BubbleBadge } from "@/components/custom/common-ui/bubble-badge";

<BubbleBadge color="blue">12</BubbleBadge>`}>
        <BubbleBadge color="blue">12</BubbleBadge>
      </ComponentPreview>

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Colors</h3>
          <p className="text-xs text-muted-foreground">Seven gradient color variants.</p>
          <ComponentPreview
            code={`<BubbleBadge color="gray">9</BubbleBadge>
<BubbleBadge color="blue">12</BubbleBadge>
<BubbleBadge color="green">5</BubbleBadge>
<BubbleBadge color="red">3</BubbleBadge>
<BubbleBadge color="amber">7</BubbleBadge>
<BubbleBadge color="orange">2</BubbleBadge>
<BubbleBadge color="violet">4</BubbleBadge>`}
          >
            <BubbleBadge color="gray">9</BubbleBadge>
            <BubbleBadge color="blue">12</BubbleBadge>
            <BubbleBadge color="green">5</BubbleBadge>
            <BubbleBadge color="red">3</BubbleBadge>
            <BubbleBadge color="amber">7</BubbleBadge>
            <BubbleBadge color="orange">2</BubbleBadge>
            <BubbleBadge color="violet">4</BubbleBadge>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Sizes</h3>
          <p className="text-xs text-muted-foreground">Three sizes: sm (default), md, and lg.</p>
          <ComponentPreview
            code={`<BubbleBadge size="sm" color="blue">sm</BubbleBadge>
<BubbleBadge size="md" color="blue">md</BubbleBadge>
<BubbleBadge size="lg" color="blue">lg</BubbleBadge>`}
          >
            <BubbleBadge size="sm" color="blue">sm</BubbleBadge>
            <BubbleBadge size="md" color="blue">md</BubbleBadge>
            <BubbleBadge size="lg" color="blue">lg</BubbleBadge>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Notification Counts</h3>
          <p className="text-xs text-muted-foreground">Common usage as a notification counter on tabs or menu items.</p>
          <ComponentPreview
            code={`<div className="flex items-center gap-2">
  <span className="text-sm text-foreground">Invoices</span>
  <BubbleBadge color="orange">3</BubbleBadge>
</div>
<div className="flex items-center gap-2">
  <span className="text-sm text-foreground">Messages</span>
  <BubbleBadge color="blue">12</BubbleBadge>
</div>`}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground">Invoices</span>
              <BubbleBadge color="orange">3</BubbleBadge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-foreground">Messages</span>
              <BubbleBadge color="blue">12</BubbleBadge>
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
