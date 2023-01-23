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
        this.formatDates();
    }

    private formatDates(): void {
        //
    }
}
