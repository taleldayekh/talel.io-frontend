import { LoginProps } from 'pages/Login/interfaces';
import { TextFieldType } from 'components/TextField/enums';
import TextField from 'components/TextField/TextField';

export default function Login({
    updateUsernameInput,
    updatePasswordInput
}: LoginProps) {
    return (
        <>
            <TextField onChange={updateUsernameInput}/>
            <TextField type={TextFieldType.PASSWORD} onChange={updatePasswordInput}/>
        </>
    )
}
