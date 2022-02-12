import TokenModel from 'src/models/authentication/token.model';

export default class AuthenticationModel {
  constructor(public token: TokenModel, public isLoggedIn: boolean) {}
}
