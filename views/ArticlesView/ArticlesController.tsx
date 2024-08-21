import { useRouter } from 'next/navigation';
import { ArticlesControllerProps } from 'views/ArticlesView/interfaces';

export default function ArticlesController({
  render,
}: ArticlesControllerProps) {
  const router = useRouter();

  // TODO: Consider a routing service
  const navigateToArticle = (slug: string) => {
    router.push(`/articles/${slug}`, { scroll: false });
  };
  return render(navigateToArticle);
}
