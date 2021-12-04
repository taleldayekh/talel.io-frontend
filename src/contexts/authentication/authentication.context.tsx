import React, { createContext, useState } from 'react';
import { AuthenticationContextValues } from 'src/contexts/authentication/interfaces';
import AccessTokenModel from 'src/models/authentication/access-token.model';

export const AuthenticationContext = createContext<AuthenticationContextValues>(
  {
    accessToken: new AccessTokenModel(''),
    setAccessToken: () => null,
  },
);

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [accessToken, setAccessToken] = useState(new AccessTokenModel(''));

  return (
    <AuthenticationContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
