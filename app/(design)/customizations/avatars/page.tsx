'use client';

import { Button } from '@/components/custom/ui/button';
import { Input } from '@/components/custom/ui/input';
import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import { Anchor } from '@/components/custom/common-ui/anchor';
import { RadioGroup, RadioGroupItem } from '@/components/custom/ui/radio-group';
import { InfoIcon } from 'lucide-react';

export default function BillingSettingsPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>Avatars</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Default user avatar
                    </span>
                  </div>
                </MainSectionHeader>
                <MainSectionPanel>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
                    <div className="border-b px-6 md:col-span-2 md:border-r md:border-b-0">
                      <MainSectionPanelItem className="px-0">
                        <RadioGroup defaultValue="r1">
                          <div>
                            <div className="mb-2 font-medium">Background</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <RadioGroupItem value="r1" id="r1" />
                                <span className="mt-1">Marble</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mt-1 ml-7 text-xs">
                              Display a marble gradient in the background. The
                              marble gradient is unique per user.
                            </p>
                            <div className="mt-2 ml-7">
                              <Input value="#6C47FF" className="w-40" />
                            </div>
                            <Button variant="ghost" className="ml-4">
                              + Add color
                            </Button>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <RadioGroupItem value="r2" id="r2" />
                                <span className="mt-1">Solid</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mt-1 ml-7 text-xs">
                              Display a solid color in the background.
                            </p>
                          </div>
                        </RadioGroup>
                      </MainSectionPanelItem>
                      <MainSectionPanelItem className="px-0">
                        <RadioGroup defaultValue="r1">
                          <div>
                            <div className="mb-2 font-medium">Foreground</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <RadioGroupItem value="r1" id="r1" />
                                <span className="mt-1">Silhouette</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mt-1 ml-7 text-xs">
                              Display a generic user silhouette in the
                              foreground.
                            </p>
                            <div className="mt-2 ml-7">
                              <Input value="#FFFFFF" className="w-40" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <RadioGroupItem value="r2" id="r2" />
                                <span className="mt-1">Initials</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mt-1 ml-7 text-xs">
                              Display the user’s initials in the foreground.
                            </p>
                            <p className="text-muted-foreground mt-1 ml-7 text-xs">
                              Cannot be enabled because{' '}
                              <Anchor>names is off.</Anchor>
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <RadioGroupItem value="r3" id="r3" />
                                <span className="mt-1">None</span>
                              </div>
                            </div>
                          </div>
                        </RadioGroup>
                      </MainSectionPanelItem>
                    </div>
                    <div className="p-6">Preview</div>
                  </div>
                </MainSectionPanel>
                <MainSectionFooter>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex">
                      <InfoIcon
                        className="mt-0.5 mr-2 size-3 shrink-0"
                        strokeWidth={2.5}
                      />
                      Once downloaded for the first time, avatars are cached for
                      24 hours by the browser. If you change your avatar
                      settings, it will take up to 24 hours for the changes to
                      be reflected. During development, you can clear your
                      browser cache to see the new avatars immediately.
                    </div>
                  </div>
                </MainSectionFooter>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Default organization logo
                    </span>
                  </div>
                </MainSectionHeader>
                <MainSectionPanel>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
                    <div className="border-b px-6 md:col-span-2 md:border-r md:border-b-0">
                      <MainSectionPanelItem className="px-0">
                        <RadioGroup defaultValue="r1">
                          <div>
                            <div className="mb-2 font-medium">Background</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <RadioGroupItem value="r1" id="r1" />
                                <span className="mt-1">Marble</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mt-1 ml-7 text-xs">
                              Display a marble gradient in the background. The
                              marble gradient is unique per user.
                            </p>
                            <div className="mt-2 ml-7">
                              <Input value="#6C47FF" className="w-40" />
                            </div>
                            <Button variant="ghost" className="ml-4">
                              + Add color
                            </Button>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <RadioGroupItem value="r2" id="r2" />
                                <span className="mt-1">Solid</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mt-1 ml-7 text-xs">
                              Display a solid color in the background.
                            </p>
                          </div>
                        </RadioGroup>
                      </MainSectionPanelItem>
                      <MainSectionPanelItem className="px-0">
                        <RadioGroup defaultValue="r1">
                          <div>
                            <div className="mb-2 font-medium">Foreground</div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <RadioGroupItem value="r1" id="r1" />
                                <span className="mt-1">Silhouette</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mt-1 ml-7 text-xs">
                              Display a generic user silhouette in the
                              foreground.
                            </p>
                            <div className="mt-2 ml-7">
                              <Input value="#FFFFFF" className="w-40" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <RadioGroupItem value="r2" id="r2" />
                                <span className="mt-1">Initials</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mt-1 ml-7 text-xs">
                              Display the user’s initials in the foreground.
                            </p>
                            <p className="text-muted-foreground mt-1 ml-7 text-xs">
                              Cannot be enabled because{' '}
                              <Anchor>names is off.</Anchor>
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <RadioGroupItem value="r3" id="r3" />
                                <span className="mt-1">None</span>
                              </div>
                            </div>
                          </div>
                        </RadioGroup>
                      </MainSectionPanelItem>
                    </div>
                    <div className="p-6">Preview</div>
                  </div>
                </MainSectionPanel>
                <MainSectionFooter>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex">
                      <InfoIcon
                        className="mt-0.5 mr-2 size-3 shrink-0"
                        strokeWidth={2.5}
                      />
                      Once downloaded for the first time, avatars are cached for
                      24 hours by the browser. If you change your avatar
                      settings, it will take up to 24 hours for the changes to
                      be reflected. During development, you can clear your
                      browser cache to see the new avatars immediately.
                    </div>
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
