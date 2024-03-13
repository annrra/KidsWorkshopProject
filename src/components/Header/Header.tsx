import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { metadata } from '@/app/layout';
import styles from './h.module.css';

const Header: React.FC = async () => {
  const logo = '/sharenko-logo.png';
  const altText = metadata.title || 'Sharenoto Party';

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={`${styles['logo-wrapper']}`}>
          <Link href="/" className={`${styles['logo-link']}`}>
            <Image
              src={logo}
              alt={String(altText)}
              className={`${styles['logo-figure']}`}
              priority
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
        </div>
      </div>
    </header>
  );

};

export default Header;
