'use client';
// ! Disabled rule due to indent spaces error in className
/* eslint-disable indent */
import Article from 'components/Article/Article';
import ArticleViewModel from 'components/Article/models/article.view-model';
import Footer from 'components/Footer/Footer';
import ReadingPositionIndicator from 'components/ReadingPositionIndicator/ReadingPositionIndicator';
import { useEffect, useRef, useState } from 'react';
import ArticleController from 'views/ArticleView/ArticleController';
import styles from 'views/ArticleView/article-view.module.css';
import { ArticleViewProps } from 'views/ArticleView/interfaces';

export default function ArticleView({ slug }: ArticleViewProps) {
  const articleTitleRef = useRef<HTMLDivElement | null>(null);
  const articleContentRef = useRef<HTMLDivElement | null>(null);
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

    /**
     * Prevents the reading position indicator from animating out
     * of view on the initial page load and only starts animating
     * once the user scrolled passed the article title.
     */
    if (articleTitleIsInView === false) {
      setIsInitialPageLoad(false);
    }
  }, [articleTitleIsInView, isInitialPageLoad]);

  return (
    <ArticleController
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
                  styles['article-reading-position-indicator-bar--visible']
                }
                ${
                  footerIsInView &&
                  styles['article-reading-position-indicator-bar--hidden']
                }
                ${
                  !isInitialPageLoad &&
                  styles['article-reading-position-indicator-bar--reappear']
                }
              `}
          >
            <ReadingPositionIndicator contentRef={articleContentRef.current} />
          </div>
          {article && (
            <>
              <Article
                article={article}
                articleTitleRef={articleTitleRef}
                articleContentRef={articleContentRef}
              />
              {/* Ensures footer is not in view
              before article becomes available */}
              <Footer footerRef={footerRef} />
            </>
          )}
        </>
      )}
    />
  );
}
