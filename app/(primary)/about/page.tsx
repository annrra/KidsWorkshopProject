import styles from "./about.module.css";
import { Apropos } from '@/src/components/Apropos';
import { ContextGallery } from '@/src/components/ContextGallery';
import { getAboutContent } from '@/lib/api';

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
