import { useRouter } from 'next/navigation';
import { ArticlesControllerProps } from 'views/ArticlesView/interfaces';

export default function ArticlesController({
  render,
}: ArticlesControllerProps) {
  const router = useRouter();
  // get heroArticle [0]
  // get latestArticles [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  // useEffect(() => {
  //   ArticlesRepository.getArticles()
  //     .then((articlesRes) => {
  //       const articles = articlesRes.data;
  //       const latestArticleSlug = articles.articles[0].slug;

  //       router.push(`/articles/${latestArticleSlug}`, { scroll: false });
  //     })
  //     .catch((error) => {
  //       // TODO: Error handling
  //       console.log(error);
  //     });
  // });

  return render();
}
