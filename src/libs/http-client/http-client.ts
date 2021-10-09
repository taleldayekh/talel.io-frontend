import { RequestBody } from 'src/libs/http-client/http-client.interface';
import { ErrorDTO } from 'src/data/error.interface';
import axios, { AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import ErrorMapper from 'src/data/error-mapper';
import { API_V1_BASE_URL, ACCOUNTS_LOGIN } from 'src/data/api/resources';

class HttpClient {
  private static _error(error: unknown): ErrorDTO | unknown {
    const apiError = error as AxiosError<ErrorDTO>;

    if (axios.isAxiosError(error) && apiError.response) {
      const errorDTO = ErrorMapper.toErrorDTO(apiError.response.data);
      return errorDTO;
    } else {
      return error;
    }
  }

  private static async _newAccessTokenRequest(
    newAccessTokenResource: string,
  ): Promise<AxiosResponse> {
    /*
     * A new axios instance needs to be created when making a request
     * inside an interceptor. This is to not trigger an infinite loop.
     */

    const axiosInstance: AxiosInstance = axios.create({
      withCredentials: true,
    });

    return axiosInstance.post(`${API_V1_BASE_URL}/${newAccessTokenResource}`);
  }

  public async post(
    resource: string,
    body?: RequestBody,
    getAccessToken?: boolean,
  ): Promise<AxiosResponse> {
    const requiresCookies: boolean = resource === ACCOUNTS_LOGIN;

    try {
      if (getAccessToken)
        return await HttpClient._newAccessTokenRequest(resource);

      return await axios.post(
        `${API_V1_BASE_URL}/${resource}`,
        body || undefined,
        requiresCookies ? { withCredentials: true } : undefined,
      );
    } catch (error) {
      throw HttpClient._error(error);
    }
  }
}

export default new HttpClient();
