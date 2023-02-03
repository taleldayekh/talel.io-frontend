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

    return <ArticleAdminController article={article} setArticle={setArticle} render={(updateArticleTitle, updateArticleDescription, updateArticleContent, uploadImagesOnDrop, submitArticle) => (
        <>
            <form onSubmit={submitArticle}>
                <TextField onChange={updateArticleTitle}/>
                <TextField multiple onChange={updateArticleDescription}/>
                <TextField multiple onChange={updateArticleContent} onDrop={uploadImagesOnDrop}/>
                {/* TODO: Create separate button component */}
                {/* TODO: Submit article should happen in the form */}
                {/* TODO: Replace by custom button */}
                <input type="submit" value="Submit"/>
            </form>
        </>
    )}/>
}
