import { LoginData, LoginDTO } from 'src/data/auth/auth.interface';
import AuthRepository from 'src/data/auth/auth-repository';
import HttpClient from 'src/libs/http-client/http-client';

export default class AuthModel {
  private _authRepository: AuthRepository;

  constructor() {
    this._authRepository = new AuthRepository(HttpClient);
  }

  public async login(data: LoginData): Promise<LoginDTO> {
    return this._authRepository.login(data);
  }

  // public async logout() {
  // ! Not implemented
  // }

  // public async newAccessToken() {
  // ! Not implemented
  // }
}
