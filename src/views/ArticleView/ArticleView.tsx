import React from 'react';
import { ArticleViewProps } from 'src/views/ArticleView/interfaces';
import styles from 'src/views/ArticleView/styles/styles.module.css';

const ArticleView: React.FC<ArticleViewProps> = (props: ArticleViewProps) => {
  const { title, content, creationDate } = props;

  return (
    <div className={styles.article}>
      <div className={styles.article__meta}>
        <p className={styles.article__meta__datetime}>{creationDate}</p>
        <p className={styles.article__meta__author}></p>
      </div>
      <h1 className={styles.article__title}>{title}</h1>
      <div
        className={styles.article__content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default ArticleView;
