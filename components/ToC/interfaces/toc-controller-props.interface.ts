import { ReactElement, RefObject, SetStateAction, Dispatch } from 'react';
import { ToC } from 'components/ToC/interfaces';

export interface ToCControllerProps {
  tocHTML: string;
  setToC: Dispatch<SetStateAction<ToC[]>>;
  subHeadingsRef: RefObject<(HTMLUListElement | null)[]>;
  render: (
    handleDisplaySubHeadings: (headingIndex: number) => void,
  ) => ReactElement;
}
