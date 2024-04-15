import styles from "./contact.module.css";
import { SolarSystemPanel } from '@/src/components/SolarSystemPanel';
import { ContactInfo } from '@/src/components/ContactInfo';
import { ContactForm } from '@/src/components/ContactForm';

export default async function Contact() {

  return (
    <div className={styles.container}>
      <SolarSystemPanel />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
