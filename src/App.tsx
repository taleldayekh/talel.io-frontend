import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedView from 'src/views/private/protectedView/ProtectedView';
import HomeView from 'src/views/homeView/HomeView';
import LoginFormView from 'src/views/loginFormView/LoginFormView';
import AdminView from 'src/views/private/adminView/AdminView';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeView} />
      <Route path="/login" component={LoginFormView} />
      <ProtectedView path="/admin" component={AdminView} />
    </Router>
  );
};

export default App;
