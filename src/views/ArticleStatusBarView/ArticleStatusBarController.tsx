import { ArticleStatusBarControllerProps } from 'src/views/ArticleStatusBarView/interfaces';
import ArticleStatusBarView from 'src/views/ArticleStatusBarView/ArticleStatusBarView';

const ArticleStatusBarController = ({
  displayArticleStatusBar,
}: ArticleStatusBarControllerProps): JSX.Element => {
  return <ArticleStatusBarView isVisible={displayArticleStatusBar} />;
};

export default ArticleStatusBarController;
