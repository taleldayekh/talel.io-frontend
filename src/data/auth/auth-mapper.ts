import { LoginResponse } from 'src/data/auth/interfaces';
import AccessTokenModel from 'src/models/auth/access-token.model';

export default class AuthMapper {
  public static toAccessToken(loginResponse: LoginResponse): AccessTokenModel {
    return new AccessTokenModel(loginResponse.access_token);
  }
}
