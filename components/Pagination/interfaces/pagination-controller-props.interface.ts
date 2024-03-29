import { PaginationRange } from 'components/Pagination/interfaces';
import { Dispatch, ReactElement, SetStateAction } from 'react';

export interface PaginationControllerProps {
  count: number;
  page: number;
  firstPage: number;
  onChange: (page: number) => void;
  defaultTruncationBoundary: number;
  setPaginationRange: Dispatch<SetStateAction<PaginationRange>>;
  render: (
    onPrevClicked: () => void,
    onNextClicked: () => void,
    onPageClicked: (page: number) => void,
    isPageWithinBoundaryFromStart: (
      page: number,
      defaultTruncationBoundary: number,
    ) => boolean,
    isPageWithinBoundaryFromEnd: (
      page: number,
      count: number,
      defaultTruncationBoundary: number,
    ) => boolean,
  ) => ReactElement;
}
