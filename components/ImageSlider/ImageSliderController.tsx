import { SlideDirections } from 'components/ImageSlider/enums';
import { ImageSliderControllerProps } from 'components/ImageSlider/interfaces';
import { TouchEvent, useEffect, useState } from 'react';

export default function ImageSliderController({
  sliderElementRef,
  sliderImages,
  setSliderImages,
  setCurrentSlide,
  setIsTransitionEnabled,
  setIsButtonEnabled,
  setPositionStyles,
  setTransformStyles,
  render,
}: ImageSliderControllerProps) {
  const [slideDirection, setSlideDirection] = useState<
    SlideDirections | undefined
  >(undefined);
  const [swipeStartValue, setSwipeStartValue] = useState<number | null>(null);
  const [swipeEndValue, setSwipeEndValue] = useState<number | null>(null);

  useEffect(() => {
    const onTransitionEnd = (): void => {
      if (!slideDirection) return;

      if (slideDirection === SlideDirections.NEXT) {
        appendFirstImage();
      }

      if (slideDirection === SlideDirections.PREV) {
        prependLastImage();
      }

      setIsTransitionEnabled(false);
      setTransformStyles({ transform: 'translate(0)' });

      setTimeout(() => {
        setIsTransitionEnabled(true);
        setIsButtonEnabled(true);
      }, 50);
    };

    const sliderElement = sliderElementRef.current;

    sliderElement &&
      sliderElement.addEventListener('transitionend', onTransitionEnd);

    return () => {
      sliderElement &&
        sliderElement.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [sliderImages, slideDirection]);

  const appendFirstImage = (): void => {
    const sliderImagesCopy = [...sliderImages];
    const firstImage = sliderImagesCopy.shift();

    firstImage && sliderImagesCopy.push(firstImage);
    setSliderImages(sliderImagesCopy);
  };

  const prependLastImage = (): void => {
    const sliderImagesCopy = [...sliderImages];
    const lastImage = sliderImagesCopy.pop();

    lastImage && sliderImagesCopy.unshift(lastImage);
    setSliderImages(sliderImagesCopy);
  };

  const onNextClick = (): void => {
    if (!slideDirection) {
      setSlideDirection(SlideDirections.NEXT);
    }

    if (slideDirection === SlideDirections.PREV) {
      prependLastImage();
      setSlideDirection(SlideDirections.NEXT);
    }

    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    setTransformStyles({
      transform: 'translate(-100%)',
    });
    setPositionStyles({
      justifyContent: 'flex-start',
    });
    setIsButtonEnabled(false);
  };

  const onPrevClick = (): void => {
    if (!slideDirection) {
      setSlideDirection(SlideDirections.PREV);
      appendFirstImage();
    }

    if (slideDirection === SlideDirections.NEXT) {
      appendFirstImage();
      setSlideDirection(SlideDirections.PREV);
    }

    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + sliderImages.length) % sliderImages.length,
    );
    setTransformStyles({
      transform: 'translate(100%)',
    });
    setPositionStyles({
      justifyContent: 'flex-end',
    });
    setIsButtonEnabled(false);
  };

  const updateSwipeStartValue = (event: TouchEvent<HTMLDivElement>): void => {
    setSwipeEndValue(null);
    setSwipeStartValue(event.targetTouches[0].clientX);
  };

  const updateSwipeEndValue = (event: TouchEvent<HTMLDivElement>): void => {
    setSwipeEndValue(event.targetTouches[0].clientX);
  };

  const onSwipeEnd = (): void => {
    if (!swipeStartValue || !swipeEndValue) return;

    const minSwipeDistance = 50;
    const swipeDistance = swipeStartValue - swipeEndValue;
    const isLeftSwipe = swipeDistance > minSwipeDistance;
    const isRightSwipe = swipeDistance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNextClick();
    }

    if (isRightSwipe) {
      onPrevClick();
    }
  };

  return render(
    onNextClick,
    onPrevClick,
    updateSwipeStartValue,
    updateSwipeEndValue,
    onSwipeEnd,
  );
}
