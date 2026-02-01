import React from 'react';
import styles from './pc.module.css';
import { getPartyCards } from '@/lib/api';
import { PartyCard, PartyCardProps } from '@/src/components/PartyCard';
import classNames from 'classnames';
import Link from 'next/link';

const PartyCards: React.FC = async () => {
  const cardsData = await getPartyCards();
  const cardsList = cardsData?.posts?.nodes ?? [];
  const cards = cardsList.slice(0, 3);

  return (
    <section className={styles.cards}>
      {cards.map((card: PartyCardProps, index: number) => {

        return (
          <div className={classNames(styles.card, styles[`card-${index}`])} key={index}>
            <PartyCard
              key={index}
              title={card.title}
              uri={card.uri}
              excerpt={card.excerpt}
              icon={card.party?.partycardIcon?.node?.sourceUrl}
              image={card.party?.partycardImage?.node?.sourceUrl}
            />
          </div>
        );
      })}
      <Link href={'/'} className={styles['more-link']}>
        <div className={styles.more}>+</div>
      </Link>
    </section>
  );

};

export default PartyCards;
