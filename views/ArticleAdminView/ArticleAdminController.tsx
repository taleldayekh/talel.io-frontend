import { ChangeEvent, DragEvent, FormEvent } from 'react';
import AssetsRepository from 'infrastructure/repositories/assets/assets.repository';
import ArticlesRepository from 'infrastructure/repositories/articles/articles.repository';
import { ArticleAdminControllerProps } from 'views/ArticleAdminView/interfaces';
import { ArticleFormFields } from 'views/ArticleAdminView/enums';
import { isValidImageType, isValidImageSize } from 'utils/image/image-validators';

export default function ArticleAdminController({ article, setArticle, render }: ArticleAdminControllerProps) {
    const updateArticle = (formField: ArticleFormFields, text: string): void => {
        setArticle({...article, [formField]: text});
    }

    const updateArticleTitle = (event: ChangeEvent<HTMLInputElement>): void => {
        const articleTitle = event.target.value;
        updateArticle(ArticleFormFields.TITLE, articleTitle);
    }

    const updateArticleDescription = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        const articleDescription = event.target.value;
        updateArticle(ArticleFormFields.DESCRIPTION, articleDescription);
    }

    const updateArticleContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        const articleContent = event.target.value;
        updateArticle(ArticleFormFields.CONTENT, articleContent);
    }

    const uploadImagesOnDrop = async (event: DragEvent<HTMLTextAreaElement>): Promise<void> => {
        event.preventDefault();

        const imageFiles = Array.from(event.dataTransfer.files);
        let imageMarkdownString = '';

        for (const [index, imageFile] of imageFiles.entries()) {
            try {
                await isValidImageType(imageFile);
                isValidImageSize(imageFile);

                const imageFileName = imageFile.name;
                const imageData = new FormData();

                imageData.append(`${imageFileName}`, imageFile, `${imageFileName}`);

                const uploadedImageRes = await AssetsRepository.uploadImage(imageData);
                const imageSrc = uploadedImageRes.data.image_objects_urls[0];

                const imageMarkdownSyntax = `![${imageFileName}](${imageSrc})`;

                if (index === 0) {
                    imageMarkdownString = imageMarkdownString + imageMarkdownSyntax;
                } else {
                    imageMarkdownString = imageMarkdownString + '\r\n' + '\r\n' + imageMarkdownSyntax;
                }

                updateArticle(ArticleFormFields.CONTENT, imageMarkdownString);
            } catch (error) {
                // TODO: Set error for display in UI.
                console.log(error)
            }
        }
    }

    const submitArticle = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        try {
            // TODO: Ensure all fields are present and not empty stings before making request.
            // TODO: Clear fields, in a final block?
            await ArticlesRepository.createArticle(article.title, article.description, article.content)
        } catch (error) {
            // TODO: Set error for display in the UI.
        }
    }

    return render(updateArticleTitle, updateArticleDescription, updateArticleContent, uploadImagesOnDrop, submitArticle);
}
