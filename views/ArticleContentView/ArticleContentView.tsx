import  { useRef, useState, useEffect } from 'react';
import ArticleContentController from 'views/ArticleContentView/ArticleContentController';
import ReadingPositionIndicator from 'components/ReadingPositionIndicator/ReadingPositionIndicator';
import Footer from 'components/Footer/Footer';
import styles from 'views/ArticleContentView/article-content-view.module.css';
// !
import Article from 'components/Article/Article';
// !

export default function ArticleContentView() {
    const articleContentRef = useRef<HTMLDivElement | null>(null);
    const articleTitleRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);

    const [articleTitleIsInView, setArticleTitleIsInView] = useState<boolean>(true);
    const [footerIsInView, setFooterIsInView] = useState<boolean>(false);
    const [isInitialPageLoad, setIsInitialPageLoad] = useState<boolean>(true);

    useEffect(() => {
        if (isInitialPageLoad === false) return;

        // Prevents the reading position indicator from animating out
        // of view on the initial page load and only starts animating
        // once the user scrolled passed the article title once.
        if (articleTitleIsInView === false) {
            setIsInitialPageLoad(false);
        }
    }, [isInitialPageLoad, articleTitleIsInView])

    return (
        <ArticleContentController 
            articleTitleRef={articleTitleRef} 
            footerRef={footerRef}
            setArticleTitleIsInView={setArticleTitleIsInView}
            setFooterIsInView={setFooterIsInView}
            render={() => (
                <>
                    <div className={`
                        ${styles['article-reading-position-indicator-bar']} 
                        ${!articleTitleIsInView && styles['article-reading-position-indicator-bar--visible']} 
                        ${footerIsInView && styles['article-reading-position-indicator-bar--hidden']} 
                        ${!isInitialPageLoad && styles['article-reading-position-indicator-bar--reappear']}`}>
                        <ReadingPositionIndicator contentRef={articleContentRef}/>
                    </div>

                    {/* !! */}
                    <Article articleContentRef={articleContentRef} articleTitleRef={articleTitleRef}/>
                    <Footer footerRef={footerRef}/>
                </>
        )}/>
    )
}
