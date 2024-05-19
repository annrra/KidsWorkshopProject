import React from 'react';
import styles from './sp.module.css';
import classNames from 'classnames';

type SidePopupProps = {
  children: string | React.ReactNode;
  headline?: string;
  open: boolean;
  onClose: () => void;
}

const SidePopup: React.FC<SidePopupProps> = ({
  children,
  headline,
  open = false,
  onClose
}: SidePopupProps) => {
  const handleClose = () => {
    onClose();
  }

  return (
    <div className={classNames(styles.overlay, { [styles['is-open']]: open })}>
      <div className={styles.pop}>
        <div className={styles.header}>
          <div className={styles.close} onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M9.22 17.28a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06l4.47 4.47-4.47 4.47a.75.75 0 0 0 0 1.06Z"
              />
            </svg>
          </div>
          {headline && (
            <div className={styles.headline}>{headline}</div>
          )}
        </div>
        <div className={styles.wrap}>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );

};

export default SidePopup;
