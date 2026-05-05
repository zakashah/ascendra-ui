import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseQueryOptions,
} from '@tanstack/react-query';

import { invoiceService } from '@/services/invoice-service';
import {
  type CreateInvoiceInput,
  type Invoice,
  type InvoiceListParams,
  type UpdateInvoiceInput,
} from '@/types/invoice';
import { type ApiResponse } from '@/lib/api/types';

// ─── Query Key Factory ───────────────────────────────────────────────────────

export const invoiceKeys = {
  all: ['invoices'] as const,
  lists: () => [...invoiceKeys.all, 'list'] as const,
  list: (params: InvoiceListParams) => [...invoiceKeys.lists(), params] as const,
  details: () => [...invoiceKeys.all, 'detail'] as const,
  detail: (id: string) => [...invoiceKeys.details(), id] as const,
};

// ─── Queries ─────────────────────────────────────────────────────────────────

export function useInvoiceList(
  params: InvoiceListParams = {},
  options?: Omit<UseQueryOptions<Awaited<ReturnType<typeof invoiceService.list>>>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: invoiceKeys.list(params),
    queryFn: () => invoiceService.list(params),
    ...options,
  });
}

export function useInvoice(
  id: string,
  options?: Omit<UseQueryOptions<ApiResponse<Invoice>>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: invoiceKeys.detail(id),
    queryFn: () => invoiceService.getById(id),
    enabled: !!id,
    ...options,
  });
}

// ─── Mutations ───────────────────────────────────────────────────────────────

export function useCreateInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateInvoiceInput) => invoiceService.create(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: invoiceKeys.lists() });
    },
  });
}

export function useUpdateInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UpdateInvoiceInput }) =>
      invoiceService.update(id, input),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: invoiceKeys.lists() });
      if (res.data) {
        queryClient.setQueryData(invoiceKeys.detail(res.data.id), res);
      }
    },
  });
}

export function useCancelInvoice() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => invoiceService.cancel(id),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: invoiceKeys.lists() });
      if (res.data) {
        queryClient.setQueryData(invoiceKeys.detail(res.data.id), res);
      }
    },
  });
}

export function useUploadAttachment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, file }: { id: string; file: File }) =>
      invoiceService.uploadAttachment(id, file),
    onSuccess: (res) => {
      if (res.data?.invoice) {
        queryClient.setQueryData(invoiceKeys.detail(res.data.invoice.id), {
          success: true,
          data: res.data.invoice,
        });
      }
    },
  });
}
