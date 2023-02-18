import { PaginationControllerProps } from 'components/Pagination/interfaces';

export default function PaginationController({ count, page, onChange, defaultTruncationBoundary, firstPage, setVisiblePaginationRange, render }: PaginationControllerProps) {
    const isPageWithinBoundaryFromStart = (page: number, defaultTruncationBoundary: number): boolean => {
        // Between 1 - 4
        return page > 0 && !(page > defaultTruncationBoundary - 1);
    }

    const isPageWithinBoundaryFromEnd = (page: number, count: number, defaultTruncationBoundary: number): boolean => {
        // Between e.g. 6 - 9
        return page > (count - defaultTruncationBoundary + 1) && page <= count;
    }

    const updateTruncatedPaginationRange = (activePage: number) => {
        // 3 pages range
        setVisiblePaginationRange({
            start: activePage - 2,
            end: activePage + 1,
        })
    }

    const onPrevClicked = () => {
        const prevPage = page - 1;
        const pageIsWithinBoundaryFromStart = isPageWithinBoundaryFromStart(page, defaultTruncationBoundary);
        const pageIsWithinBoundaryFromEnd = isPageWithinBoundaryFromEnd(page, count, defaultTruncationBoundary)

        if (prevPage > 0) {
            onChange(prevPage)
        }

        if (!pageIsWithinBoundaryFromStart && !pageIsWithinBoundaryFromEnd) {
            updateTruncatedPaginationRange(prevPage)
        }
    }

    const onNextClicked = () => {
        const nextPage = page + 1;

        // ! Error
        const pageIsWithinBoundaryFromStart = isPageWithinBoundaryFromStart(page, defaultTruncationBoundary);
        const pageIsWithinBoundaryFromEnd = isPageWithinBoundaryFromEnd(page, count, defaultTruncationBoundary)

        if (nextPage <= count) {
            onChange(nextPage)
        }

        if (!pageIsWithinBoundaryFromStart && !pageIsWithinBoundaryFromEnd) {
            updateTruncatedPaginationRange(nextPage)
        }
    }

    const onPageClicked = (page: number) => {
        onChange(page);

        const pageIsWithinBoundaryFromStart = isPageWithinBoundaryFromStart(page, defaultTruncationBoundary);
        const pageIsWithinBoundaryFromEnd = isPageWithinBoundaryFromEnd(page, count, defaultTruncationBoundary);

        if (
            !pageIsWithinBoundaryFromStart &&
            !pageIsWithinBoundaryFromEnd
        ) {
            // Update truncated pages
            updateTruncatedPaginationRange(page)
        }

        // use firstPage variable
        if (pageIsWithinBoundaryFromStart || page === firstPage) {
            setVisiblePaginationRange({
                start: firstPage,
                end: defaultTruncationBoundary
            })
        }
        // Maybe create some default end and first page variable
        if (pageIsWithinBoundaryFromEnd || page === count) {
            setVisiblePaginationRange({
                start: count - defaultTruncationBoundary,
                end: count - 1
            })
        }
    }

    return render(onPrevClicked, onNextClicked, onPageClicked, isPageWithinBoundaryFromStart, isPageWithinBoundaryFromEnd)
}
