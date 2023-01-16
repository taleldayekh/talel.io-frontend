import { useEffect, useState } from 'react';
import { ReadingPositionIndicatorControllerProps } from 'components/ReadingPositionIndicator/interfaces';

export default function ReadingPositionIndicatorController({ contentRef, setEndPosition, setCurrentPosition, render }: ReadingPositionIndicatorControllerProps) {
    const [contentHeight, setContentHeight] = useState<number>(0);
    const [contentOffsetTop, setContentOffsetTop] = useState<number>(0);
    const [viewportHeight, setViewportHeight] = useState<number>(0);

    // TODO: Comment on window not accessible...
    useEffect(() => {
        setViewportHeight(window.innerHeight)
    }, [])

    // TODO: Should contentOffsetTop be included in the dependency array?
    useEffect(() => {
        const content = contentRef.current;

        if (!content) return;

        setContentHeight(content.clientHeight)

        const updateContentOffsetTop = (): void => {
            const offsetTop = content.getBoundingClientRect().top;
            setContentOffsetTop(-offsetTop);
        };

        window.addEventListener('scroll', updateContentOffsetTop);

        return () => {
            window.removeEventListener('scroll', updateContentOffsetTop);
        };
    }, [contentRef, contentHeight, contentOffsetTop]);

    // TODO: What should be included in the dependency array?
    useEffect(() => {
        const updateViewportHeight = (): void => {
            setViewportHeight(window.innerHeight);
        }

        window.addEventListener('resize', updateViewportHeight);

        return () => {
            window.removeEventListener('resize', updateViewportHeight);
        };
    }, [viewportHeight])

    useEffect(() => {
        const outOfViewContentHeight = contentHeight - viewportHeight;
        setEndPosition(outOfViewContentHeight);
    }, [contentHeight, viewportHeight]);

    useEffect(() => {
        setCurrentPosition(contentOffsetTop);
    }, [contentOffsetTop]);

    return render();
}
