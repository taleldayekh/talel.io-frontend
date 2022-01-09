import { Dispatch, SetStateAction } from 'react';
import TokenModel from 'src/models/authentication/token.model';

export interface AuthenticationContextValues {
  authenticationContext: TokenModel;
  setAuthenticationContext: Dispatch<SetStateAction<TokenModel>>;
}
