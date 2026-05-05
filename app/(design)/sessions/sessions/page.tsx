'use client';

import { ProBadge } from '@/components/custom/common-ui/pro-badge';
import { SimpleAlert } from '@/components/custom/common-ui/simple-alert';
import { Input } from '@/components/custom/ui/input';
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
import { Switch } from '@/components/custom/ui/switch';
import Image from 'next/image';
import {
  LuArrowRight,
  LuBookOpen,
  LuEye,
} from 'react-icons/lu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { SimpleBadge } from '@/components/custom/common-ui/simple-badge';
import { Checkbox } from '@/components/custom/ui/checkbox';
import { MdCode } from 'react-icons/md';
import { CopyText } from '@/components/custom/util/copy-text';
import { Button } from '@/components/custom/ui/button';

const userFields = [
  'user.id',
  'user.external_id',
  'user.first_name',
  'user.last_name',
  'user.full_name',
  'user.username',
  'user.created_at',
  'user.updated_at',
  'user.last_sign_in_at',
  'user.primary_email_address',
  'user.primary_phone_number',
  'user.primary_web3_wallet',
  'user.email_verified',
  'user.phone_number_verified',
  'user.image_url',
  'user.has_image',
  'user.two_factor_enabled',
  'user.organizations',
  'user.public_metadata',
  'user.unsafe_metadata',
];

const sessionFields = ['session.actor', 'source.platform'];

const orgFields = [
  'org.id',
  'org.role',
  'org.name',
  'org.slug',
  'org.public_metadata',
  'org_membership.permissions',
  'org_membership.public_metadata',
  'org.image_url',
  'org.has_image',
];

const tokenFields = [
  'azp',
  'exp',
  'fva',
  'iat',
  'iss',
  'nbf',
  'sid',
  'sub',
  'v',
  'fea',
];

