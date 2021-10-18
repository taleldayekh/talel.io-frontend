/* eslint-disable camelcase */

export type AccessToken = string;

export interface AccessTokenPayload {
  user_id: number;
  username: string;
  exp: number;
}
