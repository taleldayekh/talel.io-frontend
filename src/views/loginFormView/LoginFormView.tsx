import React, { useState } from 'react';
import AuthViewModel from 'src/view-models/auth/auth';
import InputView from 'src/views/inputView/InputView';

const LoginFormView: React.FC = () => {
  const [login, setLogin] = useState({ user: '', pwd: '' });

  const emit = (value: string): void => {
    setLogin({ ...login, user: value });
  };

  const emitPwd = (value: string): void => {
    setLogin({ ...login, pwd: value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    new AuthViewModel()
      .login(login.user, login.pwd)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputView emitValue={emit} />
      <InputView emitValue={emitPwd} password />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LoginFormView;
