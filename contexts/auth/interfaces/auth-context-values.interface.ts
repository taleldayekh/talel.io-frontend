import { Dispatch, SetStateAction } from 'react';
import { AuthValues } from 'contexts/auth/interfaces';

export interface AuthContextValues {
    authValues: AuthValues;
    setAuthValues: Dispatch<SetStateAction<AuthValues>>;
}
