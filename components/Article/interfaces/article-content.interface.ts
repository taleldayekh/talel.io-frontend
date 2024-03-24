import { ArticleContentType } from 'components/Article/enums';

export interface ArticleContent {
  type: ArticleContentType;
  content: any;
}
