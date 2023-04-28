import { AuthContext, AuthProvider } from 'contexts/auth/auth.context';
import { RequestInterceptionEvents } from 'libs/http-client/enums';
import httpClient from 'libs/http-client/http-client';
import { AppProps } from 'next/app';
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppController>
        <Component {...pageProps} />
      </AppController>
    </AuthProvider>
  );
}
