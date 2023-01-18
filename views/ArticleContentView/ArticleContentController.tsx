import { useEffect } from 'react';
import { ArticleContentControllerProps } from 'views/ArticleContentView/interfaces';
import { ArticleIds } from 'components/Article/enums';

export default function ArticleContentController({ articleTitleRef, footerRef, setArticleTitleIsInView, render }: ArticleContentControllerProps) {
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([observerEntry]: IntersectionObserverEntry[]) => {
            const elementId = observerEntry.target.id;

            if (elementId === ArticleIds.ARTICLE_TITLE) {
                setArticleTitleIsInView(observerEntry.isIntersecting)
            }
        })

        const articleTitle = articleTitleRef.current;
        const footer = footerRef.current;

        if (articleTitle) {
            intersectionObserver.observe(articleTitle)
        }

        if (footer) {
            //
        }

        return () => {
            articleTitle && intersectionObserver.unobserve(articleTitle);
        }
    })

    return render();
}
