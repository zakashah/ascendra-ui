"use client";

import { useState } from "react";
import { ComponentPreview } from "../component-preview";
import { SectionHeader } from "../section-header";
import { PropsTable } from "../props-table";
import { Button, Card, CardFooter, CardFooterIcon, CardHeader, CardHeaderSubtitle, CardHeaderTitle, CardPanel, CardPanelField, CardPanelItem, CardPanelItemCrown, CardPanelItemGroup, Input, SimpleBadge } from "@/ascendra-ui";
import { InfoIcon, TriangleAlertIcon } from "lucide-react";

// ─── Reusable sample content ──────────────────────────────────────────────────

function SampleItems() {
  return (
    <>
      <CardPanelItem>
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground">School Name</span>
          <span className="text-sm text-muted-foreground">Beacon Academy</span>
        </div>
      </CardPanelItem>
      <CardPanelItem>
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground">Contact Email</span>
          <span className="text-sm text-muted-foreground">
            admin@beacon.edu.pk
          </span>
        </div>
      </CardPanelItem>
      <CardPanelItem>
        <div className="flex items-center justify-between">
          <span className="text-sm text-foreground">Phone</span>
          <span className="text-sm text-muted-foreground">+92 300 0000000</span>
        </div>
      </CardPanelItem>
    </>
  );
}

// ─── Doc Content ─────────────────────────────────────────────────────────────

