export interface SliderControlsProps {
  onNextClick: () => void;
  onPrevClick: () => void;
  numberOfSlides: number;
  currentSlideIndex: number;
  multiple?: boolean;
  isDisabled?: boolean;
}
