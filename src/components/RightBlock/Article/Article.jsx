import React from 'react';
import styles from './Article.module.scss';

export const Article = ({ title, preview, date, views, imgURL }) => {
  return (
    <div className={styles.article}>
      <div>
        <h3>{title}</h3>       
          <p className={styles.preview}>
            {preview}
          </p>
          <div className={styles.info}>
            <span className={styles.date}>{date}</span>
            <span>
              <img src='/images/eye.png' alt='views' />
              {views}
            </span>
          </div>
      </div>
      {imgURL && <div>
        <img className={styles.articleImage} src={imgURL} alt='Article image' width={165} height={165} />
      </div>}
    </div>
  );
};
