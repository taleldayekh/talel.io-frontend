import { LoginSchema } from 'infrastructure/repositories/auth/schemas';

export default class LoginMapper {
    public static fromResponseDataToAccessToken(loginResData: LoginSchema): string {
        return loginResData.access_token;
    }
}
