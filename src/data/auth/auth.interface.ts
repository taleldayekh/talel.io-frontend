/* eslint-disable camelcase */

export interface LoginResponse {
  access_token: string;
}

export interface LoginDTO {
  accessToken: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export type NewAccessTokenResponse = LoginResponse;

export type NewAccessTokenDTO = LoginDTO;
