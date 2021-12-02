import AccessTokenModel from 'src/models/authentication/access-token.model';

export default class AuthenticationViewModel {
  public accessToken: string;

  constructor(accessToken: AccessTokenModel) {
    this.accessToken = accessToken.accessToken;
  }
}
