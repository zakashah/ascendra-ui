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
import { Field, FieldLabel } from "@/ascendra-ui/components/ui/field";
import {
  InputGroup,
  InputGroupTextarea,
} from "@/ascendra-ui/components/ui/input-group";

export default function AddNoteDialog() {
  const [note, setNote] = useState("");

  return (
    <Dialog onOpenChange={() => setNote("")}>
      <DialogTrigger asChild>
        <Button variant="secondary">Add Note</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
          <DialogDescription>
            Notes are visible to all team members on this project.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <Field>
            <FieldLabel htmlFor="note-input">Note</FieldLabel>
            <InputGroup>
              <InputGroupTextarea
                id="note-input"
                rows={4}
                placeholder="Add a note for your team…"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </InputGroup>
          </Field>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button disabled={!note.trim()}>Save Note</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
