import { useState, useContext } from 'react';
import { UseAuthentication } from 'src/hooks/authentication/interfaces';
import { AuthenticationContext } from 'src/contexts/authentication/authentication.context';
import TokenModel from 'src/models/authentication/token.model';
import HttpClient from 'src/libs/http-client/http-client';
import AuthenticationRepository from 'src/data/authentication/authentication.repository';

const useAuthentication = (): UseAuthentication => {
  const { setAuthenticationContext } = useContext(AuthenticationContext);

  const [authenticationRepository] = useState<AuthenticationRepository>(
    new AuthenticationRepository(HttpClient),
  );

  const requestRequiresAuthentication = (requestUrl: string): boolean => {
    const protectedResources: string[] = [];
    const resourceIsProtected = protectedResources.some((resource) =>
      resource.includes(requestUrl),
    );

    return resourceIsProtected;
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
        setAuthenticationContext(res);
      })
      .catch((error) => {
        // Todo: Error handling
        console.log(error);
      });
  };

  return {
    accessTokenHasExpired,
    requestRequiresAuthentication,
    refreshAccessToken,
  };
};

export default useAuthentication;