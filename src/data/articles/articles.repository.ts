import {
  CreateArticlePayload,
  ArticleResponse,
} from 'src/data/articles/interfaces';
import { AxiosResponse } from 'axios';
import HttpClient from 'src/libs/http-client/http-client';
import ArticlesMapper from 'src/data/articles/articles.mapper';
import ArticleModel from 'src/models/article/article.model';
import { ARTICLES_CREATE, ARTICLES_LIST_ALL } from 'src/data/api/resources';

export default class ArticlesRepository {
  constructor(private httpClient: typeof HttpClient) {}

  public async create(data: CreateArticlePayload): Promise<void> {
    await this.httpClient.post(ARTICLES_CREATE, data);
  }

  public async getAll(): Promise<ArticleModel[]> {
    const getArticlesResponse: AxiosResponse<ArticleResponse[]> =
      await this.httpClient.get(ARTICLES_LIST_ALL);
    const articles = getArticlesResponse.data.map((article) =>
      ArticlesMapper.toArticle(article),
    );

    return articles;
  }
}
