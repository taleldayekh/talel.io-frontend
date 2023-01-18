import  { useRef, useState } from 'react';
import ArticleContentController from 'views/ArticleContentView/ArticleContentController';
import styles from 'views/ArticleContentView/article-content-view.module.css';
// !
import Article from 'components/Article/Article';
// !

export default function ArticleContentView() {
    const articleTitleRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);

    const [articleTitleIsInView, setArticleTitleIsInView] = useState<boolean>(true);

    return (
        <ArticleContentController 
            articleTitleRef={articleTitleRef} 
            footerRef={footerRef}
            setArticleTitleIsInView={setArticleTitleIsInView}
            render={() => (
                <>
                    <div className={styles['article-reading-position-indicator-bar']}></div>

                    {/* !! */}
                    <Article articleTitleRef={articleTitleRef}/>
                </>
        )}/>
    )
}
