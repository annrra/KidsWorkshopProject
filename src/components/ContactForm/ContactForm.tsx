"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './cf.module.css';
import classNames from 'classnames';

type FormData = {
  name: string;
  email: string;
  message: string;
  webSite: string;
  company: string;
  botField: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: '',
  webSite: '',
  company: '',
  botField: 'no',
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.target as HTMLFormElement);

    const webSiteValue = formData.get('webSite') as string;
    const companyValue = formData.get('company') as string;
    const botFieldValue = formData.get('botField') as string;
    if (webSiteValue.trim() !== '' || companyValue.trim() !== '' || botFieldValue !== 'no') {
      alert('Security Alert: Form Submission Blocked');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to submit form: HTTP status ${response.status}`);
      }

      const responseData = await response.json();
      setMessage(responseData.message);
      setFormData(initialFormData);
    } catch (err) {
      console.error(err);
      setMessage('Error, please try resubmitting the form');
    } finally {
      setSubmitting(false);
    }

  };

  return (
    <div className={styles['contact-form']}>
      <form onSubmit={handleSubmit} className={classNames({ loading: submitting })}>
        <div style={{ display: 'none' }}>
          <label htmlFor="webSite">Website</label>
          <input type="text" id="webSite" name="webSite" value={formData.webSite} onChange={handleChange} />
        </div>
        <div className={styles.row}>
          <input type="text" id="name" name="name" placeholder='Име' value={formData.name} onChange={handleChange} required />
        </div>
        <div className={styles.row}>
          <input type="email" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
        </div>
        <div className={styles.nevidim}>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div className={styles.row}>
          <textarea id="message" name="message" placeholder='Съобщение' value={formData.message} onChange={handleChange} required />
        </div>
        <div className={styles.nevidim}>
          <label htmlFor="botField">Fill</label>
          <input type="text" id="botField" name="botField" value={formData.botField} onChange={handleChange} />
        </div>
        <div className={classNames(styles.row, styles['row-submit'])}>
          <button type="submit">Изпрати</button>
        </div>
        <div className={styles.message}>{message}</div>
      </form>
    </div>
  );

};

export default ContactForm;
