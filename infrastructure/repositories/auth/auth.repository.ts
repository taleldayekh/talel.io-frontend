import { HttpResponse } from 'libs/http-client/interfaces';
import { LoginSchema } from 'infrastructure/repositories/auth/schemas';
import HttpClient from 'libs/http-client/http-client';

export default class AuthRepository {
    public static async login(email: string, password: string): Promise<HttpResponse<LoginSchema>> {
        const loginData = {
            email,
            password
        }

        return await HttpClient.post('/accounts/login', loginData);
    }
}
