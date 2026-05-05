'use client';

import { Anchor } from '@/components/custom/common-ui/anchor';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { HeaderChevron } from '@/components/custom/header/header-chevron';
import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';
import { Button } from '@/components/custom/ui/button';
import { Input } from '@/components/custom/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';
import { CopyText } from '@/components/custom/util/copy-text';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';
import { AiTwotoneQuestionCircle } from 'react-icons/ai';
import { GoOrganization } from 'react-icons/go';
import {
  LuCircleSlash,
  LuExternalLink,
  LuFolderLock,
  LuUsersRound,
} from 'react-icons/lu';
import { TbExternalLink } from 'react-icons/tb';

export default function RolesPage() {
  return (
    <>
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Account Portal</PageTitle>
          <PageSubtitle>
            Clerk&apos;s Account Portal is the fastest way to add authentication
            and user management to your application. We provide a fully managed
            and hosted solution that lives on your domain.{' '}
            <Anchor>Learn more</Anchor>
          </PageSubtitle>
        </PageHeaderGroup>
        <PageHeaderAction>
          <Button>
            View <TbExternalLink />
          </Button>
        </PageHeaderAction>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="overview">
          <TabList>
            <TabTrigger value="overview">Overview</TabTrigger>
            <TabTrigger value="redirects">Redirects</TabTrigger>
            <TabTrigger value="customization">Customozation</TabTrigger>
          </TabList>
          <TabContent value="overview">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <LuFolderLock className="text-muted-foreground size-5" />
                    <span className="text-base font-medium">
                      Authentication
                    </span>
                  </div>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Sign in</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="relative w-full">
                          <Input
                            disabled
                            full
                            placeholder="https://proper-ringtail-20.accounts.dev/sign-in"
                          />
                          <CopyText
                            className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                            opaque
                            onClick={async () =>
                              'https://proper-ringtail-20.accounts.dev/sign-in'
                            }
                          />
                        </div>
                        <HeaderChevron
                          className="h-8 w-8"
                          icon={LuExternalLink}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Sign up</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="relative w-full">
                          <Input
                            disabled
                            full
                            placeholder="https://proper-ringtail-20.accounts.dev/sign-up"
                          />
                          <CopyText
                            className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                            opaque
                            onClick={async () =>
                              'https://proper-ringtail-20.accounts.dev/sign-up'
                            }
                          />
                        </div>
                        <HeaderChevron
                          className="h-8 w-8"
                          icon={LuExternalLink}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          Unauthorized sign in
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="relative w-full">
                          <Input
                            disabled
                            full
                            placeholder="https://proper-ringtail-20.accounts.dev/unauthorized-sign-in"
                          />
                          <CopyText
                            className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                            opaque
                            onClick={async () =>
                              'https://proper-ringtail-20.accounts.dev/unauthorized-sign-in'
                            }
                          />
                        </div>
                        <HeaderChevron
                          className="h-8 w-8"
                          icon={LuExternalLink}
                        />
                      </div>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <LuUsersRound className="text-muted-foreground size-5" />
                    <span className="text-base font-medium">Users</span>
                  </div>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">User profile</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="relative w-full">
                          <Input
                            disabled
                            full
                            placeholder="https://proper-ringtail-20.accounts.dev/user"
                          />
                          <CopyText
                            className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                            opaque
                            onClick={async () =>
                              'https://proper-ringtail-20.accounts.dev/user'
                            }
                          />
                        </div>
                        <HeaderChevron
                          className="h-8 w-8"
                          icon={LuExternalLink}
                        />
                      </div>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  <InfoIcon
                    className="mt-0.5 mr-2 size-3 shrink-0"
                    strokeWidth={2.5}
                  />
                  You must be signed in to your application to preview the user
                  profile.
                </MainSectionFooter>
              </MainSection>

              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <GoOrganization className="text-muted-foreground size-5" />
                    <span className="text-base font-medium">Organizations</span>
                  </div>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          Organization profile
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="relative w-full">
                          <Input
                            disabled
                            full
                            placeholder="https://proper-ringtail-20.accounts.dev/organization"
                          />
                          <CopyText
                            className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                            opaque
                            onClick={async () =>
                              'https://proper-ringtail-20.accounts.dev/organization'
                            }
                          />
                        </div>
                        <HeaderChevron
                          className="h-8 w-8"
                          icon={LuExternalLink}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Create organization</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="relative w-full">
                          <Input
                            disabled
                            full
                            placeholder="https://proper-ringtail-20.accounts.dev/create-organization"
                          />
                          <CopyText
                            className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
                            opaque
                            onClick={async () =>
                              'https://proper-ringtail-20.accounts.dev/create-organization'
                            }
                          />
                        </div>
                        <HeaderChevron
                          className="h-8 w-8"
                          icon={LuExternalLink}
                        />
                      </div>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  <InfoIcon
                    className="mt-0.5 mr-2 size-3 shrink-0"
                    strokeWidth={2.5}
                  />
                  You must be signed in to your application to preview the org
                  profile and create organization flow.
                </MainSectionFooter>
              </MainSection>
              <MainSection danger>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-[#e02e2e]">
                      Danger Zone
                    </span>
                  </div>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          Disable Account Portal
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        <span className="text-[#e02e2e]">Warning:</span>{' '}
                        Disabling the account portal will deactivate the public
                        version of your components
                      </p>
                      <div className="mt-4">
                        <Button variant="destructive" className="gap-2">
                          <LuCircleSlash strokeWidth={3} />
                          Disable
                        </Button>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="redirects">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      User redirects
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    The Account Portal needs to know where to redirect your
                    users after they have performed key actions. We have set
                    your development host as the default, but you can configure
                    your own paths here as well.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          After sign-up fallback
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Specify where to send a user if it cannot be determined
                        from the redirect_url query parameter.
                      </p>
                      <div className="mt-2">
                        <InputGroup className="w-full">
                          <InputGroupInput placeholder="/onboarding" />
                          <InputGroupAddon className="rounded-tl-sm rounded-bl-sm border-r border-gray-200 bg-gray-100">
                            <div className="flex items-center gap-2 pr-2">
                              <span className="font-normal">$DEVHOST</span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <AiTwotoneQuestionCircle className="text-foreground size-3.5 cursor-pointer" />
                                </TooltipTrigger>
                                <TooltipContent side="top" align="center">
                                  content
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          After sign-in fallback
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Specify where to send a user if it cannot be determined
                        from the redirect_url query parameter.
                      </p>
                      <div className="mt-2">
                        <InputGroup className="w-full">
                          <InputGroupInput placeholder="/dashboard" />
                          <InputGroupAddon className="rounded-tl-sm rounded-bl-sm border-r border-gray-200 bg-gray-100">
                            <div className="flex items-center gap-2 pr-2">
                              <span className="font-normal">$DEVHOST</span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <AiTwotoneQuestionCircle className="text-foreground size-3.5 cursor-pointer" />
                                </TooltipTrigger>
                                <TooltipContent side="top" align="center">
                                  content
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">After logo click</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Specify where to send a user after they click your
                        application’s logo.
                      </p>
                      <div className="mt-2">
                        <InputGroup className="w-full">
                          <InputGroupInput placeholder="/home" />
                          <InputGroupAddon className="rounded-tl-sm rounded-bl-sm border-r border-gray-200 bg-gray-100">
                            <div className="flex items-center gap-2 pr-2">
                              <span className="font-normal">$DEVHOST</span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <AiTwotoneQuestionCircle className="text-foreground size-3.5 cursor-pointer" />
                                </TooltipTrigger>
                                <TooltipContent side="top" align="center">
                                  content
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  <InfoIcon
                    className="mt-0.5 mr-2 size-3 shrink-0"
                    strokeWidth={2.5}
                  />
                  <div>
                    For development environments, the{' '}
                    <SimpleBadge variant="blue">$DEVHOST</SimpleBadge>{' '}
                    (development host) is dynamically detected at runtime. The
                    fallback development host, set in the paths page, is used
                    for features initiated externally like user impersonation or
                    IdP-initiated SAML. <Anchor>Learn more</Anchor>
                  </div>
                </MainSectionFooter>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Organization redirects
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    The Account Portal needs to know where to redirect your
                    users after they have performed key actions. We have set
                    your development host as the default, but you can configure
                    your own paths here as well.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          After create organization
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Specify where to send a user after they create an
                        organization. Leave blank to redirect to the host’s
                        root.
                      </p>
                      <div className="mt-2">
                        <InputGroup className="w-full">
                          <InputGroupInput placeholder="/blog" />
                          <InputGroupAddon className="rounded-tl-sm rounded-bl-sm border-r border-gray-200 bg-gray-100">
                            <div className="flex items-center gap-2 pr-2">
                              <span className="font-normal">$DEVHOST</span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <AiTwotoneQuestionCircle className="text-foreground size-3.5 cursor-pointer" />
                                </TooltipTrigger>
                                <TooltipContent side="top" align="center">
                                  content
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          After leave organization
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Specify where to send a user after they leave an
                        organization. Leave blank to redirect to the host’s
                        root.
                      </p>
                      <div className="mt-2">
                        <InputGroup className="w-full">
                          <InputGroupInput placeholder="/signin" />
                          <InputGroupAddon className="rounded-tl-sm rounded-bl-sm border-r border-gray-200 bg-gray-100">
                            <div className="flex items-center gap-2 pr-2">
                              <span className="font-normal">$DEVHOST</span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <AiTwotoneQuestionCircle className="text-foreground size-3.5 cursor-pointer" />
                                </TooltipTrigger>
                                <TooltipContent side="top" align="center">
                                  content
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </InputGroupAddon>
                        </InputGroup>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="customization">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">Colors</span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Set colors for your Account Portal
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Appearance</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Set the appearance mode. Auto will respect the
                        user&apos;s system settings
                      </p>
                      <div className="mt-2">
                        <Select>
                          <SelectTrigger className="w-85 justify-between px-2">
                            <SelectValue placeholder="Light" />
                          </SelectTrigger>
                          <SelectContent side="bottom">
                            {['Light', 'Dark', 'Auto'].map((item, i) => (
                              <SelectItem key={i} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="font-medium">Ligh mode</div>
                    <div className="mt-6">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Primary color</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Set the primary color to match your branding
                      </p>
                      <div className="mt-2">
                        <Input value="#6C47FF" className="font-normal"></Input>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Background color</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Set page background color
                      </p>
                      <div className="mt-2">
                        <Input value="#FFFFFF" className="font-normal"></Input>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="font-medium">Dark mode</div>
                    <div className="mt-6">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Primary color</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Set the primary color to match your branding
                      </p>
                      <div className="mt-2">
                        <Input value="#6C47FF" className="font-normal"></Input>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Background color</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Set page background color
                      </p>
                      <div className="mt-2">
                        <Input value="#1F1F23" className="font-normal"></Input>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
