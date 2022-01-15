import TokenModel from 'src/models/authentication/token.model';

export default class AuthenticationModel {
  public token: TokenModel;
  public isLoggedIn: boolean;

  constructor(token: TokenModel, isLoggedIn: boolean) {
    this.token = token;
    this.isLoggedIn = isLoggedIn;
  }
}
