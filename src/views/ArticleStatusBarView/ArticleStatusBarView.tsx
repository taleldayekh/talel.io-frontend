import { ArticleStatusBarViewProps } from 'src/views/ArticleStatusBarView/interfaces';
import styles from 'src/views/ArticleStatusBarView/styles/styles.module.css';

const ArticleStatusBarView = ({
  articleTitle,
  articleTitleIsVisible,
  footerIsVisible,
}: ArticleStatusBarViewProps): JSX.Element => {
  return (
    <div
      className={`${styles['article-status-bar']} ${
        !articleTitleIsVisible && styles['article-status-bar--visible']
      } ${footerIsVisible && styles['article-status-bar--hidden']}`}
    >
      <div className={styles['article-status-bar__content']}>
        <p className={styles['article-status-bar__content__title']}>
          {articleTitle}
        </p>
      </div>
    </div>
  );
};

export default ArticleStatusBarView;
