'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className={styles.reactive} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Нещо се обърка</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary, #666)' }}>
          Временен проблем при зареждането. Моля, опитайте отново.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              border: '1px solid currentColor',
              borderRadius: '4px',
              background: 'transparent',
            }}
          >
            Опитайте отново
          </button>
          <Link href="/" style={{ padding: '0.5rem 1rem', border: '1px solid currentColor', borderRadius: '4px', textDecoration: 'none' }}>
            Начало
          </Link>
        </div>
      </div>
    </div>
  );
}
