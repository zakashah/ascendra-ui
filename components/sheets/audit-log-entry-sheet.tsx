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
  SheetSection,
  SheetSectionHeader,
  SheetProperties,
  SheetKey,
  SheetValue,
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
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <div className="flex items-start justify-between gap-3">
            <SheetTitle>Permission Change</SheetTitle>
            <SimpleBadge variant="amber" className="mt-0.5 shrink-0">
              High
            </SimpleBadge>
          </div>
          <SheetDescription>
            Audit event · May 27, 2025 at 09:14 UTC
          </SheetDescription>
        </SheetHeader>
        <SheetBody>
          <SheetSection>
            <SheetProperties keyWidth="130px">
              <SheetKey>Event Type</SheetKey>
              <SheetValue>permission.grant</SheetValue>
              <SheetKey>Actor</SheetKey>
              <SheetValue>admin@company.com</SheetValue>
              <SheetKey>Actor ID</SheetKey>
              <SheetValue className="font-mono text-muted-foreground">
                usr_9d3b2f
              </SheetValue>
              <SheetKey>Target User</SheetKey>
              <SheetValue>priya.nair@company.com</SheetValue>
              <SheetKey>Resource</SheetKey>
              <SheetValue>role:admin</SheetValue>
              <SheetKey>IP Address</SheetKey>
              <SheetValue className="font-mono text-muted-foreground">
                104.28.55.12
              </SheetValue>
              <SheetKey>Timestamp</SheetKey>
              <SheetValue>2025-05-27 09:14:32 UTC</SheetValue>
              <SheetKey>Method</SheetKey>
              <SheetValue>Dashboard (Web)</SheetValue>
            </SheetProperties>
          </SheetSection>
          <SheetSection className="flex flex-col gap-5">
            <SimpleAlert variant="warning" icon={LuCircleAlert}>
              This action granted elevated permissions and triggered a
              compliance notification.
            </SimpleAlert>
            <div>
              <SheetSectionHeader>Event Payload</SheetSectionHeader>
              <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 px-4 py-3 font-mono text-xs leading-relaxed text-muted-foreground">
                {payload}
              </pre>
            </div>
          </SheetSection>
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
