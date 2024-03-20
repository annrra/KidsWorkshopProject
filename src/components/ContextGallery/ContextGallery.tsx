"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './cg.module.css';
import { getAboutContent } from '@/lib/api';

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

const ContextGallery: React.FC = () => {
  const [gallery, setGallery] = useState<ImageData>({});

  const fetchData = async () => {
    try {
      const galleryData = await getAboutContent();
      const gallery = galleryData.pageBy.gallery;

      setGallery(gallery);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <section className={styles.gallery}>
      {Object.keys(gallery)
        .filter((key: string) => gallery[key] !== null)
        .map((key: string, index: number) => (
          <div className={styles.block} key={index}>
            {gallery[key]?.node?.sourceUrl && (
              <Image
                src={ gallery[key]?.node?.sourceUrl as string }
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
