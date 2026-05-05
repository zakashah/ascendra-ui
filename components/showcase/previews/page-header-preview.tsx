'use client';

import { ComponentPreview } from '../component-preview';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { Button } from '@/components/custom/ui/button';
import { registry } from '@/lib/showcase/registry';
import { LuPlus } from 'react-icons/lu';

const meta = registry['page-header'];

export function PageHeaderDocContent() {
  return (
    <div className="space-y-10">

      <ComponentPreview
        align="start"
        code={`import { PageHeader, PageHeaderGroup, PageTitle, PageSubtitle, PageHeaderAction } from "@/components/custom/layout/page-header";

<PageHeader>
  <PageHeaderGroup>
    <PageTitle>Parents</PageTitle>
  </PageHeaderGroup>
</PageHeader>`}
      >
        <div className="w-full">
          <PageHeader>
            <PageHeaderGroup>
              <PageTitle>Parents</PageTitle>
            </PageHeaderGroup>
          </PageHeader>
        </div>
      </ComponentPreview>

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">With Subtitle</h3>
          <p className="text-xs text-muted-foreground">Add a subtitle below the title using <code className="rounded bg-muted px-1 font-mono text-xs">PageSubtitle</code>.</p>
          <ComponentPreview
            align="start"
            code={`<PageHeader>
  <PageHeaderGroup>
    <PageTitle>Parents</PageTitle>
    <PageSubtitle>Manage all parents and their students.</PageSubtitle>
  </PageHeaderGroup>
</PageHeader>`}
          >
            <div className="w-full">
              <PageHeader>
                <PageHeaderGroup>
                  <PageTitle>Parents</PageTitle>
                  <PageSubtitle>Manage all parents and their students.</PageSubtitle>
                </PageHeaderGroup>
              </PageHeader>
            </div>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">With Action</h3>
          <p className="text-xs text-muted-foreground">Use <code className="rounded bg-muted px-1 font-mono text-xs">PageHeaderAction</code> on the right for primary page CTAs.</p>
          <ComponentPreview
            align="start"
            code={`<PageHeader>
  <PageHeaderGroup>
    <PageTitle>Invoices</PageTitle>
    <PageSubtitle>Track and manage all student fee invoices.</PageSubtitle>
  </PageHeaderGroup>
  <PageHeaderAction>
    <Button>
      <LuPlus />
      New Invoice
    </Button>
  </PageHeaderAction>
</PageHeader>`}
          >
            <div className="w-full">
              <PageHeader>
                <PageHeaderGroup>
                  <PageTitle>Invoices</PageTitle>
                  <PageSubtitle>Track and manage all student fee invoices.</PageSubtitle>
                </PageHeaderGroup>
                <PageHeaderAction>
                  <Button>
                    <LuPlus />
                    New Invoice
                  </Button>
                </PageHeaderAction>
              </PageHeader>
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
