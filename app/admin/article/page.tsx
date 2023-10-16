'use client';

import withRouteGuard from 'HOCs/withRouteGuard';
import ArticleAdminView from 'views/ArticleAdminView/ArticleAdminView';

export default withRouteGuard(function AdminArticle() {
  return <ArticleAdminView />;
});
