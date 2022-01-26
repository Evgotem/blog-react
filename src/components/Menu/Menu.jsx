import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

export const Menu = () => {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  return (
    <>
      <div
        className={`${styles.menu} ${isActiveMenu ? styles.active : null}`}
        onClick={() => setIsActiveMenu(true)}>
        <nav>
          <div>
            <h3>Евгений Т.</h3>
            <p>Дата регистрации: 12 августа 2019 в 08:06</p>
          </div>
          <ul>
            <li>
              <NavLink className={({ isActive }) => (isActive ? styles.activeLink : '')} to="/">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.activeLink : '')}
                to="/profile">
                Мой профиль
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.activeLink : '')}
                to="/createPost">
                Создать запись
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? styles.activeLink : '')} to="/exit">
                Выйти
              </NavLink>
            </li>
          </ul>
        </nav>
        <span
          onClick={(e) => {
            e.stopPropagation();
            setIsActiveMenu(!isActiveMenu);
          }}>
          <img src={isActiveMenu ? '/images/close.png' : '/images/burger.png'} alt="" />
          Меню
        </span>
      </div>
      <div
        className={styles.overlay}
        onClick={() => {
          setIsActiveMenu(false);
        }}></div>
    </>
  );
};
