import { useContext } from 'react';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthRepository from 'infrastructure/repositories/auth/auth.repository';
import { HttpResponse } from 'libs/http-client/interfaces';
import { LoginSchema, NewAccessTokenSchema } from 'infrastructure/repositories/auth/schemas';
import AuthMapper from 'hooks/auth/mappers/auth.mapper';

export default function useAuth() {
    const { setAuthValues } = useContext(AuthContext);

    const login = (email: string, password: string): void => {
        AuthRepository.login(email, password).then((loginRes: HttpResponse<LoginSchema>) => {
            const accessToken = AuthMapper.fromResponseDataToAccessToken(loginRes.data);

            setAuthValues({
                token: accessToken,
                isLoggedIn: true
            })
        }).catch((error) => {
            throw(error)
        })
    }

    const refreshAccessToken = (): void => {
        AuthRepository.getNewAccessToken().then((newAccessTokenRes: HttpResponse<NewAccessTokenSchema>) => {
            const accessToken = AuthMapper.fromResponseDataToAccessToken(newAccessTokenRes.data);

            setAuthValues({
                token: accessToken,
                isLoggedIn: true
            })
        }).catch((error) => {
            throw(error)
        })
    }

    return {
        login,
        refreshAccessToken
    }
}
