"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './sn.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { getPrimaryMenu, getEvents, getPartyCards, getWorkshops } from '@/lib/api';
import { ToggleTheme } from '@/src/components/ToggleTheme';
import { SidePopup } from '@/src/components/_utils/SidePopup';
import type { MenuProps, EventProps, PostProps } from './types';

const SideNav: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [navState, setNavState] = useState(false);
  const [shift, setShift] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showToggle, setShowToggle] = useState(true);
  const [menu, setMenu] = useState<MenuProps[]>([]);
  const [events, setEvents] = useState([]);
  const [parties, setParties] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [sidePopupOpen, setSidePopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

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

  const fetchEventsData = async () => {
    try {
      const eventsData = await getEvents();
      const eventItems = eventsData.posts.nodes;

      setEvents(eventItems);
    } catch (error) {
      console.error('Error fetching events data:', error);
    }
  };

  const fetchPartiesData = async () => {
    try {
      const partiesData = await getPartyCards();
      const partyItems = partiesData.posts.nodes;

      setParties(partyItems);
    } catch (error) {
      console.error('Error fetching parties data:', error);
    }
  };

  const fetchWorkshopsData = async () => {
    try {
      const workshopsData = await getWorkshops();
      const workshopItems = workshopsData.posts.nodes;

      setWorkshops(workshopItems);
    } catch (error) {
      console.error('Error fetching parties data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (sidePopupOpen) {
      fetchEventsData();
      fetchPartiesData();
      fetchWorkshopsData();
    }
  }, [sidePopupOpen]);

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
    setSidePopupOpen(false);
  }

  useEffect(() => {
    if (navState) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }

    // Remove class when component unmounts
    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [navState]);

  const idleNav = () => {
    setNavState(false);
    setSidePopupOpen(false);
  };

  const eventsPopup = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, contentType: string) => {
    e.preventDefault();
    setPopupContent(contentType);
    setSidePopupOpen(true);
  };

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

  let headLine;

  if (popupContent === 'events') {
    headLine = 'какво се случва';
  } else if (popupContent === 'party') {
    headLine = 'видове парти';
  } else if (popupContent === 'blog') {
    headLine = 'работилничка';
  } else {
    headLine = 'какво се случва';
  }

  return (
    <section
      className={classNames(styles.sidenav, {
        [styles.hide]: !showToggle,
        [styles.shift]: shift
      })}
      data-nav={navState ? 'active' : 'idle'}
    >
      <ToggleTheme />
      <SidePopup open={sidePopupOpen} onClose={() => setSidePopupOpen(false)} headline={headLine}>
        <div className={styles.sidepop}>
          {popupContent === 'events' && (
            <>
              {events.map((event: EventProps, index: number) => {
                const status = (event.events.eventStatus) ? 'ново' : 'отминало';
                const href = `${event.uri}`;
                const eventCardImageNode = event.featuredImage?.node;
    
                return (
                  <div className={classNames(styles['list-item'], styles[`item-${index}`])} key={index}>
                    <div className={styles.status}>
                      <div className={classNames(styles['status-label'], {
                          [styles.new]: event.events.eventStatus
                        })}
                      >{status}</div>
                      {event.events.eventWhen && (
                        <div className={styles['status-date']}>{event.events.eventWhen}</div>
                      )}
                    </div>
                    {eventCardImageNode?.sourceUrl && (
                      <Link href={href} onClick={idleNav} title={event.title}>
                        <Image
                          src={ eventCardImageNode.sourceUrl as string }
                          alt={event.title}
                          className={styles['figure']}
                          priority
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </Link>
                    )}
                    <Link href={href} onClick={idleNav} title={event.title}>
                      <h3>{event.title}</h3>
                    </Link>
                    {event.excerpt ? (
                      <div className={styles['info']}
                        dangerouslySetInnerHTML={{
                          __html: event.excerpt,
                        }}
                      />
                    ) : null}
                  </div>
                );
              })}
            </>
          )}
          {popupContent === 'party' && (
            <>
              {parties.map((party: PostProps, index: number) => {
                const href = `/party${party.uri}`;
                const partyCardImageNode = party.featuredImage?.node;
    
                return (
                  <div className={classNames(styles['list-item'], styles[`item-${index}`])} key={index}>
                    {partyCardImageNode?.sourceUrl && (
                      <>
                        <Link href={href} onClick={idleNav} title={party.title}>
                          <Image
                            src={ partyCardImageNode.sourceUrl }
                            alt={party.title}
                            className={styles['figure']}
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </Link>
                        <Link href={href} onClick={idleNav} title={party.title}>
                          <h3>{party.title}</h3>
                        </Link>
                        {party.excerpt ? (
                          <div className={styles['info']}
                            dangerouslySetInnerHTML={{
                              __html: party.excerpt,
                            }}
                          />
                        ) : null}
                      </>
                    )}
                  </div>
                );
              })}
            </>
          )}
          {popupContent === 'blog' && (
            <>
              {workshops.map((workshop: PostProps, index: number) => {
                const href = `/blog${workshop.uri}`;
                const workshopImageNode = workshop.featuredImage?.node;
    
                return (
                  <div className={classNames(styles['list-item'], styles[`item-${index}`])} key={index}>
                    {workshopImageNode?.sourceUrl && (
                      <>
                        <Link href={href} onClick={idleNav} title={workshop.title}>
                          <Image
                            src={ workshopImageNode.sourceUrl }
                            alt={workshop.title}
                            className={styles['figure']}
                            priority
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </Link>
                        <Link href={href} onClick={idleNav} title={workshop.title}>
                          <h3>{workshop.title}</h3>
                        </Link>
                        {workshop.excerpt ? (
                          <div className={styles['info']}
                            dangerouslySetInnerHTML={{
                              __html: workshop.excerpt,
                            }}
                          />
                        ) : null}
                      </>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </SidePopup>
      <button className={styles['nav-toggle']} onClick={handleNav}>
        <svg
          className={styles.toggle}
          viewBox="0 0 166 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
                const title = item.label;
                const clickAction = (item.title === 'events' || item.title === 'party' || item.title === 'blog') 
                  ? (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => eventsPopup(e, item.title)
                  : idleNav;

                return (
                  <li className={classNames(styles['menu-item'], styles[`item-${index}`])} key={index}>
                    <Link href={item.url} onClick={clickAction} title={title}>
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
