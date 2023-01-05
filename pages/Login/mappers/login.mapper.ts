import { LoginSchema } from 'infrastructure/repositories/auth/schemas';

export default class LoginMapper {
    public static fromResponseToAccessToken(loginResponse: LoginSchema): string {
        // ! Remove
        console.log(loginResponse)

        return loginResponse.access_token;
    }
}
