import React from 'react';
import { NavLink } from 'react-router-dom';
import { Registration } from './Registration/Registration';
import styles from './Search.module.scss';

export const Search = ({handleChangeInput, searchValue}) => {
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [registration, setRegistration] = React.useState(false);


  return (
   <>
      <div className={`${styles.search} ${activeSearch && styles.active}`}>
        <h4>Evgeny blog</h4>
        <div className={styles.iconWrapper}>
          <img 
            onClick={() => setActiveSearch(true)} 
            src="/images/search.png" 
            alt="search" 
          />
         <img
          onClick={() => setRegistration(true)}
          src="/images/user.png"
          alt="profile" 
          />
        </div>
        <div className={styles.inputWrapper}>
          <input 
            type="text"
            placeholder="Поиск статьи по заголовку или тексту..."
            onChange={handleChangeInput}
            value={searchValue}
          />
          <img 
            onClick={() => setActiveSearch(false)} 
            src="/images/close.png"
            alt="close"
          />
        </div>
      </div>
      {registration && <Registration setRegistration={setRegistration} />}
   </>
  );
};
