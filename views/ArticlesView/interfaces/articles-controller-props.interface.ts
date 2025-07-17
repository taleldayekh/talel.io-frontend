import { ReactElement } from 'react';

export interface ArticlesControllerProps {
  render: (navigateToArticle: (slug: string) => void) => ReactElement;
}
