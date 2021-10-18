import React, { useEffect, useState, useContext, FormEvent } from 'react';
import { LoginCredentials } from 'src/views/loginFormView/login-form-view.interface';
import { AuthContext } from 'src/contexts/auth/auth-context';
import AuthViewModel from 'src/view-models/auth/auth.view-model';
import LoginFormView from 'src/views/loginFormView/LoginFormView';

const LoginFormViewController: React.FC = () => {
  const { setAccessToken } = useContext(AuthContext);

  const [authViewModel, setAuthViewModel] = useState<AuthViewModel>();
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  useEffect(() => {
    setAuthViewModel(new AuthViewModel());
  }, []);

  const updateEmail = (email: string): void => {
    setLoginCredentials({ ...loginCredentials, email });
  };

  const updatePassword = (password: string): void => {
    setLoginCredentials({ ...loginCredentials, password });
  };

  const login = (event: FormEvent<HTMLFormElement>): void => {
    if (!authViewModel) return;

    authViewModel
      .login(loginCredentials.email, loginCredentials.password)
      .then((res) => setAccessToken(res))
      .catch((error) => console.log(error));

    event.preventDefault();
  };

  return (
    <LoginFormView
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      login={login}
    />
  );
};

export default LoginFormViewController;
