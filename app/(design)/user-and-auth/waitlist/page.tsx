'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import { Anchor } from '@/components/custom/common-ui/anchor';
import { Switch } from '@/components/custom/ui/switch';
import { LuBookOpen } from 'react-icons/lu';

export default function WaitlistPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>Waitlist</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Enable waitlist
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Sign-ups are disabled, but people can join a waitlist via
                    the
                    <span className="mx-1">
                      <code>{`<Waitlist />`}</code>
                    </span>
                    component.
                  </p>
                </MainSectionHeader>
                <MainSectionFooter>
                  <LuBookOpen className="mr-2 text-sm" />
                  Learn more about setting up a
                  <Anchor href="#" className="mx-0.5">
                    Waitlist
                  </Anchor>
                </MainSectionFooter>
              </MainSection>
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
