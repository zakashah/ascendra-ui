"use client";

import { useState } from "react";
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
import { Switch } from "@/ascendra-ui/components/ui/switch";
import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";
import {
  ItemGroup,
  Item,
  ItemContent,
  ItemTitle,
} from "@/ascendra-ui/components/ui/item";

const categories = ["Electronics", "Clothing", "Home & Garden", "Sports", "Books"];
const activeFilters = ["Electronics", "In Stock", "New"];

export default function SmartFilterDrawer() {
  const [snap, setSnap] = useState<number | string | null>(0.4);
  const [inStock, setInStock] = useState(true);
  const [newOnly, setNewOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  const isExpanded = snap === 1;

  return (
    <Drawer
      snapPoints={[0.4, 1]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      onOpenChange={(open) => {
        if (!open) {
          setSnap(0.4);
          setInStock(true);
          setNewOnly(false);
          setSelectedCategory("Electronics");
        }
      }}
    >
      <DrawerTrigger asChild>
        <Button variant="secondary" className="flex items-center gap-2">
          Filter Results
          <SimpleBadge variant="default">3</SimpleBadge>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Filters</DrawerTitle>
          <DrawerDescription>
            {isExpanded
              ? "Refine your results by category, availability, and condition."
              : "Drag up to see all filter options."}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerBody className="pb-4">
          {!isExpanded ? (
            /* Compact summary view at 40% snap */
            <div className="flex flex-col gap-3">
              <p className="text-xs font-medium text-muted-foreground">Active Filters</p>
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((f) => (
                  <SimpleBadge key={f} variant="secondary">
                    {f}
                  </SimpleBadge>
                ))}
              </div>
            </div>
          ) : (
            /* Full filter form at 100% snap */
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-3 text-xs font-medium text-muted-foreground">Category</p>
                <ItemGroup>
                  {categories.map((cat) => (
                    <Item
                      key={cat}
                      className={`cursor-pointer hover:bg-muted/60 ${
                        selectedCategory === cat ? "bg-muted/50" : ""
                      }`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      <ItemContent>
                        <ItemTitle className="font-normal">{cat}</ItemTitle>
                      </ItemContent>
                      {selectedCategory === cat && (
                        <span className="ml-auto h-2 w-2 rounded-full bg-primary" />
                      )}
                    </Item>
                  ))}
                </ItemGroup>
              </div>
              <div className="border-t border-border" />
              <div className="flex flex-col gap-4">
                <p className="text-xs font-medium text-muted-foreground">Availability</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">In Stock Only</p>
                    <p className="text-xs text-muted-foreground">Hide out-of-stock items</p>
                  </div>
                  <Switch checked={inStock} onCheckedChange={setInStock} id="filter-instock" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">New Arrivals</p>
                    <p className="text-xs text-muted-foreground">Items added in the last 30 days</p>
                  </div>
                  <Switch checked={newOnly} onCheckedChange={setNewOnly} id="filter-new" />
                </div>
              </div>
            </div>
          )}
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary">Reset</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button>Apply Filters</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
