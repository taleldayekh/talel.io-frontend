import { ArticleIds } from 'components/Article/enums';
import { FooterIds } from 'components/Footer/enums';
import { useEffect } from 'react';
import { ArticleContentControllerProps } from 'views/ArticleContentView/interfaces';

export default function ArticleContentController({
  slug,
  article,
  articleTitleRef,
  footerRef,
  setArticle,
  setArticleTitleIsInView,
  setFooterIsInView,
  render,
}: ArticleContentControllerProps) {
  useEffect(() => {
    if (!slug || article) return;

    // ArticlesRepository.getArticle(slug)
    //   .then((articleRes) => {
    //     const article = ArticleMapper.fromResponseToArticleViewModel(
    //       articleRes.data,
    //     );
    //     setArticle(article);
    //   })
    //   .catch((error) => {
    //     // TODO: Error handling
    //   });
  });

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
