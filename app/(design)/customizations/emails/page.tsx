'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';

import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { Anchor } from '@/components/custom/common-ui/anchor';


import { Switch } from '@/components/custom/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
} from '@/components/custom/ui/table';
import { useEffect, useRef, useState } from 'react';
import {
  LuMail,
} from 'react-icons/lu';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';




import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';

export default function EmailsPage() {
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 0);
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, []);
  return (
    <>
      <PageHeader>
        <PageTitle>Email templates</PageTitle>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="authentication">
          <TabList>
            <TabTrigger value="authentication">Authentication</TabTrigger>
            <TabTrigger value="security">Security</TabTrigger>
            <TabTrigger value="passkeys">Passkeys</TabTrigger>
            <TabTrigger value="organizations">Organizations</TabTrigger>
            <TabTrigger value="waitlist">Waitlist</TabTrigger>
            <TabTrigger value="billing">Billing</TabTrigger>
          </TabList>
          <TabContent value="authentication">
            <MainContent>
              <MainSection className="pb-0">
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Available templates
                    </span>
                  </div>
                </MainSectionHeader>
                <TableWrapper>
                  <Table scrollable>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHead className="p-0 pb-0.5" />
                        <TableHead className="p-0 pb-0.5" />
                        <TableHead className="w-0 p-0 pb-0.5" />
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div>
                            <div className="font-medium">Invitation</div>
                            <div className="text-muted-foreground text-xs">
                              Send an invitation email to new users to join your
                              application.
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuMail className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked disabled></Switch>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div>
                            <div className="font-medium">Verification code</div>
                            <div className="text-muted-foreground text-xs">
                              Send a verification code for authentication or
                              account confirmation.
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuMail className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked disabled></Switch>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Unavailable templates
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    These email templates will become available once you have
                    set up their corresponding feature.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Email link - Sign in</div>
                        <div className="text-muted-foreground text-xs">
                          Send a magic link to allow users to sign in.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable magic link
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Email link - Sign up</div>
                        <div className="text-muted-foreground text-xs">
                          Send a magic link for users to sign up and create an
                          account.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable magic link
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">
                          Email link - Verify email
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Send a magic link for users to verify their email
                          address.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable magic link
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="security">
            <MainContent>
              <MainSection className="pb-0">
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Available templates
                    </span>
                  </div>
                </MainSectionHeader>
                <TableWrapper>
                  <Table scrollable>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHead className="p-0 pb-0.5" />
                        <TableHead className="p-0 pb-0.5" />
                        <TableHead className="w-0 p-0 pb-0.5" />
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div>
                            <div className="font-medium">Account Locked</div>
                            <div className="text-muted-foreground text-xs">
                              Send a notification to your users whenever their
                              account is locked due to multiple login attempts.
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuMail className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked></Switch>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              Primary email address changed
                            </div>
                            <div className="text-muted-foreground text-xs">
                              Notify users when their primary email address has
                              been updated.
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuMail className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked disabled></Switch>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              Sign in from new device
                            </div>
                            <div className="text-muted-foreground text-xs">
                              Alert users when a sign-in occurs from a new or
                              unrecognized device.
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuMail className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked disabled></Switch>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Unavailable templates
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    These email templates will become available once you have
                    set up their corresponding feature.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Password changed</div>
                        <div className="text-muted-foreground text-xs">
                          Confirm to users that their password has been
                          successfully changed.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable passord
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Password removed</div>
                        <div className="text-muted-foreground text-xs">
                          Inform users that their password has been removed from
                          the account.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable passord
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Reset password code</div>
                        <div className="text-muted-foreground text-xs">
                          Send a reset password code to users to reset their
                          password.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable passord
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">
                          Sign in attempt with non-existent email
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Send a notification to your users when they try to
                          sign into an account that doesn&apos;t exist.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable strict enumeration protection
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">
                          Sign up attempt with existing email
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Send a notification to your users when there is a sign
                          up attempt matching their email.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable strict enumeration protection
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="passkeys">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Unavailable templates
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    These email templates will become available once you have
                    set up their corresponding feature.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Passkey added</div>
                        <div className="text-muted-foreground text-xs">
                          Notify users when a new passkey is added to their
                          account.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable passkey
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Passkey removed</div>
                        <div className="text-muted-foreground text-xs">
                          Inform users when a passkey has been removed from
                          their account.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable passkey
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="organizations">
            <MainContent>
              <MainSection className="pb-0">
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Available templates
                    </span>
                  </div>
                </MainSectionHeader>
                <TableWrapper>
                  <Table scrollable>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHead className="p-0 pb-0.5" />
                        <TableHead className="p-0 pb-0.5" />
                        <TableHead className="w-0 p-0 pb-0.5" />
                      </TableHeaderRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              Organzation Invitation
                            </div>
                            <div className="text-muted-foreground text-xs">
                              Invite users to become members of an organization
                              within your application.
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuMail className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked disabled></Switch>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              Organzation Invitation accepted
                            </div>
                            <div className="text-muted-foreground text-xs">
                              Notify users when their organization invitation is
                              accepted.
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuMail className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked></Switch>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableWrapper>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Unavailable templates
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    These email templates will become available once you have
                    set up their corresponding feature.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Affiliation code</div>
                        <div className="text-muted-foreground text-xs">
                          Send a code for users to verify their
                          organization&apos;s domain.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable verified domains
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Organization joined</div>
                        <div className="text-muted-foreground text-xs">
                          Notify users that their request to join an
                          organization has been approved
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable verified domains
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">
                          Organization membership requested
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Notify organization admins when a user requests to
                          join their organization.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable verified domains
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="waitlist">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Unavailable templates
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    These email templates will become available once you have
                    set up their corresponding feature.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Waitlist confirmation</div>
                        <div className="text-muted-foreground text-xs">
                          Confirm a user&apos;s successful addition to your
                          application&apos;s waitlist.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable waitlist
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">Waitlist invitation</div>
                        <div className="text-muted-foreground text-xs">
                          Invite users from your waitlist to join your
                          application.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable waitlist
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="billing">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Unavailable templates
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    These email templates will become available once you have
                    set up their corresponding feature.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">
                          Free Trial Ending Soon
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Send a notification to your users when their free
                          trial is about to renew.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable billing
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">
                          Payment Attempt – Failed
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Send a failed payment notification to your users
                          whenever they have a failed payment.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable billing
                      </Anchor>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="font-medium">
                          Payment Attempt – Success
                        </div>
                        <div className="text-muted-foreground text-xs">
                          Send a payment receipt to your users whenever they
                          make a successful payment.
                        </div>
                      </div>
                      <Anchor href="#" className="font-medium">
                        Enable billing
                      </Anchor>
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
