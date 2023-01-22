import { MutableRefObject, Dispatch, SetStateAction, ReactElement } from 'react';

export interface ArticleContentControllerProps {
    articleTitleRef: MutableRefObject<HTMLDivElement | null>;
    footerRef: MutableRefObject<HTMLDivElement | null>;
    setArticleTitleIsInView: Dispatch<SetStateAction<boolean>>;
    setFooterIsInView: Dispatch<SetStateAction<boolean>>;
    render: () => ReactElement;
}
