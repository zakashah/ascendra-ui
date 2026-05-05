import {
  type CreateInvoiceInput,
  type Invoice,
  type InvoiceListParams,
  type UpdateInvoiceInput,
} from '@/types/invoice';

// Persists across Next.js hot reloads in development
declare global {
   
  var _invoiceStore: Invoice[] | undefined;
}

const SEED: Invoice[] = [
  {
    id: '1',
    merchantId: 'merchant-1',
    clientId: 'client-1',
    clientName: 'Ahmed Raza',
    invoiceNumber: 'INV-2026-001',
    title: 'Monthly Tuition — Oct 2026',
    description: 'Child: Ali Raza, Grade 5',
    amount: 15000,
    dueDate: '2026-10-15',
    status: 'paid',
    issuedAt: '2026-10-01T08:00:00.000Z',
    paidAt: '2026-10-12T14:30:00.000Z',
  },
  {
    id: '2',
    merchantId: 'merchant-1',
    clientId: 'client-2',
    clientName: 'Fatima Khan',
    invoiceNumber: 'INV-2026-002',
    title: 'Monthly Tuition — Oct 2026',
    description: 'Child: Ayesha Khan, Grade 3',
    amount: 22000,
    dueDate: '2026-10-15',
    status: 'pending',
    issuedAt: '2026-10-01T08:00:00.000Z',
  },
  {
    id: '3',
    merchantId: 'merchant-1',
    clientId: 'client-3',
    clientName: 'Usman Tariq',
    invoiceNumber: 'INV-2026-003',
    title: 'Monthly Tuition — Sep 2026',
    description: 'Child: Bilal Tariq, Grade 7',
    amount: 15000,
    dueDate: '2026-09-15',
    status: 'overdue',
    issuedAt: '2026-09-01T08:00:00.000Z',
  },
  {
    id: '4',
    merchantId: 'merchant-1',
    clientId: 'client-3',
    clientName: 'Usman Tariq',
    invoiceNumber: 'INV-2026-004',
    title: 'Monthly Tuition — Sep 2026',
    description: 'Child: Zainab Tariq, Grade 2',
    amount: 12000,
    dueDate: '2026-09-15',
    status: 'overdue',
    issuedAt: '2026-09-01T08:00:00.000Z',
  },
  {
    id: '5',
    merchantId: 'merchant-1',
    clientId: 'client-4',
    clientName: 'Sara Malik',
    invoiceNumber: 'INV-2026-005',
    title: 'Monthly Tuition — Oct 2026',
    description: 'Child: Hassan Malik, Grade 6',
    amount: 18000,
    dueDate: '2026-10-20',
    status: 'paid',
    issuedAt: '2026-10-05T08:00:00.000Z',
    paidAt: '2026-10-18T10:00:00.000Z',
  },
  {
    id: '6',
    merchantId: 'merchant-1',
    clientId: 'client-5',
    clientName: 'Kamran Sheikh',
    invoiceNumber: 'INV-2026-006',
    title: 'Annual Registration Fee',
    amount: 25000,
    dueDate: '2026-10-20',
    status: 'pending',
    issuedAt: '2026-10-05T08:00:00.000Z',
  },
  {
    id: '7',
    merchantId: 'merchant-1',
    clientId: 'client-6',
    clientName: 'Nadia Hussain',
    invoiceNumber: 'INV-2026-007',
    title: 'Lab & Activity Charges — Q3',
    description: 'Child: Zara Hussain, Grade 4',
    amount: 4500,
    dueDate: '2026-08-31',
    status: 'cancelled',
    issuedAt: '2026-08-01T08:00:00.000Z',
  },
  {
    id: '8',
    merchantId: 'merchant-1',
    clientId: 'client-7',
    clientName: 'Tariq Mehmood',
    invoiceNumber: 'INV-2026-008',
    title: 'Transport Charges — Oct 2026',
    amount: 3200,
    dueDate: '2026-10-10',
    status: 'pending',
    issuedAt: '2026-10-01T08:00:00.000Z',
  },
];

globalThis._invoiceStore ??= structuredClone(SEED);

function getStore(): Invoice[] {
  return globalThis._invoiceStore!;
}

let _counter = SEED.length + 1;

// ─── Queries ────────────────────────────────────────────────────────────────

export function findAll(params: InvoiceListParams = {}) {
  const { page = 1, limit = 10, search = '', status } = params;

  let results = getStore();

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (inv) =>
        inv.invoiceNumber.toLowerCase().includes(q) ||
        inv.clientName.toLowerCase().includes(q) ||
        inv.title.toLowerCase().includes(q)
    );
  }

  if (status) {
    results = results.filter((inv) => inv.status === status);
  }

  const total = results.length;
  const totalPages = Math.ceil(total / limit);
  const data = results.slice((page - 1) * limit, page * limit);

  return { data, meta: { page, limit, total, totalPages } };
}

export function findById(id: string): Invoice | undefined {
  return getStore().find((inv) => inv.id === id);
}

// ─── Mutations ──────────────────────────────────────────────────────────────

export function create(input: CreateInvoiceInput): Invoice {
  const id = String(_counter++);
  const invoice: Invoice = {
    id,
    merchantId: 'merchant-1',
    clientId: input.clientId,
    clientName: `Client ${input.clientId}`,
    invoiceNumber: `INV-2026-${String(getStore().length + 1).padStart(3, '0')}`,
    title: input.title,
    description: input.description,
    amount: input.amount,
    dueDate: input.dueDate,
    status: 'pending',
    issuedAt: new Date().toISOString(),
  };
  getStore().push(invoice);
  return invoice;
}

export function update(id: string, input: UpdateInvoiceInput): Invoice | null {
  const store = getStore();
  const idx = store.findIndex((inv) => inv.id === id);
  if (idx === -1) return null;

  const current = store[idx];
  const updated: Invoice = {
    ...current,
    ...input,
    // Set paidAt when transitioning to 'paid'
    paidAt:
      input.status === 'paid' && current.status !== 'paid'
        ? new Date().toISOString()
        : current.paidAt,
  };
  store[idx] = updated;
  return updated;
}

export function cancel(id: string): Invoice | null {
  return update(id, { status: 'cancelled' });
}

export function setAttachment(id: string, url: string): Invoice | null {
  const store = getStore();
  const idx = store.findIndex((inv) => inv.id === id);
  if (idx === -1) return null;
  store[idx] = { ...store[idx], attachmentUrl: url };
  return store[idx];
}
