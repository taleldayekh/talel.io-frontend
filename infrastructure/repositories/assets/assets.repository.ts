import { ImagesSchema } from 'infrastructure/repositories/assets/schemas';
import HttpClient from 'libs/http-client/http-client';
import { HttpResponse } from 'libs/http-client/interfaces';

export default class AssetsRepository {
  public static async uploadImage(
    formData: FormData,
  ): Promise<HttpResponse<ImagesSchema>> {
    return await HttpClient.post('/assets/images', formData);
  }
}
