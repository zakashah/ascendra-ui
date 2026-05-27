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
import { NameAvatar } from "@/ascendra-ui/components/common-ui/name-avatar";
import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";
import { StatusDot } from "@/ascendra-ui/components/common-ui/status-dot";
import {
  ItemGroup,
  Item,
  ItemContent,
  ItemTitle,
  ItemActions,
} from "@/ascendra-ui/components/ui/item";

const recentActivity = [
  { event: "Upgraded to Pro plan", time: "3 days ago" },
  { event: "Opened support ticket #TKT-1042", time: "5 days ago" },
  { event: "Added 3 team members", time: "2 weeks ago" },
  { event: "Created project: Atlas Redesign", time: "1 month ago" },
];

export default function CustomerProfileSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">View Customer</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center gap-3">
            <NameAvatar name="James Hartwell" size={36} href="#" />
            <div>
              <div className="flex items-center gap-2">
                <SheetTitle>James Hartwell</SheetTitle>
                <SimpleBadge variant="green">Pro</SimpleBadge>
              </div>
              <SheetDescription>Acme Corporation · Owner</SheetDescription>
            </div>
          </div>
        </SheetHeader>
        <SheetBody>
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Contact</p>
              <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-3">
                <dt className="text-sm text-muted-foreground">Email</dt>
                <dd className="truncate text-sm text-foreground">j.hartwell@acme.com</dd>
                <dt className="text-sm text-muted-foreground">Phone</dt>
                <dd className="text-sm text-foreground">+1 (312) 555-0117</dd>
                <dt className="text-sm text-muted-foreground">Location</dt>
                <dd className="text-sm text-foreground">Chicago, IL</dd>
              </dl>
            </div>
            <div className="border-t border-border" />
            <div>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Account</p>
              <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-3">
                <dt className="text-sm text-muted-foreground">Plan</dt>
                <dd className="text-sm text-foreground">Pro (Annual)</dd>
                <dt className="text-sm text-muted-foreground">Customer since</dt>
                <dd className="text-sm text-foreground">Jan 2023</dd>
                <dt className="text-sm text-muted-foreground">ARR</dt>
                <dd className="text-sm font-medium text-foreground">$2,400</dd>
                <dt className="text-sm text-muted-foreground">Seats</dt>
                <dd className="text-sm text-foreground">12 / 20</dd>
                <dt className="text-sm text-muted-foreground">Status</dt>
                <dd className="flex items-center gap-1.5">
                  <StatusDot variant="emerald" />
                  <span className="text-sm text-foreground">Active</span>
                </dd>
              </dl>
            </div>
            <div className="border-t border-border" />
            <div>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Recent Activity</p>
              <ItemGroup>
                {recentActivity.map((item) => (
                  <Item key={item.event}>
                    <ItemContent>
                      <ItemTitle>{item.event}</ItemTitle>
                    </ItemContent>
                    <ItemActions>
                      <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>
                    </ItemActions>
                  </Item>
                ))}
              </ItemGroup>
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
          <Button>Edit Customer</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
