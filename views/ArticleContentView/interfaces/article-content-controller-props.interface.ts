import { MutableRefObject, Dispatch, SetStateAction, ReactElement } from 'react';
import ArticleViewModel from 'components/Article/models/article.view-model';

export interface ArticleContentControllerProps {
    slug: string;
    article: ArticleViewModel | undefined;
    articleTitleRef: MutableRefObject<HTMLDivElement | null>;
    footerRef: MutableRefObject<HTMLDivElement | null>;
    setArticle: Dispatch<SetStateAction<ArticleViewModel | undefined>>;
    setArticleTitleIsInView: Dispatch<SetStateAction<boolean>>;
    setFooterIsInView: Dispatch<SetStateAction<boolean>>;
    render: () => ReactElement;
}
