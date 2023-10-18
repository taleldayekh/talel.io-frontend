'use client';

import config from 'config';
import { AuthContext, AuthProvider } from 'contexts/auth/auth.context';
import 'highlight.js/styles/github-dark-dimmed.css';
import { RequestInterceptionEvents } from 'libs/http-client/enums';
import httpClient from 'libs/http-client/http-client';
import Script from 'next/script';
import { PropsWithChildren, useContext, useEffect } from 'react';
import 'styles/colors.css';
import 'styles/global.css';

function AppController({ children }: PropsWithChildren) {
  const { authValues } = useContext(AuthContext);

  useEffect(() => {
    const accessToken = authValues.token;

    // Registers callback for providing the access
    // token from context on request interception.
    httpClient.onRequestInterception(RequestInterceptionEvents.TOKEN, () => {
      return accessToken;
    });
  }, [authValues]);

  return <>{children}</>;
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        {config.analytics.gaMeasurementId && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.gaMeasurementId}`}
            />
            <Script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${config.analytics.gaMeasurementId}');
                `,
              }}
            />
          </>
        )}
        <AuthProvider>
          <AppController>{children}</AppController>
        </AuthProvider>
      </body>
    </html>
  );
}
