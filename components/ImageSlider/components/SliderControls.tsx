/* eslint-disable indent */
import { Arrow } from 'components/Icons';
import styles from 'components/ImageSlider/components/slider-controls.module.css';
import { SliderControlsProps } from 'components/ImageSlider/interfaces';

export default function SliderControls({
  onNextClick,
  onPrevClick,
  numberOfSlides,
  currentSlideIndex,
  multiple,
  isDisabled,
}: SliderControlsProps) {
  const pages = Array.from({ length: numberOfSlides });

  if (multiple) {
    return (
      <>
        <div className={styles['slider-controls-multiple']}>
          <ul
            className={styles['slider-controls-multiple__pagination-indicator']}
          >
            {pages.map((_, index: number) => (
              <li
                key={index}
                className={`
                  ${index === currentSlideIndex ? styles.active : null}
                `}
              ></li>
            ))}
          </ul>
        </div>
        <button
          className={styles['slider-controls-multiple__button-prev']}
          onClick={!isDisabled ? onPrevClick : undefined}
        >
          Prev
        </button>
        <button
          className={styles['slider-controls-multiple__button-next']}
          onClick={!isDisabled ? onNextClick : undefined}
        >
          Next
        </button>
      </>
    );
  } else {
    return (
      <div className={styles['slider-controls-single']}>
        <div className={styles['slider-controls-single__pagination-indicator']}>
          <ul>
            {pages.map((_, index: number) => (
              <li
                key={index}
                className={`
                  ${
                    styles['slider-controls-single__pagination-indicator__dot']
                  } 
                  ${
                    (index === 0 && currentSlideIndex !== index) ||
                    (index === pages.length - 1 && currentSlideIndex !== index)
                      ? styles[
                          'slider-controls-single__pagination-indicator__dot--small'
                        ]
                      : null
                  }
                  ${
                    index === currentSlideIndex
                      ? styles[
                          'slider-controls-single__pagination-indicator__pill'
                        ]
                      : null
                  } 
                `}
              ></li>
            ))}
          </ul>
        </div>
        <button onClick={!isDisabled ? onPrevClick : undefined}>
          <Arrow
            className={styles['slider-controls-single__button-icon']}
            direction="left"
            size={8}
          />
        </button>
        <button onClick={!isDisabled ? onNextClick : undefined}>
          <Arrow
            className={styles['slider-controls-single__button-icon']}
            direction="right"
            size={8}
          />
        </button>
      </div>
    );
  }
}
