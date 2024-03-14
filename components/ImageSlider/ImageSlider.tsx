/* eslint-disable @next/next/no-img-element */
import { ImageSliderProps } from 'components/ImageSlider/interfaces';
import { useEffect, useRef, useState } from 'react';
import ImageSliderController from './ImageSliderController';
import styles from './image-slider.module.css';
import { Image } from './interfaces';

export default function ImageSlider({ images }: ImageSliderProps) {
  const [sliderImages, setSliderImages] = useState<Image[]>([]);
  // TODO: Typing
  const [transformStyles, setTransformStyles] = useState<any>({
    transform: 'translate(0)',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  useEffect(() => {
    setSliderImages([...images]);
  }, []);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState<boolean>(true);
  const [positionStyles, setPositionStyles] = useState<any>({
    justifyContent: 'flex-start',
  });
  const elementRef = useRef<any>(null);
  return (
    <ImageSliderController
      sliderElementRef={elementRef}
      sliderImages={sliderImages}
      setSliderImages={setSliderImages}
      setIsTransitionEnabled={setIsTransitionEnabled}
      setTransformStyles={setTransformStyles}
      setPositionStyles={setPositionStyles}
      setIsButtonDisabled={setIsButtonDisabled}
      render={(onNextClick, onPrevClick) => (
        <div style={{ overflow: 'hidden' }}>
          <div
            ref={elementRef}
            className={`${styles['image-slider__images']} ${
              isTransitionEnabled
                ? styles['image-slider__images--transition']
                : null
            }`}
            style={{ ...transformStyles, ...positionStyles }}
          >
            {sliderImages.map((slide, index) => (
              <img key={index} src={slide.src} alt={slide.alt} />
            ))}
          </div>
          <button onClick={!isButtonDisabled ? onPrevClick : undefined}>
            Prev
          </button>
          <button onClick={!isButtonDisabled ? onNextClick : undefined}>
            Next
          </button>
          {/* <div className={styles['indicator']}>
            {slides.map((slide, index) => (
              <span
                key={index + 1}
                className={`${
                  index === currentSlide
                    ? styles['indicator__dot--active']
                    : styles['indicator__dot']
                }`}
              ></span>
            ))}
          </div> */}
        </div>
      )}
    />
  );
}
