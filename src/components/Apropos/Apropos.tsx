import React from 'react';
import styles from './a.module.css';
import { getAboutContent } from '@/lib/api';

const Apropos: React.FC = async () => {
  const aboutData = await getAboutContent();
  const about = aboutData.pageBy.content;

  return (
    <section className={styles.apropos}>
      <div className={styles.about}
        dangerouslySetInnerHTML={{
          __html: about,
        }}
      />
    </section>
  );

};

export default Apropos;
