/* eslint-disable @next/next/no-img-element */
import { Arrow } from 'components/Icons';
import ImageSliderController from 'components/ImageSlider/ImageSliderController';
import styles from 'components/ImageSlider/image-slider.module.css';
import { Image, ImageSliderProps } from 'components/ImageSlider/interfaces';
import { useEffect, useRef, useState } from 'react';

export default function ImageSlider({ images }: ImageSliderProps) {
  const [sliderImages, setSliderImages] = useState<Image[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState<boolean>(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(true);
  const [transformStyles, setTransformStyles] = useState<
    Record<string, string>
  >({
    transform: 'translate(0)',
  });
  const [positionStyles, setPositionStyles] = useState<Record<string, string>>({
    justifyContent: 'flex-start',
  });

  const elementRef = useRef<any>(null);

  useEffect(() => {
    setSliderImages([...images]);
  }, [images]);

  return (
    <ImageSliderController
      sliderElementRef={elementRef}
      sliderImages={sliderImages}
      setSliderImages={setSliderImages}
      setCurrentSlide={setCurrentSlide}
      setIsTransitionEnabled={setIsTransitionEnabled}
      setIsButtonEnabled={setIsButtonEnabled}
      setPositionStyles={setPositionStyles}
      setTransformStyles={setTransformStyles}
      render={(onNextClick, onPrevClick, updateSwipeStartValue, updateSwipeEndValue, onSwipeEnd) => (
        <div className={styles['image-slider']} onTouchStart={updateSwipeStartValue} onTouchMove={updateSwipeEndValue} onTouchEnd={isButtonEnabled ? onSwipeEnd : undefined}>
          <div
            className={`${styles['image-slider__images']} ${
              isTransitionEnabled
                ? styles['image-slider__images--transition']
                : null
            }`}
            style={{ ...transformStyles, ...positionStyles }}
            ref={elementRef}
          >
            {sliderImages.map((image: Image, index: number) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
          <div className={styles['image-slider__interactions']}>
            <div className={styles['image-slider__interactions__slide-indicator']}>
              <div className={styles['image-slider__interactions__slide-indicator__shadow-wrapper']}>
                {sliderImages.map((_, index: number) => (
                  <div
                    key={index}
                    className={(
                      `${styles['image-slider__interactions__slide-indicator__dot']} 
                       ${index === currentSlide ? styles['image-slider__interactions__slide-indicator__pill'] : null} 
                       ${index === 0 && currentSlide !== index ? styles['image-slider__interactions__slide-indicator__dot--small'] : null} 
                       ${index === sliderImages.length - 1 && currentSlide !== index ? styles['image-slider__interactions__slide-indicator__dot--small'] : null}
                      `
                    )}
                  ></div>
                ))}
              </div>
            </div>
            <button onClick={isButtonEnabled ? onPrevClick : undefined}>
              <Arrow className={styles['image-slider__interactions__button-icon']} direction={'left'} size={8} />
            </button>
            <button onClick={isButtonEnabled ? onNextClick: undefined}>
              <Arrow className={styles['image-slider__interactions__button-icon']} direction={'right'} size={8} />
            </button>
          </div>
        </div>
      )}
    />
  );
}
 