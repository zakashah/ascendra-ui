import { type NextRequest } from 'next/server';

import * as store from '@/lib/mock/invoice-store';

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
const mockDelay = () => delay(300 + Math.random() * 300); // slightly longer for upload feel

// POST /api/invoices/:id/attachment
// Expects multipart/form-data with a 'file' field
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  await mockDelay();

  const { id } = await params;
  const invoice = store.findById(id);

  if (!invoice) {
    return Response.json(
      { success: false, error: { code: 'NOT_FOUND', message: `Invoice ${id} not found.` } },
      { status: 404 }
    );
  }

  const formData = await req.formData().catch(() => null);
  const file = formData?.get('file') as File | null;

  if (!file) {
    return Response.json(
      { success: false, error: { code: 'VALIDATION_ERROR', message: 'No file provided.', details: { file: ['File is required.'] } } },
      { status: 422 }
    );
  }

  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
  if (!allowedTypes.includes(file.type)) {
    return Response.json(
      { success: false, error: { code: 'VALIDATION_ERROR', message: 'Unsupported file type. Allowed: JPEG, PNG, WebP, PDF.', details: { file: ['Invalid file type.'] } } },
      { status: 422 }
    );
  }

  // Mock: generate a fake CDN URL instead of actually storing the file
  const ext = file.name.split('.').pop() ?? 'bin';
  const mockUrl = `https://cdn.mock.ascendra.io/attachments/${id}-${Date.now()}.${ext}`;

  const updated = store.setAttachment(id, mockUrl);

  return Response.json(
    { success: true, data: { url: mockUrl, invoice: updated }, message: 'Attachment uploaded.' },
    { status: 201 }
  );
}
