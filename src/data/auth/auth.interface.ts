/* eslint-disable camelcase */

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface LoginDTO {
  accessToken: string;
  refreshToken: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface Auth {
  login(data: LoginData): Promise<LoginDTO>;
}
