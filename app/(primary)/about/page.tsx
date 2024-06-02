import styles from './about.module.css';
import type { Metadata } from 'next';
import { Apropos } from '@/src/components/Apropos';
import { ContextGallery } from '@/src/components/ContextGallery';
import { getAboutContent } from '@/lib/api';

export const metadata: Metadata = {
  title: 'За шареното парти',
  description: 'Шареното парти представя много идеи за прекарване на смислено време за твоето дете. Различни видове рожден ден, работилници, хрумки и веселби.',
  metadataBase: new URL('https://sharenotoparty.com'),
};

export default async function About() {
  const galleryData = await getAboutContent();
  const gallery = galleryData.pageBy.gallery;

  return (
    <div className={styles.container}>
      <ContextGallery imageData={gallery} />
      <Apropos />
    </div>
  );
}
