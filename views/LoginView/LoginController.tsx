import { useContext, useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
import { LoginControllerProps } from 'views/LoginView/interfaces';

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

    const login = async (): Promise<void> => {
        // ! Dummy
        setAuthValues({
            token: 'Dummy Token',
            isLoggedIn: true,
        })
    }

    return props.render(updateEmailInput, updatePasswordInput, login);
}
