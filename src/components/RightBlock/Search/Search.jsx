import React from 'react';
import styles from './Search.module.scss';

export const Search = () => {
  const [activeSearch, setActiveSearch] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const handleChangeInput = event => {
    setInputValue(event.target.value);
  }

  return (
    <div className={`${styles.search} ${activeSearch && styles.active}`}>
      <h4>Evgeny blog</h4>
      <div className={styles.iconWrapper}>
        <img 
          onClick={() => setActiveSearch(true)} 
          src="/images/search.png" 
          alt="search" 
        />
        <img src="/images/user.png" alt="profile" />
      </div>
      <div className={styles.inputWrapper}>
        <input 
          type="text"
          placeholder="Поиск статьи по заголовку или тексту..."
        />
        <img 
          onClick={() => setActiveSearch(false)} 
          onChange={handleChangeInput}
          value={inputValue}
          src="/images/close.png"
          alt="close"
        />
      </div>
    </div>
  );
};
