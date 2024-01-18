import { google } from 'googleapis';
import ReadingLogView from 'views/ReadingLogView/ReadingLogView';
import ReadingLogMapper from 'views/ReadingLogView/mappers/reading-log.mapper';

async function getReadingLogSheetData() {
  const auth = await google.auth.getClient({
    credentials: {
      client_email: process.env.GCP_CLIENT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const readingLogSheet = google.sheets({
    auth,
    version: 'v4',
  });

  const res = await readingLogSheet.spreadsheets.values.get({
    spreadsheetId: process.env.READING_LOG_SHEET_ID,
    range: 'Reading Log!A:C',
  });

  return res.data.values as string[][] | null | undefined;
}

export default async function ReadingLog() {
  let readingLogEntries = undefined;

  try {
    const readingLogSheetData = await getReadingLogSheetData();

    if (readingLogSheetData) {
      readingLogEntries =
        ReadingLogMapper.fromSheetDataToReadingLogEntries(readingLogSheetData);
    }
  } catch (error) {
    // TODO: Error handling
  }

  return readingLogEntries ? (
    <>
      <ReadingLogView readingLogEntries={readingLogEntries} />
    </>
  ) : (
    <p>No data</p>
  );
}
