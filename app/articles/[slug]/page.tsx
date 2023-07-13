import { Metadata } from 'next';
import { getArticle } from 'infrastructure/repositories/articles/articles.repository';
import ArticleView from 'views/ArticleView/ArticleView';
import ArticleMapper from 'views/ArticleView/mappers/article.mapper';

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  let documentHead: Metadata = {};

  try {
    const articleRes = await getArticle(slug);
    documentHead = ArticleMapper.fromResponseToDocumentHead(articleRes.data);
  } catch(error) {
    // TODO: Error handling
  }

  return documentHead;
}

export default async function Article({ params }: Props) {
  const { slug } = params;

  let article = undefined;

  try {
    const articleRes = await getArticle(slug);
    article = ArticleMapper.fromResponseToArticleViewModel(articleRes.data);
  } catch (error) {
    // TODO: Error handling
  }

  return <ArticleView article={article} />;
}
