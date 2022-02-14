// TODO: Refactor to a ArticlesController for all articles
import React, { useState, useEffect } from 'react';
import { Article, ArticleMetadata } from 'src/views/ArticleView/interfaces';
import DOMPurify from 'dompurify';
import ArticleModel from 'src/models/article/article.model';
import ArticleViewModel from 'src/view-models/article/article.view-model';
import HttpClient from 'src/libs/http-client/http-client';
import ArticlesRepository from 'src/data/articles/articles.repository';
import ArticlesMapper from 'src/data/articles/articles.mapper';
import ArticleView from 'src/views/ArticleView/ArticleView';

const ArticleController: React.FC = () => {
  const [articlesRepository] = useState<ArticlesRepository>(
    new ArticlesRepository(HttpClient),
  );

  const [article, setArticle] = useState<Article>();
  const [metadata, setMetadata] = useState<ArticleMetadata>();

  useEffect(() => {
    articlesRepository
      .getAll()
      .then((articlesRes: ArticleModel[]) => {
        const articles: ArticleViewModel[] = articlesRes.map(
          (article: ArticleModel) => ArticlesMapper.toArticleViewModel(article),
        );

        // TODO: Latest article should not be derived from this component
        const [latestArticle] = articles.slice(-1);

        setArticle({
          title: latestArticle.title,
          content: DOMPurify.sanitize(latestArticle.html),
        });
        setMetadata({ createdAt: latestArticle.createdAt });
      })
      .catch((error) => {
        // TODO: Proper error handling
        console.log(error);
      });
  }, []);

  return article && metadata ? (
    <ArticleView
      title={article.title}
      content={article.content}
      creationDate={metadata.createdAt}
    />
  ) : null;
};

export default ArticleController;
