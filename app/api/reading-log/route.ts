import { google } from 'googleapis';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
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

    console.log(res);

    return NextResponse.json({
      name: 'Talel',
    });
  } catch (error) {
    console.log(error);
  }
}
