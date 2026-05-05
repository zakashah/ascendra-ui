'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';

import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { PageTitle } from '@/components/custom/layout/page-title';

import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { Button } from '@/components/custom/ui/button';
import { LuChevronDown, LuCode, LuEye } from 'react-icons/lu';
import { TbExternalLink } from 'react-icons/tb';

import { ProBadge } from '@/components/custom/common-ui/pro-badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/custom/ui/dropdown-menu';

import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';

export default function FormPage() {
  return (
    <>
      <>
        <PageHeader>
          <PageTitle>Only Title</PageTitle>
        </PageHeader>
        <PageMain>
          <PageWrapper>
            <PageContent>
              <MainContent>{/* MainSection components go here */}</MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </>
      <div className="h-10" />
      <>
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Title</PageTitle>
            <PageSubtitle>Title and subtitle</PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>
        <PageMain>
          <PageWrapper>
            <PageContent>
              <MainContent>{/* MainSection components go here */}</MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </>
      <div className="h-10" />
      <>
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Title</PageTitle>
            <PageSubtitle>
              Title and subtitle along with header action, remove icon from
              button if not required
            </PageSubtitle>
          </PageHeaderGroup>
          <PageHeaderAction>
            <Button>
              View <TbExternalLink />
            </Button>
          </PageHeaderAction>
        </PageHeader>
        <PageMain>
          <PageWrapper>
            <PageContent>
              <MainContent>{/* MainSection components go here */}</MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </>
      <div className="h-10" />
      <>
        <PageHeader>
          <PageTitle>
            Only Title with header action, remove drop down if not required
          </PageTitle>
          <PageHeaderAction>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="group">
                <Button variant="secondary">
                  Preview
                  <LuChevronDown className="text-muted-foreground font-bold transition-transform duration-300 group-data-[state=open]:rotate-180" />
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
          <PageWrapper>
            <PageContent>
              <MainContent>{/* MainSection components go here */}</MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </>
      <div className="h-10" />
      <>
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Title</PageTitle>
            <PageSubtitle>
              Title and subtitle along with header action, fancy drop down
            </PageSubtitle>
          </PageHeaderGroup>
          <PageHeaderAction>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="group">
                <Button>
                  Add connection
                  <LuChevronDown className="font-bold transition-transform duration-300 group-data-[state=open]:rotate-180" />
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
          <PageWrapper>
            <PageContent>
              <MainContent>{/* MainSection components go here */}</MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </>
      <div className="h-10" />
      <>
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Title</PageTitle>
            <PageSubtitle>Title and subtitle</PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>
        <PageMain>
          <Tabs defaultValue="email">
            <TabList>
              <TabTrigger value="email" dirty>
                Email
              </TabTrigger>
              <TabTrigger value="phone">Phone</TabTrigger>
              <TabTrigger value="username">Username</TabTrigger>
            </TabList>
            <TabContent value="email">
              <MainContent></MainContent>
            </TabContent>
            <TabContent value="phone">
              <MainContent></MainContent>
            </TabContent>
            <TabContent value="username">
              <MainContent></MainContent>
            </TabContent>
          </Tabs>
        </PageMain>
      </>
      <div className="h-10" />
    </>
  );
}
