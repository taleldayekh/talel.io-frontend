import { ChangeEvent } from 'react';

export interface LoginProps {
    updateEmailInput: (event: ChangeEvent<HTMLInputElement>) => void;
    updatePasswordInput: (event: ChangeEvent<HTMLInputElement>) => void;
    loginAction: () => void;
}
