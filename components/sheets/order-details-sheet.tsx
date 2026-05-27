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
import {
  ItemGroup,
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/ascendra-ui/components/ui/item";

const lineItems = [
  { name: "Wireless Noise-Cancelling Headphones", qty: "×1", price: "$249.00" },
  { name: "Laptop Stand Pro (Adjustable)", qty: "×1", price: "$79.00" },
  { name: "USB-C Hub 7-in-1", qty: "×2", price: "$58.00" },
];

export default function OrderDetailsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">View Order</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>Order #ORD-5892</SheetTitle>
            <SimpleBadge variant="amber">Processing</SimpleBadge>
          </div>
          <SheetDescription>Placed on May 14, 2025 · Web store</SheetDescription>
        </SheetHeader>
        <SheetBody className="py-5">
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Order Info</p>
              <dl className="grid grid-cols-[140px_1fr] gap-x-4 gap-y-3">
                <dt className="text-sm text-muted-foreground">Customer</dt>
                <dd className="text-sm text-foreground">Marcus Webb</dd>
                <dt className="text-sm text-muted-foreground">Payment</dt>
                <dd className="text-sm text-foreground">Visa •••• 4242</dd>
                <dt className="text-sm text-muted-foreground">Shipping</dt>
                <dd className="text-sm text-foreground">Standard (5–7 days)</dd>
                <dt className="text-sm text-muted-foreground">Order Date</dt>
                <dd className="text-sm text-foreground">May 14, 2025</dd>
              </dl>
            </div>
            <div className="border-t border-border" />
            <div>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Line Items</p>
              <ItemGroup>
                {lineItems.map((item) => (
                  <Item key={item.name}>
                    <ItemContent>
                      <ItemTitle>{item.name}</ItemTitle>
                      <ItemDescription>{item.qty}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <span className="text-sm font-medium text-foreground">{item.price}</span>
                    </ItemActions>
                  </Item>
                ))}
              </ItemGroup>
            </div>
            <div className="border-t border-border" />
            <div>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Shipping Address</p>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm text-foreground">Marcus Webb</span>
                <span className="text-sm text-muted-foreground">412 Oak Street, Apt 3B</span>
                <span className="text-sm text-muted-foreground">Austin, TX 78701</span>
                <span className="text-sm text-muted-foreground">United States</span>
              </div>
            </div>
            <div className="border-t border-border" />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">$386.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">$12.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax</span>
                <span className="text-foreground">$31.84</span>
              </div>
              <div className="mt-1 flex justify-between border-t border-border pt-2 text-sm font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">$429.84</span>
              </div>
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Close</Button>
          </SheetClose>
          <Button>Print Receipt</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
