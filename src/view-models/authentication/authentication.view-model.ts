import AccessTokenModel from 'src/models/authentication/access-token.model';

export default class AuthenticationViewModel {
  public accessToken: AccessTokenModel;

  constructor(accessToken: AccessTokenModel) {
    this.accessToken = accessToken;
  }
}
