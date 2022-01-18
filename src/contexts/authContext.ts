import { createContext } from 'react';

const AuthContext = createContext<
  | {
      authenticated: boolean;
      signIn: () => void;
      signOut: () => void;
    }
  | undefined
>(undefined);

export default AuthContext;
