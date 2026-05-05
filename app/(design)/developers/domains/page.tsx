'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { TabContent } from '@/components/custom/tabs/tab-content';
import { TabList } from '@/components/custom/tabs/tab-list';
import { TabTrigger } from '@/components/custom/tabs/tab-trigger';
import { Tabs } from '@/components/custom/tabs/tabs';

import { ProBadge } from '@/components/custom/common-ui/pro-badge';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/custom/ui/empty';
import {
  EmptyBody,
  Table,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableWrapper,
} from '@/components/custom/ui/table';
import {
  LuCircleUserRound,
} from 'react-icons/lu';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';




import { Button } from '@/components/custom/ui/button';
import { Separator } from '@/components/ui/separator';

export default function DomainsPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>proper-ringtail-20.clerk.accounts.dev</PageTitle>
      </PageHeader>
      <PageMain>
        <Tabs defaultValue="configure">
          <TabList>
            <TabTrigger value="configure">Configure</TabTrigger>
            <TabTrigger value="satellites">
              Satellites
              <ProBadge>Pro</ProBadge>
            </TabTrigger>
            <TabTrigger value="subdomains">Allowed Subdomains</TabTrigger>
          </TabList>
          <TabContent value="configure">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      DNS Configuration
                    </span>
                    <SimpleBadge variant="green">Verified</SimpleBadge>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    The domain is functioning correctly.
                  </p>
                </MainSectionHeader>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="satellites">
            <MainContent>
              <MainSection className="pb-0">
                <MainSectionHeader>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-medium">
                      Satellite domains
                    </span>
                    <Button variant="ghost">+ Add satelite domain</Button>
                  </div>
                </MainSectionHeader>
                <Separator />
                <TableWrapper>
                  <Table scrollable>
                    <TableHeader>
                      <TableHeaderRow>
                        <TableHead>Domain</TableHead>
                        <TableHead>Status</TableHead>
                      </TableHeaderRow>
                    </TableHeader>
                  </Table>
                  <EmptyBody>
                    <Empty>
                      <EmptyHeader>
                        <EmptyMedia variant="icon">
                          <LuCircleUserRound />
                        </EmptyMedia>
                        <EmptyTitle>No satellite domains</EmptyTitle>
                        <EmptyDescription>
                          Share authenticated sessions across unlimited domains
                          with satellite domains.
                        </EmptyDescription>
                      </EmptyHeader>
                    </Empty>
                  </EmptyBody>
                </TableWrapper>
              </MainSection>
            </MainContent>
          </TabContent>
          <TabContent value="subdomains">
            <MainContent>
              <EmptyBody>
                <Empty>
                  <EmptyDescription>
                    The allowed subdomains feature is not available in
                    development instances. Please switch to a production
                    instance to configure this feature.
                  </EmptyDescription>
                </Empty>
              </EmptyBody>
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </>
  );
}
