import ArticleViewModel from 'components/Article/models/article.view-model';
import { MutableRefObject } from 'react';

export interface ArticleProps {
  article: ArticleViewModel;
  articleContentRef: MutableRefObject<HTMLDivElement | null>;
  articleTitleRef: MutableRefObject<HTMLDivElement | null>;
}
