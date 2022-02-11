import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import HttpClient from 'src/libs/http-client/http-client';
import ArticlesRepository from 'src/data/articles/articles.repository';
import ArticleViewModel from 'src/view-models/article/article.view-model';
import ArticleView from 'src/views/ArticleView/ArticleView';

const ArticleController: React.FC = () => {
  const [articlesRepository] = useState<ArticlesRepository>(
    new ArticlesRepository(HttpClient),
  );
  const [articleHTML, setArticleHTML] = useState<string>();

  useEffect(() => {
    articlesRepository.getAll().then((articles: ArticleViewModel[]) => {
      const latestArticle = articles[0];
      const latestArticleHTML = DOMPurify.sanitize(latestArticle.html);

      setArticleHTML(latestArticleHTML);
    });
  });

  return articleHTML ? <ArticleView articleHTML={articleHTML} /> : null;
};

export default ArticleController;
