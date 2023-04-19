import {
  ArticleResponseSchema,
  ArticleUserSchema,
} from 'infrastructure/repositories/articles/schemas/';

export interface GetArticlesResponseSchema {
  user: ArticleUserSchema;
  articles: ArticleResponseSchema[];
}