export default function SessionsPage() {
  return (
    <>
      <PageHeader>
        <PageTitle>Sessions</PageTitle>
      </PageHeader>
      <PageMain>
        <PageWrapper>
          <PageContent>
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Session lifetime
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Set session duration limits for the long lived cookie by
                    configuring the inactivity timeout or the maximum lifetime.{' '}
                    <Anchor href="#">Learn more</Anchor>
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <SimpleAlert variant="secondary" className="mb-6">
                      <div>
                        You should be aware of{' '}
                        <Anchor href="#">browser limitations</Anchor> that may
                        cause users to be signed out before the configured
                        maximum lifetime, even when this feature is disabled.
                      </div>
                    </SimpleAlert>
                    <div>
                      <div className="flex items-center gap-2">
                        <Switch checked={true} disabled />
                        <span className="font-medium">Maximum lifetime</span>
                        <ProBadge>Pro</ProBadge>
                      </div>
                      <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                        Set the maximum lifetime duration for a session
                      </p>
                      <div className="mt-4 ml-8 flex w-fit items-center gap-2">
                        <Input className="w-35" value={1} />
                        <div>days</div>
                      </div>
                      <p className="text-muted-foreground mt-2 ml-8 text-xs">
                        Set duration between 5 minutes and 10 years
                      </p>
                    </div>
                    <div>
                      <div className="mt-6 flex items-center gap-2">
                        <Switch />
                        <span className="font-medium">Inactivity timeout</span>
                        <ProBadge>Pro</ProBadge>
                      </div>
                      <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                        Set the inactivity timeout for a session
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
                      Multi-session handling
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 ml-8 text-xs">
                    Allow users to be signed into more than one account at a
                    time. Users may switch the active account by opening the
                    User Button and selecting the desired account.{' '}
                    <Anchor href="#">Learn more</Anchor>
                  </p>
                </MainSectionHeader>
              </MainSection>
              <MainSection>
                <MainSectionHeader>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Customize session token
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-0.5 text-xs">
                    Augment your session tokens by adding custom claims.{' '}
                    <Anchor href="#">Learn more</Anchor>
                  </p>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-[7fr_5fr]">
                      <div>
                        <div className="text-bold mb-2">Name</div>
                        <Input
                          disabled
                          full
                          placeholder="https://example.com/terms-of-service"
                          className="w-full! bg-transparent opacity-100"
                        />
                        <MainSection className="mt-6">
                          <MainSectionHeader>
                            <div className="flex items-center gap-2">
                              <MdCode className="text-base" />
                              <span className="text-base font-medium">
                                Claims
                              </span>
                              <CopyText
                                value=""
                                opaque
                                className="ml-auto"
                                showTooltip
                                onClick={async () => {
                                  // await sleep(1800);
                                  return 'string';
                                }}
                              />
                            </div>
                          </MainSectionHeader>
                          <MainSectionPanel>
                            <MainSectionPanelItem>
                              <code>
                                1<br />2<br />3<br />4<br />5<br />6<br />7
                                <br />8<br />9<br />
                                10
                              </code>
                            </MainSectionPanelItem>
                          </MainSectionPanel>
                          <div className="ml-auto px-4 pt-4 pb-2">
                            <Button variant="secondary" className="ml-auto">
                              Preview user
                              <LuEye />
                            </Button>
                          </div>
                        </MainSection>
                      </div>
                      <div>
                        <div className="mb-2 font-medium">Managed Claim</div>
                        <div className="flex flex-col gap-2">
                          <div className="border-border flex items-center justify-between rounded-md border bg-[#f9f9f9] px-4 py-2 dark:bg-gray-100">
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/sessions/supabase.svg"
                                alt=""
                                className="size-4"
                                width={4}
                                height={4}
                              />
                              <span>Supabase</span>
                            </div>
                            <div className="text-xs">
                              <Anchor variant="muted" href="">
                                Manage integration
                              </Anchor>
                            </div>
                          </div>
                          <div className="border-border flex items-center justify-between rounded-md border bg-[#f9f9f9] px-4 py-2 dark:bg-gray-100">
                            <div className="flex items-center gap-1">
                              <Image
                                src="/images/sessions/convex.svg"
                                alt=""
                                className="size-4"
                                width={4}
                                height={4}
                              />
                              <span>Convex</span>
                            </div>
                            <div className="text-xs">
                              <Anchor variant="muted" href="">
                                Manage integration
                              </Anchor>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 mb-2 font-medium">
                          Insert shortcodes
                        </div>
                        <Accordion
                          type="single"
                          collapsible
                          defaultValue="1"
                          className="space-y-2"
                        >
                          <AccordionItem
                            value="1"
                            className="bg-muted border-border overflow-hidden rounded-md border"
                          >
                            <AccordionTrigger className="cursor-pointer px-4 py-3 font-medium hover:no-underline">
                              <div>User</div>
                            </AccordionTrigger>
                            <AccordionContent className="border-border flex h-full border-t px-4 py-3">
                              <div className="flex flex-wrap gap-2">
                                {userFields.map((item) => (
                                  <Link
                                    href="#"
                                    key={item}
                                    className="focus-visible:outline-primary rounded-sm focus-visible:outline-2"
                                  >
                                    <SimpleBadge variant="blue">
                                      {item}
                                    </SimpleBadge>
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem
                            value="2"
                            className="bg-muted border-border overflow-hidden rounded-md border font-medium"
                          >
                            <AccordionTrigger className="cursor-pointer px-4 py-3 hover:no-underline">
                              <div>Other</div>
                            </AccordionTrigger>
                            <AccordionContent className="border-border flex h-full border-t px-4 py-3">
                              <div className="flex flex-wrap gap-2">
                                {sessionFields.map((item) => (
                                  <Link
                                    href="#"
                                    key={item}
                                    className="focus-visible:outline-primary rounded-sm focus-visible:outline-2"
                                  >
                                    <SimpleBadge variant="blue">
                                      {item}
                                    </SimpleBadge>
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem
                            value="3"
                            className="bg-muted border-border overflow-hidden rounded-md border font-medium"
                          >
                            <AccordionTrigger className="cursor-pointer px-4 py-3 hover:no-underline">
                              <div>Organization</div>
                            </AccordionTrigger>
                            <AccordionContent className="border-border flex h-full border-t px-4 py-3">
                              <div className="flex flex-wrap gap-2">
                                {orgFields.map((item) => (
                                  <Link
                                    href="#"
                                    key={item}
                                    className="focus-visible:outline-primary rounded-sm focus-visible:outline-2"
                                  >
                                    <SimpleBadge variant="blue">
                                      {item}
                                    </SimpleBadge>
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem
                            value="4"
                            className="bg-muted border-border overflow-hidden rounded-md border font-medium"
                          >
                            <AccordionTrigger className="cursor-pointer px-4 py-3 hover:no-underline">
                              <div>Default Claims</div>
                            </AccordionTrigger>
                            <AccordionContent className="border-border flex h-full flex-col border-t px-4 py-3">
                              <div className="flex flex-wrap gap-2">
                                {tokenFields.map((item) => (
                                  <Link
                                    href="#"
                                    key={item}
                                    className="focus-visible:outline-primary rounded-sm focus-visible:outline-2"
                                  >
                                    <SimpleBadge variant="secondary">
                                      {item}
                                    </SimpleBadge>
                                  </Link>
                                ))}
                              </div>
                              <div className="mt-2 flex items-center gap-2">
                                <Checkbox />
                                <span className="mt-1 font-medium">
                                  Show default claims example
                                </span>
                                <Anchor
                                  href="#"
                                  className="ml-auto text-xs no-underline!"
                                >
                                  Learn more
                                </Anchor>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                    <SimpleAlert>
                      <div>
                        Clerk automatically includes standard claims in your
                        session tokens for common use cases and third-party
                        compatibility.
                      </div>
                      <Anchor href="#" className="ml-auto">
                        Learn more
                      </Anchor>
                    </SimpleAlert>
                  </MainSectionPanelItem>
                </MainSectionPanel>
                <MainSectionFooter>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex">
                      <LuBookOpen className="mr-2 text-sm" />
                      Not sure how template syntax works? Learn how it helps you
                      customize your JWTs.
                    </div>
                    <Anchor
                      href="#"
                      variant="muted"
                      className="flex items-center gap-1"
                    >
                      Learn more
                      <LuArrowRight />
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
