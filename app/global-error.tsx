'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="bg">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', padding: '2rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
          <h1 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Грешка в приложението</h1>
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>
            Възникна неочаквана грешка. Моля, опреснете страницата или се върнете по-късно.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              border: '1px solid #333',
              borderRadius: '4px',
              background: 'transparent',
              fontSize: '1rem',
            }}
          >
            Опреснете страницата
          </button>
        </div>
      </body>
    </html>
  );
}
