import { ImageSliderControllerProps } from 'components/ImageSlider/interfaces';
import { useEffect, useState } from 'react';

export default function ImageSliderController({
  sliderElementRef,
  sliderImages,
  setSliderImages,
  setIsTransitionEnabled,
  setIsButtonEnabled,
  setPositionStyles,
  setTransformStyles,
  render,
}: ImageSliderControllerProps) {
  // TODO: Create enum for slide direction
  const [slideDirection, setSlideDirection] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    const onTransitionEnd = (): void => {
      if (!slideDirection) return;

      if (slideDirection === 'next') {
        appendFirstImage();
      }

      if (slideDirection === 'prev') {
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
      setSlideDirection('next');
    }

    if (slideDirection === 'prev') {
      prependLastImage();
      setSlideDirection('next');
    }

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
      setSlideDirection('prev');
      appendFirstImage();
    }

    if (slideDirection === 'next') {
      appendFirstImage();
      setSlideDirection('prev');
    }

    setTransformStyles({
      transform: 'translate(100%)',
    });
    setPositionStyles({
      justifyContent: 'flex-end',
    });
    setIsButtonEnabled(false);
  };

  return render(onNextClick, onPrevClick);
}
