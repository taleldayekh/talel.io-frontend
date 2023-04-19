export interface ArticleMetaSchema {
  adjacent_articles: {
    next: {
      title: string;
      slug: string;
    } | null;
    prev: {
      title: string;
      slug: string;
    } | null;
  };
}
