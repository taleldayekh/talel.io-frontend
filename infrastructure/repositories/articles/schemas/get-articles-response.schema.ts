import {
  ArticleSchema,
  ArticleUserSchema,
} from 'infrastructure/repositories/articles/schemas/';

export interface GetArticlesResponseSchema {
  user: ArticleUserSchema;
  articles: Omit<ArticleSchema, 'user_id'>[];
}
