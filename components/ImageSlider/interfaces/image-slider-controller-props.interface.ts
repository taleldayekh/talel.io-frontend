import { Image } from 'components/ImageSlider/interfaces';
import {
  Dispatch,
  MutableRefObject,
  ReactElement,
  SetStateAction,
} from 'react';

export interface ImageSliderControllerProps {
  sliderElementRef: MutableRefObject<any>;
  sliderImages: Image[];
  setSliderImages: Dispatch<SetStateAction<Image[]>>;
  setIsTransitionEnabled: Dispatch<SetStateAction<boolean>>;
  setIsButtonEnabled: Dispatch<SetStateAction<boolean>>;
  setPositionStyles: Dispatch<SetStateAction<Record<string, string>>>;
  setTransformStyles: Dispatch<SetStateAction<Record<string, string>>>;
  render: (onNextClick: () => void, onPrevClick: () => void) => ReactElement;
}
