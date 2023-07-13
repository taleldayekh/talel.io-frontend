import { ArticleIds } from 'components/Article/enums';
import { FooterIds } from 'components/Footer/enums';
import { useEffect } from 'react';
import { ArticleControllerProps } from 'views/ArticleView/interfaces';

export default function ArticleController({
  articleTitleRef,
  footerRef,
  setArticleTitleIsInView,
  setFooterIsInView,
  render,
}: ArticleControllerProps) {
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
