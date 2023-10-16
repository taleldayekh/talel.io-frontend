import { ArticleControllerProps } from 'components/Article/interfaces';
import { useEffect } from 'react';

const getTableOfContentsAnchors = (
  tableOfContentsHTML: string,
): HTMLAnchorElement[] => {
  const parser = new DOMParser();
  const parsedTableOfContentsHTML = parser.parseFromString(
    tableOfContentsHTML,
    'text/html',
  );
  const tableOfContentsHrefs = [
    ...parsedTableOfContentsHTML.querySelectorAll('a'),
  ].map((anchor) => anchor.href);
  const documentAnchors = [...document.querySelectorAll('a')];
  const tableOfContentsAnchors = documentAnchors.filter((anchor) =>
    tableOfContentsHrefs.includes(anchor.href),
  );

  return tableOfContentsAnchors;
};

export default function ArticleController({
  tableOfContentsHTML,
  render,
}: ArticleControllerProps) {
  useEffect(() => {
    // TODO: Typing
    const smoothScroll = (event: any): void => {
      event.preventDefault();

      const headingId = event.currentTarget.getAttribute('href').slice(1);
      const headingElement = document.getElementById(headingId);

      if (headingElement) {
        headingElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const tableOfContentsAnchors =
      getTableOfContentsAnchors(tableOfContentsHTML);

    tableOfContentsAnchors.forEach((anchor: HTMLAnchorElement) => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      tableOfContentsAnchors.forEach((anchor: HTMLAnchorElement) => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  });

  return render();
}
