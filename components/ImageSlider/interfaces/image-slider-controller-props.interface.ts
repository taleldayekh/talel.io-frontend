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
  // TODO: Typing
  setTransformStyles: Dispatch<SetStateAction<any>>;
  setPositionStyles: Dispatch<SetStateAction<any>>;
  setIsButtonDisabled: Dispatch<SetStateAction<boolean>>;
  render: (onNextClick: () => void, onPrevClick: () => void) => ReactElement;
}
