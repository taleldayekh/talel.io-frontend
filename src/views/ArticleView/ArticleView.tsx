import React from 'react';
import { ArticleViewProps } from 'src/views/ArticleView/interfaces';
import styles from 'src/views/ArticleView/styles/styles.module.css';

const ArticleView: React.FC<ArticleViewProps> = (props: ArticleViewProps) => {
  const { articleHTML } = props;

  return (
    <div className={styles.article}>
      <div className={styles.article__meta}>
        <p className={styles.article__meta__datetime}>February 13, 2022 </p>
        <p className={styles.article__meta__author}>/ Words by Talel Dayekh</p>
      </div>
      <h1 className={styles.article__title}>Article Title</h1>
      <div
        className={styles.article__content}
        dangerouslySetInnerHTML={{ __html: articleHTML }}
      />
    </div>
  );
};

export default ArticleView;
