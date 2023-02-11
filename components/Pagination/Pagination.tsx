import { useState } from 'react';
import { PaginationProps, PaginationRange } from 'components/Pagination/interfaces';
import PaginationController from 'components/Pagination/PaginationController';

export default function Pagination({ count, page, onChange }: PaginationProps) {
    const [paginationRange, setPaginationRange] = useState<PaginationRange>({
        boundaryStart: 0,
        boundaryEnd: 0,
    })

    const pages = [...Array(count).keys()];

    console.log(page);
    console.log(paginationRange)

    return (
        <PaginationController count={count} page={page} paginationRange={paginationRange} setPaginationRange={setPaginationRange} onChange={onChange} render={(onPrevClicked, onNextClicked, onPageClicked) => (
            <>
                <button onClick={onPrevClicked}>Prev</button>
                {pages.slice(paginationRange.boundaryStart, paginationRange.boundaryEnd).map((page, index) => (
                    <button onClick={() => onPageClicked(page + 1)} key={index}>{page + 1}</button>
                ))}
                ...
                <button onClick={() => onPageClicked(count)}>{count}</button>
                <button onClick={onNextClicked}>Next</button>
            </>
        )}/>
    )
}
