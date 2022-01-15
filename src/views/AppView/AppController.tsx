import React, { useContext, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { AuthenticationContext } from 'src/contexts/authentication/authentication.context';
import useAuthentication from 'src/hooks/authentication/useAuthentication';
import AppView from 'src/views/AppView/AppView';

const AppController: React.FC = () => {
  const { authenticationContext } = useContext(AuthenticationContext);
  const authentication = useAuthentication();

  const accessToken = authenticationContext.token.accessToken;

  const interceptorId = axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const requestUrl = config.url ? config.url : '';

      if (!accessToken) return config;
      if (
        config.method === 'post' &&
        !authentication.requestRequiresAuthentication(requestUrl)
      )
        return config;

      const accessTokenHasExpired: boolean =
        authentication.accessTokenHasExpired(accessToken);

      if (accessTokenHasExpired) {
        authentication.refreshAccessToken();
      }

      config.headers.Authorization = `Bearer ${accessToken}`;

      return config;
    },
  );

  useEffect(() => {
    return () => {
      axios.interceptors.request.eject(interceptorId);
    };
  });

  return <AppView />;
};

export default AppController;
