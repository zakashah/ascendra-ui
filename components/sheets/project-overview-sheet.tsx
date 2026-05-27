"use client";

import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetSubHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
} from "@/ascendra-ui/components/ui/sheet";
import { Button } from "@/ascendra-ui/components/ui/button";
import { NameAvatar } from "@/ascendra-ui/components/common-ui/name-avatar";
import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";
import { StatusDot } from "@/ascendra-ui/components/common-ui/status-dot";
import {
  ItemGroup,
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/ascendra-ui/components/ui/item";

const milestones = [
  { name: "Discovery & Research", status: "done", date: "Apr 10" },
  { name: "Wireframes & Prototyping", status: "done", date: "Apr 30" },
  { name: "High-fidelity Designs", status: "current", date: "May 28" },
  { name: "Developer Handoff", status: "upcoming", date: "Jun 10" },
];

const members = [
  { name: "Sarah Mitchell", role: "Design Lead" },
  { name: "David Chen", role: "Product Manager" },
  { name: "Priya Nair", role: "UX Researcher" },
  { name: "Tom Reyes", role: "Front-end Engineer" },
  { name: "Yuki Tanaka", role: "QA Engineer" },
];

const milestoneStatus = {
  done: { dot: "emerald" as const },
  current: { dot: "amber" as const },
  upcoming: { dot: "gray" as const },
};

const TABS = ["overview", "members"] as const;
type Tab = (typeof TABS)[number];

export default function ProjectOverviewSheet() {
  const [tab, setTab] = useState<Tab>("overview");

  return (
    <Sheet onOpenChange={() => setTab("overview")}>
      <SheetTrigger asChild>
        <Button variant="secondary">View Project</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-start justify-between gap-3">
            <SheetTitle>Atlas Dashboard Redesign</SheetTitle>
            <SimpleBadge variant="blue" className="mt-0.5 shrink-0">
              Active
            </SimpleBadge>
          </div>
          <SheetDescription>Product Design · Q2 2025</SheetDescription>
        </SheetHeader>
        <SheetSubHeader>
          <div className="flex border-b border-border">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-3 py-2.5 text-sm capitalize transition-colors ${
                  tab === t
                    ? "text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-foreground after:content-['']"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "overview" ? "Overview" : "Members"}
              </button>
            ))}
          </div>
        </SheetSubHeader>
        <SheetBody className="py-5">
          {tab === "overview" && (
            <div className="flex flex-col gap-5">
              <dl className="grid grid-cols-[140px_1fr] gap-x-4 gap-y-3">
                <dt className="text-sm text-muted-foreground">Owner</dt>
                <dd className="text-sm text-foreground">David Chen</dd>
                <dt className="text-sm text-muted-foreground">Status</dt>
                <dd className="flex items-center gap-1.5">
                  <StatusDot variant="emerald" />
                  <span className="text-sm text-foreground">On Track</span>
                </dd>
                <dt className="text-sm text-muted-foreground">Start Date</dt>
                <dd className="text-sm text-foreground">Apr 1, 2025</dd>
                <dt className="text-sm text-muted-foreground">Target</dt>
                <dd className="text-sm text-foreground">Jun 15, 2025</dd>
                <dt className="text-sm text-muted-foreground">Budget</dt>
                <dd className="text-sm text-foreground">$48,000</dd>
                <dt className="text-sm text-muted-foreground">Team Size</dt>
                <dd className="text-sm text-foreground">5 members</dd>
              </dl>
              <div className="border-t border-border" />
              <div>
                <p className="mb-3 text-xs font-medium text-muted-foreground">Milestones</p>
                <ItemGroup>
                  {milestones.map((m) => (
                    <Item key={m.name}>
                      <ItemContent>
                        <div className="flex items-center gap-2">
                          <StatusDot
                            variant={milestoneStatus[m.status as keyof typeof milestoneStatus].dot}
                          />
                          <ItemTitle>{m.name}</ItemTitle>
                        </div>
                      </ItemContent>
                      <ItemActions>
                        <span className="text-xs text-muted-foreground">{m.date}</span>
                      </ItemActions>
                    </Item>
                  ))}
                </ItemGroup>
              </div>
            </div>
          )}
          {tab === "members" && (
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium text-muted-foreground">
                Team ({members.length})
              </p>
              <ItemGroup>
                {members.map((m) => (
                  <Item key={m.name} variant="outline">
                    <NameAvatar name={m.name} size={28} href="#" className="shrink-0" />
                    <ItemContent>
                      <ItemTitle>{m.name}</ItemTitle>
                      <ItemDescription>{m.role}</ItemDescription>
                    </ItemContent>
                  </Item>
                ))}
              </ItemGroup>
            </div>
          )}
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
          <Button>Open Project</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
