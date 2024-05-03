/* eslint-disable indent */
/* eslint-disable @next/next/no-img-element */
import ImageSliderController from 'components/ImageSlider/ImageSliderController';
import SliderControls from 'components/ImageSlider/components/SliderControls';
import styles from 'components/ImageSlider/image-slider.module.css';
import { Image, ImageSliderProps } from 'components/ImageSlider/interfaces';
import { useEffect, useRef, useState } from 'react';

export default function ImageSlider({ images, multiple }: ImageSliderProps) {
  // States for managing images in the UI
  const [sliderImages, setSliderImages] = useState<Image[]>([]);
  const [numberOfImagesInViewport, setNumberOfImagesInViewport] = useState<
    number | undefined
  >(multiple ? undefined : 1);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // States for managing slider interactions
  const [isTransitionEnabled, setIsTransitionEnabled] = useState<boolean>(true);
  const [isControlsEnabled, setIsControlsEnabled] = useState<boolean>(true);

  // States for inline CSS
  const [imageStyles, setImageStyles] = useState<Record<string, string>>({});
  const [transformStyles, setTransformStyles] = useState<
    Record<string, string>
  >({ translate: '0' });
  const [positionStyles, setPositionStyles] = useState<Record<string, string>>({
    justifyContent: 'flex-start',
  });

  useEffect(() => {
    if (!numberOfImagesInViewport) return;

    // TODO: Should be the else block
    setSliderImages([...images]);
  }, [numberOfImagesInViewport, images]);

  useEffect(() => {
    if (!numberOfImagesInViewport) return;

    const imageWidth = multiple ? 100 / numberOfImagesInViewport : 100;
    const multipleImagesStyle = {
      borderRadius: '8px',
      padding: '.2vw',
    };

    const styles = {
      flex: `0 0 ${imageWidth}%`,
      maxWidth: `${imageWidth}%`,
      ...(multiple && multipleImagesStyle),
    };

    setImageStyles(styles);
  }, [numberOfImagesInViewport, multiple]);

  const imagesWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ImageSliderController
      multiple={multiple}
      imagesWrapperRef={imagesWrapperRef}
      sliderImages={sliderImages}
      setSliderImages={setSliderImages}
      numberOfImagesInViewport={numberOfImagesInViewport}
      setNumberOfImagesInViewport={setNumberOfImagesInViewport}
      setCurrentSlideIndex={setCurrentSlideIndex}
      setIsTransitionEnabled={setIsTransitionEnabled}
      setIsControlsEnabled={setIsControlsEnabled}
      setTransformStyles={setTransformStyles}
      setPositionStyles={setPositionStyles}
      render={(
        onNextClick,
        onPrevClick,
        updateSwipeStartValue,
        updateSwipeEndValue,
        onSwipeEnd,
        calculateNumberOfSlides,
      ) => (
        <>
          <div
            className={`
              ${styles['image-slider']} 
              ${multiple ? styles['image-slider--multiple'] : null}
            `}
            onTouchStart={updateSwipeStartValue}
            onTouchMove={updateSwipeEndValue}
            onTouchEnd={isControlsEnabled ? onSwipeEnd : undefined}
          >
            <div
              ref={imagesWrapperRef}
              className={`
                ${styles['image-slider__images-wrapper']} 
                ${
                  isTransitionEnabled
                    ? styles['image-slider__images-wrapper--transition']
                    : null
                }
              `}
              style={{ ...transformStyles, ...positionStyles }}
            >
              {sliderImages.map((image: Image, index: number) => (
                <img
                  style={{ ...imageStyles }}
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </div>
            <SliderControls
              onNextClick={onNextClick}
              onPrevClick={onPrevClick}
              numberOfSlides={calculateNumberOfSlides()}
              currentSlideIndex={currentSlideIndex}
              multiple={multiple}
              isDisabled={!isControlsEnabled}
            />
          </div>
        </>
      )}
    />
  );
}
