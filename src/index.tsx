import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'src/reportWebVitals';
import { AuthenticationProvider } from 'src/contexts/authentication/authentication.context';
import AppController from 'src/views/AppView/AppController';
import 'src/theme/index.css';

ReactDOM.render(
  <AuthenticationProvider>
    <AppController />
  </AuthenticationProvider>,
  document.getElementById('root'),
);

reportWebVitals();
