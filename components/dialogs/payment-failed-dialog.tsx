"use client";

import { LuCircleAlert } from "react-icons/lu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@/ascendra-ui/components/ui/dialog";
import { Button } from "@/ascendra-ui/components/ui/button";
import { SimpleAlert } from "@/ascendra-ui/components/common-ui/simple-alert";

export default function PaymentFailedDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Simulate Payment Failure</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Payment Failed</DialogTitle>
          <DialogDescription>
            We were unable to charge the card ending in{" "}
            <span className="font-medium text-foreground">4242</span>.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <SimpleAlert variant="destructive" icon={LuCircleAlert}>
            Your account will be suspended in 3 days unless a valid payment
            method is added.
          </SimpleAlert>
          <p className="text-muted-foreground mt-3">
            This may be due to insufficient funds, an expired card, or a block
            placed by your bank. Update your payment method or contact your bank
            to resolve the issue.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Contact Support</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Update Payment Method</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
