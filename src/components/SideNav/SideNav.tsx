"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './sn.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import { getPrimaryMenu } from '@/lib/api';

type MenuProps = {
  label: string;
  description: string;
  databaseId: number;
  url: string;
  uri: string;
};

const SideNav: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [navState, setNavState] = useState(false);
  const [shift, setShift] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showToggle, setShowToggle] = useState(true);
  const [menu, setMenu] = useState<MenuProps[]>([]);

  const blobRange = [
    `M-0.5 -0.5C54.8333 -0.5 110.167 -0.5 165.5 -0.5C165.5 54.8333 165.5 110.167 165.5 165.5C164.833 165.5 164.167 165.5 163.5 165.5C131 158 132.5 134 112 129.5C91.5 125 80.5 138.5 63.5 131.833C46.5 125.167 69.5 96 61.5 79.5C53.5 63 26.614 79.7023 18.0519 65C12.6181 55.6695 19 36 19 27.5C19 19 9.73667 8.89435 1.5 2C0.905578 1.53566 0.238911 1.36899 -0.5 1.5C-0.5 0.833333 -0.5 0.166667 -0.5 -0.5Z`,
    `M-0.5 -0.5C54.8333 -0.5 110.167 -0.5 165.5 -0.5C165.5 54.8333 165.5 110.167 165.5 165.5C164.833 165.5 164.167 165.5 163.5 165.5C138 140.5 119 151 104 144.5C89 138 100.5 118.167 83.5 111.5C66.5 104.833 49 116 41 99.5C33 83 46.5621 74.7023 38 60C32.5662 50.6695 9 44.5 5.5 36C2 27.5 9.73667 8.89435 1.5 2C0.905578 1.53566 0.238911 1.36899 -0.5 1.5C-0.5 0.833333 -0.5 0.166667 -0.5 -0.5Z`
  ];

  const pathVariants = {
    on: {
      d: blobRange[0]
    },
    off: {
      d: blobRange[1]
    }
  };

  const fetchData = async () => {
    try {
      const menuData = await getPrimaryMenu();
      const menu = menuData.menuItems.nodes;

      setMenu(menu);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const user = 'ivanova.denitza';
    const domain = 'gmail.com';
    setEmail(`${user}@${domain}`);

    const code = '+359 ';
    const number = '884 870 066';
    setPhone(`${code}${number}`);
  }, []);

  const handleNav = () => {
    setNavState(!navState);
    setShift(true);
    setTimeout(() => {
      setShift(false);
    }, 300);
  }

  const idleNav = () => {
    setNavState(false);
  }

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    setShowToggle(position <= 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={classNames(styles.sidenav, {
        [styles.hide]: !showToggle,
        [styles.shift]: shift
      })}
      data-nav={navState ? 'active' : 'idle'}
    >
      <button className={styles['nav-toggle']} onClick={handleNav}>
        <svg className={styles.toggle} width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            className={styles['toggle-path']}
            d="M-0.5 -0.5C54.8333 -0.5 110.167 -0.5 165.5 -0.5C165.5 54.8333 165.5 110.167 165.5 165.5C164.833 165.5 164.167 165.5 163.5 165.5C131 158 132.5 134 112 129.5C91.5 125 80.5 138.5 63.5 131.833C46.5 125.167 69.5 96 61.5 79.5C53.5 63 26.614 79.7023 18.0519 65C12.6181 55.6695 19 36 19 27.5C19 19 9.73667 8.89435 1.5 2C0.905578 1.53566 0.238911 1.36899 -0.5 1.5C-0.5 0.833333 -0.5 0.166667 -0.5 -0.5Z"
            variants={pathVariants}
            animate={navState ? 'off' : 'on'}
            transition={{
              ease: 'easeInOut',
              duration: 0.01
            }}
          />
        </svg>
        <span className={styles.beam}>
          <span className={styles.eyes}></span>
          <span className={styles.dash}></span>
          <span className={styles.smile}></span>
        </span>
      </button>
      <div className={styles.navigation} data-state={navState ? 'on' : 'off'}>
        <div className={styles['nav-roll']}>
          <div className={styles.menu}>
            <ul className={styles['menu-list']}>
              {menu.map((item: MenuProps, index: number) => {
                const [title, state] = (item.label === 'Начало' || item.url !== '/') 
                  ? [item.label, ''] 
                  : ['Under development', 'disable'];

                return (
                  <li className={classNames(styles['menu-item'], styles[`item-${index}`], styles[`${state}`])} key={index}>
                    <Link href={item.url} onClick={idleNav} title={title}>
                      <h3>{item.label}</h3>
                      <div className={`${styles['nav-subtitle']}`}>{item.description}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles['nav-footer']}>
          <div className={styles.findus}>
            <div className={styles.callus}>{phone}</div>
            <div className={styles.writeus}>{email}</div>
            <div className={styles.social}>
              <Link href="https://www.facebook.com/Alegriaworkshop/" className={`${styles['social-facebook']}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.fpath} d="M15.3985 10.3413H12.9665V8.69715C12.9665 8.00398 13.3062 7.32832 14.3955 7.32832H15.5011V5.17117C15.5011 5.17117 14.4978 5 13.5384 5C11.5356 5 10.2264 6.21352 10.2264 8.41031V10.3413H8V12.875H10.2264V19H12.9665V12.875H15.0096L15.3985 10.3413Z"></path>
                  <path className={styles.fpath} d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12Z"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default SideNav;
