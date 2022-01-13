import React from 'react';
import { Article } from './Article/Article';
import styles from './RightBlock.module.scss';
import { Search } from './Search/Search';

const articles = [
  {
    title: 'JavaScript: Как с помощью Dadata определить город по IP?',
    preview:
      'На работе потребовалось запилить задачу для автоматического определения города при совершении заказа. Было решено сделать это на фронте, ибо бек был занят.',
    date: '12 августа 2019 в 08:06',
    views: 301,
    imgURL: '',
    id: 1
  },
  {
    title: 'Какой-то очень интересный заголовок',
    preview:
      'На работе потребовалось запилить задачу для автоматического определения города при совершении заказа.',
    date: '12 июня 2019 в 18:45',
    views: 55,
    imgURL: '/images/articleImages/article234.jpg',
    id: 2
  },
  {
    title: 'Ставим обработчик фокуса для кастомоного React-компонента',
    preview:
      'Что делать, если разработчик компонента для форматирования номера телефона или других данных в текстовом поле, не добавил обработчики на установку и снятие фокуса?',
    date: '17 февраля 2019 в 13:57',
    views: 16,
    imgURL: '',
    id: 3
  },
  {
    title: 'Amet molestie tincidunt id nascetur sit purus turpis',
    preview:
      'Vel vulputate mauris enim habitant ornare. Ut in sit purus turpis ultrices suspendisse scelerisque quam lorem. Amet molestie nascetur...',
    date: '10 января 2019 в 10:08',
    views: 30,
    imgURL: '/images/articleImages/art3.png',
    id: 4
  },
];

export const RightBlock = () => {
  return (
    <div className={styles.rightBlock}>
      <Search />
      {articles.map((article) => {
        return (
          <Article
            key={article.id}
            title={article.title}  
            preview={article.preview}
            date={article.date}
            views={article.views}
            imgURL={article.imgURL}
          />
        );
      })}
    </div>
  );
};
