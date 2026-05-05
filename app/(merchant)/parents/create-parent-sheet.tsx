'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
} from '@/components/custom/ui/dialog';
import { Button } from '@/components/custom/ui/button';
import { Input } from '@/components/custom/ui/input';
import { Label } from '@/components/ui/label';
import { LuPlus, LuTrash2 } from 'react-icons/lu';

export function CreateParentSheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [students, setStudents] = useState([{ id: 1 }]);

  const addStudent = () => {
    setStudents([...students, { id: Date.now() }]);
  };

  const removeStudent = (id: number) => {
    if (students.length > 1) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) setTimeout(() => setStep(1), 150);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-w-[480px]"
        /* footer={
          <DialogFooter>
            {step === 1 ? (
              <>
                <DialogClose asChild>
                  <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button onClick={() => setStep(2)}>Continue</Button>
              </>
            ) : (
              <>
                <Button variant="secondary" onClick={() => setStep(1)}>
                  Back
                </Button>
                <DialogClose asChild>
                  <Button>Create Parent</Button>
                </DialogClose>
              </>
            )}
          </DialogFooter>
        } */
      >
        <DialogHeader>
          <DialogTitle>Add parent</DialogTitle>
          <DialogDescription>
            {step === 1
              ? 'Enter the parent details. You can add their students in the next step.'
              : 'Add students associated with this parent. You can add multiple students.'}
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          {step === 1 ? (
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full flex-col gap-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input full id="name" placeholder="e.g. Ahmed Raza" />
              </div>
              <div className="flex w-full flex-col gap-1.5">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  full
                  id="email"
                  type="email"
                  placeholder="e.g. ahmed@example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input full id="phone" placeholder="e.g. +92 300 1234567" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {students.map((student, index) => (
                <div
                  key={student.id}
                  className="bg-muted/30 border-border group relative flex flex-col gap-3 rounded-xl border p-4"
                >
                  {students.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeStudent(student.id)}
                      className="text-muted-foreground hover:text-destructive absolute top-3 right-3 p-1 transition-colors"
                    >
                      <LuTrash2 className="size-4" />
                    </button>
                  )}
                  <div className="text-foreground text-sm font-medium">
                    Student {index + 1}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label>Student Name</Label>
                    <Input full placeholder="e.g. Ali Raza" />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-1 flex-col gap-1.5">
                      <Label>Grade / Class</Label>
                      <Input full placeholder="e.g. Grade 5" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1.5">
                      <Label>Roll Number</Label>
                      <Input full placeholder="e.g. 104" />
                    </div>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="secondary"
                onClick={addStudent}
                className="w-full border border-dashed shadow-none"
              >
                <LuPlus className="mr-2" /> Add another student
              </Button>
            </div>
          )}
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}
