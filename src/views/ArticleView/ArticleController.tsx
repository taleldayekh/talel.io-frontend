import { HTMLElements } from 'src/shared/types';
import { ArticleRefs, ArticleElements } from 'src/views/ArticleView/interfaces';
import { FooterElements } from 'src/views/FooterView/interfaces';
import { useRef, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HttpClient from 'src/libs/http-client/http-client';
import { ArticlesContext } from 'src/contexts/articles/articles.context';
import ArticlesRepository from 'src/data/articles/articles.repository';
import ArticlesMapper from 'src/data/articles/articles.mapper';
import ArticleViewModel from 'src/view-models/article/article.view-model';
import ArticleStatusBarController from 'src/views/ArticleStatusBarView/ArticleStatusBarController';
import ArticleView from 'src/views/ArticleView/ArticleView';
import FooterView from 'src/views/FooterView/FooterView';

const ArticleController = (): JSX.Element => {
  const slug = useParams().slug;

  const articleRefs = useRef<HTMLElements[]>([]);

  const { articles } = useContext(ArticlesContext);

  const [articlesRepository] = useState<ArticlesRepository>(
    new ArticlesRepository(HttpClient),
  );

  const [article, setArticle] = useState<ArticleViewModel>();
  const [articleTitleIsVisible, setArticleTitleIsVisible] =
    useState<boolean>(true);
  const [footerIsVisible, setFooterIsVisible] = useState<boolean>(false);

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
      (observerEntries: IntersectionObserverEntry[]) => {
        observerEntries.forEach((observerEntry) => {
          const element = observerEntry.target.id;

          element === ArticleElements.articleTitle &&
            setArticleTitleIsVisible(observerEntry.isIntersecting);

          element === FooterElements.footer &&
            setFooterIsVisible(observerEntry.isIntersecting);
        });
      },
    );

    const articleTitleRef = articleRefs.current[ArticleRefs.articleTitle];
    const footerRef = articleRefs.current[ArticleRefs.footer];

    articleTitleRef && intersectionObserver.observe(articleTitleRef);
    footerRef && intersectionObserver.observe(footerRef);

    return () => {
      articleTitleRef && intersectionObserver.unobserve(articleTitleRef);
      footerRef && intersectionObserver.unobserve(footerRef);
    };
  });

  const addElementRef = (
    element: HTMLElements | null,
    elementType: FooterElements | ArticleElements,
  ): void => {
    const currentArticleRefs = articleRefs.current;

    if (element && !currentArticleRefs.includes(element)) {
      elementType === ArticleElements.articleTitle &&
        (currentArticleRefs[ArticleRefs.articleTitle] = element);

      elementType === FooterElements.footer &&
        (currentArticleRefs[ArticleRefs.footer] = element);
    }
  };

  // Todo: Navigate to 404 if article cannot be found.
  return article ? (
    <>
      <ArticleStatusBarController
        articleTitle={article.title}
        articleTitleIsVisible={articleTitleIsVisible}
        footerIsVisible={footerIsVisible}
      />
      <ArticleView article={article} addElementRef={addElementRef} />
      <FooterView addElementRef={addElementRef} />
    </>
  ) : (
    <p>404 Not Found</p>
  );
};

export default ArticleController;
