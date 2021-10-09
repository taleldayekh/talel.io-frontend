import {
  LoginData,
  LoginDTO,
  NewAccessTokenDTO,
} from 'src/data/auth/auth.interface';
import HttpClient from 'src/libs/http-client/http-client';
import AuthMapper from 'src/data/auth/auth-mapper';
import {
  ACCOUNTS_LOGIN,
  ACCOUNTS_NEW_ACCESS_TOKEN,
} from 'src/data/api/resources';

export default class AuthRepository {
  private _httpClient: typeof HttpClient;

  constructor(httpClient: typeof HttpClient) {
    this._httpClient = httpClient;
  }

  public async login(data: LoginData): Promise<LoginDTO> {
    const loginRes = await this._httpClient.post(ACCOUNTS_LOGIN, data);
    const loginDTO = AuthMapper.toLoginDTO(loginRes.data);

    return loginDTO;
  }

  public async newAccessToken(): Promise<NewAccessTokenDTO> {
    const newAccessTokenRes = await this._httpClient.post(
      ACCOUNTS_NEW_ACCESS_TOKEN,
      undefined,
      true,
    );
    const newAccessTokenDTO = AuthMapper.toNewAccessTokenDTO(
      newAccessTokenRes.data,
    );

    return newAccessTokenDTO;
  }
}
