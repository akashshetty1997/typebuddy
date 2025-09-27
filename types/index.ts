// Navigation Types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: string;
}

// Logo Types
export interface Logo {
  text: string;
  tagline: string;
}

// Button Types
export interface ButtonData {
  text: string;
  href: string;
}

// Hero Types
export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: ButtonData;
  secondaryButton: ButtonData;
}

// Problem & Solution Types
export interface ProblemSection {
  title: string;
  description: string;
}

export interface SolutionSection {
  title: string;
  subtitle: string;
}

// Site Content Types
export interface SiteContent {
  logo: Logo;
  navigation: NavigationItem[];
  hero: HeroSection;
  problem: ProblemSection;
  solution: SolutionSection;
}

// Feature Types
export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  details?: string;
  image?: string;
}

export interface FeaturesData {
  title: string;
  subtitle: string;
  features: Feature[];
  additionalFeatures: Feature[];
}

// Testimonial Types
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

// Contact Types
export interface EmailContact {
  label: string;
  value: string;
  href: string;
}

export interface SocialLink {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export interface SupportLink {
  label: string;
  href: string;
}

export interface ContactCTA {
  title: string;
  description: string;
  button: ButtonData;
}

// Team Member Type (comprehensive)
export interface TeamMember {
  id: string;
  name: string;
  email: string;
  linkedin: string;
  image?: string;
  role?: string;
  location?: string;
  tags?: string[];
}

// Update ContactData interface (simplified)
export interface ContactData {
  title: string;
  subtitle: string;
  team: {
    title: string;
    members: TeamMember[];
  };
  suggestions: {
    title: string;
    description: string;
    button: ButtonData;
  };
  support: {
    title: string;
    links: SupportLink[];
  };
  cta: ContactCTA;
}

// Stats Types
export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface StatsData {
  stats: Stat[];
}