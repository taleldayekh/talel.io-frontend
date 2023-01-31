import { useState } from 'react';
import ArticleAdminController from 'views/ArticleAdminView/ArticleAdminController';
import { Article } from 'views/ArticleAdminView/interfaces';
import TextField from 'components/TextField/TextField';

export default function ArticleAdminView() {
    const [article, setArticle] = useState<Article>({
        title:  '',
        description: '',
        content: '',
    });

    return <ArticleAdminController article={article} setArticle={setArticle} render={(updateArticleTitle, updateArticleDescription, updateArticleContent, uploadImagesOnDrop) => (
        <>
            <TextField onChange={updateArticleTitle}/>
            <TextField multiple onChange={updateArticleDescription}/>
            <TextField multiple onChange={updateArticleContent} onDrop={uploadImagesOnDrop}/>
        </>
    )}/>
}
