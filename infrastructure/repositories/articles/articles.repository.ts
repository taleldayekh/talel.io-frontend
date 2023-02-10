import { HttpResponse } from 'libs/http-client/interfaces';
import { ArticleMetaSchema, ArticleSchema, ArticlesSchema, ArticleUserSchema } from 'infrastructure/repositories/articles/schemas';
import HttpClient from 'libs/http-client/http-client';

export default class ArticlesRepository {
    public static async getArticles(page?: number, limit?: number): Promise<HttpResponse<ArticleUserSchema & ArticlesSchema>> {
        const paginationQueryParams = (!!page && !!limit) ? `?page${page}&limit=${limit}` : '';

        return await HttpClient.get(`/users/taleldayekh/articles${paginationQueryParams.length ? paginationQueryParams : ''}`)
    }

    public static async getArticle(slug: string): Promise<HttpResponse<ArticleMetaSchema & ArticleSchema>> {
        return await HttpClient.get(`/articles/${slug}`);
    }

    // TODO: Check if return type includes meta and add return type.
    public static async createArticle(title: string, description: string, content: string) {
        const createArticleData = {
            title,
            meta_description: description,
            body: content,
        }

        return await HttpClient.post('/articles', createArticleData)
    }
}
