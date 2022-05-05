import { ArticleStatusBarViewProps } from 'src/views/ArticleStatusBarView/interfaces';
import ReadingPositionController from 'src/views/ReadingPositionView/ReadingPositionController';
import articleStatusBarStyles from 'src/views/ArticleStatusBarView/styles/articleStatusBar.styles.module.css';

const ArticleStatusBarView = ({
  articleTitle,
  articleContentRef,
  articleTitleIsVisible,
  footerIsVisible,
}: ArticleStatusBarViewProps): JSX.Element => {
  return (
    <div
      className={`${articleStatusBarStyles['article-status-bar']} ${
        !articleTitleIsVisible &&
        articleStatusBarStyles['article-status-bar--visible']
      } ${
        footerIsVisible && articleStatusBarStyles['article-status-bar--hidden']
      }`}
    >
      <ReadingPositionController contentRef={articleContentRef}>
        <div className={articleStatusBarStyles['article-status-bar__content']}>
          <p
            className={
              articleStatusBarStyles['article-status-bar__content__title']
            }
          >
            {articleTitle}
          </p>
        </div>
      </ReadingPositionController>
    </div>
  );
};

export default ArticleStatusBarView;
