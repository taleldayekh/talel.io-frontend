/* eslint-disable indent */
import styles from 'components/Icons/arrow.module.css';
import { ArrowProps } from 'components/Icons/interfaces';
import { useEffect, useState } from 'react';

const calculateNearestEvenNumber = (number: number): number => {
  if (number % 2 === 0) return number;

  return number % 2 === 1 ? number - 1 : number + 1;
};

export function Arrow({ direction, size, className }: ArrowProps) {
  const [computedStyles, setComputedStyles] = useState<Record<string, string>>({
    height: '40px',
    marginBottom: '0',
    marginLeft: '0',
    marginRight: '0',
    marginTop: '0',
    transform: 'rotate(135deg)',
    width: '40px',
  });

  useEffect(() => {
    if (size) {
      const heightAndWidth = calculateNearestEvenNumber(size);
      const margin = heightAndWidth / 2;

      setComputedStyles((prev) => ({
        ...prev,
        height: `${heightAndWidth}px`,
        marginBottom: direction === 'down' ? `${margin}px` : '0',
        marginLeft: direction === 'left' ? `${margin}px` : '0',
        marginRight: direction === 'right' ? `${margin}px` : '0',
        marginTop: direction === 'up' ? `${margin}px` : '0',
        width: `${heightAndWidth}px`,
      }));
    }
  }, [direction, size]);

  useEffect(() => {
    switch (direction) {
      case 'right':
        setComputedStyles((prev) => ({
          ...prev,
          transform: 'rotate(135deg)',
        }));
        break;
      case 'down':
        setComputedStyles((prev) => ({
          ...prev,
          transform: 'rotate(-135deg)',
        }));
        break;
      case 'up':
        setComputedStyles((prev) => ({
          ...prev,
          transform: 'rotate(45deg)',
        }));
        break;
      case 'left':
        setComputedStyles((prev) => ({
          ...prev,
          transform: 'rotate(-45deg)',
        }));
        break;
    }
  }, [direction]);

  return (
    <div
      className={`${styles.arrow} ${className}`}
      style={{ ...computedStyles }}
    ></div>
  );
}
