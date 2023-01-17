import { useEffect } from 'react';
import { ArticleContentControllerProps } from 'views/ArticleContentView/interfaces';

export default function ArticleContentController({ articleTitleRef, render }: ArticleContentControllerProps) {
    useEffect(() => {
        console.log(articleTitleRef)
    })

    return render();
}
