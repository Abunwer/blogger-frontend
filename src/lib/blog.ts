const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v2';

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface BlogTag {
  id: number;
  name: string;
  slug: string;
}

export interface FeaturedImage {
  id: number;
  meta: {
    download_url: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  meta: {
    type: string;
    detail_url: string;
    html_url: string;
  };
  excerpt: string;
  featured_image: FeaturedImage | null;
  category_data: BlogCategory | null;
  tags_data: BlogTag[];
  first_published_at: string | null;
  last_published_at: string | null;
}

export type StreamBlockType = 'heading' | 'paragraph' | 'image';

export interface HeadingBlock {
  type: 'heading';
  id: string;
  value: string;
}

export interface ParagraphBlock {
  type: 'paragraph';
  id: string;
  value: string;
}

export interface ImageBlock {
  type: 'image';
  id: string;
  value: {
    id: number;
    meta: {
      download_url: string;
    };
    title: string;
  };
}

export type StreamBlock = HeadingBlock | ParagraphBlock | ImageBlock;

export interface BlogPostDetail extends BlogPost {
  body: StreamBlock[];
}

interface WagtailListResponse<T> {
  items: T[];
  meta?: {
    total_count?: number;
  };
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  const res = await fetch(`${API_BASE}/blog-categories/`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`getBlogCategories failed: ${res.status}`);
  const data: WagtailListResponse<BlogCategory> = await res.json();
  return data.items ?? [];
}

export async function getPosts(
  categorySlug?: string,
  tagSlug?: string,
): Promise<BlogPost[]> {
  const params = new URLSearchParams();
  if (categorySlug) params.set('category', categorySlug);
  if (tagSlug) params.set('tag', tagSlug);

  const query = params.toString() ? `?${params.toString()}` : '';
  const res = await fetch(`${API_BASE}/posts/${query}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`getPosts failed: ${res.status}`);
  const data: WagtailListResponse<BlogPost> = await res.json();
  return data.items ?? [];
}

export async function getPost(id: number): Promise<BlogPostDetail | null> {
  const res = await fetch(`${API_BASE}/posts/${id}/`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`getPost failed: ${res.status}`);
  const post: BlogPostDetail = await res.json();
  return post;
}
