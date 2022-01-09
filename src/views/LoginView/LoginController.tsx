import React, { useState, useContext, FormEvent } from 'react';
import { LoginCredentials } from 'src/views/LoginView/interfaces';
import { AuthenticationContext } from 'src/contexts/authentication/authentication.context';
import TokenModel from 'src/models/authentication/token.model';
import HttpClient from 'src/libs/http-client/http-client';
import AuthenticationRepository from 'src/data/authentication/authentication.repository';
import LoginView from 'src/views/LoginView/LoginView';

const LoginController: React.FC = () => {
  const { setAuthenticationContext } = useContext(AuthenticationContext);

  const [authenticationRepository] = useState<AuthenticationRepository>(
    new AuthenticationRepository(HttpClient),
  );
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

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
        setAuthenticationContext(res);
      })
      .catch((error) => {
        // Todo: Error handling
        console.log(error);
      });

    event.preventDefault();
  };

  return (
    <LoginView
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      login={login}
    />
  );
};

export default LoginController;
