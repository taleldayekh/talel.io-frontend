import axios, { AxiosResponse } from 'axios';
import { API_V1_BASE_URL } from 'src/data/api/resources';

export default class HttpClient {
  public post(resource: string, { ...rest }): Promise<AxiosResponse> {
    return axios.post(`${API_V1_BASE_URL}/${resource}`, rest);
  }
}
