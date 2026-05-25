"use client";

import { useState } from "react";
import { LuChevronDown, LuCode, LuEye, LuShieldCheck } from "react-icons/lu";

import { AsideContent } from "@/ascendra-ui/components/layout/aside-content";
import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { MainSectionPanelItemCrown } from "@/ascendra-ui/components/layout/main-section-panel-item-crown";
import { MainSectionPanelItemGroup } from "@/ascendra-ui/components/layout/main-section-panel-item-group";
import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderAction } from "@/ascendra-ui/components/layout/page-header-action";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageWrapper } from "@/ascendra-ui/components/layout/page-wrapper";

import { TabContent } from "@/ascendra-ui/components/tabs/tab-content";
import { TabList } from "@/ascendra-ui/components/tabs/tab-list";
import { TabTrigger } from "@/ascendra-ui/components/tabs/tab-trigger";
import { Tabs } from "@/ascendra-ui/components/tabs/tabs";

import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";
import { Button } from "@/ascendra-ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ascendra-ui/components/ui/dropdown-menu";
import { Switch } from "@/ascendra-ui/components/ui/switch";

import { BackLink } from "@/ascendra-ui/components/forms/back-link";
import { MainSectionFooterIcon } from "@/ascendra-ui/components/layout/main-section-footer-icon";
import { cn } from "@/ascendra-ui/shadcn/lib/utils";
import { CodeBlock } from "@/components/code-block";

// ─── Guide primitives ─────────────────────────────────────────────────────────

function GuideSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-3 pb-3">
          <h2 className="text-sm font-semibold whitespace-nowrap">{title}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  );
}

