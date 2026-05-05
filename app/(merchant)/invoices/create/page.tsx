'use client';

import { useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/custom/ui/button';
import { MainContent } from '@/components/custom/layout/main-content';
import { PageHeader } from '@/components/custom/layout/page-header';
import { PageHeaderAction } from '@/components/custom/layout/page-header-action';
import { PageHeaderGroup } from '@/components/custom/layout/page-header-group';
import { PageMain } from '@/components/custom/layout/page-main';
import { PageTitle } from '@/components/custom/layout/page-title';
import { PageSubtitle } from '@/components/custom/layout/page-subtitle';
import { Input } from '@/components/custom/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/custom/ui/input-group';
import { Checkbox } from '@/components/custom/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/custom/ui/radio-group';
import { Switch } from '@/components/custom/ui/switch';
import { Label } from '@/components/ui/label';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/custom/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  LuArrowLeft,
  LuPlus,
  LuTrash2,
  LuSend,
  LuChevronDown,
  LuCopy,
  LuEye,
  LuFileText,
} from 'react-icons/lu';

const MOCK_CLIENTS = [
  { id: 'c1', name: 'Ahmed Raza', student: 'Ali Raza' },
  { id: 'c2', name: 'Sara Khan', student: 'Hania Khan' },
  { id: 'c3', name: 'Bilal Qureshi', student: 'Hamza Qureshi' },
  { id: 'c4', name: 'Fatima Malik', student: 'Zain Malik' },
  { id: 'c5', name: 'Usman Sheikh', student: 'Umer Sheikh' },
];

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <span className="text-muted-foreground border-border block border-b pb-2 text-[10px] font-bold tracking-widest uppercase">
      {children}
    </span>
  );
}

