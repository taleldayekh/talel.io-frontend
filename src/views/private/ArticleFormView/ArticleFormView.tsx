import React from 'react';
import {
  ArticleFormViewProps,
  ArticleFormFields,
} from 'src/views/private/ArticleFormView/interfaces';
import { useTranslation } from 'react-i18next';
import styles from 'src/views/private/ArticleFormView/styles/styles.module.css';

const ArticleFormView: React.FC<ArticleFormViewProps> = (
  props: ArticleFormViewProps,
) => {
  const { t } = useTranslation();
  const {
    articleTitle,
    articleContent,
    updateArticle,
    uploadArticleImages,
    uploadArticle,
  } = props;

  return (
    <div>
      <input
        title={ArticleFormFields.TITLE}
        value={articleTitle}
        onChange={(e) =>
          updateArticle(
            e.target.title as ArticleFormFields.TITLE,
            e.target.value,
          )
        }
      />
      <textarea
        className={styles['article-form__content']}
        title={ArticleFormFields.CONTENT}
        value={articleContent}
        onChange={(e) =>
          updateArticle(
            e.target.title as ArticleFormFields.CONTENT,
            e.target.value,
          )
        }
        onDrop={(e) => uploadArticleImages(e)}
      />
      <button onClick={() => uploadArticle()}>
        {t('admin.article-form.publish-button')}
      </button>
    </div>
  );
};

export default ArticleFormView;
