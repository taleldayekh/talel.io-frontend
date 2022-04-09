import DOMPurify from 'dompurify';

export default class ArticleViewModel {
  public createdDate = '';
  public updatedDate = '';

  constructor(
    public title: string,
    public html: string,
    private createdAt: string,
    private updatedAt: string,
  ) {
    this.html = DOMPurify.sanitize(html);
    this.setFormattedDates();
  }

  private setFormattedDates(): void {
    const createdDate = new Date(this.createdAt);
    const updatedDate = new Date(this.updatedAt);

    const wasUpdated = updatedDate.getTime() > createdDate.getTime();

    wasUpdated
      ? (this.updatedDate = this.formatDate(updatedDate))
      : (this.updatedDate = '');

    this.createdDate = this.formatDate(createdDate);
  }

  private formatDate(date: Date): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }
}
