import { MutableRefObject } from 'react';
import ArticleViewModel from 'components/Article/models/article.view-model';

export interface ArticleProps {
    article: ArticleViewModel;
    articleContentRef: MutableRefObject<HTMLDivElement | null>;
    articleTitleRef: MutableRefObject<HTMLDivElement | null>;
}
