import {
  LoginData,
  LoginDTO,
  NewAccessTokenDTO,
} from 'src/data/auth/auth.interface';

export interface MockAuthModel {
  login: (data: LoginData) => LoginDTO;
  newAccessToken: () => NewAccessTokenDTO;
}
