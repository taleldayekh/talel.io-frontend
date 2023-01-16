import { useState } from 'react';
import { ReadingPositionIndicatorProps } from 'components/ReadingPositionIndicator/interfaces';
import ReadingPositionIndicatorController from 'components/ReadingPositionIndicator/ReadingPositionIndicatorController';
import styles from 'components/ReadingPositionIndicator/reading-position-indicator.module.css';

export default function ReadingPositionIndicator({ contentRef, className }: ReadingPositionIndicatorProps) {
    const [endPosition, setEndPosition] = useState<number>(0);
    const [currentPosition, setCurrentPosition] = useState<number>(0);

    return (
        <ReadingPositionIndicatorController 
            contentRef={contentRef} 
            setEndPosition={setEndPosition}
            setCurrentPosition={setCurrentPosition}
            render={() => (
                <div className={`${className} ${styles['reading-position-indicator']}`}>
                    <progress 
                        max={endPosition} 
                        value={currentPosition}
                    />
                </div>
        )}/>
    )
}
