import { useState } from 'react';
import { PaginationProps, PaginationRange } from 'components/Pagination/interfaces';
import PaginationController from 'components/Pagination/PaginationController';
import styles from 'components/Pagination/pagination.module.css';

export default function Pagination({ count, page, onChange }: PaginationProps) {
    /**
     * Number of pages counting from start or end
     * after which the page range gets truncated.
     */
    const defaultTruncationBoundary = 5;
    const pages = [...Array(count).keys()];
    const firstPage = 1;

    // Stores the start and end values for the truncated page range.
    const [paginationRange, setPaginationRange] = useState<PaginationRange>({
        start: firstPage,
        end: defaultTruncationBoundary
    })

    return (
        <PaginationController
            count={count}
            page={page}
            firstPage={firstPage}
            onChange={onChange}
            defaultTruncationBoundary={defaultTruncationBoundary}
            setPaginationRange={setPaginationRange}
            render={(
                onPrevClicked, 
                onNextClicked, 
                onPageClicked, 
                isPageWithinBoundaryFromStart, 
                isPageWithinBoundaryFromEnd) => {
                const pageIsWithinBoundaryFromStart = isPageWithinBoundaryFromStart(page, defaultTruncationBoundary);
                const pageIsWithinBoundaryFromEnd = isPageWithinBoundaryFromEnd(page, count, defaultTruncationBoundary);
                
                return (
                    <>
                        <button onClick={onPrevClicked}>{'<'}</button>
                        {/* First page button */}
                        <button className={`${page === firstPage && styles['pagination__page-button--active']}`} onClick={() => onPageClicked(firstPage)}>
                            {firstPage}
                        </button>{!pageIsWithinBoundaryFromStart && '...'}
                        {
                            pages.slice(
                                pageIsWithinBoundaryFromStart ? 1 : paginationRange.start,
                                pageIsWithinBoundaryFromEnd ? count - 1 : paginationRange.end
                            ).map((pageInRange, index) => {
                                // Accounts for 0 index
                                const activePage = pageInRange + 1

                                return (
                                    <button className={`${page === activePage && styles['pagination__page-button--active']}`} key={index} onClick={() => onPageClicked(activePage)}>
                                        { activePage}
                                    </button>
                                )
                            })
                        }
                        {/* Last page button */}
                        {!pageIsWithinBoundaryFromEnd && '...'}<button className={`${page === count && styles['pagination__page-button--active']}`} onClick={() => onPageClicked(count)}>
                            {count}
                        </button>
                        <button onClick={onNextClicked}>{'>'}</button>
                    </>
                )
            }}
        />
    )
}
