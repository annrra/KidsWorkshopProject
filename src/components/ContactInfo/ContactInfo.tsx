import React from 'react';
import styles from './ci.module.css';
import { getContactContent } from '@/lib/api';

const ContactInfo: React.FC = async () => {
  const contactData = await getContactContent();
  const contact = contactData?.pageBy;

  if (!contact) {
    return (
      <div className={styles.contact}>
        <p>Моля, опреснете страницата.</p>
      </div>
    );
  }

  return (
    <div className={styles.contact}>
      <h1>{contact.title}</h1>
      <div className={styles.info}
        dangerouslySetInnerHTML={{
          __html: contact.content ?? '',
        }}
      />
    </div>
  );

};

export default ContactInfo;
