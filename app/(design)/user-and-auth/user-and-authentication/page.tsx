'use client';

import { Anchor } from '@/components/custom/common-ui/anchor';
import { DropDownChevron } from '@/components/custom/common-ui/drop-down-chevron';
import { ProBadge } from '@/components/custom/common-ui/pro-badge';
import { SimpleAlert } from '@/components/custom/common-ui/simple-alert';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { AsideContent } from '@/components/custom/layout/aside-content';
import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { MainSectionPanelItemGroup } from '@/components/custom/layout/main-section-panel-item-group';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';
import { Button } from '@/components/custom/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import { Switch } from '@/components/custom/ui/switch';
import { InfoIcon } from 'lucide-react';
import { useState } from 'react';
import { LuCode, LuEye, LuFolderLock } from 'react-icons/lu';

export default function UserAndAuthenticationPage() {
  const [hidden, setHidden] = useState(true);
  const [hidden1, setHidden1] = useState(false);
  return (
    <>
      <PageHeader>
        <PageTitle>User & Auhtentication</PageTitle>
        <PageHeaderAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="group">
              <Button variant="secondary">
                Preview
                <DropDownChevron />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={8}
              className="w-64"
              align="end"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <DropdownMenuItem>
                <LuEye /> Preview Sign Up
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LuEye />
                Preview Sign In
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LuCode /> Sample User Object
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </PageHeaderAction>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="email">
          <TabList>
            <TabTrigger value="email" dirty>
              Email
            </TabTrigger>
            <TabTrigger value="phone">Phone</TabTrigger>
            <TabTrigger value="username">Username</TabTrigger>
            <TabTrigger value="password">Password</TabTrigger>
            <TabTrigger value="passkeys">Passkeys</TabTrigger>
            <TabTrigger value="user-model">User Model</TabTrigger>
          </TabList>
          <TabContent value="email">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch
                      onClick={() => setHidden((prev) => !prev)}
                      checked={!hidden}
                    />
                    <span className="text-base font-medium">
                      Sign-up with email
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Allow users to sign up with their email address
                  </p>
                </MainSectionHeader>
                <MainSectionPanel collapsed={hidden}>
                  <MainSectionPanelItem>
                    <MainSectionPanelItemGroup>
                      <div>
                        <div className="flex items-center gap-2">
                          <Switch checked={true} />
                          <span className="text-base font-medium">
                            Require email address
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                          Users must provide an email address to sign up and
                          must maintain one on their account at all times.
                        </p>
                      </div>
                      <SimpleAlert>
                        Email is the only enabled sign-up option and is
                        therefore required.
                        {/* </span> */}
                      </SimpleAlert>
                    </MainSectionPanelItemGroup>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch />
                        <span className="text-base font-medium">
                          Verify at sign-up
                          <SimpleBadge className="ml-1" variant={'blue'}>
                            Recommended
                          </SimpleBadge>
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                        Require users to verify their email addresses before
                        they can sign-up
                      </p>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch />
                        <span className="text-base font-medium">
                          Restrict changes
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                        Prevent users from changing their email address after
                        sign-up
                      </p>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  this is footer of main section
                </MainSectionFooter>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Sign-in with email
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Allow users to sign in with their email address
                  </p>
                </MainSectionHeader>
                <MainSectionFooter>
                  this is footer of main section
                </MainSectionFooter>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="phone">
            <MainContent>
              <SimpleAlert>
                <span>
                  SMS functionality is restricted to phone numbers from
                  countries enabled on your SMS allowlist.{' '}
                  <Anchor href={'#'} variant="blue">
                    Manage allowlist settings.
                  </Anchor>
                </span>
              </SimpleAlert>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Sign-up with phone
                      <ProBadge className="ml-2">Pro</ProBadge>
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Allow users to sign up with a phone number
                  </p>
                </MainSectionHeader>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Sign-up with phone
                      <ProBadge className="ml-2">Pro</ProBadge>
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Allow users to sign up with a phone number
                  </p>
                </MainSectionHeader>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="username">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch
                      onClick={() => setHidden((prev) => !prev)}
                      checked={!hidden}
                    />
                    <span className="text-base font-medium">
                      Sign-up with username
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Allow users to add a username during sign-up
                  </p>
                </MainSectionHeader>
                <MainSectionPanel collapsed={hidden}>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch checked={true} />
                        <span className="text-base font-medium">
                          Require username
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                        Users must create a username for their account
                      </p>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch />
                        <span className="text-base font-medium">
                          Require username
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                        Users must create a username for their account
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
                      Sign-up with username
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Allow users to add a username during sign-up
                  </p>
                </MainSectionHeader>
              </MainSection>
            </MainContent>
            <AsideContent dimmed={hidden}>
              <div className="flex min-w-60 flex-col">
                <div className="border-border border-b pb-3">
                  <p className="mb-1 text-xs">Minimum username length</p>
                  <p>4 characters</p>
                </div>
                <div className="border-border border-b pt-4 pb-3">
                  <p className="mb-1 text-xs">Maximum username length</p>
                  <p>64 characters</p>
                </div>
                <div className="border-border border-b pt-4 pb-3">
                  <p className="mb-1 text-xs">Allow extended characters</p>
                  <p>Off</p>
                </div>
                <div className="p-1 pt-4">
                  <Anchor
                    href="#"
                    className="text-primary flex gap-1 text-xs font-medium"
                  >
                    <LuFolderLock />
                    Update username requirement
                  </Anchor>
                </div>
              </div>
            </AsideContent>
          </TabContent>
          <TabContent value="password">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch
                      onClick={() => setHidden((prev) => !prev)}
                      checked={!hidden}
                    />
                    <label className="text-base font-medium">
                      Sign-up with password
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Require users to sign up with a password
                  </p>
                </MainSectionHeader>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base font-medium">
                      Add password to account
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Allow users to add a password to their account
                  </p>
                </MainSectionHeader>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base font-medium">
                      Client Trust
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Protect your application and users from credential stuffing
                    attacks with Client Trust.
                  </p>
                  <p className="text-muted-foreground mt-3 ml-8 text-xs">
                    When signing in with a password on a new client (e.g.
                    device), users will always be challenged for a second
                    factor. If they have not configured one, a one-time passcode
                    or magic link will be used, depending on your
                    application&apos;s settings.
                  </p>
                </MainSectionHeader>
              </MainSection>
            </MainContent>
            <AsideContent dimmed={hidden}>
              <div className="flex min-w-60 flex-col">
                <div className="border-border border-b pb-3">
                  <p className="mb-1 text-xs">Minimum password length</p>
                  <p>8 characters</p>
                </div>
                <div className="border-border border-b pt-4 pb-3">
                  <p className="mb-1 text-xs">Reject compromised passwords</p>
                  <p>On</p>
                </div>
                <div className="border-border border-b pt-4 pb-3">
                  <p className="mb-1 text-xs">
                    Enforce minimum password strength
                  </p>
                  <p>Off</p>
                </div>
                <div className="border-border border-b pt-4 pb-3">
                  <p className="mb-1 text-xs">Password rules</p>
                  <p>None</p>
                </div>
                <div className="p-1 pt-4">
                  <Anchor
                    href="#"
                    className="text-primary flex gap-1 text-xs font-medium"
                  >
                    <LuFolderLock />
                    Update password requirement
                  </Anchor>
                </div>
              </div>
            </AsideContent>
          </TabContent>
          <TabContent value="passkeys">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base font-medium">
                      Sign-in with passkey
                      <ProBadge className="ml-2">Pro</ProBadge>
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Allow users to sign in with a passkey
                  </p>
                </MainSectionHeader>
                <MainSectionFooter>
                  <InfoIcon
                    className="mt-0.5 mr-2 size-3 shrink-0"
                    strokeWidth={2.5}
                  />
                  Passkey sign-in requires at least one sign-in method (email,
                  phone, username, or password) to be enabled first.
                </MainSectionFooter>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base font-medium">
                      Add passkey to account
                      <ProBadge className="ml-2">Pro</ProBadge>
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Allow users to add a passkey to their account
                  </p>
                </MainSectionHeader>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="user-model">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <label className="text-base font-medium">
                      First and last name
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Users have the ability to set their first and last name
                  </p>
                </MainSectionHeader>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <label className="text-base font-medium">
                      Default user permissions
                    </label>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Define the default settings for new users. These values can
                    be overridden on a per-user basis in the user profile
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <MainSectionPanelItemGroup>
                      <div>
                        <div className="flex items-center gap-2">
                          <Switch checked={true} />
                          <label className="font-medium">
                            Allow users to delete their accounts
                          </label>
                        </div>
                      </div>
                    </MainSectionPanelItemGroup>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <MainSectionPanelItemGroup className="w-fit">
                      <Button variant="secondary">
                        Apply to existing users
                      </Button>
                    </MainSectionPanelItemGroup>
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
