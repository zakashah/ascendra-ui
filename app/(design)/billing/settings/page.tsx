'use client';

import { Button } from '@/components/custom/ui/button';
import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import { Anchor } from '@/components/custom/common-ui/anchor';
import { Switch } from '@/components/custom/ui/switch';
import { InfoIcon } from 'lucide-react';
import { LuArrowRight } from 'react-icons/lu';

export default function BillingSettingsPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Billing settings</PageTitle>
          <PageSubtitle>
            Configure the behavior of Billing on your Clerk application.
          </PageSubtitle>
        </PageHeaderGroup>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Billing configuration
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Clerk’s recurring billing system. Create subscription plans
                    and turn users into customers.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch />
                        <span className="font-medium">Enable user billing</span>
                      </div>
                      <p className="text-muted-foreground mt-1 ml-8 text-xs">
                        Turn on individual subscriptions for users. Typically
                        used if you are a{' '}
                        <Anchor href="#">B2C business.</Anchor>
                      </p>
                      <div className="mt-2 ml-8">
                        <Button variant="secondary" size="xs">
                          Create plan
                        </Button>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch checked={true} />
                        <span className="font-medium">
                          Enable organization billing
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-1 ml-8 text-xs">
                        Turn on individual subscriptions for organizations.
                        Typically used if you are a{' '}
                        <Anchor href="#">B2C business.</Anchor>
                      </p>
                      <div className="mt-2 ml-8">
                        <Button variant="secondary" size="xs">
                          Create plan
                        </Button>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch />
                        <span className="font-medium">
                          Require payment method for free trials
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-1 ml-8 text-xs">
                        When enabled, users must provide a payment method to
                        start free trials.
                      </p>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex">
                      <InfoIcon
                        className="mt-0.5 mr-2 size-3 shrink-0"
                        strokeWidth={2.5}
                      />
                      Clerk Billing costs just 0.7% per transaction.
                    </div>
                    <Anchor
                      variant="muted"
                      href="#"
                      className="flex items-center gap-1"
                    >
                      Read Billing Guide
                      <LuArrowRight />
                    </Anchor>
                  </div>
                </MainSectionFooter>
              </MainSection>
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
