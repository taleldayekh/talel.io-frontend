import { Image } from 'components/ImageSlider/interfaces';
import {
  Dispatch,
  MutableRefObject,
  ReactElement,
  SetStateAction,
} from 'react';

export interface ImageSliderControllerProps {
  imagesWrapperRef: MutableRefObject<any>;
  numberOfImagesInViewport: number;
  sliderImages: Image[];
  setSliderImages: Dispatch<SetStateAction<Image[]>>;
  setNumberOfImagesInViewport: Dispatch<SetStateAction<number>>;
  setIsTransitionEnabled: Dispatch<SetStateAction<boolean>>;
  setIsButtonEnabled: Dispatch<SetStateAction<boolean>>;
  setTransformStyles: Dispatch<SetStateAction<Record<string, string>>>;
  setPositionStyles: Dispatch<SetStateAction<Record<string, string>>>;
  // setCurrentSlide: Dispatch<SetStateAction<number>>;
  render: (
    onNextClick: () => void,
    onPrevClick: () => void,
  ) => // onNextClick: () => void,
  // onPrevClick: () => void,
  // updateSwipeStartValue: (event: TouchEvent<HTMLDivElement>) => void,
  // updateSwipeEndValue: (event: TouchEvent<HTMLDivElement>) => void,
  // onSwipeEnd: () => void,
  ReactElement;
}
