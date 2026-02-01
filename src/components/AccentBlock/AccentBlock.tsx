import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ab.module.css';
import { getAccentContent } from '@/lib/api';
import classNames from 'classnames';

const AccentBlock: React.FC = async () => {
  const badge = '/badge.svg';
  const accentData = await getAccentContent();
  const accent = accentData?.posts?.nodes?.[0];

  let accentTitle, accentHeading, accentSubHeading, accentExcerpt, accentUri, accentButton, accentDate, accentUrl, accentPromoLink, accentVideo, accentImageSourceUrl;

  if (accent) {
    accentTitle = accent.title;
    accentHeading = accent.accent?.accentHeading1;
    accentSubHeading = accent.accent?.accentHeading2;
    accentExcerpt = accent.excerpt;
    accentUri = accent.uri;
    accentButton = accent.accent?.accentButton;
    accentDate = accent.accent?.accentDate;
    accentUrl = accent.accent?.accentUrl?.nodes?.[0]?.uri;
    accentPromoLink = accent.accent?.accentPromoLink?.nodes?.[0]?.uri;
    accentVideo = accent.accent?.accentVideo;
    accentImageSourceUrl = accent.featuredImage?.node?.sourceUrl;
  } else {
    console.error('Accent post/s not found.');
  }

  if (!accentHeading || !accentSubHeading || !accentImageSourceUrl) {
    return (
      <section className={styles.hero} aria-hidden="true">
        <div className={classNames(styles.flex, styles.cl2)}>
          <p>Моля, опреснете страницата.</p>
        </div>
      </section>
    );
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
                <svg viewBox="0 0 242 253" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="daisy">
                    <path className={styles.bloom} d="M134.898 107.564C143.395 97.7081 154.004 84.0766 162.482 68.9422C179.461 38.6346 168.053 4.64948 149.701 0.950755C131.35 -2.74797 108.397 20.8078 107.201 55.5393C106.595 73.1262 109.88 90.3358 113.271 103.041C118.454 101.363 124.26 101.572 129.581 104.07C131.561 104.999 133.34 106.183 134.898 107.564Z"/>
                    <path className={styles.bloom} d="M141.57 130.187C143.748 122.394 141.471 114.101 135.894 108.503C144.841 99.1179 157.34 87.7949 172.04 79.3543C202.178 62.0502 234.297 69.1244 240.835 86.6665C247.373 104.209 224.518 131.827 189.814 133.389C172.084 134.187 154.515 132.261 141.57 130.187Z"/>
                    <path className={styles.bloom} d="M127.334 145.276C132.839 143.39 137.603 139.361 140.271 133.677C140.725 132.71 141.103 131.728 141.408 130.736C154.306 133.942 171.563 139.56 187.133 149.011C216.84 167.043 226.159 198.584 213.956 212.781C201.753 226.979 166.531 220.305 148.402 190.671C138.733 174.867 131.748 157.781 127.334 145.276Z"/>
                    <path className={styles.bloom} d="M108.072 142.936C108.893 143.463 109.757 143.942 110.664 144.368C115.816 146.786 121.424 147.059 126.479 145.55C130.235 158.501 134.407 177.665 133.731 197.299C132.535 232.03 109.583 255.586 91.2308 251.887C72.879 248.189 61.4712 214.203 78.4499 183.896C87.6208 167.525 99.2842 152.913 108.072 142.936Z"/>
                    <path className={styles.bloom} d="M98.2478 120.074C96.6983 128.22 99.8489 136.638 106.411 141.758C97.4424 151.209 84.82 162.703 69.9427 171.245C39.805 188.549 7.68581 181.475 1.14785 163.933C-5.39012 146.391 17.465 118.773 52.1693 117.21C68.9287 116.456 85.5449 118.135 98.2478 120.074Z"/>
                    <path className={styles.bloom} d="M98.515 118.857C85.5979 115.658 68.254 110.032 52.6118 100.538C22.9041 82.5056 13.5857 50.9642 25.7885 36.767C37.9912 22.5697 73.2131 29.2436 91.3425 58.8773C100.801 74.3378 107.691 91.0242 112.118 103.449C106.95 105.44 102.513 109.351 99.9734 114.76C99.3441 116.101 98.8601 117.473 98.515 118.857Z"/>
                  </g>
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
