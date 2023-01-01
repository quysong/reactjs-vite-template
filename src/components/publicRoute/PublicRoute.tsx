import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import useAuth from '@/contexts/auth/AuthContext';

export const PublicRoute = () => {
  const auth = useAuth();
  const location = useLocation();

  return !auth.authedToken ? <Outlet /> : <Navigate to={ROUTES.HOME} state={{ from: location }} />;
};
