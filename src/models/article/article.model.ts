export default class ArticleModel {
  constructor(
    public id: string,
    public userId: string,
    public createdAt: string,
    public updatedAt: string | null,
    public title: string,
    public slug: string,
    public body: string,
    public html: string,
    public featuredImage: string,
  ) {}
}
