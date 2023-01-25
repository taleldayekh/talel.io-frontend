import ArticleAdminController from 'views/ArticleAdminView/ArticleAdminController';
import TextField from 'components/TextField/TextField';

export default function ArticleAdminView() {
    return <ArticleAdminController render={(uploadImageOnDrop) => (
        <>
            <TextField multiple onChange={console.log} onDrop={uploadImageOnDrop}/>
        </>
    )}/>
}
