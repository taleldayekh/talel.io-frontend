import React, { createContext, useState } from 'react';
import { AuthenticationContextValues } from 'src/contexts/authentication/interfaces';

export const AuthenticationContext = createContext<AuthenticationContextValues>(
  {
    accessToken: '',
    setAccessToken: () => null,
  },
);

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [accessToken, setAccessToken] = useState('');

  return (
    <AuthenticationContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
