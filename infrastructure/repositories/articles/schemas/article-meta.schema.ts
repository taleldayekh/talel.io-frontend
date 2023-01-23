export interface ArticleMetaSchema {
    meta: {
        adjacent_articles: {
            next: {
                title: string,
                slug: string
            } | null,
            prev: {
                title: string,
                slug: string
            } | null
        }
    },
}
