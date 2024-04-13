import { SlideDirections } from 'components/ImageSlider/enums';
import { ImageSliderControllerProps } from 'components/ImageSlider/interfaces';
import useDebounce from 'hooks/debounce/useDebounce';
import { useEffect, useRef, useState } from 'react';

export default function ImageSliderController({
  // setCurrentSlide,
  imagesWrapperRef,
  numberOfImagesInViewport,
  sliderImages,
  setSliderImages,
  setNumberOfImagesInViewport,
  setIsTransitionEnabled,
  setIsButtonEnabled,
  setTransformStyles,
  setPositionStyles,
  render,
}: ImageSliderControllerProps) {
  const [slideDirection, setSlideDirection] = useState<
    SlideDirections | undefined
  >(undefined);

  const isFirstCallForUpdatingNumberOfImagesInViewport = useRef(true);

  useEffect(() => {
    /**
     * Do not debounce on initial page load since the initial
     * number of images should be displayed without any delay.
     */
    if (isFirstCallForUpdatingNumberOfImagesInViewport.current) {
      updateNumberOfImagesInViewport();
      isFirstCallForUpdatingNumberOfImagesInViewport.current = false;
    }

    const handleResize = () => {
      debouncedUpdateNumberOfImagesInViewport();
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    const onTransitionEnd = (): void => {
      if (!slideDirection) return;

      if (slideDirection === SlideDirections.NEXT) {
        appendFirstImages();
      }

      if (slideDirection === SlideDirections.PREV) {
        prependLastImages();
      }

      /**
       * Unset transform styles and disable transition
       * to prevent from jumping back to first images.
       */
      setIsTransitionEnabled(false);
      setTransformStyles({
        transform: 'translateX(0)',
      });

      setTimeout(() => {
        setIsTransitionEnabled(true);
        setIsButtonEnabled(true);
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

  const updateNumberOfImagesInViewport = () => {
    const imagesWrapper = imagesWrapperRef.current;

    if (imagesWrapper) {
      const computedStyles = window.getComputedStyle(imagesWrapper);
      const numberOfImagesInViewport = parseInt(
        computedStyles
          .getPropertyValue('--number-of-images-in-viewport')
          .trim(),
      );
      console.log(numberOfImagesInViewport);
      setNumberOfImagesInViewport(numberOfImagesInViewport);
    }
  };

  const debouncedUpdateNumberOfImagesInViewport = useDebounce(
    updateNumberOfImagesInViewport,
    250,
  );

  const onNextClick = (): void => {
    if (!slideDirection) {
      setSlideDirection(SlideDirections.NEXT);
    }

    if (slideDirection === SlideDirections.PREV) {
      prependLastImages();
      setSlideDirection(SlideDirections.NEXT);
    }

    // Set current slide

    setTransformStyles({
      transform: 'translateX(-100%)',
    });
    setPositionStyles({
      justifyContent: 'flex-start',
    });
    setIsButtonEnabled(false);
  };

  const onPrevClick = (): void => {
    if (!slideDirection) {
      setSlideDirection(SlideDirections.PREV);
      appendFirstImages();
    }

    if (slideDirection === SlideDirections.NEXT) {
      appendFirstImages();
      setSlideDirection(SlideDirections.PREV);
    }

    // Set current slide

    setTransformStyles({
      transform: 'translateX(100%)',
    });
    setPositionStyles({
      justifyContent: 'flex-end',
    });
    setIsButtonEnabled(false);
  };

  const prependLastImages = (): void => {
    const sliderImagesCopy = [...sliderImages];
    const lastImages = sliderImagesCopy.splice(-numberOfImagesInViewport);

    sliderImagesCopy.unshift(...lastImages);
    setSliderImages(sliderImagesCopy);
  };

  const appendFirstImages = (): void => {
    const sliderImagesCopy = [...sliderImages];
    const firstImages = sliderImagesCopy.splice(0, numberOfImagesInViewport);

    sliderImagesCopy.push(...firstImages);
    setSliderImages(sliderImagesCopy);
  };

  // const appendFirstImage = (): void => {
  //   const sliderImagesCopy = [...sliderImages];
  //   const firstImage = sliderImagesCopy.shift();

  //   firstImage && sliderImagesCopy.push(firstImage);
  //   setSliderImages(sliderImagesCopy);
  // };

  // ------- //

  // const [slideDirection, setSlideDirection] = useState<
  //   SlideDirections | undefined
  // >(undefined);
  // const [swipeStartValue, setSwipeStartValue] = useState<number | null>(null);
  // const [swipeEndValue, setSwipeEndValue] = useState<number | null>(null);

  // useEffect(() => {
  //   const onTransitionEnd = (): void => {
  //     if (!slideDirection) return;

  //     if (slideDirection === SlideDirections.NEXT) {
  //       appendFirstImage();
  //     }

  //     if (slideDirection === SlideDirections.PREV) {
  //       prependLastImage();
  //     }

  //     setIsTransitionEnabled(false);
  //     setTransformStyles({ transform: 'translate(0)' });

  //     setTimeout(() => {
  //       setIsTransitionEnabled(true);
  //       setIsButtonEnabled(true);
  //     }, 50);
  //   };

  //   const sliderElement = sliderElementRef.current;

  //   sliderElement &&
  //     sliderElement.addEventListener('transitionend', onTransitionEnd);

  //   return () => {
  //     sliderElement &&
  //       sliderElement.removeEventListener('transitionend', onTransitionEnd);
  //   };
  // }, [sliderImages, slideDirection]);

  // const appendFirstImage = (): void => {
  //   const sliderImagesCopy = [...sliderImages];
  //   const firstImage = sliderImagesCopy.shift();

  //   firstImage && sliderImagesCopy.push(firstImage);
  //   setSliderImages(sliderImagesCopy);
  // };

  // const prependLastImage = (): void => {
  //   const sliderImagesCopy = [...sliderImages];
  //   const lastImage = sliderImagesCopy.pop();

  //   lastImage && sliderImagesCopy.unshift(lastImage);
  //   setSliderImages(sliderImagesCopy);
  // };

  // const onNextClick = (): void => {
  //   console.log('are you clicked');
  //   if (!slideDirection) {
  //     setSlideDirection(SlideDirections.NEXT);
  //   }

  //   if (slideDirection === SlideDirections.PREV) {
  //     prependLastImage();
  //     setSlideDirection(SlideDirections.NEXT);
  //   }

  //   setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  //   setTransformStyles({
  //     transform: 'translate(-100%)',
  //   });
  //   setPositionStyles({
  //     justifyContent: 'flex-start',
  //   });
  //   setIsButtonEnabled(false);
  // };

  // const onPrevClick = (): void => {
  //   if (!slideDirection) {
  //     setSlideDirection(SlideDirections.PREV);
  //     appendFirstImage();
  //   }

  //   if (slideDirection === SlideDirections.NEXT) {
  //     appendFirstImage();
  //     setSlideDirection(SlideDirections.PREV);
  //   }

  //   setCurrentSlide(
  //     (prevSlide) =>
  //       (prevSlide - 1 + sliderImages.length) % sliderImages.length,
  //   );
  //   setTransformStyles({
  //     transform: 'translate(100%)',
  //   });
  //   setPositionStyles({
  //     justifyContent: 'flex-end',
  //   });
  //   setIsButtonEnabled(false);
  // };

  // const updateSwipeStartValue = (event: TouchEvent<HTMLDivElement>): void => {
  //   setSwipeEndValue(null);
  //   setSwipeStartValue(event.targetTouches[0].clientX);
  // };

  // const updateSwipeEndValue = (event: TouchEvent<HTMLDivElement>): void => {
  //   setSwipeEndValue(event.targetTouches[0].clientX);
  // };

  // const onSwipeEnd = (): void => {
  //   if (!swipeStartValue || !swipeEndValue) return;

  //   const minSwipeDistance = 50;
  //   const swipeDistance = swipeStartValue - swipeEndValue;
  //   const isLeftSwipe = swipeDistance > minSwipeDistance;
  //   const isRightSwipe = swipeDistance < -minSwipeDistance;

  //   if (isLeftSwipe) {
  //     onNextClick();
  //   }

  //   if (isRightSwipe) {
  //     onPrevClick();
  //   }
  // };

  return render(onNextClick, onPrevClick);
  // onNextClick,
  // onPrevClick,
  // updateSwipeStartValue,
  // updateSwipeEndValue,
  // onSwipeEnd,
}
