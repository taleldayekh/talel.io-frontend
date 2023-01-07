import { TextFieldType } from 'components/TextField/enums';
import LoginController from 'views/LoginView/LoginController';
import TextField from 'components/TextField/TextField';

export default function LoginView() {
    return (
        <LoginController render={(updateEmailInput, updatePasswordInput, login) => (
            <>
                <TextField onChange={updateEmailInput}/>
                <TextField onChange={updatePasswordInput} type={TextFieldType.PASSWORD}/>
                <button onClick={() => login()}>Login</button>
            </>
        )}/>
    )
}
