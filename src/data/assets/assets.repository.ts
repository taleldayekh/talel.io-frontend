import { UploadImageResponse } from 'src/data/assets/interfaces/uploaded-image-response.interface';
import { AxiosResponse } from 'axios';
import HttpClient from 'src/libs/http-client/http-client';
import AssetsMapper from 'src/data/assets/assets.mapper';
import ImageModel from 'src/models/image/image.model';
import { ASSETS_UPLOAD_IMAGE } from 'src/data/api/resources';

export default class AssetsRepository {
  constructor(private httpClient: typeof HttpClient) {}

  public async uploadImage(data: FormData): Promise<ImageModel> {
    const uploadImageRes: AxiosResponse<UploadImageResponse> =
      await this.httpClient.post(ASSETS_UPLOAD_IMAGE, data);
    const image = AssetsMapper.toImages(uploadImageRes.data)[0];

    return image;
  }
}
