import { ReadingLogEntry } from 'views/ReadingLogView/interfaces/';

export default class ReadingLogMapper {
  public static fromResponseToReadingLogEntriesModel(
    readingLogSheetData: string[][],
  ): ReadingLogEntry[] {
    readingLogSheetData.shift();

    const readingLogEntries = readingLogSheetData.map((data) => ({
      title: data[0],
      yearRead: data[1],
      format: data[2],
      affiliateUrl: data[3],
    }));

    return readingLogEntries || [];
  }
}
