import { ErrorDTO } from 'src/data/error.interface';
import axios, { AxiosResponse, AxiosError } from 'axios';
import ErrorMapper from 'src/data/error-mapper';
import { API_V1_BASE_URL } from 'src/data/api/resources';

class HttpClient {
  private _error(error: unknown): ErrorDTO | unknown {
    const apiError = error as AxiosError<ErrorDTO>;

    if (axios.isAxiosError(error) && apiError.response) {
      const errorDTO = ErrorMapper.toErrorDTO(apiError.response.data);
      return errorDTO;
    } else {
      return error;
    }
  }

  public async post(resource: string, { ...rest }): Promise<AxiosResponse> {
    try {
      return await axios.post(`${API_V1_BASE_URL}/${resource}`, rest);
    } catch (error) {
      throw this._error(error);
    }
  }
}

export default new HttpClient();
