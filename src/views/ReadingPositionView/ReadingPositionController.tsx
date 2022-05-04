import { useState, useEffect } from 'react';
import { ReadingPositionControllerProps } from 'src/views/ReadingPositionView/interfaces';
import ReadingPositionView from 'src/views/ReadingPositionView/ReadingPositionView';

const ReadingPositionController = ({
  contentRef,
  children,
}: ReadingPositionControllerProps): JSX.Element => {
  const [viewportHeight, setViewportHeight] = useState<number>(
    window.innerHeight,
  );
  const [contentTotalHeight, setContentTotalHeight] = useState<number>(0);
  const [contentOffsetTop, setContentOffsetTop] = useState<number>(0);
  const [outOfViewContentHeight, setOutOfViewContentHeight] =
    useState<number>(0);

  useEffect(() => {
    const contentElement = contentRef.current;

    if (!contentElement) return;

    const setContentElementValues = (): void => {
      const offsetTop = contentElement.getBoundingClientRect().top;

      setContentTotalHeight(contentElement.clientHeight);
      setContentOffsetTop(-offsetTop);
    };

    window.addEventListener('scroll', setContentElementValues);

    return () => {
      window.removeEventListener('scroll', setContentElementValues);
    };
  }, [contentRef, setContentTotalHeight, setContentOffsetTop]);

  useEffect(() => {
    const handleViewportResize = (): void => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleViewportResize);

    return () => {
      window.removeEventListener('resize', handleViewportResize);
    };
  }, [setViewportHeight]);

  useEffect(() => {
    setOutOfViewContentHeight(contentTotalHeight - viewportHeight);
  }, [contentTotalHeight, viewportHeight]);

  return (
    <ReadingPositionView
      endReadingPositionValue={outOfViewContentHeight}
      currentReadingPositionValue={contentOffsetTop}
    >
      {children}
    </ReadingPositionView>
  );
};

export default ReadingPositionController;
