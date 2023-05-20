export interface ArticleSchema {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string | null;
  title: string;
  slug: string;
  body: string;
  html: string;
  table_of_contents: string;
  featured_image: string | null;
  meta_description: string;
  url: string;
}
