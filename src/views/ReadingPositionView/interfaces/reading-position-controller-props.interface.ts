import { MutableRefObject, ReactNode } from 'react';

export interface ReadingPositionControllerProps {
  contentRef: MutableRefObject<HTMLDivElement | null>;
  children?: ReactNode;
}
