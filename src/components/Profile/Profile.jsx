import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Profile.module.scss';

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <span className={styles.author}>
        Profile
      </span>
      <div className={styles.info}>
        <div className={styles.infoTitle}>
          <h1>Evgeny T.</h1>
          <p>Дата регистрации: <b>12 августа 2019 в 08:06</b></p>
        </div>
        <div className={styles.links}>
          <NavLink className={({ isActive }) => (isActive ? styles.activeLink : '')} to='#'>
            Статьи
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.activeLink : '')} to='#'>
            Комментарии
          </NavLink>
        </div>
        <div>
          Тут будет выводиться список статей
        </div>
      </div>
    </div>
  );
};
