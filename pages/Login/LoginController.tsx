import { useState, ChangeEvent } from 'react';
import Login from 'pages/Login/Login';

export default function LoginController() {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const updateUsernameInput = (event: ChangeEvent<HTMLInputElement>) => {
        const username = event.target.value;
        setUsername(username);
    }

    const updatePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;
        setPassword(password);
    }

    return <Login updateUsernameInput={updateUsernameInput} updatePasswordInput={updatePasswordInput} />
}
