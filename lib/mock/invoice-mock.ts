export type InvoiceStatus = 'paid' | 'pending' | 'overdue' | 'cancelled';

export interface Invoice {
  id: string;
  merchantId: string;
  clientId: string;
  clientName: string;
  invoiceNumber: string;
  title: string;
  description?: string;
  amount: number;
  dueDate: string;
  status: InvoiceStatus;
  issuedAt: string;
  paidAt?: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface InvoiceListData {
  data: Invoice[];
  meta: PaginationMeta;
}

// ─── Dataset ──────────────────────────────────────────────────────────────────

const ALL_INVOICES: Invoice[] = [
  {
    id: '1', merchantId: 'm1', clientId: 'c1',
    invoiceNumber: 'INV-001', title: 'Tuition Fee — Term 1',
    clientName: 'Ahmed Khan', amount: 12000,
    dueDate: '2024-02-15', status: 'paid', issuedAt: '2024-01-15', paidAt: '2024-02-10',
  },
  {
    id: '2', merchantId: 'm1', clientId: 'c2',
    invoiceNumber: 'INV-002', title: 'Registration Fee',
    clientName: 'Sara Ali', amount: 8500,
    dueDate: '2024-02-20', status: 'pending', issuedAt: '2024-01-20',
  },
  {
    id: '3', merchantId: 'm1', clientId: 'c3',
    invoiceNumber: 'INV-003', title: 'Tuition Fee — Term 1',
    clientName: 'Usman Raza', amount: 15000,
    dueDate: '2024-01-30', status: 'overdue', issuedAt: '2024-01-01',
  },
  {
    id: '4', merchantId: 'm1', clientId: 'c4',
    invoiceNumber: 'INV-004', title: 'Transport Fee',
    clientName: 'Fatima Malik', amount: 9200,
    dueDate: '2024-02-28', status: 'paid', issuedAt: '2024-01-28', paidAt: '2024-02-25',
  },
  {
    id: '5', merchantId: 'm1', clientId: 'c5',
    invoiceNumber: 'INV-005', title: 'Activity & Lab Fee',
    clientName: 'Bilal Sheikh', amount: 22000,
    dueDate: '2024-02-10', status: 'cancelled', issuedAt: '2024-01-10',
    description: 'Cancelled due to student withdrawal.',
  },
  {
    id: '6', merchantId: 'm1', clientId: 'c6',
    invoiceNumber: 'INV-006', title: 'Uniform & Books',
    clientName: 'Ayesha Noor', amount: 5500,
    dueDate: '2024-03-01', status: 'pending', issuedAt: '2024-02-01',
  },
  {
    id: '7', merchantId: 'm1', clientId: 'c7',
    invoiceNumber: 'INV-007', title: 'Tuition Fee — Term 2',
    clientName: 'Hassan Tariq', amount: 18500,
    dueDate: '2024-01-25', status: 'overdue', issuedAt: '2023-12-25',
  },
  {
    id: '8', merchantId: 'm1', clientId: 'c8',
    invoiceNumber: 'INV-008', title: 'Exam Fee',
    clientName: 'Zara Qureshi', amount: 11000,
    dueDate: '2024-03-15', status: 'paid', issuedAt: '2024-02-15', paidAt: '2024-03-10',
  },
  {
    id: '9', merchantId: 'm1', clientId: 'c9',
    invoiceNumber: 'INV-009', title: 'Tuition Fee — Term 1',
    clientName: 'Kamran Mirza', amount: 62000,
    dueDate: '2024-02-05', status: 'paid', issuedAt: '2024-01-05', paidAt: '2024-02-03',
  },
  {
    id: '10', merchantId: 'm1', clientId: 'c10',
    invoiceNumber: 'INV-010', title: 'Lab Fee — Class 10',
    clientName: 'Nadia Hussain', amount: 4800,
    dueDate: '2024-03-20', status: 'pending', issuedAt: '2024-02-20',
  },
  {
    id: '11', merchantId: 'm1', clientId: 'c11',
    invoiceNumber: 'INV-011', title: 'Transport Fee',
    clientName: 'Tariq Mahmood', amount: 7200,
    dueDate: '2024-01-20', status: 'overdue', issuedAt: '2023-12-20',
  },
  {
    id: '12', merchantId: 'm1', clientId: 'c12',
    invoiceNumber: 'INV-012', title: 'Tuition Fee — Term 3',
    clientName: 'Sana Baig', amount: 15000,
    dueDate: '2024-04-01', status: 'pending', issuedAt: '2024-03-01',
  },
  {
    id: '13', merchantId: 'm1', clientId: 'c13',
    invoiceNumber: 'INV-013', title: 'Registration + Tuition',
    clientName: 'Imran Chaudhry', amount: 78000,
    dueDate: '2024-02-01', status: 'paid', issuedAt: '2024-01-02', paidAt: '2024-01-30',
  },
  {
    id: '14', merchantId: 'm1', clientId: 'c14',
    invoiceNumber: 'INV-014', title: 'Exam Preparatory Fee',
    clientName: 'Rabia Farooq', amount: 3200,
    dueDate: '2024-03-10', status: 'cancelled', issuedAt: '2024-02-10',
    description: 'Cancelled — duplicate invoice.',
  },
  {
    id: '15', merchantId: 'm1', clientId: 'c15',
    invoiceNumber: 'INV-015', title: 'Activity Fee — Q2',
    clientName: 'Omer Siddiqui', amount: 6500,
    dueDate: '2024-04-15', status: 'pending', issuedAt: '2024-03-15',
  },
];

// ─── Query-aware filters ───────────────────────────────────────────────────────

function filterByQuery(queryId: string): Invoice[] {
  switch (queryId) {
    case 'all-active':
      return ALL_INVOICES.filter((i) => i.status === 'pending' || i.status === 'overdue');
    case 'last-3-months': {
      const cutoff = new Date('2024-01-15');
      return ALL_INVOICES.filter((i) => new Date(i.issuedAt) >= cutoff);
    }
    case 'user-high-value':
      return ALL_INVOICES.filter((i) => i.amount >= 50000);
    case 'user-class-10':
      return ALL_INVOICES.filter((i) => i.title.toLowerCase().includes('class 10'));
    default:
      return ALL_INVOICES;
  }
}

function makeMeta(data: Invoice[]): PaginationMeta {
  return { page: 1, limit: data.length, total: data.length, totalPages: 1 };
}

// ─── Mock fetch ───────────────────────────────────────────────────────────────

const ERROR_RATE = 0.08;

function delay(ms: number) {
  return new Promise<void>((res) => setTimeout(res, ms));
}

export async function fetchMockInvoices(queryId: string): Promise<InvoiceListData> {
  await delay(700 + Math.random() * 600);

  if (Math.random() < ERROR_RATE) {
    throw new Error('Failed to load invoices. The mock service rolled a bad number.');
  }

  const data = filterByQuery(queryId);
  return { data, meta: makeMeta(data) };
}
