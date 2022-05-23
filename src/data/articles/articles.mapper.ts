import {
  CreateArticlePayload,
  ArticleResponse,
} from 'src/data/articles/interfaces';
import CreateArticleViewModel from 'src/view-models/create-article/create-article.view-model';
import ArticleModel from 'src/models/article/article.model';
import ArticleViewModel from 'src/view-models/article/article.view-model';

export default class ArticlesMapper {
  public static toPayload(
    createArticleData: CreateArticleViewModel,
  ): CreateArticlePayload {
    return {
      title: createArticleData.title,
      body: createArticleData.body,
    };
  }

  public static toArticleModel(articleResponse: ArticleResponse): ArticleModel {
    return new ArticleModel(
      articleResponse.id,
      articleResponse.user_id,
      articleResponse.created_at,
      articleResponse.updated_at,
      articleResponse.title,
      articleResponse.meta_description,
      articleResponse.slug,
      articleResponse.body,
      articleResponse.html,
      articleResponse.featured_image,
      articleResponse.url,
    );
  }

  public static toArticleViewModel(article: ArticleModel): ArticleViewModel {
    return new ArticleViewModel(
      article.title,
      article.description,
      article.featuredImage,
      article.html,
      article.url,
      article.createdAt,
      // TODO: Remove empty string once db always returns a value for updated at
      article.updatedAt || '',
    );
  }
}
