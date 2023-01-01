import { STORAGE_PREFIX } from '@/constants/storage';

interface Navigator {
  userLanguage?: string;
  browserLanguage?: string;
  languages: readonly string[];
  language: string;
  systemLanguage?: string;
}

const getDefaultLanguage = () => {
  const availableLanguages = ['en', 'vi', 'ja'];

  return (
    [
      ...(navigator.languages || []),
      navigator.language,
      (navigator as Navigator).browserLanguage,
      (navigator as Navigator).userLanguage,
      (navigator as Navigator).systemLanguage,
    ]
      .filter(Boolean)
      .map((language) => {
        return language?.substr(0, 2);
      })
      .find((language) => availableLanguages.includes(language || '')) || 'en'
  );
};

export const storageHelper = {
  token: {
    set: (token: string) => {
      sessionStorage.setItem(`${STORAGE_PREFIX}_token`, token);
    },
    get: () => {
      return sessionStorage.getItem(`${STORAGE_PREFIX}_token`);
    },
  },
  appContext: {
    set: (data = {}) => {
      sessionStorage.setItem(`${STORAGE_PREFIX}_app`, JSON.stringify(data));
    },
    get: () => {
      return sessionStorage.getItem(`${STORAGE_PREFIX}_app`)
        ? JSON.parse(sessionStorage.getItem(`${STORAGE_PREFIX}_app`) || '')
        : undefined;
    },
  },
  language: {
    get: () => {
      return localStorage.getItem(`${STORAGE_PREFIX}_servicex_language`) || getDefaultLanguage();
    },
    set: (lang: string) => {
      return localStorage.setItem(`${STORAGE_PREFIX}_servicex_language`, lang);
    },
  },
};
