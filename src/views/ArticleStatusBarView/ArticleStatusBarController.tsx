import { ArticleStatusBarControllerProps } from 'src/views/ArticleStatusBarView/interfaces';
import ArticleStatusBarView from 'src/views/ArticleStatusBarView/ArticleStatusBarView';

const ArticleStatusBarController = ({
  articleTitleIsVisible,
  footerIsVisible,
}: ArticleStatusBarControllerProps): JSX.Element => {
  return (
    <ArticleStatusBarView
      articleTitleIsVisible={articleTitleIsVisible}
      footerIsVisible={footerIsVisible}
    />
  );
};

export default ArticleStatusBarController;
