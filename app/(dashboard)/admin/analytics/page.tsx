'use client';

import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { PageTitle } from '@/components/custom/layout/page-title';
import { Anchor } from '@/components/custom/common-ui/anchor';
import { Tabs } from '@/components/custom/tabs/tabs';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { LuChevronDown } from 'react-icons/lu';
import { Button } from '@/components/custom/ui/button';

export default function OverviewPage() {
  return (
    <>
      <PageHeader>
        {/* <PageTitle>Account Portal</PageTitle> */}
        <PageHeaderGroup>
          <PageTitle>Account Portal</PageTitle>
          <PageSubtitle>
            Clerks Account Portal is the fastest way to add authentication and
            user management to your application. We provide a fully managed and
            hosted solution that lives on your domain.{' '}
            <Anchor href="#">Learn more</Anchor>
          </PageSubtitle>
        </PageHeaderGroup>
        <PageHeaderAction>
          <Button variant="secondary">
            Preview
            <LuChevronDown className="text-muted-foreground" />
          </Button>
        </PageHeaderAction>
      </PageHeader>
      <PageMain>
        {/* <PageContent>page content</PageContent> */}
        <Tabs defaultValue="username">
          <TabList>
            <TabTrigger value="email">Email</TabTrigger>
            <TabTrigger value="phone">Phone</TabTrigger>
            <TabTrigger value="username">Username</TabTrigger>
            <TabTrigger value="password" disabled>
              Password
            </TabTrigger>
            <TabTrigger value="passkeys">Passkeys</TabTrigger>
            <TabTrigger value="user-model">User Model</TabTrigger>
          </TabList>
          <TabContent value="email">email</TabContent>
          <TabContent value="phone">phone</TabContent>
          <TabContent value="username">username</TabContent>
          <TabContent value="password">password</TabContent>
          <TabContent value="passkeys">passkeys</TabContent>
          <TabContent value="user-model">user-model</TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
