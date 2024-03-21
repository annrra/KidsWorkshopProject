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

  let accentTitle, accentHeading, accentSubHeading, accentExcerpt, accentUri, accentButton, accentDate, accentUrl, accentPromoLink, accentVideo, accentImageSourceUrl;

  if (accent) {
    accentTitle = accent.title;
    accentHeading = accent.accent.accentHeading1;
    accentSubHeading = accent.accent.accentHeading2;
    accentExcerpt = accent.excerpt;
    accentUri = accent.uri;
    accentButton = accent.accent.accentButton;
    accentDate = accent.accent.accentDate;
    accentUrl = accent.accent.accentUrl?.nodes[0]?.uri;
    accentPromoLink = accent.accent.accentPromoLink?.nodes[0]?.uri;
    accentVideo = accent.accent.accentVideo;
    accentImageSourceUrl = accent.featuredImage.node.sourceUrl;
  } else {
    console.error('Accent post/s not found.');
  }

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${accentImageSourceUrl})` }}>
      <div className={classNames(styles.flex, styles.cl2)}>
        <div className={styles.figure}>
          <Link href={accentPromoLink} className={`${styles['accent-promo']}`}>
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
              <span className={styles['accent-badge-data']}>
                <svg viewBox="0 0 264 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.bloom} fillRule="evenodd" clipRule="evenodd" d="M109.676 0.721728C121.77 -1.6961 131.37 1.96095 138.476 11.6932C145.193 28.506 149.765 45.8774 152.19 63.8074C162.707 37.2815 181.449 19.9102 208.419 11.6932C223.905 12.9911 230.762 21.2196 228.99 36.3789C221.804 53.9705 212.205 69.9706 200.19 84.3789C224.259 81.4306 244.83 88.2877 261.904 104.95C264.658 114.53 263.287 123.216 257.79 131.007C239.41 136.66 221.124 139.403 202.933 139.236C221.195 151.539 234.909 167.539 244.076 187.236C243.099 195.98 238.527 201.924 230.361 205.065C206.758 207.676 187.101 199.905 171.39 181.75C171.791 196.354 171.791 210.981 171.39 225.636C169.717 245.552 159.203 252.409 139.847 246.207C135.923 244.932 132.723 242.644 130.247 239.35C122.019 224.72 116.533 209.176 113.79 192.722C104.973 206.112 93.5447 216.626 79.5043 224.265C58.4669 229.674 47.9527 221.903 47.9614 200.95C54.306 186.433 62.0773 172.719 71.2757 159.807C70.3615 158.893 69.4471 157.979 68.5329 157.065C52.7444 164.22 36.2873 166.506 19.1614 163.922C-0.423925 156.993 -4.99517 144.65 5.44716 126.893C24.1757 115.464 44.2901 107.236 65.79 102.207C55.5378 92.4196 46.852 81.4481 39.7329 69.2932C33.7266 56.8743 34.6408 44.9884 42.4757 33.636C48.6282 28.7482 55.4854 27.3768 63.0472 29.5217C75.1593 36.1367 85.6735 44.8222 94.59 55.5789C89.4647 34.4682 94.4932 16.1824 109.676 0.721728ZM126.133 93.9789C161.127 93.7482 173.47 110.205 163.161 143.35C142.764 165.18 123.564 164.266 105.561 140.607C99.1953 118.635 106.052 103.092 126.133 93.9789Z"/>
                </svg>
              </span>
            </div>
          </Link>
        </div>
        <div className={styles.story}>
          <div className={styles.title}>
            <h1 className={styles.headline}>{accentHeading}</h1>
          </div>
          <div className={styles.subtitle}>
            <h2 className={styles.headline}>{accentSubHeading}</h2>
          </div>
          <Link href={accentUrl} className={`${styles['accent-link']}`}>
            {accentButton}
          </Link>
        </div>
      </div>
    </section>
  );

};

export default AccentBlock;
