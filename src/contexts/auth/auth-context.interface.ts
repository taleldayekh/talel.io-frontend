import { Dispatch, SetStateAction } from 'react';

export interface AuthContextValues {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
}
