"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
  isActive?: boolean;
  className?: string;
}

export const TestimonialCard = ({
  name,
  role,
  company,
  content,
  image,
  rating,
  isActive = true,
  className,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.9,
      }}
      transition={{ duration: 0.5 }}
      className={cn("w-full", className)}
    >
      <Card className="p-8 h-full">
        <div className="flex flex-col h-full">
          {/* Rating */}
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-lg mb-6 flex-grow">
            &ldquo;{content}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted">
              {image ? (
                <Image src={image} alt={name} fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-lg font-semibold">
                  {name[0]}
                </div>
              )}
            </div>
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">
                {role} at {company}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
