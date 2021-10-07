import {
  AccessToken,
  AccessTokenPayload,
} from 'src/view-models/auth/auth-view-model.interface';
import AuthModel from 'src/models/auth/auth';

export default class AuthViewModel {
  private _authModel: AuthModel;

  constructor() {
    this._authModel = new AuthModel();
  }

  private static _decodeAccessTokenPayload(
    accessToken: string,
  ): AccessTokenPayload {
    const jwtPayload = accessToken.split('.')[1];
    const decodedAccessTokenPayload = JSON.parse(window.atob(jwtPayload));

    return decodedAccessTokenPayload;
  }

  public accessTokenHasExpired(accessToken: string): boolean {
    const { exp } = AuthViewModel._decodeAccessTokenPayload(accessToken);
    const expiredAccessToken = Date.now() >= exp * 1000;

    return !!expiredAccessToken;
  }

  public async login(email: string, password: string): Promise<AccessToken> {
    const loginRes = await this._authModel.login({ email, password });
    const accessToken = loginRes.accessToken;

    return accessToken;
  }

  public async newAccessToken(): Promise<AccessToken> {
    const newAccessTokenRes = await this._authModel.newAccessToken();
    const accessToken = newAccessTokenRes.accessToken;

    return accessToken;
  }
}
