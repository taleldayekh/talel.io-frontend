import { DragEvent, ReactElement } from 'react';

export interface ArticleAdminControllerProps {
    render: (
        uploadImageOnDrop: (event: DragEvent<HTMLTextAreaElement>) => void,
    ) => ReactElement;
}
