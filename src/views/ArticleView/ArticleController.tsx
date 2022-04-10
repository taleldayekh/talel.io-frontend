import { useRef, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HttpClient from 'src/libs/http-client/http-client';
import { ArticlesContext } from 'src/contexts/articles/articles.context';
import ArticlesRepository from 'src/data/articles/articles.repository';
import ArticlesMapper from 'src/data/articles/articles.mapper';
import ArticleStatusBarController from 'src/views/ArticleStatusBarView/ArticleStatusBarController';
import ArticleViewModel from 'src/view-models/article/article.view-model';
import ArticleView from 'src/views/ArticleView/ArticleView';

const ArticleController = (): JSX.Element => {
  const slug = useParams().slug;

  const articleTitleRef = useRef(null);

  const { articles } = useContext(ArticlesContext);

  const [articlesRepository] = useState<ArticlesRepository>(
    new ArticlesRepository(HttpClient),
  );

  const [article, setArticle] = useState<ArticleViewModel>();
  const [articleTitleIsVisible, setArticleTitleIsVisible] =
    useState<boolean>(true);

  useEffect(() => {
    if (!slug) return;

    const articleFromContext = articles.find(
      (article) => article.slug === slug,
    );

    if (articleFromContext) {
      setArticle(ArticlesMapper.toArticleViewModel(articleFromContext));
    } else {
      // Todo: Error handling.
      articlesRepository
        .getBySlug(slug)
        .then((article) =>
          setArticle(ArticlesMapper.toArticleViewModel(article)),
        );
    }
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([observerEntry]: IntersectionObserverEntry[]) => {
        const elementIsVisible = observerEntry.isIntersecting;

        setArticleTitleIsVisible(elementIsVisible);
      },
    );
    const currentArticleTitleRef = articleTitleRef.current;

    currentArticleTitleRef &&
      intersectionObserver.observe(currentArticleTitleRef);

    return () => {
      currentArticleTitleRef &&
        intersectionObserver.unobserve(currentArticleTitleRef);
    };
  });

  // Todo: Navigate to 404 if article cannot be found.
  return article && article.title ? (
    <>
      <ArticleStatusBarController
        displayArticleStatusBar={articleTitleIsVisible}
      />
      <ArticleView article={article} articleTitleRef={articleTitleRef} />
    </>
  ) : (
    <p>404 Not Found</p>
  );
};

export default ArticleController;
