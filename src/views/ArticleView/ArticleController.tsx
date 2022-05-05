import { ArticleElements } from 'src/views/ArticleView/interfaces';
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

  const articleTitleRef = useRef<HTMLHeadingElement | null>(null);
  const articleContentRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

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
    const intersectionObserver = new IntersectionObserver(([observerEntry]) => {
      const element = observerEntry.target.id;

      element === ArticleElements.articleTitle &&
        setArticleTitleIsVisible(observerEntry.isIntersecting);

      element === FooterElements.footer &&
        setFooterIsVisible(observerEntry.isIntersecting);
    });

    const title = articleTitleRef.current;
    const footer = footerRef.current;

    title && intersectionObserver.observe(title);
    footer && intersectionObserver.observe(footer);

    return () => {
      title && intersectionObserver.unobserve(title);
      footer && intersectionObserver.unobserve(footer);
    };
  });

  // Todo: Navigate to 404 if article cannot be found.
  return article ? (
    <>
      <ArticleStatusBarController
        articleTitle={article.title}
        articleContentRef={articleContentRef}
        articleTitleIsVisible={articleTitleIsVisible}
        footerIsVisible={footerIsVisible}
      />
      <ArticleView
        article={article}
        articleContentRef={articleContentRef}
        articleTitleRef={articleTitleRef}
      />
      <FooterView footerRef={footerRef} />
    </>
  ) : (
    <p>404 Not Found</p>
  );
};

export default ArticleController;
