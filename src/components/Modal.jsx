import React, { useEffect } from 'react';
import styles from './styles.module.css';

const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles.Overlay} onClick={onClose}>
      <div className={styles.Modal}>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default Modal;