import React from 'react';
import Image from 'next/image';
import styles from './cg.module.css';

type ImageData = {
  [key: string]: {
    node: {
      sourceUrl: string;
    } | null;
  };
};

interface ImageProps {
  imageData: ImageData;
}

const ContextGallery: React.FC<ImageProps> = async ({imageData}) => {

  return (
    <section className={styles.gallery}>
      {Object.keys(imageData)
        .filter((key: string) => imageData[key] !== null)
        .map((key: string, index: number) => (
          <div className={styles.block} key={index}>
            {imageData[key]?.node?.sourceUrl && (
              <Image
                src={ imageData[key]?.node?.sourceUrl as string }
                alt=""
                className={styles['thumb']}
                priority
                width={0}
                height={0}
                sizes="100vw"
              />
            )}
          </div>
        ))}
    </section>
  );

};

export default ContextGallery;
