import styles from "./about.module.css";
import { Header } from '@/src/components/Header';
import { SideNav } from '@/src/components/SideNav';
import { Footer } from '@/src/components/Footer';
import { Apropos } from '@/src/components/Apropos';
import { ContextGallery } from '@/src/components/ContextGallery';
import { getAboutContent } from '@/lib/api';

export default async function About() {
  const galleryData = await getAboutContent();
  const gallery = galleryData.pageBy.gallery;

  return (
    <div className={styles.reactive}>
      <SideNav />
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.core}>
        <div className={styles.container}>
          <ContextGallery imageData={gallery} />
          <Apropos />
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
