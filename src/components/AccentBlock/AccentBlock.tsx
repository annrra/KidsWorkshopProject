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
            <span className={styles['accent-badge-data']}>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="221.000000pt" height="221.000000pt" viewBox="0 0 221.000000 221.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,221.000000) scale(0.100000,-0.100000)" fill="#f0eef0" stroke="none">
                <path d="M435 2129 c-151 -34 -291 -154 -346 -297 -27 -71 -36 -203 -19 -281
                26 -117 102 -227 203 -294 83 -55 162 -77 301 -84 106 -5 126 -9 159 -31 20
                -14 37 -28 37 -33 0 -4 -20 -22 -44 -39 -43 -29 -48 -30 -154 -30 -131 0 -209
                -20 -298 -78 -274 -177 -288 -585 -27 -784 84 -63 157 -89 269 -95 148 -9 264
                35 370 141 159 159 186 395 69 590 -20 33 -32 62 -27 65 69 45 1222 886 1222
                892 0 15 -85 70 -125 80 -68 19 -173 6 -242 -28 -33 -17 -197 -129 -364 -250
                -167 -121 -327 -237 -356 -257 l-52 -37 -38 27 c-21 15 -42 31 -46 34 -4 4 8
                33 28 66 52 85 69 153 68 259 -1 180 -92 331 -250 417 -95 52 -231 71 -338 47z
                m217 -217 c102 -45 158 -124 166 -233 6 -86 -14 -145 -72 -207 -52 -57 -106
                -84 -182 -90 -188 -15 -338 156 -294 337 41 171 224 264 382 193z m423 -747
                c47 -46 19 -118 -45 -118 -66 0 -95 82 -44 122 35 27 59 26 89 -4z m-442 -341
                c65 -22 139 -91 167 -156 18 -43 22 -65 18 -124 -6 -84 -35 -142 -98 -197
                -167 -143 -434 -33 -457 187 -20 198 180 355 370 290z"/>
                <path d="M1191 979 c-92 -67 -110 -84 -99 -94 20 -20 566 -414 631 -456 118
                -76 243 -93 341 -45 59 29 95 62 80 75 -19 17 -819 594 -829 597 -6 3 -62 -32
                -124 -77z"/>
                </g>
              </svg>
            </span>
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
