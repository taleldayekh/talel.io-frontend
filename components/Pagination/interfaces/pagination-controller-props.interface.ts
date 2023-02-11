import { Dispatch, SetStateAction, ReactElement } from 'react';
import { PaginationRange } from 'components/Pagination/interfaces';

export interface PaginationControllerProps {
    count: number;
    page: number;
    paginationRange: PaginationRange;
    setPaginationRange: Dispatch<SetStateAction<PaginationRange>>;
    onChange: (page: number) => void;
    render: (
        onPrevClicked: () => void,
        onNextClicked: () => void,
        onPageClicked: (page: number) => void
    ) => ReactElement;
}
