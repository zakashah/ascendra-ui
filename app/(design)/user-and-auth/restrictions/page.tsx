'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';

import { Anchor } from '@/components/custom/common-ui/anchor';
import { ProBadge } from '@/components/custom/common-ui/pro-badge';
import { RowActionButton } from '@/components/custom/common-ui/row-action-button';
import { DataTableBarAction } from '@/components/custom/layout/data-table-bar-action';
import { DataTableBarContent } from '@/components/custom/layout/data-table-bar-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { TableBar } from '@/components/custom/layout/table-bar';
import { Button } from '@/components/custom/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/custom/ui/empty';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/custom/ui/input-group';
import { Switch } from '@/components/custom/ui/switch';
import {
  EmptyBody,
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableWrapper,
} from '@/components/custom/ui/table';
import { InfoIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { LuLockKeyhole, LuSearch, LuShield, LuTrash2 } from 'react-icons/lu';

export default function RestrictionsPage() {
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
        <PageTitle>Restrictions</PageTitle>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="overview">
          <TabList>
            <TabTrigger value="overview">Overview</TabTrigger>
            <TabTrigger value="allowlist">Allowlist</TabTrigger>
            <TabTrigger value="blocklist">Blocklist</TabTrigger>
          </TabList>
          <TabContent value="overview">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Enable restricted mode
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Sign-ups are disabled, and users can only access your
                    application if they are invited, created manually, or
                    authenticated through an enterprise SSO connection.
                  </p>
                </MainSectionHeader>
                <MainSectionFooter>
                  <InfoIcon
                    className="mt-0.5 mr-2 size-3 shrink-0"
                    strokeWidth={2.5}
                  />
                  Learn more about
                  <Anchor href="#" className="ml-0.5">
                    Restricted mode
                  </Anchor>
                </MainSectionFooter>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch checked={true} disabled />
                    <span className="text-base font-medium">
                      Apply allowlist and blocklist to sign-ins
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    When enabled, the allowlist and blocklist will also apply to
                    user sign-ins, not just sign-ups.
                  </p>
                </MainSectionHeader>
                <MainSectionFooter>
                  <LuLockKeyhole className="mr-2 text-sm" />
                  You must enable the{' '}
                  <Anchor href="#" className="mx-0.5">
                    allowlist
                  </Anchor>{' '}
                  or
                  <Anchor href="#" className="mx-0.5">
                    blocklist
                  </Anchor>{' '}
                  to use this setting.
                </MainSectionFooter>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Block email subaddresses
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Limit subaddress usage: emails that include +, =, or #
                    (e.g., email+tag@domain.com) are allowed, but only one
                    distinct subaddress may be used per base email address.
                    After one subaddress is used for a base email, additional
                    different subaddresses for that base are blocked for sign-up
                    and when adding to an existing account.
                  </p>
                </MainSectionHeader>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Block sign-ups that use disposable email addresses
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    If enabled, all sign-up attempts using an email address from
                    a disposable email domain will be rejected.
                  </p>
                </MainSectionHeader>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="allowlist">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Enable allowlist
                    </span>
                    <ProBadge>Pro</ProBadge>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Restrict sign-ups to accounts with pre-approved identifiers.
                  </p>
                </MainSectionHeader>
              </MainSection>
              <TableBar className="mt-2 -mb-2">
                <DataTableBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                </DataTableBarContent>
                <DataTableBarAction>
                  <Button disabled>+ Add</Button>
                </DataTableBarAction>
              </TableBar>
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Identifier</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Created</TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                </Table>
                <EmptyBody>
                  <Empty>
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <LuShield />
                      </EmptyMedia>
                      <EmptyTitle>No identifiers yet</EmptyTitle>
                      <EmptyDescription>
                        Add an identifier to get started
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                </EmptyBody>
                <TableFoot />
              </TableWrapper>
            </MainContent>
          </TabContent>
          <TabContent value="blocklist">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Enable allowlist
                    </span>
                    <ProBadge>Pro</ProBadge>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Restrict sign-ups to accounts with pre-approved identifiers.
                  </p>
                </MainSectionHeader>
              </MainSection>
              <TableBar className="mt-2 -mb-2">
                <DataTableBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                </DataTableBarContent>
                <DataTableBarAction>
                  <Button disabled>+ Add</Button>
                </DataTableBarAction>
              </TableBar>
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Identifier</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead></TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        zakashah@hotmail.com
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        Email
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        February 24, 2026
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <RowActionButton opaque />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            sideOffset={8}
                            className="w-64"
                            align="end"
                            onCloseAutoFocus={(e) => e.preventDefault()}
                          >
                            <DropdownMenuItem variant="destructive">
                              <LuTrash2 /> Delete role set
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <TableFoot />
              </TableWrapper>
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
