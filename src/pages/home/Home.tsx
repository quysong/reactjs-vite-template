import * as ApiDocs from '@credify/api-docs';

import React, { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import useFetchData from '@/hooks/useFetch';

import Menu from '@/components/menu/Menu';

import { HomeWrapperStyled } from './Home.styled';
import { APP_ECOSYSTEM_API_KEY } from '@/configs';
import { ROUTES } from '@/constants/routes';
import { useAppContext } from '@/contexts/app/AppContext';
import useAuth from '@/contexts/auth/AuthContext';
import { storageHelper } from '@/helpers/storage';
import { availableLanguages } from '@/i18n';

const Home = () => {
  const { t, i18n } = useTranslation();

  const { setErrorDialog, setAppLoading } = useAppContext();
  const { authedToken, logout } = useAuth();
  const navigate = useNavigate();
  const apiGenerateAccessTokenSuccess = useFetchData({
    requestPromise: () => new ApiDocs.AuthApi().generateAccessToken(`${APP_ECOSYSTEM_API_KEY}`),
  });
  const apiGenerateAccessTokenFail = useFetchData({
    requestPromise: () => new ApiDocs.AuthApi().generateAccessToken(`${APP_ECOSYSTEM_API_KEY}1`),
  });

  const onLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    logout();
    navigate(ROUTES.LOGIN);
  };

  useEffect(() => {
    setAppLoading(true);
    setTimeout(() => {
      setAppLoading(false);
    }, 1500);
  }, [setAppLoading]);

  const onClick = () => {
    setErrorDialog({
      visible: true,
      title: 'Title',
      description: 'Description',
    });
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    storageHelper.language.set(lang);
  };

  const callApi1 = async () => {
    setAppLoading(true);
    const rs = await apiGenerateAccessTokenSuccess.callAPI();
    console.log('rs', rs);
    setAppLoading(false);
  };

  const callApi2 = async () => {
    try {
      const rs = await apiGenerateAccessTokenFail.callAPI();
      console.log('rs', rs);
    } catch (error: any) {
      console.log('error', error.message);
    }
  };

  return (
    <HomeWrapperStyled>
      <Menu />
      <h1>Home</h1>
      <div>
        <p>Use `Trans`` component:</p>
        <Trans i18nKey="menu.home.bnpl" values={{ param: 'param' }} components={{ br: <br /> }} />
        <br />
        <p>Use `t` function:</p>
        {t('common.next')}
      </div>
      <p>Welcome to your React app!</p>
      <hr />
      <button type="button" onClick={onClick}>
        Show notification
      </button>
      <hr />
      <br />
      {authedToken && (
        <button type="button" onClick={(e) => onLogout(e)}>
          Logout {authedToken}
        </button>
      )}
      <br />
      <hr />
      <select defaultValue={i18n.language} onChange={(e) => changeLanguage(e)}>
        {availableLanguages.map((language: string) => (
          <option key={language}>{language}</option>
        ))}
      </select>
      <hr />
      CALL API:
      <button type="button" onClick={callApi1}>
        Success
      </button>
      <button type="button" onClick={callApi2}>
        Fail
      </button>
    </HomeWrapperStyled>
  );
};

export default Home;
