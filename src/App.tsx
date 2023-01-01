import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loading from './components/loading/Loading';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import { PublicRoute } from './components/publicRoute/PublicRoute';

import './App.css';
import { ROUTES } from './constants/routes';
import AppContextProvider from './contexts/app/AppContext';
import { AuthProvider } from './contexts/auth/AuthContext';
import ThemeProvider from './contexts/theme/ThemeProvider';
import Layout from './templates/main/Layout';

const Login = React.lazy(() => import('./pages/auth/login/Login'));
const OTP = React.lazy(() => import('./pages/auth/otp/OTP'));
const NotFound = React.lazy(() => import('./pages/errors/notFound/NotFound'));
const Example = React.lazy(() => import('./pages/example/Example'));
const History = React.lazy(() => import('./pages/history/History'));
const Home = React.lazy(() => import('./pages/home/Home'));

const App = () => {
  return (
    <ThemeProvider>
      <AppContextProvider>
        <AuthProvider>
          <Suspense fallback={<Loading visible />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Layout />}>
                <Route element={<PublicRoute />}>
                  <Route path={ROUTES.LOGIN} element={<Login />} />
                  <Route path={ROUTES.OTP} element={<OTP />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route index element={<Home />} />
                  <Route path={ROUTES.HISTORY} element={<History />} />
                  <Route path={ROUTES.BNPL.ROOT} element={<>BNPL root</>} />
                  <Route path={ROUTES.BNPL.CREATE_ORDER} element={<>BNPL create order</>} />
                </Route>
              </Route>
              {/* This /example route is for checking example functions */}
              <Route path="/example" element={<Example />} />
              {/* Not match route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
