"use client";

import { LuPackage } from "react-icons/lu";
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

const tags = ["Electronics", "Audio", "Wireless", "Premium"];

export default function ProductDetailsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">View Product</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-start justify-between gap-3">
            <SheetTitle>Pro Wireless Headphones</SheetTitle>
            <SimpleBadge variant="green" className="mt-0.5 shrink-0">
              In Stock
            </SimpleBadge>
          </div>
          <SheetDescription>SKU: HDN-PRO-BLK-001 · Audio Equipment</SheetDescription>
        </SheetHeader>
        <SheetBody className="py-5">
          <div className="flex flex-col gap-5">
            <div className="flex h-40 w-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/40">
              <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
                <LuPackage className="size-8 stroke-1" />
                <span className="text-xs">Product image</span>
              </div>
            </div>
            <dl className="grid grid-cols-[130px_1fr] gap-x-4 gap-y-3">
              <dt className="text-sm text-muted-foreground">Category</dt>
              <dd className="text-sm text-foreground">Audio Equipment</dd>
              <dt className="text-sm text-muted-foreground">Price</dt>
              <dd className="text-sm font-medium text-foreground">$249.00</dd>
              <dt className="text-sm text-muted-foreground">Stock</dt>
              <dd className="flex items-center gap-1.5">
                <StatusDot variant="emerald" />
                <span className="text-sm text-foreground">142 units</span>
              </dd>
              <dt className="text-sm text-muted-foreground">Weight</dt>
              <dd className="text-sm text-foreground">250g</dd>
              <dt className="text-sm text-muted-foreground">Connectivity</dt>
              <dd className="text-sm text-foreground">Bluetooth 5.3</dd>
              <dt className="text-sm text-muted-foreground">Battery Life</dt>
              <dd className="text-sm text-foreground">30 hours</dd>
              <dt className="text-sm text-muted-foreground">Vendor</dt>
              <dd className="text-sm text-foreground">SoundWave Inc.</dd>
              <dt className="text-sm text-muted-foreground">Added</dt>
              <dd className="text-sm text-foreground">Feb 12, 2025</dd>
            </dl>
            <div className="border-t border-border" />
            <div>
              <p className="mb-2.5 text-xs font-medium text-muted-foreground">Tags</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <SimpleBadge key={tag} variant="secondary">
                    {tag}
                  </SimpleBadge>
                ))}
              </div>
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
          <Button>Edit Product</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
