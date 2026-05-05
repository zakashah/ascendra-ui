export type InvoiceStatus = 'pending' | 'paid' | 'overdue' | 'cancelled';

export interface Invoice {
  id: string;
  merchantId: string;
  clientId: string;
  clientName: string;
  invoiceNumber: string;
  title: string;
  description?: string;
  amount: number;
  dueDate: string;       // ISO date string — YYYY-MM-DD
  status: InvoiceStatus;
  issuedAt: string;      // ISO datetime string
  paidAt?: string;       // ISO datetime string — set when status becomes 'paid'
  attachmentUrl?: string;
}

export interface InvoiceListParams {
  page?: number;
  limit?: number;
  search?: string;
  status?: InvoiceStatus;
}

export interface CreateInvoiceInput {
  clientId: string;
  title: string;
  description?: string;
  amount: number;
  dueDate: string;
}

export interface UpdateInvoiceInput {
  title?: string;
  description?: string;
  amount?: number;
  dueDate?: string;
  status?: InvoiceStatus;
}
