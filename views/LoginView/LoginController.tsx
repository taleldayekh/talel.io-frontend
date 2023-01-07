import { useContext, useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthRepository from 'infrastructure/repositories/auth/auth.repository';
import { HttpResponse } from 'libs/http-client/interfaces';
import { LoginSchema } from 'infrastructure/repositories/auth/schemas';
import { LoginControllerProps } from 'views/LoginView/interfaces';
import LoginMapper from 'views/LoginView/mappers/login.mapper';

export default function LoginController(props: LoginControllerProps) {
    const router = useRouter();

    const {authValues, setAuthValues} = useContext(AuthContext);
    const isLoggedIn = authValues.isLoggedIn;

    useEffect(() => {
        // TODO: Instead of checking isLoggedIn, check if there is a valid access token.
        if (isLoggedIn) {
            router.push('/admin');
        }
    }, [isLoggedIn])

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const updateEmailInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const email = event.target.value;
        setEmail(email);
    }

    const updatePasswordInput = (event: ChangeEvent<HTMLInputElement>): void => {
        const password = event.target.value;
        setPassword(password);
    }

    const login = (): void => {
        AuthRepository.login(email, password).then((loginRes: HttpResponse<LoginSchema>) => {
            const accessToken = LoginMapper.fromResponseDataToAccessToken(loginRes.data);

            setAuthValues({
                token: accessToken,
                isLoggedIn: true
            })
        }).catch((error) => {
            // TODO: Handle error
        })
    }

    return props.render(updateEmailInput, updatePasswordInput, login);
}
