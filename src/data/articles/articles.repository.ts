import { CreateArticlePayload } from 'src/data/articles/interfaces';
import HttpClient from 'src/libs/http-client/http-client';
import { CREATE_ARTICLE } from 'src/data/api/resources';

export default class ArticlesRepository {
  constructor(private httpClient: typeof HttpClient) {}

  public async create(data: CreateArticlePayload): Promise<void> {
    await this.httpClient.post(CREATE_ARTICLE, data);
  }
}
