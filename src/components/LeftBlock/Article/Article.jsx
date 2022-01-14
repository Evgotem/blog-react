import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './Article.module.scss';

export const Article = () => {
  let { id } = useParams();
  const articles = useSelector((state) => state.articles);

  let article = articles.filter((a) => a.id === +id)[0];
  console.log(article);

  return (
    <>
      <div className={styles.titleWrapper} style={{backgroundImage: `url(${article.imgURL})`}} >
        <div className={styles.shadowEffect}></div>
        <div className={styles.titleInfo}>
          <span>{article.date}</span>
          <span>
            <img src='/images/eye.png' alt='views' />
            {article.views}
          </span>
          <h1>{article.title}</h1>
          <p>{article.preview}</p>
        </div>
      </div>
      <div className={styles.articleWrapper}>
        <div>
          <p>{article.text}</p>
        </div>
  
        <div className={styles.commentsWrapper}>
          <h4>Комментарии (3)</h4>

          <div className={styles.comment}>
            <div className={styles.commentTitle}>
              <h5>Vasya Pupkin</h5>
              <span>12 августа 2019 в 08:06</span>
            </div>
            <div className={styles.articleText}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor adipiscing leo id sed neque, diam nibh.</p>
            </div>
          </div>
          <div className={styles.comment}>
            <div className={styles.commentTitle}>
              <h5>Vasya Pupkin</h5>
              <span>12 августа 2019 в 08:06</span>
            </div>
            <div className={styles.articleText}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor adipiscing leo id sed neque, diam nibh.</p>
            </div>
          </div>
          <div className={styles.comment}>
            <div className={styles.commentTitle}>
              <h5>Vasya Pupkin</h5>
              <span>12 августа 2019 в 08:06</span>
            </div>
            <div className={styles.articleText}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor adipiscing leo id sed neque, diam nibh.</p>
            </div>
          </div>

        </div>
  
        <div className={styles.addCommentBlock}>
          <h5>Добавить комментарий</h5>
          <textarea name="" id="" ></textarea>
          <button>Отправить</button>
        </div>
      </div>

    </>
  );
};
