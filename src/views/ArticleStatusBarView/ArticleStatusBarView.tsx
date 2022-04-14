import { ArticleStatusBarViewProps } from 'src/views/ArticleStatusBarView/interfaces';
import styles from 'src/views/ArticleStatusBarView/styles/styles.module.css';

const ArticleStatusBarView = ({
  articleTitleIsVisible,
  footerIsVisible,
}: ArticleStatusBarViewProps): JSX.Element => {
  return (
    <div
      className={`${styles['article-status-bar']} ${
        !articleTitleIsVisible && styles['article-status-bar--visible']
      } ${footerIsVisible && styles['article-status-bar--hidden']}`}
    >
      Article Status Bar Content
    </div>
  );
};

export default ArticleStatusBarView;
