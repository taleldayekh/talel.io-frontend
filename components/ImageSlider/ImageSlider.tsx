/* eslint-disable @next/next/no-img-element */
import { Arrow } from 'components/Icons';
import ImageSliderController from 'components/ImageSlider/ImageSliderController';
import styles from 'components/ImageSlider/image-slider.module.css';
import { Image, ImageSliderProps } from 'components/ImageSlider/interfaces';
import { useEffect, useRef, useState } from 'react';

export default function ImageSlider({ images }: ImageSliderProps) {
  const [sliderImages, setSliderImages] = useState<Image[]>([]);
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
      setIsTransitionEnabled={setIsTransitionEnabled}
      setIsButtonEnabled={setIsButtonEnabled}
      setPositionStyles={setPositionStyles}
      setTransformStyles={setTransformStyles}
      render={(onNextClick, onPrevClick) => (
        <div className={styles['image-slider']}>
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
            <button>
              <Arrow direction={'left'} size={8} />
            </button>
            <button>
              <Arrow direction={'right'} size={8} />
            </button>
          </div>
        </div>
      )}
    />
  );
}
