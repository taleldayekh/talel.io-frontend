import { DragEvent } from 'react';
import { ArticleFormFields } from 'src/views/private/ArticleFormView/interfaces';

export interface ArticleFormViewProps {
  articleTitle: string;
  articleContent: string;
  updateArticle: (field: ArticleFormFields, text: string) => void;
  uploadArticleImages: (e: DragEvent<HTMLTextAreaElement>) => void;
  uploadArticle: () => void;
}
