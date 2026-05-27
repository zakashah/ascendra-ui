"use client";

import { LuImage } from "react-icons/lu";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerBody,
  DrawerFooter,
} from "@/ascendra-ui/components/ui/drawer";
import { Button } from "@/ascendra-ui/components/ui/button";

export default function MediaAttachmentDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">View Attachment</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>dashboard-hero-v4.png</DrawerTitle>
          <DrawerDescription>Image · Uploaded by Sarah Mitchell</DrawerDescription>
        </DrawerHeader>
        <DrawerBody className="pb-6">
          <div className="flex flex-col gap-5">
            <div className="flex h-44 w-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40">
              <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
                <LuImage className="size-10 stroke-1" />
                <span className="text-xs">Preview not available</span>
              </div>
            </div>
            <dl className="grid grid-cols-[130px_1fr] gap-x-4 gap-y-3">
              <dt className="text-sm text-muted-foreground">Filename</dt>
              <dd className="truncate text-sm text-foreground">dashboard-hero-v4.png</dd>
              <dt className="text-sm text-muted-foreground">Type</dt>
              <dd className="text-sm text-foreground">PNG Image</dd>
              <dt className="text-sm text-muted-foreground">Size</dt>
              <dd className="text-sm text-foreground">2.4 MB</dd>
              <dt className="text-sm text-muted-foreground">Dimensions</dt>
              <dd className="text-sm text-foreground">1440 × 900 px</dd>
              <dt className="text-sm text-muted-foreground">Uploaded by</dt>
              <dd className="text-sm text-foreground">Sarah Mitchell</dd>
              <dt className="text-sm text-muted-foreground">Date added</dt>
              <dd className="text-sm text-foreground">May 22, 2025</dd>
            </dl>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary">Copy URL</Button>
          </DrawerClose>
          <Button>Download</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
