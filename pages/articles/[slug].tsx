import { useRouter } from 'next/router';
import ArticleView from 'views/ArticleView/ArticleView';

export default function Article() {
  const router = useRouter();
  const { slug } = router.query;

  return <ArticleView slug={slug as string} />;
}
