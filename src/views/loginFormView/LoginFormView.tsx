import React from 'react';
import { LoginFormViewProps } from 'src/views/LoginFormView/interfaces';

const LoginFormView: React.FC<LoginFormViewProps> = (
  props: LoginFormViewProps,
) => {
  const { updateEmail, updatePassword, login } = props;

  return (
    <form onSubmit={login}>
      <input onChange={(e) => updateEmail(e.target.value)} />
      <input onChange={(e) => updatePassword(e.target.value)} />
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginFormView;
