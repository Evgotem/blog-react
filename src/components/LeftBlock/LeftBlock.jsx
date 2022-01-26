import React from 'react';
import styles from './LeftBlock.module.scss';
import { UserPage } from '../pages/UserPage/UserPage';
import { Route, Routes } from 'react-router-dom';
import { Article } from '../pages/Article/Article';
import { Profile } from '../pages/Profile/Profile';
import { NotFound } from '../pages/NotFound/NotFound';
import { CreatePost } from '../pages/CreatePost/CreatePost';
import { Layout } from '../pages/Layout/Layout';
import { RequireAuth } from '../../hoc/RequireAuth';

export const LeftBlock = () => {

  return (
    <div className={styles.leftBlock}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<UserPage />} />
          <Route path='profile' element={<Profile />} />
          <Route path={`articles/:id`} element={<Article />} />
          <Route path={`createPost`} element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
            }
          />  
        </Route>
      </Routes>
    </div>
  );
};
