import React from 'react';
import { getPrimaryMenu, getEvents, getPartyCards, getWorkshops } from '@/lib/api';
import SideNavClient from './SideNavClient';
import type { MenuProps, EventProps, PostProps } from './types';

const SideNavServer: React.FC = async () => {
  let menu: MenuProps[] = [];
  let events: EventProps[] = [];
  let partyItems: PostProps[] = [];
  let workshopItems: PostProps[] = [];

  try {
    const menuData = await getPrimaryMenu();
    menu = menuData?.menuItems?.nodes ?? [];

    const eventsData = await getEvents();
    events = eventsData?.posts?.nodes ?? [];

    const partiesData = await getPartyCards();
    partyItems = partiesData?.posts?.nodes ?? [];

    const workshopsData = await getWorkshops();
    workshopItems = workshopsData?.posts?.nodes ?? [];
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return <SideNavClient menu={menu} events={events} parties={partyItems} workshops={workshopItems} />;
};

export default SideNavServer;
