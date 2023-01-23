import { useRouter } from 'next/router';
import ArticleContentView from 'views/ArticleContentView/ArticleContentView';

export default function Article() {
    const router = useRouter();
    const { slug } = router.query;

    return <ArticleContentView slug={slug as string}/>
}
