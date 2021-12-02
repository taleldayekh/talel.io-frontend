import React, { useState, FormEvent } from 'react';
import { LoginCredentials } from 'src/views/LoginView/interfaces';
import AccessTokenModel from 'src/models/authentication/access-token.model';
import HttpClient from 'src/libs/http-client/http-client';
import AuthenticationRepository from 'src/data/authentication/authentication.repository';
import AuthenticationMapper from 'src/data/authentication/authentication.mapper';
import LoginView from 'src/views/LoginView/LoginView';

const LoginController: React.FC = () => {
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
      .then((res: AccessTokenModel) => {
        const authenticationViewModel =
          AuthenticationMapper.toAuthenticationViewModel(res);

        console.log(authenticationViewModel.accessToken);
      })
      .catch((error) => {
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
