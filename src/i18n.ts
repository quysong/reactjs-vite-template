import { initReactI18next } from 'react-i18next';

import i18n, { InitOptions } from 'i18next';

import { storageHelper } from './helpers/storage';
import en from './translations/en.json';
import jp from './translations/jp.json';
import vi from './translations/vi.json';

const resources = {
  en,
  vi,
  jp,
};

export const availableLanguages = Object.keys(resources);

const defaultLang = storageHelper.language.get();

const initOption: InitOptions = {
  lng: defaultLang,
  resources,
  defaultNS: 'translation',
  fallbackLng: 'en',
};

i18n.use(initReactI18next).init(initOption);
