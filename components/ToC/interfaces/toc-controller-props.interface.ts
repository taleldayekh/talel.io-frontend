import { ReactElement, RefObject, SetStateAction, Dispatch } from 'react';
import { ToC } from 'components/ToC/interfaces';

export interface ToCControllerProps {
  tocHTML: string;
  toc: ToC[];
  setToC: Dispatch<SetStateAction<ToC[]>>;
  setHighlightedHeading: Dispatch<SetStateAction<string>>;
  subHeadingsRef: RefObject<(HTMLUListElement | null)[]>;
  render: (
    handleHeadingClick: (heading: string) => void,
    handleDisplaySubHeadings: (headingIndex: number) => void,
  ) => ReactElement;
}
