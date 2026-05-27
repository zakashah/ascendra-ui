"use client";

import {
  LuPencil,
  LuCopy,
  LuShare2,
  LuArchive,
  LuTrash2,
} from "react-icons/lu";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerBody,
  DrawerFooter,
} from "@/ascendra-ui/components/ui/drawer";
import { Button } from "@/ascendra-ui/components/ui/button";
import {
  ItemGroup,
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
} from "@/ascendra-ui/components/ui/item";

const actions = [
  { label: "Rename", icon: LuPencil, destructive: false },
  { label: "Duplicate", icon: LuCopy, destructive: false },
  { label: "Share", icon: LuShare2, destructive: false },
  { label: "Archive", icon: LuArchive, destructive: false },
  { label: "Delete", icon: LuTrash2, destructive: true },
];

export default function QuickActionsDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">More Options</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerBody className="py-4">
          <ItemGroup>
            {actions.map(({ label, icon: Icon, destructive }) => (
              <DrawerClose key={label} asChild>
                <Item
                  asChild={false}
                  variant="default"
                  className={`cursor-pointer hover:bg-muted/60 ${
                    destructive ? "text-negative hover:text-negative" : ""
                  }`}
                >
                  <ItemMedia variant="icon">
                    <Icon
                      className={`size-4 ${destructive ? "text-negative" : "text-muted-foreground"}`}
                    />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle
                      className={destructive ? "text-negative font-normal" : "font-normal"}
                    >
                      {label}
                    </ItemTitle>
                  </ItemContent>
                </Item>
              </DrawerClose>
            ))}
          </ItemGroup>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary" className="w-full">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
