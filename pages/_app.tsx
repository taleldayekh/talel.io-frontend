import { useContext, useEffect, PropsWithChildren } from 'react';
import { AppProps } from 'next/app';
import { AuthProvider, AuthContext } from 'contexts/auth/auth.context';
import httpClient from 'libs/http-client/http-client';
import { RequestInterceptionEvents } from 'libs/http-client/enums';
import 'styles/global.css';

function AppController({ children }: PropsWithChildren) {
  const { authValues } = useContext(AuthContext);

  useEffect(() => {
    const accessToken = authValues.token;
    
    // Registers callback for providing the access
    // token from context on request interception.
    httpClient.onRequestInterception(
      RequestInterceptionEvents.TOKEN,
      () => {
        return accessToken;
      }
    )
  }, [authValues])

  return (
    <>
      { children }
    </>
  )
}

export default function App({ Component, pageProps}: AppProps) {
  return (
    <AuthProvider>
      <AppController>
        <Component { ...pageProps }/>
      </AppController>
    </AuthProvider>
  )
}
