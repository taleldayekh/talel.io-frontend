import { ArticleContentType } from 'components/Article/enums';
import {
  ArticleContent,
  ArticleControllerProps,
} from 'components/Article/interfaces';
import { Image } from 'components/ImageSlider/interfaces';
import hljs from 'highlight.js';
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
  articleHTML,
  tableOfContentsHTML,
  setArticleContent,
  render,
}: ArticleControllerProps) {
  useEffect(() => {
    const parser = new DOMParser();
    const document = parser.parseFromString(articleHTML, 'text/html');
    const articleContent: ArticleContent[] = [];

    let currentContent = '';

    document.body.childNodes.forEach((node: ChildNode) => {
      if (node.nodeType !== Node.ELEMENT_NODE) return;

      const elementNode = node as Element;
      const htmlContent = elementNode.outerHTML;

      if (elementNode.classList.contains(ArticleContentType.GALLERY)) {
        if (currentContent) {
          articleContent.push({
            type: ArticleContentType.DEFAULT,
            content: currentContent.trim(),
          });

          currentContent = '';
        }

        const documentForImgs = parser.parseFromString(
          htmlContent,
          'text/html',
        );
        const imgs = documentForImgs.querySelectorAll('img');
        const imgContent: Image[] = Array.from(imgs).map((img) => ({
          src: img.src,
          alt: img.alt,
        }));

        articleContent.push({
          type: ArticleContentType.GALLERY,
          content: imgContent,
        });
      } else {
        currentContent += htmlContent;
      }
    });

    currentContent = currentContent.trim();

    if (currentContent) {
      articleContent.push({
        type: ArticleContentType.DEFAULT,
        content: currentContent,
      });
    }

    setArticleContent(articleContent);
  }, [articleHTML, setArticleContent]);

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

  useEffect(() => {
    hljs.highlightAll();
  });

  return render();
}
