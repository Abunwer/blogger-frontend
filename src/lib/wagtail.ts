const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v2';

// Types
export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  meta: {
    type: string;
    detail_url: string;
    html_url: string;
  };
  description?: string;
  featured_image?: {
    id: number;
    meta: {
      download_url: string;
    };
  };
  category?: Category;
  first_published_at?: string;
  body?: any;
}

interface WagtailResponse<T> {
  items: T[];
  meta?: {
    total_count?: number;
  };
}

// Fetch categories
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${API_BASE}/categories/`, {
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    const data: WagtailResponse<Category> = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Fetch all projects with optional category filter
export async function getProjects(categorySlug?: string): Promise<Project[]> {
  try {
    let url = `${API_BASE}/pages/?type=home.ProjectPage`;
    
    if (categorySlug) {
      url += `&category__slug=${categorySlug}`;
    }
    
    const response = await fetch(url, {
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    
    const data: WagtailResponse<Project> = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// Fetch single project by ID
export async function getProject(id: number): Promise<Project | null> {
  try {
    const response = await fetch(`${API_BASE}/pages/${id}/`, {
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch project');
    }
    
    const project: Project = await response.json();
    return project;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

// Fetch featured projects (latest 6)
export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE}/pages/?type=home.ProjectPage&limit=6`, {
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch featured projects');
    }
    
    const data: WagtailResponse<Project> = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}


