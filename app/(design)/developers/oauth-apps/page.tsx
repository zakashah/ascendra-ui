'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';












export default function OAuthApplicationsPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>OAuth applications</PageTitle>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="applications">
          <TabList>
            <TabTrigger value="applications">Applications</TabTrigger>
            <TabTrigger value="settings">Settings</TabTrigger>
          </TabList>
          <TabContent value="applications">
            <MainContent></MainContent>
          </TabContent>
          <TabContent value="settings">
            <MainContent></MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
