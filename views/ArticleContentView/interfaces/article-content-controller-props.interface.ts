import { MutableRefObject, Dispatch, SetStateAction, ReactElement } from 'react';

export interface ArticleContentControllerProps {
    slug: string;
    articleTitleRef: MutableRefObject<HTMLDivElement | null>;
    footerRef: MutableRefObject<HTMLDivElement | null>;
    setArticleTitleIsInView: Dispatch<SetStateAction<boolean>>;
    setFooterIsInView: Dispatch<SetStateAction<boolean>>;
    render: () => ReactElement;
}
