import { ArticleIds } from 'components/Article/enums';
import { FooterIds } from 'components/Footer/enums';
import { ArticlesRepository } from 'infrastructure/repositories/articles/articles.repository';
import { useEffect } from 'react';
import { ArticleControllerProps } from 'views/ArticleView/interfaces';
import ArticleMapper from 'views/ArticleView/mappers/article.mapper';

export default function ArticleController({
  slug,
  article,
  articleTitleRef,
  footerRef,
  setArticle,
  setArticleTitleIsInView,
  setFooterIsInView,
  render,
}: ArticleControllerProps) {
  useEffect(() => {
    if (!slug || article) return;

    ArticlesRepository.getArticle(slug)
      .then((articleRes) => {
        const article = ArticleMapper.fromResponseToArticleViewModel(
          articleRes.data,
        );

        setArticle(article);
      })
      .catch((error) => {
        // TODO: Error handling
        console.log(error);
      });
  }, [slug, article, setArticle]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([observerEntry]: IntersectionObserverEntry[]) => {
        const elementId = observerEntry.target.id;

        if (elementId === ArticleIds.ARTICLE_TITLE) {
          setArticleTitleIsInView(observerEntry.isIntersecting);
        }

        if (elementId === FooterIds.FOOTER) {
          setFooterIsInView(observerEntry.isIntersecting);
        }
      },
    );

    const articleTitle = articleTitleRef.current;
    const footer = footerRef.current;

    if (articleTitle) {
      intersectionObserver.observe(articleTitle);
    }

    if (footer) {
      intersectionObserver.observe(footer);
    }

    return () => {
      articleTitle && intersectionObserver.unobserve(articleTitle);
      footer && intersectionObserver.unobserve(footer);
    };
  });

  return render();
}
