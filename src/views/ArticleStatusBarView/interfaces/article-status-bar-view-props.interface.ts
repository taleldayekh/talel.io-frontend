import { MutableRefObject } from 'react';

export interface ArticleStatusBarViewProps {
  articleTitle: string;
  articleContentRef: MutableRefObject<HTMLDivElement | null>;
  articleTitleIsVisible: boolean;
  footerIsVisible: boolean;
}
