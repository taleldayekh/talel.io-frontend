import { LoginProps } from 'pages/Login/interfaces';
import { TextFieldType } from 'components/TextField/enums';
import TextField from 'components/TextField/TextField';

export default function Login({
    updateEmailInput,
    updatePasswordInput,
    loginAction
}: LoginProps) {
    return (
        <>
            <TextField onChange={updateEmailInput}/>
            <TextField type={TextFieldType.PASSWORD} onChange={updatePasswordInput}/>





            {/* TODO: Create button component */}
            <button onClick={() => loginAction()}></button>
        </>
    )
}
