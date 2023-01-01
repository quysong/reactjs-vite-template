import React from 'react';
import { useNavigate } from 'react-router-dom';

import Menu from '@/components/menu/Menu';

import useAuth from '@/contexts/auth/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    login({ phone: '0332522999', code: '123456' }).then(() => {
      navigate('/');
    });
  };

  return (
    <>
      <Menu />
      <h1>Login</h1>
      <button type="button" onClick={(e) => onLogin(e)}>
        Login
      </button>
    </>
  );
};

export default Login;
