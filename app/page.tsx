'use client';
import { AuthContext, AuthProvider } from 'contexts/auth/auth.context';
import { RequestInterceptionEvents } from 'libs/http-client/enums';
import httpClient from 'libs/http-client/http-client';
import { PropsWithChildren, useContext, useEffect } from 'react';

import ArticlesView from 'views/ArticlesView/ArticlesView';

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

export default function App() {
  return (
    <AuthProvider>
      <AppController>
        {/* TODO: Temporarily redirect to be replaced with index page */}
        <ArticlesView />
      </AppController>
    </AuthProvider>
  );
}
