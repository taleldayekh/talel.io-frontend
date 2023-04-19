import {
  ArticleMetaSchema,
  ArticleSchema,
} from 'infrastructure/repositories/articles/schemas/';

export interface GetArticleResponseSchema {
  meta: ArticleMetaSchema;
  article: Omit<ArticleSchema, 'user_id'>;
}
