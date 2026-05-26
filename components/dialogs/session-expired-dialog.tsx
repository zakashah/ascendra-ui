"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/ascendra-ui/components/ui/dialog";
import { Button } from "@/ascendra-ui/components/ui/button";

export default function SessionExpiredDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Simulate Session Expiry</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Session Expired</DialogTitle>
          <DialogDescription>
            Your session timed out due to inactivity. Sign in again to continue
            where you left off.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Sign In</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
