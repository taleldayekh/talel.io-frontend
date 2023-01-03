import { ChangeEvent } from 'react';

export interface LoginProps {
    updateUsernameInput: (event: ChangeEvent<HTMLInputElement>) => void;
    updatePasswordInput: (event: ChangeEvent<HTMLInputElement>) => void;
}
