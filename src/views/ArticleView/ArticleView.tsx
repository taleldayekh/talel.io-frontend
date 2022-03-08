import React from 'react';
import { ArticleViewProps } from 'src/views/ArticleView/interfaces';
import styles from 'src/views/ArticleView/styles/styles.module.css';

const ArticleView: React.FC<ArticleViewProps> = (props: ArticleViewProps) => {
  const { article } = props;

  return (
    <div className={styles.article}>
      <div className={styles.article__meta}>
        <p className={styles.article__meta__datetime}>{article.createdAt}</p>
        <p className={styles.article__meta__author}></p>
      </div>
      <h1 className={styles.article__title}>{article.title}</h1>
      <div
        className={styles.article__content}
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </div>
  );
};

export default ArticleView;
