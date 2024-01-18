import { ReadingLogViewProps } from 'views/ReadingLogView/interfaces';
import styles from 'views/ReadingLogView/reading-log-view.module.css';

export default function ReadingLogView({
  readingLogEntries,
}: ReadingLogViewProps) {
  return (
    <main className={styles['reading-log']}>
      <table className={styles['reading-log__table']}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year Read</th>
            <th>Format</th>
          </tr>
        </thead>
        <tbody>
          {readingLogEntries.map((readingLogEntry, index) => (
            <tr key={index}>
              {/* <td>{readingLogEntry.title}</td>
              <td>{readingLogEntry.yearRead}</td>
              <td>{readingLogEntry.format}</td> */}

              <>
                <tr>
                  <td>My title</td>
                </tr>
                <tr>
                  <td>Year Read: 2022</td>
                  <td>Format: Print</td>
                </tr>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
