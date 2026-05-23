"use client";

import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { PageContent } from "@/ascendra-ui/components/layout/page-content";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";
import { PageWrapper } from "@/ascendra-ui/components/layout/page-wrapper";

import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";

import { PageHeaderAction } from "@/ascendra-ui/components/layout/page-header-action";
import { Button } from "@/ascendra-ui/components/ui/button";
import { LuChevronDown, LuCode, LuEye, LuFolderLock } from "react-icons/lu";
import { TbExternalLink } from "react-icons/tb";

import { ProBadge } from "@/ascendra-ui/components/common-ui/pro-badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ascendra-ui/components/ui/dropdown-menu";

import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { MainSectionPanelItemGroup } from "@/ascendra-ui/components/layout/main-section-panel-item-group";
import { TabContent } from "@/ascendra-ui/components/tabs/tab-content";
import { TabList } from "@/ascendra-ui/components/tabs/tab-list";
import { TabTrigger } from "@/ascendra-ui/components/tabs/tab-trigger";
import { Tabs } from "@/ascendra-ui/components/tabs/tabs";
import { Switch } from "@/ascendra-ui/components/ui/switch";
import { InfoIcon } from "lucide-react";
import { useState } from "react";
import { AsideContent } from "@/ascendra-ui/components/layout/aside-content";
import { Anchor } from "@/ascendra-ui/components/common-ui/anchor";

export default function FormPage() {
  const [hidden, setHidden] = useState(true);
  const [dimmed, setDimmed] = useState(true);
  return (
    <div className="p-10">
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
      <>
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Title</PageTitle>
            <PageSubtitle>Main section simple with header only</PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>
        <PageMain>
          <PageWrapper>
            <PageContent>
              <MainContent>
                <MainSection>
                  <MainSectionHeader>
                    <MainSectionHeaderTitle>
                      Section header title
                    </MainSectionHeaderTitle>
                    <MainSectionHeaderSubtitle>
                      Section header optional sub title
                    </MainSectionHeaderSubtitle>
                  </MainSectionHeader>
                </MainSection>
              </MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </>
      <div className="h-10" />
      <>
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Title</PageTitle>
            <PageSubtitle>Main section with header and footer</PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>
        <PageMain>
          <PageWrapper>
            <PageContent>
              <MainContent>
                <MainSection>
                  <MainSectionHeader>
                    <MainSectionHeaderTitle>
                      Section header title
                    </MainSectionHeaderTitle>
                  </MainSectionHeader>
                  <MainSectionFooter>
                    <InfoIcon
                      className="mt-0.5 mr-2 size-3 shrink-0"
                      strokeWidth={2.5}
                    />
                    footer
                  </MainSectionFooter>
                </MainSection>
                <MainSection>
                  <MainSectionHeader>
                    <MainSectionHeaderTitle>
                      Another main section
                    </MainSectionHeaderTitle>
                  </MainSectionHeader>
                </MainSection>
              </MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </>
      <div className="h-10" />
      <>
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Title</PageTitle>
            <PageSubtitle>Main content with simple alert</PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>
        <PageMain>
          <PageWrapper>
            <PageContent>
              <MainContent>
                <SimpleAlert>Simple alert</SimpleAlert>
                <MainSection>
                  <MainSectionHeader>
                    <MainSectionHeaderTitle>
                      Section header title
                    </MainSectionHeaderTitle>
                  </MainSectionHeader>
                </MainSection>
              </MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </>
      <div className="h-10" />
      <>
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Title</PageTitle>
            <PageSubtitle>Main content with simple alert</PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>
        <PageMain>
          <PageWrapper>
            <PageContent>
              <MainContent>
                <MainSection>
                  <MainSectionHeader>
                    <MainSectionHeaderTitle>
                      Section with one panel
                    </MainSectionHeaderTitle>
                  </MainSectionHeader>
                  <MainSectionPanel>
                    <MainSectionPanelItem>
                      Allow users to delete their accounts
                    </MainSectionPanelItem>
                  </MainSectionPanel>
                </MainSection>
                <MainSection>
                  <MainSectionHeader>
                    <MainSectionHeaderTitle>
                      Section with multiple panels
                    </MainSectionHeaderTitle>
                  </MainSectionHeader>
                  <MainSectionPanel>
                    <MainSectionPanelItem>
                      Allow users to delete their accounts
                    </MainSectionPanelItem>
                    <MainSectionPanelItem>
                      <Button variant="secondary">
                        Apply to existing users
                      </Button>
                    </MainSectionPanelItem>
                  </MainSectionPanel>
                </MainSection>
                <MainSection>
                  <MainSectionHeader>
                    <MainSectionHeaderTitle>
                      Section with panel item group which manages the space-y
                    </MainSectionHeaderTitle>
                  </MainSectionHeader>
                  <MainSectionPanel>
                    <MainSectionPanelItem>
                      <MainSectionPanelItemGroup>
                        <div>Allow users to delete their accounts</div>
                        <SimpleAlert>Alert inside panel item group</SimpleAlert>
                      </MainSectionPanelItemGroup>
                    </MainSectionPanelItem>
                  </MainSectionPanel>
                </MainSection>
              </MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </>
      <div className="h-10" />
      <>
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Title</PageTitle>
            <PageSubtitle>Collapseable panel</PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>
        <PageMain>
          <PageWrapper>
            <PageContent>
              <MainContent>
                <MainSection>
                  <MainSectionHeader>
                    <div className="flex items-center gap-2">
                      <Switch
                        onClick={() => setHidden((prev) => !prev)}
                        checked={!hidden}
                      />
                      <MainSectionHeaderTitle>
                        Hide main section panel
                      </MainSectionHeaderTitle>
                    </div>
                  </MainSectionHeader>
                  <MainSectionPanel collapsed={hidden}>
                    <MainSectionPanelItem>
                      <div>Allow users to sign up with their email address</div>
                    </MainSectionPanelItem>
                  </MainSectionPanel>
                  <MainSectionFooter>
                    this is footer of main section
                  </MainSectionFooter>
                </MainSection>
              </MainContent>
            </PageContent>
          </PageWrapper>
        </PageMain>
      </>
      <div className="h-10" />
      <PageHeader>
        <PageHeaderGroup>
          <PageTitle>Title</PageTitle>
          <PageSubtitle>Main content and aside content</PageSubtitle>
        </PageHeaderGroup>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch
                      onClick={() => setDimmed((prev) => !prev)}
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
            </MainContent>
            <AsideContent dimmed={dimmed}>
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
          </PageContent>
        </PageWrapper>
      </PageMain>
      <div className="h-10" />
    </div>
  );
}
