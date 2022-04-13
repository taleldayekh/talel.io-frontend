import {
  ArticleViewProps,
  ArticleElements,
} from 'src/views/ArticleView/interfaces';
import { useTranslation } from 'react-i18next';
import styles from 'src/views/ArticleView/styles/styles.module.css';

const ArticleView = ({
  article,
  addElementRef,
}: ArticleViewProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.article}>
      <h1
        id={ArticleElements.articleTitle}
        className={styles.article__title}
        ref={(el) => addElementRef(el, ArticleElements.articleTitle)}
      >
        {article.title}
      </h1>
      <div className={styles.article__meta}>
        <p>{t('article.meta.author')}</p>
        <p>
          {article.createdDate}
          {article.updatedDate &&
            ` (${t('article.meta.updated')} ${article.updatedDate})`}
        </p>
      </div>
      <div
        className={styles.article__content}
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </div>
  );
};

export default ArticleView;
