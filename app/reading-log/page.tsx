import { google } from 'googleapis';
import config from 'config';
import ReadingLogMapper from 'views/ReadingLogView/mappers/reading-log.mapper';
import ReadingLogView from 'views/ReadingLogView/ReadingLogView';

async function getReadingLogSheetData() {
  const googleApiCredentials = {
    credentials: {
      client_email: config.google.api.client_email,
      private_key: config.google.api.private_key,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  };

  const auth = await google.auth.getClient(googleApiCredentials);

  const googleSheets = google.sheets({
    auth,
    version: 'v4',
  });

  const readingLogSheetQuery = {
    spreadsheetId: config.google.sheets.readingLogSheetId,
    range: 'Reading Log!A:D',
  };

  const readingLogSheetRes = await googleSheets.spreadsheets.values.get(
    readingLogSheetQuery,
  );

  if (readingLogSheetRes.data.values) {
    const readingLogEntries =
      ReadingLogMapper.fromResponseToReadingLogEntriesModel(
        readingLogSheetRes.data.values,
      );

    return readingLogEntries;
  }

  return [];
}

export const fetchCache = 'force-no-store';

export default async function ReadingLog() {
  let readingLogEntries = undefined;

  try {
    readingLogEntries = await getReadingLogSheetData();
  } catch (error) {
    // TODO: Error handling
  }

  if (!readingLogEntries || readingLogEntries.length === 0) {
    return <span>No reading log entries</span>;
  }

  return <ReadingLogView readingLogEntries={readingLogEntries} />;
}
