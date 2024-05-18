import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ph.module.css';
import classNames from 'classnames';

type ImageData = {
  node: {
    sourceUrl: string;
  } | null;
};

interface HeroProps {
  title: string;
  info?: string;
  figure?: ImageData;
  icon?: ImageData;
  actionButton?: string;
  actionUrl?: string;
}

const PartyHero: React.FC<HeroProps> = async ({title, info, figure, icon, actionButton, actionUrl}) => {

  return (
    <section className={classNames(styles.hero)}>
      <div className={styles['hero-grid']}>
        <div className={classNames(styles['figure-col'], styles['hero-col'])}>
          <div className={styles['hero-figure']}>
            {figure?.node?.sourceUrl && (
              <Image
                src={ figure?.node?.sourceUrl as string }
                alt=""
                className={styles['figure']}
                priority
                width={0}
                height={0}
                sizes="100vw"
              />
            )}
            {icon?.node?.sourceUrl && (
              <div className={styles['icon-wrap']}>
                <Image
                  src={ icon?.node?.sourceUrl as string }
                  alt=""
                  className={styles['icon']}
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            )}
          </div>
        </div>
        <div className={classNames(styles.data, styles['hero-col'])}>
          <h1 className={styles['data-title']}>{title}</h1>
          {info ? (
            <div className={styles['data-info']}
              dangerouslySetInnerHTML={{
                __html: info,
              }}
            />
          ) : null}
          {actionButton && actionUrl ? (
            <Link href={actionUrl} className={`${styles['action-link']}`}>
              {actionButton}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );

};

export default PartyHero;
