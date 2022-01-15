import {
  LoginResponse,
  NewAccessTokenResponse,
} from 'src/data/authentication/interfaces';
import { AxiosResponse } from 'axios';
import HttpClient from 'src/libs/http-client/http-client';
import AuthenticationMapper from 'src/data/authentication/authentication.mapper';
import TokenModel from 'src/models/authentication/token.model';
import {
  ACCOUNTS_LOGIN,
  ACCOUNTS_NEW_ACCESS_TOKEN,
} from 'src/data/api/resources';

export default class AuthenticationRepository {
  private httpClient: typeof HttpClient;

  constructor(httpClient: typeof HttpClient) {
    this.httpClient = httpClient;
  }

  public async login(email: string, password: string): Promise<TokenModel> {
    const loginData = {
      email,
      password,
    };
    const loginRes: AxiosResponse<LoginResponse> = await this.httpClient.post(
      ACCOUNTS_LOGIN,
      loginData,
    );
    const accessToken = AuthenticationMapper.toAccessToken(loginRes.data);

    return accessToken;
  }

  public async getNewAccessToken(): Promise<TokenModel> {
    const newAccessTokenRes: AxiosResponse<NewAccessTokenResponse> =
      await this.httpClient.post(ACCOUNTS_NEW_ACCESS_TOKEN);
    const accessToken = AuthenticationMapper.toAccessToken(
      newAccessTokenRes.data,
    );

    return accessToken;
  }
}
