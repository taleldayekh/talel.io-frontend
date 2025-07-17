import { ArticlesRepository } from 'infrastructure/repositories/articles/articles.repository';
import { Metadata } from 'next';
import ArticlesMapper from 'views/ArticlesView/mappers/articles.mapper';
import ArticlesViewModel from 'views/ArticlesView/models/articles.view-model';
import ArticlesView from 'views/ArticlesView/ArticlesView';

export async function generateMetadata(): Promise<Metadata> {
  // TODO: Generalize document head implementation
  let documentHead: Metadata = {
    title: 'Articles',
  };

  return documentHead;
}

async function getArticles(): Promise<ArticlesViewModel[]> {
  const articlesRes = await ArticlesRepository.getArticles();
  const articles = articlesRes.data.articles;

  // TODO: Check what API returns if no articles are found
  if (articles && articles.length) {
    return articles.map((article) =>
      ArticlesMapper.fromResponseToArticlesViewModel(article),
    );
  }

  return [];
}

export default async function Articles() {
  let articles: ArticlesViewModel[] = [];

  try {
    // TODO: Find a consistent approach for converting models to plain objects
    articles = (await getArticles()).map((article) =>
      Object.assign({}, article),
    );
  } catch (error) {
    // TODO: Error handling
    console.warn(error);
  }

  return <ArticlesView articles={articles} />;
}
