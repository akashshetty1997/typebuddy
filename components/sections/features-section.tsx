"use client";

import { useState, useEffect } from "react";
import { FeaturesData } from "@/types";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { SectionTransition } from "@/components/ui/section-transition";
import { SmoothButton } from "@/components/ui/smooth-button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Play, Pause, Zap, MousePointer, Settings } from "lucide-react";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeaturesSectionProps {
  data: FeaturesData;
}

const FeaturesSection = ({ data }: FeaturesSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentFeature = data.features[currentIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === data.features.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, data.features.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === data.features.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? data.features.length - 1 : prev - 1
    );
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <SectionTransition sectionId="features">
      <SectionWrapper className="py-16 lg:py-20 min-h-screen">
        <SectionHeader title={data.title} subtitle={data.subtitle} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Features Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Visual Section - Left Side */}
          <AnimatedContainer className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="aspect-[4/3] lg:aspect-square relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {/* Main Visual */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 p-3 lg:p-4">
                      <div className="w-full h-full bg-background rounded-xl shadow-xl overflow-hidden">
                        <motion.div
                          animate={{
                            scale: [1, 1.02, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="relative w-full h-full"
                        >
                          {/* Fixed aspect ratio container for consistent image sizing */}
                          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
                            {(currentFeature as any).image && (
                              <Image
                                src={(currentFeature as any).image}
                                alt={currentFeature.title}
                                fill
                                className="object-contain p-2 lg:p-4"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={currentIndex === 0}
                              />
                            )}
                          </div>
                        
                          {/* Overlay with title */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                            <div className="p-4 lg:p-6 text-white">
                              {/* Optional overlay content */}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Next Feature Preview - Bottom Right */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 w-16 h-16 lg:w-24 lg:h-24 rounded-lg overflow-hidden shadow-lg border-2 border-background bg-background"
                    >
                      <div className="relative w-full h-full bg-black">
                        {(data.features[(currentIndex + 1) % data.features.length] as any).image && (
                          <Image
                            src={(data.features[(currentIndex + 1) % data.features.length] as any).image}
                            alt={data.features[(currentIndex + 1) % data.features.length].title}
                            fill
                            className="object-contain p-1 opacity-60 rounded-md"
                            sizes="(max-width: 768px) 64px, 96px"
                          />
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </AnimatedContainer>

          {/* Feature Details - Right Side */}
          <div className="relative order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-background border rounded-xl p-6 lg:p-8 h-fit"
              >
                <div className="mb-6">
                  {/* Feature Icon based on title */}
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                    {currentFeature.id === 'reliability' && <Zap className="w-6 h-6 text-primary" />}
                    {currentFeature.id === 'privacy' && <MousePointer className="w-6 h-6 text-primary" />}
                    {currentFeature.id === 'simplicity' && <Settings className="w-6 h-6 text-primary" />}
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">
                    {currentFeature.title}
                  </h3>
                  <p className="text-base lg:text-lg text-muted-foreground mb-4">
                    {currentFeature.description}
                  </p>
                </div>

                {/* Dynamic feature highlights from details */}
                {currentFeature.details && (
                  <div className="space-y-3 mb-6">
                    {currentFeature.details.split('.').filter(point => point.trim()).map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">
                          {point.trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Navigation Controls */}
                <div className="flex items-center justify-between">
                  {/* Dots Indicator */}
                  <div className="flex gap-2">
                    {data.features.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={cn(
                          "transition-all duration-300",
                          index === currentIndex
                            ? "w-8 h-2 bg-primary rounded-full"
                            : "w-2 h-2 bg-muted-foreground/30 rounded-full hover:bg-muted-foreground/50"
                        )}
                        aria-label={`Go to feature ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Controls */}
                  <div className="flex gap-2">
                    {/* Autoplay Toggle */}
                    <SmoothButton
                      onClick={toggleAutoPlay}
                      variant="outline"
                      size="icon"
                      className={cn(
                        "rounded-full transition-colors",
                        isAutoPlaying 
                          ? "bg-primary/10 border-primary/30" 
                          : "hover:bg-secondary"
                      )}
                      aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
                    >
                      {isAutoPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </SmoothButton>

                    {/* Arrow Controls */}
                    <SmoothButton
                      onClick={handlePrev}
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </SmoothButton>
                    <SmoothButton
                      onClick={handleNext}
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </SmoothButton>
                  </div>
                </div>

                {/* Auto-play indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center"
                >
                  <p className="text-xs text-muted-foreground">
                    {isAutoPlaying ? "Auto-playing" : "Auto-play paused"}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Additional Features Grid */}
        <AnimatedContainer delay={0.4}>
          <div className="bg-secondary/30 rounded-2xl p-4 lg:p-6">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center">
              More Powerful Features
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {data.additionalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-background rounded-lg p-4 lg:p-6 border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <IconWrapper
                        icon={feature.icon}
                        className="text-primary"
                        size={18}
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold mb-1 text-sm lg:text-base">{feature.title}</h4>
                      <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContainer>

        {/* Feature Counter */}
        <AnimatedContainer delay={0.6} className="text-center mt-4 lg:mt-6">
          <p className="text-xs lg:text-sm text-muted-foreground">
            Feature {currentIndex + 1} of {data.features.length}
          </p>
        </AnimatedContainer>
      </div>
    </SectionWrapper>
    </SectionTransition>
  );
};

// Add explicit export
export { FeaturesSection };
