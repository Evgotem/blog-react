import React from 'react';
import styles from './LeftBlock.module.scss';
import { UserPage } from './UserPage/UserPage';
import { Route, Routes } from 'react-router-dom';
import { Article } from './Article/Article';

export const LeftBlock = () => {

  return (
    <div className={styles.leftBlock}>
      <Routes>
        <Route path='/' element={<UserPage />} />
        <Route path={`/articles/:id`} element={<Article />} />
      </Routes>
    </div>
  );
};
