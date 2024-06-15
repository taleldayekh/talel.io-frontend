import { ArticlesRepository } from 'infrastructure/repositories/articles/articles.repository';
import ArticlesView from 'views/ArticlesView/ArticlesView';
import ArticlesMapper from 'views/ArticlesView/mappers/articles.mapper';
import ArticlesViewModel from 'views/ArticlesView/models/articles.view-model';

async function getArticles(): Promise<ArticlesViewModel[]> {
  const articlesRes = await ArticlesRepository.getArticles(1, 12);
  const articles = articlesRes.data.articles.map((articleRes) =>
    Object.assign(
      {},
      ArticlesMapper.fromResponseToArticlesViewModel(articleRes),
    ),
  );

  return articles;
}

export default async function Articles() {
  let articles = undefined;

  try {
    articles = await getArticles();
  } catch (error) {
    // TODO: Error handling
  }

  return <ArticlesView articles={articles} />;
}
