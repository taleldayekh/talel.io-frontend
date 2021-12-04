import { Dispatch, SetStateAction } from 'react';

export interface AuthenticationContextValues {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
}
