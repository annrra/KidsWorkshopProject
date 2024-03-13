"use client";
import React, { useEffect, useState } from 'react';
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showToggle, setShowToggle] = useState(true);
  const [menu, setMenu] = useState<MenuProps[]>([]);

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
    <section className={classNames(styles.sidenav, { [styles.hide]: !showToggle })} data-nav={navState ? 'active' : 'idle'}>
      <button className={styles['nav-toggle']} onClick={handleNav}>
        <svg className={styles.toggle} xmlns="http://www.w3.org/2000/svg" version="1.1" width="166px" height="166px">
          <g><path className={styles['toggle-path']} d="M -0.5,-0.5 C 54.8333,-0.5 110.167,-0.5 165.5,-0.5C 165.5,54.8333 165.5,110.167 165.5,165.5C 164.833,165.5 164.167,165.5 163.5,165.5C 146.707,157.222 132.373,145.722 120.5,131C 115.987,127.884 110.987,126.051 105.5,125.5C 94.8512,127.995 84.1845,130.495 73.5,133C 65.3478,135.113 61.0145,132.113 60.5,124C 62.2676,113.095 64.4343,102.261 67,91.5C 67.8098,86.7426 67.4764,82.0759 66,77.5C 64.2691,75.3834 62.1024,73.8834 59.5,73C 48.1931,71.8256 36.8597,70.8256 25.5,70C 19.5298,68.585 16.5298,64.7517 16.5,58.5C 19.0334,48.2971 19.8667,37.9637 19,27.5C 15.57,17.3944 9.73667,8.89435 1.5,2C 0.905578,1.53566 0.238911,1.36899 -0.5,1.5C -0.5,0.833333 -0.5,0.166667 -0.5,-0.5 Z"/></g>
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

                return (
                  <li className={classNames(styles['menu-item'], styles[`item-${index}`])} key={index}>
                    <Link href={item.url} onClick={idleNav} title="Under development">
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
