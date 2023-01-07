import { ChangeEvent, ReactElement } from 'react';

export interface LoginControllerProps {
    render: (
        updateEmailInput: (event: ChangeEvent<HTMLInputElement>) => void,
        updatePasswordInput: (event: ChangeEvent<HTMLInputElement>) => void,
        login: () => void
    ) => ReactElement; 
}
