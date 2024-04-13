/* eslint-disable indent */
/* eslint-disable @next/next/no-img-element */
import styles from 'components/ImageSlider/image-slider.module.css';
import ImageSliderController from 'components/ImageSlider/ImageSliderController';
import { Image, ImageSliderProps } from 'components/ImageSlider/interfaces';
import { useEffect, useRef, useState } from 'react';

export default function ImageSlider({ images }: ImageSliderProps) {
  const [sliderImages, setSliderImages] = useState<Image[]>([]);

  const [numberOfImagesInViewport, setNumberOfImagesInViewport] =
    useState<number>(2);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState<boolean>(true);
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(true);

  // Style states
  const [imageStyles, setImageStyles] = useState<Record<string, string>>({});
  const [transformStyles, setTransformStyles] = useState<
    Record<string, string>
  >({ transform: 'translateX(0)' });
  const [positionStyles, setPositionStyles] = useState<Record<string, string>>({
    justifyContent: 'flex-start',
  });

  useEffect(() => {
    const imagesCopy = [...images];
    const remainderNumberOfImagesInViewport =
      imagesCopy.length % numberOfImagesInViewport;

    if (remainderNumberOfImagesInViewport > 0) {
      /**
       * Append copies of images from the start of the array to
       * achieve a remainder of 0 and fill the viewport on each
       * slider scroll.
       */
      const numberOfImagesToAppend =
        numberOfImagesInViewport - remainderNumberOfImagesInViewport;
      const imagesToAppend = imagesCopy.slice(0, numberOfImagesToAppend);

      imagesCopy.push(...imagesToAppend);
      setSliderImages([...imagesCopy]);
    } else {
      setSliderImages([...imagesCopy]);
    }
  }, [images, numberOfImagesInViewport]);

  // Style effect
  useEffect(() => {
    const imageWidth = 100 / numberOfImagesInViewport;

    const imageCarouselStyles = {
      flex: `0 0 ${imageWidth}%`,
      maxWidth: `${imageWidth}%`,
    };

    setImageStyles(imageCarouselStyles);
  }, [numberOfImagesInViewport]);

  const elementRef = useRef<any>(null);

  return (
    <ImageSliderController
      imagesWrapperRef={elementRef}
      numberOfImagesInViewport={numberOfImagesInViewport}
      sliderImages={sliderImages}
      setNumberOfImagesInViewport={setNumberOfImagesInViewport}
      setSliderImages={setSliderImages}
      setIsTransitionEnabled={setIsTransitionEnabled}
      setIsButtonEnabled={setIsButtonEnabled}
      setTransformStyles={setTransformStyles}
      setPositionStyles={setPositionStyles}
      render={(onNextClick, onPrevClick) => (
        <>
          <div className={styles['image-slider']}>
            <div
              ref={elementRef}
              className={`${styles['image-slider__images-wrapper']}
                 ${
                   isTransitionEnabled
                     ? styles['images-slider__images-wrapper--transition']
                     : null
                 }
                `}
              style={{ ...transformStyles, ...positionStyles }}
            >
              {sliderImages.map((image: Image, index: number) => (
                <img
                  style={{ ...imageStyles }}
                  key={index}
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </div>
          </div>
          {/* TODO: Move buttons */}
          <button onClick={isButtonEnabled ? onPrevClick : undefined}>
            Prev
          </button>
          <button onClick={isButtonEnabled ? onNextClick : undefined}>
            Next
          </button>
        </>
      )}
    />
  );

  // const [sliderImages, setSliderImages] = useState<Image[]>([]);
  // const [currentSlide, setCurrentSlide] = useState<number>(0);
  // const [isTransitionEnabled, setIsTransitionEnabled] = useState<boolean>(true);
  // const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(true);
  // const [transformStyles, setTransformStyles] = useState<
  //   Record<string, string>
  // >({
  //   transform: 'translate(0)',
  // });
  // const [positionStyles, setPositionStyles] = useState<Record<string, string>>({
  //   justifyContent: 'flex-start',
  // });

  // const elementRef = useRef<any>(null);

  // useEffect(() => {
  //   setSliderImages([...images]);
  // }, [images]);

  // return (
  //   <ImageSliderController
  //     sliderElementRef={elementRef}
  //     sliderImages={sliderImages}
  //     setSliderImages={setSliderImages}
  //     setCurrentSlide={setCurrentSlide}
  //     setIsTransitionEnabled={setIsTransitionEnabled}
  //     setIsButtonEnabled={setIsButtonEnabled}
  //     setPositionStyles={setPositionStyles}
  //     setTransformStyles={setTransformStyles}
  //     render={(
  //       onNextClick,
  //       onPrevClick,
  //       updateSwipeStartValue,
  //       updateSwipeEndValue,
  //       onSwipeEnd,
  //     ) => (
  //       <div
  //         className={styles['image-slider']}
  //         onTouchStart={updateSwipeStartValue}
  //         onTouchMove={updateSwipeEndValue}
  //         onTouchEnd={isButtonEnabled ? onSwipeEnd : undefined}
  //       >
  //         <button className={styles.handle}></button>

  //         <div
  //           className={`${styles['image-slider__images']} ${
  //             isTransitionEnabled
  //               ? styles['image-slider__images--transition']
  //               : null
  //           }`}
  //           // style={{ ...transformStyles, ...positionStyles }}
  //           ref={elementRef}
  //         >
  //           {sliderImages.map((image: Image, index: number) => (
  //             <img key={index} src={image.src} alt={image.alt} />
  //           ))}
  //         </div>

  //         <button
  //           className={styles.handle}
  //           onClick={isButtonEnabled ? onNextClick : undefined}
  //         ></button>
  {
    /* ! */
  }
  {
    /* ! */
  }
  {
    /* ! */
  }
  {
    /* ! */
  }
  {
    /* ! */
  }
  // <div className={styles['image-slider__interactions']}>
  {
    /* <div
              className={styles['image-slider__interactions__slide-indicator']}
            >
              <div
                className={
                  styles[
                    'image-slider__interactions__slide-indicator__shadow-wrapper'
                  ]
                }
              >
                {sliderImages.map((_, index: number) => (
                  <div
                    key={index}
                    className={`${
                      styles['image-slider__interactions__slide-indicator__dot']
                    } 
                       ${
                         index === currentSlide
                           ? styles[
                               'image-slider__interactions__slide-indicator__pill'
                             ]
                           : null
                       } 
                       ${
                         index === 0 && currentSlide !== index
                           ? styles[
                               'image-slider__interactions__slide-indicator__dot--small'
                             ]
                           : null
                       } 
                       ${
                         index === sliderImages.length - 1 &&
                         currentSlide !== index
                           ? styles[
                               'image-slider__interactions__slide-indicator__dot--small'
                             ]
                           : null
                       }
                      `}
                  ></div>
                ))}
              </div>
            </div> */
  }
  {
    /* <button
              onClick={isButtonEnabled ? onPrevClick : undefined}
              aria-label="View previous slide"
            >
              <Arrow
                className={styles['image-slider__interactions__button-icon']}
                direction={'left'}
                size={8}
              />
            </button>
            <button
              onClick={isButtonEnabled ? onNextClick : undefined}
              aria-label="View next slide"
            >
              <Arrow
                className={styles['image-slider__interactions__button-icon']}
                direction={'right'}
                size={8}
              />
            </button> */
  }
  //         </div>
  //       </div>
  //     )}
  //   />
  // );
}
