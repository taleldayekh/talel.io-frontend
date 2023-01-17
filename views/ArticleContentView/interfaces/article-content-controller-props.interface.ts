import { MutableRefObject, ReactElement } from 'react';

export interface ArticleContentControllerProps {
    articleTitleRef: MutableRefObject<HTMLDivElement | null>;
    render: () => ReactElement;
}
