import { ReadingPositionViewProps } from 'src/views/ReadingPositionView/interfaces';
import readingPositionStyles from 'src/views/ReadingPositionView/styles/readingPosition.styles.module.css';

const ReadingPositionView = ({
  endReadingPositionValue,
  currentReadingPositionValue,
  children,
}: ReadingPositionViewProps): JSX.Element => {
  return (
    <div className={readingPositionStyles['reading-position']}>
      <div className={readingPositionStyles['reading-position__content']}>
        {children}
      </div>
      <progress
        max={endReadingPositionValue}
        value={currentReadingPositionValue}
      />
    </div>
  );
};

export default ReadingPositionView;
