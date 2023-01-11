import { LoginSchema, NewAccessTokenSchema } from 'infrastructure/repositories/auth/schemas';

export default class AuthMapper {
    public static fromResponseDataToAccessToken(resData: LoginSchema | NewAccessTokenSchema): string {
        return resData.access_token;
    }
}
