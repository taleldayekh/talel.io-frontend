import ArticleController from 'components/Article/ArticleController';
import styles from 'components/Article/article.module.css';
import { ArticleContentType, ArticleIds } from 'components/Article/enums';
import { ArticleContent, ArticleProps } from 'components/Article/interfaces';
import BuyMeACoffeeWidget from 'components/BuyMeACoffeeWidget/BuyMeACoffeeWidget';
import ImageSlider from 'components/ImageSlider/ImageSlider';
import TextGlitch from 'components/TextGlitch/TextGlitch';
import ToC from 'components/ToC/ToC';
import { GlitchPositions } from 'components/TextGlitch/enums';
import { memo, useState } from 'react';

function Article({
  article,
  articleContentRef,
  articleTitleRef,
}: ArticleProps) {
  const [articleContent, setArticleContent] = useState<ArticleContent[]>([]);

  return (
    <ArticleController
      articleHTML={article.html}
      tableOfContentsHTML={article.tableOfContents}
      setArticleContent={setArticleContent}
      render={() => (
        <>
          <main className={styles.article}>
            <div className={styles.article__hero__gradient} />
            <div className={styles.article__hero__image}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.featuredImageUrl}
                alt={`${article.title} Hero Image`}
                width={article.featuredImageDimensions.width}
                height={article.featuredImageDimensions.height}
              />
            </div>
            <p className={styles['article__images-notice']}>
              Illustrations and photography by Talel Dayekh unless noted
            </p>
            <div className={styles.article__details}>
              <div>
                <h1
                  id={ArticleIds.ARTICLE_TITLE}
                  className={styles.article__details__title}
                  ref={articleTitleRef}
                >
                  {article.title}
                </h1>
                <div className={styles.article__details__meta}>
                  <TextGlitch
                    className={styles['article__details__meta__created-at']}
                    text={article.createdAt}
                    glitchPosition={GlitchPositions.TOP}
                  />
                  <TextGlitch
                    className={styles['article__details__meta__author']}
                    text="Words by Talel Dayekh"
                    glitchPosition={GlitchPositions.BOTTOM}
                  />
                </div>
              </div>
            </div>
            <div className={styles.article__content} ref={articleContentRef}>
              <div className={styles.article__content__toc}>
                <ToC tocHTML={article.tableOfContents} />
              </div>
              <div className={styles.article__content__md}>
                {articleContent.map((content: ArticleContent, index) => {
                  /* eslint-disable indent */
                  switch (content.type) {
                    case ArticleContentType.DEFAULT:
                      return (
                        <div
                          key={index}
                          dangerouslySetInnerHTML={{ __html: content.content }}
                        />
                      );
                    case ArticleContentType.GALLERY:
                      return (
                        <div
                          key={index}
                          className={styles['article__content__image-slider']}
                        >
                          <ImageSlider images={content.content} />
                        </div>
                      );
                  }
                })}
              </div>
            </div>
          </main>
          <BuyMeACoffeeWidget />
        </>
      )}
    />
  );
}

export default memo(Article);
