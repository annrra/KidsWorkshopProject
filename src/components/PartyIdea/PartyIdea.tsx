import React from 'react';
import Image from 'next/image';
import styles from './pi.module.css';
import classNames from 'classnames';

type ImageData = {
  node: {
    sourceUrl: string;
  } | null;
};

interface IdeaProps {
  title: string;
  info?: string;
  figure?: ImageData;
  icon?: ImageData;
  reverse?: boolean;
  invert?: boolean;
}

const PartyIdea: React.FC<IdeaProps> = async ({title, info, figure, icon, reverse = false, invert = false}) => {

  return (
    <section className={classNames(styles['figurative'])}>
      <div className={classNames(styles['embody'], {
        [styles.reverse]: reverse,
        [styles.invert]: invert,
      })}>
        <div className={classNames(styles.data, styles['embody-col'])}>
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
          <h2 className={styles['data-title']}>{title}</h2>
          {info ? (
            <div className={styles['data-info']}
              dangerouslySetInnerHTML={{
                __html: info,
              }}
            />
          ) : null}
        </div>
        <div className={classNames(styles['figure-wrap'], styles['embody-col'])}>
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
        </div>
      </div>
    </section>
  );

};

export default PartyIdea;
