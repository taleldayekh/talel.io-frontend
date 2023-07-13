import { getArticle } from 'infrastructure/repositories/articles/articles.repository';
import ArticleView from 'views/ArticleView/ArticleView';

// TODO: typing
export async function generateMetadata({ params }: any) {
  const { slug } = params;
  const article = getArticle(slug);
}

export default async function Article({ params }: any) {
  const { slug } = params;
  const article = getArticle(slug);

  return <ArticleView slug={slug} />;
}
