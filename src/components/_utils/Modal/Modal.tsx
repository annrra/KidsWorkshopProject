import React from 'react';
import styles from './m.module.css';
import classNames from 'classnames';

type ModalProps = {
  children: string | React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  open = false,
  onClose
}: ModalProps) => {
  const handleClose = () => {
    onClose();
  }

  return (
    <div className={classNames(styles.modal, { [styles['is-open']]: open })}>
      <div className={styles.overlay}>
        <div className={styles.pop}>
          <div className={styles.close} onClick={handleClose}></div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );

};

export default Modal;
