import { type NextRequest } from 'next/server';

import * as store from '@/lib/mock/invoice-store';
import { type UpdateInvoiceInput } from '@/types/invoice';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
const mockDelay = () => delay(150 + Math.random() * 150);

// GET /api/invoices/:id
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await mockDelay();

  const { id } = await params;

  // Simulate server error for testing
  if (id === 'error') {
    return Response.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: 'Simulated server error.' } },
      { status: 500 }
    );
  }

  const invoice = store.findById(id);
  if (!invoice) {
    return Response.json(
      { success: false, error: { code: 'NOT_FOUND', message: `Invoice ${id} not found.` } },
      { status: 404 }
    );
  }

  return Response.json({ success: true, data: invoice });
}

// PUT /api/invoices/:id
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await mockDelay();

  const { id } = await params;
  const invoice = store.findById(id);

  if (!invoice) {
    return Response.json(
      { success: false, error: { code: 'NOT_FOUND', message: `Invoice ${id} not found.` } },
      { status: 404 }
    );
  }

  if (invoice.status === 'paid' || invoice.status === 'cancelled') {
    return Response.json(
      {
        success: false,
        error: {
          code: 'INVALID_STATE',
          message: `Cannot update an invoice with status '${invoice.status}'.`,
        },
      },
      { status: 409 }
    );
  }

  const body: UpdateInvoiceInput = await req.json().catch(() => ({}));
  const updated = store.update(id, body);

  return Response.json({ success: true, data: updated, message: 'Invoice updated.' });
}

// DELETE /api/invoices/:id  →  soft-cancel
export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await mockDelay();

  const { id } = await params;
  const invoice = store.findById(id);

  if (!invoice) {
    return Response.json(
      { success: false, error: { code: 'NOT_FOUND', message: `Invoice ${id} not found.` } },
      { status: 404 }
    );
  }

  if (invoice.status === 'paid' || invoice.status === 'cancelled') {
    return Response.json(
      {
        success: false,
        error: {
          code: 'INVALID_STATE',
          message: `Cannot cancel an invoice with status '${invoice.status}'.`,
        },
      },
      { status: 409 }
    );
  }

  const cancelled = store.cancel(id);
  return Response.json({ success: true, data: cancelled, message: 'Invoice cancelled.' });
}
