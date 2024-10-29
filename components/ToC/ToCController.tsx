import { useEffect } from 'react';
import { ToCControllerProps, ToC, ToCHeading } from 'components/ToC/interfaces';

export default function ToCController({
  tocHTML,
  setToC,
  subHeadingsRef,
  render,
}: ToCControllerProps) {
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

  return render(handleDisplaySubHeadings);
}
