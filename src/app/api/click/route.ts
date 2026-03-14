import { NextRequest, NextResponse } from 'next/server';
import { getClickRedirectUrl } from '@/lib/partner-url';

export const runtime = 'edge';

function generateClickId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return `clk_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') ?? 'unknown';
  const lang = searchParams.get('lang') ?? 'unknown';
  const device = searchParams.get('device') ?? 'desktop';
  const clickId = searchParams.get('click_id') ?? generateClickId();

  // Log for analytics / future DB
  const payload = {
    click_id: clickId,
    page,
    lang,
    device,
    ts: new Date().toISOString(),
  };

  // TODO: persist to DB (e.g. Vercel KV, Postgres)
  if (process.env.NODE_ENV === 'development') {
    console.log('[click]', JSON.stringify(payload));
  }

  const subid = searchParams.get('subid') ?? `seo_${page}`;
  const redirectUrl = getClickRedirectUrl(clickId, subid);
  return NextResponse.redirect(redirectUrl, 302);
}

export async function POST(request: NextRequest) {
  let body: { page?: string; lang?: string; device?: string; subid?: string } = {};
  try {
    body = await request.json();
  } catch {
    // ignore
  }
  const clickId = generateClickId();
  const page = body.page ?? 'unknown';
  const lang = body.lang ?? 'unknown';
  const device = body.device ?? 'desktop';

  const payload = {
    click_id: clickId,
    page,
    lang,
    device,
    ts: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('[click]', JSON.stringify(payload));
  }

  const subid = body.subid ?? `seo_${page}`;
  const redirectUrl = getClickRedirectUrl(clickId, subid);
  return NextResponse.json({ redirect: redirectUrl, click_id: clickId });
}
