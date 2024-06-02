import styles from './contact.module.css';
import type { Metadata } from 'next';
import { SolarSystemPanel } from '@/src/components/SolarSystemPanel';
import { ContactInfo } from '@/src/components/ContactInfo';
import { ContactForm } from '@/src/components/ContactForm';

export const metadata: Metadata = {
  title: 'Намерете ни',
  description: 'Свържете се с нас, за да изберем най-подходящия начин да превърнем детския рожден ден в наистина незабравимо преживяване.',
  metadataBase: new URL('https://sharenotoparty.com'),
};

export default async function Contact() {

  return (
    <div className={styles.container}>
      <SolarSystemPanel />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
