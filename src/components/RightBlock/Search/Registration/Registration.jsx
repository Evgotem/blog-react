import React from 'react';
import { Button } from '../../../Button/Button';
import styles from './Registration.module.scss';

export const Registration = ({ setRegistration }) => {
  const onClickOverlay = e => {
    if(e.currentTarget === e.target) {
      setRegistration(false)
    };
  }
  return (
    <div onClick={e => onClickOverlay(e)} className={styles.registration}>
      <form >
        <div className={styles.titleWrapper}>
          <h2>Регистрация</h2>
          <img onClick={() => setRegistration(false)} src="/images/close.png" alt="close" />
        </div>

        <label htmlFor="name">Имя и Фамилия</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="pass">Пароль</label>
        <input type="password" name="pass" />

        <Button width={'100%'}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
};
