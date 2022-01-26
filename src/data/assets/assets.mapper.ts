import { UploadImageResponse } from 'src/data/assets/interfaces';
import ImageModel from 'src/models/image/image.model';

export default class AssetsMapper {
  public static toImages(
    uploadImageResponse: UploadImageResponse,
  ): ImageModel[] {
    return uploadImageResponse.image_objects_urls.map(
      (imageSrc) => new ImageModel(imageSrc),
    );
  }
}
