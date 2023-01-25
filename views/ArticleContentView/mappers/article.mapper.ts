import { ArticleMetaSchema, ArticleSchema } from 'infrastructure/repositories/articles/schemas';
import ArticleViewModel from 'components/Article/models/article.view-model';

export default class ArticleMapper {
    public static fromResponseToArticleViewModel(resData: ArticleMetaSchema & ArticleSchema) {
        const createdDate = new Date(resData.article.created_at);
        // Set update date to creation date if the update date is null due to a newly created article.
        const updatedDate = resData.article.updated_at !== null ? new Date(resData.article.updated_at) : new Date(resData.article.created_at);

        return new ArticleViewModel(
            resData.article.title,
            resData.article.featured_image,
            resData.article.html,
            createdDate,
            updatedDate
        )
    }
}
