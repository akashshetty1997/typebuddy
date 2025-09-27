"use client";

import { HeroSection as HeroSectionType } from "@/types";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  AnimatedContainer,
  FadeIn,
  SlideIn,
} from "@/components/ui/animated-container";
import { SmoothButton } from "@/components/ui/smooth-button";
import { SectionTransition } from "@/components/ui/section-transition";
import { ArrowRight, Sparkles, Shield, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface HeroSectionProps {
  data: HeroSectionType;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 2;
      video.play().catch(() => {
        // Autoplay failed, which is expected in some browsers
        console.log("Autoplay prevented by browser");
      });
    }
  }, []);

  return (
    <SectionTransition sectionId="hero">
      <SectionWrapper className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/98 to-primary/2 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-20" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              <AnimatedContainer>
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/5 border border-primary/30 rounded-full mb-6 shadow-sm">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary tracking-wide">
                    Enterprise-Grade Text Expander
                  </span>
                </div>
              </AnimatedContainer>

              <SlideIn delay={0.1} direction="right">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                    {data.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                    {data.title.split(' ').slice(2).join(' ')}
                  </span>
                </h1>
              </SlideIn>

              <SlideIn delay={0.2} direction="right">
                <p className="text-xl md:text-2xl lg:text-3xl text-foreground/70 font-light leading-relaxed max-w-2xl">
                  {data.subtitle}
                </p>
              </SlideIn>

              <FadeIn delay={0.3}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
                  {data.description}
                </p>
              </FadeIn>

              <AnimatedContainer delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <SmoothButton
                  href={data.primaryButton.href}
                  size="lg"
                  external
                  className="group bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary/90 hover:to-primary/80 shadow-2xl hover:shadow-primary/25 text-lg px-10 py-5 font-semibold tracking-wide transform hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-primary-foreground">{data.primaryButton.text}</span>
                    <ArrowRight className="h-5 w-5 text-primary-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                </SmoothButton>

                <SmoothButton
                  href={data.secondaryButton.href}
                  variant="outline"
                  size="lg"
                  className="border-2 border-border/60 hover:border-primary/40 hover:bg-primary/5 text-lg px-10 py-5 font-medium tracking-wide backdrop-blur-sm"
                >
                  {data.secondaryButton.text}
                </SmoothButton>
              </AnimatedContainer>

              {/* Trust Indicators */}
              <AnimatedContainer delay={0.5}>
                <div className="pt-8 border-t border-border/30">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground/60 font-semibold mb-4">
                    Trusted by professionals worldwide
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-8">
                    <div className="flex items-center gap-2.5 px-4 py-2 bg-green-500/5 border border-green-500/20 rounded-lg">
                      <Shield className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="font-medium text-green-700 dark:text-green-300 text-sm">Enterprise Security</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-4 py-2 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                      <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium text-blue-700 dark:text-blue-300 text-sm">Lightning Fast</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-4 py-2 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                      <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="font-medium text-purple-700 dark:text-purple-300 text-sm">Developer Approved</span>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            </div>

            {/* Professional Visual Element */}
            <AnimatedContainer delay={0.6} className="relative flex justify-center lg:justify-end">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-lg lg:max-w-2xl"
              >
                <div className="relative">
                  {/* Enhanced Glow Effects */}
                  <div className="absolute -inset-12 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />
                  <div className="absolute -inset-6 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-2xl opacity-30" />
                  
                  {/* Professional Container */}
                  <div className="relative bg-gradient-to-br from-card/95 via-card to-card/90 backdrop-blur-xl rounded-3xl p-6 lg:p-10 shadow-2xl border border-border/40 hover:border-primary/30 transition-all duration-700">
                    <div className="aspect-[4/3] bg-gradient-to-br from-background/98 to-background/95 rounded-2xl shadow-inner border border-border/30 flex items-center justify-center relative overflow-hidden group">
                      
                      {/* Sophisticated Background */}
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3" />
                        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-2xl" />
                      </div>

                      {/* Professional Video Display */}
                      <motion.div
                        animate={{
                          scale: [1, 1.01, 1],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative w-full h-full flex items-center justify-center z-10 p-4"
                      >
                        <video
                          ref={videoRef}
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls={false}
                          preload="metadata"
                          className="w-full h-full object-contain rounded-xl drop-shadow-2xl"
                        >
                          <source src="/intro/intro.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </motion.div>

                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Professional Badge */}
                    <div className="mt-6 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-primary tracking-wide">Interactive Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedContainer>
          </div>


        </div>
      </SectionWrapper>
    </SectionTransition>
  );
};
