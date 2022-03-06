import React, { useState, createContext } from 'react';
import { ArticlesContextValues } from 'src/contexts/articles/interfaces';
import ArticleModel from 'src/models/article/article.model';

export const ArticlesContext = createContext<ArticlesContextValues>({
  articles: [],
  setArticles: () => null,
});

export const ArticlesProvider: React.FC = ({ children }) => {
  const [articles, setArticles] = useState<ArticleModel[]>([]);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};
