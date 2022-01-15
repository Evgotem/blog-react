import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticlePreviews.module.scss';

export const ArticlePreviews = ({ title, preview, date, views, imgURL, id }) => {
  return (
    <div className={styles.article}>
      <div className={styles.wrapper}>
        <h3>{title}</h3>
        <Link className={styles.link} to={`/articles/${id}`}>
          <p className={styles.preview}>{preview}</p>
        </Link>
        <div className={styles.info}>
          <span className={styles.date}>{date}</span>
          <span>
            <img src="/images/eye.png" alt="views" />
            {views}
          </span>
        </div>
      </div>
      {imgURL && (
        <div>
          <img
            className={styles.articleImage}
            src={imgURL}
            alt="Article image"
            width={165}
            height={165}
          />
        </div>
      )}
    </div>
  );
};
