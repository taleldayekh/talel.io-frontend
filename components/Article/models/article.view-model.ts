export default class ArticleViewModel {
  public createdAt = '';
  public updatedAt = '';
  public featuredImageDimensions = {
    width: 4000,
    height: 2094,
  };

  constructor(
    public title: string,
    public featuredImageUrl: string,
    public html: string,
    public tableOfContents: string,
    private createdDate: Date,
    private updatedDate: Date,
  ) {
    this.html = html;
    this.tableOfContents = tableOfContents;
    this.setDates();
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

  private setDates(): void {
    const articleWasUpdated =
      this.updatedDate.getTime() > this.createdDate.getTime();
    const hoursSincePublish = Math.floor(
      Math.abs(Date.now() - this.createdDate.getTime()) / (1000 * 60 * 60),
    );

    if (hoursSincePublish < 1) {
      this.createdAt = 'Published now';
    } else if (hoursSincePublish < 24) {
      this.createdAt = `Published ${hoursSincePublish} hours ago`;
    } else {
      this.createdAt = this.formatDate(this.createdDate);
    }

    if (articleWasUpdated) {
      this.updatedAt = this.formatDate(this.updatedDate);
    } else {
      this.updatedAt = '';
    }
  }
}
