import {
  LoginData,
  LoginResponse,
  NewAccessTokenResponse,
} from 'src/data/auth/interfaces';
import { AxiosResponse } from 'axios';
import HttpClient from 'src/libs/http-client/http-client';
import AuthMapper from 'src/data/auth/auth-mapper';
import AccessTokenModel from 'src/models/auth/access-token.model';
import {
  ACCOUNTS_LOGIN,
  ACCOUNTS_NEW_ACCESS_TOKEN,
} from 'src/data/api/resources';

export default class AuthRepository {
  private httpClient: typeof HttpClient;

  constructor(httpClient: typeof HttpClient) {
    this.httpClient = httpClient;
  }

  public async login(loginData: LoginData): Promise<AccessTokenModel> {
    const loginRes: AxiosResponse<LoginResponse> = await this.httpClient.post(
      ACCOUNTS_LOGIN,
      loginData,
    );
    const accessToken = AuthMapper.toAccessToken(loginRes.data);

    return accessToken;
  }

  public async newAccessToken(): Promise<AccessTokenModel> {
    const newAccessTokenRes: AxiosResponse<NewAccessTokenResponse> =
      await this.httpClient.post(ACCOUNTS_NEW_ACCESS_TOKEN, undefined, true);
    const accessToken = AuthMapper.toAccessToken(newAccessTokenRes.data);

    return accessToken;
  }
}
