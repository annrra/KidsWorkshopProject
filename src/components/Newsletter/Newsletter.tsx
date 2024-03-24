"use client";
import React, { FormEvent, useRef, useEffect, useState } from 'react';
import styles from './nl.module.css';
import { getNewsletterContent } from '@/lib/api'; 
import classNames from 'classnames';
 
type SuccessResponse = {
  email_address: string;
}

const Newsletter: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [input, setInput] = useState('');
  const [successMessage, setSuccessMessage] = useState<SuccessResponse | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const fetchData = async () => {
    try {
      const newsletterData = await getNewsletterContent();
      const newsletter = newsletterData.pageBy;
      const newsletterTitle = newsletter.title;
      const newsletterContent = newsletter.content;

      setTitle(newsletterTitle);
      setContent(newsletterContent);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = input;
    const button = buttonRef.current;

    if (!button) return;

    if (!email) {
      setErrorMessage('empty');
      setSuccessMessage(undefined);
      return;
    }

    if (!active) {
      setActive(true);
    }

    try {
      const res = await fetch('/api/addSubscription', {
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      const data = await res.json();

      if (data.error) {
        setErrorMessage('Hey, you are already subscribed!');
        setSuccessMessage(undefined);
      } else {
        setSuccessMessage(data.res);
        setErrorMessage('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('An error occurred while subscribing. Please try again.');
      setSuccessMessage(undefined);
    } finally {
      setTimeout(() => {
        setActive(false);
        setInput('');
      }, 500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  return (
    <section className={styles.nl}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.subheading}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <div className={classNames(styles['form-wrap'], { [styles.error]: errorMessage !== '' })}>
        <form className={classNames(styles.form, { [styles.active]: active })} onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={handleChange}
            className={styles.input}
            type="email"
            placeholder='email...'
          />
          <button ref={buttonRef} type="submit" className={styles.submit}>Subscribe</button>
        </form>
      </div>
      <div className={styles.feedback}>
        {(successMessage || errorMessage) && (
          <div className={styles.notice}>
            {successMessage ? (
              <p>Благодарим! Очаквайте новини от нас на {successMessage.email_address}!</p>
            ) : errorMessage === 'empty' ? (
              <p>Моля, въведете имейл!</p>
            ) : (
              <p>Вашият имейл вече е добавен в нашия бюлетин.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );

};

export default Newsletter;
