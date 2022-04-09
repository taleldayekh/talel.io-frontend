import { ArticleViewProps } from 'src/views/ArticleView/interfaces';
import { useTranslation } from 'react-i18next';
import styles from 'src/views/ArticleView/styles/styles.module.css';

const ArticleView = ({ article }: ArticleViewProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={styles.article}>
      <h1 className={styles.article__title}>{article.title}</h1>
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
