import { Dispatch, SetStateAction } from 'react';
import AuthenticationModel from 'src/models/authentication/authentication.model';

export interface AuthenticationContextValues {
  authenticationContext: AuthenticationModel;
  setAuthenticationContext: Dispatch<SetStateAction<AuthenticationModel>>;
}
