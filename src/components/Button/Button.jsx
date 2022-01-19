import React from 'react';
import styles from './Button.module.scss';

export const Button = ({children, width}) => {
  return (
    <button
      className={styles.button} 
      style={{width: `${width}`}}
    >
      {children}
    </button>
  )
}
