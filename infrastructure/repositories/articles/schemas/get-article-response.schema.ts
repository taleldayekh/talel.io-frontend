import {
  ArticleMetaSchema,
  ArticleResponseSchema,
} from 'infrastructure/repositories/articles/schemas/';

export interface GetArticleResponseSchema {
  meta: ArticleMetaSchema;
  article: ArticleResponseSchema;
}
