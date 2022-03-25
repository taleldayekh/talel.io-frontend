import { Dispatch, SetStateAction } from 'react';
import ArticleModel from 'src/models/article/article.model';

export interface ArticlesContextValues {
  articles: ArticleModel[];
  setArticles: Dispatch<SetStateAction<ArticleModel[]>>;
}
