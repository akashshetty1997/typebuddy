import {
  SiteContent,
  FeaturesData,
  TestimonialsData,
  ContactData,
  StatsData,
} from "@/types";

// Import JSON files
import siteContentData from "@/data/siteContent.json";
import featuresData from "@/data/features.json";
import testimonialsData from "@/data/testimonials.json";
import contactData from "@/data/contact.json";
import statsData from "@/data/stats.json";

// Type-safe data loaders
export const getSiteContent = (): SiteContent => {
  return siteContentData as SiteContent;
};

export const getFeatures = (): FeaturesData => {
  return featuresData as FeaturesData;
};

export const getTestimonials = (): TestimonialsData => {
  return testimonialsData as TestimonialsData;
};

export const getContact = (): ContactData => {
  return contactData as ContactData;
};

export const getStats = (): StatsData => {
  return statsData as StatsData;
};

// Get specific sections
export const getNavigation = () => getSiteContent().navigation;
export const getHeroContent = () => getSiteContent().hero;
export const getLogo = () => getSiteContent().logo;
export const getProblemSection = () => getSiteContent().problem;
export const getSolutionSection = () => getSiteContent().solution;

// Get testimonial by ID
export const getTestimonialById = (id: number) => {
  const { testimonials } = getTestimonials();
  return testimonials.find((t) => t.id === id);
};

// Get feature by ID
export const getFeatureById = (id: string) => {
  const { features, additionalFeatures } = getFeatures();
  return [...features, ...additionalFeatures].find((f) => f.id === id);
};
