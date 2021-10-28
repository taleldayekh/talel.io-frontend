import AuthViewModel from 'src/view-models/auth/auth.view-model';
import { talelLoginData } from 'src/tests/mock-data/users';
import { ACCESS_TOKEN, EXPIRED_ACCESS_TOKEN } from 'src/tests/mock-data/auth';
import {
  resourcesWithAuthentication,
  resourcesWithoutAuthentication,
} from 'src/data/api/resources';

jest.mock('src/models/auth/auth.model');

let authViewModel: AuthViewModel;

beforeEach(() => {
  authViewModel = new AuthViewModel();
});

describe('AuthViewModel', () => {
  describe('accessTokenHasExpired', () => {
    it('should return true if token has expired', () => {
      const expiredAccessToken =
        authViewModel.accessTokenHasExpired(EXPIRED_ACCESS_TOKEN);

      expect(expiredAccessToken).toBe(true);
    });

    it('should return false if token has not expired', () => {
      const expiredAccessToken =
        authViewModel.accessTokenHasExpired(ACCESS_TOKEN);

      expect(expiredAccessToken).toBe(false);
    });
  });

  describe('requestRequiresAuthentication', () => {
    it.each(resourcesWithAuthentication)(
      'should return true for protected resources',
      (requestUrl) => {
        expect(authViewModel.requestRequiresAuthentication(requestUrl)).toBe(
          true,
        );
      },
    );

    it.each(resourcesWithoutAuthentication)(
      'should return false for non protected resources',
      (requestUrl) => {
        expect(authViewModel.requestRequiresAuthentication(requestUrl)).toBe(
          false,
        );
      },
    );
  });

  describe('login', () => {
    it('should return access token given email and password', async () => {
      const accessToken = await authViewModel.login(
        talelLoginData.email,
        talelLoginData.password,
      );

      expect(accessToken).toBe(ACCESS_TOKEN);
    });
  });

  describe('newAccessToken', () => {
    it('should return new access token', async () => {
      const accessToken = await authViewModel.newAccessToken();

      expect(accessToken).toBe(ACCESS_TOKEN);
    });
  });
});
