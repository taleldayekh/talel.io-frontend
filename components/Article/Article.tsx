import { ArticleProps } from 'components/Article/interfaces';
import { streamster } from 'assets/fonts/fonts';
import styles from 'components/Article/article.module.css';

export default function Article({
    article,
    articleContentRef,
    articleTitleRef
}: ArticleProps) {
    return (
        <>
            <main className={styles.article}>
                <div className={styles.article__hero__gradient}/>
                <div className={styles.article__hero__image}>
                    <img src={article.featuredImage} alt={`${article.title} Hero Image`}/>
                </div>
                {/* <h1 className={`${streamster.className} ${styles.article__title}`}>
                    {article.title}
                </h1> */}
                <div className={styles.article__content}>
                    {/* <div className={styles['article__content__table-of-contents']}>
                        <ul>
                            <li>One</li>
                            <li>Two</li>
                            <li>Three</li>
                            <li>Four</li>
                            <li>Five</li>
                        </ul>
                    </div> */}
                    <div
                        className={styles.article__content__md}
                        dangerouslySetInnerHTML={{ __html: article.html }}
                    />
                </div>
            </main>
        </>
    )
}
