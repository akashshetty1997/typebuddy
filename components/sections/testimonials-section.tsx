"use client";

import { useState, useEffect } from "react";
import { TestimonialsData } from "@/types";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionTransition } from "@/components/ui/section-transition";
import { cn } from "@/lib/utils";

interface TestimonialsSectionProps {
  data: TestimonialsData;
}

export const TestimonialsSection = ({ data }: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === data.testimonials.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? data.testimonials.length - 1 : prevIndex - 1;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, paginate]);

  const currentTestimonial = data.testimonials[currentIndex];

  return (
    <SectionTransition sectionId="testimonials">
      <SectionWrapper className="overflow-hidden py-16 lg:py-20">
        <SectionHeader
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Testimonial Display */}
        <div className="relative min-h-[400px] md:min-h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full flex items-center justify-center px-20 py-4"
            >
              <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-3xl p-8 md:p-12 border shadow-lg w-full max-w-5xl mx-auto">
                {/* Large Quote Icon */}
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                
                {/* Testimonial Content with better handling for long text */}
                <div className="mb-8">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    &ldquo;{currentTestimonial.content.length > 200 ? 
                      `${currentTestimonial.content.substring(0, 200)}...` : 
                      currentTestimonial.content}&rdquo;
                  </p>
                  {currentTestimonial.content.length > 200 && (
                    <button className="text-primary text-sm mt-2 hover:underline">
                      Read more
                    </button>
                  )}
                </div>
                
                {/* Author Section */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {currentTestimonial.name[0]}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-lg truncate">{currentTestimonial.name}</p>
                      <p className="text-muted-foreground text-sm truncate">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-5 h-5",
                          i < currentTestimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Fixed positioning */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hover:scale-105 transition-transform"
            onClick={() => paginate(-1)}
          >
            <div className="p-3 rounded-full bg-background/90 border shadow-lg backdrop-blur-sm hover:bg-background hover:shadow-xl transition-all">
              <ChevronLeft className="w-6 h-6" />
            </div>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hover:scale-105 transition-transform"
            onClick={() => paginate(1)}
          >
            <div className="p-3 rounded-full bg-background/90 border shadow-lg backdrop-blur-sm hover:bg-background hover:shadow-xl transition-all">
              <ChevronRight className="w-6 h-6" />
            </div>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {data.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={cn(
                "transition-all duration-300",
                index === currentIndex
                  ? "w-8 h-2 bg-primary rounded-full"
                  : "w-2 h-2 bg-muted-foreground/30 rounded-full hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        {/* See More Reviews Link */}
        <div className="text-center mt-8">
          <a
            href="https://chromewebstore.google.com/detail/typebuddy/mkiefkcpamkfebmojokkmiahllpihfkl/reviews?hl=en-US"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 rounded-full text-primary font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Star className="w-4 h-4" />
            <span>See more reviews on Chrome Web Store</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
    </SectionTransition>
  );
};