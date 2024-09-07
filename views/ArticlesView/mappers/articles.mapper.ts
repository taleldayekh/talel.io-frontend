import { ArticleSchema } from 'infrastructure/repositories/articles/schemas';
import ArticlesViewModel from 'views/ArticlesView/models/articles.view-model';

export default class ArticlesMapper {
  public static fromResponseToArticlesViewModel(
    articlesResData: Omit<ArticleSchema, 'user_id'>,
  ): ArticlesViewModel {
    // TODO: Consider using URL to a default image if none is provided
    const featuredImageUrl = articlesResData.featured_image || '';
    const createdDate = new Date(articlesResData.created_at);

    const updatedDate =
      articlesResData.updated_at !== null
        ? new Date(articlesResData.updated_at)
        : createdDate;

    return new ArticlesViewModel(
      articlesResData.id,
      createdDate,
      updatedDate,
      articlesResData.title,
      articlesResData.slug,
      articlesResData.meta_description,
      featuredImageUrl,
    );
  }
}
