import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedViewsController from 'src/views/private/ProtectedViewsController/ProtectedViewsController';
import LoginController from 'src/views/LoginView/LoginController';
import ArticlesView from 'src/views/private/ArticlesView/ArticlesView';

const AppView: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<p>This is the landing page</p>} />
        <Route path="/login" element={<LoginController />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedViewsController>
              <Routes>
                <Route path="articles" element={<ArticlesView />} />
              </Routes>
            </ProtectedViewsController>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppView;
