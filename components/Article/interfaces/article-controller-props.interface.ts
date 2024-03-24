import { ArticleContent } from 'components/Article/interfaces';
import { Dispatch, ReactElement, SetStateAction } from 'react';

export interface ArticleControllerProps {
  articleHTML: string;
  tableOfContentsHTML: string;
  setArticleContent: Dispatch<SetStateAction<ArticleContent[]>>;
  render: () => ReactElement;
}
