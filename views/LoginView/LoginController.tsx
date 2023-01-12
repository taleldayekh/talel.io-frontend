import { useContext, useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
import useAuth from 'hooks/auth/useAuth';
import { LoginControllerProps } from 'views/LoginView/interfaces';

export default function LoginController(props: LoginControllerProps) {
    const router = useRouter();
    const auth = useAuth();

    const { authValues } = useContext(AuthContext);
    const isLoggedIn = authValues.isLoggedIn;

    useEffect(() => {
        auth.refreshAccessToken().catch(() => {
            console.warn('No current logged in user')
        })
    }, [])

    useEffect(() => {
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
        try {
            await auth.login(email, password);
        } catch (error) {
            // TODO: Display error component
        }
    }

    return props.render(updateEmailInput, updatePasswordInput, login);
}
