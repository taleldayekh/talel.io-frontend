import {
  AccessToken,
  AccessTokenPayload,
} from 'src/view-models/auth/interfaces';
import AuthModel from 'src/models/auth/auth.model';
import { resourcesWithAuthentication } from 'src/data/api/resources';

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
    // ! console.log to see the actual url structure here
    const protectedResources = [...resourcesWithAuthentication];

    return protectedResources.some((resource) => resource.includes(requestUrl));
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
