"use client";

import { LuCircleAlert } from "react-icons/lu";
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
import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";

const payload = `{
  "actor_id": "usr_9d3b2f",
  "resource": "role:admin",
  "action": "permission.grant",
  "target_user": "usr_6c1a44",
  "granted_permissions": [
    "projects:write",
    "billing:read",
    "members:manage"
  ],
  "ip_address": "104.28.55.12",
  "session_id": "ses_7hx3kq"
}`;

export default function AuditLogEntrySheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">View Log Entry</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-start justify-between gap-3">
            <SheetTitle>Permission Change</SheetTitle>
            <SimpleBadge variant="amber" className="mt-0.5 shrink-0">
              High
            </SimpleBadge>
          </div>
          <SheetDescription>Audit event · May 27, 2025 at 09:14 UTC</SheetDescription>
        </SheetHeader>
        <SheetBody className="py-5">
          <div className="flex flex-col gap-5">
            <dl className="grid grid-cols-[130px_1fr] gap-x-4 gap-y-3">
              <dt className="text-sm text-muted-foreground">Event Type</dt>
              <dd className="text-sm text-foreground">permission.grant</dd>
              <dt className="text-sm text-muted-foreground">Actor</dt>
              <dd className="text-sm text-foreground">admin@company.com</dd>
              <dt className="text-sm text-muted-foreground">Actor ID</dt>
              <dd className="font-mono text-sm text-muted-foreground">usr_9d3b2f</dd>
              <dt className="text-sm text-muted-foreground">Target User</dt>
              <dd className="text-sm text-foreground">priya.nair@company.com</dd>
              <dt className="text-sm text-muted-foreground">Resource</dt>
              <dd className="text-sm text-foreground">role:admin</dd>
              <dt className="text-sm text-muted-foreground">IP Address</dt>
              <dd className="font-mono text-sm text-muted-foreground">104.28.55.12</dd>
              <dt className="text-sm text-muted-foreground">Timestamp</dt>
              <dd className="text-sm text-foreground">2025-05-27 09:14:32 UTC</dd>
              <dt className="text-sm text-muted-foreground">Method</dt>
              <dd className="text-sm text-foreground">Dashboard (Web)</dd>
            </dl>
            <div className="border-t border-border" />
            <SimpleAlert variant="warning" icon={LuCircleAlert}>
              This action granted elevated permissions and triggered a compliance notification.
            </SimpleAlert>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Event Payload</p>
              <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground">
                {payload}
              </pre>
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
