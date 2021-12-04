import { Dispatch, SetStateAction } from 'react';
import AccessTokenModel from 'src/models/authentication/access-token.model';

export interface AuthenticationContextValues {
  accessToken: AccessTokenModel;
  setAccessToken: Dispatch<SetStateAction<AccessTokenModel>>;
}
