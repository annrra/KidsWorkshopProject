import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './f.module.css';

const user = 'ivanova.denitza';
const domain = 'gmail.com';
const email = `${user}@${domain}`;

const MailtoLink: React.FC<{ email: string }> = ({ email }) => {
  return (
    <a href={`mailto:${email}`} className={styles.mailme}>
      {email}
    </a>
  );
};

const Footer: React.FC = async () => {
  const button = '/button.png';
  const metaTitle = 'Шареното парти';
  const metaDescription = 'Различното парти за твоето дете';

  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.container, styles.curv)}>
        <div className={classNames(styles.flex, styles.repulse)}>
          <div className={styles.flex}>
            <Image
              src={button}
              alt={metaTitle}
              className={`${styles['button-figure']}`}
              priority
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className={styles.right}>
              <div>{metaTitle}</div>
              <div>{metaDescription}</div>
            </div>
          </div>
          <div className={classNames(styles.flex, styles['footer-uncover'])}>
            <span className={styles.pl}>+359 884 870 066</span>
            <span className={styles.pl}><MailtoLink email={email} /></span>
            <span className={styles.pl}>
              <Link href="https://www.facebook.com/Alegriaworkshop/" className={`${styles['footer-follow-facebook']}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.fpath} d="M15.3985 10.3413H12.9665V8.69715C12.9665 8.00398 13.3062 7.32832 14.3955 7.32832H15.5011V5.17117C15.5011 5.17117 14.4978 5 13.5384 5C11.5356 5 10.2264 6.21352 10.2264 8.41031V10.3413H8V12.875H10.2264V19H12.9665V12.875H15.0096L15.3985 10.3413Z"/>
                  <path className={styles.fpath} d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12Z"/>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );

};

export default Footer;
