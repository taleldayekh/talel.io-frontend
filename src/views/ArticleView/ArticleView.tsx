import {
  ArticleViewProps,
  ArticleElements,
} from 'src/views/ArticleView/interfaces';
import { useTranslation } from 'react-i18next';
import articleStyles from 'src/views/ArticleView/styles/article.styles.module.css';

const ArticleView = ({
  article,
  articleTitleRef,
  articleContentRef,
}: ArticleViewProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={articleStyles.article}>
      <h1
        id={ArticleElements.articleTitle}
        className={articleStyles.article__title}
        ref={articleTitleRef}
      >
        {article.title}
      </h1>
      <div className={articleStyles.article__meta}>
        <p>{t('article.meta.author')}</p>
        <p>
          {article.createdDate}
          {article.updatedDate &&
            ` (${t('article.meta.updated')} ${article.updatedDate})`}
        </p>
      </div>
      <div
        className={articleStyles.article__content}
        ref={articleContentRef}
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </div>
  );
};

export default ArticleView;
