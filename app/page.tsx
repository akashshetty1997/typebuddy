import { MainLayout } from "@/components/layout/main-layout";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSolutionSection } from "@/components/sections/problem-solution-section";
import { FeaturesSection } from "@/components/sections/features-section";
// import { StatsSection } from "@/components/sections/stats-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import {
  getSiteContent,
  getFeatures,
  getTestimonials,
  getContact,
} from "@/lib/data-loader";

export default function Home() {
  // Load all data
  const siteContent = getSiteContent();
  const features = getFeatures();
  const testimonials = getTestimonials();
  const contact = getContact();

  return (
    <MainLayout logo={siteContent.logo} navigation={siteContent.navigation}>
      {/* Hero Section */}
      <HeroSection data={siteContent.hero} />

      {/* Problem & Solution */}
      <ProblemSolutionSection
        problem={siteContent.problem}
        solution={siteContent.solution}
      />

      {/* Stats */}
      {/* <StatsSection data={stats} /> */}

      {/* Features */}
      <FeaturesSection data={features} />

      {/* Testimonials */}
      <TestimonialsSection data={testimonials} />

      {/* Contact */}
      <ContactSection data={contact} />
    </MainLayout>
  );
}
