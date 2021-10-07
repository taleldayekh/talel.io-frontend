import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import ProtectedView from 'src/views/private/protectedView/ProtectedView';
import LoginFormViewController from 'src/views/loginFormView/LoginFormViewController';
import HomeView from 'src/views/homeView/HomeView';
import AdminView from 'src/views/private/adminView/AdminView';

const AppView: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeView} />
      <Route path="/login" component={LoginFormViewController} />
      <ProtectedView path="/admin" component={AdminView} />
    </Router>
  );
};

export default AppView;
