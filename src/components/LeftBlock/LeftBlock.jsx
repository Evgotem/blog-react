import React from 'react';
import styles from './LeftBlock.module.scss';
import { UserPage } from '../pages/UserPage/UserPage';
import { Route, Routes } from 'react-router-dom';
import { Article } from '../pages/Article/Article';
import { Profile } from '../pages/Profile/Profile';
import { NotFound } from '../pages/NotFound/NotFound';
import { Login } from '../pages/Login/Login';
import { CreatePost } from '../pages/CreatePost/CreatePost';

export const LeftBlock = () => {

  return (
    <div className={styles.leftBlock}>
      <Routes>
        <Route path='/' element={<UserPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path={`/articles/:id`} element={<Article />} />
        <Route path={`/createPost`} element={<CreatePost />} />
        <Route path={`/login`} element={<Login />} />

        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
