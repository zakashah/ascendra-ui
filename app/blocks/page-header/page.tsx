import { codeToHtml } from 'shiki';
import { BlockFrame } from '@/components/custom/blocks/block-frame';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { Button } from '@/components/custom/ui/button';

const headerSimpleCode = `import { PageHeader } from '@/components/custom/layout/page-header';
import { PageTitle } from '@/components/custom/layout/page-title';

export default function Page() {
  return (
    <PageHeader>
      <PageTitle>Parents</PageTitle>
    </PageHeader>
  );
}`;

const headerGroupedCode = `import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';

export default function Page() {
  return (
    <PageHeader>
      <PageHeaderGroup>
        <PageTitle>Parents</PageTitle>
        <PageSubtitle>Manage parent accounts and fee collection.</PageSubtitle>
      </PageHeaderGroup>
    </PageHeader>
  );
}`;

const headerWithActionsCode = `import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { Button } from '@/components/custom/ui/button';

export default function Page() {
  return (
    <PageHeader>
      <PageHeaderGroup>
        <PageTitle>Parents</PageTitle>
        <PageSubtitle>Manage parent accounts and fee collection.</PageSubtitle>
      </PageHeaderGroup>
      <PageHeaderAction>
        <Button>Add parent</Button>
      </PageHeaderAction>
    </PageHeader>
  );
}`;

export default async function PageHeaderBlocksPage() {
  const [html1, html2, html3] = await Promise.all([
    codeToHtml(headerSimpleCode, { lang: 'tsx', theme: 'github-dark' }),
    codeToHtml(headerGroupedCode, { lang: 'tsx', theme: 'github-dark' }),
    codeToHtml(headerWithActionsCode, { lang: 'tsx', theme: 'github-dark' }),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-lg font-semibold">Page Header</h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-lg">
          Header sits above <code className="text-xs bg-muted px-1 py-0.5 rounded">PageMain</code>.
          Use <code className="text-xs bg-muted px-1 py-0.5 rounded">PageHeaderGroup</code> when
          you have a subtitle, and{' '}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">PageHeaderAction</code> as a
          sibling to the group for CTAs.
        </p>
      </div>

      <BlockFrame
        title="Header Simple"
        description="PageTitle directly inside PageHeader — use when no subtitle or action is needed."
        code={headerSimpleCode}
        codeHtml={html1}
      >
        <PageHeader>
          <PageTitle>Parents</PageTitle>
        </PageHeader>
      </BlockFrame>

      <BlockFrame
        title="Header Grouped"
        description="PageHeaderGroup wraps PageTitle + PageSubtitle as a vertical unit inside PageHeader."
        code={headerGroupedCode}
        codeHtml={html2}
      >
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Parents</PageTitle>
            <PageSubtitle>Manage parent accounts and fee collection.</PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>
      </BlockFrame>

      <BlockFrame
        title="Header With Actions"
        description="PageHeaderAction is a sibling of PageHeaderGroup, not a child. It pushes to the right and collapses full-width on mobile."
        code={headerWithActionsCode}
        codeHtml={html3}
      >
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Parents</PageTitle>
            <PageSubtitle>Manage parent accounts and fee collection.</PageSubtitle>
          </PageHeaderGroup>
          <PageHeaderAction>
            <Button>Add parent</Button>
          </PageHeaderAction>
        </PageHeader>
      </BlockFrame>
    </div>
  );
}
