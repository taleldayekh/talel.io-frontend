import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ArticlesRepository from 'infrastructure/repositories/articles/articles.repository';
import { ArticlesControllerProps } from 'views/ArticlesView/interfaces';

export default function ArticlesController({ render }: ArticlesControllerProps) {
    const router = useRouter();

    useEffect(() => {
        ArticlesRepository.getArticles().then((articlesRes) => {
            const articles = articlesRes.data;
            const latestArticleSlug = articles.articles[0].slug;

            router.push(`/articles/${latestArticleSlug}`)
        }).catch((error) => {
            //
        })
    })

    return render();
}
