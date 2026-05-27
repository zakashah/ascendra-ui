"use client";

import { useState } from "react";
import { LuCircleAlert } from "react-icons/lu";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
} from "@/ascendra-ui/components/ui/drawer";
import { Button } from "@/ascendra-ui/components/ui/button";
import { Input } from "@/ascendra-ui/components/ui/input";
import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";

const consequences = [
  "All projects and files will be permanently deleted",
  "All team members will lose access immediately",
  "Active subscriptions will be cancelled",
  "This action cannot be reversed",
];

export default function DangerZoneDrawer() {
  const [value, setValue] = useState("");

  return (
    <Drawer
      onOpenChange={(open) => {
        if (!open) setValue("");
      }}
    >
      <DrawerTrigger asChild>
        <Button variant="secondary">Delete Workspace</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody className="py-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                <LuCircleAlert className="size-6 text-negative" />
              </div>
              <div>
                <p className="text-base font-semibold text-foreground">Delete Workspace</p>
                <p className="mt-0.5 text-sm text-muted-foreground">This cannot be undone.</p>
              </div>
            </div>
            <SimpleAlert variant="destructive" icon={LuCircleAlert}>
              Deleting your workspace is permanent. All data will be lost.
            </SimpleAlert>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                What will be deleted
              </p>
              <ul className="flex flex-col gap-1.5">
                {consequences.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-negative/60" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <p className="mb-2 text-xs text-muted-foreground">
                Type <span className="font-mono font-medium text-foreground">DELETE</span> to
                confirm
              </p>
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Type DELETE to confirm"
                className="font-mono"
              />
            </div>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button variant="destructive" disabled={value !== "DELETE"}>
              Delete Workspace
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
