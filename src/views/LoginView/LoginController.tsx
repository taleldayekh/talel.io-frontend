import React, { useContext, useState, useEffect, FormEvent } from 'react';
import { LoginCredentials } from 'src/views/LoginView/interfaces';
import { Navigate } from 'react-router-dom';
import { AuthenticationContext } from 'src/contexts/authentication/authentication.context';
import useAuthentication from 'src/hooks/authentication/useAuthentication';
import TokenModel from 'src/models/authentication/token.model';
import HttpClient from 'src/libs/http-client/http-client';
import AuthenticationRepository from 'src/data/authentication/authentication.repository';
import LoginView from 'src/views/LoginView/LoginView';

const LoginController: React.FC = () => {
  const { authenticationContext, setAuthenticationContext } = useContext(
    AuthenticationContext,
  );
  const authentication = useAuthentication();

  const [authenticationRepository] = useState<AuthenticationRepository>(
    new AuthenticationRepository(HttpClient),
  );
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  useEffect(() => {
    authentication.refreshAccessToken();
  }, []);

  const updateEmail = (email: string): void => {
    setLoginCredentials({ ...loginCredentials, email });
  };

  const updatePassword = (password: string): void => {
    setLoginCredentials({ ...loginCredentials, password });
  };

  const login = (event: FormEvent<HTMLFormElement>): void => {
    authenticationRepository
      .login(loginCredentials.email, loginCredentials.password)
      .then((res: TokenModel) => {
        setAuthenticationContext({ token: res, isLoggedIn: true });
      })
      .catch((error) => {
        // Todo: Error handling
        console.log(error);
      });

    event.preventDefault();
  };

  return authenticationContext.isLoggedIn ? (
    <Navigate to="/admin/articles" />
  ) : (
    <LoginView
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      login={login}
    />
  );
};

export default LoginController;
