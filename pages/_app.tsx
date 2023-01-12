import { useContext, useEffect, ReactNode } from 'react';
import { AppProps } from 'next/app';
import { AuthProvider, AuthContext } from 'contexts/auth/auth.context';
import httpClient from 'libs/http-client/http-client';
import { RequestInterceptionEvents } from 'libs/http-client/enums';

function AppController(component: ReactNode) {
  const { authValues } = useContext(AuthContext);

  useEffect(() => {
    // Registers callback for returning access token
    // from context during request interception.
    httpClient.onRequestInterception(
      RequestInterceptionEvents.TOKEN,
      () => {
        return authValues.token
      }
    )
  }, [])

  return component;
}

export default function App({ Component, pageProps}: AppProps) {
  return (
    <AuthProvider>
      { AppController(<Component {...pageProps}/>) }
    </AuthProvider>
  )
}
