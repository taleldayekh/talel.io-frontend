import Button from 'components/Button/Button';
import TextField from 'components/TextField/TextField';
import { useState } from 'react';
import ArticleAdminController from 'views/ArticleAdminView/ArticleAdminController';
import styles from 'views/ArticleAdminView/article-admin-view.module.css';
import { Article } from 'views/ArticleAdminView/interfaces';

export default function ArticleAdminView() {
  const [article, setArticle] = useState<Article>({
    title: '',
    description: '',
    featuredImageUrl: '',
    content: '',
  });

  return (
    <ArticleAdminController
      article={article}
      setArticle={setArticle}
      render={(
        updateArticleTitle,
        updateArticleDescription,
        updateArticleContent,
        uploadFeaturedImage,
        uploadImagesOnDrop,
        submitArticle,
      ) => (
        <>
          <form onSubmit={submitArticle}>
            <p>Title</p>
            <TextField
              className={styles['article-admin__form__title']}
              onChange={updateArticleTitle}
            />
            <p>Featured Image</p>
            <input type="file" onChange={uploadFeaturedImage} />
            <p>Description</p>
            <TextField
              className={styles['article-admin__form__description']}
              onChange={updateArticleDescription}
            />
            <p>Content</p>
            <TextField
              className={styles['article-admin__form__body']}
              multiple
              value={article.content}
              onChange={updateArticleContent}
              onDrop={uploadImagesOnDrop}
            />
            <br />
            <Button>Publish</Button>
          </form>
        </>
      )}
    />
  );
}
