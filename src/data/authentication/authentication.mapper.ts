import { LoginResponse } from 'src/data/authentication/interfaces';
import AccessTokenModel from 'src/models/authentication/access-token.model';
import AuthenticationViewModel from 'src/view-models/authentication/authentication.view-model';

export default class AuthenticationMapper {
  public static toAccessToken(loginResponse: LoginResponse): AccessTokenModel {
    return new AccessTokenModel(loginResponse.access_token);
  }

  public static toAuthenticationViewModel(
    accessToken: AccessTokenModel,
  ): AuthenticationViewModel {
    return new AuthenticationViewModel(accessToken);
  }
}
