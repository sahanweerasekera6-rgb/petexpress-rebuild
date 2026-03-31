import { BlogPost, ServiceCategory, SubService, TeamMember, Testimonial } from "@/types";
import { mockBlogPosts, mockServices, mockTeam, mockTestimonials } from "@/data/mockData";

/**
 * Service Layer for fetching data.
 * Currently uses mock data, but easily swappable with a real database or external API.
 */

// --- SERVICES ---

export async function getServices(): Promise<ServiceCategory[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockServices;
}

export async function getServiceBySlug(slug: string): Promise<ServiceCategory | null> {
  const service = mockServices.find(s => s.slug === slug);
  return service || null;
}

export async function getSubService(categorySlug: string, subServiceSlug: string): Promise<SubService | null> {
  const category = await getServiceBySlug(categorySlug);
  if (!category) return null;
  
  const subService = category.subServices.find(ss => ss.slug === subServiceSlug);
  return subService || null;
}

// --- TESTIMONIALS ---

export async function getTestimonials(limit?: number): Promise<Testimonial[]> {
  if (limit) {
    return mockTestimonials.slice(0, limit);
  }
  return mockTestimonials;
}

// --- BLOG POSTS ---

export async function getBlogPosts(): Promise<BlogPost[]> {
  return mockBlogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return mockBlogPosts.find(post => post.slug === slug) || null;
}

// --- TEAM ---

export async function getTeamMembers(): Promise<TeamMember[]> {
  return mockTeam;
}
