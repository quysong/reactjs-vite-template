import { Outlet } from 'react-router-dom';

import './Layout.scss';
import { Main } from './Layout.styled';

const Layout = () => {
  return (
    <Main className="layout">
      <Outlet />
    </Main>
  );
};

export default Layout;
