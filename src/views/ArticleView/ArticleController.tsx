import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HttpClient from 'src/libs/http-client/http-client';
import { ArticlesContext } from 'src/contexts/articles/articles.context';
import ArticlesRepository from 'src/data/articles/articles.repository';
import ArticlesMapper from 'src/data/articles/articles.mapper';
import ArticleViewModel from 'src/view-models/article/article.view-model';
import ArticleView from 'src/views/ArticleView/ArticleView';

const ArticleController: React.FC = () => {
  const slug = useParams().slug;

  const { articles } = useContext(ArticlesContext);

  const [articlesRepository] = useState<ArticlesRepository>(
    new ArticlesRepository(HttpClient),
  );

  const [article, setArticle] = useState<ArticleViewModel>();

  useEffect(() => {
    if (!slug) return;

    const articleFromContext = articles.find(
      (article) => article.slug === slug,
    );

    if (articleFromContext) {
      setArticle(ArticlesMapper.toArticleViewModel(articleFromContext));
    } else {
      // Todo: Error handling.
      articlesRepository
        .getBySlug(slug)
        .then((article) =>
          setArticle(ArticlesMapper.toArticleViewModel(article)),
        );
    }
  }, []);

  // Todo: Navigate to 404 if article cannot be found.
  return article && article.title ? (
    <ArticleView article={article} />
  ) : (
    <p>404 Not Found</p>
  );
};

export default ArticleController;
