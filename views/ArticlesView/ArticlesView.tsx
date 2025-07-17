'use client';
import ArticlesController from 'views/ArticlesView/ArticlesController';
import { ArticlesViewProps } from 'views/ArticlesView/interfaces';
import styles from 'views/ArticlesView/articles-view.module.css';

export default function ArticlesView({ articles }: ArticlesViewProps) {
  return (
    <ArticlesController
      render={(navigateToArticle) => (
        <div className={styles.articles}>
          <span className={styles['articles__title']}>Articles</span>
          {articles.map((article, index) => (
            <ul className={styles['articles__list']} key={index}>
              <li onClick={() => navigateToArticle(article.slug)}>
                <span>{article.title}</span>
              </li>
            </ul>
          ))}
        </div>
      )}
    />
  );
}
