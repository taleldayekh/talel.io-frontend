import { Dispatch, SetStateAction, ChangeEvent, DragEvent, ReactElement } from 'react';
import { Article } from 'views/ArticleAdminView/interfaces';

export interface ArticleAdminControllerProps {
    article: Article;
    setArticle: Dispatch<SetStateAction<Article>>;
    render: (
        updateArticleTitle: (event: ChangeEvent<HTMLInputElement>) => void,
        updateArticleDescription: (event: ChangeEvent<HTMLTextAreaElement>) => void,
        updateArticleContent: (event: ChangeEvent<HTMLTextAreaElement>) => void,
        uploadImagesOnDrop: (event: DragEvent<HTMLTextAreaElement>) => void,
    ) => ReactElement;
}
