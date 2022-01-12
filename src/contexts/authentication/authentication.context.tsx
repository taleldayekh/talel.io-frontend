import React, { createContext, useState } from 'react';
import { AuthenticationContextValues } from 'src/contexts/authentication/interfaces';
import TokenModel from 'src/models/authentication/token.model';

export const AuthenticationContext = createContext<AuthenticationContextValues>(
  {
    authenticationContext: {
      token: new TokenModel(''),
      isLoggedIn: false,
    },
    setAuthenticationContext: () => null,
  },
);

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [authenticationContext, setAuthenticationContext] = useState({
    token: new TokenModel(''),
    isLoggedIn: false,
  });

  return (
    <AuthenticationContext.Provider
      value={{ authenticationContext, setAuthenticationContext }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
