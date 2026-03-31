export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon: string;
  subServices: SubService[];
}

export interface SubService {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorLocation: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}
