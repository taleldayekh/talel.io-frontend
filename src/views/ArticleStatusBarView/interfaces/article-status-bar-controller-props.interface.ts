import { MutableRefObject } from 'react';

export interface ArticleStatusBarControllerProps {
  articleTitle: string;
  articleContentRef: MutableRefObject<HTMLDivElement | null>;
  articleTitleIsVisible: boolean;
  footerIsVisible: boolean;
}
