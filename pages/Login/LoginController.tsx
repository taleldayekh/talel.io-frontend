import { useContext, useState, ChangeEvent } from 'react';
import AuthRepository from 'infrastructure/repositories/auth/auth.repository';
import { AuthContext } from 'contexts/auth/auth.context';
import LoginMapper from 'pages/Login/mappers/login.mapper';
import Login from 'pages/Login/Login';

export default function LoginController() {
    const { authValues, setAuthValues } = useContext(AuthContext)

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
        // const loginRes = await AuthRepository.login(email, password);
        // const accessToken = LoginMapper.fromResponseToAccessToken(loginRes.data);

        // ! Test
        setAuthValues({
            token: 'test token',
            isLoggedIn: true
        })
    }

    return <Login updateEmailInput={updateEmailInput} updatePasswordInput={updatePasswordInput} loginAction={login} />
}
