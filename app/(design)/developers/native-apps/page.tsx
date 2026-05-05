'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';

export default function NativeApplicationsPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>Native applications</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              {/* <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Require express consent to legal documents
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    A checkbox on your sign up is used to establish express
                    consent of your Terms of Service and Privacy Policy
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          Maximum attempt limit
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Send the user a one-time verification code via SMS
                      </p>
                      <div className="mt-2">
                        <Input
                          disabled
                          full
                          placeholder="https://example.com/terms-of-service"
                        />
                      </div>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          Maximum attempt limit
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Send the user a one-time verification code via SMS
                      </p>
                      <div className="mt-2">
                        <Input
                          disabled
                          full
                          placeholder="https://example.com/privacy-policy"
                        />
                      </div>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection> */}
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
