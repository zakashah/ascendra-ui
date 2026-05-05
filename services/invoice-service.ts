import { api } from '@/lib/api';
import { apiClient } from '@/lib/api/client';
import {
  type CreateInvoiceInput,
  type Invoice,
  type InvoiceListParams,
  type UpdateInvoiceInput,
} from '@/types/invoice';
import { type ApiResponse, type PaginationMeta } from '@/lib/api/types';

export interface InvoiceListData {
  data: Invoice[];
  meta: PaginationMeta;
}

export const invoiceService = {
  async list(params?: InvoiceListParams) {
    const res = await api.get<Invoice[]>('/api/invoices', params as Record<string, unknown>);
    return res.data as ApiResponse<Invoice[]> & { meta: PaginationMeta };
  },

  async getById(id: string) {
    const res = await api.get<Invoice>(`/api/invoices/${id}`);
    return res.data;
  },

  async create(input: CreateInvoiceInput) {
    const res = await api.post<Invoice>('/api/invoices', input);
    return res.data;
  },

  async update(id: string, input: UpdateInvoiceInput) {
    const res = await api.put<Invoice>(`/api/invoices/${id}`, input);
    return res.data;
  },

  async cancel(id: string) {
    const res = await api.delete<Invoice>(`/api/invoices/${id}`);
    return res.data;
  },

  async uploadAttachment(id: string, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    // Pass FormData directly — axios sets multipart content-type with boundary automatically
    const res = await apiClient.post<ApiResponse<{ url: string; invoice: Invoice }>>(
      `/api/invoices/${id}/attachment`,
      formData
    );
    return res.data;
  },
};
