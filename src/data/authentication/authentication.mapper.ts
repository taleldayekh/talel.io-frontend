import { LoginResponse } from 'src/data/authentication/interfaces';
import TokenModel from 'src/models/authentication/token.model';

export default class AuthenticationMapper {
  public static toAccessToken(loginResponse: LoginResponse): TokenModel {
    return new TokenModel(loginResponse.access_token);
  }
}