export function CardDocContent() {
  const [itemCollapsed, setItemCollapsed] = useState(false);
  const [fieldCollapsed, setFieldCollapsed] = useState(false);
  const [nudgeKey, setNudgeKey] = useState(0);

  return (
    <div className="space-y-10">
      {/* ── Hero ── */}
      <ComponentPreview
        align="start"
        code={`import { Card, CardHeader, CardHeaderTitle, CardHeaderSubtitle, CardPanel, CardFooter } from "@/ascendra-ui";

<Card>
  <CardHeader>
    <CardHeaderTitle>School Information</CardHeaderTitle>
    <CardHeaderSubtitle>Your school details visible to parents.</CardHeaderSubtitle>
  </CardHeader>
  <CardPanel>
    <CardPanelItem>...</CardPanelItem>
    <CardPanelItem>...</CardPanelItem>
  </CardPanel>
  <CardFooter>
    <Button size="sm" variant="secondary">Edit</Button>
  </CardFooter>
</Card>`}
      >
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardHeaderTitle>School Information</CardHeaderTitle>
              <CardHeaderSubtitle>
                Your school details visible to parents.
              </CardHeaderSubtitle>
            </CardHeader>
            <CardPanel>
              <SampleItems />
            </CardPanel>
            <CardFooter>
              <Button size="sm" variant="secondary">
                Edit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ComponentPreview>

      {/* ── Examples ── */}
      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        {/* Collapseable */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            Collapseable Panel
          </h3>
          <p className="text-xs text-muted-foreground">
            Pass{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              collapseable=&quot;expanded&quot;
            </code>{" "}
            or{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              collapseable=&quot;collapsed&quot;
            </code>{" "}
            to{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              Card
            </code>
            . A maximize/minimize toggle appears in{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardHeader
            </code>{" "}
            automatically.
          </p>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Initially expanded
            </p>
            <ComponentPreview
              align="start"
              code={`<Card collapseable="expanded">
  <CardHeader>
    <CardHeaderTitle>Notifications</CardHeaderTitle>
    <CardHeaderSubtitle>Manage your alert preferences.</CardHeaderSubtitle>
  </CardHeader>
  <CardPanel>
    <CardPanelItem>...</CardPanelItem>
  </CardPanel>
  <CardFooter>...</CardFooter>
</Card>`}
            >
              <div className="w-full">
                <Card collapseable="expanded">
                  <CardHeader>
                    <CardHeaderTitle>Notifications</CardHeaderTitle>
                    <CardHeaderSubtitle>
                      Manage your alert preferences.
                    </CardHeaderSubtitle>
                  </CardHeader>
                  <CardPanel>
                    <SampleItems />
                  </CardPanel>
                  <CardFooter>
                    <CardFooterIcon icon={InfoIcon} />
                    Click the icon in the header to collapse.
                  </CardFooter>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Initially collapsed
            </p>
            <ComponentPreview
              align="start"
              code={`<Card collapseable="collapsed">
  <CardHeader>
    <CardHeaderTitle>Security Settings</CardHeaderTitle>
    <CardHeaderSubtitle>Configure 2FA and login alerts.</CardHeaderSubtitle>
  </CardHeader>
  <CardPanel>
    <CardPanelItem>...</CardPanelItem>
  </CardPanel>
</Card>`}
            >
              <div className="w-full">
                <Card collapseable="collapsed">
                  <CardHeader>
                    <CardHeaderTitle>Security Settings</CardHeaderTitle>
                    <CardHeaderSubtitle>
                      Configure 2FA and login alerts.
                    </CardHeaderSubtitle>
                  </CardHeader>
                  <CardPanel>
                    <SampleItems />
                  </CardPanel>
                </Card>
              </div>
            </ComponentPreview>
          </div>
        </div>

        {/* Danger */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            Danger Variant
          </h3>
          <p className="text-xs text-muted-foreground">
            Use{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              danger
            </code>{" "}
            for destructive settings like account deletion.
          </p>
          <ComponentPreview
            align="start"
            code={`<Card danger>
  <CardHeader>
    <CardHeaderTitle>Danger Zone</CardHeaderTitle>
    <CardHeaderSubtitle>Irreversible actions for your account.</CardHeaderSubtitle>
  </CardHeader>
  <CardFooter>
    <Button size="sm" variant="destructive">Delete Account</Button>
  </CardFooter>
</Card>`}
          >
            <div className="w-full">
              <Card danger>
                <CardHeader>
                  <CardHeaderTitle>Danger Zone</CardHeaderTitle>
                  <CardHeaderSubtitle>
                    Irreversible actions for your account.
                  </CardHeaderSubtitle>
                </CardHeader>
                <CardFooter>
                  <Button size="sm" variant="destructive">
                    Delete Account
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </ComponentPreview>
        </div>

        {/* Inverse Theme */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            Inverse Theme
          </h3>
          <p className="text-xs text-muted-foreground">
            Pass{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              inverse
            </code>{" "}
            to render the card in the opposite theme. In light mode the card
            appears dark; in dark mode it appears light. All semantic tokens and
            child components flip automatically — no extra props needed anywhere
            else.
          </p>
          <ComponentPreview
            align="start"
            code={`<Card inverse>
  <CardHeader>
    <CardHeaderTitle>School Information</CardHeaderTitle>
    <CardHeaderSubtitle>Your school details visible to parents.</CardHeaderSubtitle>
  </CardHeader>
  <CardPanel>
    <CardPanelItem>...</CardPanelItem>
  </CardPanel>
  <CardFooter>
    <Button size="sm" variant="secondary">Edit</Button>
  </CardFooter>
</Card>`}
          >
            <div className="w-full">
              <Card inverse>
                <CardHeader>
                  <CardHeaderTitle>School Information</CardHeaderTitle>
                  <CardHeaderSubtitle>
                    Your school details visible to parents.
                  </CardHeaderSubtitle>
                </CardHeader>
                <CardPanel>
                  <SampleItems />
                </CardPanel>
                <CardFooter>
                  <Button size="sm" variant="secondary">
                    Edit
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </ComponentPreview>
        </div>

        {/* Card — Border */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Card — Border</h3>
          <p className="text-xs text-muted-foreground">
            Pass a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              border
            </code>{" "}
            object to add an accent edge on the outer{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              Card
            </code>
            . Supports{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              side
            </code>
            ,{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              stroke
            </code>
            , and{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              color
            </code>
            .
          </p>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Top · orange · stroke 3 (defaults)
            </p>
            <ComponentPreview
              align="start"
              code={`<Card border={{ side: "t", stroke: 3, color: "orange" }}>
  ...
</Card>`}
            >
              <div className="w-full">
                <Card border={{ side: "t", stroke: 3, color: "orange" }}>
                  <CardHeader>
                    <CardHeaderTitle>Profile</CardHeaderTitle>
                    <CardHeaderSubtitle>
                      Your personal information.
                    </CardHeaderSubtitle>
                  </CardHeader>
                  <CardPanel>
                    <SampleItems />
                  </CardPanel>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Left · blue · stroke 2
            </p>
            <ComponentPreview
              align="start"
              code={`<Card border={{ side: "l", stroke: 2, color: "blue" }}>
  ...
</Card>`}
            >
              <div className="w-full">
                <Card border={{ side: "l", stroke: 2, color: "blue" }}>
                  <CardHeader>
                    <CardHeaderTitle>Profile</CardHeaderTitle>
                  </CardHeader>
                  <CardPanel>
                    <SampleItems />
                  </CardPanel>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          {/* All 8 colors */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              All 8 accent colors (top border, stroke 3)
            </p>
            <ComponentPreview
              align="start"
              code={`<Card border={{ color: "orange" }}>...</Card>
<Card border={{ color: "blue" }}>...</Card>
<Card border={{ color: "amber" }}>...</Card>
<Card border={{ color: "teal" }}>...</Card>
<Card border={{ color: "indigo" }}>...</Card>
<Card border={{ color: "purple" }}>...</Card>
<Card border={{ color: "red" }}>...</Card>
<Card border={{ color: "slate" }}>...</Card>`}
            >
              <div className="grid w-full grid-cols-2 gap-3">
                {(
                  [
                    "orange",
                    "blue",
                    "amber",
                    "teal",
                    "indigo",
                    "purple",
                    "red",
                    "slate",
                  ] as const
                ).map((color) => (
                  <div key={color} className="space-y-1">
                    <p className="text-xs text-muted-foreground capitalize">
                      {color}
                    </p>
                    <Card border={{ color }}>
                      <CardHeader>
                        <CardHeaderTitle>Profile</CardHeaderTitle>
                      </CardHeader>
                      <CardPanel>
                        <CardPanelItem>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-foreground">
                              School
                            </span>
                            <SimpleBadge variant="green">Active</SimpleBadge>
                          </div>
                        </CardPanelItem>
                      </CardPanel>
                    </Card>
                  </div>
                ))}
              </div>
            </ComponentPreview>
          </div>
        </div>

        {/* CardPanel — Border */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardPanel — Border
          </h3>
          <p className="text-xs text-muted-foreground">
            The{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              border
            </code>{" "}
            prop on{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardPanel
            </code>{" "}
            accents the inner panel card.
          </p>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Left · indigo · stroke 3
            </p>
            <ComponentPreview
              align="start"
              code={`<Card>
  <CardHeader>...</CardHeader>
  <CardPanel border={{ side: "l", stroke: 3, color: "indigo" }}>
    ...
  </CardPanel>
</Card>`}
            >
              <div className="w-full">
                <Card>
                  <CardHeader>
                    <CardHeaderTitle>Billing</CardHeaderTitle>
                    <CardHeaderSubtitle>
                      Current plan and payment method.
                    </CardHeaderSubtitle>
                  </CardHeader>
                  <CardPanel border={{ side: "l", stroke: 3, color: "indigo" }}>
                    <SampleItems />
                  </CardPanel>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Top · amber · stroke 2
            </p>
            <ComponentPreview
              align="start"
              code={`<CardPanel border={{ side: "t", stroke: 2, color: "amber" }}>
  ...
</CardPanel>`}
            >
              <div className="w-full">
                <Card>
                  <CardHeader>
                    <CardHeaderTitle>Billing</CardHeaderTitle>
                  </CardHeader>
                  <CardPanel border={{ side: "t", stroke: 2, color: "amber" }}>
                    <SampleItems />
                  </CardPanel>
                </Card>
              </div>
            </ComponentPreview>
          </div>
        </div>

        {/* CardPanel — Background */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardPanel — Background Gradient
          </h3>
          <p className="text-xs text-muted-foreground">
            The{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">bg</code>{" "}
            prop paints a gradient on the inner panel. Configure{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              style
            </code>
            ,{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              side
            </code>
            ,{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              color
            </code>
            , and{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">to</code>.
          </p>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Linear · bottom · orange → transparent (defaults)
            </p>
            <ComponentPreview
              align="start"
              code={`<CardPanel bg={{ style: "linear", side: "b", color: "orange", to: "transparent" }}>
  ...
</CardPanel>`}
            >
              <div className="w-full">
                <Card>
                  <CardHeader>
                    <CardHeaderTitle>Profile</CardHeaderTitle>
                  </CardHeader>
                  <CardPanel
                    bg={{
                      style: "linear",
                      side: "b",
                      color: "orange",
                      to: "transparent",
                    }}
                  >
                    <SampleItems />
                  </CardPanel>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Radial · purple → transparent
            </p>
            <ComponentPreview
              align="start"
              code={`<CardPanel bg={{ style: "radial", color: "purple" }}>
  ...
</CardPanel>`}
            >
              <div className="w-full">
                <Card>
                  <CardHeader>
                    <CardHeaderTitle>Profile</CardHeaderTitle>
                  </CardHeader>
                  <CardPanel bg={{ style: "radial", color: "purple" }}>
                    <SampleItems />
                  </CardPanel>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          {/* All 8 colors */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              All 8 accent colors (linear, side b, to transparent)
            </p>
            <ComponentPreview
              align="start"
              code={`<CardPanel bg={{ color: "orange" }}>...</CardPanel>
<CardPanel bg={{ color: "blue" }}>...</CardPanel>
<CardPanel bg={{ color: "amber" }}>...</CardPanel>
<CardPanel bg={{ color: "teal" }}>...</CardPanel>
<CardPanel bg={{ color: "indigo" }}>...</CardPanel>
<CardPanel bg={{ color: "purple" }}>...</CardPanel>
<CardPanel bg={{ color: "red" }}>...</CardPanel>
<CardPanel bg={{ color: "slate" }}>...</CardPanel>`}
            >
              <div className="grid w-full grid-cols-2 gap-3">
                {(
                  [
                    "orange",
                    "blue",
                    "amber",
                    "teal",
                    "indigo",
                    "purple",
                    "red",
                    "slate",
                  ] as const
                ).map((color) => (
                  <div key={color} className="space-y-1">
                    <p className="text-xs text-muted-foreground capitalize">
                      {color}
                    </p>
                    <Card>
                      <CardHeader>
                        <CardHeaderTitle>Profile</CardHeaderTitle>
                      </CardHeader>
                      <CardPanel bg={{ color }}>
                        <CardPanelItem>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-foreground">
                              Status
                            </span>
                            <SimpleBadge variant="green">Active</SimpleBadge>
                          </div>
                        </CardPanelItem>
                      </CardPanel>
                    </Card>
                  </div>
                ))}
              </div>
            </ComponentPreview>
          </div>
        </div>

        {/* CardPanel — Combined */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardPanel — Combined Border &amp; Background
          </h3>
          <p className="text-xs text-muted-foreground">
            <code className="rounded bg-muted px-1 font-mono text-xs">
              border
            </code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">bg</code>{" "}
            can be used together on the same{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardPanel
            </code>
            .
          </p>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Left border · teal + teal gradient
            </p>
            <ComponentPreview
              align="start"
              code={`<CardPanel
  border={{ side: "l", stroke: 3, color: "teal" }}
  bg={{ color: "teal" }}
>
  ...
</CardPanel>`}
            >
              <div className="w-full">
                <Card>
                  <CardHeader>
                    <CardHeaderTitle>Integration</CardHeaderTitle>
                    <CardHeaderSubtitle>
                      Connected apps and webhooks.
                    </CardHeaderSubtitle>
                  </CardHeader>
                  <CardPanel
                    border={{ side: "l", stroke: 3, color: "teal" }}
                    bg={{ color: "teal" }}
                  >
                    <SampleItems />
                  </CardPanel>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Card top border · orange + CardPanel radial orange gradient
            </p>
            <ComponentPreview
              align="start"
              code={`<Card border={{ side: "t", color: "orange" }}>
  <CardHeader>...</CardHeader>
  <CardPanel bg={{ style: "radial", color: "orange" }}>
    ...
  </CardPanel>
</Card>`}
            >
              <div className="w-full">
                <Card border={{ side: "t", color: "orange" }}>
                  <CardHeader>
                    <CardHeaderTitle>Billing</CardHeaderTitle>
                    <CardHeaderSubtitle>
                      Subscription and invoices.
                    </CardHeaderSubtitle>
                  </CardHeader>
                  <CardPanel bg={{ style: "radial", color: "orange" }}>
                    <SampleItems />
                  </CardPanel>
                </Card>
              </div>
            </ComponentPreview>
          </div>
        </div>

        {/* CardPanelItem — Collapse */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardPanelItem — Collapse
          </h3>
          <p className="text-xs text-muted-foreground">
            Each{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardPanelItem
            </code>{" "}
            accepts a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              collapsed
            </code>{" "}
            prop. When true the row animates to zero height via{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              grid-rows
            </code>{" "}
            and is marked{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              inert
            </code>
            .
          </p>
          <ComponentPreview
            align="start"
            code={`const [collapsed, setCollapsed] = useState(false);

<Card>
  <CardHeader>
    <CardHeaderTitle>Settings</CardHeaderTitle>
  </CardHeader>
  <CardPanel>
    <CardPanelItem>Always visible</CardPanelItem>
    <CardPanelItem collapsed={collapsed}>Toggleable row</CardPanelItem>
    <CardPanelItem>Always visible</CardPanelItem>
  </CardPanel>
  <CardFooter>
    <Button size="sm" variant="secondary" onClick={() => setCollapsed(v => !v)}>
      Toggle middle row
    </Button>
  </CardFooter>
</Card>`}
          >
            <div className="w-full">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>Settings</CardHeaderTitle>
                  <CardHeaderSubtitle>
                    Middle row can be toggled.
                  </CardHeaderSubtitle>
                </CardHeader>
                <CardPanel>
                  <CardPanelItem>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">
                        School Name
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Beacon Academy
                      </span>
                    </div>
                  </CardPanelItem>
                  <CardPanelItem collapsed={itemCollapsed}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">
                        Contact Email
                      </span>
                      <span className="text-sm text-muted-foreground">
                        admin@beacon.edu.pk
                      </span>
                    </div>
                  </CardPanelItem>
                  <CardPanelItem>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Phone</span>
                      <span className="text-sm text-muted-foreground">
                        +92 300 0000000
                      </span>
                    </div>
                  </CardPanelItem>
                </CardPanel>
                <CardFooter>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setItemCollapsed((v) => !v)}
                  >
                    {itemCollapsed ? "Show" : "Hide"} middle row
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </ComponentPreview>
        </div>

        {/* CardPanelItemGroup */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardPanelItemGroup
          </h3>
          <p className="text-xs text-muted-foreground">
            Wrap multiple related inputs inside a single{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardPanelItem
            </code>{" "}
            using{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardPanelItemGroup
            </code>{" "}
            to add vertical spacing between them.
          </p>
          <ComponentPreview
            align="start"
            code={`<CardPanel>
  <CardPanelItem>
    <CardPanelItemGroup>
      <div>First Name</div>
      <div>Last Name</div>
      <div>Email</div>
    </CardPanelItemGroup>
  </CardPanelItem>
</CardPanel>`}
          >
            <div className="w-full">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>Personal Details</CardHeaderTitle>
                  <CardHeaderSubtitle>
                    All fields grouped in one item.
                  </CardHeaderSubtitle>
                </CardHeader>
                <CardPanel>
                  <CardPanelItem>
                    <CardPanelItemGroup>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          First Name
                        </span>
                        <Input placeholder="John" full />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          Last Name
                        </span>
                        <Input placeholder="Doe" full />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          Email
                        </span>
                        <Input placeholder="john@example.com" full />
                      </div>
                    </CardPanelItemGroup>
                  </CardPanelItem>
                </CardPanel>
                <CardFooter>
                  <Button size="sm">Save</Button>
                </CardFooter>
              </Card>
            </div>
          </ComponentPreview>
        </div>

        {/* CardPanelItemCrown */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardPanelItemCrown
          </h3>
          <p className="text-xs text-muted-foreground">
            Renders a floating label above a{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardPanelItem
            </code>{" "}
            with a dashed top border. Add{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              className=&quot;relative&quot;
            </code>{" "}
            to the{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardPanelItem
            </code>{" "}
            and place the crown as its first child. Note: crowns are not
            suitable on the first item — the dashed border would have nothing to
            sit on.
          </p>

          {/* Variants */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              All variants
            </p>
            <ComponentPreview
              align="start"
              code={`// variant: "default" | "secondary" | "destructive" | "success" | "warning"
// Crown is not suitable on the first item — skip it there.

<CardPanel>
  {/* First item — no crown */}
  <CardPanelItem>
    ...content...
  </CardPanelItem>

  {/* Subsequent items — add className="relative" and crown as first child */}
  <CardPanelItem className="relative">
    <CardPanelItemCrown variant="secondary">Secondary</CardPanelItemCrown>
    ...content...
  </CardPanelItem>

  <CardPanelItem className="relative">
    <CardPanelItemCrown variant="warning">Warning</CardPanelItemCrown>
    ...content...
  </CardPanelItem>
</CardPanel>`}
            >
              <div className="w-full">
                <Card>
                  <CardHeader>
                    <CardHeaderTitle>Status Sections</CardHeaderTitle>
                  </CardHeader>
                  <CardPanel>
                    {(
                      [
                        "default",
                        "secondary",
                        "destructive",
                        "success",
                        "warning",
                      ] as const
                    ).map((variant, index) =>
                      index === 0 ? (
                        <CardPanelItem key={variant}>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-foreground">
                              School Name
                            </span>
                            <span className="text-sm text-muted-foreground">
                              Beacon Academy
                            </span>
                          </div>
                        </CardPanelItem>
                      ) : (
                        <CardPanelItem key={variant} className="relative">
                          <CardPanelItemCrown variant={variant}>
                            {variant.charAt(0).toUpperCase() + variant.slice(1)}
                          </CardPanelItemCrown>
                          <div className="flex items-center justify-between pt-3">
                            <span className="text-sm text-foreground">
                              School Name
                            </span>
                            <span className="text-sm text-muted-foreground">
                              Beacon Academy
                            </span>
                          </div>
                        </CardPanelItem>
                      )
                    )}
                  </CardPanel>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          {/* Nudge */}
          <div className="space-y-1.5">
            <p className="text-xs text-muted-foreground font-medium">
              Nudge animation
            </p>
            <p className="text-xs text-muted-foreground">
              Set{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">
                nudge
              </code>{" "}
              to animate the crown label with an attention pulse. Use{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs">
                nudgeVariant
              </code>{" "}
              to pick the highlight color.
            </p>
            <ComponentPreview
              align="start"
              code={`<CardPanel>
  {/* First item — no crown */}
  <CardPanelItem>
    <div className="flex items-center justify-between">
      <span>Plan expires</span>
      <SimpleBadge variant="amber">Jun 30 2026</SimpleBadge>
    </div>
  </CardPanelItem>

  {/* Subsequent items — crown with nudge */}
  <CardPanelItem className="relative">
    <CardPanelItemCrown nudge nudgeVariant="warning">Action Required</CardPanelItemCrown>
    <div className="flex items-center justify-between pt-3">
      <span>Outstanding balance</span>
      <SimpleBadge variant="red">PKR 4,500</SimpleBadge>
    </div>
  </CardPanelItem>
</CardPanel>`}
            >
              <div className="w-full">
                <Card>
                  <CardHeader>
                    <CardHeaderTitle>Payment</CardHeaderTitle>
                    <CardHeaderSubtitle>
                      Your subscription needs attention.
                    </CardHeaderSubtitle>
                  </CardHeader>
                  <CardPanel>
                    <CardPanelItem>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">
                          Plan expires
                        </span>
                        <SimpleBadge variant="amber">Jun 30 2026</SimpleBadge>
                      </div>
                    </CardPanelItem>
                    <CardPanelItem className="relative">
                      <CardPanelItemCrown
                        key={nudgeKey}
                        nudge
                        nudgeVariant="destructive"
                      >
                        Overdue
                      </CardPanelItemCrown>
                      <div className="flex items-center justify-between pt-3">
                        <span className="text-sm text-foreground">
                          Outstanding balance
                        </span>
                        <SimpleBadge variant="red">PKR 4,500</SimpleBadge>
                      </div>
                    </CardPanelItem>
                  </CardPanel>
                  <CardFooter className="justify-between">
                    <div className="flex items-center gap-1.5">
                      <CardFooterIcon icon={TriangleAlertIcon} />
                      Resolve the overdue balance to keep your account active.
                    </div>
                    <Button
                      size="xs"
                      variant="secondary"
                      onClick={() => setNudgeKey((k) => k + 1)}
                    >
                      Play nudge
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </ComponentPreview>
          </div>
        </div>

        {/* CardPanelField */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardPanelField
          </h3>
          <p className="text-xs text-muted-foreground">
            A collapsible field wrapper for toggling sections of a form inside a
            panel item. Uses the same{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              grid-rows
            </code>{" "}
            animation as{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardPanelItem
            </code>
            .
          </p>
          <ComponentPreview
            align="start"
            code={`const [fieldCollapsed, setFieldCollapsed] = useState(false);

<CardPanel>
  <CardPanelItem>
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-medium">Advanced Options</span>
      <Button size="xs" variant="ghost" onClick={() => setFieldCollapsed(v => !v)}>
        {fieldCollapsed ? "Show" : "Hide"}
      </Button>
    </div>
    <CardPanelField collapsed={fieldCollapsed}>
      <div className="space-y-3 pb-1">
        <Input placeholder="Custom domain" full />
        <Input placeholder="Webhook URL" full />
      </div>
    </CardPanelField>
  </CardPanelItem>
</CardPanel>`}
          >
            <div className="w-full">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>Advanced Configuration</CardHeaderTitle>
                  <CardHeaderSubtitle>
                    Optional fields that can be hidden.
                  </CardHeaderSubtitle>
                </CardHeader>
                <CardPanel>
                  <CardPanelItem>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-foreground">
                        Advanced Options
                      </span>
                      <Button
                        size="xs"
                        variant="ghost"
                        onClick={() => setFieldCollapsed((v) => !v)}
                      >
                        {fieldCollapsed ? "Show" : "Hide"}
                      </Button>
                    </div>
                    <CardPanelField collapsed={fieldCollapsed}>
                      <div className="space-y-3 pb-1">
                        <div className="space-y-1">
                          <span className="text-xs text-muted-foreground">
                            Custom Domain
                          </span>
                          <Input placeholder="school.example.com" full />
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs text-muted-foreground">
                            Webhook URL
                          </span>
                          <Input
                            placeholder="https://hooks.example.com/..."
                            full
                          />
                        </div>
                      </div>
                    </CardPanelField>
                  </CardPanelItem>
                </CardPanel>
                <CardFooter>
                  <CardFooterIcon />
                  Fields animate in/out with a grid-rows transition.
                </CardFooter>
              </Card>
            </div>
          </ComponentPreview>
        </div>

        {/* CardFooter */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardFooter &amp; CardFooterIcon
          </h3>
          <p className="text-xs text-muted-foreground">
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardFooter
            </code>{" "}
            sits below the panel with a top border that disappears when a panel
            is expanded.{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">
              CardFooterIcon
            </code>{" "}
            is a small helper that renders a leading icon.
          </p>
          <ComponentPreview
            align="start"
            code={`<CardFooter>
  <CardFooterIcon icon={InfoIcon} />
  Only the school admin can update these details.
</CardFooter>

<CardFooter>
  <Button size="sm" variant="secondary">Cancel</Button>
  <Button size="sm">Save Changes</Button>
</CardFooter>`}
          >
            <div className="w-full space-y-3">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>School Info</CardHeaderTitle>
                </CardHeader>
                <CardPanel>
                  <CardPanelItem>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground">Name</span>
                      <span className="text-sm text-muted-foreground">
                        Beacon Academy
                      </span>
                    </div>
                  </CardPanelItem>
                </CardPanel>
                <CardFooter>
                  <CardFooterIcon icon={InfoIcon} />
                  Only the school admin can update these details.
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardHeaderTitle>Edit Profile</CardHeaderTitle>
                </CardHeader>
                <CardPanel>
                  <CardPanelItem>
                    <Input placeholder="Display name" full />
                  </CardPanelItem>
                </CardPanel>
                <CardFooter className="gap-2">
                  <Button size="sm" variant="secondary">
                    Cancel
                  </Button>
                  <Button size="sm">Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </ComponentPreview>
        </div>
      </div>

      {/* ── Props ── */}
      <div className="space-y-8">
        <SectionHeader>Props</SectionHeader>

        {/* Card */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Card</h3>
          <PropsTable
            props={[
              {
                name: "danger",
                type: "boolean",
                default: "false",
                description: "Applies red danger styling.",
              },
              {
                name: "collapseable",
                type: "'expanded' | 'collapsed'",
                description:
                  "Enables collapse. 'expanded' starts open, 'collapsed' starts closed.",
              },
              {
                name: "hasError",
                type: "boolean",
                default: "false",
                description:
                  "When collapsed and true, shows a destructive outline ring.",
              },
              {
                name: "step",
                type: "number",
                description:
                  "Wizard step index — integrates with WizardProvider.",
              },
              {
                name: "border",
                type: "BorderConfig",
                description: "Optional accent border on the outer card.",
              },
              {
                name: "inverse",
                type: "boolean",
                default: "false",
                description:
                  "Renders the card in the opposite theme (dark in light mode, light in dark mode).",
              },
            ]}
          />
        </div>

        {/* CardPanel */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">CardPanel</h3>
          <PropsTable
            props={[
              {
                name: "collapsed",
                type: "boolean",
                description:
                  "Manual collapse override. Defaults to the Card context state.",
              },
              {
                name: "border",
                type: "BorderConfig",
                description: "Optional accent border on the inner panel card.",
              },
              {
                name: "bg",
                type: "BgConfig",
                description:
                  "Optional gradient background on the inner panel card.",
              },
            ]}
          />
        </div>

        {/* CardPanelItem */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">CardPanelItem</h3>
          <PropsTable
            props={[
              {
                name: "collapsed",
                type: "boolean",
                description:
                  "Collapses the item to zero height via grid-rows animation.",
              },
            ]}
          />
        </div>

        {/* CardPanelField */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardPanelField
          </h3>
          <PropsTable
            props={[
              {
                name: "collapsed",
                type: "boolean",
                description:
                  "Collapses the field wrapper to zero height. No border; lighter than CardPanelItem.",
              },
            ]}
          />
        </div>

        {/* CardPanelItemCrown */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardPanelItemCrown
          </h3>
          <PropsTable
            props={[
              {
                name: "variant",
                type: "'default' | 'secondary' | 'destructive' | 'success' | 'warning'",
                default: "'default'",
                description: "Color of the dashed crown badge.",
              },
              {
                name: "nudge",
                type: "boolean",
                default: "false",
                description: "Applies an attention-pulse animation.",
              },
              {
                name: "nudgeVariant",
                type: "'default' | 'secondary' | 'destructive' | 'success' | 'warning'",
                default: "'warning'",
                description: "Color override when nudge is active.",
              },
            ]}
          />
        </div>

        {/* CardFooterIcon */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">
            CardFooterIcon
          </h3>
          <PropsTable
            props={[
              {
                name: "icon",
                type: "IconType",
                default: "InfoIcon",
                description: "Icon component to render.",
              },
            ]}
          />
        </div>

        {/* BorderConfig */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">BorderConfig</h3>
          <PropsTable
            props={[
              {
                name: "side",
                type: "'t' | 'l' | 'r' | 'b'",
                default: "'t'",
                description: "Which side the border appears on.",
              },
              {
                name: "stroke",
                type: "1 | 2 | 3",
                default: "3",
                description: "Border thickness in px.",
              },
              {
                name: "color",
                type: "'blue' | 'amber' | 'purple' | 'red' | 'teal' | 'orange' | 'indigo' | 'slate'",
                default: "'orange'",
                description: "Accent color at 60% opacity.",
              },
            ]}
          />
        </div>

        {/* BgConfig */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">BgConfig</h3>
          <PropsTable
            props={[
              {
                name: "style",
                type: "'linear' | 'radial' | 'conic'",
                default: "'linear'",
                description: "CSS gradient type.",
              },
              {
                name: "side",
                type: "'t' | 'l' | 'r' | 'b'",
                default: "'b'",
                description: "Gradient direction (linear only).",
              },
              {
                name: "color",
                type: "'blue' | 'amber' | 'purple' | 'red' | 'teal' | 'orange' | 'indigo' | 'slate'",
                default: "'orange'",
                description: "Start color at 7% opacity.",
              },
              {
                name: "to",
                type: "'transparent' | 'white' | 'black' | AccentColor",
                default: "'transparent'",
                description:
                  "End stop color. Accent colors resolve to 500/60 opacity.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
