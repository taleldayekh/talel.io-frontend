import {
  CreateArticlePayload,
  ArticleResponse,
} from 'src/data/articles/interfaces';
import { AxiosResponse } from 'axios';
import HttpClient from 'src/libs/http-client/http-client';
import { ARTICLES_CREATE, ARTICLES_LIST_ALL } from 'src/data/api/resources';

export default class ArticlesRepository {
  constructor(private httpClient: typeof HttpClient) {}

  public async create(data: CreateArticlePayload): Promise<void> {
    await this.httpClient.post(ARTICLES_CREATE, data);
  }

  public async getAll(): Promise<void> {
    const getProjectsResponse: AxiosResponse<ArticleResponse[]> =
      await this.httpClient.get(ARTICLES_LIST_ALL);

    console.log(getProjectsResponse);
  }
}
