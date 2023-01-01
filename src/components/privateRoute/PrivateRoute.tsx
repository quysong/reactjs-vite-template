import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import useAuth from '@/contexts/auth/AuthContext';

export const PrivateRoute = () => {
  const auth = useAuth();
  const location = useLocation();

  return !auth.authedToken ? <Navigate to={ROUTES.LOGIN} state={{ from: location }} /> : <Outlet />;
};
