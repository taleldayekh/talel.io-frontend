export interface CreateArticleResponseSchema {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string | null;
  title: string;
  slug: string;
  body: string;
  html: string;
  featured_image: string | null;
  meta_description: string;
  url: string;
}
