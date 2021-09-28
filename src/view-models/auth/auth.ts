import AuthModel from 'src/models/auth/auth';

export default class AuthViewModel {
  private _authModel: AuthModel;

  constructor() {
    this._authModel = new AuthModel();
  }

  private static storeAccessToken(accessToken: string): void {
    console.log(`Persisting ${accessToken}`);
  }

  public async login(email: string, password: string): Promise<void> {
    const authRes = await this._authModel.login({ email, password });
    const accessToken = authRes.accessToken;

    AuthViewModel.storeAccessToken(accessToken);
  }
}
