import React, { useContext, useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { AuthContext } from 'src/contexts/auth/auth-context';
import AuthViewModel from 'src/view-models/auth/auth';
import AppView from 'src/views/appView/AppView';

const AppViewController: React.FC = () => {
  const { accessToken, setAccessToken } = useContext(AuthContext);

  const [authViewModel, setAuthViewModel] = useState<AuthViewModel>();

  useEffect(() => {
    setAuthViewModel(new AuthViewModel());
  }, []);

  axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
    if (!accessToken || !authViewModel) return config;

    const expiredAccessToken = authViewModel.accessTokenHasExpired(accessToken);
    const requestUrl = config.url ? config.url : '';

    if (
      expiredAccessToken &&
      authViewModel.requestRequiresAuthentication(requestUrl)
    ) {
      const newAccessToken = await authViewModel.newAccessToken();

      // Append access token to request header
      // Figure out what to do when a new access token cannot be generated
      // Some sort of logout logic should happen here

      setAccessToken(newAccessToken);
    }

    return config;
  });

  return <AppView />;
};

export default AppViewController;
