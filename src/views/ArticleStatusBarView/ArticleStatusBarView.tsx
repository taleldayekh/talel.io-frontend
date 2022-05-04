import { ArticleStatusBarViewProps } from 'src/views/ArticleStatusBarView/interfaces';
import ReadingPositionController from 'src/views/ReadingPositionView/ReadingPositionController';
import styles from 'src/views/ArticleStatusBarView/styles/styles.module.css';

const ArticleStatusBarView = ({
  articleTitle,
  articleContentRef,
  articleTitleIsVisible,
  footerIsVisible,
}: ArticleStatusBarViewProps): JSX.Element => {
  return (
    <div
      className={`${styles['article-status-bar']} ${
        !articleTitleIsVisible && styles['article-status-bar--visible']
      } ${footerIsVisible && styles['article-status-bar--hidden']}`}
    >
      <ReadingPositionController contentRef={articleContentRef}>
        <div className={styles['article-status-bar__content']}>
          <p className={styles['article-status-bar__content__title']}>
            {articleTitle}
          </p>
        </div>
      </ReadingPositionController>
    </div>
  );
};

export default ArticleStatusBarView;
