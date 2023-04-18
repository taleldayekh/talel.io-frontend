import {
  ArticleUserSchema,
  GetArticleResponseSchema,
} from 'infrastructure/repositories/articles/schemas/';

export interface GetArticlesResponseSchema {
  user: ArticleUserSchema;
  articles: GetArticleResponseSchema[];
}
