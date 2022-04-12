import { ArticleStatusBarViewProps } from 'src/views/ArticleStatusBarView/interfaces';
import styles from 'src/views/ArticleStatusBarView/styles/styles.module.css';

const ArticleStatusBarView = ({
  showStatusBar,
}: ArticleStatusBarViewProps): JSX.Element => {
  return (
    <div
      className={`${styles['article-status-bar']} ${
        showStatusBar && styles['article-status-bar--visible']
      }`}
    >
      Content
    </div>
  );
};

export default ArticleStatusBarView;
