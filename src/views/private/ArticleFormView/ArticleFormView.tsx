import React from 'react';
import {
  ArticleFormViewProps,
  ArticleFormFields,
} from 'src/views/private/ArticleFormView/interfaces';
import styles from 'src/views/private/ArticleFormView/styles/styles.module.css';

const ArticleFormView: React.FC<ArticleFormViewProps> = (
  props: ArticleFormViewProps,
) => {
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
      <button onClick={() => uploadArticle()}>Publish Article</button>
    </div>
  );
};

export default ArticleFormView;
