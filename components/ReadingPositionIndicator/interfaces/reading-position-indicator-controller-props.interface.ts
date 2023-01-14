import { MutableRefObject, Dispatch, SetStateAction, ReactElement } from 'react';

export interface ReadingPositionIndicatorControllerProps {
    contentRef: MutableRefObject<HTMLDivElement | null>;
    setEndPosition: Dispatch<SetStateAction<number>>;
    setCurrentPosition: Dispatch<SetStateAction<number>>;
    render: () => ReactElement;
}
