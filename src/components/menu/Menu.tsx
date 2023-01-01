import { NavLink } from 'react-router-dom';

import { MenuWrapperStyled } from './Menu.styled';
import { ROUTES } from '@/constants/routes';
import { useTheme } from '@/contexts/theme/ThemeProvider';

const Menu = () => {
  const { theme, toggleTheme } = useTheme();

  const routes = { [ROUTES.LOGIN]: 'Login', [ROUTES.HOME]: 'Home', [ROUTES.HISTORY]: 'History' };

  return (
    <MenuWrapperStyled>
      <ul>
        {Object.entries(routes).map(([key, value]) => (
          <li key={key}>
            <NavLink to={key} className={({ isActive }) => (isActive ? 'active' : '')}>
              {value}
            </NavLink>
          </li>
        ))}
      </ul>
      MODE:
      <button
        id="toggle-theme"
        title="Toggle theme"
        type="button"
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </MenuWrapperStyled>
  );
};

export default Menu;
