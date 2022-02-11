import {
  CreateArticlePayload,
  ArticleResponse,
} from 'src/data/articles/interfaces';
import CreateArticleViewModel from 'src/view-models/create-article/create-article.view-model';
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

  public static toArticleViewModel(
    articleResponse: ArticleResponse,
  ): ArticleViewModel {
    return new ArticleViewModel(
      articleResponse.title,
      articleResponse.html,
      articleResponse.created_at,
      articleResponse.updated_at,
    );
  }
}
