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
import {
  ItemGroup,
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/ascendra-ui/components/ui/item";

const lineItems = [
  { desc: "Product Design Retainer (April)", qty: "1 item", amount: "$3,500.00" },
  { desc: "UX Research — User Interviews", qty: "8 hrs", amount: "$960.00" },
  { desc: "Prototype Delivery (v2)", qty: "1 item", amount: "$540.00" },
];

export default function InvoicePreviewSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary">Preview Invoice</Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>INV-2025-089</SheetTitle>
            <SimpleBadge variant="red">Overdue</SimpleBadge>
          </div>
          <SheetDescription>Issued May 1, 2025 · Due May 15, 2025</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <div className="flex flex-col gap-5">
            <SimpleAlert variant="destructive" icon={LuCircleAlert}>
              This invoice is 12 days overdue. A late fee of $50 may apply.
            </SimpleAlert>
            <div>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Bill To</p>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-foreground">Acme Corporation</span>
                <span className="text-sm text-muted-foreground">James Hartwell</span>
                <span className="text-sm text-muted-foreground">j.hartwell@acme.com</span>
              </div>
            </div>
            <div className="border-t border-border" />
            <dl className="grid grid-cols-[140px_1fr] gap-x-4 gap-y-3">
              <dt className="text-sm text-muted-foreground">Invoice #</dt>
              <dd className="text-sm text-foreground">INV-2025-089</dd>
              <dt className="text-sm text-muted-foreground">Issue Date</dt>
              <dd className="text-sm text-foreground">May 1, 2025</dd>
              <dt className="text-sm text-muted-foreground">Due Date</dt>
              <dd className="text-sm font-medium text-negative">May 15, 2025</dd>
              <dt className="text-sm text-muted-foreground">Payment Method</dt>
              <dd className="text-sm text-foreground">Bank Transfer</dd>
            </dl>
            <div className="border-t border-border" />
            <div>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Line Items</p>
              <ItemGroup>
                {lineItems.map((item) => (
                  <Item key={item.desc}>
                    <ItemContent>
                      <ItemTitle>{item.desc}</ItemTitle>
                      <ItemDescription>{item.qty}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <span className="text-sm font-medium text-foreground">{item.amount}</span>
                    </ItemActions>
                  </Item>
                ))}
              </ItemGroup>
            </div>
            <div className="flex flex-col gap-2 border-t border-border pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">$5,000.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (8%)</span>
                <span className="text-foreground">$400.00</span>
              </div>
              <div className="mt-1 flex justify-between border-t border-border pt-2 text-sm font-semibold">
                <span className="text-foreground">Total Due</span>
                <span className="text-foreground">$5,400.00</span>
              </div>
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary">Download PDF</Button>
          </SheetClose>
          <Button>Send Reminder</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
