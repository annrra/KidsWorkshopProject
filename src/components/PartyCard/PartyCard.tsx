import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './pcs.module.css';
import classNames from 'classnames';

export type PartyCardProps = {
  title: string;
  uri: string;
  excerpt: string;
  image?: string;
  icon?: string;
  party?: {
    partycardIcon?: {
      node?: {
        sourceUrl: string;
        uri: string;
      }
    };
    partycardImage?: {
      node?: {
        sourceUrl: string;
        uri: string;
      }
    }

  };
};

const PartyCard = async ({ title, uri, excerpt, image, icon }: PartyCardProps) => {
  const mediaTag = classNames({
    [styles['has-icon']]: icon,
    [styles['has-image']]: image,
    [styles['plain']]: !icon && !image,
  });

  return (
    <Link href={uri} className={styles.link}>
      <div className={classNames(styles.card, mediaTag)}>
        <div className={styles.gist}>
          <h2 className={styles.heading}>{title}</h2>
          <div className={styles.excerpt}
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
        </div>

        {image ? (
          <div className={styles['image']}>
            <Image
              src={image}
              alt={title}
              className={styles['card-image']}
              priority
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        ) : null}

        {icon ? (
          <div className={styles['icon']}>
            <Image
              src={icon}
              alt={title}
              className={styles['card-icon']}
              priority
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        ) : null}

      </div>
    </Link>
  );

};

export default PartyCard;
