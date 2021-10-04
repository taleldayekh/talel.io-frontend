import { FormEvent } from 'react';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginFormViewProps {
  updateEmail: (email: string) => void;
  updatePassword: (password: string) => void;
  login: (event: FormEvent<HTMLFormElement>) => void;
}
