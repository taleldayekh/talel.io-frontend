import { useEffect } from 'react';
import { PaginationControllerProps } from 'components/Pagination/interfaces';

export default function PaginationController({ count, page, paginationRange, setPaginationRange, onChange, render }: PaginationControllerProps) {
    useEffect(() => {
        const defaultBoundary = 5;

        setPaginationRange({
            boundaryStart: 0,
            boundaryEnd: defaultBoundary,
        })
    }, [])

    const onPrevClicked = () => {
        const prevPage = page - 1;

        if (prevPage < 1) {
            onChange(page)
        } else {
            const boundaryStart = paginationRange.boundaryStart - 1;

            if (boundaryStart >= 0) {
                setPaginationRange({
                    boundaryStart: boundaryStart,
                    boundaryEnd: paginationRange.boundaryEnd - 1,
                })
            }

            onChange(prevPage)
        }
    }

    const onNextClicked = () => {
        const nextPage = page + 1;

        if (nextPage > count) {
            onChange(page)
        } else {
            const boundaryEnd = paginationRange.boundaryEnd + 1;

            if (boundaryEnd < count) {
                setPaginationRange({
                    boundaryStart: paginationRange.boundaryStart + 1,
                    boundaryEnd: boundaryEnd,
                })
            }

            onChange(nextPage)
        }
    }

    const onPageClicked = (page: number) => {
        if (page === count) {
            // TODO: Should have the number 5 globally available and as the default boundary
            setPaginationRange({
                boundaryStart: count - 1 -5,
                boundaryEnd: count - 1,
            })
        }



        if (page === paginationRange.boundaryEnd && page < count - 1) {
            setPaginationRange({
                boundaryStart: paginationRange.boundaryStart + 1,
                boundaryEnd: paginationRange.boundaryEnd + 1
            })
        }

        if (page -1 === paginationRange.boundaryStart && page > 1) {
            setPaginationRange({
                boundaryStart: paginationRange.boundaryStart - 1,
                boundaryEnd: paginationRange.boundaryEnd - 1
            })
        }

        onChange(page)
    }

    return render(onPrevClicked, onNextClicked, onPageClicked);
}
