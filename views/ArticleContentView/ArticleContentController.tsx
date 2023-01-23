import { useEffect } from 'react';
import ArticlesRepository from 'infrastructure/repositories/articles/articles.repository';
import { ArticleContentControllerProps } from 'views/ArticleContentView/interfaces';
import { ArticleIds } from 'components/Article/enums';
import { FooterIds } from 'components/Footer/enums';

export default function ArticleContentController({ slug, articleTitleRef, footerRef, setArticleTitleIsInView, setFooterIsInView, render }: ArticleContentControllerProps) {
    useEffect(() => {
        if (slug === undefined) return

        ArticlesRepository.getArticle(slug).then(articleRes => {
            console.log(articleRes)
        }).catch(error => {
            console.log(error)
            // TODO: Error handling
        })
    })

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(([observerEntry]: IntersectionObserverEntry[]) => {
            const elementId = observerEntry.target.id;

            if (elementId === ArticleIds.ARTICLE_TITLE) {
                setArticleTitleIsInView(observerEntry.isIntersecting)
            }

            if (elementId === FooterIds.FOOTER) {
                setFooterIsInView(observerEntry.isIntersecting)
            }
        })

        const articleTitle = articleTitleRef.current;
        const footer = footerRef.current;

        if (articleTitle) {
            intersectionObserver.observe(articleTitle)
        }

        if (footer) {
            intersectionObserver.observe(footer)
        }

        return () => {
            articleTitle && intersectionObserver.unobserve(articleTitle);
            footer && intersectionObserver.unobserve(footer);
        }
    })

    return render();
}
