import { Image } from 'components/ImageSlider/interfaces';
import { MutableRefObject, Dispatch, SetStateAction, ReactElement, TouchEvent } from 'react';

export interface ImageSliderControllerProps {
  multiple: boolean | undefined;
  imagesWrapperRef: MutableRefObject<HTMLDivElement | null>;
  sliderImages: Image[];
  setSliderImages: Dispatch<SetStateAction<Image[]>>;
  numberOfImagesInViewport: number | undefined;
  setNumberOfImagesInViewport: Dispatch<SetStateAction<number | undefined>>;
  setCurrentSlideIndex: Dispatch<SetStateAction<number>>;
  setIsTransitionEnabled: Dispatch<SetStateAction<boolean>>;
  setIsControlsEnabled: Dispatch<SetStateAction<boolean>>;
  setTransformStyles: Dispatch<SetStateAction<Record<string, string>>>;
  setPositionStyles: Dispatch<SetStateAction<Record<string, string>>>;
  render: (
    onNextClick: () => void,
    onPrevClick: () => void,
    updateSwipeStartValue: (event: TouchEvent<HTMLDivElement>) => void,
    updateSwipeEndValue:  (event: TouchEvent<HTMLDivElement>) => void,
    onSwipeEnd: () => void,
    calculateNumberOfSlides: () => number,
  ) => ReactElement;
}
