import * as ApiDocs from '@credify/api-docs';

import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// import * as Lib from 'credify-react-components-v2';
import useFetchData from '@/hooks/useFetch';

import Menu from '@/components/menu/Menu';

import { ExampleStyled } from './Example.styled';
import { APP_ECOSYSTEM_API_KEY } from '@/configs';
import { ROUTES } from '@/constants/routes';
import { useAppContext } from '@/contexts/app/AppContext';
import useAuth from '@/contexts/auth/AuthContext';
import { storageHelper } from '@/helpers/storage';
import { availableLanguages } from '@/i18n';

const Example = () => {
  const { t, i18n } = useTranslation();

  const { setErrorDialog, setAppLoading, appLoading } = useAppContext();
  const { authedToken, logout } = useAuth();
  const navigate = useNavigate();
  const apiGenerateAccessTokenFail = useFetchData({
    requestPromise: () => new ApiDocs.AuthApi().generateAccessToken(`${APP_ECOSYSTEM_API_KEY}1`),
  });

  const [apiKey, setApiKey] = useState('');

  const apiGenerateAccessTokenFailWithCustomErrorHandler = useFetchData({
    requestPromise: () => new ApiDocs.AuthApi().generateAccessToken(`${APP_ECOSYSTEM_API_KEY}1`),
    customHandleError: true,
  });

  const apiGenerateAccessTokenSuccess = useFetchData({
    requestPromise: (data) => new ApiDocs.AuthApi().generateAccessToken(data),
  });

  const apiGenerateAccessTokenSuccessWithCustomLoading = useFetchData({
    requestPromise: () => new ApiDocs.AuthApi().generateAccessToken(`${APP_ECOSYSTEM_API_KEY}`),
    customLoading: true,
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

  useEffect(() => {
    console.log('appLoading', appLoading);
  }, [appLoading]);

  useEffect(() => {
    setApiKey(APP_ECOSYSTEM_API_KEY);
  }, []);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    storageHelper.language.set(lang);
  };

  const callApi1 = async () => {
    const rs = await apiGenerateAccessTokenSuccess.callAPI(apiKey);
    console.log('rs', rs);
  };

  const callApi2 = async () => {
    const rs = await apiGenerateAccessTokenFail.callAPI();
    console.log('rs', rs);
  };

  const callApi3 = async () => {
    setAppLoading(true);
    const rs = await apiGenerateAccessTokenSuccessWithCustomLoading.callAPI();
    setAppLoading(false);
  };

  const callApi4 = async () => {
    try {
      const rs = await apiGenerateAccessTokenFailWithCustomErrorHandler.callAPI();
      console.log('rs', rs);
    } catch (error: any) {
      setErrorDialog({ visible: true, description: error.response.data.errors[0].message });
    }
  };

  return (
    <ExampleStyled>
      <Menu />
      <h1>Home</h1>
      <hr />
      <h3>FONTs Roboto</h3>
      <p style={{ fontSize: '32px', fontWeight: 300 }}>
        Light 300: Lorem Ipsum is simply dummy text of the...
      </p>
      <p style={{ fontSize: '32px', fontWeight: 300, fontStyle: 'italic' }}>
        Light 300 Italic: Lorem Ipsum is simply dummy text of the...
      </p>
      <p style={{ fontSize: '32px', fontWeight: 400 }}>
        Regular 400: Lorem Ipsum is simply dummy text of the...
      </p>
      <p style={{ fontSize: '32px', fontWeight: 400, fontStyle: 'italic' }}>
        Regular 400 Italic: Lorem Ipsum is simply dummy text of the...
      </p>
      <p style={{ fontSize: '32px', fontWeight: 500 }}>
        Medium 500: Lorem Ipsum is simply dummy text of the...
      </p>
      <p style={{ fontSize: '32px', fontWeight: 500, fontStyle: 'italic' }}>
        Medium 500 Italic: Lorem Ipsum is simply dummy text of the...
      </p>
      <p style={{ fontSize: '32px', fontWeight: 700 }}>
        Bold 700: Lorem Ipsum is simply dummy text of the...
      </p>
      <p style={{ fontSize: '32px', fontWeight: 700, fontStyle: 'italic' }}>
        Bold 700 Italic: Lorem Ipsum is simply dummy text of the...
      </p>
      <p style={{ fontSize: '32px', fontWeight: 900 }}>
        Black 900: Lorem Ipsum is simply dummy text of the...
      </p>
      <p style={{ fontSize: '32px', fontWeight: 900, fontStyle: 'italic' }}>
        Black 900 Italic: Lorem Ipsum is simply dummy text of the...
      </p>
      <hr />
      <p style={{ fontSize: '32px', fontWeight: 900, fontStyle: 'italic' }}>
        Yêu cầu đăng ký của bạn đã được gửi đi. Hãy kiên nhẫn, chúng tôi đang xử lý yêu cầu của bạn
        và sẽ gửi kết quả đến email trong thời gian sớm nhất.
      </p>
      <p style={{ fontSize: '32px', fontWeight: 900, fontStyle: 'italic' }}>
        その他のアクションを表示するには、いずれかのオファーを選択してください
      </p>
      <hr />
      <h3>COLOR VARIANT</h3>
      Scrim
      <div className="color-variant scrim" />
      Surface tint
      <div className="color-variant surface-tint" />
      Surface
      <div className="color-variant surface" />
      On secondary container
      <div className="color-variant on-secondary-container" />
      On surface variant
      <div className="color-variant on-surface-variant" />
      On surface
      <div className="color-variant on-surface" />
      On primary container
      <div className="color-variant on-primary-container" />
      <hr />
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
      <br />
      <hr />
      {/* <Lib.TextField /> */}
      <hr />
      CALL API:
      <ul>
        <li>
          <button type="button" onClick={callApi1}>
            Success - default
          </button>
        </li>
        <li>
          <button type="button" onClick={callApi2}>
            Fail - default
          </button>
        </li>
        <li>
          <button type="button" onClick={callApi3}>
            Success - custom loading
          </button>
        </li>
        <li>
          <button type="button" onClick={callApi4}>
            Fail - custom handle error
          </button>
        </li>
      </ul>
    </ExampleStyled>
  );
};

export default Example;
