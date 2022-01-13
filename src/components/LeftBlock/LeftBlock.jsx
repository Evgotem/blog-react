import React from 'react';
import styles from './LeftBlock.module.scss';

export const LeftBlock = () => {
  return (
    <div className={styles.leftBlock}>
      <h2 className={styles.title}>Name</h2>
      <p className={styles.subtitle}>Блог фронтенд-разработчика</p>
      <img src="images/photo.jpg" alt="photo" className={styles.photo} />
      <div className={styles.about}>
        <h4>Обо мне</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis quam accumsan ipsum commodo sed purus mi. Platea sit lectus neque, nulla sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt laoreet amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus malesuada non nisi.
        </p>
      </div>
    </div>
  );
};
