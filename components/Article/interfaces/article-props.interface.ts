import { MutableRefObject } from 'react';

export interface ArticleProps {
    articleTitleRef: MutableRefObject<HTMLDivElement | null>;
}
