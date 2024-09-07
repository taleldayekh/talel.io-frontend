import { getArticle } from 'infrastructure/repositories/articles/articles.repository';
import type { Viewport } from 'next';
import { Metadata } from 'next';
import ArticleView from 'views/ArticleView/ArticleView';
import ArticleMapper from 'views/ArticleView/mappers/article.mapper';

type Props = {
  params: {
    slug: string;
  };
};

export const viewport: Viewport = {
  themeColor: '#00111A',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  let documentHead: Metadata = {};

  try {
    const articleRes = await getArticle(slug);
    // TODO: Generalize document head implementation
    documentHead = ArticleMapper.fromResponseToDocumentHead(articleRes.data);
  } catch (error) {
    // TODO: Error handling
  }

  return documentHead;
}

export default async function Article({ params }: Props) {
  const { slug } = params;

  let article = undefined;

  try {
    const articleRes = await getArticle(slug);
    article = Object.assign(
      {},
      ArticleMapper.fromResponseToArticleViewModel(articleRes.data),
    );
  } catch (error) {
    // TODO: Error handling
  }

  return <ArticleView article={article} />;
}
