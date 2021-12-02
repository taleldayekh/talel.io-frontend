import { LoginResponse } from 'src/data/authentication/interfaces';
import { AxiosResponse } from 'axios';
import HttpClient from 'src/libs/http-client/http-client';
import AuthenticationMapper from 'src/data/authentication/authentication.mapper';
import AccessTokenModel from 'src/models/authentication/access-token.model';
import { ACCOUNTS_LOGIN } from 'src/data/api/resources';

export default class AuthenticationRepository {
  private httpClient: typeof HttpClient;

  constructor(httpClient: typeof HttpClient) {
    this.httpClient = httpClient;
  }

  public async login(
    email: string,
    password: string,
  ): Promise<AccessTokenModel> {
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
}
