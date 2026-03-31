import { BlogPost, ServiceCategory, TeamMember, Testimonial } from "@/types";

export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    authorName: "Sarah Jenkins",
    authorLocation: "Moved to UK",
    content: "PetExpress was an absolute lifesaver when moving my Golden Retriever to London. The team handled every single piece of paperwork and kept me updated down to the final hour. Thank you for taking such good care of Max!",
    rating: 5,
  },
  {
    id: "2",
    authorName: "David Perera",
    authorLocation: "Relocated to Australia",
    content: "Moving pets to Australia is notoriously difficult with strict quarantine rules. PetExpress Sri Lanka made the entire process incredibly smooth and stress-free. I highly recommend their services.",
    rating: 5,
  },
  {
    id: "3",
    authorName: "Nadia R.",
    authorLocation: "Imported from Dubai",
    content: "Bringing my two cats from Dubai to Colombo was so easy. PetExpress managed the flight booking and customs clearance perfectly. I picked them up from the airport without any hassle.",
    rating: 5,
  }
];

export const mockServices: ServiceCategory[] = [
  {
    id: "s1",
    title: "Exporting Pets from Sri Lanka",
    slug: "export",
    shortDescription: "Complete door-to-door relocation services for pets leaving Sri Lanka to destinations worldwide.",
    icon: "PlaneTakeoff", // String identifier for lucide icon
    subServices: [
      {
        id: "ss1",
        title: "Relocation to UK",
        slug: "uk",
        categoryId: "s1",
        description: "Navigating DEFRA regulations and ensuring a safe journey to the United Kingdom.",
        features: ["Microchipping", "Rabies Vaccination", "Tapeworm Treatment", "Customs Clearance"],
        imageUrl: "/images/services/uk.jpg"
      },
      {
        id: "ss2",
        title: "Relocation to Australia",
        slug: "australia",
        categoryId: "s1",
        description: "Expert handling of strict DAFF regulations and quarantine reservations for Australian entry.",
        features: ["RNATT Declaration", "Quarantine Booking", "Export Permits"],
        imageUrl: "/images/services/aus.jpg"
      }
    ]
  },
  {
    id: "s2",
    title: "Importing Pets to Sri Lanka",
    slug: "import",
    shortDescription: "Hassle-free customs clearance and pet arrivals into Bandaranaike International Airport.",
    icon: "PlaneLanding",
    subServices: []
  },
  {
    id: "s3",
    title: "Travel Crates",
    slug: "crates",
    shortDescription: "IATA-compliant custom built travel crates ensuring comfort and safety during the flight.",
    icon: "Package",
    subServices: []
  },
  {
    id: "s4",
    title: "Veterinary Services",
    slug: "veterinary",
    shortDescription: "Health certificates, microchipping, and necessary vaccinations for international travel.",
    icon: "Stethoscope",
    subServices: []
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Understanding UK Pet Import Regulations for 2026",
    slug: "uk-pet-import-regulations-2026",
    excerpt: "Everything you need to know about preparing your pet for a move from Sri Lanka to the United Kingdom, including new DEFRA guidelines.",
    content: "<p>Moving to the UK with your pet requires careful planning...</p>",
    publishedAt: "2026-02-15T10:00:00Z",
    author: "Dr. Shanaka Perera",
    imageUrl: "/images/blog/uk-travel.jpg"
  },
  {
    id: "b2",
    title: "How to Measure Your Dog for an IATA Travel Crate",
    slug: "measure-dog-iata-crate",
    excerpt: "A step-by-step guide to ensuring your dog's travel crate is the perfect size for comfort and airline compliance.",
    content: "<p>Choosing the right crate size is the most critical part of pet travel...</p>",
    publishedAt: "2026-01-22T08:30:00Z",
    author: "PetExpress Team",
    imageUrl: "/images/blog/crate-measurement.jpg"
  }
];

export const mockTeam: TeamMember[] = [
  {
    id: "t1",
    name: "Shanaka Anslem Perera",
    role: "Founder & CEO",
    bio: "With over 15 years of logistics and pet relocation experience, Shanaka founded PetExpress to provide safe, stress-free travel for pets in Sri Lanka.",
    imageUrl: "/images/team/shanaka.jpg"
  },
  {
    id: "t2",
    name: "Dr. Amani Fernando",
    role: "Lead Veterinarian",
    bio: "Specializing in export health protocols, Dr. Amani ensures all our traveling pets are healthy and compliant with international regulations.",
    imageUrl: "/images/team/amani.jpg"
  }
];
