import { useEffect, useRef } from 'react';
import { ToCControllerProps, ToC, ToCHeading } from 'components/ToC/interfaces';

export default function ToCController({
  tocHTML,
  toc,
  setToC,
  setHighlightedHeading,
  subHeadingsRef,
  render,
}: ToCControllerProps) {
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const toc: ToC[] = [];

    const parser = new DOMParser();
    const document = parser.parseFromString(tocHTML, 'text/html');

    const allHeadings = document.querySelectorAll('ul > li:not(li li)');

    allHeadings.forEach((heading) => {
      const allSubHeadings: ToCHeading[] = [];

      const headingAnchor = heading.querySelector('a[href^="#"');
      const subHeadings = heading.querySelector('ul');

      if (subHeadings) {
        const allSubHeadingAnchors =
          subHeadings.querySelectorAll('a[href^="#"');

        allSubHeadingAnchors.forEach((subHeadingAnchor) => {
          const text = subHeadingAnchor.textContent;
          const href = subHeadingAnchor.getAttribute('href');

          if (text && href) {
            allSubHeadings.push({
              text,
              href,
            });
          }
        });
      }

      const text = headingAnchor ? headingAnchor.textContent : null;
      const href = headingAnchor ? headingAnchor.getAttribute('href') : null;

      if (text && href) {
        toc.push({
          text,
          href,
          subHeadings: allSubHeadings,
        });
      }

      setToC(toc);
    });
  }, [tocHTML, setToC]);

  useEffect(() => {
    setHeadingsIntersectionObserver();

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, [toc, setHighlightedHeading]);

  const setHeadingsIntersectionObserver = () => {
    const articleHeadings = Array.from(document.querySelectorAll('h1, h2'));

    const intersectionObserver = new IntersectionObserver(
      ([observerEntry]: IntersectionObserverEntry[]) => {
        const articleHeadingId = observerEntry.target.id;

        if (observerEntry.isIntersecting) {
          setHighlightedHeading(articleHeadingId);

          const headingWithSubheadingsIndex = toc.findIndex((heading) =>
            heading.subHeadings.some(
              (subHeading) => subHeading.href.slice(1) === articleHeadingId,
            ),
          );

          if (headingWithSubheadingsIndex !== -1) {
            const subHeadingsToggleTrigger = document.getElementById(
              `expand-collapse-subheading-${headingWithSubheadingsIndex}`,
            ) as HTMLInputElement;

            if (!subHeadingsToggleTrigger) return;

            /**
             * The expand animation in handleDisplaySubHeadings
             * will only work if the checked attribute is true.
             */
            subHeadingsToggleTrigger.checked = true;
            handleDisplaySubHeadings(headingWithSubheadingsIndex);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -100% 0px',
        threshold: 0,
      },
    );

    articleHeadings.forEach((heading) => intersectionObserver.observe(heading));
    intersectionObserverRef.current = intersectionObserver;
  };

  const handleHeadingClick = (heading: string) => {
    if (intersectionObserverRef.current) {
      intersectionObserverRef.current.disconnect();
    }

    setHighlightedHeading(heading);

    // TODO: Smarter timeout calculation based on scroll distance
    setTimeout(() => {
      setHeadingsIntersectionObserver();
    }, 800);
  };

  const handleDisplaySubHeadings = (headingIndex: number): void => {
    if (!subHeadingsRef.current.length) return;

    const subHeadingsToggleTrigger = document.getElementById(
      `expand-collapse-subheading-${headingIndex}`,
    ) as HTMLInputElement;
    const subHeadings = subHeadingsRef.current[headingIndex];

    if (!subHeadings || !subHeadingsToggleTrigger) return;
    const subHeadingsHeight = subHeadings.scrollHeight;
    subHeadings.style.height = `${subHeadingsHeight}px`;

    if (subHeadingsToggleTrigger.checked) {
      subHeadings.addEventListener('transitioned', function handler() {
        subHeadings.style.height = 'auto';
        subHeadings.removeEventListener('transitioned', handler);
      });
    } else {
      subHeadings.offsetHeight;
      subHeadings.style.height = '0';
    }
  };

  return render(handleHeadingClick, handleDisplaySubHeadings);
}
