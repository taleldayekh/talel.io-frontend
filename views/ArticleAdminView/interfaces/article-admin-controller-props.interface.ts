import {
  ChangeEvent,
  Dispatch,
  DragEvent,
  FormEvent,
  ReactElement,
  SetStateAction,
} from 'react';
import { Article } from 'views/ArticleAdminView/interfaces';

export interface ArticleAdminControllerProps {
  article: Article;
  setArticle: Dispatch<SetStateAction<Article>>;
  render: (
    updateArticleTitle: (event: ChangeEvent<HTMLInputElement>) => void,
    updateArticleDescription: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    updateArticleContent: (event: ChangeEvent<HTMLTextAreaElement>) => void,
    uploadFeaturedImage: (event: ChangeEvent<HTMLInputElement>) => void,
    uploadImagesOnDrop: (event: DragEvent<HTMLTextAreaElement>) => void,
    submitArticle: (event: FormEvent<HTMLFormElement>) => Promise<void>,
  ) => ReactElement;
}
