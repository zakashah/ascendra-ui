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
import { Field, FieldLabel, FieldGrid } from "@/ascendra-ui/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ascendra-ui/components/ui/select";

export default function InviteMemberDialog() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <Dialog onOpenChange={() => { setEmail(""); setRole(""); }}>
      <DialogTrigger asChild>
        <Button>Invite Member</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite Member</DialogTitle>
          <DialogDescription>
            An invitation email will be sent to the address below.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <FieldGrid className="gap-4">
            <Field>
              <FieldLabel htmlFor="invite-email">Email address</FieldLabel>
              <Input
                id="invite-email"
                type="email"
                placeholder="colleague@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="invite-role">Role</FieldLabel>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger id="invite-role">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="viewer">Viewer</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </FieldGrid>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button disabled={!email.trim() || !role}>Send Invite</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
