import { ReadingPositionIndicatorControllerProps } from 'components/ReadingPositionIndicator/interfaces';
import { useEffect, useState } from 'react';

export default function ReadingPositionIndicatorController({
  contentRef,
  setEndPosition,
  setCurrentPosition,
  render,
}: ReadingPositionIndicatorControllerProps) {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [contentOffsetTop, setContentOffsetTop] = useState<number>(0);
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    if (!contentRef) return;

    setContentHeight(contentRef.clientHeight);

    const updateContentOffsetTop = (): void => {
      const offsetTop = contentRef.getBoundingClientRect().top;
      setContentOffsetTop(-offsetTop);
    };

    window.addEventListener('scroll', updateContentOffsetTop);

    return () => {
      window.removeEventListener('scroll', updateContentOffsetTop);
    };
  });

  useEffect(() => {
    const updateViewportHeight = (): void => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', updateViewportHeight);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  });

  useEffect(() => {
    const outOfViewContentHeight = contentHeight - viewportHeight;
    setEndPosition(outOfViewContentHeight);
  });

  useEffect(() => {
    setCurrentPosition(contentOffsetTop);
  });

  return render();
}
