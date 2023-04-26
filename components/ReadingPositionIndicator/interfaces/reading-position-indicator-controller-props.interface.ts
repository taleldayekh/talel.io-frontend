import { Dispatch, ReactElement, SetStateAction } from 'react';

export interface ReadingPositionIndicatorControllerProps {
  contentRef: HTMLDivElement | null;
  setEndPosition: Dispatch<SetStateAction<number>>;
  setCurrentPosition: Dispatch<SetStateAction<number>>;
  render: () => ReactElement;
}
