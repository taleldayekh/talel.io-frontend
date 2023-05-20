import { PaginationControllerProps } from 'components/Pagination/interfaces';

export default function PaginationController({
  count,
  page,
  onChange,
  defaultTruncationBoundary,
  firstPage,
  setPaginationRange,
  render,
}: PaginationControllerProps) {
  const isPageWithinBoundaryFromStart = (
    page: number,
    defaultTruncationBoundary: number,
  ): boolean => {
    // Active page is between 1 - 4
    return page > 0 && !(page > defaultTruncationBoundary - 1);
  };

  const isPageWithinBoundaryFromEnd = (
    page: number,
    count: number,
    defaultTruncationBoundary: number,
  ): boolean => {
    // Active page is between e.g. 6 - 16 if page count is 20
    return page > count - defaultTruncationBoundary + 1 && page <= count;
  };

  const isPageOutsideBoundaries = (
    page: number,
    count: number,
    defaultTruncationBoundary: number,
  ): boolean => {
    return (
      page >= defaultTruncationBoundary &&
      page <= count - defaultTruncationBoundary + 2
    );
  };

  const updateTruncatedPaginationRange = (activePage: number) => {
    /**
     * Truncates with three visible page numbers
     * when not within any truncation boundaries.
     */
    setPaginationRange({
      start: activePage - 2,
      end: activePage + 1,
    });
  };

  const onPrevClicked = () => {
    const prevPage = page - 1;

    if (prevPage > 0) {
      onChange(prevPage);
    }

    const pageIsOutsideBoundaries = isPageOutsideBoundaries(
      prevPage,
      count,
      defaultTruncationBoundary,
    );

    if (pageIsOutsideBoundaries) {
      updateTruncatedPaginationRange(prevPage);
    }
  };

  const onNextClicked = () => {
    const nextPage = page + 1;

    if (nextPage <= count) {
      onChange(nextPage);
    }

    const pageIsOutsideBoundaries = isPageOutsideBoundaries(
      nextPage,
      count,
      defaultTruncationBoundary,
    );

    if (pageIsOutsideBoundaries) {
      updateTruncatedPaginationRange(nextPage);
    }
  };

  const onPageClicked = (page: number) => {
    onChange(page);

    const pageIsWithinBoundaryFromStart = isPageWithinBoundaryFromStart(
      page,
      defaultTruncationBoundary,
    );
    const pageIsWithinBoundaryFromEnd = isPageWithinBoundaryFromEnd(
      page,
      count,
      defaultTruncationBoundary,
    );

    if (!pageIsWithinBoundaryFromStart && !pageIsWithinBoundaryFromEnd) {
      updateTruncatedPaginationRange(page);
    }

    if (pageIsWithinBoundaryFromStart || page === firstPage) {
      setPaginationRange({
        start: firstPage,
        end: defaultTruncationBoundary,
      });
    }

    if (pageIsWithinBoundaryFromEnd || page === count) {
      setPaginationRange({
        start: count - defaultTruncationBoundary,
        end: count - 1,
      });
    }
  };

  return render(
    onPrevClicked,
    onNextClicked,
    onPageClicked,
    isPageWithinBoundaryFromStart,
    isPageWithinBoundaryFromEnd,
  );
}
