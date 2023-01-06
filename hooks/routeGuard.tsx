import { useContext, useEffect, FC, ReactElement } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';

const routeGuard = (Component: FC) => (props: ReactElement) => {
    const router = useRouter();

    const { authValues } = useContext(AuthContext);

    const isLoggedIn = authValues.isLoggedIn;

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login');
        }
    })

    return (
        isLoggedIn ? <Component {...props}/> : <></>
    )
}

export default routeGuard;
