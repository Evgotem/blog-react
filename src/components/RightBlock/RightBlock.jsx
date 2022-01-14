import React from 'react';
import { ArticlePreviews } from './ArticlePreviews/ArticlePreviews.jsx';
import styles from './RightBlock.module.scss';
import { Search } from './Search/Search';
import { useSelector } from 'react-redux';


export const RightBlock = () => {
  const articles = useSelector(state => state.articles);

  const [searchValue, setSearchValue] = React.useState('');
  const handleChangeInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.rightBlock}>
      <Search handleChangeInput={handleChangeInput} searchValue={searchValue} />
      {articles
        .filter(
          (item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.preview.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .map(article => {
          return (
            <ArticlePreviews
              key={article.id}
              id={article.id}
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
