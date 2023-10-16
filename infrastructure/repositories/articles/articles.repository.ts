import {
  CreateArticleResponseSchema,
  GetArticleResponseSchema,
  GetArticlesResponseSchema,
} from 'infrastructure/repositories/articles/schemas';
import HttpClient from 'libs/http-client/http-client';
import { HttpResponse } from 'libs/http-client/interfaces';
import { cache } from 'react';

export const getArticle = cache(
  async (slug: string): Promise<HttpResponse<GetArticleResponseSchema>> => {
    return await HttpClient.get(`/articles/${slug}`);
  },
);

export class ArticlesRepository {
  public static async createArticle(
    title: string,
    description: string,
    featuredImageUrl: string,
    content: string,
  ): Promise<HttpResponse<CreateArticleResponseSchema>> {
    const createArticleData = {
      title,
      meta_description: description,
      featured_image: featuredImageUrl,
      body: content,
    };

    return await HttpClient.post('/articles', createArticleData);
  }

  public static async getArticles(
    page?: number,
    limit?: number,
  ): Promise<HttpResponse<GetArticlesResponseSchema>> {
    const paginationQueryParams =
      !!page && !!limit ? `?page${page}&limit=${limit}` : '';

    // TODO: Store dev and prod user in config
    return await HttpClient.get(
      `/users/talel/articles${
        paginationQueryParams.length ? paginationQueryParams : ''
      }`,
    );
  }
}
