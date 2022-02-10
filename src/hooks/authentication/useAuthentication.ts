import { useState, useContext } from 'react';
import { UseAuthentication } from 'src/hooks/authentication/interfaces';
import { AuthenticationContext } from 'src/contexts/authentication/authentication.context';
import TokenModel from 'src/models/authentication/token.model';
import HttpClient from 'src/libs/http-client/http-client';
import AuthenticationRepository from 'src/data/authentication/authentication.repository';
import { ARTICLES_CREATE, ASSETS_UPLOAD_IMAGE } from 'src/data/api/resources';

const useAuthentication = (): UseAuthentication => {
  const { setAuthenticationContext } = useContext(AuthenticationContext);

  const [authenticationRepository] = useState<AuthenticationRepository>(
    new AuthenticationRepository(HttpClient),
  );

  const requestRequiresAuthentication = (requestUrl: string): boolean => {
    const protectedResources: string[] = [ARTICLES_CREATE, ASSETS_UPLOAD_IMAGE];
    const resourceIsProtected = protectedResources.filter((resource) =>
      requestUrl.includes(resource),
    );

    return resourceIsProtected.length > 0;
  };

  const accessTokenHasExpired = (accessToken: string): boolean => {
    const jwtPayload = accessToken.split('.')[1];
    const decodedJWTPayload = JSON.parse(window.atob(jwtPayload));

    const { exp } = decodedJWTPayload;
    const expiredAccessToken = Date.now() >= exp * 1000;

    return expiredAccessToken;
  };

  const refreshAccessToken = (): void => {
    authenticationRepository
      .getNewAccessToken()
      .then((res: TokenModel) => {
        console.log(res);
        setAuthenticationContext({ token: res, isLoggedIn: true });
      })
      .catch((error) => {
        // Todo: Error handling
        // ! Logout user?
        console.warn(error);
      });
  };

  return {
    accessTokenHasExpired,
    requestRequiresAuthentication,
    refreshAccessToken,
  };
};

export default useAuthentication;
