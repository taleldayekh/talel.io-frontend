import { MutableRefObject } from 'react';

export interface ArticleProps {
    articleContentRef: MutableRefObject<HTMLDivElement | null>;
    articleTitleRef: MutableRefObject<HTMLDivElement | null>;
}
