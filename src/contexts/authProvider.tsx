import React, {
  useCallback,
  useState,
} from 'react';

import AuthService from '../services/authService';
import AuthContext from './authContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({
  children,
}: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(AuthService.getAuthenticated());
  
  const signIn = useCallback(() => {
    setAuthenticated(true);
    AuthService.setAuthenticated(true);
  }, []);
  const signOut = useCallback(() => {
    setAuthenticated(false);
    AuthService.setAuthenticated(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{ signIn, signOut, authenticated }}
      children={children}
    />
  );
}
