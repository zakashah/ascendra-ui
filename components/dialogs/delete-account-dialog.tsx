"use client";

import { useState } from "react";
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
import { Input } from "@/ascendra-ui/components/ui/input";
import { Field, FieldLabel } from "@/ascendra-ui/components/ui/field";

export default function DeleteAccountDialog() {
  const [value, setValue] = useState("");

  return (
    <Dialog onOpenChange={() => setValue("")}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Your account and all associated data will be permanently deleted.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <p className="text-muted-foreground mb-4">
            This will immediately delete all workspaces, projects, files, and
            billing history tied to your account. There is no recovery path once
            confirmed.
          </p>
          <Field>
            <FieldLabel htmlFor="delete-confirm">
              Type{" "}
              <code className="rounded bg-muted px-1 font-mono text-xs text-foreground">
                DELETE
              </code>{" "}
              to confirm
            </FieldLabel>
            <Input
              id="delete-confirm"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="DELETE"
              autoComplete="off"
            />
          </Field>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" disabled={value !== "DELETE"}>
              Delete Account
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
