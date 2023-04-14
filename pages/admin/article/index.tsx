import withRouteGuard from 'HOCs/withRouteGuard';
import ArticleAdminView from 'views/ArticleAdminView/ArticleAdminView';

export default withRouteGuard(function ArticleAdmin() {
    return <ArticleAdminView/>
})
