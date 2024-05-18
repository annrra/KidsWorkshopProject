import React from 'react';
import styles from './pd.module.css';
import classNames from 'classnames';

interface DetailsProps {
  info: string;
}

const PartyDetails: React.FC<DetailsProps> = async ({info}) => {

  return (
    <section className={classNames(styles['closure'])}>
      <div className={styles['data-info']}
        dangerouslySetInnerHTML={{
          __html: info,
        }}
      />
    </section>
  );

};

export default PartyDetails;
