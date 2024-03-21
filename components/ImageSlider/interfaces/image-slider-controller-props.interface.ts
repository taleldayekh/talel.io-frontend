import { Image } from 'components/ImageSlider/interfaces';
import {
  Dispatch,
  MutableRefObject,
  ReactElement,
  SetStateAction,
  TouchEvent
} from 'react';

export interface ImageSliderControllerProps {
  sliderElementRef: MutableRefObject<any>;
  sliderImages: Image[];
  setSliderImages: Dispatch<SetStateAction<Image[]>>;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  setIsTransitionEnabled: Dispatch<SetStateAction<boolean>>;
  setIsButtonEnabled: Dispatch<SetStateAction<boolean>>;
  setPositionStyles: Dispatch<SetStateAction<Record<string, string>>>;
  setTransformStyles: Dispatch<SetStateAction<Record<string, string>>>;
  render: (
    onNextClick: () => void, 
    onPrevClick: () => void,
    updateSwipeStartValue: (event: TouchEvent<HTMLDivElement>) => void,
    updateSwipeEndValue: (event: TouchEvent<HTMLDivElement>) => void,
    onSwipeEnd: () => void,
  ) => ReactElement;
}
