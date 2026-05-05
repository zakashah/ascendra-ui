'use client';

import { MainContent } from '@/components/custom/layout/main-content';
import { MainSection } from '@/components/custom/layout/main-section';
import { MainSectionFooter } from '@/components/custom/layout/main-section-footer';
import { MainSectionHeader } from '@/components/custom/layout/main-section-header';
import { MainSectionPanel } from '@/components/custom/layout/main-section-panel';
import { MainSectionPanelItem } from '@/components/custom/layout/main-section-panel-item';
import { PageContent } from '@/components/custom/layout/page-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageWrapper } from '@/components/custom/layout/page-wrapper';
import { Anchor } from '@/components/custom/common-ui/anchor';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';
import { Switch } from '@/components/custom/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/custom/ui/radio-group';
import { InfoIcon } from 'lucide-react';
import { LuArrowRight } from 'react-icons/lu';
import { Input } from '@/components/custom/ui/input';

export default function AttackProtectionPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>Attack Protection</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch checked={true} />
                    <span className="text-base font-medium">
                      Lockout Policy
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Configure how many login attempts are allowed before an
                    account is locked.
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          Maximum attempt limit
                        </span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        Send the user a one-time verification code via SMS
                      </p>
                      <div className="mt-2 w-fit">
                        <Input className="w-35" value={100} type="text" />
                      </div>
                    </div>
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Lockout duration</span>
                      </div>
                      <p className="text-muted-foreground mt-0.5 text-xs">
                        The amount of time a user is locked out from their
                        account after 100 failed attempts. This duration also
                        applies to manual lockouts from the Clerk Dashboard.
                      </p>
                      <RadioGroup defaultValue="" className="gap-0">
                        <div className="mt-3 flex items-start gap-1">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="mt-0.5"
                          />
                          <span className="">Indefinite lockout</span>
                        </div>
                        <p className="text-muted-foreground mt-0.5 ml-6 text-xs">
                          The user will be locked from their account until
                          manually unlocked from the Clerk Dashboard
                        </p>
                        <div className="mt-3 flex items-start gap-1">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="mt-0.5"
                          />
                          <span className="">Time limit</span>
                        </div>
                        <div className="mt-2 ml-6 flex w-fit gap-2">
                          <Input className="w-35" value={1} />
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="day" />
                            </SelectTrigger>
                            <SelectContent side="bottom">
                              {['day', 'hour', 'minute', 'year'].map(
                                (item, i) => (
                                  <SelectItem key={i} value={item}>
                                    {item}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                        </div>
                      </RadioGroup>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <Switch checked={true} />
                    <span className="text-base font-medium">
                      Bot sign-up protection
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    New sign-ups will include a browser verification step
                    powered by <Anchor href="#">Cloudflare Turnstile.</Anchor>{' '}
                    In some cases, users may be asked to check a box to confirm
                    they are human.
                  </p>
                </MainSectionHeader>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      User enumeration protection
                    </span>
                  </div>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div>
                      <RadioGroup defaultValue="" className="gap-0">
                        <div className="mt-3 flex items-start gap-1">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="mt-0.5"
                          />
                          <span className="font-medium">
                            Bulk user enumeration protection
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-0.5 ml-6 text-xs">
                          Less private, more common - rate limits prevent
                          determining which email addresses and phone numbers
                          are registered in bulk, but targeted attacks are still
                          feasible.
                        </p>
                        <div className="mt-3 flex items-start gap-1">
                          <RadioGroupItem
                            value="default"
                            id="r1"
                            className="mt-0.5"
                          />
                          <span className="font-medium">
                            Strict user enumeration protection
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-0.5 ml-6 text-xs">
                          More private - logical changes prevent attackers from
                          determining if even a single email address or phone
                          number has an account.
                        </p>
                      </RadioGroup>
                    </div>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex">
                      <InfoIcon
                        className="mt-0.5 mr-2 size-3 shrink-0"
                        strokeWidth={2.5}
                      />
                      You must require verification on the required identifier.
                    </div>
                    <Anchor
                      href="#"
                      variant="primary"
                      className="text-now text-primary flex items-center gap-1 dark:text-[#846BFF]"
                    >
                      Configure settings
                      <LuArrowRight strokeWidth={2} />
                    </Anchor>
                  </div>
                </MainSectionFooter>
              </MainSection>
            </MainContent>
          </PageContent>
        </PageWrapper>
      </PageMain>
    </>
  );
}
