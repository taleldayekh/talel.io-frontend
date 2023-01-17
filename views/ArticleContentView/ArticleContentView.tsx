import  { useRef } from 'react';
import ArticleContentController from 'views/ArticleContentView/ArticleContentController';
import styles from 'views/ArticleContentView/article-content-view.module.css';
// !
import DummyArticle from 'views/ArticleContentView/DummyArticle';
// !

export default function ArticleContentView() {
    const articleTitleRef = useRef<HTMLDivElement | null>(null);

    return (
        <ArticleContentController 
            articleTitleRef={articleTitleRef} render={() => (
                <>
                    <div className={styles['article-reading-position-indicator-bar']}></div>

                    {/* !! */}
                    <DummyArticle articleTitleRef={articleTitleRef}/>
                </>
        )}/>
    )
}
