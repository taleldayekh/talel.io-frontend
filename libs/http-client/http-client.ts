import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import config from 'config';
import { RequestInterceptionEvents } from 'libs/http-client/enums';
import { HttpResponse } from 'libs/http-client/interfaces';

class HttpClient {
  private readonly axiosInstance: AxiosInstance;
  private requestInterceptorCallbacks = new Map();

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor(): void {
    this.axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const getToken = this.requestInterceptorCallbacks.get(
          RequestInterceptionEvents.TOKEN,
        );

        if (getToken) {
          const token = getToken();

          if (token.length) {
            (config.headers as AxiosHeaders).set(
              'Authorization',
              `Bearer ${token}`,
            );
          }
        }

        return config;
      },
    );
  }

  // TODO: Consider types for the callbacks
  public onRequestInterception(
    event: RequestInterceptionEvents,
    callback: () => any,
  ): void {
    this.requestInterceptorCallbacks.set(event, callback);
  }

  public async get(resource: string): Promise<AxiosResponse> {
    try {
      return await this.axiosInstance.get(resource);
    } catch (error) {
      // TODO: Add method for returning custom error object.
      throw error;
    }
  }

  // TODO: Replace any type.
  public async post(resource: string, body?: any): Promise<HttpResponse<any>> {
    try {
      const postRes = await this.axiosInstance.post(resource, body, {
        withCredentials: true,
      });

      return {
        status: postRes.status,
        data: postRes.data,
      };
    } catch (error) {
      // TODO: Add method for returning custom error object.
      throw error;
    }
  }
}

const baseURL = config.api.url as string;

export default new HttpClient(baseURL);
