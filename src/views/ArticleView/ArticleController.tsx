import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArticlesContext } from 'src/contexts/articles/articles.context';
import ArticlesMapper from 'src/data/articles/articles.mapper';
import ArticleViewModel from 'src/view-models/article/article.view-model';
import ArticleView from 'src/views/ArticleView/ArticleView';

const ArticleController: React.FC = () => {
  const slug = useParams().slug;

  const { articles } = useContext(ArticlesContext);

  const [article, setArticle] = useState<ArticleViewModel>();

  useEffect(() => {
    if (!slug) return;

    const articleFromContext = articles.find(
      (article) => article.slug === slug,
    );

    if (articleFromContext) {
      setArticle(ArticlesMapper.toArticleViewModel(articleFromContext));
    } else {
      // ! Make db request with try catch
      // ! Map to article view model and remove the as ArticleViewModel
      const articleFromDb = {};

      setArticle(articleFromDb as ArticleViewModel);
    }
  }, []);

  return article ? (
    <ArticleView article={article} />
  ) : (
    <p>No article available</p>
  );
};

export default ArticleController;
