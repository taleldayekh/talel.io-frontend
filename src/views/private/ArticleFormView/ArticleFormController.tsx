import React, { useState, DragEvent } from 'react';
import { ArticleFormFields } from 'src/views/private/ArticleFormView/interfaces';
import HttpClient from 'src/libs/http-client/http-client';
import AssetsRepository from 'src/data/assets/assets.repository';
import ArticlesRepository from 'src/data/articles/articles.repository';
import HeadMeta from 'src/components/HeadMeta/HeadMeta';
import ArticleFormView from 'src/views/private/ArticleFormView/ArticleFormView';

const ArticleFormController: React.FC = () => {
  const [assetsRepository] = useState(new AssetsRepository(HttpClient));
  const [articlesRepository] = useState(new ArticlesRepository(HttpClient));
  const [article, setArticle] = useState({
    title: '',
    content: '',
  });

  const updateArticle = (field: ArticleFormFields, text: string): void => {
    setArticle({ ...article, [field]: text });
  };

  const uploadArticleImages = async (
    e: DragEvent<HTMLTextAreaElement>,
  ): Promise<void> => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    let imageMarkdownString = '';

    for (const file of files) {
      // TODO: Add try catch
      const filename = file.name;
      const imageData = new FormData();

      imageData.append(`${filename}`, file, `${filename}`);

      const uploadedImageRes = await assetsRepository.uploadImage(imageData);

      imageMarkdownString =
        imageMarkdownString +
        '\r\n' +
        '\r\n' +
        `![${filename}](${uploadedImageRes.imageSrc})`;
    }

    updateArticle(ArticleFormFields.CONTENT, imageMarkdownString);
  };

  const uploadArticle = async (): Promise<void> => {
    // TODO: Convert to view model and use payload mapper
    await articlesRepository.create({
      title: article.title,
      body: article.content,
    });

    // TODO: Rethink state reset
    setArticle({ title: '', content: '' });
  };

  return (
    <>
      <HeadMeta
        title="Add Article"
        description="Add article"
        canonical="admin/articles"
        disableRobots
      />
      <ArticleFormView
        articleTitle={article.title}
        articleContent={article.content}
        updateArticle={updateArticle}
        uploadArticleImages={uploadArticleImages}
        uploadArticle={uploadArticle}
      />
    </>
  );
};

export default ArticleFormController;
