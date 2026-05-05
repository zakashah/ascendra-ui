import { codeToHtml } from 'shiki';
import { BlockFrame } from '@/components/custom/blocks/block-frame';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import { PageContent } from '@/components/custom/layout/page-content';
import { MainContent } from '@/components/custom/layout/main-content';
import { DataTableBar } from '@/components/custom/layout/data-table-bar';
import { DataTableBarContent } from '@/components/custom/layout/data-table-bar-content';
import { DataTableBarAction } from '@/components/custom/layout/data-table-bar-action';
import { Tabs } from '@/components/custom/tabs/tabs';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { Button } from '@/components/custom/ui/button';

const mainNoTabsCode = `import { PageMain } from '@/components/custom/layout/page-main';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import { PageContent } from '@/components/custom/layout/page-content';
import { MainContent } from '@/components/custom/layout/main-content';

export default function Page() {
  return (
    <PageMain>
      <PageWrapper>
        <PageContent>
          <MainContent>
            {/* MainSection components go here */}
          </MainContent>
        </PageContent>
      </PageWrapper>
    </PageMain>
  );
}`;

const mainWithTabsCode = `import { PageMain } from '@/components/custom/layout/page-main';
import { MainContent } from '@/components/custom/layout/main-content';
import { Tabs } from '@/components/custom/tabs/tabs';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { TabContent } from '@/components/custom/tabs/tab-content';

export default function Page() {
  return (
    <PageMain>
      <Tabs defaultValue="overview">
        <TabList>
          <TabTrigger value="overview">Overview</TabTrigger>
          <TabTrigger value="details">Details</TabTrigger>
        </TabList>
        <TabContent value="overview">
          <MainContent>
            {/* Content for Overview tab */}
          </MainContent>
        </TabContent>
        <TabContent value="details">
          <MainContent>
            {/* Content for Details tab */}
          </MainContent>
        </TabContent>
      </Tabs>
    </PageMain>
  );
}`;

const mainWithBarCode = `import { PageMain } from '@/components/custom/layout/page-main';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageBar } from '@/components/custom/layout/page-bar';
import { PageBarContent } from '@/components/custom/layout/page-bar-content';
import { PageBarAction } from '@/components/custom/layout/page-bar-action';
import { Button } from '@/components/custom/ui/button';

export default function Page() {
  return (
    <PageMain>
      <MainContent>
        <TableBar>
          <DataTableBarContent>
            {/* Search input, filters */}
          </DataTableBarContent>
          <DataTableBarAction>
            <Button>Add parent</Button>
          </DataTableBarAction>
        </TableBar>
        {/* Table or list */}
      </MainContent>
    </PageMain>
  );
}`;

export default async function PageMainBlocksPage() {
  const [html1, html2, html3] = await Promise.all([
    codeToHtml(mainNoTabsCode, { lang: 'tsx', theme: 'github-dark' }),
    codeToHtml(mainWithTabsCode, { lang: 'tsx', theme: 'github-dark' }),
    codeToHtml(mainWithBarCode, { lang: 'tsx', theme: 'github-dark' }),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-lg font-semibold">Page Main</h1>
        <p className="text-muted-foreground mt-1 max-w-lg text-sm">
          <code className="bg-muted rounded px-1 py-0.5 text-xs">PageMain</code>{' '}
          is the semantic root for all page content. The key fork: settings
          pages wrap content in{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            PageWrapper
          </code>
          , while tabbed and list pages skip it and go directly to{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">Tabs</code> or{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            MainContent
          </code>
          .
        </p>
      </div>

      <BlockFrame
        title="Main No Tabs"
        description="Settings page pattern. PageWrapper draws the top border divider and PageContent provides top margin + flex row layout."
        code={mainNoTabsCode}
        codeHtml={html1}
      >
        <PageMain>
          <PageWrapper>
            <PageContent>
              <MainContent>
                <div className="border-border text-muted-foreground rounded-xl border-2 border-dashed p-8 text-center text-sm">
                  MainSection(s) go here
                </div>
              </MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </BlockFrame>

      <BlockFrame
        title="Main With Tabs"
        description="Tabs replace PageWrapper entirely. TabContent mirrors PageContent's spacing, so each tab gets its own isolated content area."
        code={mainWithTabsCode}
        codeHtml={html2}
      >
        <PageMain>
          <Tabs defaultValue="overview">
            <TabList>
              <TabTrigger value="overview">Overview</TabTrigger>
              <TabTrigger value="details">Details</TabTrigger>
            </TabList>
            <TabContent value="overview">
              <MainContent>
                <div className="border-border text-muted-foreground rounded-xl border-2 border-dashed p-8 text-center text-sm">
                  Overview tab content
                </div>
              </MainContent>
            </TabContent>
            <TabContent value="details">
              <MainContent>
                <div className="border-border text-muted-foreground rounded-xl border-2 border-dashed p-8 text-center text-sm">
                  Details tab content
                </div>
              </MainContent>
            </TabContent>
          </Tabs>
        </PageMain>
      </BlockFrame>

      <BlockFrame
        title="Main With Bar"
        description="List/table pages skip PageWrapper. PageBar sits directly inside MainContent — its -mb-2 class merges its bottom edge with the table border above."
        code={mainWithBarCode}
        codeHtml={html3}
      >
        <PageMain>
          <MainContent>
            <DataTableBar className="-mb-2">
              <DataTableBarContent>
                <div className="border-border flex h-8 w-52 items-center rounded-md border px-3">
                  <span className="text-muted-foreground text-xs">
                    Search parents...
                  </span>
                </div>
              </DataTableBarContent>
              <DataTableBarAction>
                <Button size="sm">Add parent</Button>
              </DataTableBarAction>
            </DataTableBar>
            <div className="border-border/60 bg-muted/20 text-muted-foreground rounded-xl border p-6 text-center text-sm">
              Table goes here
            </div>
          </MainContent>
        </PageMain>
      </BlockFrame>
    </div>
  );
}
