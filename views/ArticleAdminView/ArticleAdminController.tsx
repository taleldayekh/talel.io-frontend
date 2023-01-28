import { DragEvent } from 'react';
import AssetsRepository from 'infrastructure/repositories/assets/assets.repository';
import { ArticleAdminControllerProps } from 'views/ArticleAdminView/interfaces';
import { isValidImageType, isValidImageSize } from 'utils/image/image-validators';

export default function ArticleAdminController(props: ArticleAdminControllerProps) {
    const uploadImagesOnDrop = async (event: DragEvent<HTMLTextAreaElement>) => {
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
            } catch (error) {
                console.log(error)
            }
        }
    }

    return props.render(uploadImagesOnDrop);
}
