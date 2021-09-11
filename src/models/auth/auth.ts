import { LoginData } from 'src/data/auth/auth.interface';
import { Auth } from 'src/models/auth/auth-model.interface';
import AuthRepository from 'src/data/auth/auth-repository';
import HttpClient from 'src/libs/http-client/http-client';

export default class AuthModel {
  private _authRepository: AuthRepository;

  constructor() {
    this._authRepository = new AuthRepository(HttpClient);
  }

  public async login(data: LoginData): Promise<Auth> {
    return this._authRepository.login(data);
  }

  public newAccessToken(): Auth['accessToken'] {
    // Not implemented
    return '';
  }
}
