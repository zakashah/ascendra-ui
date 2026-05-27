"use client";

import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter,
} from "@/ascendra-ui/components/ui/sheet";
import { Button } from "@/ascendra-ui/components/ui/button";
import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";
import { StatusDot } from "@/ascendra-ui/components/common-ui/status-dot";
import { NameAvatar } from "@/ascendra-ui/components/common-ui/name-avatar";

const activity = [
  {
    actor: "Alice Chen",
    time: "2h ago",
    action: "Added a comment",
    detail:
      "Reproduced on v3.12.1. Occurs when the session token expires mid-upload. Assigning to backend team.",
  },
  {
    actor: "Raj Patel",
    time: "5h ago",
    action: "Changed status",
    detail: "Status updated from Open → In Progress.",
  },
  {
    actor: "Marcus Webb",
    time: "1d ago",
    action: "Opened ticket",
    detail:
      "File uploads fail silently after 15 minutes of inactivity. No error message is displayed to the user.",
  },
];

export default function SupportTicketSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Open Ticket</Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <div className="flex items-start justify-between gap-3">
            <SheetTitle>File upload fails after session timeout</SheetTitle>
            <SimpleBadge variant="red" className="mt-0.5 shrink-0">
              Critical
            </SimpleBadge>
          </div>
          <SheetDescription>
            TKT-1042 · Reported by Marcus Webb
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <div className="flex flex-col gap-5">
            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-3">
              <dt className="text-sm text-muted-foreground">Priority</dt>
              <dd className="flex items-center gap-1.5">
                <StatusDot variant="rose" />
                <span className="text-sm text-foreground">Critical</span>
              </dd>
              <dt className="text-sm text-muted-foreground">Status</dt>
              <dd className="flex items-center gap-1.5">
                <StatusDot variant="amber" />
                <span className="text-sm text-foreground">In Progress</span>
              </dd>
              <dt className="text-sm text-muted-foreground">Assignee</dt>
              <dd className="text-sm text-foreground">Raj Patel</dd>
              <dt className="text-sm text-muted-foreground">Team</dt>
              <dd className="text-sm text-foreground">Backend</dd>
              <dt className="text-sm text-muted-foreground">Created</dt>
              <dd className="text-sm text-foreground">May 26, 2025</dd>
              <dt className="text-sm text-muted-foreground">Last updated</dt>
              <dd className="text-sm text-foreground">2 hours ago</dd>
            </dl>
            <div className="border-t border-border" />
            <div>
              <p className="mb-4 text-xs font-medium text-muted-foreground">
                Activity
              </p>
              <div className="flex flex-col gap-5">
                {activity.map((item) => (
                  <div key={item.time} className="flex gap-3">
                    <NameAvatar
                      name={item.actor}
                      size={28}
                      href="#"
                      className="mt-0.5 shrink-0"
                    />
                    <div className="flex flex-col gap-0.5">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span className="text-sm font-medium text-foreground">
                          {item.actor}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.action}
                        </span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
          <Button>Mark as Resolved</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
