'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';












export default function M2MPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>M2M Authentication</PageTitle>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="configure">
          <TabList>
            <TabTrigger value="configure">Configure</TabTrigger>
            <TabTrigger value="logs">Logs</TabTrigger>
          </TabList>
          <TabContent value="configure">
            <MainContent></MainContent>
          </TabContent>
          <TabContent value="logs">
            <MainContent></MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
