'use client';

import { ProBadge } from '@/components/custom/common-ui/pro-badge';
import { SimpleAlert } from '@/components/custom/common-ui/simple-alert';
import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { MainSectionPanelItemGroup } from '@/components/custom/layout/main-section-panel-item-group';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import { Anchor } from '@/components/custom/common-ui/anchor';
import { Switch } from '@/components/custom/ui/switch';
import { cn } from '@/lib/utils';
import { InfoIcon } from 'lucide-react';
import { useState } from 'react';

export default function MFAPage() {
  const [shake, setShake] = useState(false);
  const handleClick = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };
  return (
    <>
      <PageHeader>
        <PageTitle>Multi-factor authentication</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      MFA strategies
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Select which multi-factor strategies a user can use to
                    verify their identity. <Anchor href="#">Learn more</Anchor>
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <MainSectionPanelItemGroup>
                      <div>
                        <div className="flex items-center gap-2">
                          <Switch />
                          <span className="text-base font-medium">
                            SMS verification code
                          </span>
                          <ProBadge>Pro</ProBadge>
                        </div>
                        <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                          Send the user a one-time verification code via SMS
                        </p>
                      </div>
                      <SimpleAlert variant="secondary" className="ml-8">
                        <div>
                          You cannot enable this feature because it requires
                          phone numbers to be enabled.{' '}
                          <Anchor href="#" className="text-wrap">
                            Enable phone numbers.
                          </Anchor>
                        </div>
                      </SimpleAlert>
                    </MainSectionPanelItemGroup>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch />
                        <span className="text-base font-medium">
                          Authenticator application
                        </span>
                        <ProBadge>Pro</ProBadge>
                      </div>
                      <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                        Allow users to add an authenticator application to
                        retrieve a time-based code from a service such as Google
                        Authenticator
                      </p>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem className="bg-muted relative">
                    <div className="absolute inset-0 -top-px border-t border-dashed border-gray-400/50" />
                    <div
                      className={cn(
                        'text-muted-foreground bg-background absolute -top-3 left-2 z-10 ml-2 rounded-full border border-dashed border-gray-400/50 px-1.5 py-0.5 text-[11px] opacity-100',
                        shake &&
                          'animate-nudge border-orange-400 text-orange-500'
                      )}
                    >
                      Authenticator application must be enabled to generate
                      backup codes
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch
                          onClick={(e) => {
                            e.preventDefault();
                            handleClick();
                          }}
                        />
                        <span className="text-base font-medium">
                          Backup codes
                        </span>
                        <ProBadge>Pro</ProBadge>
                      </div>
                      <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                        Generate a list of unique codes a user can save and use
                        once
                      </p>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Require multi-factor authentication
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Will enforce users to setup multi-factor authentication
                    after sign-in and sign-up.
                  </p>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Refer to the <Anchor href="#">setup MFA guide</Anchor> to
                    ensure your Clerk SDKs meet the minimum required versions,
                    before enabling this feature.
                  </p>
                </MainSectionHeader>
                <MainSectionFooter>
                  <InfoIcon
                    className="mt-0.5 mr-2 size-3 shrink-0"
                    strokeWidth={2.5}
                  />
                  You need at least one MFA strategy enabled in order to enable
                  this feature.
                </MainSectionFooter>
              </MainSection>
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
