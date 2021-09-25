import { LoginData, LoginDTO } from 'src/data/auth/auth.interface';
import HttpClient from 'src/libs/http-client/http-client';
import AuthMapper from 'src/data/auth/auth-mapper';
import { ACCOUNTS_LOGIN } from 'src/data/api/resources';
import axios from 'axios';

export default class AuthRepository {
  private _httpClient: typeof HttpClient;

  constructor(httpClient: typeof HttpClient) {
    this._httpClient = httpClient;
  }

  public async login(data: LoginData): Promise<LoginDTO> {
    // ! Move the withCredentials property
    axios.defaults.withCredentials = true;
    const loginRes = await this._httpClient.post(ACCOUNTS_LOGIN, {
      ...data,
      withCredentials: true,
    });
    const loginDTO = AuthMapper.toLoginDTO(loginRes.data);

    return loginDTO;
  }
}
