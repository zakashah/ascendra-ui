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
import { Switch } from "@/ascendra-ui/components/ui/switch";
import {
  ItemGroup,
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/ascendra-ui/components/ui/item";

const experience = [
  { role: "Senior Product Designer", company: "Nexus Technologies", period: "2021 – Present" },
  { role: "Product Designer", company: "Wavefront Studio", period: "2018 – 2021" },
  { role: "UX Designer", company: "Bright Labs", period: "2015 – 2018" },
];

const TABS = ["overview", "experience"] as const;
type Tab = (typeof TABS)[number];

function SheetTabBar({ tab, setTab }: { tab: Tab; setTab: (t: Tab) => void }) {
  return (
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
          {t}
        </button>
      ))}
    </div>
  );
}

export default function EmployeeProfileSheet() {
  const [tab, setTab] = useState<Tab>("overview");
  const [isActive, setIsActive] = useState(true);

  return (
    <Sheet onOpenChange={() => { setTab("overview"); setIsActive(true); }}>
      <SheetTrigger asChild>
        <Button variant="secondary">View Profile</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center gap-3">
            <NameAvatar name="Sarah Mitchell" size={36} href="#" />
            <div>
              <SheetTitle>Sarah Mitchell</SheetTitle>
              <SheetDescription>Senior Product Designer · Design</SheetDescription>
            </div>
          </div>
        </SheetHeader>
        <SheetSubHeader>
          <SheetTabBar tab={tab} setTab={setTab} />
        </SheetSubHeader>
        <SheetBody className="py-5">
          {tab === "overview" && (
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-muted-foreground">Employment Status</p>
                <div className="flex items-center gap-2">
                  <Switch
                    checked={isActive}
                    onCheckedChange={setIsActive}
                    id="emp-status"
                  />
                  <label
                    htmlFor="emp-status"
                    className="cursor-pointer text-sm text-muted-foreground"
                  >
                    {isActive ? "Active" : "Inactive"}
                  </label>
                </div>
              </div>
              <div className="border-t border-border" />
              <div>
                <p className="mb-3 text-xs font-medium text-muted-foreground">Employment</p>
                <dl className="grid grid-cols-[140px_1fr] gap-x-4 gap-y-3">
                  <dt className="text-sm text-muted-foreground">Department</dt>
                  <dd className="text-sm text-foreground">Product Design</dd>
                  <dt className="text-sm text-muted-foreground">Location</dt>
                  <dd className="text-sm text-foreground">San Francisco, CA</dd>
                  <dt className="text-sm text-muted-foreground">Start Date</dt>
                  <dd className="text-sm text-foreground">Mar 12, 2021</dd>
                  <dt className="text-sm text-muted-foreground">Manager</dt>
                  <dd className="text-sm text-foreground">David Chen</dd>
                  <dt className="text-sm text-muted-foreground">Employee ID</dt>
                  <dd className="text-sm text-foreground">EMP-0842</dd>
                </dl>
              </div>
              <div className="border-t border-border" />
              <div>
                <p className="mb-3 text-xs font-medium text-muted-foreground">Contact</p>
                <dl className="grid grid-cols-[140px_1fr] gap-x-4 gap-y-3">
                  <dt className="text-sm text-muted-foreground">Email</dt>
                  <dd className="truncate text-sm text-foreground">sarah.m@company.com</dd>
                  <dt className="text-sm text-muted-foreground">Phone</dt>
                  <dd className="text-sm text-foreground">+1 (415) 555-0183</dd>
                </dl>
              </div>
              <div className="border-t border-border" />
              <div>
                <p className="mb-2 text-xs font-medium text-muted-foreground">Bio</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Sarah is a seasoned product designer with 10+ years of experience across B2B SaaS
                  and consumer products. She leads design systems and mentors junior designers on the
                  team.
                </p>
              </div>
            </div>
          )}
          {tab === "experience" && (
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium text-muted-foreground">Work History</p>
              <ItemGroup>
                {experience.map((job) => (
                  <Item key={job.role} variant="outline">
                    <ItemContent>
                      <ItemTitle>{job.role}</ItemTitle>
                      <ItemDescription>{job.company}</ItemDescription>
                    </ItemContent>
                    <span className="shrink-0 text-xs text-muted-foreground">{job.period}</span>
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
          <Button>Edit Profile</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
