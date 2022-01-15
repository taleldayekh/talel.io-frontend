import React from 'react';
import { LoginViewProps } from 'src/views/LoginView/interfaces';
import LoginFormView from 'src/views/LoginFormView/LoginFormView';

const LoginView: React.FC<LoginViewProps> = (props: LoginViewProps) => {
  const { updateEmail, updatePassword, login } = props;

  return (
    <LoginFormView
      updateEmail={updateEmail}
      updatePassword={updatePassword}
      login={login}
    />
  );
};

export default LoginView;
