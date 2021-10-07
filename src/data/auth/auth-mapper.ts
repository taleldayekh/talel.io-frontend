import {
  LoginResponse,
  NewAccessTokenResponse,
  LoginDTO,
  NewAccessTokenDTO,
} from 'src/data/auth/auth.interface';

export default class AuthMapper {
  public static toLoginDTO(loginResponse: LoginResponse): LoginDTO {
    return {
      accessToken: loginResponse.access_token,
    };
  }

  public static toNewAccessTokenDTO(
    newAccessTokenResponse: NewAccessTokenResponse,
  ): NewAccessTokenDTO {
    return {
      accessToken: newAccessTokenResponse.access_token,
    };
  }
}
