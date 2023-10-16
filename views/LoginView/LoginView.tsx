'use client';
import TextField from 'components/TextField/TextField';
import { TextFieldType } from 'components/TextField/enums';
import LoginController from 'views/LoginView/LoginController';

export default function LoginView() {
  return (
    <LoginController
      render={(updateEmailInput, updatePasswordInput, login) => (
        <>
          <TextField onChange={updateEmailInput} />
          <TextField
            onChange={updatePasswordInput}
            type={TextFieldType.PASSWORD}
          />
          <button onClick={() => login()}>Login</button>
        </>
      )}
    />
  );
}
