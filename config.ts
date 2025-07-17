const config = {
  api: {
    url: process.env.NEXT_PUBLIC_API_URL,
  },
  google: {
    analytics: {
      gaMeasurementId: process.env.NEXT_PUBLIC_GA,
    },
    api: {
      client_email: process.env.GCP_CLIENT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY,
    },
    sheets: {
      readingLogSheetId: process.env.READING_LOG_SHEET_ID,
    },
  },
};

export default config;
