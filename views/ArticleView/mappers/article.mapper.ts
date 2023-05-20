import ArticleViewModel from 'components/Article/models/article.view-model';
import { GetArticleResponseSchema } from 'infrastructure/repositories/articles/schemas';

export default class ArticleMapper {
  public static fromResponseToArticleViewModel(
    articleResData: GetArticleResponseSchema,
  ): ArticleViewModel {
    // TODO: Consider using URL to a default featured image if none is provided
    const featuredImageUrl = articleResData.article.featured_image || '';
    const createdDate = new Date(articleResData.article.created_at);

    // Set the updated date to equal the create date if the
    // updated date is null due to a newly created article.
    const updatedDate =
      articleResData.article.updated_at !== null
        ? new Date(articleResData.article.updated_at)
        : createdDate;

    return new ArticleViewModel(
      articleResData.article.title,
      featuredImageUrl,
      articleResData.article.html,
      articleResData.article.table_of_contents,
      createdDate,
      updatedDate,
    );
  }
}
