import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'src/reportWebVitals';
import i18n from 'i18next';
import { registerLocales } from 'src/libs/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { AuthenticationProvider } from 'src/contexts/authentication/authentication.context';
import AppController from 'src/views/AppView/AppController';
import en from 'src/assets/locales/en.json';
import 'src/theme/index.css';

registerLocales({ en });

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <AuthenticationProvider>
      <AppController />
    </AuthenticationProvider>
  </I18nextProvider>,
  document.getElementById('root'),
);

reportWebVitals();
