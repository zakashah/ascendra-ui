'use client';

import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/ascendra-ui/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/ascendra-ui/components/ui/dialog';
import { Input } from '@/ascendra-ui/components/ui/input';

interface SaveQueryFormValues {
  name: string;
  description: string;
}

interface SaveQueryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (name: string, description: string) => void;
}

export function SaveQueryDialog({ open, onOpenChange, onSave }: SaveQueryDialogProps) {
  const { register, handleSubmit, reset, setFocus, formState: { errors, isValid } } = useForm<SaveQueryFormValues>({
    mode: 'onChange',
    defaultValues: { name: '', description: '' },
  });

  const resetOnClose = useRef(false);

  useEffect(() => {
    if (open) {
      reset({ name: '', description: '' });
      // Focus the name field after the dialog animates in
      setTimeout(() => setFocus('name'), 50);
    }
  }, [open, reset, setFocus]);

  function handleSave(values: SaveQueryFormValues) {
    onSave(values.name.trim(), values.description.trim());
    resetOnClose.current = true;
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Save as My Query</DialogTitle>
          <DialogDescription>
            Save the current filter with its values so it can be run directly next time.
          </DialogDescription>
        </DialogHeader>

        <form noValidate onSubmit={handleSubmit(handleSave)} className="space-y-4 py-2">
          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="query-name">
              Name
            </label>
            <Input
              id="query-name"
              placeholder="e.g. Overdue invoices over $10k"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-destructive text-xs">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium" htmlFor="query-description">
              Description
            </label>
            <Input
              id="query-description"
              placeholder="e.g. Filters invoices past due date with amount above $10,000"
              {...register('description', { required: 'Description is required' })}
            />
            {errors.description && (
              <p className="text-destructive text-xs">{errors.description.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid}>
              Save Query
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
