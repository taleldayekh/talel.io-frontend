import { ReactElement } from 'react';

export interface ArticleControllerProps {
  tableOfContentsHTML: string;
  render: () => ReactElement;
}
