import { RequestBody } from 'src/libs/http-client/interfaces';
import { Error } from 'src/data/error/interfaces';
import axios, { AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import ErrorMapper from 'src/data/error/error.mapper';
import ErrorModel from 'src/models/error/error.model';
import { API_V1_BASE_URL, ACCOUNTS_LOGIN } from 'src/data/api/resources';

class HttpClient {
  private error(errorResponse: unknown): ErrorModel | unknown {
    const apiError = errorResponse as AxiosError<Error>;

    if (axios.isAxiosError(apiError) && apiError.response) {
      const error = ErrorMapper.toErrorModel(apiError.response.data);
      return error;
    } else {
      return errorResponse;
    }
  }

  private async newAccessTokenRequest(
    resource: string,
  ): Promise<AxiosResponse> {
    /*
     * A new axios instance needs to be created when making a request
     * inside an interceptor. This is to not trigger an infinite loop.
     */

    const axiosInstance: AxiosInstance = axios.create({
      withCredentials: true,
    });

    return axiosInstance.post(`${API_V1_BASE_URL}/${resource}`);
  }

  public async post(
    resource: string,
    body?: RequestBody,
    refreshAccessToken?: boolean,
  ): Promise<AxiosResponse> {
    const requestRequiresCookies: boolean = [ACCOUNTS_LOGIN].includes(resource);
    console.log(API_V1_BASE_URL);
    console.log(requestRequiresCookies);
    console.log(resource);
    console.log(refreshAccessToken);
    try {
      if (refreshAccessToken) return await this.newAccessTokenRequest(resource);

      return await axios.post(
        `${API_V1_BASE_URL}/${resource}`,
        body || undefined,
        requestRequiresCookies ? { withCredentials: true } : undefined,
      );
    } catch (error) {
      throw this.error(error);
    }
  }
}

export default new HttpClient();
