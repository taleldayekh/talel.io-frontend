import { createContext, PropsWithChildren, useState } from 'react';
import { AuthContextValues, AuthValues } from 'contexts/auth/interfaces';

const initialAuthValues: AuthValues = {
    token: '',
    isLoggedIn: false,
}

export const AuthContext = createContext<AuthContextValues>(
    {
        authValues: initialAuthValues,
        setAuthValues: () => null,
    }
)

export const AuthProvider = ({children}: PropsWithChildren) => {
    const [authValues, setAuthValues] = useState<AuthValues>(initialAuthValues)

    return (
        <AuthContext.Provider value={{ authValues, setAuthValues }}>
            { children }
        </AuthContext.Provider>
    )
}
