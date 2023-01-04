import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { HttpResponse } from 'libs/http-client/interfaces';
import config from 'config';

class HttpClient {
    private readonly axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({baseURL})
    }

    async get(resource: string): Promise<AxiosResponse> {
        try {
            return await this.axiosInstance.get(resource);
        } catch (error) {
            // TODO: Add method for returning custom error object.
            throw error;
        }
    }

    // TODO: Replace any type.
    async post(resource: string, body: any): Promise<HttpResponse<any>> {
        try {
            const postRes = await this.axiosInstance.post(resource, body)

            return {
                status: postRes.status,
                data: postRes.data
            }
        } catch (error) {
            // TODO: Add method for returning custom error object.
            throw error;
        }
    }
}

const baseURL = config.api.backendApiUrl;

export default new HttpClient(baseURL);
