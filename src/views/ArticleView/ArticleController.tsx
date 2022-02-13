import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import HttpClient from 'src/libs/http-client/http-client';
import ArticlesRepository from 'src/data/articles/articles.repository';
import ArticlesMapper from 'src/data/articles/articles.mapper';
import ArticleModel from 'src/models/article/article.model';
import ArticleViewModel from 'src/view-models/article/article.view-model';
import ArticleView from 'src/views/ArticleView/ArticleView';

const ArticleController: React.FC = () => {
  const [articlesRepository] = useState<ArticlesRepository>(
    new ArticlesRepository(HttpClient),
  );
  const [articleHTML, setArticleHTML] = useState<string>();

  useEffect(() => {
    articlesRepository.getAll().then((articlesRes: ArticleModel[]) => {
      const articles: ArticleViewModel[] = articlesRes.map(
        (article: ArticleModel) => ArticlesMapper.toArticleViewModel(article),
      );
      const latestArticle = articles[4];
      const latestArticleHTML = DOMPurify.sanitize(latestArticle.html);

      setArticleHTML(latestArticleHTML);
    });
  });

  return articleHTML ? <ArticleView articleHTML={articleHTML} /> : null;
};

export default ArticleController;
