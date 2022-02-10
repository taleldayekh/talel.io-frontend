/* eslint-disable camelcase */

export interface ArticleResponse {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string | null;
  title: string;
  body: string;
  html: string;
}
