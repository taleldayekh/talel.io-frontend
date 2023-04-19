import Article from 'components/Article/Article';
import ArticleViewModel from 'components/Article/models/article.view-model';
import ReadingPositionIndicator from 'components/ReadingPositionIndicator/ReadingPositionIndicator';
import { useEffect, useRef, useState } from 'react';
import ArticleContentController from 'views/ArticleContentView/ArticleContentController';
import styles from 'views/ArticleContentView/article-content-view.module.css';
import { ArticleContentViewProps } from 'views/ArticleContentView/interfaces';

export default function ArticleContentView({ slug }: ArticleContentViewProps) {
  const articleContentRef = useRef<HTMLDivElement | null>(null);
  const articleTitleRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

  const [article, setArticle] = useState<ArticleViewModel | undefined>(
    undefined,
  );
  const [articleTitleIsInView, setArticleTitleIsInView] =
    useState<boolean>(true);
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
  }, [isInitialPageLoad, articleTitleIsInView]);

  return (
    <ArticleContentController
      slug={slug}
      article={article}
      articleTitleRef={articleTitleRef}
      footerRef={footerRef}
      setArticle={setArticle}
      setArticleTitleIsInView={setArticleTitleIsInView}
      setFooterIsInView={setFooterIsInView}
      render={() => (
        <>
          <div
            className={`
                        ${styles['article-reading-position-indicator-bar']} 
                        ${
                          !articleTitleIsInView &&
                          styles[
                            'article-reading-position-indicator-bar--visible'
                          ]
                        } 
                        ${
                          footerIsInView &&
                          styles[
                            'article-reading-position-indicator-bar--hidden'
                          ]
                        } 
                        ${
                          !isInitialPageLoad &&
                          styles[
                            'article-reading-position-indicator-bar--reappear'
                          ]
                        }`}
          >
            <ReadingPositionIndicator contentRef={articleContentRef} />
          </div>

          {/* !! */}
          {article !== undefined && (
            <Article
              article={article}
              articleContentRef={articleContentRef}
              articleTitleRef={articleTitleRef}
            />
          )}
          {/* <Footer footerRef={footerRef}/> */}
        </>
      )}
    />
  );
}
