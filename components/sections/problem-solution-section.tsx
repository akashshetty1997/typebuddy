"use client";

import { ProblemSection, SolutionSection } from "@/types";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { SectionTransition } from "@/components/ui/section-transition";
import { AlertCircle, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ProblemSolutionSectionProps {
  problem: ProblemSection;
  solution: SolutionSection;
}

export const ProblemSolutionSection = ({
  problem,
  solution,
}: ProblemSolutionSectionProps) => {
  const problemPoints = [
    "Complex, feature-bloated interfaces",
    "Privacy concerns with third-party servers",
    "Slow, unreliable sync across devices",
    "Steep learning curves and confusing UIs"
  ];

  const solutionBenefits = [
    "Clean, intuitive interface",
    "Local storage with Chrome sync",
    "Instant text expansion",
    "Zero learning curve"
  ];

  return (
    <SectionTransition sectionId="problem-solution">
      <SectionWrapper className="bg-gradient-to-br from-secondary/20 via-background to-primary/5 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedContainer delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                The Challenge & Our Solution
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Why existing text expanders fall short and how TypeBuddy changes the game
              </p>
            </div>
          </AnimatedContainer>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Problem Card */}
            <AnimatedContainer delay={0.2}>
              <div className="relative h-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-2xl blur-xl" />
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-destructive/20 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-2xl">
                      <AlertCircle className="w-8 h-8 text-destructive" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-destructive">{problem.title}</h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-destructive to-destructive/50 rounded-full mt-2" />
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {problem.description}
                  </p>

                  <div className="space-y-3">
                    {problemPoints.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-destructive rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground text-sm lg:text-base">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedContainer>

            {/* Solution Card */}
            <AnimatedContainer delay={0.3}>
              <div className="relative h-full">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl" />
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/20 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl">
                      <Lightbulb className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary">{solution.title}</h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-2" />
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {solution.subtitle}
                  </p>

                  <div className="space-y-3">
                    {solutionBenefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium text-sm lg:text-base">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </div>

          {/* Bottom CTA */}
          <AnimatedContainer delay={0.6}>
            <div className="text-center mt-16">
              <motion.a
                href="https://chromewebstore.google.com/detail/TypeBuddy/mkiefkcpamkfebmojokkmiahllpihfkl?hl=en-US"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span>Ready to experience the difference?</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </AnimatedContainer>
        </div>
      </SectionWrapper>
    </SectionTransition>
  );
};
