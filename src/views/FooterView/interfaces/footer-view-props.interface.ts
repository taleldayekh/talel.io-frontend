import { HTMLElements } from 'src/shared/types';
import { FooterElements } from 'src/views/FooterView/interfaces';

export interface FooterViewProps {
  addElementRef: (
    element: HTMLElements | null,
    elementType: FooterElements,
  ) => void;
}
