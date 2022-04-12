import { ArticleStatusBarControllerProps } from 'src/views/ArticleStatusBarView/interfaces';
import ArticleStatusBarView from 'src/views/ArticleStatusBarView/ArticleStatusBarView';

const ArticleStatusBarController = ({
  articleTitleIsVisible,
}: ArticleStatusBarControllerProps): JSX.Element => {
  return <ArticleStatusBarView showStatusBar={!articleTitleIsVisible} />;
};

export default ArticleStatusBarController;
