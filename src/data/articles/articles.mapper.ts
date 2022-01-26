import { CreateArticlePayload } from 'src/data/articles/interfaces';
import CreateArticleViewModel from 'src/view-models/create-article/create-article.view-model';

export default class ArticlesMapper {
  public static toPayload(
    createArticleData: CreateArticleViewModel,
  ): CreateArticlePayload {
    return {
      title: createArticleData.title,
      body: createArticleData.body,
    };
  }
}
