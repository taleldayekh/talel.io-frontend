import { ArticleStatusBarControllerProps } from 'src/views/ArticleStatusBarView/interfaces';
import ArticleStatusBarView from 'src/views/ArticleStatusBarView/ArticleStatusBarView';

const ArticleStatusBarController = ({
  articleTitle,
  // Todo: Consider putting article content ref inside context.
  articleContentRef,
  articleTitleIsVisible,
  footerIsVisible,
}: ArticleStatusBarControllerProps): JSX.Element => {
  return (
    <ArticleStatusBarView
      articleTitle={articleTitle}
      articleContentRef={articleContentRef}
      articleTitleIsVisible={articleTitleIsVisible}
      footerIsVisible={footerIsVisible}
    />
  );
};

export default ArticleStatusBarController;
