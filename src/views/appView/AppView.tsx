import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedViewsController from 'src/views/private/ProtectedViewsController/ProtectedViewsController';
import LoginController from 'src/views/LoginView/LoginController';

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
              <p>If you made it this far you are logged in</p>
            </ProtectedViewsController>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppView;
