import DOMPurify from 'dompurify';

export default class ArticleViewModel {
  constructor(
    public title: string,
    public html: string,
    public createdAt: string,
    public updatedAt: string,
  ) {
    this.html = DOMPurify.sanitize(html);
  }
}
