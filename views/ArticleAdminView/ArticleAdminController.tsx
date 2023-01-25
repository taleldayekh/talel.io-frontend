import { DragEvent } from 'react';
import { ArticleAdminControllerProps } from 'views/ArticleAdminView/interfaces';
import { isValidImageType } from 'utils/image/image-validators';

export default function ArticleAdminController(props: ArticleAdminControllerProps) {
    const uploadImageOnDrop = (event: DragEvent<HTMLTextAreaElement>) => {
        event.preventDefault();

        const files = event.dataTransfer.files;

        console.log(files);
        isValidImageType(files[0])
    }

    return props.render(uploadImageOnDrop);
}
