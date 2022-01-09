import React, { createContext, useState } from 'react';
import { AuthenticationContextValues } from 'src/contexts/authentication/interfaces';
import TokenModel from 'src/models/authentication/token.model';

export const AuthenticationContext = createContext<AuthenticationContextValues>(
  {
    authenticationContext: new TokenModel(''),
    setAuthenticationContext: () => null,
  },
);

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [authenticationContext, setAuthenticationContext] = useState(
    new TokenModel(''),
  );

  return (
    <AuthenticationContext.Provider
      value={{ authenticationContext, setAuthenticationContext }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
