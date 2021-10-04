import React from 'react';
import { LoginFormViewProps } from 'src/views/loginFormView/login-form-view.interface';
import { InputType } from 'src/views/inputView/input-view.interface';
import InputView from 'src/views/inputView/InputView';

const LoginFormView: React.FC<LoginFormViewProps> = (
  props: LoginFormViewProps,
) => {
  const { updateEmail, updatePassword, login } = props;

  const emit = (type: string, value: string): void => {
    if (type === InputType.TEXT) {
      updateEmail(value);
    }

    if (type === InputType.PASSWORD) {
      updatePassword(value);
    }
  };

  return (
    <form onSubmit={login}>
      <InputView emitValue={emit} />
      <InputView emitValue={emit} password />
      <input type="submit" value="Login" />
    </form>
  );
};

export default LoginFormView;
