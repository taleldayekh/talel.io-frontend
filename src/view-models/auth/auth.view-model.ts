import {
  AccessToken,
  AccessTokenPayload,
} from 'src/view-models/auth/auth.view-model.interface';
import AuthModel from 'src/models/auth/auth';

export default class AuthViewModel {
  private authModel: AuthModel;

  constructor() {
    this.authModel = new AuthModel();
  }

  private static decodeAccessTokenPayload(
    accessToken: string,
  ): AccessTokenPayload {
    const jwtPayload = accessToken.split('.')[1];
    const decodedAccessTokenPayload = JSON.parse(window.atob(jwtPayload));

    return decodedAccessTokenPayload;
  }

  public accessTokenHasExpired(accessToken: string): boolean {
    const { exp } = AuthViewModel.decodeAccessTokenPayload(accessToken);
    const expiredAccessToken = Date.now() >= exp * 1000;

    return !!expiredAccessToken;
  }

  public requestRequiresAuthentication(requestUrl: string): boolean {
    const urlsWithAuthentication = [''];

    return urlsWithAuthentication.some((url) => url.includes(requestUrl));
  }

  public async login(email: string, password: string): Promise<AccessToken> {
    const loginRes = await this.authModel.login({ email, password });
    const accessToken = loginRes.accessToken;

    return accessToken;
  }

  public async newAccessToken(): Promise<AccessToken> {
    const newAccessTokenRes = await this.authModel.newAccessToken();
    const accessToken = newAccessTokenRes.accessToken;

    return accessToken;
  }
}
