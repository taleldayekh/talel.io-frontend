import { useState, ChangeEvent } from 'react';
import AuthRepository from 'infrastructure/repositories/auth/auth.repository';
import LoginMapper from 'pages/Login/mappers/login.mapper';
import Login from 'pages/Login/Login';

export default function LoginController() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const updateEmailInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const username = event.target.value;
        setEmail(username);
    }

    const updatePasswordInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const password = event.target.value;
        setPassword(password);
    }

    const login = async (): Promise<void> => {
        const loginRes = await AuthRepository.login(email, password);
        const accessToken = LoginMapper.fromResponseToAccessToken(loginRes.data);

        // TODO: Set authentication context.
        // ! Remove
        console.log('set authentication token here')
        console.log(accessToken);
    }

    return <Login updateEmailInput={updateEmailInput} updatePasswordInput={updatePasswordInput} loginAction={login} />
}
