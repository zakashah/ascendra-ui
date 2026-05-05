import { codeToHtml } from 'shiki';
import { BlockFrame } from '@/components/custom/blocks/block-frame';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { Button } from '@/components/custom/ui/button';
import { InfoIcon } from 'lucide-react';

const sectionBasicCode = `import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';

<MainSection>
  <MainSectionHeader>
    <div className="text-base font-medium">Section Title</div>
    <p className="text-muted-foreground mt-0.5 text-xs">
      Brief description of what this section configures.
    </p>
  </MainSectionHeader>
  <MainSectionPanel>
    <MainSectionPanelItem>
      {/* Setting or form field */}
    </MainSectionPanelItem>
    <MainSectionPanelItem>
      {/* Setting or form field */}
    </MainSectionPanelItem>
  </MainSectionPanel>
</MainSection>`;

const sectionWithFooterCode = `import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { InfoIcon } from 'lucide-react';

<MainSection>
  <MainSectionHeader>
    <div className="text-base font-medium">Section Title</div>
    <p className="text-muted-foreground mt-0.5 text-xs">
      Brief description of what this section configures.
    </p>
  </MainSectionHeader>
  <MainSectionPanel>
    <MainSectionPanelItem>
      {/* Setting or form field */}
    </MainSectionPanelItem>
  </MainSectionPanel>
  <MainSectionFooter>
    <InfoIcon className="mt-0.5 mr-2 size-3 shrink-0" strokeWidth={2.5} />
    Additional context or a link to documentation.
  </MainSectionFooter>
</MainSection>`;

const sectionDangerCode = `import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { Button } from '@/components/custom/ui/button';

<MainSection danger>
  <MainSectionHeader>
    <div className="text-base font-medium">Danger Zone</div>
    <p className="text-muted-foreground mt-0.5 text-xs">
      Irreversible and destructive actions.
    </p>
  </MainSectionHeader>
  <MainSectionPanel>
    <MainSectionPanelItem>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Delete account</div>
          <p className="text-muted-foreground mt-0.5 text-xs">
            Permanently delete this account and all associated data.
          </p>
        </div>
        <Button variant="destructive" size="sm">Delete</Button>
      </div>
    </MainSectionPanelItem>
  </MainSectionPanel>
</MainSection>`;

export default async function MainSectionBlocksPage() {
  const [html1, html2, html3] = await Promise.all([
    codeToHtml(sectionBasicCode, { lang: 'tsx', theme: 'github-dark' }),
    codeToHtml(sectionWithFooterCode, { lang: 'tsx', theme: 'github-dark' }),
    codeToHtml(sectionDangerCode, { lang: 'tsx', theme: 'github-dark' }),
  ]);

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-lg font-semibold">Main Section</h1>
        <p className="text-muted-foreground mt-1 max-w-lg text-sm">
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            MainSection
          </code>{' '}
          is the settings card unit. It always needs{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            MainSectionHeader
          </code>{' '}
          and usually a{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            MainSectionPanel
          </code>
          . Add{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            MainSectionFooter
          </code>{' '}
          for contextual notes. Each{' '}
          <code className="bg-muted rounded px-1 py-0.5 text-xs">
            MainSectionPanelItem
          </code>{' '}
          draws a top border divider (except the first).
        </p>
      </div>

      <BlockFrame
        title="Section Basic"
        description="The standard pattern: header describing the section, panel containing one or more items. Each PanelItem is a row separated by a border."
        code={sectionBasicCode}
        codeHtml={html1}
      >
        <MainSection>
          <MainSectionHeader>
            <div className="text-base font-medium">Fee Configuration</div>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Configure how fees are calculated and collected.
            </p>
          </MainSectionHeader>
          <MainSectionPanel>
            <MainSectionPanelItem>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Enable late fees</span>
                <span className="text-muted-foreground text-xs">
                  Toggle setting
                </span>
              </div>
            </MainSectionPanelItem>
            <MainSectionPanelItem>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Send payment reminders
                </span>
                <span className="text-muted-foreground text-xs">
                  Toggle setting
                </span>
              </div>
            </MainSectionPanelItem>
          </MainSectionPanel>
        </MainSection>
      </BlockFrame>

      <BlockFrame
        title="Section With Footer"
        description="MainSectionFooter anchors below the panel. It hides its top border automatically when the panel above it is collapsed or empty."
        code={sectionWithFooterCode}
        codeHtml={html2}
      >
        <MainSection>
          <MainSectionHeader>
            <div className="text-base font-medium">Payment Gateway</div>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Configure your payment provider integration.
            </p>
          </MainSectionHeader>
          <MainSectionPanel>
            <MainSectionPanelItem>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Live mode</span>
                <span className="text-muted-foreground text-xs">
                  Toggle setting
                </span>
              </div>
            </MainSectionPanelItem>
          </MainSectionPanel>
          <MainSectionFooter>
            <InfoIcon
              className="mt-0.5 mr-2 size-3 shrink-0"
              strokeWidth={2.5}
            />
            Transaction fees are 0.7% per payment processed.
          </MainSectionFooter>
        </MainSection>
      </BlockFrame>

      <BlockFrame
        title="Section Danger"
        description="Pass danger prop to MainSection for the red background. Used exclusively for destructive actions like delete or disable."
        code={sectionDangerCode}
        codeHtml={html3}
      >
        <MainSection danger>
          <MainSectionHeader>
            <div className="text-base font-medium">Danger Zone</div>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Irreversible and destructive actions.
            </p>
          </MainSectionHeader>
          <MainSectionPanel>
            <MainSectionPanelItem>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">
                    Delete merchant account
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Permanently delete this account and all associated data.
                  </p>
                </div>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </div>
            </MainSectionPanelItem>
          </MainSectionPanel>
        </MainSection>
      </BlockFrame>
    </div>
  );
}
