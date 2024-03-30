import React from 'react';
import Link from 'next/link';
import { metadata } from '@/app/layout';
import styles from './h.module.css';
import SharenotoSvg from './SharenotoSvg';

const Header: React.FC = async () => {
  const altText = metadata.title || 'Sharenoto Party';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={`${styles['logo-wrapper']}`}>
          <Link href="/" className={`${styles['logo-link']}`}>
            <SharenotoSvg />
          </Link>
        </div>
      </div>
    </header>
  );

};

export default Header;
