import 'react-i18next';

import en from './translations/en.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: typeof en;
  }
}
