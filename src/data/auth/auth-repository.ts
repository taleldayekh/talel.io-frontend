import { Auth, LoginData, LoginDTO } from 'src/data/auth/auth.interface';
import HttpClient from 'src/libs/http-client/http-client';
import AuthMapper from 'src/data/auth/auth-mapper';
import { ACCOUNTS_LOGIN } from 'src/data/api/resources';

export default class AuthRepository implements Auth {
  private _httpClient: HttpClient;

  constructor() {
    this._httpClient = new HttpClient();
  }

  public async login(data: LoginData): Promise<LoginDTO> {
    const loginRes = await this._httpClient.post(ACCOUNTS_LOGIN, data);
    const loginDTO = AuthMapper.toLoginDTO(loginRes.data);

    return loginDTO;
  }
}
