import { MutableRefObject } from 'react';
import ArticleViewModel from 'src/view-models/article/article.view-model';

export interface ArticleViewProps {
  article: ArticleViewModel;
  articleTitleRef: MutableRefObject<HTMLHeadingElement | null>;
}