export default function CreateInvoicePage() {
  const router = useRouter();

  const [clientId, setClientId] = useState('');
  const [invoiceType, setInvoiceType] = useState('standard');
  const [invoiceNumber, setInvoiceNumber] = useState('INV-2026-007');
  const [issueDate, setIssueDate] = useState('2026-04-23');
  const [dueDate, setDueDate] = useState('2026-05-07');
  const [notes, setNotes] = useState('');
  const [paymentTerms, setPaymentTerms] = useState('net_14');

  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifySms, setNotifySms] = useState(false);
  const [notifyWhatsapp, setNotifyWhatsapp] = useState(false);

  const [sendReminder, setSendReminder] = useState(true);
  const [applyTax, setApplyTax] = useState(false);

  const [items, setItems] = useState([
    { id: 1, name: 'Tuition Fee (Monthly)', qty: 1, price: 15000 },
  ]);

  const selectedClient = MOCK_CLIENTS.find((c) => c.id === clientId);

  const addItem = () =>
    setItems([...items, { id: Date.now(), name: '', qty: 1, price: 0 }]);

  const removeItem = (id: number) =>
    setItems((prev) => (prev.length > 1 ? prev.filter((i) => i.id !== id) : prev));

  const subtotal = items.reduce((acc, item) => acc + item.qty * item.price, 0);
  const taxAmount = applyTax ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal + taxAmount;

  return (
    <>
      <PageHeader className="border-b-0 pb-0">
        <PageHeaderGroup>
          <div className="flex items-start gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="text-muted-foreground hover:bg-muted hover:text-foreground h-8 w-8 rounded-full transition-colors"
            >
              <LuArrowLeft className="size-4" />
            </Button>
            <div>
              <PageTitle>Create New Invoice</PageTitle>
              <PageSubtitle>Fill out the details below to generate a new invoice.</PageSubtitle>
            </div>
          </div>
        </PageHeaderGroup>
        <PageHeaderAction>
          <div className="flex items-center gap-2">
            {/* DropdownMenu — more actions */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">
                  More <LuChevronDown className="ml-1 size-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <LuFileText /> Save as Draft
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LuCopy /> Duplicate
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LuEye /> Preview PDF
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button>
              <LuSend /> Create Invoice
            </Button>
          </div>
        </PageHeaderAction>
      </PageHeader>

      <PageMain className="p-0">
        <MainContent className="flex h-[calc(100vh-140px)] w-full max-w-none flex-col overflow-hidden bg-white p-0 lg:flex-row dark:bg-(--color-gray-1500)">
          {/* ── Left Panel: Form ── */}
          <div className="border-border w-full shrink-0 overflow-y-auto border-r p-6 lg:w-[460px] lg:p-8 xl:w-[500px]">
            <div className="flex flex-col gap-10 pb-20">

              {/* Invoice Details — Input + Select */}
              <section className="flex flex-col gap-4">
                <SectionHeading>Invoice Details</SectionHeading>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="client">Billed To (Client)</FieldLabel>
                    <Select value={clientId} onValueChange={setClientId}>
                      <SelectTrigger id="client" className="w-full">
                        <SelectValue placeholder="Select a client" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {MOCK_CLIENTS.map((c) => (
                            <SelectItem key={c.id} value={c.id}>
                              {c.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="invoiceNumber">Invoice Number</FieldLabel>
                    <Input
                      id="invoiceNumber"
                      full
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                    />
                  </Field>
                </FieldGroup>
              </section>

              {/* Invoice Type — RadioGroup */}
              <section className="flex flex-col gap-4">
                <SectionHeading>Invoice Type</SectionHeading>
                <RadioGroup
                  value={invoiceType}
                  onValueChange={setInvoiceType}
                  className="grid-cols-3"
                >
                  {[
                    { value: 'standard', label: 'Standard' },
                    { value: 'advance', label: 'Advance' },
                    { value: 'recurring', label: 'Recurring' },
                  ].map((opt) => (
                    <RadioGroupItem
                      key={opt.value}
                      value={opt.value}
                      id={`type-${opt.value}`}
                      wrapperClassName="gap-2"
                    >
                      <Label
                        htmlFor={`type-${opt.value}`}
                        className="cursor-pointer font-normal"
                      >
                        {opt.label}
                      </Label>
                    </RadioGroupItem>
                  ))}
                </RadioGroup>
              </section>

              {/* Payment — InputGroup + Select + Input */}
              <section className="flex flex-col gap-4">
                <SectionHeading>Payment</SectionHeading>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Amount</FieldLabel>
                    {/* InputGroup with PKR prefix */}
                    <InputGroup>
                      <InputGroupAddon align="inline-start">
                        <InputGroupText>PKR</InputGroupText>
                      </InputGroupAddon>
                      <InputGroupInput
                        type="number"
                        min="0"
                        placeholder="0"
                        defaultValue={15000}
                      />
                    </InputGroup>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="paymentTerms">Payment Terms</FieldLabel>
                    <Select value={paymentTerms} onValueChange={setPaymentTerms}>
                      <SelectTrigger id="paymentTerms" className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="due_on_receipt">Due on Receipt</SelectItem>
                        <SelectItem value="net_7">Net 7 Days</SelectItem>
                        <SelectItem value="net_14">Net 14 Days</SelectItem>
                        <SelectItem value="net_30">Net 30 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="issueDate">Issue Date</FieldLabel>
                      <Input
                        id="issueDate"
                        full
                        type="date"
                        value={issueDate}
                        onChange={(e) => setIssueDate(e.target.value)}
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="dueDate">Due Date</FieldLabel>
                      <Input
                        id="dueDate"
                        full
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                      />
                    </Field>
                  </div>
                </FieldGroup>
              </section>

              {/* Line Items — Input + InputGroup */}
              <section className="flex flex-col gap-4">
                <div className="border-border flex items-center justify-between border-b pb-2">
                  <span className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                    Line Items
                  </span>
                  <span className="text-foreground text-xs font-semibold">
                    Subtotal: PKR {subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="border-border flex flex-col gap-3 rounded-lg border bg-gray-50/50 p-3 dark:bg-black/10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground text-[10px] font-semibold uppercase">
                          Item {index + 1}
                        </span>
                        {items.length > 1 && (
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <LuTrash2 className="size-3.5" />
                          </button>
                        )}
                      </div>
                      <Input
                        full
                        placeholder="Description (e.g. Tuition Fee)"
                        value={item.name}
                        onChange={(e) => {
                          const next = [...items];
                          next[index].name = e.target.value;
                          setItems(next);
                        }}
                      />
                      <div className="flex gap-3">
                        <div className="flex w-24 flex-col gap-1.5">
                          <Label className="text-[10px] uppercase">Qty</Label>
                          <Input
                            full
                            type="number"
                            min="1"
                            value={item.qty}
                            onChange={(e) => {
                              const next = [...items];
                              next[index].qty = parseInt(e.target.value) || 0;
                              setItems(next);
                            }}
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-1.5">
                          <Label className="text-[10px] uppercase">Amount</Label>
                          <InputGroup>
                            <InputGroupAddon align="inline-start">
                              <InputGroupText>PKR</InputGroupText>
                            </InputGroupAddon>
                            <InputGroupInput
                              type="number"
                              min="0"
                              value={item.price}
                              onChange={(e) => {
                                const next = [...items];
                                next[index].price = parseInt(e.target.value) || 0;
                                setItems(next);
                              }}
                            />
                          </InputGroup>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={addItem}
                    className="mt-2 w-full border border-dashed shadow-none"
                  >
                    <LuPlus /> Add Line Item
                  </Button>
                </div>
              </section>

              {/* Delivery — Checkbox group */}
              <section className="flex flex-col gap-4">
                <SectionHeading>Delivery</SectionHeading>
                <div className="flex flex-col gap-3">
                  <Label className="text-sm font-medium">Notify client via</Label>
                  {[
                    {
                      id: 'notify-email',
                      label: 'Email',
                      value: notifyEmail,
                      onChange: setNotifyEmail,
                    },
                    {
                      id: 'notify-sms',
                      label: 'SMS',
                      value: notifySms,
                      onChange: setNotifySms,
                    },
                    {
                      id: 'notify-whatsapp',
                      label: 'WhatsApp',
                      value: notifyWhatsapp,
                      onChange: setNotifyWhatsapp,
                    },
                  ].map((opt) => (
                    <div key={opt.id} className="flex items-center gap-2">
                      <Checkbox
                        id={opt.id}
                        checked={opt.value}
                        onCheckedChange={(v) => opt.onChange(!!v)}
                      />
                      <Label htmlFor={opt.id} className="cursor-pointer font-normal">
                        {opt.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </section>

              {/* Options — Switch toggles */}
              <section className="flex flex-col gap-4">
                <SectionHeading>Options</SectionHeading>
                <div className="divide-border flex flex-col divide-y">
                  <div className="flex items-center justify-between py-3">
                    <div className="flex flex-col gap-0.5">
                      <Label
                        htmlFor="send-reminder"
                        className="cursor-pointer text-sm font-medium"
                      >
                        Send Payment Reminder
                      </Label>
                      <p className="text-muted-foreground text-xs">
                        Auto-remind client 2 days before due date
                      </p>
                    </div>
                    <Switch
                      id="send-reminder"
                      checked={sendReminder}
                      onCheckedChange={setSendReminder}
                    />
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex flex-col gap-0.5">
                      <Label
                        htmlFor="apply-tax"
                        className="cursor-pointer text-sm font-medium"
                      >
                        Apply Tax (5% GST)
                      </Label>
                      <p className="text-muted-foreground text-xs">
                        Adds 5% on total — reflected in the preview
                      </p>
                    </div>
                    <Switch
                      id="apply-tax"
                      checked={applyTax}
                      onCheckedChange={setApplyTax}
                    />
                  </div>
                </div>
              </section>

              {/* Notes — InputGroup with Textarea */}
              <section className="flex flex-col gap-4">
                <SectionHeading>Additional Notes</SectionHeading>
                <InputGroup>
                  <InputGroupTextarea
                    rows={3}
                    placeholder="e.g. Late fees apply after due date. Please include student ID in payment reference."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </InputGroup>
              </section>
            </div>
          </div>

          {/* ── Right Panel: Live Preview ── */}
          <div className="relative flex w-full flex-1 justify-center overflow-y-auto bg-gray-100/80 p-6 lg:p-12 dark:bg-[#0a0a0c]">
            <div className="animate-in fade-in flex h-fit min-h-[950px] w-full max-w-[750px] shrink-0 flex-col rounded-sm bg-white p-12 tracking-tight text-gray-900 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] ring-1 ring-black/5 duration-500 sm:p-16">
              {/* Print Header */}
              <div className="flex flex-col items-start justify-between gap-8 pb-10 sm:flex-row">
                <div className="flex flex-col">
                  <div className="text-3xl font-bold tracking-tighter text-gray-900">
                    Ascendra Pay
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    Financial Management for Schools
                  </div>
                  <div className="mt-8 flex flex-col text-sm text-gray-600">
                    <span>123 Education Lane</span>
                    <span>Knowledge City, KC 12345</span>
                    <span>support@ascendrapay.com</span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end sm:text-right">
                  <div className="text-3xl font-light tracking-widest text-gray-300 uppercase">
                    Invoice
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-900">
                    {invoiceNumber || 'INV-XXXXX'}
                  </div>
                  {invoiceType !== 'standard' && (
                    <span className="mt-1 rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700 capitalize ring-1 ring-purple-200">
                      {invoiceType}
                    </span>
                  )}
                </div>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-2 gap-8 border-t border-b border-gray-100 py-10 md:grid-cols-4">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    Billed To
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {selectedClient?.name || 'Client Name'}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    Student
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {selectedClient?.student || 'Student Name'}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    Date Issued
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {issueDate
                      ? new Date(issueDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : '-'}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    Due Date
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {dueDate
                      ? new Date(dueDate).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : '-'}
                  </span>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="mt-10 flex flex-col">
                <div className="flex border-b border-dashed border-gray-200 pb-4 text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  <div className="flex-1">Description</div>
                  <div className="w-20 text-center">Qty</div>
                  <div className="w-32 text-right">Unit Price</div>
                  <div className="w-32 text-right">Total</div>
                </div>
                <div className="flex flex-col gap-5 border-b border-dashed border-gray-200 py-6">
                  {items.map((item, i) => (
                    <div key={item.id} className="flex text-sm text-gray-700">
                      <div className="flex-1 font-medium text-gray-900">
                        {item.name || `Item ${i + 1}`}
                      </div>
                      <div className="w-20 text-center">{item.qty}</div>
                      <div className="w-32 text-right">
                        PKR {item.price.toLocaleString()}
                      </div>
                      <div className="w-32 text-right font-medium text-gray-900">
                        PKR {(item.qty * item.price).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="flex flex-col items-end pt-8">
                <div className="flex w-full max-w-[280px] flex-col gap-4">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span>PKR {subtotal.toLocaleString()}</span>
                  </div>
                  {applyTax && (
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Tax (5% GST)</span>
                      <span>PKR {taxAmount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="mt-2 flex justify-between border-t border-gray-900 pt-4 text-lg font-bold text-gray-900">
                    <span>Total Due</span>
                    <span>PKR {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Footer Notes */}
              {notes && (
                <div className="mt-auto pt-16 text-xs text-gray-500">
                  <span className="text-[10px] font-semibold tracking-wide text-gray-700 uppercase">
                    Notes
                  </span>
                  <p className="mt-2 leading-relaxed whitespace-pre-wrap">{notes}</p>
                </div>
              )}
            </div>
          </div>
        </MainContent>
      </PageMain>
    </>
  );
}
