export default class ArticleModel {
  constructor(
    public id: string,
    public userId: string,
    public createdAt: string,
    public updatedAt: string | null,
    public title: string,
    public body: string,
    public html: string,
  ) {}
}
