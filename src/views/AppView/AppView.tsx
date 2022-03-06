import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ArticlesProvider } from 'src/contexts/articles/articles.context';
import HomeView from 'src/views/HomeView/HomeView';
import ArticlesController from 'src/views/ArticlesView/ArticlesController';
import ArticleController from 'src/views/ArticleView/ArticleController';
import LoginController from 'src/views/LoginView/LoginController';
import ProtectedViewsController from 'src/views/private/ProtectedViewsController/ProtectedViewsController';
import ArticleFormController from 'src/views/private/ArticleFormView/ArticleFormController';

const AppView: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          path="/articles/*"
          element={
            <ArticlesProvider>
              <Routes>
                <Route path="/" element={<ArticlesController />} />
                <Route path=":slug" element={<ArticleController />} />
              </Routes>
            </ArticlesProvider>
          }
        />
        <Route path="/login" element={<LoginController />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedViewsController>
              <Routes>
                <Route path="articles" element={<ArticleFormController />} />
              </Routes>
            </ProtectedViewsController>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppView;
