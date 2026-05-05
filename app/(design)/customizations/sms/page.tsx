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
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
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
  LuCircleUserRound,
  LuMessageCircle,
  LuSearch,
  LuShieldCheck,
  LuSmartphone,
} from 'react-icons/lu';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';


import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { SimpleAlert } from '@/components/custom/common-ui/simple-alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/custom/ui/checkbox';

export default function SMSPage() {
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
        <PageTitle>SMS</PageTitle>
      </PageHeader>
      <SimpleAlert className="mb-6">
        <span>
          If Clerk is used to deliver SMS messages for your development
          instance, a maximum of 20 SMS messages can be delivered per calendar
          month. Please contact support if you need a higher limit.{' '}
          <Anchor href={'#'} variant="blue">
            Learn more
          </Anchor>
        </span>
      </SimpleAlert>
      <PageMain>
        <Tabs defaultValue="messages">
          <TabList>
            <TabTrigger value="messages">Messages</TabTrigger>
            <TabTrigger value="settings">Settings</TabTrigger>
          </TabList>
          <TabContent value="messages">
            <MainContent>
              <MainSection className="pb-0">
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <LuCircleUserRound className="text-muted-foreground size-5" />
                    <span className="text-base font-medium">
                      Verification OTPs
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
                          <div className="font-medium">Reset password</div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuSmartphone className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked disabled></Switch>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Verification code</div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuSmartphone className="stroke-2" />
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
                <MainSectionFooter>
                  <LuMessageCircle
                    className="mt-0.5 mr-2 size-3 shrink-0"
                    strokeWidth={3}
                  />
                  You must be signed in to your application to preview the user
                  profile.
                </MainSectionFooter>
              </MainSection>
              <MainSection className="pb-0">
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <LuShieldCheck className="text-muted-foreground size-5" />
                    <span className="text-base font-medium">
                      Account Notifications
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
                          <div className="font-medium">Invitation</div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuSmartphone className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked disabled></Switch>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Passkey added</div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuSmartphone className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked></Switch>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Passkey removed</div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuSmartphone className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked></Switch>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Password changed</div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuSmartphone className="stroke-2" />
                            Clerk
                          </SimpleBadge>
                        </TableCell>
                        <TableCell className="w-0">
                          <Switch checked></Switch>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Password removed</div>
                        </TableCell>
                        <TableCell>
                          <SimpleBadge>
                            <LuSmartphone className="stroke-2" />
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
                <MainSectionFooter>
                  <LuMessageCircle
                    className="mt-0.5 mr-2 size-3 shrink-0"
                    strokeWidth={3}
                  />
                  SMS fees are based on country location. You can configure the
                  country list from the Settings tab above.
                </MainSectionFooter>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="settings">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">SMS allowlist</span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    SMS will only be sent to chosen countries, depending on the
                    active SMS categories.
                  </p>
                </MainSectionHeader>
                <MainSectionHeader className="border-t py-3">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <InputGroup className="max-w-xs">
                        <InputGroupInput
                          placeholder="Search country"
                          className="w-65"
                        />
                        <InputGroupAddon>
                          <LuSearch className="text-foreground size-3.5" />
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <div>90 of 224 selected</div>
                  </div>
                </MainSectionHeader>
                <MainSectionPanel>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="one">
                      <AccordionTrigger className="cursor-pointer rounded-none p-0 px-5 py-6 hover:bg-gray-700/4 hover:no-underline data-[state=open]:bg-gray-700/4">
                        <div className="flex w-full items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">Tier A</div>
                            <SimpleBadge variant="secondary">
                              $0.01 per SMS
                            </SimpleBadge>
                          </div>
                          <div className="mr-2 font-normal">
                            2 of 2 selected
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <div>
                          <div className="flex items-center gap-2">
                            <Checkbox checked />
                            <div className="mt-1">All</div>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3">
                            {[
                              'Canada',
                              'United States',
                              'United Arab Emirates',
                            ].map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Checkbox checked />
                                <div className="mt-1">{item}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="two">
                      <AccordionTrigger className="cursor-pointer rounded-none p-0 px-5 py-6 hover:bg-gray-700/4 hover:no-underline data-[state=open]:bg-gray-700/4">
                        <div className="flex w-full items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">Tier B</div>
                            <SimpleBadge variant="secondary">
                              $0.05 per SMS
                            </SimpleBadge>
                          </div>
                          <div className="mr-2 font-normal">
                            21 of 21 selected
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <div>
                          <div className="flex items-center gap-2">
                            <Checkbox />
                            <div className="mt-1">All</div>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3">
                            {['Canada', 'United States'].map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Checkbox />
                                <div className="mt-1">{item}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="three">
                      <AccordionTrigger className="cursor-pointer rounded-none p-0 px-5 py-6 hover:bg-gray-700/4 hover:no-underline data-[state=open]:bg-gray-700/4">
                        <div className="flex w-full items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">Tier C</div>
                            <SimpleBadge variant="secondary">
                              $0.10 per SMS
                            </SimpleBadge>
                          </div>
                          <div className="mr-2 font-normal">
                            67 of 67 selected
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <div>
                          <div className="flex items-center gap-2">
                            <Checkbox />
                            <div className="mt-1">All</div>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3">
                            {['Canada', 'United States'].map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Checkbox />
                                <div className="mt-1">{item}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="four">
                      <AccordionTrigger className="cursor-pointer rounded-none p-0 px-5 py-6 hover:bg-gray-700/4 hover:no-underline data-[state=open]:bg-gray-700/4">
                        <div className="flex w-full items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">Tier D</div>
                            <SimpleBadge variant="secondary">
                              $0.20 per SMS
                            </SimpleBadge>
                          </div>
                          <div className="mr-2 font-normal">
                            0 of 95 selected
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <div>
                          <div className="flex items-center gap-2">
                            <Checkbox />
                            <div className="mt-1">All</div>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3">
                            {['Canada', 'United States'].map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Checkbox />
                                <div className="mt-1">{item}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="five">
                      <AccordionTrigger className="cursor-pointer rounded-none p-0 px-5 py-6 hover:bg-gray-700/4 hover:no-underline data-[state=open]:bg-gray-700/4">
                        <div className="flex w-full items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">Tier E</div>
                            <SimpleBadge variant="secondary">
                              $0.30 per SMS
                            </SimpleBadge>
                          </div>
                          <div className="mr-2 font-normal">
                            0 of 27 selected
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <div>
                          <div className="flex items-center gap-2">
                            <Checkbox />
                            <div className="mt-1">All</div>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3">
                            {['Canada', 'United States'].map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Checkbox />
                                <div className="mt-1">{item}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="six">
                      <AccordionTrigger className="cursor-pointer rounded-none p-0 px-5 py-6 hover:bg-gray-700/4 hover:no-underline data-[state=open]:bg-gray-700/4">
                        <div className="flex w-full items-center justify-between gap-2 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="font-medium">Tier F</div>
                            <SimpleBadge variant="secondary">
                              $0.75 per SMS
                            </SimpleBadge>
                          </div>
                          <div className="mr-2 font-normal">
                            0 of 12 selected
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5">
                        <div>
                          <div className="flex items-center gap-2">
                            <Checkbox />
                            <div className="mt-1">All</div>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3">
                            {['Canada', 'United States'].map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <Checkbox />
                                <div className="mt-1">{item}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
