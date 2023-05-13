import ArticleController from 'components/Article/ArticleController';
import styles from 'components/Article/article.module.css';
import { ArticleIds } from 'components/Article/enums';
import { ArticleProps } from 'components/Article/interfaces';
import TextGlitch from 'components/TextGlitch/TextGlitch';
import { GlitchPositions } from 'components/TextGlitch/enums';
import Image from 'next/image';

export default function Article({
  article,
  articleContentRef,
  articleTitleRef,
}: ArticleProps) {
  return (
    <ArticleController
      tableOfContentsHTML={article.tableOfContents}
      render={() => (
        <>
          <main className={styles.article}>
            <div className={styles.article__hero__gradient} />
            <div className={styles.article__hero__image}>
              <Image
                src={article.featuredImageUrl}
                alt={`${article.title} Hero Image`}
                width={article.featuredImageDimensions.width}
                height={article.featuredImageDimensions.height}
              />
            </div>
            <div className={styles.article__details}>
              <div>
                <h1
                  id={ArticleIds.ARTICLE_TITLE}
                  className={styles.article__details__title}
                  ref={articleTitleRef}
                >
                  {article.title}
                </h1>
                <TextGlitch
                  className={styles.article__details__meta}
                  text={article.createdAt}
                  glitchPosition={GlitchPositions.TOP}
                />
                <TextGlitch
                  className={styles.article__details__meta}
                  text="Words by Talel Dayekh"
                  glitchPosition={GlitchPositions.BOTTOM}
                />
              </div>
            </div>
            <div className={styles.article__content} ref={articleContentRef}>
              <div
                className={`${styles['article__content__toc']}`}
                dangerouslySetInnerHTML={{ __html: article.tableOfContents }}
              />
              <div
                className={styles.article__content__md}
                dangerouslySetInnerHTML={{ __html: article.html }}
              />
            </div>
          </main>
        </>
      )}
    />
  );
}
