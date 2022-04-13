import { HTMLElements } from 'src/shared/types';
import { ArticleElements } from 'src/views/ArticleView/interfaces';
import ArticleViewModel from 'src/view-models/article/article.view-model';

export interface ArticleViewProps {
  article: ArticleViewModel;
  addElementRef: (
    element: HTMLElements | null,
    elementType: ArticleElements,
  ) => void;
}
