'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';
import { Button } from '@/components/custom/ui/button';

import { DropDownChevron } from '@/components/custom/common-ui/drop-down-chevron';
import { ProBadge } from '@/components/custom/common-ui/pro-badge';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { DataTableBarContent } from '@/components/custom/layout/data-table-bar-content';
import { TableBar } from '@/components/custom/layout/table-bar';
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
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { LuGitBranch, LuSearch } from 'react-icons/lu';

export default function SSOConnectionsPage() {
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
        <PageTitle>SSO Connections</PageTitle>
        <PageHeaderAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="group">
              <Button>
                Add connection
                <DropDownChevron variant="primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={8}
              className="w-90"
              align="end"
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <DropdownMenuItem className="flex flex-col items-start gap-0">
                <div className="font-medium">For all users</div>
                <div className="text-muted-foreground text-xs">
                  Add social SSO connection for all users
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-0">
                <div className="flex w-full items-center">
                  <span className="font-medium">
                    For special domains and organization users
                  </span>
                  <ProBadge className="ml-2">Pro</ProBadge>
                </div>
                <div className="text-muted-foreground text-xs">
                  Add social SSO connection for all users
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </PageHeaderAction>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="all">
          <TabList>
            <TabTrigger value="all">All</TabTrigger>
            <TabTrigger value="social">Social</TabTrigger>
            <TabTrigger value="enterprise">Enterprise</TabTrigger>
          </TabList>
          <TabContent value="all">
            <MainContent>
              <TableBar className="-mb-2">
                <DataTableBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                </DataTableBarContent>
              </TableBar>
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Provider</TableHead>
                      <TableHead>Configuration</TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#"
                          className="focus-visible:outline-primary flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
                        >
                          <div className="flex items-center gap-2">
                            <div className="flex aspect-square size-10 items-center justify-center rounded-md ring-1 ring-black/12 ring-inset dark:ring-white/8">
                              <Image
                                src="/images/fb-logo.svg"
                                alt="Facebook"
                                className="size-6"
                                width={6}
                                height={6}
                              />
                            </div>
                            <div>
                              <div className="">Facebook</div>
                              <div className="text-xs text-nowrap">
                                Social provider
                              </div>
                            </div>
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Account Linking Only
                        </SimpleBadge>
                        <SimpleBadge variant="orange" className="font-normal">
                          Shared Credentials
                        </SimpleBadge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Link
                          href="#"
                          className="focus-visible:outline-primary flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
                        >
                          <div className="flex items-center gap-2">
                            <div className="flex aspect-square size-10 items-center justify-center rounded-md ring-1 ring-black/12 ring-inset dark:ring-white/8">
                              <Image
                                src="/images/google-logo.svg"
                                alt="Facebook"
                                className="size-4"
                                width={4}
                                height={4}
                              />
                            </div>
                            <div>
                              <div className="">Google</div>
                              <div className="text-xs text-nowrap">
                                Social provider
                              </div>
                            </div>
                          </div>
                        </Link>
                      </TableCell>
                      <TableCell>
                        <SimpleBadge
                          variant="green"
                          className="mr-2 font-normal"
                        >
                          Account Linking Only
                        </SimpleBadge>
                        <SimpleBadge variant="orange" className="font-normal">
                          Shared Credentials
                        </SimpleBadge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <TableFoot />
              </TableWrapper>
            </MainContent>
          </TabContent>
          <TabContent value="social">
            <MainContent>
              <TableBar>
                <DataTableBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                </DataTableBarContent>
              </TableBar>
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Provider</TableHead>
                      <TableHead>Configuration</TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex aspect-square size-10 items-center justify-center rounded-md ring-1 ring-black/12 ring-inset dark:ring-white/8">
                            <Image
                              src="/images/fb-logo.svg"
                              alt="Facebook"
                              className="size-6"
                              width={6}
                              height={6}
                            />
                          </div>
                          <div>
                            <div className="">Facebook</div>
                            <div className="text-xs text-nowrap">
                              Social provider
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <SimpleBadge
                          variant="secondary"
                          className="mr-2 font-normal"
                        >
                          Account Linking Only
                        </SimpleBadge>
                        <SimpleBadge variant="orange" className="font-normal">
                          Shared Credentials
                        </SimpleBadge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex aspect-square size-10 items-center justify-center rounded-md ring-1 ring-black/12 ring-inset dark:ring-white/8">
                            <Image
                              src="/images/google-logo.svg"
                              alt="Facebook"
                              className="size-4"
                              width={4}
                              height={4}
                            />
                          </div>
                          <div>
                            <div className="">Google</div>
                            <div className="text-xs text-nowrap">
                              Social provider
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <SimpleBadge
                          variant="green"
                          className="mr-2 font-normal"
                        >
                          Account Linking Only
                        </SimpleBadge>
                        <SimpleBadge variant="orange" className="font-normal">
                          Shared Credentials
                        </SimpleBadge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <TableFoot />
              </TableWrapper>
            </MainContent>
          </TabContent>
          <TabContent value="enterprise">
            <MainContent>
              <TableBar>
                <DataTableBarContent>
                  <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..." className="w-65" />
                    <InputGroupAddon>
                      <LuSearch className="text-foreground size-3.5" />
                    </InputGroupAddon>
                  </InputGroup>
                </DataTableBarContent>
              </TableBar>
              <TableWrapper>
                <Table scrollable>
                  <TableHeader>
                    <TableHeaderRow>
                      <TableHead>Provider</TableHead>
                      <TableHead>Configuration</TableHead>
                    </TableHeaderRow>
                  </TableHeader>
                </Table>
                <EmptyBody>
                  <Empty>
                    <EmptyHeader>
                      <EmptyMedia variant="icon">
                        <LuGitBranch strokeWidth={2.5} />
                      </EmptyMedia>
                      <EmptyTitle>No connections added</EmptyTitle>
                      <EmptyDescription>
                        Get started by adding a new connection.
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                </EmptyBody>
                <TableFoot />
              </TableWrapper>
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
