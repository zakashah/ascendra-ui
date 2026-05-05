'use client';

import { ComponentPreview } from '../component-preview';
import { SectionHeader } from '../section-header';
import { PropsTable } from '../props-table';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogActions,
  DialogClose,
} from '@/components/custom/ui/dialog';
import { Button } from '@/components/custom/ui/button';
import { Checkbox } from '@/components/custom/ui/checkbox';
import { registry } from '@/lib/showcase/registry';

const meta = registry['dialog'];

export function DialogDocContent() {
  return (
    <div className="space-y-10">
      <ComponentPreview
        code={`import {
  Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription, DialogBody, DialogActions, DialogClose,
} from "@/components/custom/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent
    actions={
      <DialogActions>
        <DialogClose asChild>
          <Button variant="secondary">Cancel</Button>
        </DialogClose>
        <Button>Confirm</Button>
      </DialogActions>
    }
  >
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription>Are you sure you want to proceed?</DialogDescription>
    </DialogHeader>
    <DialogBody>
      <p className="text-muted-foreground">
        This will update the record immediately.
      </p>
    </DialogBody>
  </DialogContent>
</Dialog>`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent
            actions={
              <DialogActions>
                <DialogClose asChild>
                  <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button>Confirm</Button>
              </DialogActions>
            }
          >
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogDescription>
                Are you sure you want to proceed?
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p className="text-muted-foreground">
                This will update the record immediately.
              </p>
            </DialogBody>
          </DialogContent>
        </Dialog>
      </ComponentPreview>

      <div className="space-y-8">
        <SectionHeader>Examples</SectionHeader>

        <div className="space-y-3">
          <h3 className="text-foreground text-sm font-medium">
            Destructive Action
          </h3>
          <p className="text-muted-foreground text-xs">
            Use a destructive button in the actions for irreversible operations.
          </p>
          <ComponentPreview
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Parent</Button>
  </DialogTrigger>
  <DialogContent
        actions={
      <DialogActions>
        <DialogClose asChild>
          <Button variant="secondary">Cancel</Button>
        </DialogClose>
        <Button variant="destructive">Delete</Button>
      </DialogActions>
    }
  >
    <DialogHeader>
      <DialogTitle>Delete Parent</DialogTitle>
      <DialogDescription>
        This will permanently delete Ahmed Khan and all associated students.
      </DialogDescription>
    </DialogHeader>
    <DialogBody>
      <p className="text-muted-foreground">
        This action cannot be undone. All invoice data will be lost.
      </p>
    </DialogBody>
  </DialogContent>
</Dialog>`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Parent</Button>
              </DialogTrigger>
              <DialogContent
                actions={
                  <DialogActions>
                    <DialogClose asChild>
                      <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive">Delete</Button>
                  </DialogActions>
                }
              >
                <DialogHeader>
                  <DialogTitle>Delete Parent</DialogTitle>
                  <DialogDescription>
                    This will permanently delete Ahmed Khan and all associated
                    students.
                  </DialogDescription>
                </DialogHeader>
                <DialogBody>
                  <p className="text-muted-foreground">
                    This action cannot be undone. All invoice data will be lost.
                  </p>
                </DialogBody>
              </DialogContent>
            </Dialog>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-sm font-medium">
            With Inner Footer
          </h3>
          <p className="text-muted-foreground text-xs">
            Use{' '}
            <code className="bg-muted rounded px-1 font-mono text-xs">
              DialogFooter
            </code>{' '}
            inside the card for optional content like a checkbox row. It renders
            with a top separator above it.
          </p>
          <ComponentPreview
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">Premium Feature</Button>
  </DialogTrigger>
  <DialogContent
    actions={
      <DialogActions>
        <DialogClose asChild>
          <Button variant="secondary">Cancel</Button>
        </DialogClose>
        <Button>Okay</Button>
      </DialogActions>
    }
  >
    <DialogHeader>
      <DialogTitle>Premium feature</DialogTitle>
    </DialogHeader>
    <DialogBody>
      <p className="text-muted-foreground">
        Premium features are free to enable on development instances for
        developing and testing purposes.
      </p>
    </DialogBody>
    <DialogFooter>
      <div className="flex items-center gap-2">
        <Checkbox id="dont-show" />
        <label htmlFor="dont-show" className="text-sm text-muted-foreground cursor-pointer">
          Do not show this message again
        </label>
      </div>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Premium Feature</Button>
              </DialogTrigger>
              <DialogContent
                actions={
                  <DialogActions>
                    <DialogClose asChild>
                      <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button>Okay</Button>
                  </DialogActions>
                }
              >
                <DialogHeader>
                  <DialogTitle>Premium feature</DialogTitle>
                </DialogHeader>
                <DialogBody>
                  <p className="text-muted-foreground">
                    Premium features are free to enable on development instances
                    for developing and testing purposes.
                  </p>
                </DialogBody>
                <DialogFooter>
                  <div className="flex items-center gap-2">
                    <Checkbox id="dont-show" />
                    <label
                      htmlFor="dont-show"
                      className="text-muted-foreground cursor-pointer text-sm"
                    >
                      Do not show this message again
                    </label>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentPreview>
        </div>

        <div className="space-y-3">
          <h3 className="text-foreground text-sm font-medium">Header Only</h3>
          <p className="text-muted-foreground text-xs">
            Header + actions with no body — the bottom border and rounding come
            from the header itself.
          </p>
          <ComponentPreview
            code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">Open</Button>
  </DialogTrigger>
  <DialogContent
    actions={
      <DialogActions>
        <DialogClose asChild>
          <Button variant="secondary">Cancel</Button>
        </DialogClose>
        <Button>Continue</Button>
      </DialogActions>
    }
  >
    <DialogHeader>
      <DialogTitle>Session Expired</DialogTitle>
      <DialogDescription>Please sign in again to continue.</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Open</Button>
              </DialogTrigger>
              <DialogContent
                actions={
                  <DialogActions>
                    <DialogClose asChild>
                      <Button variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button>Continue</Button>
                  </DialogActions>
                }
              >
                <DialogHeader>
                  <DialogTitle>Session Expired</DialogTitle>
                  <DialogDescription>
                    Please sign in again to continue.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </ComponentPreview>
        </div>
      </div>

      <div className="space-y-4">
        <SectionHeader>Props</SectionHeader>
        <PropsTable props={meta.props ?? []} />
      </div>
    </div>
  );
}
