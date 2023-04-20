import ArticleViewModel from 'components/Article/models/article.view-model';
import {
  Dispatch,
  MutableRefObject,
  ReactElement,
  SetStateAction,
} from 'react';

export interface ArticleControllerProps {
  slug: string;
  article: ArticleViewModel | undefined;
  articleTitleRef: MutableRefObject<HTMLDivElement | null>;
  footerRef: MutableRefObject<HTMLDivElement | null>;
  setArticle: Dispatch<SetStateAction<ArticleViewModel | undefined>>;
  setArticleTitleIsInView: Dispatch<SetStateAction<boolean>>;
  setFooterIsInView: Dispatch<SetStateAction<boolean>>;
  render: () => ReactElement;
}
