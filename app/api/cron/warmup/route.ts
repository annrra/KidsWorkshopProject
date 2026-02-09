import { NextResponse } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  if (!API_URL) {
    return NextResponse.json(
      { ok: false, error: 'API_URL not defined' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query Warmup {
            posts(first: 1) {
              nodes {
                id
              }
            }
          }
        `,
      }),
      // IMPORTANT: do NOT cache this
      cache: 'no-store',
    });

    return NextResponse.json({
      ok: res.ok,
      status: res.status,
      time: new Date().toISOString(),
    });
  } catch (err) {
    console.error('[cron] warmup failed', err);
    return NextResponse.json(
      { ok: false, error: 'fetch failed' },
      { status: 500 }
    );
  }
}
