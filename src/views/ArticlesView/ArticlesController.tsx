import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HttpClient from 'src/libs/http-client/http-client';
import { ArticlesContext } from 'src/contexts/articles/articles.context';
import ArticlesRepository from 'src/data/articles/articles.repository';

const ArticlesController: React.FC = () => {
  const navigate = useNavigate();

  const { articles, setArticles } = useContext(ArticlesContext);

  const [articlesRepository] = useState<ArticlesRepository>(
    new ArticlesRepository(HttpClient),
  );

  useEffect(() => {
    // Todo: Error handling.
    articlesRepository.getAll().then(setArticles);
  }, []);

  useEffect(() => {
    // Temporary code for redirecting to latests article. Will be
    // removed once a view for articles gallery is available.
    if (!articles.length) return;

    const slug = articles[0].slug;
    navigate(`/articles/${slug}`);
  });

  return null;
};

export default ArticlesController;
