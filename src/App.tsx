import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from 'src/contexts/auth/auth-context';
import ProtectedView from 'src/views/private/protectedView/ProtectedView';
import HomeView from 'src/views/homeView/HomeView';
import LoginFormViewController from 'src/views/loginFormView/LoginFormViewController';
import AdminView from 'src/views/private/adminView/AdminView';
import axios from 'axios';

const App: React.FC = () => {
  axios.interceptors.request.use((config) => {
    console.log(config);
    return config;
  });

  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={HomeView} />
        <Route path="/login" component={LoginFormViewController} />
        <ProtectedView path="/admin" component={AdminView} />
      </Router>
    </AuthProvider>
  );
};

export default App;
