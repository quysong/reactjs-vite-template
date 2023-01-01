import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { storageHelper } from '@/helpers/storage';

interface LoginProps {
  phone: string;
  code: string;
}

interface AuthProps {
  authedToken: string;
  login(values: LoginProps): Promise<unknown>;
  logout(): Promise<unknown>;
}

const authContext = React.createContext({} as AuthProps);

function useAuth(): AuthProps {
  const [authedToken, setAuthedToken] = React.useState(storageHelper.token.get() || '');

  React.useEffect(() => {
    storageHelper.token.set(authedToken);
  }, [authedToken]);

  return {
    authedToken,
    login(values) {
      // TODO: update logic get authed token here
      console.log('login values', values);
      return new Promise((res) => {
        // TODO: update logic get authed token here
        const token = 'authed_token';
        setAuthedToken(token);
        res(null);
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthedToken('');
        res(null);
      });
    },
  };
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const PrivateRoute = ({ children }: { children: React.ReactElement }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.authedToken) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
  }

  return children;
};

export default function AuthConsumer() {
  return React.useContext(authContext);
}
