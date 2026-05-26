"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@/ascendra-ui/components/ui/dialog";
import { Button } from "@/ascendra-ui/components/ui/button";
import { Input } from "@/ascendra-ui/components/ui/input";
import { Field, FieldLabel } from "@/ascendra-ui/components/ui/field";

export default function RenameItemDialog() {
  const [name, setName] = useState("Q4 Marketing Report");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Rename</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename Item</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Field>
            <FieldLabel htmlFor="rename-input">Name</FieldLabel>
            <Input
              id="rename-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </Field>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button disabled={!name.trim()}>Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
