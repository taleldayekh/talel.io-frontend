import { AuthContext } from 'contexts/auth/auth.context';
import { useRouter } from 'next/navigation';
import { FC, ReactElement, useContext, useEffect } from 'react';

// TODO: Remove any and fix type error
const withRouteGuard: any = (Component: FC) => (props: ReactElement) => {
  const router = useRouter();

  const { authValues } = useContext(AuthContext);

  const isLoggedIn = authValues.isLoggedIn;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  });

  return isLoggedIn ? <Component {...props} /> : <></>;
};

export default withRouteGuard;
