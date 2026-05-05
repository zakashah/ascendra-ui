'use client';

import { Button } from '@/components/custom/ui/button';
import { SimpleAlert } from '@/components/custom/common-ui/simple-alert';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { Input } from '@/components/custom/ui/input';
import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import { Anchor } from '@/components/custom/common-ui/anchor';
import { NavLinkBadge } from '@/components/custom/nav/nav-link-badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';
import { Switch } from '@/components/custom/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/custom/ui/radio-group';
import { LuCircleSlash } from 'react-icons/lu';

export default function OrganizationSettingsPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>Organization settings</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Membership options
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Configure rules and requirements for organizations
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Membership limit</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Set the default number of users allowed for new
                        organizations. This can be customized per-organization
                        in the <Anchor href="#">Dashboard</Anchor> or via
                        <Anchor href="#">Clerk&apos;s backend API.</Anchor>
                      </p>
                      <RadioGroup defaultValue="" className="gap-0">
                        <div className="mt-6 flex items-center gap-2">
                          <RadioGroupItem value="default" id="r1" />
                          <span className="">Unlimited membership</span>
                          <NavLinkBadge className="-ml-4">Add-on</NavLinkBadge>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <RadioGroupItem value="default" id="r1" />
                          <span className="">Limited membership</span>
                        </div>
                        <div className="mt-2 ml-6 w-fit">
                          <Input className="w-49" value={5} />
                        </div>
                      </RadioGroup>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch />
                        <span className="font-medium">
                          Enable verified domains
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-1 ml-8 text-xs">
                        Members with the &apos;Manage domains&apos; permission
                        can manage verified domains and enrollment modes
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch checked={true} />
                        <span className="font-medium">
                          Enable organization slugs
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-1 ml-8 text-xs">
                        Allow new organizations to have a unique identifier
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch />
                        <span className="font-medium">
                          Create first organization automatically
                        </span>
                        <SimpleBadge variant="orange">
                          Requires default naming rules
                        </SimpleBadge>
                      </div>
                      <p className="text-muted-foreground mt-1 ml-8 text-xs">
                        Creates an organization during sign-up using default
                        naming rules. Members will not see the naming form
                      </p>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch />
                    <span className="text-base font-medium">
                      Default naming rules
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Configure the naming rules to prefill or apply to the first
                    organization. Members will not see this flow
                  </p>
                </MainSectionHeader>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch checked={true} />
                    <span className="text-base font-medium">
                      Allow user-created organizations
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    When enabled, users can create new organizations
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Organization limit</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Set the maximum number of organizations a user can
                        create, up to instance limit (Unlimited). Contact
                        support to raise this limit.
                      </p>
                      <RadioGroup defaultValue="" className="gap-0">
                        <div className="mt-6 flex items-center gap-2">
                          <RadioGroupItem value="default" id="r1" />
                          <span className="">Unlimited organizations</span>
                        </div>
                        <p className="text-muted-foreground mt-1 ml-6 text-xs">
                          Users can create as many organizations as needed.
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <RadioGroupItem value="default" id="r1" />
                          <span className="">Custom limit</span>
                        </div>
                        <p className="text-muted-foreground mt-1 ml-6 text-xs">
                          Set a lower maximum number of organizations a user can
                          create.
                        </p>
                        <div className="mt-2 ml-6 w-fit">
                          <Input className="w-49" value={1} />
                        </div>
                        <SimpleAlert className="mt-2 ml-6">
                          This setting only applies to new users and does not
                          affect existing users.
                        </SimpleAlert>
                      </RadioGroup>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Default role set</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        The set of roles that are available after an
                        organization is created
                      </p>
                      <div className="mt-2 w-fit">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Default role set" />
                          </SelectTrigger>
                          <SelectContent side="bottom">
                            {['Default role set', 'name'].map((item, i) => (
                              <SelectItem key={i} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch checked={true} />
                        <span className="font-medium">
                          Allow new members to delete organizations
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-1 ml-8 text-xs">
                        When a new organization is created, any member with the
                        &apos;Delete organization&apos; system permission can
                        delete it by default
                      </p>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
              <MainSection danger>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium text-[#e02e2e]">
                      Danger Zone
                    </span>
                  </div>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          Disable organizations
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        <span className="text-[#e02e2e]">Warning:</span> Users
                        will lose access to organizations and related features
                      </p>
                      <div className="mt-4">
                        <Button variant="destructive" className="gap-2">
                          <LuCircleSlash strokeWidth={3} />
                          Disable
                        </Button>
                      </div>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
