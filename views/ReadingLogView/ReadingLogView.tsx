'use client';
import styles from 'views/ReadingLogView/reading-log-view.module.css';

export default function ReadingLogView({ readingLogEntries }: any) {
  return (
    <main className={styles['reading-log']}>
      <div className={styles['reading-log__window']}>
        <span className={styles['reading-log__window__header']}>
          Reading Log
        </span>
        <div className={styles['reading-log__window__info']}>
          <span>TBD Image</span>
          <p>TBD Text</p>
        </div>
        <div className={styles['reading-log__window__table__header']}>
          <span>Title:</span>
          <span>Year Read:</span>
          <span>Format:</span>
        </div>
        <div className={styles['reading-log__window__table__body']}>
          {readingLogEntries.map((entry: any, index: number) => (
            <div
              className={styles['reading-log__window__table__body__row']}
              key={index}
            >
              <span>{entry.title}</span>
              <span>{entry.yearRead}</span>
              <span>{entry.format}</span>
            </div>
          ))}
        </div>
        <div className={styles['reading-log__window__table__footer']}>
          <span>
            {readingLogEntries.length} Object(s)
          </span>
        </div>
      </div>
    </main>
  );
}
