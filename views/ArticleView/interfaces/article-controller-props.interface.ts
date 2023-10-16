import {
  Dispatch,
  MutableRefObject,
  ReactElement,
  SetStateAction,
} from 'react';

export interface ArticleControllerProps {
  articleTitleRef: MutableRefObject<HTMLDivElement | null>;
  footerRef: MutableRefObject<HTMLDivElement | null>;
  setArticleTitleIsInView: Dispatch<SetStateAction<boolean>>;
  setFooterIsInView: Dispatch<SetStateAction<boolean>>;
  render: () => ReactElement;
}
