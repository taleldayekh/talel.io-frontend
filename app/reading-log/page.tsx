import { google } from 'googleapis';
import ReadingLogView from 'views/ReadingLogView/ReadingLogView';

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

  return res.data.values;
}

export default async function ReadingLog() {
  const readingLogData = await getReadingLogSheetData();

  // TODO: Mapper
  // const readingLogEntires

  return readingLogData ? (
    <>
      <ReadingLogView readingLogEntries={readingLogData} />
    </>
  ) : (
    <p>No data</p>
  );
}