function Variant({
  label,
  note,
  noPad,
  code,
  children,
}: {
  label: string;
  note?: string;
  noPad?: boolean;
  code?: string;
  children: React.ReactNode;
}) {
  const [view, setView] = useState<"preview" | "code">("preview");

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-muted-foreground/70">
          {label}
        </p>
        {note && <p className="text-muted-foreground text-xs mt-0.5">{note}</p>}
      </div>
      <div className="overflow-hidden rounded-xl border">
        {code && (
          <div className="flex items-center gap-0.5 border-b bg-muted/60 px-3 py-1.5">
            {(["preview", "code"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setView(tab)}
                className={cn(
                  "rounded-sm px-2.5 py-1 text-xs font-medium capitalize transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  view === tab
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
        {view === "code" && code ? (
          <CodeBlock
            code={code}
            className="[&>div]:rounded-none [&>div]:border-0"
          />
        ) : (
          <div className={cn(!noPad && "p-6")}>{children}</div>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LayoutGuidePage() {
  const [panelCollapsed, setPanelCollapsed] = useState(true);
  const [asideDimmed, setAsideDimmed] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-8 py-12 flex flex-col gap-14">
      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-1.5">
        <h1 className="text-2xl font-semibold tracking-tight">Layout System</h1>
        <p className="text-muted-foreground text-sm">
          A composition guide showing how Ascendra&apos;s layout components
          assemble into full pages. These patterns are the canonical structure
          for all new pages, including forms.
        </p>
      </div>

      {/* ── 1. Back Link ──────────────────────────────────────────────────── */}
      <GuideSection
        title="Back Link"
        description="Sub-pages that navigate up to a parent use a back link placed above the page header. Use the BackLink component with the parent page's label."
      >
        <Variant
          label="Standard back link"
          code={`import { BackLink } from "@/ascendra-ui/components/forms/back-link";

<BackLink href="/settings">Settings</BackLink>`}
        >
          <BackLink href="#">Settings</BackLink>
        </Variant>
      </GuideSection>

      {/* ── 2. Page Header ────────────────────────────────────────────────── */}
      <GuideSection
        title="Page Header"
        description="PageHeader sits at the top of every page and handles alignment between the title group and any header-level actions. Add flex-nowrap to prevent line-wrapping on constrained screens."
      >
        <Variant
          label="Title only"
          code={`import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";

<PageHeader>
  <PageTitle>API Keys</PageTitle>
</PageHeader>`}
        >
          <PageHeader>
            <PageTitle>API Keys</PageTitle>
          </PageHeader>
        </Variant>

        <Variant
          label="Title + description"
          code={`import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";

<PageHeader>
  <PageHeaderGroup>
    <PageTitle>Settings</PageTitle>
    <PageSubtitle>
      Manage your account preferences and security settings
    </PageSubtitle>
  </PageHeaderGroup>
</PageHeader>`}
        >
          <PageHeader>
            <PageHeaderGroup>
              <PageTitle>Settings</PageTitle>
              <PageSubtitle>
                Manage your account preferences and security settings
              </PageSubtitle>
            </PageHeaderGroup>
          </PageHeader>
        </Variant>

        <Variant
          label="Title + action"
          code={`import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageHeaderAction } from "@/ascendra-ui/components/layout/page-header-action";
import { Button } from "@/ascendra-ui/components/ui/button";

<PageHeader>
  <PageTitle>Team Members</PageTitle>
  <PageHeaderAction>
    <Button>Invite member</Button>
  </PageHeaderAction>
</PageHeader>`}
        >
          <PageHeader>
            <PageTitle>Team Members</PageTitle>
            <PageHeaderAction>
              <Button>Invite member</Button>
            </PageHeaderAction>
          </PageHeader>
        </Variant>

        <Variant
          label="Title + description + action"
          code={`import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageHeaderAction } from "@/ascendra-ui/components/layout/page-header-action";
import { Button } from "@/ascendra-ui/components/ui/button";

<PageHeader>
  <PageHeaderGroup>
    <PageTitle>Connections</PageTitle>
    <PageSubtitle>
      Manage integrations connected to your workspace
    </PageSubtitle>
  </PageHeaderGroup>
  <PageHeaderAction>
    <Button>Add connection</Button>
  </PageHeaderAction>
</PageHeader>`}
        >
          <PageHeader>
            <PageHeaderGroup>
              <PageTitle>Connections</PageTitle>
              <PageSubtitle>
                Manage integrations connected to your workspace
              </PageSubtitle>
            </PageHeaderGroup>
            <PageHeaderAction>
              <Button>Add connection</Button>
            </PageHeaderAction>
          </PageHeader>
        </Variant>

        <Variant
          label="Title + description + dropdown action"
          code={`import { LuChevronDown, LuEye, LuCode } from "react-icons/lu";
import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageHeaderAction } from "@/ascendra-ui/components/layout/page-header-action";
import { Button } from "@/ascendra-ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ascendra-ui/components/ui/dropdown-menu";

<PageHeader>
  <PageHeaderGroup>
    <PageTitle>Authentication</PageTitle>
    <PageSubtitle>Configure sign-in methods for your users</PageSubtitle>
  </PageHeaderGroup>
  <PageHeaderAction>
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="group">
        <Button variant="secondary">
          Preview
          <LuChevronDown className="text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8} align="end">
        <DropdownMenuItem>
          <LuEye /> Preview sign-up flow
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LuCode /> Sample user object
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </PageHeaderAction>
</PageHeader>`}
        >
          <PageHeader>
            <PageHeaderGroup>
              <PageTitle>Authentication</PageTitle>
              <PageSubtitle>
                Configure sign-in methods for your users
              </PageSubtitle>
            </PageHeaderGroup>
            <PageHeaderAction>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="group">
                  <Button variant="secondary">
                    Preview
                    <LuChevronDown className="text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  sideOffset={8}
                  align="end"
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  <DropdownMenuItem>
                    <LuEye /> Preview sign-up flow
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LuCode /> Sample user object
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </PageHeaderAction>
          </PageHeader>
        </Variant>
      </GuideSection>

      {/* ── 3. Page Structure ─────────────────────────────────────────────── */}
      <GuideSection
        title="Page Structure"
        description="The standard full-page composition tree: (BackLink) → PageHeader → PageMain → PageWrapper → PageContent body → MainContent → sections. PageWrapper renders the horizontal rule that separates the header from the content area. For tabbed pages, replace PageWrapper with Tabs — the TabList provides the divider."
      >
        <Variant
          label="Standard — back link + header + sections"
          noPad
          code={`import { BackLink } from "@/ascendra-ui/components/forms/back-link";
import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";
import { PageWrapper } from "@/ascendra-ui/components/layout/page-wrapper";
import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";

export default function Page() {
  return (
    <div>
      <BackLink href="/overview">Overview</BackLink>
      <div className="mt-4">
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>Team Settings</PageTitle>
            <PageSubtitle>
              Configure preferences and access for your team
            </PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>
      </div>
      <PageMain>
        <PageWrapper>
          <div className="mt-8 px-6 pb-6 flex flex-col gap-6">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <MainSectionHeaderTitle>General</MainSectionHeaderTitle>
                  <MainSectionHeaderSubtitle>
                    Basic team information
                  </MainSectionHeaderSubtitle>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    {/* Fields go here */}
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
          </div>
        </PageWrapper>
      </PageMain>
    </div>
  );
}`}
        >
          <div className="px-6 pt-6 pb-0">
            <BackLink href="#">Overview</BackLink>
            <div className="mt-4">
              <PageHeader>
                <PageHeaderGroup>
                  <PageTitle>Team Settings</PageTitle>
                  <PageSubtitle>
                    Configure preferences and access for your team
                  </PageSubtitle>
                </PageHeaderGroup>
              </PageHeader>
            </div>
          </div>
          <PageMain>
            <PageWrapper>
              <div className="mt-8 px-6 pb-6 flex flex-col gap-6">
                <MainContent>
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>General</MainSectionHeaderTitle>
                      <MainSectionHeaderSubtitle>
                        Basic team information
                      </MainSectionHeaderSubtitle>
                    </MainSectionHeader>
                    <MainSectionPanel>
                      <MainSectionPanelItem>
                        <p className="text-sm text-muted-foreground">
                          Panel items go here
                        </p>
                      </MainSectionPanelItem>
                    </MainSectionPanel>
                  </MainSection>
                </MainContent>
              </div>
            </PageWrapper>
          </PageMain>
        </Variant>

        <Variant
          label="With tabs — header + tab bar + per-tab content"
          note="TabContent carries the same mt-8 spacing as PageContent, so PageContent is not needed inside each tab."
          noPad
          code={`import { PageHeader } from "@/ascendra-ui/components/layout/page-header";
import { PageHeaderGroup } from "@/ascendra-ui/components/layout/page-header-group";
import { PageTitle } from "@/ascendra-ui/components/layout/page-title";
import { PageSubtitle } from "@/ascendra-ui/components/layout/page-subtitle";
import { PageMain } from "@/ascendra-ui/components/layout/page-main";
import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { Tabs } from "@/ascendra-ui/components/tabs/tabs";
import { TabList } from "@/ascendra-ui/components/tabs/tab-list";
import { TabTrigger } from "@/ascendra-ui/components/tabs/tab-trigger";
import { TabContent } from "@/ascendra-ui/components/tabs/tab-content";

export default function Page() {
  return (
    <div>
      <div className="px-6 pt-6 pb-0">
        <PageHeader>
          <PageHeaderGroup>
            <PageTitle>User Profile</PageTitle>
            <PageSubtitle>
              Manage your personal information and preferences
            </PageSubtitle>
          </PageHeaderGroup>
        </PageHeader>
      </div>
      <PageMain className="p-6">
        <Tabs defaultValue="general">
          <TabList>
            <TabTrigger value="general">General</TabTrigger>
            <TabTrigger value="security">Security</TabTrigger>
            <TabTrigger value="notifications" dirty>
              Notifications
            </TabTrigger>
          </TabList>
          <TabContent value="general">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <MainSectionHeaderTitle>
                    Personal details
                  </MainSectionHeaderTitle>
                </MainSectionHeader>
              </MainSection>
            </MainContent>
          </TabContent>
        </Tabs>
      </PageMain>
    </div>
  );
}`}
        >
          <div className="px-6 pt-6 pb-0">
            <PageHeader>
              <PageHeaderGroup>
                <PageTitle>User Profile</PageTitle>
                <PageSubtitle>
                  Manage your personal information and preferences
                </PageSubtitle>
              </PageHeaderGroup>
            </PageHeader>
          </div>
          <PageMain className="p-6">
            <Tabs defaultValue="general">
              <TabList>
                <TabTrigger value="general">General</TabTrigger>
                <TabTrigger value="security">Security</TabTrigger>
                <TabTrigger value="notifications" dirty>
                  Notifications
                </TabTrigger>
              </TabList>
              <TabContent value="general">
                <MainContent>
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Personal details
                      </MainSectionHeaderTitle>
                    </MainSectionHeader>
                    <MainSectionPanel>
                      <MainSectionPanelItem>
                        <p className="text-sm text-muted-foreground">
                          Fields here
                        </p>
                      </MainSectionPanelItem>
                    </MainSectionPanel>
                  </MainSection>
                </MainContent>
              </TabContent>
              <TabContent value="security">
                <MainContent>
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Password &amp; 2FA
                      </MainSectionHeaderTitle>
                    </MainSectionHeader>
                  </MainSection>
                </MainContent>
              </TabContent>
              <TabContent value="notifications">
                <MainContent>
                  <MainSection>
                    <MainSectionHeader>
                      <MainSectionHeaderTitle>
                        Notification preferences
                      </MainSectionHeaderTitle>
                    </MainSectionHeader>
                  </MainSection>
                </MainContent>
              </TabContent>
            </Tabs>
          </PageMain>
        </Variant>
      </GuideSection>

      {/* ── 4. Content Sections ───────────────────────────────────────────── */}
      <GuideSection
        title="Content Sections"
        description="MainSection is the primary content container — a muted rounded card that groups related settings. Stack multiple sections inside MainContent. Use MainSectionFooter for inline notes, and SimpleAlert above the section stack for page-level notices."
      >
        <Variant
          label="Header only"
          code={`import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";

<MainSection>
  <MainSectionHeader>
    <MainSectionHeaderTitle>Section title</MainSectionHeaderTitle>
    <MainSectionHeaderSubtitle>
      Optional subtitle that describes the section purpose
    </MainSectionHeaderSubtitle>
  </MainSectionHeader>
</MainSection>`}
        >
          <MainSection>
            <MainSectionHeader>
              <MainSectionHeaderTitle>Section title</MainSectionHeaderTitle>
              <MainSectionHeaderSubtitle>
                Optional subtitle that describes the section purpose
              </MainSectionHeaderSubtitle>
            </MainSectionHeader>
          </MainSection>
        </Variant>

        <Variant
          label="Header + footer"
          code={`import { LuInfo } from "react-icons/lu";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";

<MainSection>
  <MainSectionHeader>
    <MainSectionHeaderTitle>Email authentication</MainSectionHeaderTitle>
    <MainSectionHeaderSubtitle>
      Allow users to sign in with their email address
    </MainSectionHeaderSubtitle>
  </MainSectionHeader>
  <MainSectionFooter>
    <MainSectionFooterIcon />
    Footer text for additional context, caveats, or related links.
  </MainSectionFooter>
</MainSection>`}
        >
          <MainSection>
            <MainSectionHeader>
              <MainSectionHeaderTitle>
                Email authentication
              </MainSectionHeaderTitle>
              <MainSectionHeaderSubtitle>
                Allow users to sign in with their email address
              </MainSectionHeaderSubtitle>
            </MainSectionHeader>
            <MainSectionFooter>
              <MainSectionFooterIcon />
              Footer text for additional context, caveats, or related links.
            </MainSectionFooter>
          </MainSection>
        </Variant>

        <Variant
          label="Alert above sections"
          note="SimpleAlert goes inside MainContent, above the section stack — not inside a MainSection."
          code={`import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";
import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";

<MainContent>
  <SimpleAlert>
    You are viewing a read-only snapshot. Contact your admin to make changes.
  </SimpleAlert>
  <MainSection>
    <MainSectionHeader>
      <MainSectionHeaderTitle>Permissions</MainSectionHeaderTitle>
    </MainSectionHeader>
  </MainSection>
</MainContent>`}
        >
          <div className="flex flex-col gap-6">
            <SimpleAlert>
              You are viewing a read-only snapshot. Contact your admin to make
              changes.
            </SimpleAlert>
            <MainSection>
              <MainSectionHeader>
                <MainSectionHeaderTitle>Permissions</MainSectionHeaderTitle>
              </MainSectionHeader>
            </MainSection>
          </div>
        </Variant>

        <Variant
          label="Multiple sections (stacked)"
          code={`import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";

<MainContent>
  <MainSection>
    <MainSectionHeader>
      <MainSectionHeaderTitle>Account details</MainSectionHeaderTitle>
    </MainSectionHeader>
  </MainSection>
  <MainSection>
    <MainSectionHeader>
      <MainSectionHeaderTitle>Billing</MainSectionHeaderTitle>
    </MainSectionHeader>
  </MainSection>
  <MainSection danger>
    <MainSectionHeader>
      <MainSectionHeaderTitle>Danger zone</MainSectionHeaderTitle>
      <MainSectionHeaderSubtitle>
        Irreversible actions — proceed with care
      </MainSectionHeaderSubtitle>
    </MainSectionHeader>
  </MainSection>
</MainContent>`}
        >
          <div className="flex flex-col gap-6">
            <MainSection>
              <MainSectionHeader>
                <MainSectionHeaderTitle>Account details</MainSectionHeaderTitle>
              </MainSectionHeader>
            </MainSection>
            <MainSection>
              <MainSectionHeader>
                <MainSectionHeaderTitle>Billing</MainSectionHeaderTitle>
              </MainSectionHeader>
            </MainSection>
            <MainSection danger>
              <MainSectionHeader>
                <MainSectionHeaderTitle>Danger zone</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  Irreversible actions — proceed with care
                </MainSectionHeaderSubtitle>
              </MainSectionHeader>
            </MainSection>
          </div>
        </Variant>
      </GuideSection>

      {/* ── 5. Section Panels ─────────────────────────────────────────────── */}
      <GuideSection
        title="Section Panels"
        description="MainSectionPanel renders the white card that lives inside a section. MainSectionPanelItem is each row within that card, separated by a top border (the first item has no border). Use MainSectionPanelItemGroup to manage vertical spacing between elements within an item. Panels can animate to zero height when collapsed."
      >
        <Variant
          label="Single panel item"
          code={`import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";

<MainSection>
  <MainSectionHeader>
    <MainSectionHeaderTitle>Account deletion</MainSectionHeaderTitle>
  </MainSectionHeader>
  <MainSectionPanel>
    <MainSectionPanelItem>
      Allow users to delete their accounts from the profile page
    </MainSectionPanelItem>
  </MainSectionPanel>
</MainSection>`}
        >
          <MainSection>
            <MainSectionHeader>
              <MainSectionHeaderTitle>Account deletion</MainSectionHeaderTitle>
            </MainSectionHeader>
            <MainSectionPanel>
              <MainSectionPanelItem>
                Allow users to delete their accounts from the profile page
              </MainSectionPanelItem>
            </MainSectionPanel>
          </MainSection>
        </Variant>

        <Variant
          label="Multiple panel items"
          code={`import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { Button } from "@/ascendra-ui/components/ui/button";

<MainSection>
  <MainSectionHeader>
    <MainSectionHeaderTitle>Password policy</MainSectionHeaderTitle>
  </MainSectionHeader>
  <MainSectionPanel>
    <MainSectionPanelItem>
      Require a minimum of 8 characters
    </MainSectionPanelItem>
    <MainSectionPanelItem className="relative">
      <MainSectionPanelItemCrown variant={"default"}>
        Authenticator application must be enabled to generate backup codes
      </MainSectionPanelItemCrown>
      Reject known compromised passwords
    </MainSectionPanelItem>
    <MainSectionPanelItem>
      <Button variant="secondary">Apply to existing users</Button>
    </MainSectionPanelItem>
  </MainSectionPanel>
</MainSection>`}
        >
          <MainSection>
            <MainSectionHeader>
              <MainSectionHeaderTitle>Password policy</MainSectionHeaderTitle>
            </MainSectionHeader>
            <MainSectionPanel>
              <MainSectionPanelItem>
                Require a minimum of 8 characters
              </MainSectionPanelItem>
              <MainSectionPanelItem className="relative">
                <MainSectionPanelItemCrown variant={"default"}>
                  Authenticator application must be enabled to generate backup
                  codes
                </MainSectionPanelItemCrown>
                Reject known compromised passwords
              </MainSectionPanelItem>
              <MainSectionPanelItem>
                <Button variant="secondary">Apply to existing users</Button>
              </MainSectionPanelItem>
            </MainSectionPanel>
          </MainSection>
        </Variant>

        <Variant
          label="PanelItemGroup"
          note="Wraps multiple elements inside a single panel item and adds consistent vertical spacing between them."
          code={`import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { MainSectionPanelItemGroup } from "@/ascendra-ui/components/layout/main-section-panel-item-group";

<MainSection>
  <MainSectionHeader>
    <MainSectionHeaderTitle>Sign-up restrictions</MainSectionHeaderTitle>
  </MainSectionHeader>
  <MainSectionPanel>
    <MainSectionPanelItem>
      <MainSectionPanelItemGroup>
        <p className="text-sm">
          Restrict sign-up to specific email domains
        </p>
        <SimpleAlert>
          Existing users outside the allowed domains retain their access.
        </SimpleAlert>
      </MainSectionPanelItemGroup>
    </MainSectionPanelItem>
  </MainSectionPanel>
</MainSection>`}
        >
          <MainSection>
            <MainSectionHeader>
              <MainSectionHeaderTitle>
                Sign-up restrictions
              </MainSectionHeaderTitle>
            </MainSectionHeader>
            <MainSectionPanel>
              <MainSectionPanelItem>
                <MainSectionPanelItemGroup>
                  <p className="text-sm">
                    Restrict sign-up to specific email domains
                  </p>
                  <SimpleAlert>
                    Existing users outside the allowed domains retain their
                    access.
                  </SimpleAlert>
                </MainSectionPanelItemGroup>
              </MainSectionPanelItem>
            </MainSectionPanel>
          </MainSection>
        </Variant>

        <Variant
          label="Collapsible panel"
          note="Pair a Switch in the section header with the collapsed prop on MainSectionPanel. The footer border hides automatically when the panel is open."
          code={`"use client";
import { useState } from "react";
import { LuShieldCheck } from "react-icons/lu";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import { Switch } from "@/ascendra-ui/components/ui/switch";

export function CollapsibleSection() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <MainSection>
      <MainSectionHeader>
        <div className="flex items-center gap-2">
          <Switch
            checked={!collapsed}
            onClick={() => setCollapsed((prev) => !prev)}
          />
          <MainSectionHeaderTitle>Email sign-up</MainSectionHeaderTitle>
        </div>
        <MainSectionHeaderSubtitle className="ml-8">
          Allow users to register with an email address and password
        </MainSectionHeaderSubtitle>
      </MainSectionHeader>
      <MainSectionPanel collapsed={collapsed}>
        <MainSectionPanelItem>
          Minimum password length: 8 characters
        </MainSectionPanelItem>
        <MainSectionPanelItem>
          Reject known compromised passwords
        </MainSectionPanelItem>
      </MainSectionPanel>
      <MainSectionFooter>
        <MainSectionFooterIcon icon={LuShieldCheck} />
        These settings apply to new sign-ups only.
      </MainSectionFooter>
    </MainSection>
  );
}`}
        >
          <MainSection>
            <MainSectionHeader>
              <div className="flex items-center gap-2">
                <Switch
                  checked={!panelCollapsed}
                  onClick={() => setPanelCollapsed((prev) => !prev)}
                />
                <MainSectionHeaderTitle>Email sign-up</MainSectionHeaderTitle>
              </div>
              <MainSectionHeaderSubtitle className="ml-8">
                Allow users to register with an email address and password
              </MainSectionHeaderSubtitle>
            </MainSectionHeader>
            <MainSectionPanel collapsed={panelCollapsed}>
              <MainSectionPanelItem>
                Minimum password length: 8 characters
              </MainSectionPanelItem>
              <MainSectionPanelItem>
                Reject known compromised passwords
              </MainSectionPanelItem>
            </MainSectionPanel>
            <MainSectionFooter>
              <MainSectionFooterIcon icon={LuShieldCheck} />
              These settings apply to new sign-ups only.
            </MainSectionFooter>
          </MainSection>
        </Variant>
      </GuideSection>

      {/* ── 6. Two-column layout ──────────────────────────────────────────── */}
      <GuideSection
        title="Two-column layout"
        description="Place AsideContent after MainContent to create a sticky contextual sidebar. On small screens both columns stack. The dimmed prop fades the aside and makes it inert — useful when sidebar content reflects state from a disabled section above."
      >
        <Variant
          label="MainContent + AsideContent"
          noPad
          code={`import { MainContent } from "@/ascendra-ui/components/layout/main-content";
import { AsideContent } from "@/ascendra-ui/components/layout/aside-content";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionPanelItem } from "@/ascendra-ui/components/layout/main-section-panel-item";

<div className="flex flex-col items-start gap-8 sm:flex-row">
  <MainContent>
    <MainSection>
      <MainSectionHeader>
        <MainSectionHeaderTitle>Password sign-in</MainSectionHeaderTitle>
        <MainSectionHeaderSubtitle>
          Require users to authenticate with a password
        </MainSectionHeaderSubtitle>
      </MainSectionHeader>
      <MainSectionPanel>
        <MainSectionPanelItem>
          Minimum password length: 8 characters
        </MainSectionPanelItem>
        <MainSectionPanelItem>
          Reject known compromised passwords
        </MainSectionPanelItem>
      </MainSectionPanel>
    </MainSection>
  </MainContent>
  <AsideContent dimmed={dimmed}>
    {/* Sidebar content */}
  </AsideContent>
</div>`}
        >
          <div className="flex items-center justify-end gap-2 border-b px-4 py-3">
            <span className="text-xs text-muted-foreground">Dimmed aside</span>
            <Switch
              checked={asideDimmed}
              onClick={() => setAsideDimmed((prev) => !prev)}
            />
          </div>
          <div className="flex flex-col items-start gap-8 p-6 sm:flex-row">
            <MainContent>
              <MainSection>
                <MainSectionHeader>
                  <MainSectionHeaderTitle>
                    Password sign-in
                  </MainSectionHeaderTitle>
                  <MainSectionHeaderSubtitle>
                    Require users to authenticate with a password
                  </MainSectionHeaderSubtitle>
                </MainSectionHeader>
                <MainSectionPanel>
                  <MainSectionPanelItem>
                    Minimum password length: 8 characters
                  </MainSectionPanelItem>
                  <MainSectionPanelItem>
                    Reject known compromised passwords
                  </MainSectionPanelItem>
                </MainSectionPanel>
              </MainSection>
            </MainContent>
            <AsideContent dimmed={asideDimmed}>
              <div className="flex min-w-48 flex-col gap-3 text-sm">
                <div className="border-border border-b pb-3">
                  <p className="text-xs text-muted-foreground mb-0.5">
                    Min. password length
                  </p>
                  <p>8 characters</p>
                </div>
                <div className="border-border border-b pb-3">
                  <p className="text-xs text-muted-foreground mb-0.5">
                    Compromised passwords
                  </p>
                  <p>Rejected</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">
                    Password rules
                  </p>
                  <p>None</p>
                </div>
              </div>
            </AsideContent>
          </div>
        </Variant>
      </GuideSection>
    </div>
  );
}
