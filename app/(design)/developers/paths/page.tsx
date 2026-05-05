'use client';

import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import { RadioGroup, RadioGroupItem } from '@/components/custom/ui/radio-group';




import { InfoIcon } from 'lucide-react';

export default function PathsPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>Paths</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-2 text-base font-medium">
                      Development host
                      <SimpleBadge variant="blue">$DEVHOST</SimpleBadge>
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    For development environments, the development host is
                    dynamically detected at runtime. The fallback development
                    host is used for features initiated externally like user
                    impersonation or IdP-initiated SAML.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="font-medium">
                          Fallback development host
                        </span>
                      </div>
                      <Input full placeholder="e.g. http://localhost:3000" />
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Application paths
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Specify where to take your users for general
                    application-wide functionality, like the application&apos;s
                    homepage.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Home URL</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Specify where your application&apos;s homepage lives.
                        Leave blank if it sits on the host&apos;s root.
                      </p>
                      <div className="mt-2">
                        <InputGroup className="w-full">
                          <InputGroupInput placeholder="e.g. /home" />
                          <InputGroupAddon className="rounded-tl-sm rounded-bl-sm border-r border-gray-200 bg-gray-100">
                            <div className="flex items-center gap-2 pr-2">
                              <span className="font-normal">$DEVHOST</span>
                            </div>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          Unauthorized sign in URL
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Specify where to take a user for revoking a sign in from
                        an unrecognized device.
                      </p>
                      <div className="mt-2">
                        <InputGroup className="w-full">
                          <InputGroupInput placeholder="e.g. /unauthorized-sign-in" />
                          <InputGroupAddon className="rounded-tl-sm rounded-bl-sm border-r border-gray-200 bg-gray-100">
                            <div className="flex items-center gap-2 pr-2">
                              <span className="font-normal">$DEVHOST</span>
                            </div>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-2 text-base font-medium">
                      Component paths
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    {`Specify where to take your users for <SignIn />, <SignUp />
                    and <SignOut /> .`}
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{'<SignIn />'}</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        {'Specify where to take a user for <SignIn />'}
                      </p>
                      <RadioGroup defaultValue="" className="gap-0">
                        <div className="mt-3 flex items-start gap-1">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="mt-0.5"
                          />
                          <span className="">
                            Sign-in page on Account Portal
                          </span>
                        </div>
                        <div className="mt-2 ml-6 flex gap-2">
                          <Input
                            disabled
                            full
                            value="https://proper-ringtail-20.accounts.dev/sign-in"
                          />
                        </div>
                        <div className="mt-3 flex items-start gap-1">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="mt-0.5"
                          />
                          <span className="">
                            Sign-in page on development host
                          </span>
                        </div>
                      </RadioGroup>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{'<SignUp />'}</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        {'Specify where to take a user for <SignUp />'}
                      </p>
                      <RadioGroup defaultValue="" className="gap-0">
                        <div className="mt-3 flex items-start gap-1">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="mt-0.5"
                          />
                          <span className="">
                            Sign-in page on Account Portal
                          </span>
                        </div>
                        <div className="mt-2 ml-6 flex gap-2">
                          <Input
                            disabled
                            full
                            value="https://proper-ringtail-20.accounts.dev/sign-up"
                          />
                        </div>
                        <div className="mt-3 flex items-start gap-1">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="mt-0.5"
                          />
                          <span className="">
                            Sign-up page on development host
                          </span>
                        </div>
                      </RadioGroup>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Signing Out</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        {'Specify where to take a user after they sign out'}
                      </p>
                      <RadioGroup defaultValue="" className="gap-0">
                        <div className="mt-3 flex items-start gap-1">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="mt-0.5"
                          />
                          <span className="">
                            Sign-in page on Account Portal
                          </span>
                        </div>
                        <div className="mt-2 ml-6 flex gap-2">
                          <Input
                            disabled
                            full
                            value="https://proper-ringtail-20.accounts.dev/sign-up"
                          />
                        </div>
                        <div className="mt-3 flex items-start gap-1">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="mt-0.5"
                          />
                          <span className="">
                            Sign-up page on development host
                          </span>
                        </div>
                      </RadioGroup>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  <InfoIcon
                    className="mt-0.5 mr-2 size-3 shrink-0"
                    strokeWidth={2.5}
                  />
                  <div>
                    Setting component paths via the Dashboard will be deprecated
                    in a future version of Clerk. Please consult the
                    documentation on how to configure these URLs code-side.{' '}
                    <Anchor>Learn more</Anchor>
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
