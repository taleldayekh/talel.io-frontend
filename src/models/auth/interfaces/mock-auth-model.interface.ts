import { LoginData, LoginDTO } from 'src/data/auth/auth.interface';

export interface MockAuthModel {
  login: (data: LoginData) => LoginDTO;
}
