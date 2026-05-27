"use client";

import { useState } from "react";
import { LuMapPin, LuClock, LuCalendar } from "react-icons/lu";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
} from "@/ascendra-ui/components/ui/drawer";
import { Button } from "@/ascendra-ui/components/ui/button";
import { NameAvatar } from "@/ascendra-ui/components/common-ui/name-avatar";
import { StatusDot } from "@/ascendra-ui/components/common-ui/status-dot";

const attendees = [
  { name: "Sarah Mitchell", status: "accepted" },
  { name: "David Chen", status: "accepted" },
  { name: "Priya Nair", status: "pending" },
  { name: "Tom Reyes", status: "declined" },
];

const statusMap = {
  accepted: { dot: "emerald" as const, label: "Accepted" },
  pending: { dot: "amber" as const, label: "Awaiting" },
  declined: { dot: "rose" as const, label: "Declined" },
};

export default function EventPreviewDrawer() {
  const [snap, setSnap] = useState<number | string | null>(0.35);

  const isExpanded = snap !== 0.35;

  return (
    <Drawer
      snapPoints={[0.35, 0.85]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      onOpenChange={(open) => { if (!open) setSnap(0.35); }}
    >
      <DrawerTrigger asChild>
        <Button variant="secondary">View Event</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody className="py-5">
          {/* Always-visible event header */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-sm bg-blue-500" />
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Product Design
              </span>
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              Design Review — Atlas Dashboard
            </h2>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <LuClock className="size-3.5 shrink-0" />
                Tomorrow · 2:00 PM – 3:30 PM
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <LuMapPin className="size-3.5 shrink-0" />
                Design Studio, Floor 3
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <LuCalendar className="size-3.5 shrink-0" />
                Organised by Sarah Mitchell
              </div>
            </div>
          </div>

          {/* Expanded content */}
          {isExpanded && (
            <>
              <div className="mt-5 border-t border-border pt-5">
                <p className="mb-1.5 text-xs font-medium text-muted-foreground">Description</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Weekly design review to evaluate progress on the Atlas Dashboard redesign. We will
                  walk through the high-fidelity screens, gather feedback from the product team, and
                  confirm the handoff timeline with engineering.
                </p>
              </div>
              <div className="mt-5 border-t border-border pt-5">
                <p className="mb-3 text-xs font-medium text-muted-foreground">
                  Attendees ({attendees.length})
                </p>
                <div className="flex flex-col gap-3">
                  {attendees.map((a) => (
                    <div key={a.name} className="flex items-center gap-3">
                      <NameAvatar name={a.name} size={28} href="#" />
                      <span className="flex-1 text-sm text-foreground">{a.name}</span>
                      <div className="flex items-center gap-1.5">
                        <StatusDot variant={statusMap[a.status as keyof typeof statusMap].dot} />
                        <span className="text-xs text-muted-foreground">
                          {statusMap[a.status as keyof typeof statusMap].label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </DrawerBody>
        {isExpanded && (
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="secondary">Decline</Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button>Add to Calendar</Button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
