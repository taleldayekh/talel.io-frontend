import { Auth } from 'src/view-models/auth/auth-view-model.interface';
import AuthModel from 'src/models/auth/auth';

export default class AuthViewModel {
  private _authModel: AuthModel;

  constructor() {
    this._authModel = new AuthModel();
  }

  public async login(email: string, password: string): Promise<Auth> {
    return this._authModel.login({ email, password });
  }
}
