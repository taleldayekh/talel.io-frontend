import AuthViewModel from 'src/view-models/auth/auth.view-model';
import { talelLoginData } from 'src/tests/mock-data/users';
import { ACCESS_TOKEN } from 'src/tests/mock-data/auth';

jest.mock('src/models/auth/auth.model');

describe('AuthViewModel', () => {
  describe('login', () => {
    it('should return access token given email and password', async () => {
      const authViewModel = new AuthViewModel();
      const accessToken = await authViewModel.login(
        talelLoginData.email,
        talelLoginData.password,
      );

      expect(accessToken).toBe(ACCESS_TOKEN);
    });
  });
});
