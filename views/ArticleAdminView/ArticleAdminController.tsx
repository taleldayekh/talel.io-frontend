import ArticlesRepository from 'infrastructure/repositories/articles/articles.repository';
import AssetsRepository from 'infrastructure/repositories/assets/assets.repository';
import { ChangeEvent, DragEvent, FormEvent } from 'react';
import {
  isValidImageSize,
  isValidImageType,
} from 'utils/image/image-validators';
import { ArticleFormFields } from 'views/ArticleAdminView/enums';
import { ArticleAdminControllerProps } from 'views/ArticleAdminView/interfaces';

export default function ArticleAdminController({
  article,
  setArticle,
  render,
}: ArticleAdminControllerProps) {
  const updateArticle = (formField: ArticleFormFields, text: string): void => {
    setArticle({ ...article, [formField]: text });
  };

  const updateArticleTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    const articleTitle = event.target.value;
    updateArticle(ArticleFormFields.TITLE, articleTitle);
  };

  const updateArticleDescription = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const articleDescription = event.target.value;
    updateArticle(ArticleFormFields.DESCRIPTION, articleDescription);
  };

  const updateArticleContent = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const articleContent = event.target.value;
    updateArticle(ArticleFormFields.CONTENT, articleContent);
  };

  const uploadImage = async (imageFile: File): Promise<string> => {
    await isValidImageType(imageFile);
    isValidImageSize(imageFile);

    const imageFileName = imageFile.name;
    const imageFileData = new FormData();

    imageFileData.append(`${imageFileName}`, imageFile, `${imageFileName}`);

    const imageUploadRes = await AssetsRepository.uploadImage(imageFileData);
    const imageSrc = imageUploadRes.data.image_objects_urls[0];

    return imageSrc;
  };

  const uploadFeaturedImage = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const imageFiles = event.target.files;

    if (imageFiles) {
      const imageFile = imageFiles[0];

      try {
        const uploadedImageSrc = await uploadImage(imageFile);
        updateArticle(ArticleFormFields.FEATURED_IMAGE_URL, uploadedImageSrc);
      } catch (error) {
        // TODO: Error handling
        console.log(error);
      }
    }
  };

  const uploadImagesOnDrop = async (
    event: DragEvent<HTMLTextAreaElement>,
  ): Promise<void> => {
    event.preventDefault();

    const imageFiles = Array.from(event.dataTransfer.files);

    for (const imageFile of imageFiles.values()) {
      try {
        const uploadedImageSrc = await uploadImage(imageFile);
        const imageMarkdownSyntax = `![${imageFile.name}](${uploadedImageSrc})`;
        const contentWithUploadedImageMarkdown =
          article.content + '\r\n' + imageMarkdownSyntax;

        updateArticle(
          ArticleFormFields.CONTENT,
          contentWithUploadedImageMarkdown,
        );
      } catch (error) {
        // TODO: Error handling
        console.log(error);
      }
    }
  };

  const submitArticle = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    try {
      await ArticlesRepository.createArticle(
        article.title,
        article.description,
        article.content,
      );

      // TODO: Clear article state
    } catch (error) {
      // TODO: Error handling
      console.log(error);
    }
  };

  return render(
    updateArticleTitle,
    updateArticleDescription,
    updateArticleContent,
    uploadFeaturedImage,
    uploadImagesOnDrop,
    submitArticle,
  );
}
