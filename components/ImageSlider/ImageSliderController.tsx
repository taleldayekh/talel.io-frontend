import { useState, useEffect, useRef, TouchEvent } from 'react';
import { ImageSliderControllerProps } from 'components/ImageSlider/interfaces';
import useDebounce from 'hooks/debounce/useDebounce';
import { SlideDirections } from 'components/ImageSlider/enums';

export default function ImageSliderController({
  multiple,
  imagesWrapperRef,
  sliderImages,
  setSliderImages,
  numberOfImagesInViewport,
  setNumberOfImagesInViewport,
  setCurrentSlideIndex,
  setIsTransitionEnabled,
  setIsControlsEnabled,
  setTransformStyles,
  setPositionStyles,
  render,
}: ImageSliderControllerProps) {
  const [slideDirection, setSlideDirection] = useState<
    SlideDirections | undefined
  >(undefined);

  // States for swipe gestures
  const [swipeStartValue, setSwipeStartValue] = useState<number | null>(null);
  const [swipeEndValue, setSwipeEndValue] = useState<number | null>(null);

  const isFirstUpdateOfImagesInViewport = useRef(true);

  useEffect(() => {
    if (!multiple) return;
    /**
     * Do not debounce on initial page load since the initial
     * number of images should be displayed without any delay.
     */
    if (isFirstUpdateOfImagesInViewport.current) {
      updateNumberOfImagesInViewport();
      isFirstUpdateOfImagesInViewport.current = false;
    }

    const handleResize = (): void => {
      debouncedUpdateNumberOfImagesInViewport();
      setCurrentSlideIndex(0);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    const onTransitionEnd = (): void => {
      if (!slideDirection) return;

      // TODO: Rethink this logic
      if (slideDirection === SlideDirections.NEXT && numberOfImagesInViewport) {
        appendFirstImages(numberOfImagesInViewport);
      }

      if (slideDirection === SlideDirections.PREV && numberOfImagesInViewport) {
        prependLastImages(numberOfImagesInViewport);
      }

      /**
       * Unset transform styles and disable transition
       * to prevent from jumping back to first images.
       */
      setIsTransitionEnabled(false);
      setTransformStyles({
        translate: '0',
      });

      setTimeout(() => {
        setIsTransitionEnabled(true);
        setIsControlsEnabled(true);
      }, 50);
    };

    const imagesWrapper = imagesWrapperRef.current;

    // Event listener for CSS transition end
    imagesWrapper &&
      imagesWrapper.addEventListener('transitionend', onTransitionEnd);

    return () => {
      imagesWrapper &&
        imagesWrapper.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [sliderImages, slideDirection]);

  const updateNumberOfImagesInViewport = (): void => {
    /**
     * Updates the number of images in the viewport
     * based on CSS variable value which is applied
     * for different breakpoints.
     */
    const imagesWrapper = imagesWrapperRef.current;

    if (imagesWrapper) {
      const computedStyles = window.getComputedStyle(imagesWrapper);
      const numberOfImagesInViewport = parseInt(
        computedStyles
          .getPropertyValue('--number-of-images-in-viewport')
          .trim(),
      );

      setNumberOfImagesInViewport(numberOfImagesInViewport);
    }
  };

  const debouncedUpdateNumberOfImagesInViewport = useDebounce(
    updateNumberOfImagesInViewport,
    250,
  );

  const onNextClick = (): void => {
    if (!numberOfImagesInViewport) return;

    if (!slideDirection) {
      setSlideDirection(SlideDirections.NEXT);
    }

    if (slideDirection === SlideDirections.PREV) {
      prependLastImages(numberOfImagesInViewport);
      setSlideDirection(SlideDirections.NEXT);
    }

    updateCurrentSlideIndex(SlideDirections.NEXT);
    setTransformStyles({
      translate: '-100%',
    });
    setPositionStyles({
      justifyContent: 'flex-start',
    });
    setIsControlsEnabled(false);
  };

  const onPrevClick = (): void => {
    if (!numberOfImagesInViewport) return;

    if (!slideDirection) {
      setSlideDirection(SlideDirections.PREV);
      appendFirstImages(numberOfImagesInViewport);
    }

    if (slideDirection === SlideDirections.NEXT) {
      appendFirstImages(numberOfImagesInViewport);
      setSlideDirection(SlideDirections.PREV);
    }

    updateCurrentSlideIndex(SlideDirections.PREV);
    setTransformStyles({
      translate: '100%',
    });
    setPositionStyles({
      justifyContent: 'flex-end',
    });
    setIsControlsEnabled(false);
  };

  const prependLastImages = (numberOfImagesInViewport: number): void => {
    const sliderImagesCopy = [...sliderImages];
    const imagesFromEndToPrepend = sliderImagesCopy.splice(
      -numberOfImagesInViewport,
    );

    sliderImagesCopy.unshift(...imagesFromEndToPrepend);
    setSliderImages(sliderImagesCopy);
  };

  const appendFirstImages = (numberOfImagesInViewport: number): void => {
    const sliderImagesCopy = [...sliderImages];
    const imagesFromStartToAppend = sliderImagesCopy.splice(
      0,
      numberOfImagesInViewport,
    );

    sliderImagesCopy.push(...imagesFromStartToAppend);
    setSliderImages(sliderImagesCopy);
  };

  const updateSwipeStartValue = (event: TouchEvent<HTMLDivElement>): void => {
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

  const updateCurrentSlideIndex = (slideDirection: SlideDirections): void => {
    const numberOfSlides = calculateNumberOfSlides();

    if (slideDirection === SlideDirections.NEXT) {
      setCurrentSlideIndex(
        (prevSlideIndex) => (prevSlideIndex + 1) % numberOfSlides,
      );
    }

    if (slideDirection === SlideDirections.PREV) {
      setCurrentSlideIndex(
        (prevSlideIndex) =>
          (prevSlideIndex - 1 + sliderImages.length) % numberOfSlides,
      );
    }
  };

  const calculateNumberOfSlides = (): number => {
    return sliderImages.length / (numberOfImagesInViewport || 1);
  };

  return render(
    onNextClick,
    onPrevClick,
    updateSwipeStartValue,
    updateSwipeEndValue,
    onSwipeEnd,
    calculateNumberOfSlides,
  );
}
