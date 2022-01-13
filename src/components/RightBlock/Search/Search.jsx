import React from 'react';
import styles from './Search.module.scss';

export const Search = () => {
  return (
    <div className={styles.search}>
      <h4>Evgeny blog</h4>
      <div className={styles.iconWrapper}>
        <img src="/images/search.png" alt="search" />
        <img src="/images/user.png" alt="profile" />
      </div>
    </div>
  );
};
