import { type NextRequest } from 'next/server';

import * as store from '@/lib/mock/invoice-store';
import { type InvoiceListParams, type InvoiceStatus } from '@/types/invoice';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
const mockDelay = () => delay(1500 + Math.random() * 1500);

// GET /api/invoices?page=&limit=&search=&status=
export async function GET(req: NextRequest) {
  await mockDelay();

  const { searchParams } = req.nextUrl;
  const search = searchParams.get('search') ?? '';

  // Simulate server error for testing the error state
  if (search === '__error__') {
    return Response.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: 'Simulated server error.' } },
      { status: 500 }
    );
  }

  const params: InvoiceListParams = {
    page: Number(searchParams.get('page') ?? 1),
    limit: Number(searchParams.get('limit') ?? 10),
    search,
    status: (searchParams.get('status') as InvoiceStatus) || undefined,
  };

  const { data, meta } = store.findAll(params);

  return Response.json({ success: true, data, meta });
}

// POST /api/invoices
export async function POST(req: NextRequest) {
  await mockDelay();

  const body = await req.json().catch(() => null);

  if (!body?.clientId || !body?.title || !body?.amount || !body?.dueDate) {
    return Response.json(
      {
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Missing required fields.',
          details: {
            ...(body?.clientId == null && { clientId: ['Client is required.'] }),
            ...(body?.title == null && { title: ['Title is required.'] }),
            ...(body?.amount == null && { amount: ['Amount is required.'] }),
            ...(body?.dueDate == null && { dueDate: ['Due date is required.'] }),
          },
        },
      },
      { status: 422 }
    );
  }

  const invoice = store.create(body);
  return Response.json({ success: true, data: invoice, message: 'Invoice created.' }, { status: 201 });
}
