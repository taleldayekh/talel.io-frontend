import React, { createContext, useState } from 'react';
import { AuthContextValues } from 'src/contexts/auth/auth-context.interface';

export const AuthContext = createContext<AuthContextValues>({
  accessToken: '',
  setAccessToken: () => null,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [accessToken, setAccessToken] = useState('');

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
