"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './cf.module.css';
import classNames from "classnames";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botField: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.botField !== '') {
      return;
    }
    console.log(formData);
  };

  return (
    <div className={styles['contact-form']}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'none' }}>
          <label htmlFor="botField">Blank</label>
          <input type="text" id="botField" name="botField" value={formData.botField} onChange={handleChange} />
        </div>
        <div className={styles.row}>
          <input type="text" id="name" name="name" placeholder='Име' value={formData.name} onChange={handleChange} required />
        </div>
        <div className={styles.row}>
          <input type="email" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
        </div>
        <div className={styles.row}>
          <textarea id="message" name="message" placeholder='Съобщение' value={formData.message} onChange={handleChange} required />
        </div>
        <div className={classNames(styles.row, styles['row-submit'])}>
          <button type="submit">Изпрати</button>
        </div>
      </form>
    </div>
  );

};

export default ContactForm;
