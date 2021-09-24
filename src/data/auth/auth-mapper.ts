import { LoginResponse, LoginDTO } from 'src/data/auth/auth.interface';

export default class AuthMapper {
  public static toLoginDTO(loginResponse: LoginResponse): LoginDTO {
    return {
      accessToken: loginResponse.access_token,
    };
  }
}
