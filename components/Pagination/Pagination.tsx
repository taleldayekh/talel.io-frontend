import { useState } from 'react';
import { PaginationProps, VisiblePaginationRange } from 'components/Pagination/interfaces';
import PaginationController from 'components/Pagination/PaginationController';

export default function Pagination({ count, page, onChange }: PaginationProps) {
    /**
     * Page number from start or end of pagination
     * range where the pages start being truncated.
     */
    const defaultTruncationBoundary = 5;

    /**
     * Stores the start and end values of the visible
     * page numbers. By default the first page number
     * up until the truncation boundary are displayed.
     */
    const [visiblePaginationRange, setVisiblePaginationRange] = useState<VisiblePaginationRange>({
        start: 1,
        end: defaultTruncationBoundary,
    })

    /**
     * isPageWithinBoundaryFromStart defines whether the current page is a
     * value between the first page and the truncation boundary, 1 to 4.
     * 
     * isPageWithinBoundaryFromEnd defines whether the current page is a
     * value between the last page and the truncation boundary e.g. 6 to 
     * 9 if the last page is 10.
     */
    const isPageWithinBoundaryFromStart = page > 0 && !(page > defaultTruncationBoundary - 1);
    const isPageWithinBoundaryFromEnd = page > (count - defaultTruncationBoundary + 1) && page <= count;

    // TODO: Takes into consideration the hardcoded start and end page numbers
    const paginationRangeStart = isPageWithinBoundaryFromStart ? 1 : visiblePaginationRange.start;
    const paginationRangeEnd = isPageWithinBoundaryFromEnd ? count - 1 : visiblePaginationRange.end;

    const pages = [...Array(count).keys()];

    return (
        <PaginationController
            count={count} 
            page={page}
            onChange={onChange}
            isPageWithinBoundaryFromStart={isPageWithinBoundaryFromStart}
            isPageWithinBoundaryFromEnd={isPageWithinBoundaryFromEnd}
            setVisiblePaginationRange={setVisiblePaginationRange}
            render={(onPrevClicked, onNextClicked) => (
                <>
                    <button onClick={onPrevClicked}>Prev</button>
                    {/* First page button */}
                    <button style={{backgroundColor: page === 1 ? 'orange' : ''}}>1</button>{!isPageWithinBoundaryFromStart && '...'}
                    {
                        pages.slice(paginationRangeStart, paginationRangeEnd).map((activePage, index) => {
                            return (
                                <button 
                                    style={{backgroundColor: page === activePage + 1 ? 'orange' : ''}} 
                                    key={index}>
                                        {activePage + 1}
                                </button>
                            )
                        })
                    }



                    {/* Last page button */}
                    {!isPageWithinBoundaryFromEnd && '...'}<button
                        style={{backgroundColor: page === count ? 'orange' : ''}}
                    >{count}</button>
                    <button onClick={onNextClicked}>Next</button>
                </>
            )}
        />
    )
}