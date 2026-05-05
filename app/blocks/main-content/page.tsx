import { codeToHtml } from 'shiki';
import { BlockFrame } from '@/components/custom/blocks/block-frame';
import { PageContent } from '@/components/custom/layout/page-content';
import { MainContent } from '@/components/custom/layout/main-content';
import { AsideContent } from '@/components/custom/layout/aside-content';

const contentFullWidthCode = `import { PageContent } from '@/components/custom/layout/page-content';
import { MainContent } from '@/components/custom/layout/main-content';

export default function Page() {
  return (
    <PageContent>
      <MainContent>
        {/* MainSection(s), tables, or forms — spans full width */}
      </MainContent>
    </PageContent>
  );
}`;

const contentWithAsideCode = `import { PageContent } from '@/components/custom/layout/page-content';
import { MainContent } from '@/components/custom/layout/main-content';
import { AsideContent } from '@/components/custom/layout/aside-content';

export default function Page() {
  return (
    <PageContent>
      <MainContent>
        {/* Primary settings or form content — flex-1 on large screens */}
      </MainContent>
      <AsideContent>
        {/* Supplemental info: tips, previews, stats — w-fit on large screens */}
      </AsideContent>
    </PageContent>
  );
}`;

export default async function MainContentBlocksPage() {
  const [html1, html2] = await Promise.all([
    codeToHtml(contentFullWidthCode, { lang: 'tsx', theme: 'github-dark' }),
    codeToHtml(contentWithAsideCode, { lang: 'tsx', theme: 'github-dark' }),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-lg font-semibold">Main Content</h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-lg">
          <code className="text-xs bg-muted px-1 py-0.5 rounded">MainContent</code> is the primary
          column inside{' '}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">PageContent</code>. Add{' '}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">AsideContent</code> as a sibling
          when you need a supplemental sidebar column. On mobile both stack vertically; on large
          screens they sit side by side.
        </p>
      </div>

      <BlockFrame
        title="Content Full Width"
        description="MainContent alone inside PageContent takes full width via flex-1. Use for settings, forms, and tables that need all horizontal space."
        code={contentFullWidthCode}
        codeHtml={html1}
      >
        <PageContent>
          <MainContent>
            <div className="rounded-xl border-2 border-dashed border-border p-10 text-center text-sm text-muted-foreground">
              MainContent — flex-1, full width
            </div>
          </MainContent>
        </PageContent>
      </BlockFrame>

      <BlockFrame
        title="Content With Aside"
        description="AsideContent is a sibling of MainContent inside PageContent. It is w-fit on large screens and stacks below MainContent on mobile."
        code={contentWithAsideCode}
        codeHtml={html2}
      >
        <PageContent>
          <MainContent>
            <div className="rounded-xl border-2 border-dashed border-border p-10 text-center text-sm text-muted-foreground">
              MainContent — flex-1
            </div>
          </MainContent>
          <AsideContent>
            <div className="flex flex-col gap-1 p-1 w-52">
              <span className="text-xs font-medium">Aside panel</span>
              <span className="text-xs text-muted-foreground">
                Tips, previews, or supplemental stats go here. Width is auto on large screens.
              </span>
            </div>
          </AsideContent>
        </PageContent>
      </BlockFrame>
    </div>
  );
}
