import { HttpResponse } from 'libs/http-client/interfaces';
import { ArticleMetaSchema, ArticleSchema } from 'infrastructure/repositories/articles/schemas';
import HttpClient from 'libs/http-client/http-client';

export default class ArticlesRepository {
    public static async getArticle(slug: string): Promise<HttpResponse<ArticleMetaSchema & ArticleSchema>> {
        return await HttpClient.get(`/articles/${slug}`);
    }
}
