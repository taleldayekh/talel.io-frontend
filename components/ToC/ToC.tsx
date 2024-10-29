import { useState, useRef } from 'react';
import { ToCProps, ToC as ToCInterface } from 'components/ToC/interfaces';
import ToCController from 'components/ToC/ToCController';
import styles from 'components/ToC/toc.module.css';

export default function ToC({ tocHTML }: ToCProps) {
  const [toc, setToC] = useState<ToCInterface[]>([]);
  const subHeadingsRef = useRef<(HTMLUListElement | null)[]>([]);

  return (
    <ToCController
      tocHTML={tocHTML}
      setToC={setToC}
      subHeadingsRef={subHeadingsRef}
      render={(handleDisplaySubHeadings) => (
        <>
          <h2 className={styles.toc__title}>Table of Contents</h2>
          <ul className={styles.toc}>
            {toc.map((tocHeading, headingIndex) => (
              <li className={styles.toc__heading} key={headingIndex}>
                {tocHeading.subHeadings.length > 0 && (
                  <>
                    <input
                      id={`expand-collapse-subheading-${headingIndex}`}
                      className={styles['toc__heading__expand-collapse']}
                      type="checkbox"
                      onChange={() => handleDisplaySubHeadings(headingIndex)}
                    />
                    <label
                      className={styles.toc__heading__label}
                      htmlFor={`expand-collapse-subheading-${headingIndex}`}
                    >
                      <span className={styles.toc__heading__label__icon}></span>
                      <a className={styles.toc__link} href={tocHeading.href}>
                        {tocHeading.text}
                      </a>
                    </label>
                    <ul
                      ref={(element) => {
                        subHeadingsRef.current[headingIndex] = element;
                      }}
                      className={styles.toc__subheadings}
                    >
                      {tocHeading.subHeadings.map(
                        (subHeading, subHeadingIndex) => (
                          <li
                            className={styles.toc__subheading}
                            key={subHeadingIndex}
                          >
                            <a
                              className={styles.toc__link}
                              href={subHeading.href}
                            >
                              {subHeading.text}
                            </a>
                          </li>
                        ),
                      )}
                    </ul>
                  </>
                )}
                {tocHeading.subHeadings.length === 0 && (
                  <a className={styles.toc__link} href={tocHeading.href}>
                    {tocHeading.text}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    />
  );
}
