export default class ArticleViewModel {
    public createdAt = '';
    public updatedAt = '';

    constructor(
        public title: string,
        public featuredImage: string,
        public html: string,
        private createdDate: Date,
        private updatedDate: Date,
    ) {
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
        const articleWasUpdated = this.updatedDate.getTime() > this.createdDate.getTime();
        const hoursSincePublish = Math.abs(Date.now() - this.createdDate.getTime()) / (1000*60*60);

        if (hoursSincePublish < 24) {
            this.createdAt = `${hoursSincePublish} ago`
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
