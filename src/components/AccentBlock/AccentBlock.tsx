import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ab.module.css';
import { getAccentContent } from '@/lib/api';
import classNames from 'classnames';

const AccentBlock: React.FC = async () => {
  const badge = '/badge.svg';
  const accentData = await getAccentContent();
  const accent = accentData.posts.nodes[0];

  let accentTitle, accentHeading, accentSubHeading, accentExcerpt, accentUri, accentButton, accentDate, accentUrl, accentVideo, accentImageSourceUrl;

  if (accent) {
    accentTitle = accent.title;
    accentHeading = accent.accent.accentHeading1;
    accentSubHeading = accent.accent.accentHeading2;
    accentExcerpt = accent.excerpt;
    accentUri = accent.uri;
    accentButton = accent.accent.accentButton;
    accentDate = accent.accent.accentDate;
    accentUrl = accent.accent.accentUrl;
    accentVideo = accent.accent.accentVideo;
    accentImageSourceUrl = accent.featuredImage.node.sourceUrl;
  } else {
    console.error('Accent post/s not found.');
  }

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${accentImageSourceUrl})` }}>
      <div className={classNames(styles.flex, styles.cl2)}>
        <div className={styles.figure}>
          <div className={styles.badge}>
            <Image
              src={badge}
              alt=""
              className={styles['badge-stamp']}
              priority
              width={0}
              height={0}
              sizes="100vw"
            />
            <span className={styles['accent-badge-data']}>{accentDate}</span>
          </div>
        </div>
        <div className={styles.story}>
          <div className={styles.title}>
            <h1 className={styles.headline}>{accentHeading}</h1>
          </div>
          <div className={styles.subtitle}>
            <h2 className={styles.headline}>{accentSubHeading}</h2>
          </div>
          <Link href={accentUri} className={`${styles['accent-link']}`}>
            {accentButton}
          </Link>
        </div>
      </div>
    </section>
  );

};

export default AccentBlock;
